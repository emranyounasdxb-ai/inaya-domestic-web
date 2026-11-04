import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import citations from './official-citation-expectations.cjs';
import { attrs, text } from '../scripts/seo-content-audit.mjs';
const baseline = JSON.parse(await readFile('tests/fixtures/official-citation-pages-20261104.json', 'utf8'));

test('only the five approved URL replacements change the five active sources', async () => {
  assert.equal(Object.keys(citations.fixture.targets).length, 5);
  assert.equal(Object.keys(citations.fixture.sources).length, 5);
  for (const [file, pin] of Object.entries(citations.fixture.sources)) {
    const source = (await readFile(file, 'utf8')).replace(/\r\n/g, '\n');
    assert.equal(citations.sha(source), pin.afterSha256, `${file}: complete pinned result`);
    for (const old of Object.keys(citations.fixture.targets)) assert.ok(!source.includes(old), `${file}: retired URL absent`);
    assert.equal(citations.sha(citations.historicalSource(file, source)), pin.beforeSha256);
    assert.throws(() => citations.historicalSource(file, source + '\n// Unreviewed copy change\n'), /exact reviewed/);
  }
});

test('all30 affected EN/AR pages preserve visible copy and metadata while repairing all31 anchors', async () => {
  assert.equal(Object.keys(baseline.pages).length, 30);
  let repaired = 0;
  for (const [url, expected] of Object.entries(baseline.pages)) {
    const html = await readFile(`out${new URL(url).pathname}index.html`, 'utf8');
    const clean = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
    const main = clean.slice(clean.indexOf('<main'), clean.lastIndexOf('</main>') + 7);
    const meta = [...html.matchAll(/<meta\b([^>]*)>/g)].map(m => attrs(m[1]));
    const links = [...html.matchAll(/<link\b([^>]*)>/g)].map(m => attrs(m[1]));
    assert.equal(citations.sha(text(main)), expected.mainTextSha256, `${url}: every visible word, label, price and date unchanged`);
    assert.equal(text(html.match(/<title>([\s\S]*?)<\/title>/)[1]), expected.title);
    assert.equal(meta.find(m => m.name === 'description').content, expected.description);
    assert.deepEqual(links.filter(l => l.rel === 'canonical').map(l => l.href), expected.canonical);
    assert.deepEqual(links.filter(l => l.rel === 'alternate'), expected.alternates);
    assert.deepEqual([...main.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(m => text(m[1])), expected.h1);
    const graph = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(m => attrs(m[1]).type === 'application/ld+json').map(m => JSON.parse(m[2]));
    assert.equal(citations.sha(JSON.stringify(graph)), expected.structuredDataSha256, `${url}: structured data changes only the approved citations`);
    const anchors = [...main.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map(m => ({ href: attrs(m[1]).href, label: text(m[2]) }));
    for (const anchor of expected.repairedAnchors) {
      const match = anchors.findIndex(a => a.href === anchor.href && a.label === anchor.label);
      assert.ok(match >= 0, `${url}: visible language-matched source ${anchor.label}`);
      anchors.splice(match, 1); repaired++;
    }
    for (const old of Object.keys(citations.fixture.targets)) assert.ok(!html.includes(old), `${url}: no stale link in raw HTML or hydration data`);
  }
  assert.equal(repaired, 31);
});

test('none of the294 canonical exports retain a retired official target', async () => {
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  assert.equal(urls.length, 294);
  for (const url of urls) {
    const html = await readFile(`out${new URL(url).pathname}index.html`, 'utf8');
    for (const old of Object.keys(citations.fixture.targets)) assert.ok(!html.includes(old), `${url}: no obsolete official href/citation`);
  }
});
