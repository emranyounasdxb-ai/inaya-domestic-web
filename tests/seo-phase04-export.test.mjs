import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import test from 'node:test';
import managed from './managed-package-expectations.cjs';
import additions from './four-guides-addition-expectations.cjs';
import { auditExport, text } from '../scripts/seo-content-audit.mjs';
const require = createRequire(import.meta.url);
const { buyerAnswers } = require('../.next/phase-02-unit/lib/buyer-answers.js');
const { siteConfig } = require('../.next/phase-02-unit/lib/site-config.js');

test('all 292 routes omit unsupported statistics, approval and ranking labels and retain business identity', async () => {
  const audit = await auditExport();
  additions.assertInventory(audit.pages.map(page => page.url));
  assert.equal(new Set(audit.pages.map((p) => p.title)).size, additions.canonicalCount);
  assert.equal(new Set(audit.pages.map((p) => p.description)).size, additions.canonicalCount);
  assert.deepEqual(audit.orphans, []);
  assert.equal(audit.nearPairs.length, 0);
  const editorial = managed.editorialRepetition(audit);
  assert.ok(editorial.repeatedTokens <= 8300, 'retain the editorial repetition budget alongside exact approved commercial copy and counted presentation placements');
  for (const page of audit.pages) {
    const file = await readFile(path.join('out', new URL(page.url).pathname.slice(1), 'index.html'), 'utf8');
    const visible = text(file.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, ''));
    const withoutNegativeHelplineStatement = visible.replace(/\b(?:not|without|does not promise) a 24\/7\b/g, 'not continuous');
    assert.doesNotMatch(withoutNegativeHelplineStatement, /No\.\s*1|10,000\+|100%|24\/7|Licensed & Approved|Recognized & Trusted by UAE Authorities|Verified & Trusted Workers|Verified workers|Available profiles|12 Years Exp\.|12 سنة خبرة|مرخص ومعتمد|ملفات متاحة|الخيار الأول/i, page.url);
    assert.doesNotMatch(`${page.title} ${page.description}`, /safer hiring|trained or experienced|trusted maid agency|أكثر أماناً|ملفات مدربة|شركة خادمات موثوقة/i, page.url);
    assert.ok(file.includes(siteConfig.email), page.url);
    assert.ok(file.includes(`tel:${siteConfig.phone.replace(/\s/g, '')}`), page.url);
    assert.ok(file.includes(siteConfig.address), `${page.url}: schema address`);
    assert.doesNotMatch(file, /"openingHours"|"aggregateRating"/);
    const answer = buyerAnswers[new URL(page.url).pathname.split('/').slice(2).filter(Boolean).join('/')];
    if (answer) {
      assert.ok(file.includes('data-content="buyer-answer"'));
      assert.ok(visible.includes(answer.question[page.locale]));
      assert.ok(visible.includes(answer.answer[page.locale]));
    }
  }
  console.log(JSON.stringify({ routes: additions.canonicalCount, localizedBuyerAnswers: 16, orphans: 0, nearPairs: 0, repeatedTokens: audit.repeatedTokens, editorial }));
});
