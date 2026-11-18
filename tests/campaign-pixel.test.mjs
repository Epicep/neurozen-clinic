import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { handler } from '../netlify/functions/submit-lead.mjs';

const source = readFileSync(new URL('../public/campaign-pixel.js', import.meta.url), 'utf8');
function storage(values = {}) {
  const data = new Map(Object.entries(values));
  return { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value), removeItem: key => data.delete(key) };
}
function run(path, consent, lead) {
  const elements = [];
  const localStorage = storage(consent ? { 'neurozen-marketing-consent': consent } : {});
  const sessionStorage = storage(lead ? { 'neurozen-confirmed-lead': JSON.stringify(lead) } : {});
  const document = {
    createElement(tag) {
      const buttons = [{}, {}];
      const element = { tag, setAttribute() {}, querySelectorAll: () => buttons, remove() {} };
      elements.push(element); return element;
    },
    head: { appendChild() {} }, body: { appendChild() {} },
    getElementsByTagName: () => [{ parentNode: { insertBefore() {} } }],
  };
  const listeners = {};
  const window = { location: { pathname: path }, localStorage, sessionStorage, addEventListener: (name, callback) => { listeners[name] = callback; } };
  const context = vm.createContext({ window, document, Date });
  vm.runInContext(source, context);
  return { window, elements, context, listeners, events: () => Array.from(window.fbq?.queue || []).filter(args => args[0] === 'trackSingle').map(args => args[2]) };
}

test('no tracking on medical pages or before consent', () => {
  assert.deepEqual(run('/mental-health/ocd/', 'granted').events(), []);
  assert.deepEqual(run('/landing/', 'denied').events(), []);
  const pending = run('/landing/');
  assert.deepEqual(pending.events(), []);
  pending.elements.find(el => el.tag === 'section').querySelectorAll()[0].onclick();
  assert.deepEqual(pending.events(), ['PageView']);
});
test('Lead requires fresh confirmation and cannot repeat on refresh', () => {
  assert.deepEqual(run('/thank-you.html', 'granted').events(), ['PageView']);
  assert.deepEqual(run('/thank-you.html', 'granted', { id: 'old', at: Date.now() - 31 * 60000 }).events(), ['PageView']);
  const confirmed = run('/thank-you.html', 'granted', { id: 'test-event', at: Date.now() });
  assert.deepEqual(confirmed.events(), ['PageView', 'Lead']);
  assert.equal(confirmed.window.sessionStorage.getItem('neurozen-confirmed-lead'), null);
  vm.runInContext(source, confirmed.context);
  assert.deepEqual(confirmed.events(), ['PageView', 'Lead']);
  assert.equal(confirmed.window.fbq.queue.some(args => args[0] === 'set' && args[1] === 'autoConfig' && args[2] === false), true);
});
test('consent can be revoked and granted again', () => {
  const result = run('/landing', 'granted');
  const toggle = result.elements.find(el => el.tag === 'button');
  toggle.onclick();
  result.elements.find(el => el.tag === 'section').querySelectorAll()[1].onclick();
  toggle.onclick();
  result.elements.filter(el => el.tag === 'section').at(-1).querySelectorAll()[0].onclick();
  assert.equal(result.window.fbq.queue.at(-1)[1], 'grant');
  assert.deepEqual(result.events(), ['PageView']);
});
test('confirmed submission counts immediately, once, without relying on redirect storage', () => {
  const result = run('/landing', 'granted');
  const event = { detail: { id: 'confirmation', at: Date.now() } };
  result.listeners['neurozen:lead-confirmed'](event);
  result.listeners['neurozen:lead-confirmed'](event);
  assert.deepEqual(result.events(), ['PageView', 'Lead']);
  const denied = run('/landing', 'denied');
  denied.listeners['neurozen:lead-confirmed'](event);
  assert.deepEqual(denied.events(), []);
});
test('form confirms only successful CRM responses', async () => {
  const original = globalThis.fetch;
  const event = { httpMethod: 'POST', body: 'fullName=Test&phone=0000000000&mainSymptom=Other' };
  try {
    globalThis.fetch = async () => Response.json({ ok: true });
    assert.equal((await handler(event)).statusCode, 200);
    globalThis.fetch = async () => Response.json({ ok: false });
    assert.equal((await handler(event)).statusCode, 502);
    globalThis.fetch = async () => { throw new Error('offline'); };
    assert.equal((await handler(event)).statusCode, 502);
    assert.equal((await handler({ ...event, body: 'fullName=Test' })).statusCode, 400);
    assert.equal((await handler({ ...event, body: event.body + '&website=bot' })).statusCode, 400);
  } finally { globalThis.fetch = original; }
});
