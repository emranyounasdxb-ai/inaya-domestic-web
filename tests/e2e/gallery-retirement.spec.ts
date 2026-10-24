import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar']) {
  test(`${locale}: retired gallery stays useful without images or old records and shared pages retain office details`, async ({ page, request }) => {
    const gallery = await page.goto(`/${locale}/gallery/`);
    expect(gallery?.status()).toBe(200);
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('main')).toContainText(locale === 'en' ? 'photo gallery is being updated' : 'يجري تحديث معرض الصور');
    await expect(page.locator('main img, main picture, main figure, [id^="photo-"], [data-company-gallery]')).toHaveCount(0);
    for (const route of ['contact', 'services', 'maid-services-ajman']) {
      await expect(page.locator(`main a[href="/${locale}/${route}/"]`).first()).toBeVisible();
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(overflow).toBe(false);
    for (const route of ['about', 'maid-services-ajman']) {
      const response = await page.goto(`/${locale}/${route}/`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('main').first()).toContainText(locale === 'en' ? 'Grand Mall' : 'جراند مول');
      await expect(page.locator('img[src*="company-gallery"], source[srcset*="company-gallery"]')).toHaveCount(0);
    }
    for (const source of ['/images/company-gallery/inaya-office-003.jpg', '/images/company-gallery/thumbs/inaya-office-003.jpg', '/images/company-gallery/inaya-home-support-079.jpg']) {
      expect((await request.get(source)).status()).toBe(404);
    }
  });
}
