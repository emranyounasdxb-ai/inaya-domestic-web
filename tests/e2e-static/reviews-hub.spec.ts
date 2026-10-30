import { expect, test } from '../browser-fixture';
import { CURATED_GOOGLE_REVIEWS, GOOGLE_REVIEWS_VIEW_URL, GOOGLE_REVIEWS_WRITE_URL } from '../../lib/curated-google-reviews';

for (const locale of ['en', 'ar'] as const) {
  for (const width of [320, 390, 768, 1165, 1440]) {
    test(`${locale} reviews are readable and attributed at ${width}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 900 });
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(`/${locale}/reviews/`);
      const reject = page.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات الاختيارية' : 'Reject optional analytics', exact: true });
      await reject.click();
      const hub = page.locator('[data-reviews-hub]');
      await expect(hub).toBeVisible();
      await expect(hub.locator('article')).toHaveCount(CURATED_GOOGLE_REVIEWS.length);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://inayadomestic.ae/${locale}/reviews/`);

      for (const review of CURATED_GOOGLE_REVIEWS) {
        const card = hub.locator(`[data-review-id="${review.id}"]`);
        await expect(card.getByRole('heading', { name: review.name, exact: true })).toBeVisible();
        await expect(card.locator('blockquote').first()).toHaveText(locale === 'ar' ? review.textAr : review.text);
        if (locale === 'ar') {
          await expect(card).toContainText('ترجمة عربية من عناية');
          await card.locator('summary').click();
          await expect(card.locator('blockquote[lang="en"]')).toBeVisible();
          await expect(card.locator('blockquote[lang="en"]')).toHaveText(review.text);
          await card.locator('summary').click();
        }
        const rects = await card.evaluate(el => {
          const card = el.getBoundingClientRect();
          const quote = el.querySelector('blockquote')!.getBoundingClientRect();
          return { cardLeft: card.left, cardRight: card.right, quoteLeft: quote.left, quoteRight: quote.right, fontSize: getComputedStyle(el.querySelector('blockquote')!).fontSize };
        });
        expect(rects.quoteLeft).toBeGreaterThanOrEqual(rects.cardLeft);
        expect(rects.quoteRight).toBeLessThanOrEqual(rects.cardRight);
        expect(parseFloat(rects.fontSize)).toBeGreaterThanOrEqual(16);
      }
      for (const href of [GOOGLE_REVIEWS_VIEW_URL, GOOGLE_REVIEWS_WRITE_URL]) {
        const link = hub.locator('a').filter({ hasText: href === GOOGLE_REVIEWS_VIEW_URL ? (locale === 'ar' ? 'اقرأ التقييمات' : 'Read reviews') : (locale === 'ar' ? 'اكتب تقييماً' : 'Write an honest') });
        await expect(link).toHaveAttribute('href', href);
        await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        await page.keyboard.press('Tab');
        await link.focus();
        await expect(link).toBeFocused();
        await expect(link).toHaveCSS('outline-style', 'solid');
      }
      const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(schemas.join('')).not.toMatch(/AggregateRating|"@type"\s*:\s*"Review"/);
      if (locale === 'en' && width >= 1024) {
        const rail = page.locator('aside').filter({ has: page.locator('a[href="tel:+97167400128"]') });
        const railBox = await rail.boundingBox();
        const hubBox = await hub.boundingBox();
        expect(hubBox!.x).toBeGreaterThanOrEqual(railBox!.x + railBox!.width + 6);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width + 1);
      if (width === 390 || width === 1440) {
        await page.getByRole('heading', { level: 1 }).scrollIntoViewIfNeeded();
        await page.screenshot({ path: testInfo.outputPath(`reviews-hub-${locale}-${width}.png`), fullPage: true });
      }
    });
  }
}

test('review cards stay confined to the reviews route', async ({ page }) => {
  for (const route of ['/en/privacy-policy/', '/ar/documents-required/']) {
    await page.goto(route);
    await expect(page.locator('[data-reviews-hub]')).toHaveCount(0);
    await expect(page.locator('h1')).toBeVisible();
  }
});
