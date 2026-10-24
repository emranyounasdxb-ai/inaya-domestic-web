import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { auditExport, attrs } from '../scripts/seo-content-audit.mjs';

test('all 232 search titles are unique, within Bing scan length and consistent with sharing metadata', async () => {
  const {pages} = await auditExport();
  assert.equal(pages.length, 232);
  assert.equal(new Set(pages.map(page => page.title)).size, 232);
  for (const page of pages) {
    assert.ok(page.title.length <= 70, `${page.url}: title has ${page.title.length} characters`);
    assert.match(page.title, /INAYA|عناية/);
    const html = await readFile(`out${new URL(page.url).pathname}index.html`, 'utf8');
    const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map(match => attrs(match[0]));
    assert.equal(metas.find(meta => meta.property === 'og:title')?.content, page.title);
    assert.equal(metas.find(meta => meta.name === 'twitter:title')?.content, page.title);
    const links = [...html.matchAll(/<link\b[^>]*>/g)].map(match => attrs(match[0]));
    assert.equal(links.find(link => link.rel === 'canonical')?.href, page.url);
  }
});
