import { expect, test } from '@playwright/test';

const routes = [
  '',
  '/services',
  '/contact',
  '/booking',
  '/faq',
  '/services/full-time-maid'
];

test('key English and Arabic routes preserve direction and viewport fit', async ({ page }) => {
  const optimizedRequests: string[] = [];

  page.on('request', (request) => {
    if (new URL(request.url()).pathname.startsWith('/optimized/')) {
      optimizedRequests.push(request.url());
    }
  });

  for (const locale of ['en', 'ar'] as const) {
    for (const route of routes) {
      const response = await page.goto(`/${locale}${route}`);
      expect(response?.status(), `/${locale}${route}`).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth),
        `horizontal overflow on /${locale}${route}`
      ).toBeTruthy();
    }
  }

  expect(optimizedRequests, 'deployment-only optimized images requested during local development').toEqual([]);
});
