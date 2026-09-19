const assert = require('node:assert/strict');
const test = require('node:test');
const base = '../.next/phase-02-unit/lib/';
const { serviceContentBriefs } = require(base + 'service-content-briefs.js');
const { countryContentBriefs, locationContentBriefs } = require(base + 'profile-content-briefs.js');
const { informationNotes, relatedContentRoutes } = require(base + 'content-architecture.js');
const { guideContent } = require(base + 'guide-content.js');
const { getPageSeo, pageBreadcrumbs } = require(base + 'page-seo.js');
const { pageStructuredData } = require(base + 'structured-data.js');
const baseline = require('./fixtures/seo-phase03-baseline.json');

test('every dynamic route has a bilingual purpose brief, not a generic fallback', () => {
  assert.equal(Object.keys(serviceContentBriefs).length, 31);
  assert.equal(Object.keys(countryContentBriefs).length, 12);
  assert.equal(Object.keys(locationContentBriefs).length, 7);
  for (const brief of Object.values(serviceContentBriefs)) for (const key of ['overview', 'prepare']) {
    assert.match(brief[key].ar, /[\u0600-\u06ff]/); assert.ok(brief[key].en.length > 40);
    assert.equal(brief.related.length, 3); assert.equal(new Set(brief.related).size, 3);
  }
  for (const brief of [...Object.values(countryContentBriefs), ...Object.values(locationContentBriefs), ...Object.values(informationNotes)]) {
    assert.match(brief.ar, /[\u0600-\u06ff]/); assert.ok(brief.en.length > 40);
  }
});

test('all routes have curated, valid, non-self related links and stable breadcrumbs', () => {
  for (const page of baseline.pages) {
    const related = relatedContentRoutes(page.route);
    assert.ok(related.length >= 2 && related.length <= 4, page.url);
    assert.equal(new Set(related).size, related.length);
    for (const route of related) { assert.notEqual(route, page.route); assert.ok(getPageSeo(page.locale, route), route); }
    assert.equal(pageBreadcrumbs(page.locale, page.route).at(-1).url, page.url);
  }
});

test('revised FAQ objects come from exact current bilingual visible datasets', () => {
  for (const page of baseline.pages.filter((p) => ['service', 'country', 'location'].includes(p.family))) {
    const current = getPageSeo(page.locale, page.route);
    const faq = pageStructuredData(page.locale, page.route)['@graph'].find((node) => node['@type'] === 'FAQPage');
    assert.deepEqual(faq.mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer.text })), current.faqs);
    assert.equal(faq['@id'], `${page.url}#faq`); assert.equal(faq.inLanguage, page.locale);
    assert.ok(current.faqs.length >= 3);
  }
});

test('practical guides retain paired sections and link only to existing routes', () => {
  assert.equal(Object.keys(guideContent).length, 3);
  for (const guide of Object.values(guideContent)) {
    assert.equal(guide.sections.length, 3); assert.match(guide.title.ar, /[\u0600-\u06ff]/);
    for (const section of guide.sections) for (const lang of ['en', 'ar']) {
      assert.ok(section.title[lang] && section.body[lang]); assert.ok(getPageSeo(lang, section.route));
    }
  }
});

test('new editorial copy introduces no numeric facts or positive superlative/approval guarantees', () => {
  const texts = [];
  const collect = (value) => {
    if (!value || typeof value !== 'object') return;
    for (const [key, entry] of Object.entries(value)) {
      if (['en', 'ar'].includes(key) && typeof entry === 'string') texts.push(entry);
      else if (key !== 'related' && key !== 'route') collect(entry);
    }
  };
  [serviceContentBriefs, countryContentBriefs, locationContentBriefs, informationNotes, guideContent].forEach(collect);
  for (const value of texts) {
    assert.doesNotMatch(value, /[0-9٠-٩]/, value);
    assert.doesNotMatch(value, /No\.?\s*1|#1|best|top.rated|licensed|award|الأفضل|رقم واحد|مرخص|جوائز/i, value);
    // Explicit disclaimers are not positive guarantees; no other occurrence is allowed.
    const withoutDisclaimers = value.replace(/not a safety guarantee|not a promise of approval|ليس ضماناً للأمان|ليست وعداً بالموافقة/gi, '');
    assert.doesNotMatch(withoutDisclaimers, /guarantee|approval|مضمون|ضمان|موافقة/i, value);
  }
});
