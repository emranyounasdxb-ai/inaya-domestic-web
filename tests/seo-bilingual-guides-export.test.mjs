import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import test from 'node:test';
import { createHash } from 'node:crypto';
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
  assert.equal(urls.length, 194);
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


// Independent hashes and structure counts come from the finalized publication package.
// They protect all forty approved versions against omission or accidental rewriting.
test('twenty finalized bilingual topics retain exact copy, references and route identity', async () => {
  const approved = JSON.parse(await readFile('tests/fixtures/published-article-content.json', 'utf8'));
  const contentModule = await readFile('lib/published-article-content.ts', 'utf8');
  const publishedArticles = JSON.parse(contentModule.split('export const publishedArticles: PublishedArticleContent[] = ')[1].trim().replace(/;$/, ''));
  const sha = (value) => createHash('sha256').update(value).digest('hex');
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  assert.equal(approved.length, 20);
  assert.equal(publishedArticles.length, 20);
  assert.equal(new Set(publishedArticles.map((article) => article.slug)).size, 20);
  const allowedHosts = new Set(['inayadomestic.ae', 'uaelegislation.gov.ae', 'mohre.gov.ae', 'www.mohre.gov.ae', 'mohap.gov.ae', 'u.ae']);
  for (const article of publishedArticles) {
    const expected = approved.find((entry) => entry.slug === article.slug);
    assert.ok(expected, article.slug);
    for (const locale of ['en', 'ar']) {
      const route = `/${locale}/blog/${article.slug}/`;
      const url = `${origin}${route}`;
      const copy = article[locale];
      const snapshot = expected[locale];
      assert.equal(copy.title, snapshot.title, `${route}: approved title`);
      assert.equal(sha(copy.body), snapshot.body_sha256, `${route}: complete approved Markdown`);
      const html = await readFile(`out${route}index.html`, 'utf8');
      const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
      const rendered = body.match(/<article\b[^>]*data-published-article="content"[^>]*>([\s\S]*?)<\/article>/)?.[1];
      assert.ok(rendered, `${route}: complete visible article`);
      assert.equal(sha(text(rendered)), snapshot.visible_sha256, `${route}: every word, figure and condition rendered`);
      assert.equal([...rendered.matchAll(/<h2\b/g)].length, snapshot.heading_count, `${route}: all headings`);
      assert.equal([...rendered.matchAll(/<li\b/g)].length, snapshot.list_items, `${route}: all list items`);
      assert.equal([...rendered.matchAll(/<table\b/g)].length, snapshot.tables, `${route}: all tables`);
      const links = [...rendered.matchAll(/<a\b([^>]*)>/g)].map((match) => attrs(match[1]).href);
      assert.deepEqual(links, snapshot.links, `${route}: all original clickable references and internal links`);
      for (const link of links) {
        assert.ok(allowedHosts.has(new URL(link).hostname), `${route}: official or INAYA source`);
        if (new URL(link).origin === origin) assert.ok(new URL(link).pathname.startsWith(`/${locale}/`), `${route}: internal link language`);
      }
      assert.doesNotMatch(text(rendered), locale === 'ar' ? /[A-Za-z]/ : /[\u0600-\u06ff]/, `${route}: article language`);
      assert.doesNotMatch(text(rendered), /TODO|TBD|editorial notes|source-evidence|pending business facts/i);
      assert.equal([...body.matchAll(/<h1\b/g)].length, 1, `${route}: one primary heading`);
      assert.ok(text(body.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1]) === copy.title);
      const canonical = [...html.matchAll(/<link\b([^>]*)>/g)].map((match) => attrs(match[1])).find((link) => link.rel === 'canonical');
      assert.equal(canonical.href, url);
      for (const alternate of ['en', 'ar', 'x-default']) {
        const expectedUrl = `${origin}/${alternate === 'x-default' ? 'en' : alternate}/blog/${article.slug}/`;
        const link = [...html.matchAll(/<link\b([^>]*)>/g)].map((match) => attrs(match[1])).find((link) => link.rel === 'alternate' && link.hrefLang === alternate);
        assert.equal(link?.href, expectedUrl, `${route}: reciprocal ${alternate}`);
      }
      const graph = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter((match) => attrs(match[1]).type === 'application/ld+json').flatMap((match) => JSON.parse(match[2])['@graph'] || []);
      const schema = graph.find((node) => node['@type'] === 'Article');
      assert.equal(schema.url, url); assert.equal(schema.inLanguage, locale); assert.equal(schema.headline, copy.title);
      assert.equal(schema.datePublished, '2026-10-09'); assert.equal(schema.dateModified, '2026-10-09');
      assert.equal(schema.author.name, locale === 'ar' ? 'فريق تحرير عناية للعمالة المنزلية' : 'INAYA Domestic Workers Editorial Team');
      assert.deepEqual(schema.citation, [...new Set(links.filter((link) => new URL(link).origin !== origin))]);
      assert.ok(sitemap.includes(`<loc>${url}</loc>`), `${route}: sitemap entry`);
      const hub = await readFile(`out/${locale}/blog/index.html`, 'utf8');
      assert.ok(hub.includes(`href="${route}"`), `${route}: localized listing`);
      const header = body.match(/<header\b[^>]*>([\s\S]*?)<\/header>/)[1];
      assert.ok(header.includes(`href="/${locale === 'en' ? 'ar' : 'en'}/blog/${article.slug}/"`), `${route}: corresponding translation switch`);
      for (const table of rendered.matchAll(/<div\b([^>]*role="region"[^>]*)>/g)) {
        const region = attrs(table[1]); assert.equal(region.tabindex, '0');
        assert.ok(rendered.includes(`id="${region['aria-labelledby']}"`), `${route}: accessible table label`);
      }
      if (snapshot.tables) assert.match(rendered, /scope="col"/);
    }
  }
  assert.doesNotMatch(sitemap, /editorial|source-evidence|\.zip|drafts/i);
  const firstParagraphs = publishedArticles.flatMap((article) => ['en', 'ar'].map((locale) => article[locale].body.split('\n\n')[0]));
  for (const file of await readdir('out/_next/static/chunks')) {
    if (!file.endsWith('.js')) continue;
    const clientScript = await readFile(`out/_next/static/chunks/${file}`, 'utf8');
    for (const paragraph of firstParagraphs) assert.ok(!clientScript.includes(paragraph), `${file}: manuscripts stay outside shared client JavaScript`);
  }
});
