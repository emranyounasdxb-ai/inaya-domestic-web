import { expect, test } from '@playwright/test';

const pages = [
  '/en/documents-required',
  '/en/inaya-advantages',
  '/en/reviews',
  '/en/privacy-policy',
  '/en/terms',
  '/en/refund-policy',
  '/en/service-guidelines',
  '/en/support-process',
  '/ar/documents-required',
  '/ar/inaya-advantages',
  '/ar/reviews',
  '/ar/privacy-policy',
  '/ar/terms',
  '/ar/refund-policy',
  '/ar/service-guidelines',
  '/ar/support-process'
];

test.describe('trust and support pages', () => {
  for (const url of pages) {
    test(`${url} renders`, async ({ page }) => {
      const response = await page.goto(url);
      expect(response?.status()).toBeLessThan(400);
      await expect(page.locator('h1')).toBeVisible();
    });
  }
});
