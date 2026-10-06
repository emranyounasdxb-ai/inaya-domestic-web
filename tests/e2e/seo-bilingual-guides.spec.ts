import { expect, test } from '@playwright/test';

const slugs = [
  'uae-domestic-worker-hiring-process',
  'domestic-worker-package-pricing-factors',
  'documents-for-domestic-worker-enquiry',
  'live-in-live-out-part-time-maid-uae',
  'monthly-maid-package-inclusions-checklist',
  'maid-nanny-babysitter-differences',
  'domestic-worker-visa-sponsorship-support'
];
const relatedGuide: Record<string, string> = {
  'uae-domestic-worker-hiring-process': 'domestic-worker-package-pricing-factors',
  'domestic-worker-package-pricing-factors': 'documents-for-domestic-worker-enquiry',
  'documents-for-domestic-worker-enquiry': 'uae-domestic-worker-hiring-process',
  'live-in-live-out-part-time-maid-uae': 'monthly-maid-package-inclusions-checklist',
  'monthly-maid-package-inclusions-checklist': 'live-in-live-out-part-time-maid-uae',
  'maid-nanny-babysitter-differences': 'uae-domestic-worker-hiring-process',
  'domestic-worker-visa-sponsorship-support': 'documents-for-domestic-worker-enquiry'
};

for (const locale of ['en', 'ar']) {
  test(`${locale} blog hub opens substantive localized guides`, async ({ page }) => {
    await page.goto(`/${locale}/blog/`);
    await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
    await expect(page.locator('main h1')).toHaveCount(1);
    for (const slug of slugs) {
      const route = `/${locale}/blog/${slug}/`;
      await expect(page.locator(`main a[href="${route}"]`)).toHaveCount(1);
    }
    await expect(page.locator(`header a[href="/${locale}/blog/"][aria-current="page"]`).first()).toBeAttached();
  });
  for (const slug of slugs) {
    test(`${locale} ${slug} keeps accessible guide content and matching attribution`, async ({ page }) => {
      const route = `/${locale}/blog/${slug}/`;
      await page.goto(route);
      await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      await expect(page.locator('main h1')).toHaveCount(1);
      await expect(page.locator('main article h2')).toHaveCount(4);
      await expect(page.locator(`main aside a[href="/${locale}/blog/${relatedGuide[slug]}/"]`)).toHaveCount(1);
      await expect(page.locator('main a[href^="https://www.mohre.gov.ae/"], main a[href^="https://icp.gov.ae/"], main a[href^="https://www.gdrfad.gov.ae/"]')).toHaveCount(slug === 'domestic-worker-visa-sponsorship-support' ? 4 : 3);
      await expect(page.locator('[data-seo="breadcrumbs"] a[href$="/blog/"]')).toHaveCount(1);
      const graph = JSON.parse(await page.locator('script[data-seo="route"]').textContent() as string)['@graph'];
      const article = graph.find((node: { '@type': string }) => node['@type'] === 'Article');
      expect(article?.inLanguage).toBe(locale);
      expect(article?.url).toBe(`https://inayadomestic.ae${route}`);
      expect(article?.author).toEqual({ '@type': 'Organization', name: 'INAYA Domestic Workers Editorial Team' });
      await expect(page.locator('[data-guide="attribution"]')).toContainText(article.author.name);
      await expect(page.locator('[data-guide="attribution"] time').nth(0)).toHaveAttribute('datetime', article.datePublished);
      await expect(page.locator('[data-guide="attribution"] time').nth(1)).toHaveAttribute('datetime', article.dateModified);
      await expect(page.locator(`header a[href="/${locale}/blog/"][aria-current="page"]`).first()).toBeAttached();
      await expect(page.locator(`header a[href="/${locale === 'en' ? 'ar' : 'en'}/blog/${slug}/"]`)).toBeAttached();
      await expect(page.locator('main aside a[href="tel:+97167400128"]')).toBeVisible();
      await expect(page.locator('main aside a[href="https://wa.me/971502036767"]')).toBeVisible();
      if (slugs.indexOf(slug) >= 3 || slug === 'domestic-worker-package-pricing-factors') {
        await expect(page.locator('main article table caption')).toBeVisible();
        await expect(page.locator('main article table th[scope="col"]').first()).toBeVisible();
        const tableRegion = page.locator('main article [role="region"]');
        await tableRegion.focus();
        await expect(tableRegion).toBeFocused();
        await expect(tableRegion).toHaveAttribute('aria-label', await page.locator('main article table caption').innerText());
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
      const menu = page.getByRole('button', { name: locale === 'ar' ? 'القائمة' : 'Menu', exact: true });
      if (await menu.isVisible()) {
        await menu.click();
        await expect(page.locator(`header a[href="/${locale}/blog/"][aria-current="page"]`).last()).toBeVisible();
        await menu.click();
      }
    });
  }
}
