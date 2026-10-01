import { expect, test } from '@playwright/test';

const slugs = [
  'uae-domestic-worker-hiring-process',
  'domestic-worker-package-pricing-factors',
  'documents-for-domestic-worker-enquiry'
];
const relatedGuide: Record<string, string> = {
  'uae-domestic-worker-hiring-process': 'domestic-worker-package-pricing-factors',
  'domestic-worker-package-pricing-factors': 'documents-for-domestic-worker-enquiry',
  'documents-for-domestic-worker-enquiry': 'uae-domestic-worker-hiring-process'
};

for (const locale of ['en', 'ar']) {
  test(`${locale} blog hub opens substantive localized guides`, async ({ page }) => {
    await page.goto(`/${locale}/blog/`);
    await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
    await expect(page.locator('main h1')).toHaveCount(1);
    for (const slug of slugs) {
      const route = `/${locale}/blog/${slug}/`;
      await expect(page.locator(`main a[href="${route}"]`)).toHaveCount(1);
      await page.goto(route);
      await expect(page.locator('main h1')).toHaveCount(1);
      await expect(page.locator('main article h2')).toHaveCount(4);
      await expect(page.locator(`main aside a[href="/${locale}/blog/${relatedGuide[slug]}/"]`)).toHaveCount(1);
      await expect(page.locator('main a[href^="https://u.ae/"], main a[href^="https://www.mohre.gov.ae/"], main a[href^="https://taqyeem.mohre.gov.ae/"]')).toHaveCount(3);
      await expect(page.locator('[data-seo="breadcrumbs"] a[href$="/blog/"]')).toHaveCount(1);
      const graph = JSON.parse(await page.locator('script[data-seo="route"]').textContent() as string)['@graph'];
      const article = graph.find((node: { '@type': string }) => node['@type'] === 'Article');
      expect(article?.inLanguage).toBe(locale);
      expect(article?.url).toBe(`https://inayadomestic.ae${route}`);
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
      await page.goto(`/${locale}/blog/`);
    }
  });
}
