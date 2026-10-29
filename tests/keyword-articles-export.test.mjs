import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import onPageSpec from './on-page-spec-expectations.cjs';
import amendment from './five-guides-amendment-expectations.cjs';
import { attrs, text, tokens } from '../scripts/seo-content-audit.mjs';

const origin = 'https://inayadomestic.ae';
// The original hub now exposes six crawlable, canonical archive pages. Read all
// six listings without weakening any complete manuscript or reference checks.
const listingCache = new Map();
function blogListing(locale) {
  if (!listingCache.has(locale)) listingCache.set(locale, Promise.all(
    ['blog', ...onPageSpec.archiveRoutes].map(route => readFile(`out/${locale}/${route}/index.html`, 'utf8'))
  ).then(pages => pages.join('\n')));
  return listingCache.get(locale);
}
const locales = ['en', 'ar'];
const reviewedDate = '2026-10-24';
const articles = JSON.parse(await readFile('content/keyword-articles-20261024.json', 'utf8'));
// This fixture was computed from the independently reviewed original manuscript
// files, after checking each original hash against the publication receipt.
// It is deliberately separate from the production data and compact metadata.
const review = JSON.parse(await readFile('tests/fixtures/keyword-articles-reviewed-20261024.json', 'utf8'));
const receipt = JSON.parse(await readFile('content/research/2026-10-24/keyword-21-publication-input.json', 'utf8'));
const localeAmendment = JSON.parse(await readFile('content/research/2026-10-24/keyword-21-user-locale-amendment.json', 'utf8'));
const amendmentPins = JSON.parse(await readFile('tests/fixtures/keyword-article-locale-amendments-20261024.json', 'utf8'));
const sitemap = await readFile('out/sitemap.xml', 'utf8');
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(match => match[1]);
const urls = entries.map(entry => entry.match(/<loc>(.*?)<\/loc>/)[1]);
const canonicalUrls = new Set(urls);
const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])])) : value;
const hash = value => createHash('sha256').update(value).digest('hex');
const copyHash = copy => hash(JSON.stringify(stable(Object.fromEntries(['title', 'description', 'body', 'visuals', 'references'].map(key => [key, copy[key]])))));
const plain = value => tokens(value.replace(/\[([^\]]+)\]\(https:\/\/[^)]+\)/g, '$1').replace(/\*\*/g, '')).join(' ');
const withoutScripts = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
const visibleTokens = html => tokens(text(html.replace(/<\/?(?:a|strong)\b[^>]*>/g, ''))).join(' ');
const linksIn = body => [...body.matchAll(/\[[^\]]+\]\((https:\/\/[^)]+)\)/g)].map(match => match[1]);

function structuredGraph(html) {
  return [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)]
    .filter(match => attrs(match[1]).type === 'application/ld+json')
    .flatMap(match => {
      const value = JSON.parse(match[2]);
      return value['@graph'] ?? [value];
    });
}

test('the new batch is exactly 21 independently reviewed pairs while all old 232 canonical URLs retain their order', () => {
  assert.equal(articles.length, 21);
  assert.equal(review.articles.length, 21);
  assert.deepEqual(articles.map(article => article.id), Array.from({ length: 21 }, (_, index) => `K${String(index + 1).padStart(2, '0')}`));
  assert.equal(new Set(articles.map(article => article.slug)).size, 21);
  assert.equal(new Set(articles.map(article => article.keyword)).size, 21);
  assert.equal(review.previousCanonicalUrls.length, 232);
  assert.equal(new Set(review.previousCanonicalUrls).size, 232);
  assert.equal(urls.length, 284);
  assert.equal(canonicalUrls.size, 284);
  assert.deepEqual(urls.slice(0, 232), review.previousCanonicalUrls, 'the complete prior inventory and order are preserved');
  const expectedNewUrls = review.articles.flatMap(article => locales.map(locale => `${origin}/${locale}/blog/${article.slug}/`));
  assert.deepEqual(urls.slice(232, onPageSpec.originalCanonicalCount), expectedNewUrls, 'the original 42 reviewed copies retain their exact positions');
  assert.deepEqual(urls.slice(onPageSpec.originalCanonicalCount), onPageSpec.archiveRoutes.flatMap(route => locales.map(locale => `${origin}/${locale}/${route}/`)), 'only ten reviewed archive URLs are appended after all original 274 canonicals');
  assert.ok(expectedNewUrls.every(url => !review.previousCanonicalUrls.includes(url)), 'new slugs do not replace old publications');
  const datedEntries = entries.filter(entry => entry.includes('<lastmod>'));
  const countryPhotoRoutes = ['services/countries-we-source-from', ...[
    'philippines', 'sri-lankan', 'nepali', 'indian', 'bangladeshi', 'ethiopian',
    'kenyan', 'ugandan', 'ghanaian', 'sierra-leone', 'indonesian', 'myanmar',
  ].map(country => `maid-source-countries/${country}-maid-uae`)];
  const countryPhotoUrls = countryPhotoRoutes.flatMap(route => locales.map(locale => `${origin}/${locale}/${route}/`));
  const updatedUrls = [...countryPhotoUrls, ...[...onPageSpec.onPageUpdatedRoutes, ...onPageSpec.archiveRoutes].flatMap(route => locales.map(locale => `${origin}/${locale}/${route ? `${route}/` : ''}`))];
  const currentEntries = datedEntries.filter(entry => entry.includes('<lastmod>2026-10-28</lastmod>'));
  assert.equal(datedEntries.length, 250, 'retain all248 dated URLs and add only the two substantively updated privacy-policy copies');
  assert.deepEqual(currentEntries.map(entry => entry.match(/<loc>(.*?)<\/loc>/)[1]).sort(), updatedUrls.sort(), 'only 26 country-photo, 20 substantive on-page and ten new archive URLs receive 28 October');
  for (const entry of currentEntries) {
    assert.deepEqual([...entry.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map(match => match[1]), ['2026-10-28'], 'each reviewed updated page has one exact substantive modification date');
  }
  assert.equal(datedEntries.filter(entry => !entry.includes('<lastmod>2026-10-28</lastmod>')).length, 194, 'only the two privacy-policy copies add date coverage outside28October');
  const expectedOctober29Urls = [
    ...amendment.targetSlugs.flatMap(slug => locales.map(locale => `${origin}/${locale}/blog/${slug}/`)),
    ...locales.map(locale => `${origin}/${locale}/privacy-policy/`)
  ];
  assert.equal(expectedOctober29Urls.length, 12);
  assert.deepEqual(datedEntries.filter(entry => entry.includes('<lastmod>2026-10-29</lastmod>')).map(entry => entry.match(/<loc>(.*?)<\/loc>/)[1]).sort(), expectedOctober29Urls.sort(), 'only the ten reviewed guide copies and two privacy-policy copies receive29October');
  assert.equal(receipt.articlePairs, 21);
  assert.equal(receipt.localePages, 42);
  assert.equal(receipt.manuscriptHashes.length, 42);
});

test('all 42 full publication copies match independent reviewed hashes, metadata and bounded visual facts', async () => {
  const aggregate = (await readFile('content/keyword-articles-20261024.json', 'utf8')).replace(/\r\n/g, '\n');
  assert.equal(hash(amendment.historicalSource('content/keyword-articles-20261024.json', aggregate)), receipt.fullDataSha256, 'the reviewed aggregate input is immutable after Git checkout line-ending normalization');
  const source = await readFile('lib/keyword-article-metadata.ts', 'utf8');
  const metadata = JSON.parse(source.split('export const keywordArticleMetadata: KeywordArticleMetadata[] = ')[1].trim().replace(/;$/, ''));
  assert.equal(metadata.length, 21);
  for (const expected of review.articles) {
    const article = articles.find(row => row.id === expected.id);
    const meta = metadata.find(row => row.id === expected.id);
    assert.ok(article && meta, `${expected.id}: full copy and compact metadata exist`);
    for (const key of ['id', 'keyword', 'slug']) {
      assert.equal(article[key], expected[key]);
      assert.equal(meta[key], expected[key]);
    }
    assert.equal(article.published, reviewedDate);
    assert.equal(article.updated, amendment.dateFor(article.slug, reviewedDate));
    for (const locale of locales) {
      const copy = article[locale];
      const label = `${article.id}/${locale}`;
      const sourceHash = receipt.manuscriptHashes.find(row => row.id === article.id && row.locale === locale)?.sha256;
      const pin = amendmentPins.amendments.find(row => row.id === article.id && row.locale === locale);
      if (copyHash(amendment.historicalRecord(article, 'keyword')[locale]) === expected[locale].contentSha256) {
        assert.equal(sourceHash, expected[locale].reviewedManuscriptSha256, `${label}: original independent source-review provenance`);
      } else {
        assert.ok(pin, `${label}: a copy change requires the exact user-approved locale amendment`);
        const amendment = localeAmendment.articleAmendments.find(row => row.id === article.id && row.locale === locale);
        assert.equal(copyHash(copy), pin.amendedContentSha256, `${label}: exact independently pinned amended full copy`);
        assert.equal(copy.body, amendment.after);
        assert.equal(copyHash({ ...copy, body: amendment.before }), expected[locale].contentSha256, `${label}: restoring only the approved body reconstructs the original reviewed full copy`);
        assert.equal(sourceHash, pin.amendedManuscriptSha256, `${label}: exact current source hash through the original-review amendment chain`);
      }
      assert.equal(meta[locale].title, copy.title);
      assert.equal(meta[locale].description, copy.description);
      assert.deepEqual(meta[locale].citations, copy.references.map(reference => reference.url));
      assert.ok(meta[locale].searchTitle.trim());
      assert.ok(copy.body.split(/\s+/).length >= (locale === 'en' ? 1100 : 850), `${label}: full manuscript, not a summary`);
      assert.ok((copy.body.match(/^## /gm) ?? []).length >= 8);
      assert.equal(copy.visuals.filter(visual => visual.kind === 'flow').length, 1);
      assert.equal(copy.visuals.filter(visual => visual.kind === 'graph').length, 1);
      const graph = copy.visuals.find(visual => visual.kind === 'graph');
      const nodeIds = new Set(graph.nodes.map(node => node.id));
      assert.equal(nodeIds.size, graph.nodes.length);
      for (const edge of graph.edges) assert.ok(nodeIds.has(edge.from) && nodeIds.has(edge.to), `${label}: graph relationship has valid endpoints`);
      for (const link of linksIn(copy.body)) {
        const target = new URL(link);
        if (target.origin === origin) {
          assert.ok(target.pathname.startsWith(`/${locale}/`), `${label}: internal link stays in the article language`);
          assert.ok(canonicalUrls.has(link), `${label}: internal destination is canonical`);
        }
      }
    }
    assert.deepEqual(article.en.visuals.map(visual => [visual.id, visual.kind]), article.ar.visuals.map(visual => [visual.id, visual.kind]));
    const enGraph = article.en.visuals.find(visual => visual.kind === 'graph');
    const arGraph = article.ar.visuals.find(visual => visual.kind === 'graph');
    assert.deepEqual(enGraph.edges.map(({ from, to }) => [from, to]), arGraph.edges.map(({ from, to }) => [from, to]));
  }
  const priceArticle = articles.find(article => article.id === 'K10');
  for (const locale of locales) {
    const chart = priceArticle[locale].visuals.find(visual => visual.kind === 'bars');
    assert.deepEqual(chart.items.map(item => item.value), [3500, 3250, 3000]);
    assert.match(chart.items[1].label, locale === 'en' ? /six-month commitment/i : /ستة أشهر/);
    assert.match(chart.items[2].label, locale === 'en' ? /twelve-month commitment/i : /اثني عشر شهراً/);
  }
});

test('the locale amendment is limited to exactly six English keyword quotations with original review hashes preserved', () => {
  const ids = ['K15', 'K16', 'K17', 'K18', 'K19', 'K20'];
  assert.deepEqual(amendmentPins.amendments.map(row => row.id), ids);
  assert.deepEqual(localeAmendment.articleAmendments.map(row => row.id), ids);
  assert.equal(localeAmendment.originalEnglishGatePreserved, 'ENGLISH-PHASE-GATE-20261024.json');
  assert.equal(localeAmendment.changedEnglishArticles, 6);
  assert.equal(localeAmendment.changedArabicArticles, 0);
  assert.equal(localeAmendment.sourceReviewAndOtherContentUnchanged, true);
  for (const pin of amendmentPins.amendments) {
    const amendment = localeAmendment.articleAmendments.find(row => row.id === pin.id);
    const original = review.articles.find(row => row.id === pin.id);
    assert.equal(pin.locale, 'en');
    assert.equal(pin.field, 'body');
    assert.equal(amendment.locale, pin.locale);
    assert.equal(amendment.field, pin.field);
    assert.equal(pin.keyword, original.keyword);
    assert.equal(amendment.originalManuscriptSha256, original.en.reviewedManuscriptSha256);
    assert.equal(amendment.originalManuscriptSha256, pin.originalManuscriptSha256);
    assert.equal(amendment.amendedManuscriptSha256, pin.amendedManuscriptSha256);
    assert.equal(hash(amendment.before), pin.beforeBodySha256);
    assert.equal(hash(amendment.after), pin.afterBodySha256);
    const quotation = `—${original.keyword}—`;
    assert.equal(amendment.before.split(quotation).length - 1, 1, `${pin.id}: only one original Arabic keyword quotation`);
    assert.equal(amendment.after, amendment.before.replace(quotation, pin.id === 'K20' ? ' ' : ', '), `${pin.id}: only the exact removed quotation and grammatical separator may differ`);
    assert.doesNotMatch(amendment.after.replace(/https:\/\/[^\s)]+/g, ''), /\p{Script=Arabic}/u);
  }
});

test('all 42 exports render complete reviewed paragraphs, tables, FAQs and labelled accessible visuals without raw placeholders', async () => {
  for (const article of articles) for (const locale of locales) {
    const route = `/${locale}/blog/${article.slug}/`;
    const url = `${origin}${route}`;
    const copy = article[locale];
    const html = await readFile(path.join('out', locale, 'blog', article.slug, 'index.html'), 'utf8');
    const body = withoutScripts(html);
    const rendered = body.match(new RegExp(`<article\\b[^>]*data-keyword-article="${article.id}"[^>]*>([\\s\\S]*?)<\\/article>`))?.[1];
    assert.ok(rendered, `${route}: the full new article family is rendered`);
    const visible = visibleTokens(rendered);
    assert.equal([...body.matchAll(/<h1\b/g)].length, 1, `${route}: one H1`);
    assert.equal(text(body.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1]), copy.title);
    const main = body.slice(body.indexOf('<main'), body.lastIndexOf('</main>') + 7);
    const hero = [...main.matchAll(/<section\b[^>]*>([\s\S]*?)<\/section>/g)].find(match => /<h1\b/.test(match[1]))?.[1];
    assert.ok(hero, `${route}: article hero exists`);
    const targetLocale = locale === 'en' ? 'ar' : 'en';
    const heroSwitch = [...hero.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].filter(match => attrs(match[1]).href === `/${targetLocale}/blog/${article.slug}/`);
    assert.equal(heroSwitch.length, 1, `${route}: one explicit translated counterpart link in the hero`);
    assert.equal(text(heroSwitch[0][2]), locale === 'en' ? 'Read this article in Arabic' : 'اقرأ هذا المقال بالإنجليزية', `${route}: the language-link instruction uses the page language`);
    assert.doesNotMatch(text(hero), locale === 'en' ? /[\u0600-\u06ff]/ : /[A-Za-z]/, `${route}: hero visible prose stays in its own locale`);
    assert.doesNotMatch(rendered, /\{\{visual:|^###?\s|TODO|TBD|<script\b/m, `${route}: no unrendered manuscript syntax or executable content`);
    const expectedTables = copy.body.split(/\r?\n\s*\r?\n/).filter(block => block.startsWith('|'));
    assert.ok(expectedTables.length >= 2);
    assert.equal([...rendered.matchAll(/<table\b/g)].length, expectedTables.length, `${route}: every reviewed table is rendered`);
    for (const block of copy.body.split(/\r?\n\s*\r?\n/)) {
      if (/^\{\{visual:[a-z0-9_-]+\}\}$/.test(block)) continue;
      if (block.startsWith('|')) {
        for (const row of block.split('\n').filter(line => !/^\|[\s:|-]+\|$/.test(line))) {
          assert.ok(visible.includes(row.slice(1, -1).split('|').map(plain).join(' ')), `${route}: full reviewed table row ${plain(row).slice(0, 60)}`);
        }
      } else if (block.startsWith('- ')) {
        for (const item of block.split('\n')) assert.ok(visible.includes(plain(item.replace(/^- /, ''))), `${route}: complete list item`);
      } else {
        assert.ok(visible.includes(plain(block.replace(/^#{2,3} /, ''))), `${route}: complete paragraph, heading or FAQ ${plain(block).slice(0, 60)}`);
      }
    }
    const headings = [...rendered.matchAll(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/g)];
    const headingIds = headings.map(match => attrs(match[1]).id).filter(Boolean);
    assert.equal(new Set(headingIds).size, headingIds.length, `${route}: table/TOC targets are unique`);
    for (const table of rendered.matchAll(/<table\b([^>]*)>/g)) assert.ok(headingIds.includes(attrs(table[1])['aria-labelledby']), `${route}: table has a descriptive section label`);
    const figures = [...rendered.matchAll(/<figure\b([^>]*)>([\s\S]*?)<\/figure>/g)];
    assert.equal(figures.length, copy.visuals.length);
    for (const visual of copy.visuals) {
      const figure = figures.find(match => attrs(match[1])['data-keyword-visual'] === visual.kind);
      assert.ok(figure, `${route}: ${visual.kind} visual exists`);
      const figureText = visibleTokens(figure[2]);
      for (const value of [visual.title, visual.caption, ...(visual.steps ?? []), ...(visual.nodes ?? []).map(node => node.label), ...(visual.edges ?? []).map(edge => edge.label), ...(visual.items ?? []).map(item => item.label)]) {
        assert.ok(figureText.includes(plain(value)), `${route}: complete translated visual text ${value}`);
      }
      const figureAttrs = attrs(figure[1]);
      assert.ok(figureAttrs['aria-labelledby'] && figureAttrs['aria-describedby'], `${route}: labelled visual with explanatory caption`);
      if (visual.kind === 'graph') {
        const rows = figure[2].match(/<ol\b[^>]*data-keyword-relationship-rows="true"[^>]*>([\s\S]*?)<\/ol>/)?.[1];
        assert.ok(rows, `${route}: responsive relationship rows are permanently visible`);
        const labels = Object.fromEntries(visual.nodes.map(node => [node.id, node.label]));
        const actualRows = [...rows.matchAll(/<li\b[^>]*data-keyword-relationship="true"[^>]*>([\s\S]*?)<\/li>/g)].map(match => {
          const from = match[1].match(/<strong\b[^>]*data-relationship-from="true"[^>]*>([\s\S]*?)<\/strong>/)?.[1];
          const relationship = match[1].match(/<span\b[^>]*data-relationship-label="true"[^>]*>([\s\S]*?)<\/span>/)?.[1];
          const to = match[1].match(/<strong\b[^>]*data-relationship-to="true"[^>]*>([\s\S]*?)<\/strong>/)?.[1];
          assert.ok(from && relationship && to, `${route}: each relationship row has complete labelled fields`);
          return { from: text(from), relationship: text(relationship), to: text(to) };
        });
        assert.deepEqual(actualRows, visual.edges.map(edge => ({ from: labels[edge.from], relationship: edge.label, to: labels[edge.to] })), `${route}: every source, relation and destination is visible in exact reviewed order`);
        assert.doesNotMatch(figure[2], /<svg\b|<details\b|data-keyword-graph-legend/, `${route}: graph labels are not cramped in a fixed drawing or hidden behind a disclosure`);
      }
    }
    const actualLinks = [...rendered.matchAll(/<a\b([^>]*)>/g)].map(match => attrs(match[1]).href);
    for (const link of linksIn(copy.body)) assert.ok(actualLinks.includes(link), `${route}: reviewed source or internal link is clickable`);
    for (const reference of copy.references) {
      assert.ok(actualLinks.includes(reference.url));
      assert.ok(visible.includes(plain(reference.title)));
    }
    const hub = await blogListing(locale);
    assert.ok(hub.includes(`href="${route}"`), `${route}: discoverable from the matching-language hub`);
    for (const id of headingIds) assert.ok(body.includes(`href="#${id}"`), `${route}: each section appears in the table of contents`);
    assert.match(body, /<time\b[^>]*dateTime="2026-10-24"|<time\b[^>]*datetime="2026-10-24"/);
    const linkTags = [...html.matchAll(/<link\b([^>]*)>/g)].map(match => attrs(match[1]));
    assert.equal(linkTags.find(link => link.rel === 'canonical')?.href, url);
    for (const language of ['en', 'ar', 'x-default']) assert.equal(linkTags.find(link => link.rel === 'alternate' && (link.hrefLang ?? link.hreflang) === language)?.href, `${origin}/${language === 'ar' ? 'ar' : 'en'}/blog/${article.slug}/`);
    assert.doesNotMatch(html, /<meta[^>]+name="robots"[^>]+noindex/);
    const graph = structuredGraph(html);
    const articleNode = graph.find(node => node['@type'] === 'Article');
    assert.ok(articleNode, `${route}: Article schema exists`);
    assert.equal(articleNode.url, url);
    assert.equal(articleNode.headline, copy.title);
    assert.equal(articleNode.inLanguage, locale);
    assert.equal(articleNode.datePublished, reviewedDate);
    assert.equal(articleNode.dateModified, amendment.dateFor(article.slug, reviewedDate));
    assert.equal(articleNode.mainEntityOfPage['@id'], `${url}#webpage`);
    assert.deepEqual(articleNode.citation, copy.references.map(reference => reference.url));
    const entry = entries.find(value => value.includes(`<loc>${url}</loc>`));
    assert.deepEqual([...entry.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map(match => match[1]), [amendment.dateFor(article.slug, reviewedDate)]);
  }
});
