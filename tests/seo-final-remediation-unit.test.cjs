const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const test = require('node:test');
const { corrections, approvedDescriptions, approvedHomeFlow } = require('./seo-final-remediation-expectations.cjs');
const { getPageSeo } = require('../.next/phase-02-unit/lib/page-seo.js');
const checkpoint = '3e8e673f43df6f7f39fe3d64b340a5139520e754';
const previous = (file) => execFileSync('git', ['show', `${checkpoint}:${file}`], { encoding: 'utf8' }).replace(/\r\n/g, '\n');
const current = (file) => fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

test('exactly four hand-reviewed localized descriptions change; all other source and snapshot values stay intact', () => {
  for (const file of ['lib/page-seo.ts', 'tests/fixtures/seo-phase03-baseline.json']) assert.equal(current(file), approvedDescriptions(previous(file)));
  for (const correction of corrections) {
    const [, locale, route] = correction.route.split('/');
    assert.equal(getPageSeo(locale, route).description, correction.after);
    assert.doesNotMatch(correction.after, /will follow up|will contact|Send INAYA|يتابع الفريق|يتواصل الفريق|أرسل إلى/);
    assert.match(correction.after, locale === 'en' ? /checks details locally only/ : /البيانات محلياً فقط/);
    assert.match(correction.after, locale === 'en' ? /phone or WhatsApp/ : /بالهاتف أو واتساب/);
  }
});
test('carousel test additions preserve every original assertion and protected production/measurement sources', () => {
  assert.equal(current('tests/e2e/home.spec.ts'), approvedHomeFlow(previous('tests/e2e/home.spec.ts')));
  for (const file of ['components/SierraLeoneOfferControls.tsx', 'components/SierraLeoneOfferControls.module.css', 'components/HomeGoogleReviews.tsx', 'components/HomeGoogleReviewsShowcase.tsx', 'components/Measurement.tsx', 'lib/measurement.ts', 'app/[locale]/layout.tsx', 'components/BookingForm.tsx', 'components/CareersForm.tsx', 'components/ContactForm.tsx']) assert.equal(current(file), previous(file), file);
});
