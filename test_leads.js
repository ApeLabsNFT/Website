const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const analytics = fs.readFileSync('site-analytics.js', 'utf8');

function analyticsHarness(hostname = 'physiobyrutvi.in') {
  const handlers = {}, scripts = [];
  const window = { location: { hostname, origin: `https://${hostname}` }, setTimeout() {} };
  const document = { addEventListener(name, fn) { handlers[name] = fn; }, createElement() { return {}; }, head: { appendChild(script) { scripts.push(script); } } };
  const context = vm.createContext({ window, document, URL });
  vm.runInContext(analytics, context);
  return {
    window, scripts,
    rerun() { vm.runInContext(analytics, context); },
    click(href, placement = 'hero') {
      const link = { href, closest(selector) { return selector === '[data-lead-location]' ? { dataset: { leadLocation: placement } } : null; } };
      handlers.click?.({ target: { closest() { return link; } } });
    },
    events() { return Array.from(window.dataLayer || []).filter(item => item[0] === 'event').map(item => Array.from(item)); }
  };
}

const production = analyticsHarness();
production.rerun();
production.click('https://wa.me/918879475065?text=PRIVATE_TEST_DRAFT', 'enquiry');
production.click('tel:+918879475065', 'mobile_bar');
production.click('https://calendly.com/gandhirutvi13/30min');
assert.deepEqual(production.events().map(event => event[1]), ['click_whatsapp', 'click_call', 'click_calendly']);
assert.equal(production.events()[0][2].cta_location, 'enquiry');
assert.equal(production.events()[2][2].event_label, 'free_15_minute_consultation');
assert.equal(production.scripts.length, 1, 'Only one Google script loads across early clicks');
assert(!JSON.stringify(production.window.dataLayer).includes('PRIVATE_TEST_DRAFT'));
production.click('https://example.com/?next=wa.me');
production.click('https://wa.me.example.com/');
assert.equal(production.events().length, 3, 'Unrelated destinations cannot be counted as contact intent');
const local = analyticsHarness('127.0.0.1');
local.click('tel:+918879475065');
assert.equal(local.events().length, 0);
assert.equal(local.scripts.length, 0);

// Execute the actual draft builder with a minimal DOM, including optional/default values.
const area = { value: '', addEventListener(_, fn) { this.change = fn; } };
const time = { value: '', addEventListener(_, fn) { this.change = fn; } };
const link = {};
const fields = { hidden: true };
const builder = { querySelector(selector) { return ({ '[data-enquiry-area]': area, '[data-enquiry-time]': time, '[data-enquiry-link]': link, '[data-enquiry-fields]': fields })[selector]; } };
const siteHandlers = {};
const document = {
  documentElement: { classList: { add() {} }, scrollHeight: 1000 },
  addEventListener(name, fn) { siteHandlers[name] = fn; },
  querySelectorAll(selector) { return selector === '[data-enquiry-builder]' ? [builder] : []; },
  querySelector() { return null; }, getElementById() { return null; }
};
vm.runInNewContext(fs.readFileSync('assets/js/site.js', 'utf8'), { document, window: {}, matchMedia() { return { matches: true }; }, addEventListener() {}, innerHeight: 800, scrollY: 0 });
siteHandlers.DOMContentLoaded();
assert.equal(fields.hidden, false);
assert.equal(new URL(link.href).hostname, 'wa.me');
assert(!new URL(link.href).searchParams.get('text').includes('undefined'));
area.value = 'Borivali'; time.value = 'Evening'; time.change();
const draft = new URL(link.href).searchParams.get('text');
assert(draft.includes('My area: Borivali.') && draft.includes('Preferred time: Evening.'));
assert(draft.includes('visit fee and availability'));
area.value = ''; time.value = ''; area.change();
assert(!new URL(link.href).searchParams.get('text').includes('Borivali'));

for (const file of ['index.html', 'contact/index.html']) {
  const html = fs.readFileSync(file, 'utf8');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${file}: one H1`);
  assert(html.includes('data-enquiry-fields hidden'), 'No-JS visitors retain a usable direct enquiry link');
  assert(html.includes('data-enquiry-link href="https://wa.me/918879475065?text='));
  assert(html.includes('class="pbr-voice-panel" aria-label="Voice assistant" hidden'));
  assert(!html.includes('id="heroTrack"'), 'Contact actions must not rotate out of view');
}
assert.equal(fs.readFileSync('site-analytics.min.js', 'utf8'), analytics);
console.log('PASS: contact draft, optional inputs, event channels, attribution, no draft logging, local exclusion and render fallbacks.');
