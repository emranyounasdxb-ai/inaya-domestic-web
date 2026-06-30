import { expect, test } from '@playwright/test';

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

      await expect(page.locator('h1')).toContainText(/Maid Services/i);
      await expect(page.getByText('Available service options')).toBeVisible();
      await expect(page.getByText('Frequently asked questions')).toBeVisible();
      await expect(page.getByRole('link', { name: /Request Consultation/i })).toBeVisible();
      await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(2);
    });
  }

  for (const url of arabicLocationPages) {
    test(`${url} renders Arabic content`, async ({ page }) => {
      const response = await page.goto(url);
      expect(response?.status()).toBeLessThan(400);

      await expect(page.locator('h1')).toContainText(/خدمات خادمات/i);
      await expect(page.getByText('الخدمات المتوفرة')).toBeVisible();
      await expect(page.getByText('أسئلة شائعة')).toBeVisible();
      await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(2);
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
