const assert = require('node:assert/strict');
const { approvedSeoFixes } = require('./seo-october-fixes-expectations.cjs');
const { approvedGlobalLocale } = require('./global-locale-source-expectations.cjs');
const { assertFormPreserved } = require('./form-accessibility-preservation.cjs');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const test = require('node:test');
const { approvedDescriptions, approvedHomeFlow } = require('./seo-final-remediation-expectations.cjs');
const { buyerAnswers } = require('../.next/phase-02-unit/lib/buyer-answers.js');
const { getPageSeo } = require('../.next/phase-02-unit/lib/page-seo.js');
const checkpoint = '0d4a804dd3c8c502e984ddb8ebfa68ed2e353617';
const { beforeAhrefsSource } = require('./ahrefs-expectations.cjs');
const previous = (file) => execFileSync('git', ['show', `${checkpoint}:${file}`], { encoding: 'utf8' }).replace(/\r\n/g, '\n');
const current = (file) => beforeAhrefsSource(file, fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n'));

test('buyer answers have unique paired questions, contextual answers and real localized destinations', () => {
  assert.equal(Object.keys(buyerAnswers).length, 8);
  for (const locale of ['en', 'ar']) {
    const questions = new Set();
    for (const [route, item] of Object.entries(buyerAnswers)) {
      assert.ok(getPageSeo(locale, route));
      assert.ok(getPageSeo(locale, item.detailRoute));
      assert.ok(item.answer[locale].length > 70);
      assert.ok(!questions.has(item.question[locale]));
      questions.add(item.question[locale]);
      assert.doesNotMatch(item.answer[locale], /No\.\s*1|best agency|licensed|government approved|\d+%|\d+ years/i);
    }
  }
});

test('protected popup differs only in two approved copy replacements and its exact localized logo description', () => {
  const file = 'components/SierraLeoneOfferControls.tsx';
  assert.equal(current(file), approvedGlobalLocale(file, previous(file).replace("'Available Profiles'", "'Candidate Profiles'").replace("'ملفات متاحة'", "'ملفات المرشحات'")));
  for (const file of ['components/SierraLeoneOfferControls.module.css', 'components/HomeGoogleReviews.tsx', 'components/HomeGoogleReviewsShowcase.tsx']) {
    assert.equal(current(file), approvedSeoFixes(file, previous(file)), `${file}: protected behavior/test`);
  }
  assert.equal(current('tests/e2e/home.spec.ts'), approvedSeoFixes('tests/e2e/home.spec.ts', approvedHomeFlow(previous('tests/e2e/home.spec.ts'))), 'approved modal setup and descriptive H1; all original carousel assertions remain');
});

test('Phase 4 snapshot exceptions remain precisely four titles and two descriptions after approved final corrections', () => {
  const file = 'tests/fixtures/seo-phase03-baseline.json';
  const before = JSON.parse(approvedDescriptions(previous(file)));
  const after = JSON.parse(current(file));
  const expected = {
    'https://inayadomestic.ae/en/inaya-advantages/': ['title'],
    'https://inayadomestic.ae/ar/inaya-advantages/': ['title'],
    'https://inayadomestic.ae/en/services/background-verification/': ['title'],
    'https://inayadomestic.ae/ar/services/background-verification/': ['title'],
    'https://inayadomestic.ae/en/services/experienced-maid/': ['description'],
    'https://inayadomestic.ae/ar/services/experienced-maid/': ['description']
  };
  for (let i = 0; i < before.pages.length; i++) {
    const a = before.pages[i], b = after.pages[i];
    const keys = Object.keys(a).filter((key) => JSON.stringify(a[key]) !== JSON.stringify(b[key]));
    assert.deepEqual(keys, expected[a.url] || [], a.url);
  }
  assert.deepEqual({ ...after, pages: [] }, { ...before, pages: [] });
});

test('delivered forms have accurate completion copy and unchanged local validation', () => {
  for (const locale of ['en', 'ar']) {
    const messages = JSON.parse(current(`messages/${locale}.json`));
    for (const key of ['booking', 'contact', 'careers']) {
      assert.match(messages[key].success, locale === 'en' ? /submitted to INAYA for review/ : /تم إرسال استفسارك إلى عناية للمراجعة/);
      assert.match(messages[key].success, locale === 'en' ? /does not confirm a booking, job or interview/ : /لا يؤكد هذا الإرسال حجزاً أو وظيفة أو مقابلة/);
    }
  }
  for (const file of ['components/BookingForm.tsx', 'components/CareersForm.tsx']) assertFormPreserved(current(file), previous(file), file);
});
