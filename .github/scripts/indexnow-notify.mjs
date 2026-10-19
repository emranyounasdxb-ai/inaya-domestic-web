import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// This verification key is deliberately public and must match its root .txt file.
export const host = 'inayadomestic.ae';
export const origin = `https://${host}`;
export const key = '2eba120d877f6fd4c5159e7130596686';
export const endpoint = 'https://api.indexnow.org/indexnow';
export const maxUrls = 1000; // Deliberately below the protocol's 10,000 URL limit.

const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)]
  .map(match => [match[1].toLowerCase(), decode(match[2] ?? match[3])]));
const normalize = text => decode(text).replace(/\s+/g, ' ').trim();

async function filesIn(directory, prefix = '') {
  const result = [];
  for (const entry of await fs.readdir(path.join(directory, prefix), { withFileTypes: true })) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) result.push(...await filesIn(directory, relative));
    else if (entry.isFile()) result.push(relative);
    else throw new Error(`Not a regular exported file: ${relative}`);
  }
  return result.sort();
}

export function pageUrl(relative, html) {
  // The cPanel export uses trailingSlash. Restrict notifications to the two
  // public locale trees; exclude the language redirect, error pages and assets.
  if (!/^(en|ar)\/(?:[\p{L}\p{N}_-]+\/)*index\.html$/u.test(relative)) return null;
  const expected = new URL(relative.replace(/index\.html$/, ''), `${origin}/`).href;
  const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => attributes(match[0]));
  const canonicals = links.filter(link => (link.rel || '').toLowerCase().split(/\s+/).includes('canonical'));
  if (canonicals.length !== 1 || canonicals[0].href !== expected) return null;
  const meta = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => attributes(match[0]));
  if (meta.some(tag => /^(robots|googlebot|bingbot)$/i.test(tag.name || '') &&
    /(?:^|[\s,])(noindex|none)(?:$|[\s,])/i.test(tag.content || ''))) return null;
  return expected;
}

export function meaningfulContent(html) {
  // Build IDs, hydration payloads, CSS hashes, classes and image variants can
  // change without changing the page's information. Exclude that build noise.
  const structuredData = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(match => attributes(match[1]).type === 'application/ld+json')
    .map(match => normalize(match[2]));
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<!--[\s\S]*?-->/g, '');
  const metadata = [...visible.matchAll(/<meta\b[^>]*>/gi)].map(match => attributes(match[0]))
    .filter(tag => tag.name || tag.property)
    .map(tag => [tag.name || tag.property, tag.content || '']).sort();
  const links = [...visible.matchAll(/<a\b[^>]*>/gi)].map(match => attributes(match[0]).href || '').sort();
  const imageDescriptions = [...visible.matchAll(/<img\b[^>]*>/gi)]
    .map(match => attributes(match[0]).alt || '').sort();
  const alternatives = [...visible.matchAll(/<link\b[^>]*>/gi)].map(match => attributes(match[0]))
    .filter(tag => /^(canonical|alternate)$/i.test(tag.rel || ''))
    .map(tag => [tag.rel, tag.hreflang || '', tag.href || '']).sort();
  return JSON.stringify({ text: normalize(visible.replace(/<[^>]*>/g, ' ')), metadata,
    links, imageDescriptions, alternatives, structuredData });
}

export async function selectUrls(staging, baseline) {
  const manifest = JSON.parse(await fs.readFile(path.join(baseline, 'baseline.json'), 'utf8'));
  if (manifest.version !== 1 || !Array.isArray(manifest.files) || !manifest.files.length) {
    throw new Error('IndexNow requires a verified deployment baseline.');
  }
  const previous = new Set(manifest.files);
  const urls = [];
  let unchangedContent = 0;
  let excludedHtml = 0;
  for (const relative of await filesIn(staging)) {
    if (!relative.endsWith('.html')) continue;
    const current = await fs.readFile(path.join(staging, relative), 'utf8');
    const url = pageUrl(relative, current);
    if (!url) { excludedHtml++; continue; }
    if (previous.has(relative)) {
      const old = await fs.readFile(path.join(baseline, 'export', relative), 'utf8');
      if (meaningfulContent(current) === meaningfulContent(old)) { unchangedContent++; continue; }
    }
    urls.push(url);
  }
  // Removed export files stay live in the current FTP deployment. They must not
  // be described as deleted URLs until the deployment actually removes them.
  return { urls: [...new Set(urls)].sort(), unchangedContent, excludedHtml };
}

export function payloadFor(urls) {
  if (!Array.isArray(urls) || !urls.length || urls.length > maxUrls) {
    throw new Error(`IndexNow expects 1-${maxUrls} changed URLs.`);
  }
  if (new Set(urls).size !== urls.length) throw new Error('Duplicate IndexNow URL.');
  for (const value of urls) {
    const url = new URL(value);
    if (url.origin !== origin || url.username || url.password || url.search || url.hash ||
      !/^\/(en|ar)\//.test(url.pathname) || url.href !== value) {
      throw new Error('IndexNow URL must be a canonical public INAYA locale URL.');
    }
  }
  return { host, key, keyLocation: `${origin}/${key}.txt`, urlList: urls };
}

export async function submitUrls(urls, fetcher = fetch) {
  if (!urls.length) return { status: 'skipped', count: 0, reason: 'No meaningful deployed page changes.' };
  const payload = payloadFor(urls);
  const verification = await fetcher(payload.keyLocation, {
    redirect: 'error', signal: AbortSignal.timeout(15000), headers: { 'Cache-Control': 'no-cache' },
  });
  if (verification.status !== 200 || (await verification.text()).trim() !== key) {
    throw new Error('Public IndexNow key is not available or does not match; no URLs submitted.');
  }
  // One bounded POST only. No blind retry after an ambiguous network failure.
  const response = await fetcher(endpoint, {
    method: 'POST', redirect: 'error', signal: AbortSignal.timeout(20000),
    headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(payload),
  });
  if (![200, 202].includes(response.status)) throw new Error(`IndexNow returned HTTP ${response.status}.`);
  return { status: response.status === 202 ? 'received_pending_key_validation' : 'received',
    httpStatus: response.status, count: urls.length };
}

export async function notify(staging, baseline, resultFile, fetcher = fetch) {
  const result = { observedAt: new Date().toISOString(), host, urls: [], status: 'failed' };
  let failure;
  try {
    Object.assign(result, await selectUrls(staging, baseline));
    Object.assign(result, await submitUrls(result.urls, fetcher));
  } catch (error) {
    failure = error;
    result.error = error.message;
  }
  await fs.writeFile(resultFile, `${JSON.stringify(result, null, 2)}\n`);
  const summary = [
    '## IndexNow deployment notifications', '',
    `Status: ${result.status}. Selected URLs: ${result.urls.length}.`,
    result.httpStatus ? `HTTP ${result.httpStatus}: receipt only; indexing and ranking are not guaranteed.` : '',
    `Build-only changes excluded: ${result.unchangedContent ?? 0}. Non-indexable HTML excluded: ${result.excludedHtml ?? 0}.`,
    'Only new/changed canonical EN/AR pages in the successful FTP transfer are eligible.',
    'Removed export paths are not notified: the FTP workflow does not delete live files.',
    failure ? `Notification failed: ${failure.message} Review the saved notification artifact before retrying.` : '',
    '',
  ].filter(Boolean).join('\n') + '\n';
  console.log(summary);
  if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, summary);
  if (failure) {
    const message = failure.message.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
    console.warn(`::warning title=IndexNow notification failed::${message} Site deployment remains successful; review the saved result before retrying.`);
    throw failure;
  }
  return result;
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const [staging, baseline, resultFile] = process.argv.slice(2);
  if (!staging || !baseline || !resultFile) throw new Error('Usage: indexnow-notify.mjs <uploaded-staging> <baseline> <result-json>');
  await notify(staging, baseline, resultFile);
}
