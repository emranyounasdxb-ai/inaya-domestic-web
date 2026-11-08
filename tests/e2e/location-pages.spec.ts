import { expect, test, type Page } from '../browser-fixture';

async function expectLocationSchema(page: Page, locale: string) {
  const scripts = page.locator('script[type="application/ld+json"]');
  await expect(scripts).toHaveCount(1);
  const data = JSON.parse(await scripts.textContent() as string);
  expect(data['@context']).toBe('https://schema.org');
  const graph = data['@graph'];
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  const byType = (type: string) => graph.filter((node: { '@type': string | string[] }) => [node['@type']].flat().includes(type));
  for (const type of ['Organization', 'LocalBusiness', 'WebSite', 'WebPage', 'Service', 'BreadcrumbList', 'FAQPage']) expect(byType(type)).toHaveLength(1);
  expect(byType('Service')[0].url).toBe(canonical);
  expect(byType('Service')[0].provider['@id']).toBe(byType('Organization')[0]['@id']);
  expect(byType('FAQPage')[0].url).toBe(canonical);
  expect(byType('FAQPage')[0].inLanguage).toBe(locale);
  expect(byType('FAQPage')[0].mainEntity.length).toBeGreaterThan(0);
  const nationalityFees = page.locator('[data-content="nationality-contract-prices"]');
  await expect(nationalityFees).toHaveCount(1);
  await expect(nationalityFees.locator('tbody tr')).toHaveCount(12);
  await expect(nationalityFees).not.toContainText(/MOHRE[- ]approved/i);
}

const englishLocationPages = [
  '/en/maid-services-ajman',
  '/en/maid-services-dubai',
  '/en/maid-services-sharjah',
  '/en/maid-services-abu-dhabi',
  '/en/maid-services-ras-al-khaimah',
  '/en/maid-services-fujairah',
  '/en/maid-services-umm-al-quwain'
];

const arabicLocationPages = [
  '/ar/maid-services-ajman',
  '/ar/maid-services-dubai',
  '/ar/maid-services-sharjah',
  '/ar/maid-services-abu-dhabi',
  '/ar/maid-services-ras-al-khaimah',
  '/ar/maid-services-fujairah',
  '/ar/maid-services-umm-al-quwain'
];

test.describe('location service pages', () => {
  for (const url of englishLocationPages) {
    test(`${url} renders with SEO content and links`, async ({ page }) => {
      const response = await page.goto(url);
      expect(response?.status()).toBeLessThan(400);

      const reviewedHeadings: Record<string, string> = {
        '/en/maid-services-ajman': 'Ajman Maid Agency for Trusted Home Support',
        '/en/maid-services-sharjah': 'Housemaid in Sharjah for Your Family’s Routine'
      };
      if (reviewedHeadings[url]) await expect(page.locator('h1')).toHaveText(reviewedHeadings[url]);
      else await expect(page.locator('h1')).toContainText(/Maid Services/i);
      await expect(page.getByText('Available service options')).toBeVisible();
      await expect(page.getByText('Frequently asked questions')).toBeVisible();
      await expect(page.getByRole('link', { name: /Request Consultation/i })).toBeVisible();
      await expectLocationSchema(page, 'en');
    });
  }

  for (const url of arabicLocationPages) {
    test(`${url} renders Arabic content`, async ({ page }) => {
      const response = await page.goto(url);
      expect(response?.status()).toBeLessThan(400);

      await expect(page.locator('h1')).toContainText(/خدمات خادمات/i);
      await expect(page.getByText('الخدمات المتوفرة')).toBeVisible();
      await expect(page.getByText('أسئلة شائعة')).toBeVisible();
      await expectLocationSchema(page, 'ar');
    });
  }
});

test('service areas page links to emirate SEO pages', async ({ page }) => {
  const response = await page.goto('/en/service-areas');
  expect(response?.status()).toBeLessThan(400);

  await expect(page.getByRole('link', { name: /Maid Services in Dubai/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Maid Services in Ajman/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Maid Services in Sharjah/i })).toBeVisible();
});

for (const locale of ['en', 'ar'] as const) {
  for (const width of [320, 390, 768, 1440]) {
    test(`${locale} Ajman separates visits, monthly service and one-time recruitment at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`/${locale}/maid-services-ajman/`);

      const main = page.locator('main');
      await expect(main).toHaveCount(1);
      const options = main.locator('[data-content="ajman-quick-packages"]');
      await expect(options.locator('article')).toHaveCount(3);
      for (const heading of locale === 'ar'
        ? ['زيارات قصيرة', 'خدمة شهرية مُدارة', 'استقدام بعقد لمرة واحدة']
        : ['Short visits', 'Managed monthly service', 'One-time recruitment']) {
        await expect(options.getByRole('heading', { name: heading, exact: true })).toBeVisible();
      }

      const fees = main.locator('[data-content="nationality-contract-prices"]');
      const rows = fees.locator('tbody tr');
      await expect(rows).toHaveCount(12);
      for (const range of ['AED 15,000–22,000', 'AED 10,000–14,000', 'AED 8,500–14,000', 'AED 12,000–17,000', 'AED 11,000–15,000']) {
        await expect(fees).toContainText(range);
      }
      await expect(fees).not.toContainText(/MOHRE[- ]approved/i);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width + 1);
    });
  }
}
