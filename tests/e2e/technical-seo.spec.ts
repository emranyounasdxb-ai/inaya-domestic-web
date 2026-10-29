import { expect, test } from '@playwright/test';
import updatedPaths from '../fixtures/poster-pricing-updated-routes.json';
import articleManifest from '../../content/research/2026-10-20/article-manifest.json';
import domesticRefresh from '../../content/research/2026-10-24/article-refreshes.json';
import ajmanRefresh from '../../content/research/2026-10-24/ajman-intent-refreshes.json';
import keywordReview from '../fixtures/keyword-articles-reviewed-20261024.json';
import onPageSpec from '../on-page-spec-expectations.cjs';
import amendment from '../five-guides-amendment-expectations.cjs';

test('sitemap includes service, country and location SEO pages', async ({ request }) => {
  const response = await request.get('/sitemap.xml');
  expect(response.ok()).toBeTruthy();

  const xml = await response.text();

  expect(xml).toContain('/en/services/live-in-maid');
  expect(xml).toContain('/ar/services/live-in-maid');
  expect(xml).toContain('/en/maid-source-countries/philippines-maid-uae');
  expect(xml).toContain('/ar/maid-source-countries/philippines-maid-uae');
  expect(xml).toContain('/en/maid-services-dubai');
  expect(xml).toContain('/ar/maid-services-dubai');
  expect(xml).toContain('/en/service-areas');
  expect(xml).toContain('/ar/service-areas');
  expect(xml).toContain('xhtml:link');
});

test('robots.txt exposes the production sitemap and allows public routes', async ({ request }) => {
  const response = await request.get('/robots.txt');
  expect(response.ok()).toBeTruthy();

  const robots = await response.text();

  expect(robots).toContain('User-Agent: *');
  expect(robots).toContain('Allow: /');
  expect(robots).not.toContain('Disallow:');
  expect(robots).toContain('Sitemap: https://inayadomestic.ae/sitemap.xml');
});

test('every sitemap route has one self-canonical and reciprocal locale alternates', async ({ request }) => {
  test.setTimeout(240_000);
  const xml = await (await request.get('/sitemap.xml')).text();
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  expect(articleManifest).toHaveLength(20);
  const todayPaths = new Set(['blog', ...articleManifest.map((article) => `blog/${article.slug}`)]);
  const officeUpdatedPaths = new Set(['about', 'contact', 'maid-services-ajman', 'maid-services-dubai', 'maid-services-sharjah']);
  const paymentUpdatedPaths = new Set(['pricing']);
  const galleryUpdatedPaths = new Set(['gallery']);
  const galleryRetirementPaths = new Set(['gallery', 'about', 'maid-services-ajman']);
  const countryPhotoPaths = new Set(['services/countries-we-source-from', ...[
    'philippines', 'sri-lankan', 'nepali', 'indian', 'bangladeshi', 'ethiopian',
    'kenyan', 'ugandan', 'ghanaian', 'sierra-leone', 'indonesian', 'myanmar',
  ].map(country => `maid-source-countries/${country}-maid-uae`)]);
  const domesticRefreshPaths = new Set(domesticRefresh.routeChanges.map((entry) => entry.path));
  expect(domesticRefreshPaths.size).toBe(9);
  const ajmanRefreshPaths = new Set(ajmanRefresh.routeChanges.map((entry) => entry.path));
  expect(ajmanRefreshPaths.size).toBe(4);
  const onPageUpdatedPaths = new Set(onPageSpec.onPageUpdatedRoutes);
  const archivePaths = new Set(onPageSpec.archiveRoutes);
  const october28Paths = new Set([...countryPhotoPaths, ...onPageUpdatedPaths, ...archivePaths]);
  const worksheetUpdatedPaths = new Set([
    'blog/domestic-worker-hiring-costs-uae',
    'blog/domestic-worker-skills-language-assessment',
    'blog/agreeing-domestic-worker-household-duties',
    'blog/domestic-worker-interview-trial-probation',
    'blog/new-maid-first-week-checklist',
    'blog/maid-daily-instructions-handover-template',
  ]);
  const companyInformationPaths = new Set(['company-information']);
  expect(keywordReview.articles).toHaveLength(21);
  const keywordPaths = new Set(keywordReview.articles.map(article => `blog/${article.slug}`));
  const keywordUrls = ['en', 'ar'].flatMap(locale => [...keywordPaths].map(path => `https://inayadomestic.ae/${locale}/${path}/`));
  const step1Paths = new Set(amendment.targetSlugs.map(slug => `blog/${slug}`));
  const datedPaths = new Set([...step1Paths, ...onPageUpdatedPaths, ...archivePaths, ...countryPhotoPaths, ...keywordPaths, ...companyInformationPaths, ...updatedPaths, ...todayPaths, ...officeUpdatedPaths, ...worksheetUpdatedPaths, ...galleryUpdatedPaths, ...paymentUpdatedPaths, ...domesticRefreshPaths, ...ajmanRefreshPaths]);
  const expectedDatedUrls = ['en', 'ar'].flatMap((locale) =>
    [...datedPaths].map((path) => `https://inayadomestic.ae/${locale}/${path ? `${path}/` : ''}`)
  );
  const datedEntries = entries.filter((entry) => entry[1].includes('<lastmod>'));
  expect(datedEntries).toHaveLength(248);
  expect(datedEntries.map((entry) => entry[1].match(/<loc>(.*?)<\/loc>/)![1]).sort())
    .toEqual(expectedDatedUrls.sort());
  expect(datedEntries.filter((entry) => entry[1].includes('<lastmod>2026-10-20</lastmod>'))).toHaveLength(30);
  expect(datedEntries.filter((entry) => entry[1].includes('<lastmod>2026-10-22</lastmod>'))).toHaveLength(16);
  expect(datedEntries.filter((entry) => entry[1].includes('<lastmod>2026-10-23</lastmod>'))).toHaveLength(2);
  expect(datedEntries.filter((entry) => entry[1].includes('<lastmod>2026-10-24</lastmod>'))
    .map((entry) => entry[1].match(/<loc>(.*?)<\/loc>/)![1]).sort())
    .toEqual([...new Set([...domesticRefresh.routeChanges, ...ajmanRefresh.routeChanges].flatMap((entry) => entry.urls)), ...['en', 'ar'].map((locale) => `https://inayadomestic.ae/${locale}/company-information/`), ...keywordUrls].filter(url => !new Set([...galleryRetirementPaths, ...onPageUpdatedPaths, ...step1Paths]).has(new URL(url).pathname.split('/').slice(2).filter(Boolean).join('/'))).sort());
  expect(datedEntries.filter(entry => entry[1].includes('<lastmod>2026-10-25</lastmod>')).map(entry => entry[1].match(/<loc>(.*?)<\/loc>/)![1]).sort()).toEqual(['en', 'ar'].flatMap(locale => [...galleryRetirementPaths].filter(path => !onPageUpdatedPaths.has(path)).map(path => `https://inayadomestic.ae/${locale}/${path}/`)).sort());
  expect(datedEntries.filter(entry => entry[1].includes('<lastmod>2026-10-28</lastmod>')).map(entry => entry[1].match(/<loc>(.*?)<\/loc>/)![1]).sort()).toEqual(['en', 'ar'].flatMap(locale => [...october28Paths].map(path => `https://inayadomestic.ae/${locale}/${path ? `${path}/` : ''}`)).sort());
  expect(datedEntries.filter(entry => entry[1].includes('<lastmod>2026-10-29</lastmod>')).map(entry => entry[1].match(/<loc>(.*?)<\/loc>/)![1]).sort()).toEqual(['en', 'ar'].flatMap(locale => [...step1Paths].map(path => `https://inayadomestic.ae/${locale}/${path}/`)).sort());
  for (const entry of datedEntries) {
    const pathname = new URL(entry[1].match(/<loc>(.*?)<\/loc>/)![1]).pathname;
    const path = pathname.split('/').slice(2).filter(Boolean).join('/');
    const expectedDate = step1Paths.has(path) ? '2026-10-29' : october28Paths.has(path) ? '2026-10-28' : galleryRetirementPaths.has(path) ? '2026-10-25' : keywordPaths.has(path) || companyInformationPaths.has(path) ? '2026-10-24' : ajmanRefreshPaths.has(path) ? ajmanRefresh.date : domesticRefreshPaths.has(path) ? domesticRefresh.date : paymentUpdatedPaths.has(path) ? '2026-10-23' : officeUpdatedPaths.has(path) || worksheetUpdatedPaths.has(path) || galleryUpdatedPaths.has(path) ? '2026-10-22' : todayPaths.has(path) ? '2026-10-20' : '2026-10-19';
    expect(entry[1].match(/<lastmod>(.*?)<\/lastmod>/g), pathname).toEqual([`<lastmod>${expectedDate}</lastmod>`]);
  }
  const urls = entries.map((entry) => entry[1].match(/<loc>(.*?)<\/loc>/)![1]);
  expect(urls).toHaveLength(284);
  expect(urls.slice(0, 232)).toEqual(keywordReview.previousCanonicalUrls);
  expect(urls.slice(232, onPageSpec.originalCanonicalCount)).toEqual(keywordReview.articles.flatMap(article => ['en', 'ar'].map(locale => `https://inayadomestic.ae/${locale}/blog/${article.slug}/`)));
  expect(urls.slice(onPageSpec.originalCanonicalCount)).toEqual(onPageSpec.archiveRoutes.flatMap(route => ['en', 'ar'].map(locale => `https://inayadomestic.ae/${locale}/${route}/`)));
  expect(new Set(urls).size).toBe(urls.length);
  for (const locale of ['en', 'ar']) {
    for (const path of ['', 'booking/', 'careers/', 'pricing/', 'blog/', 'faq/']) {
      expect(urls).toContain(`https://inayadomestic.ae/${locale}/${path}`);
    }
  }

  for (const [index, url] of urls.entries()) {
    const parsed = new URL(url);
    expect(parsed.origin).toBe('https://inayadomestic.ae');
    expect(parsed.pathname).toMatch(/^\/(en|ar)\/(.*\/)?$/);
    const response = await request.get(parsed.pathname, { maxRedirects: 0 });
    expect(response.status(), url).toBe(200);
    expect(response.headers()['link'] || '').not.toContain('hreflang');
    const html = await response.text();
    expect(html).not.toMatch(/<meta[^>]+name="robots"[^>]+noindex/);
    const links = [...html.matchAll(/<link\b[^>]*>/g)].map((match) => match[0].replace(/hrefLang/gi, 'hreflang'));
    const canonical = links.filter((link) => link.includes('rel="canonical"'));
    expect(canonical, url).toHaveLength(1);
    expect(canonical[0]).toContain(`href="${url}"`);
    const alternates = links.filter((link) => link.includes('hreflang='));
    expect(alternates, url).toHaveLength(3);
    const path = parsed.pathname.replace(/^\/(en|ar)\//, '');
    for (const language of ['en', 'ar', 'x-default']) {
      const target = `https://inayadomestic.ae/${language === 'ar' ? 'ar' : 'en'}/${path}`;
      expect(urls).toContain(target);
      expect(alternates.filter((link) => link.includes(`hreflang="${language}"`) && link.includes(`href="${target}"`)), url).toHaveLength(1);
      expect(entries[index][1]).toContain(`hreflang="${language}" href="${target}"`);
    }
  }
});
