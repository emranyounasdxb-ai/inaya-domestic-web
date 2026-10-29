import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import onPageSpec from './on-page-spec-expectations.cjs';
import amendment from './five-guides-amendment-expectations.cjs';

const output = path.resolve('out');
const origin = 'https://inayadomestic.ae';

test('Pinterest verification is present once in every public page head and the root fallback', async () => {
  const verificationTags = html => {
    const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
    return [...head.matchAll(/<meta\b[^>]*>/gi)]
      .map(match => Object.fromEntries([...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map(attribute => [attribute[1], attribute[2]])))
      .filter(tag => tag.name === 'p:domain_verify');
  };
  const verificationFile = await readFile('public/pinterest-dbb07.html', 'utf8');
  const [verification] = verificationTags(verificationFile);
  assert.match(verification?.content ?? '', /^[a-f0-9]{32}$/, 'the existing public verification token is valid');
  const assertVerification = (html, source) => {
    assert.deepEqual(verificationTags(html), [verification], `${source}: one matching tag inside head`);
  };
  assertVerification(await readFile(path.join(output, 'pinterest-dbb07.html'), 'utf8'), 'exported verification file');
  const sitemap = await readFile(path.join(output, 'sitemap.xml'), 'utf8');
  const pages = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname);
  assert.ok(pages.length > 0, 'verify the complete exported public page inventory');
  for (const route of pages) {
    assertVerification(await readFile(path.join(output, route, 'index.html'), 'utf8'), route);
  }
  const workflow = await readFile('.github/workflows/deploy-cpanel.yml', 'utf8');
  const fallback = workflow.match(/cat > out\/index\.html <<'EOF'\r?\n([\s\S]*?)\r?\n\s*EOF/)?.[1];
  assert.ok(fallback, 'deployment retains the static root language fallback');
  assertVerification(fallback, 'deployment root fallback');
});

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
  const updatedRoutes = JSON.parse(await readFile('tests/fixtures/poster-pricing-updated-routes.json', 'utf8'));
  const articleManifest = JSON.parse(await readFile('content/research/2026-10-20/article-manifest.json', 'utf8'));
  const domesticRefresh = JSON.parse(await readFile('content/research/2026-10-24/article-refreshes.json', 'utf8'));
  const domesticUpdatedRoutes = new Set(domesticRefresh.substantivelyChangedRoutes);
  const ajmanRefresh = JSON.parse(await readFile('content/research/2026-10-24/ajman-intent-refreshes.json', 'utf8'));
  const ajmanUpdatedRoutes = new Set(ajmanRefresh.routeChanges.map((entry) => entry.path));
  assert.equal(articleManifest.length, 20, 'twenty distinct article outputs');
  const todayRoutes = new Set(['blog', ...articleManifest.map(article => `blog/${article.slug}`)]);
  const officeUpdatedRoutes = new Set(['about', 'contact', 'maid-services-ajman', 'maid-services-dubai', 'maid-services-sharjah']);
  const paymentUpdatedRoutes = new Set(['pricing']);
  const galleryUpdatedRoutes = new Set(['gallery']);
  const galleryRetirementRoutes = new Set(['gallery', 'about', 'maid-services-ajman']);
  const countryPhotoRoutes = new Set(['services/countries-we-source-from', ...[
    'philippines', 'sri-lankan', 'nepali', 'indian', 'bangladeshi', 'ethiopian',
    'kenyan', 'ugandan', 'ghanaian', 'sierra-leone', 'indonesian', 'myanmar',
  ].map(country => `maid-source-countries/${country}-maid-uae`)]);
  const onPageUpdatedRoutes = new Set(onPageSpec.onPageUpdatedRoutes);
  const archiveRoutes = new Set(onPageSpec.archiveRoutes);
  const october28Routes = new Set([...countryPhotoRoutes, ...onPageUpdatedRoutes, ...archiveRoutes]);
  const worksheetUpdatedRoutes = new Set([
    'blog/domestic-worker-hiring-costs-uae',
    'blog/domestic-worker-skills-language-assessment',
    'blog/agreeing-domestic-worker-household-duties',
    'blog/domestic-worker-interview-trial-probation',
    'blog/new-maid-first-week-checklist',
    'blog/maid-daily-instructions-handover-template',
  ]);
  const companyInformationRoutes = new Set(['company-information']);
  const keywordArticles = JSON.parse(await readFile('content/keyword-articles-20261024.json', 'utf8'));
  assert.equal(keywordArticles.length, 21);
  const keywordRoutes = new Set(keywordArticles.map(article => `blog/${article.slug}`));
  const keywordUrls = ['en', 'ar'].flatMap(locale => [...keywordRoutes].map(route => `${origin}/${locale}/${route}/`));
  const step1Routes = new Set(amendment.targetSlugs.map(slug => `blog/${slug}`));
  const privacyRoutes = new Set(['privacy-policy']);
  const datedRoutes = new Set([...step1Routes, ...privacyRoutes, ...onPageUpdatedRoutes, ...archiveRoutes, ...countryPhotoRoutes, ...keywordRoutes, ...companyInformationRoutes, ...updatedRoutes, ...todayRoutes, ...officeUpdatedRoutes, ...worksheetUpdatedRoutes, ...galleryUpdatedRoutes, ...paymentUpdatedRoutes, ...domesticUpdatedRoutes, ...ajmanUpdatedRoutes]);
  const expectedDatedUrls = ['en', 'ar'].flatMap(locale => [...datedRoutes].map(route => `${origin}/${locale}/${route ? `${route}/` : ''}`));
  assert.equal(datedEntries.length, 250, 'only the two substantively updated privacy-policy copies add to248 dated URLs');
  assert.deepEqual(datedEntries.map(entry => entry[1].match(/<loc>(.*?)<\/loc>/)[1]).sort(), expectedDatedUrls.sort());
  assert.equal(datedEntries.filter(entry => entry[1].includes('<lastmod>2026-10-20</lastmod>')).length, 30, 'unchanged customer articles retain their substantive date');
  assert.equal(datedEntries.filter(entry => entry[1].includes('<lastmod>2026-10-22</lastmod>')).length, 16, 'only unchanged office and worksheet pairs retain 22 October; contact now has substantive on-page changes');
  assert.equal(datedEntries.filter(entry => entry[1].includes('<lastmod>2026-10-23</lastmod>')).length, 2, 'only the bilingual pricing pair receives the confirmed payment-content update date');
  assert.deepEqual(datedEntries.filter(entry => entry[1].includes('<lastmod>2026-10-24</lastmod>'))
    .map(entry => entry[1].match(/<loc>(.*?)<\/loc>/)[1]).sort(),
    [...new Set([...domesticRefresh.routeChanges, ...ajmanRefresh.routeChanges].flatMap(entry => entry.urls)), ...['en', 'ar'].map(locale => `${origin}/${locale}/company-information/`), ...keywordUrls].filter(url => !new Set([...galleryRetirementRoutes, ...onPageUpdatedRoutes, ...step1Routes]).has(new URL(url).pathname.split('/').slice(2).filter(Boolean).join('/'))).sort(),
    'unchanged approved substantive route pairs retain24October');
  assert.deepEqual(datedEntries.filter(entry => entry[1].includes('<lastmod>2026-10-25</lastmod>')).map(entry => entry[1].match(/<loc>(.*?)<\/loc>/)[1]).sort(), ['en', 'ar'].flatMap(locale => [...galleryRetirementRoutes].filter(route => !onPageUpdatedRoutes.has(route)).map(route => `${origin}/${locale}/${route}/`)).sort(), 'the unchanged gallery pair retains 25 October; About and Ajman have reviewed substantive changes');
  assert.deepEqual(datedEntries.filter(entry => entry[1].includes('<lastmod>2026-10-28</lastmod>')).map(entry => entry[1].match(/<loc>(.*?)<\/loc>/)[1]).sort(), ['en', 'ar'].flatMap(locale => [...october28Routes].map(route => `${origin}/${locale}/${route ? `${route}/` : ''}`)).sort(), 'only the exact country-photo, substantive on-page and new archive URLs receive 28 October');
  const expectedOctober29Urls = ['en', 'ar'].flatMap(locale => [...step1Routes, ...privacyRoutes].map(route => `${origin}/${locale}/${route}/`));
  assert.equal(expectedOctober29Urls.length, 12);
  assert.deepEqual(datedEntries.filter(entry => entry[1].includes('<lastmod>2026-10-29</lastmod>')).map(entry => entry[1].match(/<loc>(.*?)<\/loc>/)[1]).sort(), expectedOctober29Urls.sort(), 'only the ten reviewed guide copies and two privacy-policy copies receive29October');
  for (const entry of datedEntries) {
    const pathname = new URL(entry[1].match(/<loc>(.*?)<\/loc>/)[1]).pathname;
    const route = pathname.split('/').slice(2).filter(Boolean).join('/');
    const expectedDate = step1Routes.has(route) || privacyRoutes.has(route) ? '2026-10-29' : october28Routes.has(route) ? '2026-10-28' : galleryRetirementRoutes.has(route) ? '2026-10-25' : keywordRoutes.has(route) || companyInformationRoutes.has(route) ? '2026-10-24' : ajmanUpdatedRoutes.has(route) ? ajmanRefresh.date : domesticUpdatedRoutes.has(route) ? domesticRefresh.date : paymentUpdatedRoutes.has(route) ? '2026-10-23' : officeUpdatedRoutes.has(route) || worksheetUpdatedRoutes.has(route) || galleryUpdatedRoutes.has(route) ? '2026-10-22' : todayRoutes.has(route) ? '2026-10-20' : '2026-10-19';
    assert.ok(entry[1].includes(`<lastmod>${expectedDate}</lastmod>`), `${pathname}: only a substantive update changes the recorded date`);
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
