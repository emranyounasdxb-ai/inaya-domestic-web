import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import additions from './four-guides-addition-expectations.cjs';
import { attrs, text, tokens } from '../scripts/seo-content-audit.mjs';

const origin = 'https://inayadomestic.ae';
const strip = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
const plain = value => tokens(value.replace(/\[([^\]]+)\]\(https:\/\/[^)]+\)/g, '$1').replace(/\*\*/g, '')).join(' ');
const visible = value => tokens(text(value.replace(/<\/?(?:a|strong)\b[^>]*>/g, ''))).join(' ');
const graph = html => [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(match => attrs(match[1]).type === 'application/ld+json').flatMap(match => JSON.parse(match[2])['@graph'] ?? []);
const xml = await readFile('out/sitemap.xml', 'utf8');
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(match => ({ url: match[1].match(/<loc>(.*?)<\/loc>/)[1], lastmod: match[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1] ?? null }));
const urls = entries.map(entry => entry.url);

function markdownExpected(body) {
  const paragraphs = [], items = [], headings = [], tables = [], blocks = [];
  for (const block of body.split(/\r?\n\s*\r?\n/)) {
    if (block.startsWith('## ')) {
      const heading = plain(block.slice(3));
      headings.push(heading); blocks.push({ type: 'heading', text: heading });
    } else if (block.startsWith('- ')) {
      const list = block.split('\n').map(item => plain(item.replace(/^- /, '')));
      items.push(...list); blocks.push({ type: 'list', items: list });
    } else if (block.startsWith('|')) {
      const rows = block.split('\n').filter(line => !/^\|[\s:|-]+\|$/.test(line)).map(line => line.slice(1, -1).split('|').map(plain));
      tables.push(rows); blocks.push({ type: 'table', rows });
    } else {
      const paragraph = plain(block);
      paragraphs.push(paragraph); blocks.push({ type: 'paragraph', text: paragraph });
    }
  }
  return { paragraphs, items, headings, tables, blocks };
}

test('the four new bilingual guides append exactly eight canonicals and only their actual content/index updates receive new dates', () => {
  additions.assertLastmods(entries);
});

test('all eight new public articles contain the complete reviewed manuscripts, references, attribution and reused approved images', async () => {
  const approved = additions.reviewed();
  for (const article of approved.articles) for (const locale of ['en', 'ar']) {
    const copy = article[locale], metadata = approved.metadata.find(row => row.slug === article.slug)[locale];
    const route = `/${locale}/blog/${article.slug}/`, url = origin + route;
    const html = await readFile(`out${route}index.html`, 'utf8'), body = strip(html);
    const rendered = body.match(/<article\b[^>]*data-published-article="content"[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert.ok(rendered, `${route}: existing accessible publication renderer is used`);
    assert.doesNotMatch(rendered, /\{\{visual:|<p\b[^>]*>\s*#{1,3}\s|TODO|TBD|pending business/i);
    const manuscript = rendered.replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/g, '');
    const expected = markdownExpected(copy.body);
    const blockStream = [...manuscript.matchAll(/<(h2|p|ul|table)\b[^>]*>([\s\S]*?)<\/\1>/g)].map(match => {
      if (match[1] === 'ul') return { type: 'list', items: [...match[2].matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)].map(item => visible(item[1])) };
      if (match[1] === 'table') return { type: 'table', rows: [...match[2].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(row => [...row[1].matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/g)].map(cell => visible(cell[1]))) };
      return { type: match[1] === 'h2' ? 'heading' : 'paragraph', text: visible(match[2]) };
    });
    assert.deepEqual(blockStream, expected.blocks, `${route}: complete interleaved manuscript order retains every table/list under its intended heading`);
    assert.deepEqual([...manuscript.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(match => visible(match[1])), expected.paragraphs, `${route}: every reviewed paragraph exactly once in order`);
    assert.deepEqual([...manuscript.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)].map(match => visible(match[1])), expected.items, `${route}: every reviewed list item exactly once in order`);
    assert.deepEqual([...manuscript.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map(match => visible(match[1])), expected.headings, `${route}: full section/question hierarchy`);
    assert.deepEqual([...manuscript.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/g)].map(table => [...table[1].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(row => [...row[1].matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/g)].map(cell => visible(cell[1])))), expected.tables, `${route}: every comparison table and cell`);
    assert.equal([...body.matchAll(/<h1\b/g)].length, 1);
    assert.equal(text(body.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1]), copy.title);
    const metas = [...html.matchAll(/<meta\b([^>]*)>/g)].map(match => attrs(match[1]));
    const title = /INAYA|عناية/i.test(metadata.searchTitle) ? metadata.searchTitle : `${metadata.searchTitle} | ${locale === 'ar' ? 'عناية' : 'INAYA'}`;
    assert.equal(text(html.match(/<title>([\s\S]*?)<\/title>/)[1]), title);
    assert.equal(metas.find(item => item.name === 'description')?.content, copy.description);
    const links = [...html.matchAll(/<link\b([^>]*)>/g)].map(match => attrs(match[1]));
    assert.deepEqual(links.filter(link => link.rel === 'canonical').map(link => link.href), [url]);
    for (const lang of ['en', 'ar', 'x-default']) assert.equal(links.find(link => link.rel === 'alternate' && (link.hrefLang ?? link.hreflang) === lang)?.href, `${origin}/${lang === 'ar' ? 'ar' : 'en'}/blog/${article.slug}/`);
    const nodes = graph(html), articleNode = nodes.find(node => node['@type'] === 'Article');
    assert.equal(articleNode.url, url);
    assert.equal(articleNode.inLanguage, locale);
    assert.equal(articleNode.headline, copy.title);
    assert.equal(articleNode.datePublished, additions.date);
    assert.equal(articleNode.dateModified, additions.date);
    assert.deepEqual(articleNode.author, { '@type': 'Organization', name: locale === 'ar' ? 'فريق تحرير عناية للعمالة المنزلية' : 'INAYA Domestic Workers Editorial Team' });
    assert.ok(text(body).includes(articleNode.author.name));
    assert.deepEqual(articleNode.citation, metadata.citations);
    assert.ok(!nodes.some(node => node['@type'] === 'FAQPage'), `${route}: no invented FAQ markup`);
    const dates = body.match(/<dl\b[^>]*data-guide="attribution"[^>]*>([\s\S]*?)<\/dl>/)?.[1];
    assert.deepEqual([...dates.matchAll(/<time\b([^>]*)>/g)].map(match => attrs(match[1]).dateTime ?? attrs(match[1]).datetime), [additions.date, additions.date]);
    const renderedLinks = [...rendered.matchAll(/<a\b([^>]*)>/g)].map(match => attrs(match[1]).href);
    for (const href of [...copy.body.matchAll(/\[[^\]]+\]\((https:\/\/[^)]+)\)/g)].map(match => match[1])) {
      assert.ok(renderedLinks.includes(href), `${route}: reviewed link remains clickable`);
      if (new URL(href).origin === origin) {
        assert.ok(new URL(href).pathname.startsWith(`/${locale}/`), `${route}: internal link is localized`);
        assert.ok(urls.includes(href), `${route}: internal link reaches an actual canonical page`);
      }
    }
    for (const citation of metadata.citations) assert.ok(renderedLinks.includes(citation), `${route}: Article citation has a visible exact reference`);
    const image = approved.images[article.slug];
    const imageUrl = origin + image.src;
    assert.equal(metas.find(item => item.property === 'og:image')?.content, imageUrl);
    assert.equal(metas.find(item => item.name === 'twitter:image')?.content, imageUrl);
    assert.equal(metas.find(item => item.property === 'og:image:alt')?.content, image.alt[locale]);
    assert.equal(articleNode.image, imageUrl);
    const primary = nodes.find(node => node['@id'] === `${url}#primaryimage`);
    assert.equal(primary?.contentUrl, imageUrl);
    assert.equal(primary?.caption, image.alt[locale]);
    const photos = [...body.matchAll(/<img\b([^>]*)>/g)].map(match => attrs(match[1])).filter(item => new URL(item.src, origin).pathname === image.src);
    assert.equal(photos.length, 1, `${route}: approved visible photo is not duplicated`);
    assert.equal(photos[0].alt, image.alt[locale]);
    assert.match(body, /href="tel:\+97167400128"/);
    assert.match(body, /href="https:\/\/wa.me\/971502036767"/);
  }
});

test('all69 guide cards occur once across the six bilingual archives with the original65 relative order preserved', async () => {
  for (const locale of ['en', 'ar']) {
    const seen = [];
    for (let page = 1; page <= 6; page++) {
      const route = page === 1 ? 'blog' : `blog/page/${page}`;
      const html = strip(await readFile(`out/${locale}/${route}/index.html`, 'utf8'));
      const cards = [...html.matchAll(/<article\b([^>]*)>([\s\S]*?)<\/article>/g)].filter(match => attrs(match[1])['data-blog-guide']);
      const expected = additions.blogOrderSlugs.slice((page - 1) * 12, page * 12);
      assert.deepEqual(cards.map(match => attrs(match[1])['data-blog-guide']), expected, `${locale}/${route}: independent69-guide order`);
      seen.push(...expected);
      for (const card of cards) {
        const slug = attrs(card[1])['data-blog-guide'];
        assert.ok(card[2].includes(`href="/${locale}/blog/${slug}/"`));
        assert.equal([...card[2].matchAll(/<img\b/g)].length, 1);
      }
    }
    assert.deepEqual(seen, additions.blogOrderSlugs);
    assert.deepEqual(seen.filter(slug => !additions.newSlugs.includes(slug)), additions.before.originalBlogOrder);
    assert.equal(new Set(seen).size, 69);
  }
});
