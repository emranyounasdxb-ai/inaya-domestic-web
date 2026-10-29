import octoberFixes from './seo-october-fixes-expectations.cjs';
import './seo-october-fixes-export.test.mjs';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import onPageSpec from './on-page-spec-expectations.cjs';
import path from 'node:path';
import { auditExport } from '../scripts/seo-content-audit.mjs';
import remediation from './seo-final-remediation-expectations.cjs';
import corePageCopy from './core-page-copy-expectations.cjs';
import managed from './managed-package-expectations.cjs';
import ahrefs from './ahrefs-expectations.cjs';

test('Phase 5 retains all prior routes and protected sources while serving seven bilingual guide pairs', async () => {
  const checkpoint = '3c2aee5822d1425feb19d3d08106790bd6d5561f';
  // The retired promotion's old browser suite is replaced by absence/back-to-top coverage.
  for (const file of ['app/robots.ts', 'lib/seo.ts', 'lib/buyer-answers.ts', 'lib/service-content-briefs.ts', 'lib/profile-content-briefs.ts', 'lib/content-architecture.ts', 'components/SierraLeoneOfferControls.tsx', 'components/SierraLeoneOfferControls.module.css', 'components/HomeGoogleReviews.tsx', 'components/HomeGoogleReviewsShowcase.tsx', 'tests/e2e/home.spec.ts', 'tests/fixtures/seo-phase03-baseline.json', 'next.config.js']) {
    let expected = execFileSync('git', ['show', `${checkpoint}:${file}`], { encoding: 'utf8' }).replace(/\r\n/g, '\n');
    if (file === 'app/robots.ts') {
      const original = '    sitemap: `${siteConfig.url}/sitemap.xml`,';
      assert.equal(expected.split(original).length, 2, 'one original sitemap declaration');
      expected = expected.replace(original, '    sitemap: [`${siteConfig.url}/sitemap.xml`, `${siteConfig.url}/image-sitemap.xml`],');
    }
    if (file === 'tests/fixtures/seo-phase03-baseline.json') expected = remediation.approvedDescriptions(expected);
    if (file === 'tests/e2e/home.spec.ts') expected = remediation.approvedHomeFlow(expected);
    if (file === 'lib/service-content-briefs.ts') expected = corePageCopy.approvedCorePageCopy(file, expected);
    expected = octoberFixes.approvedSeoFixes(file, expected);
    expected = onPageSpec.approvedOnPageSource(file, expected);
    assert.equal(ahrefs.beforeAhrefsSource(file, (await readFile(file, 'utf8')).replace(/\r\n/g, '\n')), expected, `${file}: exact checkpoint protection with reviewed remediation only`);
  }
  const audit = await auditExport();
  assert.equal(audit.pages.length, 284);
  assert.equal(audit.pages.filter((p) => p.locale === 'en').length, 142);
  assert.equal(audit.pages.filter((p) => p.locale === 'ar').length, 142);
  assert.equal(new Set(audit.pages.map((p) => p.title)).size, 284);
  assert.equal(new Set(audit.pages.map((p) => p.description)).size, 284);
  const editorial = managed.editorialRepetition(audit);
  assert.ok(editorial.repeatedTokens <= 8300);
  assert.ok(editorial.repeatedParagraphs <= 660);
  // The FAQ now includes the four previously client-only categories in each
  // locale's initial HTML. Their 2,236 measured tokens increase total prose;
  // repeated-token, repeated-paragraph and near-pair guards stay unchanged.
  assert.ok(audit.paragraphTokens >= 31900);
  assert.equal(audit.nearPairs.length, 0);
  assert.deepEqual(audit.orphans, []);
  for (const locale of ['en', 'ar']) { assert.equal(audit.linkCoverage[locale].reachable, 142); assert.ok(audit.linkCoverage[locale].maximumDepth <= 3); }
  for (const page of audit.pages) {
    const html = await readFile(path.join('out', new URL(page.url).pathname.slice(1), 'index.html'), 'utf8');
    assert.doesNotMatch(html, /<script[^>]+src=["'][^"']*(?:googletagmanager|google-analytics)/);
  }
  console.log(JSON.stringify({ routes: 284, locales: 2, orphans: 0, repeatedTokens: audit.repeatedTokens, editorial, nearPairs: 0 }));
});
