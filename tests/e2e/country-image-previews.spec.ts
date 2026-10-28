import { expect, test } from '@playwright/test';

const origin = 'https://inayadomestic.ae';
const cases = [
  ['maid-source-countries/nepali-maid-uae', '/images/countries/maid-nepal.webp'],
  ['maid-source-countries/ugandan-maid-uae', '/images/countries/maid-kenya-uganda.webp'],
  ['services/countries-we-source-from', '/images/about/about-hero-domestic-service.webp'],
] as const;

for (const locale of ['en', 'ar']) {
  for (const [route, imagePath] of cases) {
    test(`${locale}/${route} exposes a loaded page photo matching search image signals`, async ({ page }) => {
      await page.goto(`/${locale}/${route}/`, { waitUntil: 'domcontentloaded' });
      const figure = page.locator('main figure');
      await expect(figure).toHaveCount(1);
      await figure.scrollIntoViewIfNeeded();
      const image = figure.locator('img');
      await expect(image).toHaveCount(1);
      await expect.poll(() => image.evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
      expect(new URL((await image.getAttribute('src'))!, origin).pathname).toBe(imagePath);
      await expect(image).toHaveAttribute('alt', locale === 'ar' ? /[\u0600-\u06ff]/ : /[A-Za-z]/);
      await expect(figure.locator('figcaption')).toContainText(locale === 'ar' ? 'صورة توضيحية' : 'Illustrative image');
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', origin + imagePath);
      await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute('content', origin + imagePath);

      const graph = JSON.parse((await page.locator('script[data-seo="route"]').textContent())!)['@graph'];
      const webPage = graph.find((node: Record<string, unknown>) => node['@type'] === 'WebPage');
      const primaryImage = graph.find((node: Record<string, unknown>) => node['@id'] === webPage.primaryImageOfPage['@id']);
      expect(primaryImage.contentUrl).toBe(origin + imagePath);

      const geometry = await figure.evaluate(figure => ({
        afterBreadcrumbs: Boolean(document.querySelector('[data-seo="breadcrumbs"]')!.compareDocumentPosition(figure) & Node.DOCUMENT_POSITION_FOLLOWING),
        withinViewport: figure.getBoundingClientRect().left >= -1 && figure.getBoundingClientRect().right <= innerWidth + 1,
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
      }));
      expect(geometry).toEqual({ afterBreadcrumbs: true, withinViewport: true, overflow: false });
    });
  }
}
