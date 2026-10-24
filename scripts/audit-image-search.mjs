import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import sharp from 'sharp';
import { attrs, decode } from './seo-content-audit.mjs';

// Read-only, owner-authorized audit. Fetch only this site's public assets;
// third-party flags/reviewer photos are inventoried, never crawled.
const origin = 'https://inayadomestic.ae';
const out = process.argv[2];
if (!out) throw new Error('Supply a private report directory');
await mkdir(out, { recursive: true });
const issues = [];
const assets = new Map();
const external = new Set();
const tags = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'gi'))].map(m => Object.fromEntries(Object.entries(attrs(m[0])).map(([key, value]) => [key.toLowerCase(), value])));
async function request(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(25000), headers: { 'User-Agent': 'INAYA-owner-image-audit/1.0' } });
  if (new URL(response.url).origin !== origin) throw new Error(`Unexpected redirect: ${url}`);
  return response;
}
async function pool(items, fn, label) {
  let next = 0, done = 0;
  const results = new Array(items.length);
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (next < items.length) {
      const i = next++;
      try { results[i] = await fn(items[i], i); }
      catch (e) { issues.push({ type: 'fetch_failure', url: items[i].url ?? items[i], error: e.message }); results[i] = { error: e.message }; }
      if (++done % 50 === 0 || done === items.length) console.log(`${label} ${done}/${items.length}`);
    }
  }));
  return results;
}
function addAsset(value, page, kind) {
  if (!value || /^(data|blob):/i.test(value)) return;
  const url = new URL(decode(value), page);
  if (url.origin !== origin) { external.add(url.href); return; }
  const entry = assets.get(url.href) ?? { url: url.href, pages: new Set(), kinds: new Set() };
  entry.pages.add(page); entry.kinds.add(kind); assets.set(url.href, entry);
}
const robotResponse = await request(`${origin}/robots.txt`);
const robots = await robotResponse.text();
if (robotResponse.status !== 200 || !/^Allow:\s*\/$/m.test(robots) || /^Disallow:\s*\S/m.test(robots)) throw new Error('Inspect changed robots policy before crawling');
const sitemapResponse = await request(`${origin}/sitemap.xml`);
const sitemap = await sitemapResponse.text();
if (sitemapResponse.status !== 200) throw new Error('Sitemap unavailable');
const urls = [...new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => decode(m[1])))];
if (urls.length !== 232 || urls.some(u => !/^https:\/\/inayadomestic\.ae\/(en|ar)\//.test(u))) throw new Error('Inspect changed page scope');
const pages = await pool(urls, async (url, i) => {
  const response = await request(url), html = await response.text();
  await writeFile(path.join(out, `${String(i).padStart(3, '0')}.html`), html);
  if (response.status !== 200) issues.push({ type: 'page_status', url, status: response.status });
  const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  const meta = tags(html, 'meta');
  const directives = meta.filter(a => /^(robots|bingbot|googlebot)$/i.test(a.name ?? '')).map(a => a.content).concat(response.headers.get('x-robots-tag') ?? '');
  if (directives.some(d => /\b(noindex|noimageindex|none)\b/i.test(d))) issues.push({ type: 'page_index_block', url, directives });
  const images = tags(body, 'img');
  for (const img of images) {
    if (!Object.hasOwn(img, 'alt')) issues.push({ type: 'missing_alt', url, src: img.src });
    addAsset(img.src, url, 'img');
    for (const part of (img.srcset ?? '').split(',')) addAsset(part.trim().split(/\s+/)[0], url, 'srcset');
  }
  for (const source of tags(body, 'source')) for (const part of (source.srcset ?? '').split(',')) addAsset(part.trim().split(/\s+/)[0], url, 'picture_srcset');
  const links = tags(html, 'link');
  const css = [];
  for (const link of links) {
    if (/icon/.test(link.rel ?? '')) addAsset(link.href, url, 'icon');
    if (link.rel === 'stylesheet') css.push(new URL(link.href, url).href);
  }
  for (const m of meta.filter(a => /^(og:image|twitter:image)$/.test(a.property ?? a.name ?? ''))) addAsset(m.content, url, 'social');
  for (const m of body.matchAll(/url\((?:&quot;|["'])?([^)'"\s]+)(?:&quot;|["'])?\)/g)) {
    if (/\.(webp|png|jpe?g|avif|svg)(?:[?#]|$)/i.test(m[1])) addAsset(m[1], url, 'css');
  }
  const graph = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)].filter(m => attrs(m[1]).type === 'application/ld+json').flatMap(m => { const d = JSON.parse(m[2]); return d['@graph'] ?? [d]; });
  return { url, imageElements: images.length, emptyAlt: images.filter(a => !a.alt?.trim()).length, socialImage: meta.find(a => a.property === 'og:image')?.content, primaryImageOfPage: graph.find(n => n['@type'] === 'WebPage')?.primaryImageOfPage, css };
}, 'pages');
const cssUrls = [...new Set(pages.flatMap(p => p.css ?? []))].filter(u => new URL(u).origin === origin);
for (const url of cssUrls) {
  const response = await request(url), css = await response.text();
  for (const m of css.matchAll(/url\(["']?([^)'"\s]+)["']?\)/g)) if (/\.(webp|png|jpe?g|avif|svg)(?:[?#]|$)/i.test(m[1])) addAsset(m[1], url, 'stylesheet');
}
addAsset('/favicon.ico', origin, 'conventional_favicon');
const results = await pool([...assets.values()], async entry => {
  const response = await request(entry.url);
  const bytes = Buffer.from(await response.arrayBuffer());
  const contentType = response.headers.get('content-type');
  const xRobots = response.headers.get('x-robots-tag');
  let dimensions;
  if (response.status !== 200 || !/^image\//i.test(contentType ?? '')) issues.push({ type: 'image_status_or_type', url: entry.url, status: response.status, contentType });
  else if (bytes.readUInt32LE(0) === 0x00010000) {
    const count = bytes.readUInt16LE(4);
    dimensions = { format: 'ico', sizes: Array.from({ length: count }, (_, i) => [bytes[6 + i * 16] || 256, bytes[7 + i * 16] || 256]) };
  } else {
    const data = await sharp(bytes).metadata();
    dimensions = { format: data.format, width: data.width, height: data.height };
  }
  if (/\b(noindex|noimageindex|none)\b/i.test(xRobots ?? '')) issues.push({ type: 'image_index_block', url: entry.url, xRobots });
  return { url: entry.url, pages: [...entry.pages], kinds: [...entry.kinds], status: response.status, contentType, xRobots, cacheControl: response.headers.get('cache-control'), bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex'), ...dimensions };
}, 'images');
const report = { observedAt: new Date().toISOString(), scope: 'All 232 sitemap pages, img/srcset/social/icon references and linked CSS images on the same origin. Third-party assets recorded only. No search indexing guarantee.', nativeCrawler: 'Python launcher unavailable; own read-only HTTP/media audit used', robots, pageCount: pages.length, imageElements: pages.reduce((n, p) => n + (p.imageElements ?? 0), 0), uniqueImageUrls: assets.size, pagesWithSocialImage: pages.filter(p => p.socialImage).length, pagesWithPrimaryImageSchema: pages.filter(p => p.primaryImageOfPage).length, sitemapImageReferences: [...sitemap.matchAll(/<image:loc>/g)].length, issues, pages, images: results, externalImageUrls: [...external] };
await writeFile(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ ...Object.fromEntries(['observedAt', 'pageCount', 'imageElements', 'uniqueImageUrls', 'pagesWithSocialImage', 'pagesWithPrimaryImageSchema', 'sitemapImageReferences'].map(k => [k, report[k]])), issues }));
