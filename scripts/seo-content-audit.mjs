import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

export const origin = 'https://inayadomestic.ae';
export const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
export const text = (s) => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
export const attrs = (s) => Object.fromEntries([...s.matchAll(/([\w-]+)="([^"]*)"/g)].map((m) => [m[1], decode(m[2])]));
export const tokens = (s) => s.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
export const family = (route) => route.startsWith('maid-source-countries/') ? 'country'
  : route.startsWith('maid-services-') ? 'location'
  : route.startsWith('services/') && route !== 'services/countries-we-source-from' ? 'service' : 'information/hub';
const shingles = (s) => { const words = tokens(s); return new Set(words.slice(0, -4).map((_, i) => words.slice(i, i + 5).join(' '))); };
const hash = (s) => createHash('sha256').update(s).digest('hex');

export async function auditExport() {
  const xml = await readFile('out/sitemap.xml', 'utf8');
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const pages = [];
  for (const url of urls) {
    const pathname = new URL(url).pathname;
    const locale = pathname.split('/')[1];
    const route = pathname.split('/').slice(2).filter(Boolean).join('/');
    const html = await readFile(path.join('out', pathname.slice(1), 'index.html'), 'utf8');
    // The outer locale main contains all route content, including nested page mains.
    const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
    const start = body.indexOf('<main'); const end = body.lastIndexOf('</main>');
    const main = body.slice(start, end + 7).replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/g, '');
    const paragraphs = [...main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map((m) => tokens(text(m[1])).join(' ')).filter((s) => s.length >= 60 && tokens(s).length >= 8);
    const links = [...body.matchAll(/<a\b[^>]*>/g)].flatMap((m) => {
      const a = attrs(m[0]); if (!a.href || /^(mailto|tel|javascript):/.test(a.href)) return [];
      const target = new URL(a.href, url); if (target.origin !== origin) return [];
      const normalized = `${origin}${target.pathname.replace(/\/$/, '')}/`;
      return urls.includes(normalized) ? [normalized] : [];
    });
    const nodes = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter((m) => attrs(m[1]).type === 'application/ld+json')
      .flatMap((m) => { const data = JSON.parse(m[2]); return data['@graph'] || [data]; });
    const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map((m) => attrs(m[0]));
    pages.push({ url, locale, route, family: family(route), words: tokens(text(main)).length, paragraphs, links: [...new Set(links)],
      contentHash: hash(text(main)), title: text(html.match(/<title>(.*?)<\/title>/s)[1]), description: meta.find((m) => m.name === 'description').content,
      schemaIds: nodes.map((node) => node['@id']).sort(), mainText: text(main),
      prices: [...text(main).matchAll(/(?:AED\s*[\d,]+|[\d,]+\s*(?:AED|درهم))/g)].map((m) => m[0]).sort() });
  }
  const frequency = new Map();
  for (const page of pages) for (const p of new Set(page.paragraphs)) { const key = `${page.locale}:${p}`; frequency.set(key, (frequency.get(key) || 0) + 1); }
  for (const page of pages) {
    page.repeatedParagraphs = page.paragraphs.filter((p) => frequency.get(`${page.locale}:${p}`) > 1).length;
    page.paragraphTokens = page.paragraphs.reduce((n, p) => n + tokens(p).length, 0);
    page.repeatedTokens = page.paragraphs.filter((p) => frequency.get(`${page.locale}:${p}`) > 1).reduce((n, p) => n + tokens(p).length, 0);
  }
  const nearPairs = []; const sets = pages.map((page) => shingles(page.mainText));
  for (let i = 0; i < pages.length; i++) for (let j = i + 1; j < pages.length; j++) {
    if (pages[i].locale !== pages[j].locale) continue;
    const a = sets[i], b = sets[j]; const intersection = [...a].filter((s) => b.has(s)).length;
    const similarity = intersection / (a.size + b.size - intersection || 1);
    if (similarity >= 0.65) nearPairs.push({ a: pages[i].url, b: pages[j].url, similarity: +similarity.toFixed(4) });
  }
  const reached = new Set(); const linkCoverage = {};
  for (const locale of ['en', 'ar']) {
    const local = pages.filter((p) => p.locale === locale); const depths = new Map();
    const queue = [{ url: `${origin}/${locale}/`, depth: 0 }];
    while (queue.length) {
      const { url, depth } = queue.shift(); if (depths.has(url)) continue;
      depths.set(url, depth); reached.add(url);
      queue.push(...(local.find((p) => p.url === url)?.links || []).filter((target) => target.startsWith(`${origin}/${locale}/`)).map((target) => ({ url: target, depth: depth + 1 })));
    }
    const inbound = local.map((p) => local.filter((other) => other.url !== p.url && other.links.includes(p.url)).length);
    linkCoverage[locale] = { reachable: depths.size, maximumDepth: Math.max(...depths.values()), minimumOtherPageInbound: Math.min(...inbound), edges: local.reduce((n, p) => n + p.links.filter((target) => target.startsWith(`${origin}/${locale}/`) && target !== p.url).length, 0) };
  }
  const groups = {};
  for (const page of pages) {
    const key = `${page.locale}:${page.family}`; groups[key] ||= { pages: 0, paragraphTokens: 0, repeatedTokens: 0, repeatedParagraphs: 0 };
    groups[key].pages++; groups[key].paragraphTokens += page.paragraphTokens; groups[key].repeatedTokens += page.repeatedTokens; groups[key].repeatedParagraphs += page.repeatedParagraphs;
  }
  return { pages, groups, nearPairs, linkCoverage, orphans: urls.filter((url) => !reached.has(url)),
    repeatedParagraphs: pages.reduce((n, p) => n + p.repeatedParagraphs, 0), repeatedTokens: pages.reduce((n, p) => n + p.repeatedTokens, 0), paragraphTokens: pages.reduce((n, p) => n + p.paragraphTokens, 0) };
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'))) {
  const result = await auditExport();
  if (process.argv[2]) { await mkdir('.next', { recursive: true }); await writeFile(process.argv[2], JSON.stringify(result, null, 2)); }
  console.log(JSON.stringify({ pages: result.pages.length, groups: result.groups, repeatedParagraphs: result.repeatedParagraphs, repeatedTokens: result.repeatedTokens, paragraphTokens: result.paragraphTokens, nearPairs: result.nearPairs.length, linkCoverage: result.linkCoverage, orphans: result.orphans }));
}
