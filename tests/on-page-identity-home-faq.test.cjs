const assert = require('node:assert/strict');
const fs = require('node:fs');
const Module = require('node:module');
const path = require('node:path');
const test = require('node:test');
const ts = require('typescript');
const { renderToStaticMarkup } = require('react-dom/server');

// Compile these source modules in this isolated test process, without writing
// into the Next.js build that other validation may currently be using.
const root = path.resolve(__dirname, '..');
const resolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, isMain, options) {
  return resolveFilename.call(this, request.startsWith('@/') ? path.join(root, request.slice(2)) : request, parent, isMain, options);
};
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (module, filename) => {
    const result = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
      fileName: filename,
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true }
    });
    module._compile(result.outputText, filename);
  };
}

const HomeFaqs = require('../components/HomeFaqs.tsx').default;
const BusinessIdentityLine = require('../components/BusinessIdentityLine.tsx').default;
const { getHomeFaqs } = require('../lib/home-faqs.ts');
const { pageStructuredData } = require('../lib/structured-data.ts');
const { organizationEntity } = require('../lib/organization.ts');
const { companyInformationRecord } = require('../lib/company-information.ts');
const { packageSummary } = require('../lib/package-content.ts');

test('six visible home answers and one FAQ graph agree exactly in both languages', async () => {
  const { text } = await import('../scripts/seo-content-audit.mjs');
  for (const locale of ['en', 'ar']) {
    const html = renderToStaticMarkup(HomeFaqs({ locale }));
    const visible = [...html.matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/g)].map(([, article]) => ({
      question: text(article.match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/)[1]),
      answer: text(article.match(/<p\b[^>]*>([\s\S]*?)<\/p>/)[1])
    }));
    assert.equal(visible.length, 6);
    assert.deepEqual(visible, getHomeFaqs(locale));
    assert.equal(visible[0].answer, packageSummary[locale], 'all six approved prices retain their billing bases');
    const faqs = pageStructuredData(locale, '')['@graph'].filter(node => node['@type'] === 'FAQPage');
    assert.equal(faqs.length, 1, 'one FAQ entity, without a competing page-seo copy');
    assert.deepEqual(faqs[0].mainEntity.map(item => ({ question: item.name, answer: item.acceptedAnswer.text })), visible);
  }
});

test('public business facts use the official facility identifier and newly controlled social profiles', async () => {
  const { text } = await import('../scripts/seo-content-audit.mjs');
  const profiles = [
    'https://www.linkedin.com/company/inaya-domestic-workers-ajman/',
    'https://www.facebook.com/inayadomesticworkersajman/',
    'https://www.instagram.com/inayadomesticworkers/'
  ];
  const source = 'https://mohre.gov.ae/en/services/approved-services-centers-new1/inaya-domestic-workers-services-s-p-s-l-l-c';
  for (const locale of ['en', 'ar']) {
    const entity = organizationEntity(locale);
    assert.deepEqual(entity.identifier, { '@type': 'PropertyValue', propertyID: 'MOHRE Facility Number', value: '2637187', url: source });
    assert.deepEqual(entity.sameAs, profiles);
    assert.equal(entity.telephone, '+971 6 740 0128');
    assert.equal(entity.contactPoint.telephone, '+971 50 203 6767');
    assert.equal(entity.contactPoint.url, 'https://wa.me/971502036767');
    assert.deepEqual(entity.areaServed, { '@type': 'Country', name: 'United Arab Emirates' });
    assert.equal(new URL(entity.hasMap).searchParams.get('query_place_id'), 'ChIJxzRGAUJZXz4R8zN5ye8vn_M');
    assert.ok(!('geo' in entity), 'viewport coordinates must not become an unverified office pin');
    assert.ok(!('hasCredential' in entity), 'a facility identifier must not imply an awarded credential');
    assert.ok(!('aggregateRating' in entity), 'selected reviews must not become a self-serving overall rating');
    const html = renderToStaticMarkup(BusinessIdentityLine({ locale, showProfiles: true }));
    assert.ok(text(html).includes('2637187'));
    assert.ok(html.includes(source));
    for (const url of profiles) assert.ok(html.includes(url));
  }
  const record = companyInformationRecord();
  assert.equal(record.lastUpdated, '2026-10-28');
  assert.equal(record.lastReviewed, '2026-10-28');
  assert.equal(record.organization.mohreFacility.number, '2637187');
  assert.equal(record.organization.mohreFacility.sourceUrl, source);
  assert.deepEqual(record.organization.profiles.map(profile => profile.url), profiles);
});

test('blog archives have no dangling article entity while a real guide retains its article', () => {
  for (const locale of ['en', 'ar']) {
    for (const route of ['blog', 'blog/page/2', 'blog/page/3', 'blog/page/4', 'blog/page/5', 'blog/page/6']) {
      const data = pageStructuredData(locale, route);
      assert.ok(data, `${locale}/${route}: archive metadata exists`);
      assert.ok(!data['@graph'].some(node => node['@type'] === 'Article'));
      const page = data['@graph'].find(node => node['@type'] === 'WebPage');
      assert.ok(!page.mainEntity, `${locale}/${route}: no dangling article mainEntity`);
    }
    const guide = pageStructuredData(locale, 'blog/uae-domestic-worker-hiring-process');
    const article = guide['@graph'].find(node => node['@type'] === 'Article');
    assert.ok(article);
    assert.equal(guide['@graph'].find(node => node['@type'] === 'WebPage').mainEntity['@id'], article['@id']);
  }
});
