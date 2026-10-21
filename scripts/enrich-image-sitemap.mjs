import { access, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { attrs, decode } from './seo-content-audit.mjs';

// Exported HTML is the source of truth: include only content images actually
// present on each page. Exclude UI logos, reviewer avatars and external flags.
const origin = 'https://inayadomestic.ae';
const escapeXml = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
export async function pageImageUrls(html, pageUrl, outDir, fileChecks = new Map()) {
  const check = file => {
    if (!fileChecks.has(file)) fileChecks.set(file, access(file));
    return fileChecks.get(file);
  };
  const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
  const main = body.slice(body.indexOf('<main'), body.lastIndexOf('</main>') + 7);
  const found = new Set();
  for (const match of main.matchAll(/<img\b[^>]*>/gi)) {
    const image = attrs(match[0]);
    if (!image.src || !image.alt?.trim()) continue;
    const url = new URL(image.src, pageUrl);
    if (url.origin !== origin) continue;
    let pathname = decode(url.pathname);
    // Responsive export variants refer to the same original content image.
    const variant = pathname.match(/^\/optimized\/(images\/.+)-\d+\.webp$/);
    if (variant) {
      for (const extension of ['.webp', '.png', '.jpg', '.jpeg']) {
        const candidate = '/' + variant[1] + extension;
        try { await check(path.join(outDir, candidate)); pathname = candidate; break; } catch { /* Try the next original format. */ }
      }
    }
    if (!pathname.startsWith('/images/')) continue;
    const target = path.resolve(outDir, '.' + pathname);
    if (!target.startsWith(path.resolve(outDir) + path.sep)) throw new Error('Image path outside export');
    await check(target); // Fail the build rather than advertise a broken image.
    found.add(origin + pathname);
  }
  return [...found].sort();
}
export async function enrichImageSitemap(outDir = 'out') {
  const file = path.join(outDir, 'sitemap.xml');
  let xml = await readFile(file, 'utf8');
  const blocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  const uniqueImages = new Set();
  const fileChecks = new Map();
  let references = 0, pagesWithImages = 0;
  for (const block of blocks) {
    const pageUrl = decode(block[1].match(/<loc>([^<]+)<\/loc>/)?.[1] ?? '');
    const url = new URL(pageUrl);
    if (url.origin !== origin || !/^\/(en|ar)\//.test(url.pathname)) throw new Error('Unexpected sitemap scope');
    const html = await readFile(path.join(outDir, url.pathname, 'index.html'), 'utf8');
    const images = await pageImageUrls(html, pageUrl, outDir, fileChecks);
    if (images.length) pagesWithImages++;
    references += images.length; images.forEach(image => uniqueImages.add(image));
    const original = block[1].replace(/\s*<image:image>[\s\S]*?<\/image:image>/g, '');
    const imageXml = images.map(image => `<image:image><image:loc>${escapeXml(image)}</image:loc></image:image>`).join('\n');
    xml = xml.replace(block[0], `<url>${original}${imageXml ? '\n' + imageXml + '\n' : ''}</url>`);
  }
  if (!xml.includes('xmlns:image=')) xml = xml.replace('<urlset ', '<urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" ');
  await writeFile(file, xml);
  return { pages: blocks.length, pagesWithImages, uniqueImages: uniqueImages.size, imageReferences: references };
}
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'))) {
  if (process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true') console.log('Image sitemap:', JSON.stringify(await enrichImageSitemap()));
}
