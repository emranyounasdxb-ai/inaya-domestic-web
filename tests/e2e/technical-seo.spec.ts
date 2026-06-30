import { expect, test } from '@playwright/test';

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

test('robots.txt exposes sitemap and blocks API indexing', async ({ request }) => {
  const response = await request.get('/robots.txt');
  expect(response.ok()).toBeTruthy();

  const robots = await response.text();

  expect(robots).toContain('User-Agent: *');
  expect(robots).toContain('Allow: /');
  expect(robots).toContain('Disallow: /api/');
  expect(robots).toContain('Sitemap: https://inayadomestic.ae/sitemap.xml');
});
