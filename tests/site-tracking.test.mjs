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
  const nodes = [], listeners = {};
  const localStorage = storage(consent);
  const sessionStorage = storage(confirmed ? { 'neurozen-confirmed-lead': JSON.stringify(confirmed) } : {});
  const location = { pathname: path, href: 'https://neurozen-clinic.com' + path + '?private=phone123&utm_source=chatgpt', reload() {} };
  const document = {
    title: 'NeuroZen',
    head: { appendChild(node) { nodes.push(node); } },
    body: { appendChild(node) { nodes.push(node); } },
    createElement(tag) {
      const inputs = { analytics: { checked: false }, meta: { checked: false } };
      const buttons = [{}, {}];
      return { tag, inputs, buttons, setAttribute() {}, remove() {},
        querySelector: selector => inputs[selector.match(/name="(.*?)"/)[1]],
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
  return { context, nodes, listeners, gaEvents, metaEvents, localStorage, sessionStorage };
}

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
