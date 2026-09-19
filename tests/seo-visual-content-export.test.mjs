import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import test from 'node:test';
import preservation from './form-accessibility-preservation.cjs';
import { auditExport, attrs, text } from '../scripts/seo-content-audit.mjs';

test('all 140 pages remove the pre-Hero strip and render localized breadcrumbs after the Hero', async () => {
  const audit = await auditExport();
  assert.equal(audit.pages.length, 140);
  assert.deepEqual(audit.orphans, []);
  for (const locale of ['en', 'ar']) {
    assert.equal(audit.linkCoverage[locale].reachable, 70);
    assert.ok(audit.linkCoverage[locale].maximumDepth <= 3);
    assert.ok(audit.linkCoverage[locale].minimumOtherPageInbound > 0);
  }
  for (const page of audit.pages) {
    const html = await readFile(path.join('out', new URL(page.url).pathname.slice(1), 'index.html'), 'utf8');
    const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    assert.doesNotMatch(body, /data-seo="related-guides"|data-content="page-purpose"/, page.url);
    const navs = [...body.matchAll(/<nav\b([^>]*data-seo="breadcrumbs"[^>]*)>([\s\S]*?)<\/nav>/g)];
    const home = new URL(page.url).pathname === `/${page.locale}/`;
    assert.equal(navs.length, home ? 0 : 1, page.url);
    if (home) continue;
    const nav = navs[0];
    assert.equal(attrs(nav[1]).dir, page.locale === 'ar' ? 'rtl' : 'ltr');
    assert.ok(body.indexOf('</h1>') < nav.index, `${page.url}: breadcrumb follows heading`);
    // If the H1 sits in a section, its complete Hero must close before the nav.
    const stack = [];
    let heroEnd;
    let hero;
    for (const match of body.matchAll(/<\/?(?:section|h1)\b[^>]*>/g)) {
      if (match[0].startsWith('<section')) stack.push(match.index);
      else if (match[0].startsWith('<h1')) hero = stack.at(-1);
      else if (match[0].startsWith('</section')) {
        if (stack.pop() === hero && hero !== undefined) { heroEnd = match.index + match[0].length; break; }
      }
    }
    if (heroEnd) {
      assert.ok(heroEnd <= nav.index, `${page.url}: complete Hero before breadcrumbs`);
      assert.equal(body.slice(heroEnd, nav.index).trim(), '', `${page.url}: directly after Hero`);
    }
    const graphs = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)]
      .filter(m => attrs(m[1]).type === 'application/ld+json').flatMap(m => JSON.parse(m[2])['@graph'] || []);
    const crumbs = graphs.find(n => n['@type'] === 'BreadcrumbList').itemListElement;
    for (const crumb of crumbs) assert.ok(text(nav[2]).includes(crumb.name), page.url);
    assert.match(nav[2], /aria-current="page"/);
  }
});

test('technical SEO, content datasets, trust, prices, measurement and protected UI remain exact', async () => {
  const files = ['app/robots.ts', 'app/sitemap.ts', 'lib/seo.ts', 'lib/page-seo.ts', 'lib/structured-data.ts', 'lib/json-ld.ts', 'lib/content-architecture.ts', 'lib/service-content-briefs.ts', 'lib/profile-content-briefs.ts', 'lib/services.ts', 'lib/buyer-answers.ts', 'lib/measurement.ts', 'components/Measurement.tsx', 'components/Footer.tsx', 'components/SierraLeoneOfferControls.tsx', 'components/SierraLeoneOfferControls.module.css', 'components/HomeGoogleReviews.tsx', 'components/HomeGoogleReviewsShowcase.tsx', 'tests/e2e/home.spec.ts', 'tests/e2e/sierra-leone-offer-controls.spec.ts', 'app/globals.css', 'app/[locale]/layout.tsx', 'next.config.js', 'tests/fixtures/seo-phase03-baseline.json'];
  for (const file of files) {
    const before = execFileSync('git', ['show', `0cc89c4ca6d5621a6ed08818b799b2bdeb71a5af:${file}`], { encoding: 'utf8' });
    assert.equal((await readFile(file, 'utf8')).replace(/\r\n/g, '\n'), before.replace(/\r\n/g, '\n'), file);
  }
  for (const file of ['components/BookingForm.tsx', 'components/CareersForm.tsx', 'components/ContactForm.tsx']) {
    const before = execFileSync('git', ['show', `f45a93dc0b8274ad6a792420cfa3e4bcbb828103:${file}`], { encoding: 'utf8' }).replace(/\r\n/g, '\n');
    preservation.assertFormPreserved((await readFile(file, 'utf8')).replace(/\r\n/g, '\n'), before, file);
  }
  const heroFiles = ['about', 'booking', 'careers', 'contact', 'faq', 'blog', 'how-it-works', 'pricing', 'refund-policy', 'service-areas', 'services', '[locationSlug]', 'maid-source-countries/[slug]'].map(route => `app/[locale]/${route}/page.tsx`);
  heroFiles.push('components/ServiceDetailTemplate.tsx', 'components/CountrySourcePage.tsx', 'app/[locale]/page.tsx');
  const heroSource = source => {
    const heading = source.indexOf('<h1');
    return source.slice(source.lastIndexOf('<section', heading), source.indexOf('</section>', heading) + '</section>'.length);
  };
  for (const file of heroFiles) {
    const before = execFileSync('git', ['show', `0cc89c4ca6d5621a6ed08818b799b2bdeb71a5af:${file}`], { encoding: 'utf8' });
    const expected = file === 'components/CountrySourcePage.tsx'
      ? heroSource(before.replace(/\r\n/g, '\n')).replace('booking?service=countries-we-source-from', 'booking')
      : heroSource(before.replace(/\r\n/g, '\n'));
    assert.equal(heroSource((await readFile(file, 'utf8')).replace(/\r\n/g, '\n')), expected, `${file}: original Hero markup and styling`);
  }
});
