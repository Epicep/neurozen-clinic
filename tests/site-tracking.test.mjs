import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../public/site-preferences.js', import.meta.url), 'utf8');
function storage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key) };
}
function run(path, consent = {}, confirmed = null) {
  const nodes = [], listeners = {}, documentListeners = {};
  const localStorage = storage(consent);
  const sessionStorage = storage(confirmed ? { 'neurozen-confirmed-lead': JSON.stringify(confirmed) } : {});
  const location = { pathname: path, href: 'https://neurozen-clinic.com' + path + '?private=phone123&utm_source=chatgpt', reload() {} };
  const document = {
    title: 'NeuroZen',
    addEventListener: (name, callback) => { documentListeners[name] = callback; },
    head: { appendChild(node) { nodes.push(node); } },
    body: { appendChild(node) { nodes.push(node); } },
    createElement(tag) {
      const inputs = { analytics: { checked: false }, meta: { checked: false } };
      const buttons = [{}, {}, {}, {}];
      const custom = { hidden: true };
      return { tag, inputs, buttons, custom, setAttribute() {}, remove() {},
        querySelector: selector => selector === '.nz-consent-custom' ? custom : inputs[selector.match(/name="(.*?)"/)[1]],
        querySelectorAll: () => buttons };
    },
    getElementsByTagName: () => [{ parentNode: { insertBefore(node) { nodes.push(node); } } }],
  };
  const context = { document, location, localStorage, sessionStorage, URL, Date,
    addEventListener: (name, callback) => { listeners[name] = callback; } };
  context.window = context;
  vm.runInNewContext(source, context);
  const gaEvents = () => Array.from(context.dataLayer || []).filter(call => call[0] === 'event').map(call => [call[1], call[2]]);
  const metaEvents = () => Array.from(context.fbq?.queue || []).filter(call => call[0] === 'trackSingle').map(call => call[2]);
  return { context, nodes, listeners, documentListeners, gaEvents, metaEvents, localStorage, sessionStorage,
    panel: nodes.find(node => node.tag === 'section') };
}

test('one-click consent choices keep measurement opt-in', () => {
  const accepted = run('/landing/');
  accepted.panel.buttons[0].onclick();
  assert.equal(accepted.localStorage.getItem('neurozen-analytics-consent'), 'granted');
  assert.equal(accepted.localStorage.getItem('neurozen-marketing-consent'), 'granted');
  assert.deepEqual(accepted.gaEvents().map(event => event[0]), ['page_view']);
  assert.deepEqual(accepted.metaEvents(), ['PageView']);

  const declined = run('/landing/');
  declined.panel.buttons[1].onclick();
  assert.equal(declined.localStorage.getItem('neurozen-analytics-consent'), 'denied');
  assert.equal(declined.localStorage.getItem('neurozen-marketing-consent'), 'denied');
  assert.deepEqual(declined.gaEvents(), []);
  assert.deepEqual(declined.metaEvents(), []);

  const custom = run('/landing/');
  custom.panel.buttons[2].onclick();
  assert.equal(custom.panel.custom.hidden, false);
  custom.panel.inputs.analytics.checked = true;
  custom.panel.buttons[3].onclick();
  assert.equal(custom.localStorage.getItem('neurozen-analytics-consent'), 'granted');
  assert.equal(custom.localStorage.getItem('neurozen-marketing-consent'), 'denied');
});

test('no analytics or Meta script loads before consent', () => {
  const result = run('/landing/');
  assert.equal(result.nodes.some(node => node.src?.includes('googletagmanager.com')), false);
  assert.equal(result.nodes.some(node => node.src?.includes('facebook.net')), false);
  assert.deepEqual(result.gaEvents(), []);
  assert.deepEqual(result.metaEvents(), []);
});

test('analytics measures a sanitized page and only confirmed leads', () => {
  const result = run('/landing/', { 'neurozen-analytics-consent': 'granted', 'neurozen-marketing-consent': 'denied' });
  assert.equal(result.gaEvents()[0][0], 'page_view');
  assert.match(result.gaEvents()[0][1].page_location, /utm_source=chatgpt/);
  assert.doesNotMatch(result.gaEvents()[0][1].page_location, /private|phone123/);
  result.listeners['neurozen:lead-confirmed']({ detail: { id: 'one', at: Date.now() } });
  result.listeners['neurozen:lead-confirmed']({ detail: { id: 'one', at: Date.now() } });
  assert.deepEqual(result.gaEvents().map(event => event[0]), ['page_view', 'generate_lead']);
  assert.deepEqual(result.metaEvents(), []);
});

test('confirmed redirect fires one lead for each consented service', () => {
  const confirmed = { id: 'two', at: Date.now() };
  const result = run('/thank-you.html', { 'neurozen-analytics-consent': 'granted', 'neurozen-marketing-consent': 'granted' }, confirmed);
  assert.deepEqual(result.gaEvents().map(event => event[0]), ['page_view', 'generate_lead']);
  assert.deepEqual(result.metaEvents(), ['PageView', 'Lead']);
  assert.equal(result.sessionStorage.getItem('neurozen-confirmed-lead'), null);
});

test('a direct thank-you visit does not count as a lead', () => {
  const result = run('/thank-you.html', { 'neurozen-analytics-consent': 'granted', 'neurozen-marketing-consent': 'granted' });
  assert.deepEqual(result.gaEvents().map(event => event[0]), ['page_view']);
  assert.deepEqual(result.metaEvents(), ['PageView']);
});

test('contact links are measured separately from confirmed leads', () => {
  const consent = { 'neurozen-analytics-consent': 'granted', 'neurozen-marketing-consent': 'denied' };
  const result = run('/', consent);
  result.documentListeners.click({ target: { closest: () => ({ getAttribute: () => 'https://wa.me/972548082487' }) } });
  result.documentListeners.click({ target: { closest: () => ({ getAttribute: () => 'tel:0548082487' }) } });
  assert.deepEqual(result.gaEvents().map(event => event[0]), ['page_view', 'contact_click', 'contact_click']);
  assert.deepEqual(result.gaEvents().slice(1).map(event => event[1].contact_method), ['whatsapp', 'phone']);
  const denied = run('/', { 'neurozen-analytics-consent': 'denied' });
  denied.documentListeners.click({ target: { closest: () => ({ getAttribute: () => 'tel:0548082487' }) } });
  assert.deepEqual(denied.gaEvents(), []);
});
