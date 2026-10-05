import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { attrs, text, tokens } from '../scripts/seo-content-audit.mjs';

const origin = 'https://inayadomestic.ae';
const slugs = [
  'uae-domestic-worker-hiring-process',
  'domestic-worker-package-pricing-factors',
  'documents-for-domestic-worker-enquiry'
];
const relatedGuide = {
  'uae-domestic-worker-hiring-process': 'domestic-worker-package-pricing-factors',
  'domestic-worker-package-pricing-factors': 'documents-for-domestic-worker-enquiry',
  'documents-for-domestic-worker-enquiry': 'uae-domestic-worker-hiring-process'
};

test('three substantive EN/AR guides are linked from each blog hub and have matching Article schema', async () => {
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.equal(urls.length, 146);
  for (const locale of ['en', 'ar']) {
    const hub = await readFile(`out/${locale}/blog/index.html`, 'utf8');
    const hubBody = hub.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    assert.doesNotMatch(text(hubBody), /Coming Soon|اقرأ قريباً|موضوعات قادمة/);
    for (const slug of slugs) {
      const route = `/${locale}/blog/${slug}/`;
      const url = `${origin}${route}`;
      assert.ok(urls.includes(url), `${route}: sitemap`);
      assert.ok(hubBody.includes(`href="${route}"`), `${route}: linked from hub`);
      const html = await readFile(`out${route}index.html`, 'utf8');
      const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
      const article = body.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
      assert.ok(article, `${route}: visible article`);
      assert.ok(body.includes(`href="/${locale}/blog/${relatedGuide[slug]}/"`), `${route}: related guide link`);
      assert.ok(tokens(text(article)).length >= 200, `${route}: substantive article copy`);
      assert.equal([...article.matchAll(/<h2\b/g)].length, 4, `${route}: four explanatory sections`);
      assert.ok(html.includes('rel="canonical"'), `${route}: canonical`);
      assert.ok(html.includes(`content="${url}"`), `${route}: canonical URL`);
      assert.ok(html.includes('hrefLang="en"'), `${route}: English alternate`);
      assert.ok(html.includes('hrefLang="ar"'), `${route}: Arabic alternate`);
      const graph = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)]
        .filter((match) => attrs(match[1]).type === 'application/ld+json')
        .flatMap((match) => JSON.parse(match[2])['@graph'] || []);
      const page = graph.find((node) => node['@type'] === 'WebPage');
      const articleNode = graph.find((node) => node['@type'] === 'Article');
      assert.equal(page.mainEntity['@id'], `${url}#article`);
      assert.equal(articleNode['@id'], `${url}#article`);
      assert.equal(articleNode.url, url);
      assert.equal(articleNode.inLanguage, locale);
      assert.ok(text(body).includes(articleNode.headline), `${route}: schema headline visible`);
      assert.deepEqual(articleNode.author, { '@id': `${origin}/#organization` });
      assert.ok(graph.find((node) => node['@type'] === 'BreadcrumbList').itemListElement.some((crumb) => crumb.item === `${origin}/${locale}/blog/`));
      const officialLinks = [...body.matchAll(/<a\b([^>]*)>/g)].map((match) => attrs(match[1]).href)
        .filter((href) => href?.startsWith('https://u.ae/') || href?.startsWith('https://www.mohre.gov.ae/') || href?.startsWith('https://taqyeem.mohre.gov.ae/'));
      assert.ok(officialLinks.length >= 2, `${route}: official source links`);
      assert.deepEqual([...new Set(officialLinks)].sort(), [
        'https://www.mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022',
        'https://www.mohre.gov.ae/ar/services/issuance-of-a-new-employment-contract-domestic-worker-2022',
        'https://www.mohre.gov.ae/assets/download/5055543/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx'
      ].sort(), `${route}: verified bilingual contract sources and preserved employer PDF`);
      assert.doesNotMatch(body, /href="https:\/\/(?:u\.ae\/|taqyeem\.mohre\.gov\.ae\/)/, `${route}: no obsolete references`);
      assert.match(text(body), locale === 'ar' ? /بالإنجليزية/ : /\(Arabic\)/, `${route}: reference languages labelled`);
      assert.match(body, new RegExp(`href="/${locale}/(?:contact|booking|pricing|how-it-works|documents-required)/"`));
    }
  }
});
