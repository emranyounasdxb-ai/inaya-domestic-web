const assert = require('node:assert/strict');
const test = require('node:test');
const { serializeJsonLd, faqEntity } = require('../.next/phase-02-unit/lib/json-ld.js');
const { pageMetadata, getPageSeo, pageBreadcrumbs } = require('../.next/phase-02-unit/lib/page-seo.js');
const { pageStructuredData } = require('../.next/phase-02-unit/lib/structured-data.js');
const { serviceImageAlt } = require('../.next/phase-02-unit/lib/image-alt.js');

test('JSON-LD safely round-trips script breaking and injection strings', () => {
  const value = { name: '</script><script>alert("x")</script>&\u2028\u2029', quote: '"', arabic: 'عناية' };
  const encoded = serializeJsonLd(value);
  assert.ok(!/[<>&\u2028\u2029]/.test(encoded));
  assert.deepEqual(JSON.parse(encoded), value);
});

test('metadata and graphs preserve exact Phase 1 locale URLs and stable entity IDs', () => {
  for (const locale of ['en', 'ar']) for (const route of ['', 'inaya-advantages', 'services/live-in-maid', 'maid-services-dubai', 'maid-source-countries/philippines-maid-uae']) {
    const url = `https://inayadomestic.ae/${locale}/${route ? `${route}/` : ''}`;
    const metadata = pageMetadata(locale, route);
    assert.equal(metadata.alternates.canonical, url);
    assert.equal(metadata.alternates.languages['x-default'], `https://inayadomestic.ae/en/${route ? `${route}/` : ''}`);
    assert.equal(metadata.openGraph.url, url);
    const graph = pageStructuredData(locale, route)['@graph'];
    assert.equal(graph.find((node) => node['@type'] === 'WebPage').url, url);
    assert.equal(graph.find((node) => node['@type'] === 'WebSite').publisher['@id'], 'https://inayadomestic.ae/#organization');
    assert.equal(pageBreadcrumbs(locale, route).at(-1).url, url);
  }
});

test('nonexistent legacy routes never receive route metadata/schema', () => {
  for (const route of ['why-choose-inaya', 'service-policy', 'replacement-policy', 'does-not-exist', 'services/does-not-exist']) {
    assert.equal(getPageSeo('en', route), undefined);
    assert.deepEqual(pageMetadata('en', route), {});
    assert.equal(pageStructuredData('en', route), undefined);
  }
});

test('FAQ schema faithfully retains exact supplied localized questions and answers', () => {
  const faqs = [{ question: 'ما الخدمة؟', answer: 'دعم الأسرة <بوضوح>.' }];
  const entity = faqEntity('ar', 'faq', faqs);
  assert.equal(entity.inLanguage, 'ar');
  assert.equal(entity.url, 'https://inayadomestic.ae/ar/faq/');
  assert.equal(entity.mainEntity[0].name, faqs[0].question);
  assert.equal(entity.mainEntity[0].acceptedAnswer.text, faqs[0].answer);
});

test('meaningful service image descriptions are localized and generic fallback is not mislabelled', () => {
  assert.match(serviceImageAlt('en', 'live-in-maid'), /Household service illustration:/);
  assert.match(serviceImageAlt('ar', 'live-in-maid'), /^صورة توضيحية لخدمة /);
  assert.match(serviceImageAlt('en', 'unknown-service'), /serving tea to a family/);
  assert.match(serviceImageAlt('ar', 'unknown-service'), /تقدم الشاي لأسرة/);
});
