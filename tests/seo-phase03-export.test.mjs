import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { auditExport, origin, attrs, text } from '../scripts/seo-content-audit.mjs';

test('Phase 3 preserves all route identities, reduces measured repetition and removes all orphans', async () => {
  const baseline = JSON.parse(await readFile('tests/fixtures/seo-phase03-baseline.json', 'utf8'));
  const current = await auditExport();
  assert.equal(current.pages.length, 140);
  assert.deepEqual(current.pages.map((p) => p.url), baseline.pages.map((p) => p.url));
  assert.deepEqual(current.orphans, []);
  for (const locale of ['en', 'ar']) {
    assert.equal(current.linkCoverage[locale].reachable, 70);
    assert.ok(current.linkCoverage[locale].minimumOtherPageInbound > 0);
  }
  assert.ok(current.repeatedTokens < baseline.repeatedTokens);
  assert.ok(current.repeatedParagraphs < baseline.repeatedParagraphs);
  assert.ok(current.nearPairs.length < baseline.nearPairs);
  for (const page of current.pages) {
    const before = baseline.pages.find((p) => p.url === page.url);
    assert.equal(page.title, before.title, page.url);
    assert.equal(page.description, before.description, page.url);
    assert.deepEqual(page.schemaIds, before.schemaIds, `${page.url}: schema IDs`);
    assert.deepEqual(page.prices, before.prices, `${page.url}: displayed prices`);
    const file = await readFile(path.join('out', new URL(page.url).pathname.slice(1), 'index.html'), 'utf8');
    const body = file.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    const relatedNav = body.match(/<nav\b[^>]*data-seo="related-guides"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
    assert.ok(relatedNav, page.url);
    for (const match of body.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
      const href = attrs(match[1]).href;
      if (!href || /^(mailto|tel|javascript):/.test(href)) continue;
      const target = new URL(href, page.url);
      if (target.origin !== origin || !/^\/(en|ar)\//.test(target.pathname)) continue;
      const targetLocale = target.pathname.split('/')[1];
      if (targetLocale !== page.locale) assert.match(text(match[2]), /^(English|العربية)$/i, `${page.url}: unintended locale link ${href}`);
    }
    if (['service', 'country', 'location'].includes(page.family)) {
      const blocks = [...file.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter((m) => attrs(m[1]).type === 'application/ld+json');
      const nodes = blocks.flatMap((m) => JSON.parse(m[2])['@graph'] || []);
      const faq = nodes.find((node) => node['@type'] === 'FAQPage');
      const details = [...body.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/g)].map((m) => ({
        question: text(m[1].match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/)[1]),
        answer: text(m[1].match(/<p\b[^>]*>([\s\S]*?)<\/p>/)[1])
      }));
      assert.deepEqual(faq.mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer.text })), details, `${page.url}: visible FAQ/schema`);
    }
  }
  console.log(JSON.stringify({ routes: 140, orphans: current.orphans.length, repeatedParagraphs: [baseline.repeatedParagraphs, current.repeatedParagraphs], repeatedTokens: [baseline.repeatedTokens, current.repeatedTokens], nearPairs: [baseline.nearPairs, current.nearPairs.length] }));
});
