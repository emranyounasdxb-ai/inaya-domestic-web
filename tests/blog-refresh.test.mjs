import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import test from 'node:test';
import sharp from 'sharp';
import refresh from './blog-refresh-expectations.cjs';
import { attrs, text } from '../scripts/seo-content-audit.mjs';

const require = createRequire(import.meta.url);
const editorial = require('./editorial-scope-expectations.cjs');
const origin = 'https://inayadomestic.ae';
const related = JSON.parse(await readFile('content/blog-related-guides-20261029.json', 'utf8'));
const newImages = JSON.parse(await readFile('content/blog-refresh-images-20261029.json', 'utf8'));
const slugs = refresh.fixture.beforeArticles.map(row => row.slug);
const xml = await readFile('out/sitemap.xml', 'utf8');
const urls = new Set([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]));
const clean = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
const anchors = html => [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map(m => ({ ...attrs(m[1]), label: text(m[2]) }));

test('all70 bilingual publications explain content dates without inventing specialist reviews or freshness', async () => {
  const noteSource=(await readFile('components/ArticleEditorialNote.tsx','utf8')).replace(/\r\n/g,'\n');
  assert.equal(editorial.sha(noteSource),editorial.fixture.noteSourceSha256);
  for(const [file,pin] of Object.entries(editorial.fixture.sources)) {
    const source=await readFile(file,'utf8');
    assert.equal(editorial.sha(editorial.historicalSource(file,source)),pin.before);
    assert.throws(()=>editorial.historicalSource(file,source+'\n// Unrelated edit\n'),/exact reviewed/);
  }
  assert.equal(Object.keys(editorial.fixture.attributions).length,42,'only21 keyword topics relabel their update field');
  for(const slug of slugs) for(const locale of ['en','ar']) {
    const url=`${origin}/${locale}/blog/${slug}/`;
    const body=clean(await readFile(`out/${locale}/blog/${slug}/index.html`,'utf8'));
    const notes=[...body.matchAll(/<div\b[^>]*data-editorial-scope="true"[^>]*>([\s\S]*?)<\/div>/g)];
    assert.equal(notes.length,1,`${url}: one visible publication note`);
    assert.equal(text(notes[0][1]),editorial.noteText(locale,slug==='inaya-office-staff-careers-ajman'));
    assert.deepEqual(anchors(notes[0][1]).map(a=>a.href),[`/${locale}/contact/`],`${url}: actual company contact route`);
    const attribution=body.match(/<dl\b[^>]*data-guide="attribution"[^>]*>([\s\S]*?)<\/dl>/)?.[1];
    assert.ok(attribution,url);
    assert.doesNotMatch(text(attribution),/Reviewed|آخر مراجعة/);
    assert.match(text(attribution),locale==='ar'?/آخر تحديث/:/Updated/);
    const raw=await readFile(`out/${locale}/blog/${slug}/index.html`,'utf8');
    const article=[...raw.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m=>JSON.parse(m[1])['@graph']??[]).find(n=>n['@type']==='Article');
    assert.ok(article,`${url}: existing article schema`);
    assert.deepEqual([...attribution.matchAll(/<time\b[^>]*dateTime="([^"]+)"/gi)].map(m=>m[1]),[article.datePublished,article.dateModified],`${url}: visible dates match the actual publication records`);
    assert.equal(article.reviewedBy,undefined,`${url}: no invented specialist reviewer`);
  }
});

test('all70 complete manuscripts, dates and original111 image records retain their exact before bytes', async () => {
  for (const [file, sha] of Object.entries(refresh.fixture.preservedManuscriptSources)) {
    assert.equal(refresh.sha(require('./page-clarity-expectations.cjs').historicalSource(file, await readFile(file, 'utf8'))), sha, `${file}: no factual/manuscript edits`);
  }
  for (const file of Object.keys(refresh.fixture.sources)) refresh.historicalSource(file, await readFile(file, 'utf8'));
  const catalog = JSON.parse(require('./service-image-alt-expectations.cjs').historicalSource('content/site-image-gallery.json', await readFile('content/site-image-gallery.json', 'utf8')));
  const before = JSON.parse(refresh.fixture.sources['content/site-image-gallery.json'].before);
  assert.deepEqual(catalog.images.slice(0, 111), before.images, 'all original images, localized captions, widths and cache versions');
  assert.equal(catalog.images.length, 116);
  assert.equal(refresh.sha((await readFile('content/blog-related-guides-20261029.json', 'utf8')).replace(/\r\n/g, '\n')), refresh.fixture.relatedMapSha256);
  assert.deepEqual(Object.keys(related), slugs);
  for (const [slug, targets] of Object.entries(related)) {
    assert.equal(targets.length, 4); assert.equal(new Set(targets).size, 4);
    assert.ok(targets.every(target => target !== slug && slugs.includes(target)), `${slug}: relevant reviewed alternatives are real distinct guides`);
  }
});

test('five saved generated assets have exact bytes, full dimensions and separate semantic assignments', async () => {
  assert.deepEqual(Object.keys(newImages), refresh.fixture.images.assets.map(image => image.slug));
  const allowlist = JSON.parse(await readFile('.github/blog-refresh-images-20261029.json', 'utf8'));
  assert.deepEqual(allowlist.images, refresh.fixture.images.assets.map(image => ({ path: image.publicSrc.slice(1), sha256: image.publicSha256 })), 'FTP protects exactly the five reviewed additions; no deletion expansion');
  const hashes = new Set();
  for (const image of refresh.fixture.images.assets) {
    const meta = newImages[image.slug];
    assert.equal(meta.src, image.publicSrc); assert.equal(meta.cacheVersion, image.publicSha256.slice(0, 12));
    for (const folder of ['public', 'out']) {
      const bytes = await readFile(`${folder}${image.publicSrc}`);
      assert.equal(refresh.sha(bytes), image.publicSha256);
      const dimensions = await sharp(bytes).metadata();
      assert.equal(dimensions.width, image.width); assert.equal(dimensions.height, image.height);
    }
    assert.match(image.prompt, /illustrat/i); hashes.add(image.publicSha256);
    assert.match(meta.alt.ar, /[\u0600-\u06ff]/); assert.ok(meta.alt.en.length > 40);
  }
  assert.equal(hashes.size, 5);
});

test('safe contextual parsing preserves complete original words, Unicode boundaries and existing links', () => {
  const { createBlogInlineParser } = require('../.next/phase-02-unit/lib/blog-context-links.js');
  const input = 'Contract terms, privacy, wages, fees, rest and replacement. [Original](https://inayadomestic.ae/en/contact/)';
  const parse = createBlogInlineParser('test-guide', 'en', input);
  const parts = parse(input);
  assert.equal(parts.map(p => p.text).join(''), 'Contract terms, privacy, wages, fees, rest and replacement. Original');
  assert.equal(parts.filter(p => p.contextual).length, 4);
  assert.equal(new Set(parts.filter(p => p.contextual).map(p => p.href)).size, 4);
  assert.equal(parse('privacy and fees').filter(p => p.contextual).length, 0, 'one shared article budget, no repeat targets');
  assert.ok(parts.some(p => p.href === 'https://inayadomestic.ae/en/contact/'));
  const ar = 'الخصوصية والأجور. العمالة المنزلية في المكتب.';
  const arParts = createBlogInlineParser('inaya-office-staff-careers-ajman', 'ar')(ar);
  assert.equal(arParts.map(p => p.text).join(''), ar);
  assert.deepEqual(arParts.filter(p => p.contextual).map(p => p.text), ['العمالة المنزلية'], 'no partial Arabic words or unrelated household application targets');
});

test('all140 exported article pages expose unique matching heroes, useful body links and three complete related cards', async () => {
  const uniqueHeroes = new Set(), uniqueHashes = new Set();
  let bodyLinks = 0, contextual = 0, external = 0;
  for (const original of refresh.fixture.beforeArticles) for (const lang of ['en', 'ar']) {
    const route = `/${lang}/blog/${original.slug}/`, url = origin + route;
    const html = await readFile(`out${route}index.html`, 'utf8'), visible = clean(html);
    const article = visible.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert.ok(article, `${route}: full article`);
    const bodyAnchors = anchors(article);
    const blogs = bodyAnchors.filter(a => a.href?.includes('/blog/'));
    assert.ok(blogs.length > 0, `${route}: contextual links inside actual body`);
    for (const link of blogs) {
      const target = new URL(link.href, origin);
      assert.ok(target.pathname.startsWith(`/${lang}/blog/`), `${route}: correct link language`);
      assert.ok(urls.has(target.href), `${route}: canonical destination ${target.href}`);
      assert.ok(link.label.trim());
    }
    const introduced = bodyAnchors.filter(a => a['data-contextual-blog-link'] === 'true');
    assert.ok(introduced.length <= 4); assert.equal(new Set(introduced.map(a => a.href)).size, introduced.length);
    assert.ok(introduced.every(a => a.href !== url));
    const sidebar = visible.slice(visible.indexOf('data-blog-layout=')).match(/<aside\b[^>]*>([\s\S]*?)<\/aside>/)?.[1];
    assert.ok(sidebar?.includes(`data-related-blog-cards="${original.slug}"`));
    const cards = anchors(sidebar).filter(a => a['data-related-guide']);
    assert.deepEqual(cards.map(a => a['data-related-guide']), related[original.slug].slice(0, 3));
    for (const card of cards) {
      assert.equal(card.href, `/${lang}/blog/${card['data-related-guide']}/`);
      assert.ok(card.label.length > 15, 'complete meaningful title, no link-only placeholder');
    }
    const hero = visible.match(/<div\b[^>]*data-blog-image="hero"[^>]*>([\s\S]*?)<\/div>/)?.[1];
    assert.ok(hero); const img = attrs(hero.match(/<img\b([^>]*)>/)[1]);
    const src = new URL(img.src, origin).pathname;
    assert.equal(src, newImages[original.slug]?.src ?? original.src, `${route}: exact separate topic cover`);
    const metas = [...html.matchAll(/<meta\b([^>]*)>/g)].map(m => attrs(m[1]));
    assert.equal(metas.find(m => m.property === 'og:image').content, origin + src);
    assert.equal(metas.find(m => m.name === 'twitter:image').content, origin + src);
    const graph = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(m => attrs(m[1]).type === 'application/ld+json').flatMap(m => JSON.parse(m[2])['@graph'] ?? []);
    assert.equal(graph.find(n => n['@type'] === 'Article').image, origin + src);
    if (lang === 'en') { uniqueHeroes.add(src); uniqueHashes.add(refresh.sha(await readFile(`public${src}`))); }
    bodyLinks += blogs.length; contextual += introduced.length;
    external += bodyAnchors.filter(a => /^https?:/.test(a.href) && new URL(a.href).origin !== origin).length;
  }
  assert.equal(uniqueHeroes.size, 70); assert.equal(uniqueHashes.size, 70);
  assert.ok(bodyLinks >= 140); assert.ok(contextual > 0); assert.ok(external > 100);
});
