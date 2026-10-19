import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const output = path.resolve('out');
const origin = 'https://inayadomestic.ae';

test('Ajman answer links resolve to exported pages in the same language', async () => {
  for (const locale of ['en', 'ar']) {
    const html = await readFile(path.join(output, locale, 'maid-services-ajman/index.html'), 'utf8');
    const details = [...html.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/g)];
    const targets = details.flatMap((block) => [...block[1].matchAll(/href="([^"]+)"/g)].map((link) => link[1]));
    assert.ok(targets.length >= 8, `${locale}: service answers provide practical next steps`);
    for (const href of targets) {
      assert.ok(href.startsWith(`/${locale}/`), `${locale}: preserve language for ${href}`);
      const destination = await readFile(path.join(output, href.slice(1), 'index.html'), 'utf8');
      assert.ok(destination.includes(`href="${origin}${href}"`), `${href}: canonical destination exists`);
      assert.doesNotMatch(destination, /<meta[^>]+name="robots"[^>]+noindex/);
    }
  }
});

test('exported robots allows public pages and advertises production sitemap', async () => {
  const robots = await readFile(path.join(output, 'robots.txt'), 'utf8');
  assert.match(robots, /User-Agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.doesNotMatch(robots, /Disallow:/);
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
});

test('export sitemap exactly covers localized HTML with reciprocal canonical alternates', async () => {
  const xml = await readFile(path.join(output, 'sitemap.xml'), 'utf8');
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  const datedEntries = entries.filter((entry) => entry[1].includes('<lastmod>'));
  assert.equal(datedEntries.length, 12, 'only the six bilingual content updates have recorded modification dates');
  for (const entry of datedEntries) {
    assert.match(entry[1], /<lastmod>2026-10-19<\/lastmod>/);
    assert.match(entry[1], /\/(maid-services-ajman|services\/(part-time-maid|monthly-maid-contract|nanny|babysitting|housekeeping))\/<\/loc>/);
  }
  const urls = entries.map((entry) => entry[1].match(/<loc>(.*?)<\/loc>/)[1]);
  assert.equal(new Set(urls).size, urls.length);
  const exported = [];
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(file);
      else if (entry.name === 'index.html') {
        exported.push(`${origin}/${path.relative(output, path.dirname(file)).split(path.sep).join('/')}/`);
      }
    }
  }
  for (const locale of ['en', 'ar']) await walk(path.join(output, locale));
  assert.deepEqual([...urls].sort(), exported.sort());
  for (const [index, url] of urls.entries()) {
    const parsed = new URL(url);
    assert.equal(parsed.origin, origin);
    assert.match(parsed.pathname, /^\/(en|ar)\/(.*\/)?$/);
    const html = await readFile(path.join(output, parsed.pathname.slice(1), 'index.html'), 'utf8');
    assert.doesNotMatch(html, /<meta[^>]+name="robots"[^>]+noindex/);
    assert.doesNotMatch(html, /http-equiv="refresh"/i);
    const links = [...html.matchAll(/<link\b[^>]*>/g)].map((match) => match[0].replace(/hrefLang/gi, 'hreflang'));
    const canonical = links.filter((link) => link.includes('rel="canonical"'));
    assert.equal(canonical.length, 1, url);
    assert.ok(canonical[0].includes(`href="${url}"`), url);
    const alternates = links.filter((link) => link.includes('hreflang='));
    assert.equal(alternates.length, 3, url);
    const suffix = parsed.pathname.replace(/^\/(en|ar)\//, '');
    for (const language of ['en', 'ar', 'x-default']) {
      const target = `${origin}/${language === 'ar' ? 'ar' : 'en'}/${suffix}`;
      assert.ok(urls.includes(target), target);
      assert.equal(alternates.filter((link) => link.includes(`hreflang="${language}"`) && link.includes(`href="${target}"`)).length, 1, url);
      assert.ok(entries[index][1].includes(`hreflang="${language}" href="${target}"`), url);
    }
  }
  console.log(`Verified ${urls.length} exported localized pages and sitemap entries.`);
});
