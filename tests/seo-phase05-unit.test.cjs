const assert = require('node:assert/strict');
const test = require('node:test');
const { createMeasurement, measurementEvents } = require('../.next/phase-02-unit/lib/measurement.js');
const paths = ['/en/', '/ar/', '/en/contact/', '/en/services/live-in-maid/'];
function setup(enabled = true) {
  const sent = [];
  const controller = createMeasurement({ enabled, paths, origin: 'https://inayadomestic.ae', sink: (p) => sent.push(p) });
  return { controller, sent };
}
test('event dictionary deliberately excludes unconfirmed form success', () => {
  assert.deepEqual(measurementEvents, ['page_view', 'contact_cta', 'phone_click', 'whatsapp_click', 'form_start', 'language_switch', 'service_enquiry']);
});
test('disabled/default-denied/withdrawn consent never emits or replays interactions', () => {
  const disabled = setup(false); disabled.controller.setConsent(true);
  assert.equal(disabled.controller.emit('page_view', '/en/'), false);
  assert.equal(disabled.sent.length, 0);
  const { controller, sent } = setup();
  assert.equal(controller.emit('phone_click', '/en/', {}), false);
  controller.setConsent(true);
  assert.equal(sent.length, 0);
  controller.emit('page_view', '/en/'); controller.setConsent(false);
  assert.equal(controller.emit('phone_click', '/en/', {}), false);
  assert.equal(sent.length, 1);
});
test('payloads are allowlisted, canonical, localized and never contain query/hash/free text', () => {
  const { controller, sent } = setup(); controller.setConsent(true);
  for (const event of measurementEvents) controller.emit(event, '/en/contact/?email=private@example.test#message', {}, 'contact', 'ar');
  assert.equal(sent.length, 7);
  for (const payload of sent) {
    assert.equal(payload.page_location, 'https://inayadomestic.ae/en/contact/');
    assert.equal(payload.language, 'en');
    assert.equal(payload.page_type, 'information');
    assert.doesNotMatch(JSON.stringify(payload), /private|email|message|@|\?|#/);
    assert.ok(Object.keys(payload).every((key) => ['event', 'page_location', 'language', 'page_type', 'form_id', 'target_language'].includes(key)));
  }
  assert.equal(controller.emit('form_success', '/en/'), false);
  assert.equal(controller.emit('phone_click', '/en/private@example.test/'), false);
  assert.equal(controller.emit('form_start', '/en/', {}, 'private'), false);
  assert.equal(controller.emit('language_switch', '/en/', {}, undefined, 'private'), false);
});
test('duplicate native interactions/forms/page views are suppressed; genuine new visits remain countable', () => {
  const { controller, sent } = setup(); controller.setConsent(true);
  const token = {}, form = {};
  assert.equal(controller.emit('phone_click', '/en/', token), true);
  assert.equal(controller.emit('phone_click', '/en/', token), false);
  assert.equal(controller.emit('phone_click', '/en/', {}), true);
  assert.equal(controller.emit('form_start', '/en/contact/', form, 'contact'), true);
  assert.equal(controller.emit('form_start', '/en/contact/', form, 'contact'), false);
  assert.equal(controller.emit('page_view', '/en/'), true);
  assert.equal(controller.emit('page_view', '/en/?tracking=value'), false);
  assert.equal(controller.emit('page_view', '/ar/'), true);
  assert.equal(controller.emit('page_view', '/en/'), true);
  assert.equal(sent.length, 6);
});
