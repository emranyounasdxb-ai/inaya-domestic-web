import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { auditExport, origin, attrs, text } from '../scripts/seo-content-audit.mjs';

test('Phase 3 preserves all route identities, reduces measured repetition and removes all orphans', async () => {
  const correctedCareMetadata = {
    en: { title: 'Non-clinical Home Support in UAE for Daily Routines | INAYA', description: 'Discuss non-clinical home support with INAYA for daily routines, practical household help and companionship in the UAE. Medical and nursing care are not included.' },
    ar: { title: 'دعم منزلي غير طبي للروتين اليومي في الإمارات | عناية', description: 'ناقش مع عناية الدعم المنزلي غير الطبي للروتين اليومي والمساعدة العملية والمرافقة في الإمارات. لا تشمل الخدمة العلاج الطبي أو التمريض.' }
  };
  const baseline = JSON.parse(await readFile('tests/fixtures/seo-phase03-baseline.json', 'utf8'));
  // Only the visa scope correction and the user-confirmed monthly price explanation
  // change these historical values. Every other metadata and price guard stays exact.
  const visaDescriptions = {
    en: 'Ask INAYA about a maid visa enquiry in the UAE. Confirm the support available for your case, applicable requirements and fees before agreeing a next step.',
    ar: 'استفسر عن تأشيرة الخادمة في الإمارات مع عناية. تواصل لتأكيد الدعم المتاح لحالتك والمتطلبات والرسوم قبل الاتفاق على أي خطوة.'
  };
  const visaTitles = {
    en: 'Maid Visa Enquiries in UAE | INAYA',
    ar: 'استفسارات تأشيرة الخادمة في الإمارات | عناية'
  };
  const pricingMentions = {
    en: [...Array(6).fill('AED 1,500'), ...Array(6).fill('AED 2,500')],
    ar: [...Array(5).fill('1,500 درهم'), ...Array(5).fill('2,500 درهم'), 'AED 1,500', 'AED 2,500']
  };
  const current = await auditExport();
  assert.equal(current.pages.length, 146);
  assert.deepEqual(current.pages.slice(0, 140).map((p) => p.url), baseline.pages.map((p) => p.url));
  assert.deepEqual(current.orphans, []);
  for (const locale of ['en', 'ar']) {
    assert.equal(current.linkCoverage[locale].reachable, 73);
    assert.ok(current.linkCoverage[locale].minimumOtherPageInbound > 0);
  }
  assert.ok(current.repeatedTokens < baseline.repeatedTokens);
  assert.ok(current.repeatedParagraphs < baseline.repeatedParagraphs);
  assert.ok(current.nearPairs.length < baseline.nearPairs);
  for (const page of current.pages.slice(0, 140)) {
    const before = baseline.pages.find((p) => p.url === page.url);
    const correctedCare = page.route === 'services/patient-care' ? correctedCareMetadata[page.locale] : undefined;
    assert.equal(page.title, page.route === 'services/maid-visa' ? visaTitles[page.locale] : correctedCare?.title ?? before.title, page.url);
    if (page.route !== 'blog') assert.equal(page.description, page.route === 'services/maid-visa' ? visaDescriptions[page.locale] : correctedCare?.description ?? before.description, page.url);
    else assert.match(page.description, page.locale === 'en' ? /bilingual INAYA guides/ : /أدلة عناية/);
    assert.deepEqual(page.schemaIds, before.schemaIds, `${page.url}: schema IDs`);
    const expectedPrices = page.route === 'pricing' ? pricingMentions[page.locale]
      : page.route === 'services/monthly-maid-contract' ? page.locale === 'en' ? ['AED 1,500', 'AED 2,500'] : ['1,500 درهم', '2,500 درهم']
      : before.prices;
    assert.deepEqual(page.prices, expectedPrices, `${page.url}: displayed prices`);
    const file = await readFile(path.join('out', new URL(page.url).pathname.slice(1), 'index.html'), 'utf8');
    const body = file.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    assert.doesNotMatch(body, /data-seo="related-guides"|data-content="page-purpose"/, `${page.url}: removed strip must not render`);
    for (const match of body.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
      const href = attrs(match[1]).href;
      if (!href || /^(mailto|tel|javascript):/.test(href)) continue;
      const target = new URL(href, page.url);
      if (target.origin !== origin || !/^\/(en|ar)\//.test(target.pathname)) continue;
      const targetLocale = target.pathname.split('/')[1];
      if (targetLocale !== page.locale) assert.match(text(match[2]), /^(English|العربية)$/i, `${page.url}: unintended locale link ${href}`);
    }
    if (['service', 'country', 'location'].includes(page.family)) {
      const blocks = [...file.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter((m) => attrs(m[1]).type === 'application/ld+json');
      const nodes = blocks.flatMap((m) => JSON.parse(m[2])['@graph'] || []);
      const faq = nodes.find((node) => node['@type'] === 'FAQPage');
      const details = [...body.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/g)].map((m) => ({
        question: text(m[1].match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/)[1]),
        answer: text(m[1].match(/<p\b[^>]*>([\s\S]*?)<\/p>/)[1])
      }));
      assert.deepEqual(faq.mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer.text })), details, `${page.url}: visible FAQ/schema`);
    }
  }
  console.log(JSON.stringify({ routes: 146, preservedRoutes: 140, orphans: current.orphans.length, repeatedParagraphs: [baseline.repeatedParagraphs, current.repeatedParagraphs], repeatedTokens: [baseline.repeatedTokens, current.repeatedTokens], nearPairs: [baseline.nearPairs, current.nearPairs.length] }));
});
