import { expect, test } from '../browser-fixture';
import amendment from '../five-guides-amendment-expectations.cjs';

const slugs = [
  'uae-domestic-worker-hiring-process',
  'domestic-worker-package-pricing-factors',
  'documents-for-domestic-worker-enquiry',
  'live-in-live-out-part-time-maid-uae',
  'monthly-maid-package-inclusions-checklist',
  'maid-nanny-babysitter-differences',
  'domestic-worker-visa-sponsorship-support'
];
// The monthly checklist consolidates three former tier sections into one six-plan section.
const sectionCounts = [7, 9, 5, 6, 10, 5, 5];
const tableCounts = [0, 1, 0, 2, 1, 1, 1];
const relatedGuide: Record<string, string> = {
  'uae-domestic-worker-hiring-process': 'domestic-worker-package-pricing-factors',
  'domestic-worker-package-pricing-factors': 'documents-for-domestic-worker-enquiry',
  'documents-for-domestic-worker-enquiry': 'uae-domestic-worker-hiring-process',
  'live-in-live-out-part-time-maid-uae': 'monthly-maid-package-inclusions-checklist',
  'monthly-maid-package-inclusions-checklist': 'live-in-live-out-part-time-maid-uae',
  'maid-nanny-babysitter-differences': 'uae-domestic-worker-hiring-process',
  'domestic-worker-visa-sponsorship-support': 'documents-for-domestic-worker-enquiry'
};

for (const locale of ['en', 'ar'] as const) {
  test(`${locale} blog hub opens substantive localized guides`, async ({ page }) => {
    await page.goto(`/${locale}/blog/`);
    await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
    await expect(page.locator('main h1')).toHaveCount(1);
    const found = new Map(slugs.map(slug => [slug, 0]));
    // Each archive is linked by ordinary href navigation from the first page;
    // keep complete coverage of the seven original guides across all six pages.
    for (const number of [2, 3, 4, 5, 6]) {
      await expect(page.locator(`main nav a[href="/${locale}/blog/page/${number}/"]`).first()).toBeAttached();
    }
    for (const number of [1, 2, 3, 4, 5, 6]) {
      if (number > 1) await page.goto(`/${locale}/blog/page/${number}/`);
      await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      await expect(page.locator('main h1')).toHaveCount(1);
      for (const slug of slugs) {
        const count = await page.locator(`main article[data-blog-guide="${slug}"] a[href="/${locale}/blog/${slug}/"]`).count();
        found.set(slug, found.get(slug)! + count);
      }
    }
    for (const slug of slugs) expect(found.get(slug), `${locale}/${slug}: one card across the complete archive`).toBe(1);
    await page.goto(`/${locale}/blog/`);
    await expect(page.locator(`header a[href="/${locale}/blog/"][aria-current="page"]`).first()).toBeAttached();
  });
  test(`${locale} commercial pages offer useful localized guide links`, async ({ page }) => {
    for (const [route, guide] of [
      ['services/live-in-maid', 'live-in-live-out-part-time-maid-uae'],
      ['services/maid-visa', 'domestic-worker-visa-sponsorship-support'],
      ['pricing', 'monthly-maid-package-inclusions-checklist'],
      ['faq', 'monthly-maid-package-inclusions-checklist'],
      ['maid-services-dubai', 'uae-domestic-worker-hiring-process']
    ]) {
      await page.goto(`/${locale}/${route}/`);
      if (route === 'services/live-in-maid') {
        await page.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات الاختيارية' : 'Reject optional analytics' }).click();
      }
      await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      const link = page.locator(`main a[href="/${locale}/blog/${guide}/"]`);
      await expect(link).toHaveCount(1);
      await expect(link).toBeVisible();
      await link.focus();
      await expect(link).toBeFocused();
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
      await link.press('Enter');
      await expect(page).toHaveURL(new RegExp(`/${locale}/blog/${guide}/$`));
      await expect(page.locator('main h1')).toHaveCount(1);
    }
  });
  for (const slug of slugs) {
    test(`${locale} ${slug} keeps accessible guide content and matching attribution`, async ({ page }) => {
      const route = `/${locale}/blog/${slug}/`;
      await page.goto(route);
      await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      await expect(page.locator('main h1')).toHaveCount(1);
      const reviewedSections = amendment.getAmendment(slug)?.after.record[locale].sections;
      await expect(page.locator('main article h2')).toHaveCount(reviewedSections?.length ?? sectionCounts[slugs.indexOf(slug)]);
      await expect(page.locator(`main aside a[href="/${locale}/blog/${relatedGuide[slug]}/"]`)).toHaveCount(1);
      const officialCount = amendment.getAmendment(slug)?.after.record.sources?.filter((source: { url: string }) => ['www.mohre.gov.ae', 'mohre.gov.ae', 'icp.gov.ae', 'www.gdrfad.gov.ae'].includes(new URL(source.url).hostname)).length ?? (slug === 'domestic-worker-visa-sponsorship-support' ? 4 : 3);
      await expect(page.locator('main a[href^="https://www.mohre.gov.ae/"], main a[href^="https://mohre.gov.ae/"], main a[href^="https://icp.gov.ae/"], main a[href^="https://www.gdrfad.gov.ae/"]')).toHaveCount(officialCount);
      await expect(page.locator('[data-seo="breadcrumbs"] a[href$="/blog/"]')).toHaveCount(1);
      const graph = JSON.parse(await page.locator('script[data-seo="route"]').textContent() as string)['@graph'];
      const article = graph.find((node: { '@type': string }) => node['@type'] === 'Article');
      expect(article?.inLanguage).toBe(locale);
      expect(article?.url).toBe(`https://inayadomestic.ae${route}`);
      expect(article?.author).toEqual({ '@type': 'Organization', name: locale === 'ar' ? 'فريق تحرير عناية للعمالة المنزلية' : 'INAYA Domestic Workers Editorial Team' });
      await expect(page.locator('[data-guide="attribution"]')).toContainText(article.author.name);
      await expect(page.locator('[data-guide="attribution"] time').nth(0)).toHaveAttribute('datetime', article.datePublished);
      await expect(page.locator('[data-guide="attribution"] time').nth(1)).toHaveAttribute('datetime', article.dateModified);
      await expect(page.locator(`header a[href="/${locale}/blog/"][aria-current="page"]`).first()).toBeAttached();
      await expect(page.locator(`header a[href="/${locale === 'en' ? 'ar' : 'en'}/blog/${slug}/"]`)).toBeAttached();
      await expect(page.locator('main aside a[href="tel:+97167400128"]')).toBeVisible();
      await expect(page.locator('main aside a[href="https://wa.me/971502036767"]')).toBeVisible();
      const tableCount = reviewedSections?.filter((section: { table?: unknown }) => section.table).length ?? tableCounts[slugs.indexOf(slug)];
      if (tableCount > 0) {
        await expect(page.locator('main article table caption')).toHaveCount(tableCount);
        await expect(page.locator('main article table th[scope="col"]').first()).toBeVisible();
        const tableRegions = page.locator('main article [role="region"]');
        await expect(tableRegions).toHaveCount(tableCount);
        for (let index = 0; index < tableCount; index++) {
          const tableRegion = tableRegions.nth(index);
          await tableRegion.focus();
          await expect(tableRegion).toBeFocused();
          await expect(tableRegion).toHaveAttribute('aria-label', await page.locator('main article table caption').nth(index).innerText());
        }
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
