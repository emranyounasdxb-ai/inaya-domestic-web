import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { attrs, text, tokens } from '../scripts/seo-content-audit.mjs';

const origin = 'https://inayadomestic.ae';
const slugs = [
  'uae-domestic-worker-hiring-process',
  'domestic-worker-package-pricing-factors',
  'documents-for-domestic-worker-enquiry',
  'live-in-live-out-part-time-maid-uae',
  'monthly-maid-package-inclusions-checklist',
  'maid-nanny-babysitter-differences',
  'domestic-worker-visa-sponsorship-support'
];
const relatedGuide = {
  'uae-domestic-worker-hiring-process': 'domestic-worker-package-pricing-factors',
  'domestic-worker-package-pricing-factors': 'documents-for-domestic-worker-enquiry',
  'documents-for-domestic-worker-enquiry': 'uae-domestic-worker-hiring-process',
  'live-in-live-out-part-time-maid-uae': 'monthly-maid-package-inclusions-checklist',
  'monthly-maid-package-inclusions-checklist': 'live-in-live-out-part-time-maid-uae',
  'maid-nanny-babysitter-differences': 'uae-domestic-worker-hiring-process',
  'domestic-worker-visa-sponsorship-support': 'documents-for-domestic-worker-enquiry'
};

test('contextual guide links are rendered on relevant commercial pages in both languages', async () => {
  const connections = [
    ...['live-in-maid', 'live-out-maid', 'full-time-maid', 'part-time-maid'].map((slug) => [`services/${slug}`, 'live-in-live-out-part-time-maid-uae']),
    ['services/monthly-maid-contract', 'monthly-maid-package-inclusions-checklist'],
    ...['nanny', 'babysitting'].map((slug) => [`services/${slug}`, 'maid-nanny-babysitter-differences']),
    ...['maid-visa', 'sponsorship-transfer'].map((slug) => [`services/${slug}`, 'domestic-worker-visa-sponsorship-support']),
    ['services/recruitment', 'uae-domestic-worker-hiring-process'],
    ['pricing', 'monthly-maid-package-inclusions-checklist'],
    ['pricing', 'domestic-worker-package-pricing-factors'],
    ['faq', 'monthly-maid-package-inclusions-checklist'],
    ['faq', 'live-in-live-out-part-time-maid-uae'],
    ...['ajman', 'dubai', 'sharjah'].map((city) => [`maid-services-${city}`, 'uae-domestic-worker-hiring-process'])
  ];
  for (const locale of ['en', 'ar']) {
    for (const [route, guide] of connections) {
      const html = await readFile(`out/${locale}/${route}/index.html`, 'utf8');
      const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
      const main = body.slice(body.indexOf('<main'), body.lastIndexOf('</main>') + 7);
      const guideHref = `/${locale}/blog/${guide}/`;
      const anchors = [...main.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].filter((match) => attrs(match[1]).href === guideHref);
      assert.equal(anchors.length, 1, `${locale}/${route}: one contextual link to ${guide}`);
      assert.ok(text(anchors[0][2]).length > 12, `${locale}/${route}: descriptive localized anchor`);
      const target = await readFile(`out${guideHref}index.html`, 'utf8');
      assert.match(target, /<h1\b/, `${guideHref}: exported guide target`);
      assert.doesNotMatch(main, /data-seo="related-guides"|data-content="page-purpose"/, `${locale}/${route}: no removed link strips`);
    }
  }
});

test('seven substantive EN/AR guides have hub links, visible attribution, dates and matching Article schema', async () => {
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.equal(urls.length, 154);
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
      const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
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
      assert.deepEqual(articleNode.author, { '@type': 'Organization', name: 'INAYA Domestic Workers Editorial Team' });
      assert.ok(text(body).includes(articleNode.author.name), `${route}: editorial author visible`);
      assert.equal(articleNode.datePublished, slugs.indexOf(slug) < 3 ? '2026-10-01' : '2026-10-06');
      assert.equal(articleNode.dateModified, '2026-10-06');
      assert.ok(body.includes(`dateTime="${articleNode.datePublished}"`), `${route}: published date visible`);
      assert.ok(body.includes(`dateTime="${articleNode.dateModified}"`), `${route}: updated date visible`);
      assert.match(body, /href="tel:\+97167400128"/, `${route}: approved office phone`);
      assert.match(body, /href="https:\/\/wa.me\/971502036767"/, `${route}: approved website WhatsApp`);
      assert.ok(graph.find((node) => node['@type'] === 'BreadcrumbList').itemListElement.some((crumb) => crumb.item === `${origin}/${locale}/blog/`));
      const officialLinks = [...body.matchAll(/<a\b([^>]*)>/g)].map((match) => attrs(match[1]).href)
        .filter((href) => href?.startsWith('https://u.ae/') || href?.startsWith('https://www.mohre.gov.ae/') || href?.startsWith('https://taqyeem.mohre.gov.ae/') || href?.startsWith('https://icp.gov.ae/') || href?.startsWith('https://www.gdrfad.gov.ae/'));
      assert.ok(officialLinks.length >= 2, `${route}: official source links`);
      const expectedSources = [
        'https://www.mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022',
        'https://www.mohre.gov.ae/ar/services/issuance-of-a-new-employment-contract-domestic-worker-2022',
        ...(slug === 'domestic-worker-visa-sponsorship-support' ? [
          'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64',
          'https://www.gdrfad.gov.ae/en/node/14403'
        ] : ['https://www.mohre.gov.ae/assets/download/5055543/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx'])
      ].sort();
      assert.deepEqual([...new Set(officialLinks)].sort(), expectedSources, `${route}: verified sources for the intent`);
      assert.deepEqual(articleNode.citation.slice().sort(), expectedSources, `${route}: citations match visible sources`);
      if (slugs.indexOf(slug) >= 3 || slug === 'domestic-worker-package-pricing-factors') {
        assert.match(article, /<caption\b/, `${route}: useful comparison table`);
        assert.match(article, /scope="col"/, `${route}: column headers`);
        assert.match(article, /scope="row"/, `${route}: row headers`);
        assert.match(article, /role="region"[^>]*aria-label=/, `${route}: named keyboard-scrollable table region`);
      }
      if (['domestic-worker-package-pricing-factors', 'monthly-maid-package-inclusions-checklist'].includes(slug)) {
        const visible = text(body);
        assert.match(visible, /1,500/);
        assert.match(visible, /2,500/);
        assert.match(visible, locale === 'en' ? /Essential starts from AED 1,500\/month, all-inclusive/ : /تبدأ Essential من 1,500 درهم شهرياً، شاملة/);
        assert.match(visible, locale === 'en' ? /Signature starts from AED 2,500\/month, all-inclusive/ : /تبدأ Signature من 2,500 درهم شهرياً، شاملة/);
        assert.match(visible, locale === 'en' ? /Custom Quote/ : /عرض سعر مخصص/);
      }
      if (slug === 'domestic-worker-visa-sponsorship-support') {
        for (const step of locale === 'en' ? ['Document guidance', 'Application submission', 'Status change', 'Medical processing', 'Emirates ID processing', 'Insurance processing', 'End-to-end case processing'] : ['إرشادات المستندات', 'تقديم الطلب', 'تعديل الوضع', 'إجراءات الفحص الطبي', 'إجراءات الهوية الإماراتية', 'إجراءات التأمين', 'متابعة الحالة من البداية إلى النهاية']) assert.ok(text(article).includes(step));
        assert.match(text(article), locale === 'en' ? /does not guarantee approval/ : /لا تضمن.*الموافقة/);
      }
      assert.doesNotMatch(body, /href="https:\/\/(?:u\.ae\/|taqyeem\.mohre\.gov\.ae\/)/, `${route}: no obsolete references`);
      assert.match(text(body), locale === 'ar' ? /بالإنجليزية/ : /\(Arabic\)/, `${route}: reference languages labelled`);
      assert.match(body, new RegExp(`href="/${locale}/(?:contact|booking|pricing|how-it-works|documents-required)/"`));
    }
  }
});
