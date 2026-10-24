import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar'] as const) {
  for (const route of ['', 'pricing/', 'booking/', 'blog/'] as const) {
    test(locale + '/' + route + ': expired promotion stays absent after scrolling and reload', async ({ page }) => {
      await page.goto('/' + locale + '/' + route);
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      await expect(page.getByTestId('sierra-leone-offer')).toHaveCount(0);
      await expect(page.getByTestId('sierra-leone-offer-backdrop')).toHaveCount(0);
      await expect(page.getByTestId('sierra-leone-whatsapp')).toHaveCount(0);
      await page.reload();
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      await expect(page.getByTestId('sierra-leone-offer')).toHaveCount(0);
      await expect(page.getByTestId('sierra-leone-offer-backdrop')).toHaveCount(0);
      await expect(page.locator('footer a[href="tel:+97167400128"]').first()).toBeVisible();
      expect(await page.locator('a[href^="https://wa.me/971502036767"]').count()).toBeGreaterThan(0);
    });
  }
  for (const reducedMotion of ['reduce', 'no-preference'] as const) {
    test(locale + ': Back to Top remains accessible (' + reducedMotion + ')', async ({ page }) => {
      await page.emulateMedia({ reducedMotion });
      await page.goto('/' + locale + '/');
      await page.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات' : 'Reject analytics', exact: true }).click();
      const backToTop = page.getByTestId('back-to-top');
      await expect(backToTop).toHaveAttribute('aria-hidden', 'true');
      await expect(backToTop).toHaveAttribute('tabindex', '-1');
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      await expect(backToTop).toBeVisible();
      await expect(backToTop).toHaveAccessibleName(locale === 'ar' ? 'العودة إلى الأعلى' : 'Back to top');
      await expect(backToTop).toHaveAttribute('aria-hidden', 'false');
      await backToTop.click();
      await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(5);
      await expect(backToTop).toHaveAttribute('aria-hidden', 'true');
      await expect(backToTop).toHaveAttribute('tabindex', '-1');
    });
  }
}
