import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import test from 'node:test';
import { createHash } from 'node:crypto';
import { attrs, text, tokens } from '../scripts/seo-content-audit.mjs';
import domesticServices from './domestic-service-refresh-expectations.cjs';

const origin = 'https://inayadomestic.ae';
const publicationSchedule = JSON.parse(await readFile('content/article-publication-schedule.json', 'utf8'));
const currentRefreshes = JSON.parse(await readFile('content/research/2026-10-24/article-refreshes.json', 'utf8'));

test('services hubs render all three complete approved summaries in their matching cards', async () => {
  for (const locale of ['en', 'ar']) {
    const html = await readFile(`out/${locale}/services/index.html`, 'utf8');
    const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    const cards = [...body.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].filter((match) => /<h3\b/.test(match[2]));
    for (const [slug, copy] of Object.entries(domesticServices.hubSummaries)) {
      const matches = cards.filter((match) => attrs(match[1]).href?.replace(/\/$/, '') === `/${locale}/services/${slug}`);
      assert.equal(matches.length, 1, `${locale}/${slug}: one actual service card`);
      const paragraphs = [...matches[0][2].matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map((match) => text(match[1]));
      assert.deepEqual(paragraphs, [copy[locale]], `${locale}/${slug}: complete approved summary is visibly rendered in the matching card`);
    }
  }
});

test('domestic-service refreshes preserve the original manuscripts and render complete language-matched additions', async () => {
  const source = await readFile('lib/published-article-content.ts', 'utf8');
  const articles = JSON.parse(source.split('export const publishedArticles: PublishedArticleContent[] = ')[1].trim().replace(/;$/, ''));
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  assert.equal([...sitemap.matchAll(/<loc>/g)].length, 230, 'existing canonical route count preserved');
  assert.equal(articles.length, 37, 'refresh existing publications instead of adding duplicate topics');
  assert.deepEqual(currentRefreshes.entries.map(({ slug }) => slug).sort(), [
    'choosing-domestic-worker-agency-ajman', 'domestic-worker-hiring-stages-timelines', 'four-hour-eight-hour-maid-visit-plan'
  ]);
  for (const refresh of currentRefreshes.entries) {
    const article = articles.find(({ slug }) => slug === refresh.slug);
    assert.equal(article.updated, '2026-10-24');
    for (const locale of ['en', 'ar']) {
      const copy = refresh[locale];
      const parts = article[locale].body.split(`\n\n${copy.separator}\n\n`);
      assert.equal(parts.length, 2, `${locale}/${refresh.slug}: unique addition boundary`);
      assert.equal(createHash('sha256').update(parts[0]).digest('hex'), copy.baseBodySha256, 'original complete body preserved');
      assert.equal(parts[1], copy.body, 'complete reviewed addition retained');
      assert.ok(copy.body.split(/\s+/).length >= 250, 'substantive practical addition');
      const html = await readFile(`out/${locale}/blog/${refresh.slug}/index.html`, 'utf8');
      const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
      const renderedArticle = body.match(/<article\b[^>]*data-published-article="content"[^>]*>([\s\S]*?)<\/article>/)?.[1];
      assert.ok(renderedArticle, 'published article is rendered');
      const boundary = [...renderedArticle.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)]
        .find((match) => text(match[1]) === copy.separator.slice(3));
      assert.ok(boundary, 'new section heading is visible');
      const addition = renderedArticle.slice(boundary.index);
      // Inline anchors must not introduce spaces into Arabic clitics such as
      // و[التنظيف](...). Block boundaries still receive normal text spacing.
      const visible = text(addition.replace(/<\/?(?:a|strong)\b[^>]*>/g, ''));
      const plain = (value) => tokens(value.replace(/\[([^\]]+)\]\(https:\/\/[^)]+\)/g, '$1').replace(/\*\*/g, '')).join(' ');
      const renderedTokens = tokens(visible).join(' ');
      for (const block of copy.body.split('\n\n')) {
        if (block.startsWith('|')) {
          for (const row of block.split('\n').filter((line) => !/^\|[\s:|-]+\|$/.test(line))) {
            const cells = row.slice(1, -1).split('|').map((cell) => plain(cell));
            assert.ok(renderedTokens.includes(cells.join(' ')), 'new worksheet/comparison row rendered in full');
          }
        } else {
          assert.ok(renderedTokens.includes(plain(block.replace(/^## /, ''))), 'complete new paragraph or heading is visible');
        }
      }
      assert.match(addition, /<table\b/, 'the new addition itself contains its practical table');
      for (const [, link] of copy.body.matchAll(/\[[^\]]+\]\((https:\/\/[^)]+)\)/g)) {
        assert.ok(body.includes(`href="${link.replace(/&/g, '&amp;')}"`), `clickable source/destination ${link}`);
        const target = new URL(link);
        if (target.origin === origin) {
          assert.ok(target.pathname.startsWith(`/${locale}/`), 'internal link keeps language');
          assert.ok(sitemap.includes(`<loc>${link}</loc>`), 'internal destination is canonical');
        }
      }
      assert.ok(html.includes(`href="${origin}/${locale}/blog/${refresh.slug}/"`), 'same existing canonical retained');
      assert.doesNotMatch(visible, /TODO|TBD|pending scope|awaiting approval|Golden Visa|tourist visa|company formation/i);
    }
  }
});

test('Tadbeer, cleaning and domestic-worker typing are visible with matching factual FAQs', async () => {
  const targets = {
    recruitment: { en: /Tadbeer centre in Ajman/, ar: /مركز عناية تدبير في عجمان/ },
    housekeeping: { en: /4 hours for AED 120 or 8 hours for AED 200/, ar: /4 ساعات مقابل 120 درهماً أو 8 ساعات مقابل 200 درهم/ },
    'maid-visa': { en: /Domestic-worker application typing and data review before submission/, ar: /طباعة الطلبات المرتبطة بالعمالة المنزلية ومراجعة البيانات قبل التقديم/ }
  };
  for (const locale of ['en', 'ar']) {
    for (const [slug, expected] of Object.entries(targets)) {
      const html = await readFile(`out/${locale}/services/${slug}/index.html`, 'utf8');
      const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
      const visible = text(body);
      assert.match(visible, expected[locale], `${locale}/${slug}: actual service scope visible`);
      const graph = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)]
        .filter((match) => attrs(match[1]).type === 'application/ld+json')
        .flatMap((match) => JSON.parse(match[2])['@graph'] || []);
      const faq = graph.find((node) => node['@type'] === 'FAQPage');
      assert.ok(faq, 'FAQ schema is present');
      assert.ok(faq.mainEntity?.length, 'FAQ schema contains actual questions');
      if (slug === 'recruitment') assert.ok(faq.mainEntity.some((item) => item.name === (locale === 'en' ? 'How do I choose the right Tadbeer service for my request?' : 'كيف أختار خدمة تدبير المناسبة لطلبي؟')), 'new Tadbeer question is included');
      if (slug === 'maid-visa') assert.ok(faq.mainEntity.some((item) => item.name === (locale === 'en' ? 'Do typing and submission mean the application is approved?' : 'هل الطباعة وتقديم الطلب يعنيان الموافقة؟')), 'new typing question is included');
      for (const question of faq.mainEntity) {
        assert.ok(visible.includes(question.name), 'schema question visible');
        assert.ok(visible.includes(question.acceptedAnswer.text), 'schema answer matches rendered facts');
      }
      assert.doesNotMatch(visible, /government-owned|official Amer centre|ICP-authorised centre|Golden Visa|tourist visa|company formation/i);
      if (slug === 'recruitment') assert.ok(body.includes('href="https://mohre.gov.ae/en/services/approved-services-centers-new1/inaya-domestic-workers-services-s-p-s-l-l-c"'), 'exact official centre record linked');
      if (slug === 'maid-visa') {
        assert.match(visible, locale === 'en' ? /approval and completion dates are not guaranteed/ : /لا توجد ضمانات للموافقة أو تاريخ الإنجاز/);
        for (const phrase of locale === 'en' ? ['renewal', 'cancellation', 'status change', 'contract-related', 'Emirates ID', 'medical', 'insurance'] : ['التجديد', 'الإلغاء', 'تعديل الوضع', 'العقد', 'الهوية الإماراتية', 'الفحص الطبي', 'التأمين']) assert.ok(visible.includes(phrase), `domestic-worker step ${phrase}`);
      }
    }
    const ajman = text((await readFile(`out/${locale}/maid-services-ajman/index.html`, 'utf8')).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, ''));
    assert.match(ajman, locale === 'en' ? /INAYA Tadbeer centre at Grand Mall, Ajman/ : /مركز عناية تدبير في جراند مول بعجمان/);
  }
});
// The monthly checklist replaces three superseded tier sections with one
// six-package explanation; all eight responsibility/terms sections remain.
const sectionCounts = [7, 9, 5, 6, 10, 5, 5];
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
  const { guideUpdated } = JSON.parse(await readFile('tests/fixtures/poster-pricing-changes.json', 'utf8'));
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.equal(urls.length, 230);
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
      assert.equal([...article.matchAll(/<h2\b/g)].length, sectionCounts[slugs.indexOf(slug)], `${route}: complete approved explanatory sections`);
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
      assert.equal(articleNode.datePublished, publicationSchedule[slug]);
      assert.equal(articleNode.dateModified, guideUpdated[slug], `${route}: only substantively revised guides receive the new date`);
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
        for (const amount of ['120', '200', '1,120', '3,500', '3,250', '3,000']) assert.ok(visible.includes(amount), `${route}: approved package amount ${amount}`);
        assert.doesNotMatch(visible, /1,500|2,500|\bEssential\b|\bSignature\b|INAYA Black/);
        assert.match(visible, locale === 'en' ? /3,250.*?(?:month|monthly)/ : /3,250.*?(?:شهر|شهري)/);
        assert.match(visible, locale === 'en' ? /3,000.*?(?:month|monthly)/ : /3,000.*?(?:شهر|شهري)/);
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
// They protect all forty original versions against omission or accidental
// rewriting. The three approved supplements and their visuals are additive;
// the customer-series test independently checks their complete exported copy.
test('twenty original bilingual topics retain exact copy and references alongside the approved customer-series additions', async () => {
  const approved = JSON.parse(await readFile('tests/fixtures/published-article-content.json', 'utf8'));
  const contentModule = await readFile('lib/published-article-content.ts', 'utf8');
  const publishedArticles = JSON.parse(contentModule.split('export const publishedArticles: PublishedArticleContent[] = ')[1].trim().replace(/;$/, ''));
  const manifest = JSON.parse(await readFile('content/research/2026-10-20/article-manifest.json', 'utf8'));
  const supplements = new Map(manifest.filter((entry) => entry.mode === 'update').map((entry) => [entry.slug, entry]));
  const worksheetGuides = new Set(['domestic-worker-hiring-costs-uae', 'domestic-worker-skills-language-assessment', 'agreeing-domestic-worker-household-duties', 'domestic-worker-interview-trial-probation', 'new-maid-first-week-checklist', 'maid-daily-instructions-handover-template']);
  assert.deepEqual([...supplements.keys()].sort(), ['agreeing-domestic-worker-household-duties', 'domestic-worker-hiring-costs-uae', 'domestic-worker-leave-travel-planning']);
  const sha = (value) => createHash('sha256').update(value).digest('hex');
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  assert.equal(approved.length, 20);
  assert.equal(publishedArticles.length, 37, 'twenty preserved publications plus seventeen non-duplicate new topics');
  assert.equal(new Set(publishedArticles.map((article) => article.slug)).size, 37);
  const allowedHosts = new Set(['inayadomestic.ae', 'uaelegislation.gov.ae', 'mohre.gov.ae', 'www.mohre.gov.ae', 'mohap.gov.ae', 'u.ae']);
  for (const expected of approved) {
    const article = publishedArticles.find((entry) => entry.slug === expected.slug);
    assert.ok(article, `${expected.slug}: original publication retained`);
    for (const locale of ['en', 'ar']) {
      const route = `/${locale}/blog/${article.slug}/`;
      const url = `${origin}${route}`;
      const copy = article[locale];
      const snapshot = expected[locale];
      const supplement = supplements.get(article.slug)?.languages[locale];
      const refresh = currentRefreshes.entries.find((entry) => entry.slug === article.slug)?.[locale];
      let originalMarkdown = copy.body;
      if (refresh) {
        const parts = originalMarkdown.split(`\n\n${refresh.separator}\n\n`);
        assert.equal(parts.length, 2, `${route}: one current additive refresh boundary`);
        assert.equal(parts[1], refresh.body, `${route}: complete approved current addition`);
        originalMarkdown = parts[0];
      }
      if (supplement) {
        const separator = `\n\n${supplement.supplementSeparator}\n\n`;
        const parts = originalMarkdown.split(separator);
        assert.equal(parts.length, 2, `${route}: one explicit approved supplement boundary`);
        assert.ok(parts[1].trim(), `${route}: substantive addition retained after the original`);
        originalMarkdown = parts[0];
      }
      assert.equal(copy.title, snapshot.title, `${route}: approved title`);
      assert.equal(sha(originalMarkdown), snapshot.body_sha256, `${route}: complete original Markdown unchanged`);
      const html = await readFile(`out${route}index.html`, 'utf8');
      const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
      const rendered = body.match(/<article\b[^>]*data-published-article="content"[^>]*>([\s\S]*?)<\/article>/)?.[1];
      assert.ok(rendered, `${route}: complete visible article`);
      // The new chart is separately asserted as visible by the series test. Its
      // descriptive text must not change the original manuscript fingerprint.
      let originalRendered = rendered.replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/g, '');
      // The separate workbook download is additive, not a manuscript edit.
      originalRendered = originalRendered.replace(/<section\b[^>]*data-guide-worksheets="true"[^>]*>[\s\S]*?<\/section>/g, '');
      if (refresh) {
        const boundary = [...originalRendered.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)]
          .find((match) => text(match[1]) === refresh.separator.slice(3));
        assert.ok(boundary, `${route}: current addition follows preserved copy`);
        originalRendered = originalRendered.slice(0, boundary.index);
      }
      if (worksheetGuides.has(article.slug)) {
        assert.match(rendered, /data-guide-worksheets="true"/);
        assert.match(rendered, /href="\/downloads\/inaya-household-planning-worksheets\.xlsx"[^>]*download/);
        assert.ok((await readFile('out/downloads/inaya-household-planning-worksheets.xlsx')).length > 0);
      }
      if (supplement) {
        const boundary = [...originalRendered.matchAll(/<h2\b([^>]*)>/g)]
          .find((match) => attrs(match[1]).id === `article-section-${snapshot.heading_count + 1}`);
        assert.ok(boundary, `${route}: the supplement follows every original heading`);
        originalRendered = originalRendered.slice(0, boundary.index);
      }
      assert.equal(sha(text(originalRendered)), snapshot.visible_sha256, `${route}: every original word, figure and condition rendered`);
      assert.equal([...originalRendered.matchAll(/<h2\b/g)].length, snapshot.heading_count, `${route}: all original headings`);
      assert.equal([...originalRendered.matchAll(/<li\b/g)].length, snapshot.list_items, `${route}: all original list items`);
      assert.equal([...originalRendered.matchAll(/<table\b/g)].length, snapshot.tables, `${route}: all original tables`);
      const links = [...originalRendered.matchAll(/<a\b([^>]*)>/g)].map((match) => attrs(match[1]).href);
      const fullLinks = [...rendered.matchAll(/<a\b([^>]*)>/g)].map((match) => attrs(match[1]).href);
      assert.deepEqual(links, snapshot.links, `${route}: all original clickable references and internal links`);
      for (const link of links) {
        assert.ok(allowedHosts.has(new URL(link).hostname), `${route}: official or INAYA source`);
        if (new URL(link).origin === origin) assert.ok(new URL(link).pathname.startsWith(`/${locale}/`), `${route}: internal link language`);
      }
      const languageText = locale === 'ar' ? text(originalRendered).replace(/INAYA|info@inayadomestic\.ae/g, '') : text(originalRendered);
      assert.doesNotMatch(languageText, locale === 'ar' ? /[A-Za-z]/ : /[\u0600-\u06ff]/, `${route}: article language with approved brand names`);
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
      assert.equal(schema.datePublished, publicationSchedule[article.slug]); assert.equal(schema.dateModified, refresh ? currentRefreshes.date : worksheetGuides.has(article.slug) ? '2026-10-22' : supplement ? '2026-10-20' : expected.updated);
      assert.equal(schema.author.name, locale === 'ar' ? 'فريق تحرير عناية للعمالة المنزلية' : 'INAYA Domestic Workers Editorial Team');
      assert.deepEqual(schema.citation, [...new Set(fullLinks.filter((link) => new URL(link, origin).origin !== origin))]);
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
