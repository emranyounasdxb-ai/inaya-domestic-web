import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar']) {
  for (const route of ['', 'services/live-in-maid', 'maid-source-countries/philippines-maid-uae', 'maid-services-ajman', 'contact', 'booking', 'careers', 'faq', 'service-areas']) {
    test(`${locale}/${route || 'home'} preserves Hero-first hierarchy and localized post-Hero breadcrumbs`, async ({ page }) => {
      await page.goto(`/${locale}/${route ? `${route}/` : ''}`);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('[data-seo="related-guides"], [data-content="page-purpose"]')).toHaveCount(0);
      await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      const crumbs = page.locator('[data-seo="breadcrumbs"]');
      await expect(crumbs).toHaveCount(route ? 1 : 0);
      const geometry = await page.evaluate(() => {
        const h1 = document.querySelector('h1')!;
        const hero = h1.closest('section')!;
        const nav = document.querySelector('[data-seo="breadcrumbs"]');
        return {
          heroTop: hero.getBoundingClientRect().top,
          navTop: nav?.getBoundingClientRect().top,
          navBottom: nav?.getBoundingClientRect().bottom,
          nextTop: nav?.nextElementSibling?.getBoundingClientRect().top,
          heroBottom: hero.getBoundingClientRect().bottom,
          nextIsBreadcrumb: !nav || hero.nextElementSibling === nav,
          overflow: document.documentElement.scrollWidth > innerWidth + 1
        };
      });
      expect(geometry.overflow).toBe(false);
      expect(geometry.nextIsBreadcrumb).toBe(true);
      if (route) {
        expect(geometry.navTop).toBeGreaterThanOrEqual(geometry.heroBottom - 1);
        expect(geometry.nextTop).toBeGreaterThanOrEqual(geometry.navBottom! - 1);
        await expect(crumbs).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
        await expect(crumbs.locator('[aria-current="page"]')).toHaveCount(1);
        for (const href of await crumbs.locator('a').evaluateAll(links => links.map(link => link.getAttribute('href')))) expect(href).toMatch(new RegExp(`^/${locale}/`));
      }
    });
  }
}
