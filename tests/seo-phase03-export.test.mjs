import assert from 'node:assert/strict';
import remediation from './seo-audit-remediation-expectations.cjs';
import managed from './managed-package-expectations.cjs';
import ajmanOffice from './ajman-office-expectations.cjs';
import domesticServices from './domestic-service-refresh-expectations.cjs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { auditExport, origin, attrs, text } from '../scripts/seo-content-audit.mjs';

const obsoletePackageLabels = /\bEssential\b|\bSignature\b|INAYA Black|(?:AED\s*)?2,500\b/;
const reviewedOrdinaryTableLabels = {
  'blog/housemaid-recruitment-ajman-candidate-evidence-cards': 'Essential task fit',
  'blog/maid-services-dubai-household-access-scope-plan': 'Essential tasks and optional work',
  'blog/ajman-household-weekly-maid-priorities-handover': 'Essential work finished and items identified'
};
function pricingGuardText(page) {
  const value = page.mainText + '\n' + page.description;
  // Three independently reviewed worksheets use the ordinary adjective in one
  // exact table cell each. Preserve the original guard everywhere else,
  // including every legacy page and every other occurrence on these new pages.
  const approved = page.locale === 'en' ? reviewedOrdinaryTableLabels[page.route] : undefined;
  if (approved) {
    assert.equal(value.split(approved).length, 2, `${page.url}: exactly one reviewed ordinary-language table label`);
    return value.replace(approved, approved.replace('Essential', 'Required'));
  }
  return value;
}

test('obsolete package detection permits only three exact reviewed table cells, retaining all pricing guards', () => {
  for (const [route, mainText] of Object.entries(reviewedOrdinaryTableLabels)) {
    const page = { locale: 'en', route, url: route, mainText, description: '' };
    assert.doesNotMatch(pricingGuardText(page), obsoletePackageLabels);
    for (const forbidden of ['Essential package', 'Signature', 'INAYA Black', 'AED 2,500']) {
      assert.match(pricingGuardText({ ...page, mainText: `${page.mainText} ${forbidden}` }), obsoletePackageLabels);
    }
    assert.match(pricingGuardText({ ...page, route: 'services/recruitment' }), obsoletePackageLabels, 'the phrase allowance does not extend to any legacy route');
    assert.match(pricingGuardText({ ...page, locale: 'ar' }), obsoletePackageLabels, 'the allowance does not extend to another language');
    assert.throws(() => pricingGuardText({ ...page, mainText: `${mainText} ${mainText}` }), /exactly one reviewed/);
  }
});

test('Phase 3 preserves all route identities, reduces measured repetition and removes all orphans', async () => {
  const correctedCareMetadata = {
    en: { title: 'Non-clinical Home Support in UAE for Daily Routines | INAYA', description: 'Discuss non-clinical home support with INAYA for daily routines, practical household help and companionship in the UAE. Medical and nursing care are not included.' },
    ar: { title: 'دعم منزلي غير طبي للروتين اليومي في الإمارات | عناية', description: 'ناقش مع عناية الدعم المنزلي غير الطبي للروتين اليومي والمساعدة العملية والمرافقة في الإمارات. لا تشمل الخدمة العلاج الطبي أو التمريض.' }
  };
  const baseline = JSON.parse(await readFile('tests/fixtures/seo-phase03-baseline.json', 'utf8'));
  // Exact reviewed metadata changes are allowlisted alongside the visa and monthly pricing corrections.
  // Every other historical metadata and price value remains exact. The approved
  // customer-content additions repeat the same monthly amounts in Pricing and FAQ.
  const visaDescriptions = {
    en: 'Complete maid visa-processing support from INAYA in the UAE, including submission, status change, medical, Emirates ID and insurance processing. Terms depend on your case and authorities.',
    ar: 'دعم متكامل لإجراءات تأشيرة الخادمة في الإمارات مع عناية: تقديم الطلبات وتعديل الوضع والفحص الطبي والهوية والتأمين. تعتمد الشروط على الحالة والجهات المختصة.'
  };
  const visaTitles = {
    en: 'Maid Visa Processing Support in UAE | INAYA',
    ar: 'دعم إجراءات تأشيرة الخادمة في الإمارات | عناية'
  };
  const pricingMentions = {
    en: [...Array(7).fill('AED 1,500'), ...Array(7).fill('AED 2,500')],
    ar: [...Array(6).fill('1,500 درهم'), ...Array(6).fill('2,500 درهم'), 'AED 1,500', 'AED 2,500']
  };
  const current = await auditExport();
  assert.equal(current.pages.length, 274);
  for (const page of current.pages) {
    assert.doesNotMatch(pricingGuardText(page), obsoletePackageLabels, `${page.url}: superseded package prices and tiers cannot survive the export`);
    assert.doesNotMatch(page.mainText, /Live-out service requires a separate itemised quotation|advertised monthly prices concern live-in service|تتطلب الخدمة غير المقيمة عرضاً منفصلاً ومفصلاً|تخص الأسعار الشهرية المعلنة الخدمة المقيمة داخل المنزل/, `${page.url}: no obsolete live-out price distinction`);
  }
  assert.deepEqual(current.pages.slice(0, 140).map((p) => p.url), baseline.pages.map((p) => p.url));
  assert.deepEqual(current.orphans, []);
  for (const locale of ['en', 'ar']) {
    assert.equal(current.linkCoverage[locale].reachable, 137);
    assert.ok(current.linkCoverage[locale].minimumOtherPageInbound > 0);
  }
  const editorial = managed.editorialRepetition(current);
  assert.ok(editorial.repeatedTokens < baseline.repeatedTokens);
  assert.ok(editorial.repeatedParagraphs < baseline.repeatedParagraphs);
  assert.ok(current.nearPairs.length < baseline.nearPairs);
  for (const page of current.pages.slice(0, 140)) {
    const before = baseline.pages.find((p) => p.url === page.url);
    const approved = domesticServices.metadata[`${page.locale}/${page.route}`] ?? ajmanOffice.metadata[`${page.locale}/${page.route}`] ?? managed.metadata[`${page.locale}/${page.route}`] ?? remediation.metadata[`${page.locale}/${page.route}`];
    const correctedCare = page.route === 'services/patient-care' ? correctedCareMetadata[page.locale] : undefined;
    assert.equal(page.title, approved?.title ?? (page.route === 'services/maid-visa' ? visaTitles[page.locale] : correctedCare?.title ?? before.title), page.url);
    if (page.route !== 'blog') assert.equal(page.description, approved?.description ?? (page.route === 'services/maid-visa' ? visaDescriptions[page.locale] : correctedCare?.description ?? before.description), page.url);
    else assert.match(page.description, page.locale === 'en' ? /bilingual INAYA guides/ : /أدلة عناية/);
    const additions = [];
    if (page.route === 'pricing') additions.push(`${page.url}#faq`);
    // About and country guides describe their visible approved photos. Ajman
    // and other text pages retain their historical schema IDs.
    const countryPhoto = page.route === 'services/countries-we-source-from' || page.route.startsWith('maid-source-countries/');
    if (countryPhoto || ['', 'about', 'services'].includes(page.route) || (page.route.startsWith('services/') && page.route !== 'services/countries-we-source-from')) additions.push(`${page.url}#primaryimage`);
    const expectedSchemaIds = [...before.schemaIds, ...additions].sort();
    assert.deepEqual(page.schemaIds, expectedSchemaIds, `${page.url}: preserved IDs plus the approved pricing FAQ and visible primary image`);
    const expectedPrices = domesticServices.priceMentions[`${page.locale}/${page.route}`] ?? managed.priceMentions[`${page.locale}/${page.route}`] ?? (page.route === 'pricing' ? pricingMentions[page.locale]
      : page.route === 'faq' ? page.locale === 'en' ? ['AED 1,500', 'AED 1,500', 'AED 2,500', 'AED 2,500'] : ['1,500 درهم', '1,500 درهم', '2,500 درهم', '2,500 درهم']
      : page.route === 'services/monthly-maid-contract' ? page.locale === 'en' ? ['AED 1,500', 'AED 2,500'] : ['1,500 درهم', '2,500 درهم']
      : before.prices);
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
      if (targetLocale !== page.locale) assert.equal(text(match[2]), page.locale === 'en' ? 'Arabic' : 'الإنجليزية', `${page.url}: the locale link is labelled in the current page language`);
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
  console.log(JSON.stringify({ routes: 274, preservedRoutes: 140, orphans: current.orphans.length, repeatedParagraphs: [baseline.repeatedParagraphs, current.repeatedParagraphs], repeatedTokens: [baseline.repeatedTokens, current.repeatedTokens], nearPairs: [baseline.nearPairs, current.nearPairs.length] }));
});
