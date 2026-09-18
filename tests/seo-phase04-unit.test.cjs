const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const test = require('node:test');
const { approvedDescriptions, approvedHomeFlow } = require('./seo-final-remediation-expectations.cjs');
const { buyerAnswers } = require('../.next/phase-02-unit/lib/buyer-answers.js');
const { getPageSeo } = require('../.next/phase-02-unit/lib/page-seo.js');
const checkpoint = '0d4a804dd3c8c502e984ddb8ebfa68ed2e353617';
const previous = (file) => execFileSync('git', ['show', `${checkpoint}:${file}`], { encoding: 'utf8' }).replace(/\r\n/g, '\n');
const current = (file) => fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

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

test('protected popup differs only in two approved localized copy replacements', () => {
  const file = 'components/SierraLeoneOfferControls.tsx';
  assert.equal(current(file), previous(file).replace("'Available Profiles'", "'Candidate Profiles'").replace("'ملفات متاحة'", "'ملفات المرشحات'"));
  for (const file of ['components/SierraLeoneOfferControls.module.css', 'components/HomeGoogleReviews.tsx', 'components/HomeGoogleReviewsShowcase.tsx']) {
    assert.equal(current(file), previous(file), `${file}: protected behavior/test`);
  }
  assert.equal(current('tests/e2e/home.spec.ts'), approvedHomeFlow(previous('tests/e2e/home.spec.ts')), 'only the approved modal setup is added; all original carousel assertions remain');
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

test('local-only forms have accurate completion copy and unchanged booking/careers logic', () => {
  for (const locale of ['en', 'ar']) {
    const messages = JSON.parse(current(`messages/${locale}.json`));
    for (const key of ['booking', 'contact', 'careers']) {
      assert.match(messages[key].success, locale === 'en' ? /not sent|has not sent/ : /لم ترسل|لم يرسل/);
      assert.doesNotMatch(messages[key].success, /has been received|has been sent|تم استلام|تم إرسال/);
    }
  }
  for (const file of ['components/BookingForm.tsx', 'components/CareersForm.tsx']) assert.equal(current(file), previous(file));
});
