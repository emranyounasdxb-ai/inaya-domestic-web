import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import path from 'node:path';
import { auditExport } from '../scripts/seo-content-audit.mjs';
import remediation from './seo-final-remediation-expectations.cjs';
import corePageCopy from './core-page-copy-expectations.cjs';

test('Phase 5 retains all prior routes and protected sources while adding six bilingual guides', async () => {
  const checkpoint = '3c2aee5822d1425feb19d3d08106790bd6d5561f';
  for (const file of ['app/robots.ts', 'lib/seo.ts', 'lib/buyer-answers.ts', 'lib/service-content-briefs.ts', 'lib/profile-content-briefs.ts', 'lib/content-architecture.ts', 'components/SierraLeoneOfferControls.tsx', 'components/SierraLeoneOfferControls.module.css', 'components/HomeGoogleReviews.tsx', 'components/HomeGoogleReviewsShowcase.tsx', 'tests/e2e/home.spec.ts', 'tests/e2e/sierra-leone-offer-controls.spec.ts', 'tests/fixtures/seo-phase03-baseline.json', 'next.config.js']) {
    let expected = execFileSync('git', ['show', `${checkpoint}:${file}`], { encoding: 'utf8' }).replace(/\r\n/g, '\n');
    if (file === 'tests/fixtures/seo-phase03-baseline.json') expected = remediation.approvedDescriptions(expected);
    if (file === 'tests/e2e/home.spec.ts') expected = remediation.approvedHomeFlow(expected);
    if (file === 'lib/service-content-briefs.ts') expected = corePageCopy.approvedCorePageCopy(file, expected);
    assert.equal((await readFile(file, 'utf8')).replace(/\r\n/g, '\n'), expected, `${file}: exact checkpoint protection with reviewed remediation only`);
  }
  const audit = await auditExport();
  assert.equal(audit.pages.length, 146);
  assert.equal(audit.pages.filter((p) => p.locale === 'en').length, 73);
  assert.equal(audit.pages.filter((p) => p.locale === 'ar').length, 73);
  assert.equal(new Set(audit.pages.map((p) => p.title)).size, 146);
  assert.equal(new Set(audit.pages.map((p) => p.description)).size, 146);
  assert.ok(audit.repeatedTokens <= 8300);
  assert.ok(audit.repeatedParagraphs <= 660);
  // The FAQ now includes the four previously client-only categories in each
  // locale's initial HTML. Their 2,236 measured tokens increase total prose;
  // repeated-token, repeated-paragraph and near-pair guards stay unchanged.
  assert.ok(audit.paragraphTokens >= 31900);
  assert.equal(audit.nearPairs.length, 0);
  assert.deepEqual(audit.orphans, []);
  for (const locale of ['en', 'ar']) { assert.equal(audit.linkCoverage[locale].reachable, 73); assert.ok(audit.linkCoverage[locale].maximumDepth <= 3); }
  for (const page of audit.pages) {
    const html = await readFile(path.join('out', new URL(page.url).pathname.slice(1), 'index.html'), 'utf8');
    assert.doesNotMatch(html, /<script[^>]+src=["'][^"']*(?:googletagmanager|google-analytics)/);
  }
  console.log(JSON.stringify({ routes: 146, locales: 2, orphans: 0, repeatedTokens: audit.repeatedTokens, nearPairs: 0 }));
});
