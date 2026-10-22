import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

// Exercise the actual pure TypeScript helper without a second compiled artifact.
const source = readFileSync(new URL('../lib/form-delivery-measurement.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext },
}).outputText;
const { createAcceptedFormMeasurement, isAcceptedFormDelivery } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const requestId = 'synthetic-request-00000001';
const receipt = { ok: true, reference: 'INAYA-20261022-200000-ABC123' };

function setup(consent = true, sendEvent) {
  const sent = [];
  const state = { consent };
  const record = createAcceptedFormMeasurement({
    hasConsent: () => state.consent,
    sendEvent: sendEvent ?? ((event, parameters) => sent.push({ event, parameters })),
  });
  return { state, record, sent };
}

test('only successful HTTP responses with explicit acceptance and a valid nonempty reference qualify', () => {
  assert.equal(isAcceptedFormDelivery(true, receipt), true);
  for (const result of [null, undefined, [], {}, { ok: 'true', reference: receipt.reference },
    { ok: false, reference: receipt.reference }, { ok: true }, { ok: true, reference: '' },
    { ok: true, reference: ' ' }, { ok: true, reference: 'private@example.test' },
    { ok: true, reference: 'INAYA-ABC\n' }, { ok: true, reference: `INAYA-${'A'.repeat(81)}` }]) {
    assert.equal(isAcceptedFormDelivery(true, result), false);
  }
  assert.equal(isAcceptedFormDelivery(false, receipt), false);
});

test('both languages distinguish accepted customer leads from career enquiries', () => {
  for (const language of ['en', 'ar']) {
    for (const kind of ['contact', 'booking', 'careers']) {
      const { record, sent } = setup();
      assert.equal(record(kind, language, requestId, true, receipt), true);
      assert.deepEqual(sent, [{
        event: kind === 'careers' ? 'career_enquiry_submitted' : 'generate_lead',
        parameters: { form_id: kind, language, page_location: `https://inayadomestic.ae/${language}/${kind}/`, page_referrer: '' },
      }]);
    }
  }
});

test('denied acceptance is never replayed after a later grant, including response retries', () => {
  const { record, state, sent } = setup(false);
  assert.equal(record('contact', 'en', requestId, true, receipt), false);
  state.consent = true;
  assert.equal(record('contact', 'en', requestId, true, receipt), false);
  assert.deepEqual(sent, []);
  assert.equal(record('contact', 'en', 'synthetic-request-00000002', true, receipt), true);
  assert.equal(sent.length, 1);
});

test('consent is read at acceptance, so a grant or withdrawal during delivery is respected', () => {
  const { record, state, sent } = setup(false);
  state.consent = true;
  assert.equal(record('booking', 'ar', requestId, true, receipt), true);
  state.consent = false;
  assert.equal(record('booking', 'ar', 'synthetic-request-00000002', true, receipt), false);
  assert.equal(sent.length, 1);
});

test('accepted retry deduplication is per request; an initially failed request can later succeed', () => {
  const { record, sent } = setup();
  assert.equal(record('contact', 'en', requestId, false, receipt), false);
  assert.equal(record('contact', 'en', requestId, true, { ok: false }), false);
  assert.equal(record('contact', 'en', requestId, true, receipt), true);
  assert.equal(record('contact', 'en', requestId, true, receipt), false);
  assert.equal(record('contact', 'en', 'synthetic-request-00000002', true, receipt), true);
  assert.equal(sent.length, 2);
});

test('unknown kinds, languages and malformed private request IDs cannot emit', () => {
  const { record, sent } = setup();
  for (const kind of [null, '', 'lead', 'private@example.test']) assert.equal(record(kind, 'en', requestId, true, receipt), false);
  for (const language of [null, '', 'EN', 'private']) assert.equal(record('contact', language, requestId, true, receipt), false);
  for (const id of [null, '', 'short', 'private@example.test']) assert.equal(record('contact', 'en', id, true, receipt), false);
  assert.deepEqual(sent, []);
});

test('only constant allowlisted parameters leave the helper, with no receipt, ID or form data', () => {
  const { record, sent } = setup();
  const enriched = { ...receipt, name: 'Private Person', email: 'private@example.test', phone: '+971500001234',
    fields: { message: 'private-message', service: 'private-service' }, page_location: 'https://example.test/?private=secret#secret' };
  record('booking', 'ar', requestId, true, enriched);
  assert.deepEqual(Object.keys(sent[0].parameters).sort(), ['form_id', 'language', 'page_location', 'page_referrer']);
  assert.doesNotMatch(JSON.stringify(sent), /Private|private|secret|synthetic|ABC123|971500001234|\?|#/);
});

test('vendor or consent failures cannot throw or remeasure an accepted request', () => {
  let attempts = 0;
  const { record } = setup(true, () => { attempts++; throw new Error('Vendor blocked'); });
  assert.equal(record('contact', 'en', requestId, true, receipt), false);
  assert.equal(record('contact', 'en', requestId, true, receipt), false);
  assert.equal(attempts, 1);
  const unavailable = createAcceptedFormMeasurement({ hasConsent: () => { throw new Error('Unavailable'); }, sendEvent: () => assert.fail('must not send') });
  assert.equal(unavailable('careers', 'ar', requestId, true, receipt), false);
});
