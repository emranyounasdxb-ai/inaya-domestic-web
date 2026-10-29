import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import amendment from './five-guides-amendment-expectations.cjs';
import additions from './four-guides-addition-expectations.cjs';
import { attrs, text, tokens } from '../scripts/seo-content-audit.mjs';

const origin = 'https://inayadomestic.ae';
const strip = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
const plain = value => tokens(value.replace(/\[([^\]]+)\]\(https:\/\/[^)]+\)/g, '$1').replace(/\*\*/g, '')).join(' ');
const visible = value => tokens(text(value.replace(/<\/?(?:a|strong)\b[^>]*>/g, ''))).join(' ');
const xml = await readFile('out/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
const sourceFiles = Object.keys(amendment.sourceSpecs);

function markdownExpected(body) {
  const paragraphs = [], items = [], headings = [], tables = [];
  for (const block of body.split(/\r?\n\s*\r?\n/)) {
    if (/^\{\{visual:[a-z0-9_-]+\}\}$/.test(block)) continue;
    if (/^#{2,3} /.test(block)) {
      headings.push({ level: block.startsWith('### ') ? 3 : 2, title: plain(block.replace(/^#{2,3} /, '')) });
    } else if (block.startsWith('- ')) {
      items.push(...block.split('\n').map(item => plain(item.replace(/^- /, ''))));
    } else if (block.startsWith('|')) {
      tables.push(block.split('\n').filter(line => !/^\|[\s:|-]+\|$/.test(line))
        .map(line => line.slice(1, -1).split('|').map(plain)));
    } else paragraphs.push(plain(block));
  }
  return { paragraphs, items, headings, tables };
}

test('all ten amended exports render the complete independently reviewed replacement, not a shortened or duplicated manuscript', async () => {
  for (const file of sourceFiles) amendment.historicalSource(file, await readFile(file, 'utf8'));
  for (const target of amendment.after.targets) for (const locale of ['en', 'ar']) {
    const copy = target.record[locale], route = `/${locale}/blog/${target.slug}/`, url = origin + route;
    const html = await readFile(`out${route}index.html`, 'utf8');
    const body = strip(html);
    const rendered = body.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert.ok(rendered, `${route}: full article exists`);
    assert.doesNotMatch(rendered, /\{\{visual:|<p\b[^>]*>\s*#{1,3}\s|TODO|TBD|pending business/i, `${route}: no manuscript syntax or unfinished copy`);
    const withoutFigures = rendered.replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/g, '')
      .replace(/<section\b[^>]*data-keyword-references="true"[^>]*>[\s\S]*?<\/section>/, '');
    const actualParagraphs = [...withoutFigures.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(match => visible(match[1]));
    const actualItems = [...withoutFigures.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)].map(match => visible(match[1]));
    const actualTables = [...withoutFigures.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/g)].map(table =>
      [...table[1].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(row =>
        [...row[1].matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/g)].map(cell => visible(cell[1]))));
    let expected;
    if (copy.body) expected = markdownExpected(copy.body);
    else expected = {
      paragraphs: copy.sections.flatMap(section => section.paragraphs.map(plain)),
      items: copy.sections.flatMap(section => (section.points ?? []).map(plain)),
      headings: copy.sections.map(section => ({ level: 2, title: plain(section.heading) })),
      tables: copy.sections.filter(section => section.table).map(({ table }) => [table.columns, ...table.rows].map(row => row.map(plain)))
    };
    assert.deepEqual(actualParagraphs, expected.paragraphs, `${route}: every reviewed paragraph exactly once in order`);
    assert.deepEqual(actualItems, expected.items, `${route}: every reviewed list item exactly once in order`);
    assert.deepEqual(actualTables, expected.tables, `${route}: every reviewed table cell and row in order`);
    const actualHeadings = [...withoutFigures.matchAll(/<h([23])\b[^>]*>([\s\S]*?)<\/h[23]>/g)]
      .map(match => ({ level: Number(match[1]), title: visible(match[2]) }));
    assert.deepEqual(actualHeadings, expected.headings, `${route}: complete useful section/question hierarchy`);
    assert.equal([...body.matchAll(/<h1\b/g)].length, 1);
    assert.equal(text(body.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1]), copy.title);
    if (target.family === 'base') {
      assert.ok(visible(body).includes(plain(copy.lead)), `${route}: full reviewed introduction remains visible`);
      assert.ok(visible(body).includes(plain(copy.sourceNote)), `${route}: full reviewed source and scope note remains visible`);
      const main = body.slice(body.indexOf('<main'), body.lastIndexOf('</main>') + 7);
      const mainAnchors = [...main.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)]
        .map(match => ({ href: attrs(match[1]).href, label: visible(match[2]) }));
      for (const source of target.record.sources) assert.ok(mainAnchors.some(anchor => anchor.href === source.url && anchor.label === plain(source[locale])), `${route}: exact source label and official destination`);
      for (const step of copy.nextSteps) {
        const href = `/${locale}/${step.route}/`;
        assert.ok(mainAnchors.some(anchor => anchor.href === href && anchor.label === plain(step.label)), `${route}: exact related-guide label and localized destination`);
        assert.ok(urls.includes(origin + href), `${route}: canonical related-guide destination`);
      }
    }
    const meta = [...html.matchAll(/<meta\b([^>]*)>/g)].map(match => attrs(match[1]));
    assert.equal(text(html.match(/<title>([\s\S]*?)<\/title>/)[1]), target.pageFacts[locale].titles[0]);
    assert.equal(meta.find(item => item.name === 'description')?.content, copy.description);
    const links = [...html.matchAll(/<link\b([^>]*)>/g)].map(match => attrs(match[1]));
    assert.deepEqual(links.filter(link => link.rel === 'canonical').map(link => link.href), [url]);
    for (const lang of ['en', 'ar', 'x-default']) assert.equal(links.find(link => link.rel === 'alternate' && (link.hrefLang ?? link.hreflang) === lang)?.href, `${origin}/${lang === 'ar' ? 'ar' : 'en'}/blog/${target.slug}/`);
    const nodes = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(match => attrs(match[1]).type === 'application/ld+json').flatMap(match => JSON.parse(match[2])['@graph'] ?? []);
    const article = nodes.find(node => node['@type'] === 'Article');
    assert.equal(article.headline, copy.title);
    assert.equal(article.datePublished, target.record.published);
    assert.equal(article.dateModified, amendment.date);
    const dates = body.match(/<dl\b[^>]*data-guide="attribution"[^>]*>([\s\S]*?)<\/dl>/)?.[1];
    assert.deepEqual([...dates.matchAll(/<time\b([^>]*)>/g)].map(match => attrs(match[1]).dateTime ?? attrs(match[1]).datetime), [target.record.published, amendment.date]);
    const entry = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(match => match[1].includes(`<loc>${url}</loc>`));
    assert.ok(entry[1].includes(`<lastmod>${amendment.date}</lastmod>`));
    const allAnchors = [...rendered.matchAll(/<a\b([^>]*)>/g)].map(match => attrs(match[1]).href);
    for (const href of [...(copy.body ?? '').matchAll(/\[[^\]]+\]\((https:\/\/[^)]+)\)/g)].map(match => match[1])) {
      assert.ok(allAnchors.includes(href), `${route}: reviewed link remains clickable`);
      const parsed = new URL(href);
      if (parsed.origin === origin) {
        assert.ok(parsed.pathname.startsWith(`/${locale}/`), `${route}: localized internal link`);
        assert.ok(urls.includes(href), `${route}: canonical internal destination`);
      }
    }
    for (const figure of rendered.matchAll(/<figure\b([^>]*)>([\s\S]*?)<\/figure>/g)) {
      const attributes = attrs(figure[1]);
      assert.ok(attributes['aria-labelledby'] && attributes['aria-describedby'], `${route}: diagram has a title and caption`);
    }
  }
});

test('the ten Step1 guide dates remain exact alongside the eight new guides and changed archive indexes', () => {
  additions.assertInventory(urls);
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(match => match[1]);
  additions.assertLastmods(entries.map(entry => ({ url: entry.match(/<loc>(.*?)<\/loc>/)[1], lastmod: entry.match(/<lastmod>(.*?)<\/lastmod>/)?.[1] ?? null })));
  const actual = entries.filter(entry => entry.includes('<lastmod>2026-10-29</lastmod>')).map(entry => entry.match(/<loc>(.*?)<\/loc>/)[1]);
  const expected = [...amendment.targetSlugs.flatMap(slug => ['en', 'ar'].map(locale => `${origin}/${locale}/blog/${slug}/`)), ...additions.newCanonicalUrls, ...additions.indexUrls];
  assert.deepEqual(actual.sort(), expected.sort());
});
