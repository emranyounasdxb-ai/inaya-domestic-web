import { test, expect } from '@playwright/test';
for (const locale of ['en', 'ar']) {
  test(`${locale} exposes working social icons at desktop and mobile widths`, async ({ page, isMobile }) => {
    await page.goto(`/${locale}`);
    const region = isMobile ? page.locator('nav').filter({ has: page.getByRole('link', { name: locale === 'ar' ? 'فيسبوك' : 'Facebook', exact: true }) }) : page.locator('aside');
    for (const [name, href] of [['Facebook', 'https://www.facebook.com/idwajman'], ['Instagram', 'https://www.instagram.com/idw.ajman/'], ['X', 'https://x.com/idwajman']]) {
      const label = locale === 'ar' && name !== 'Instagram' ? (name === 'Facebook' ? 'فيسبوك' : 'إكس') : name;
      const link = region.getByRole('link', { name: label, exact: true });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', href);
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      await expect(link.locator('svg')).toBeVisible();
      await link.focus();
      await expect(link).toBeFocused();
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
  });
}
