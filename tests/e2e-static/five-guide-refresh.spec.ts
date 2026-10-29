import { expect, test } from '@playwright/test';

// These are the five user-selected existing URLs, not a newly generated cohort.
const guides = [
  { slug: 'tadbeer-center-ajman-first-visit-service-routing', tables: 4, related: 'maid-services-ajman' },
  { slug: 'choosing-domestic-worker-agency-ajman', tables: 7, related: 'blog/maid-agency-ajman-quote-comparison-workbook' },
  { slug: 'documents-for-domestic-worker-enquiry', tables: 3, related: 'blog/housemaid-visa-ajman-application-readiness-ledger' },
  { slug: 'domestic-worker-visa-sponsorship-support', tables: 4, related: 'blog/housemaid-visa-ajman-application-readiness-ledger' },
  { slug: 'domestic-worker-hiring-stages-timelines', tables: 5, related: 'blog/ajman-tadbeer-case-status-follow-up-record' },
];

for (const guide of guides) for (const locale of ['en', 'ar']) {
  test(`${locale}/${guide.slug}: complete planning tables remain usable in the production export`, async ({ page }) => {
    const route = `/${locale}/blog/${guide.slug}/`;
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', locale);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toContainText(locale === 'ar' ? 'عجمان' : 'Ajman');
    await expect(page.locator('article')).toHaveCount(1);
    await expect(page.locator('article table')).toHaveCount(guide.tables);
    const relatedPath = `/${locale}/${guide.related}/`;
    await expect(page.locator(`main a[href="${relatedPath}"]:visible, main a[href="https://inayadomestic.ae${relatedPath}"]:visible`).first()).toBeVisible();

    const tableRegion = page.locator('article [role="region"]').first();
    await tableRegion.scrollIntoViewIfNeeded();
    const contactRail = page.locator('aside.fixed');
    if (await contactRail.isVisible()) {
      const railBox = await contactRail.boundingBox();
      const tableBox = await tableRegion.boundingBox();
      expect(tableBox!.x).toBeGreaterThanOrEqual(railBox!.x + railBox!.width + 1);
    }
    await tableRegion.focus();
    await expect(tableRegion).toBeFocused();
    const dimensions = await tableRegion.evaluate(element => ({
      content: element.scrollWidth, viewport: element.clientWidth,
      overflowingPage: document.documentElement.scrollWidth > window.innerWidth + 2,
    }));
    expect(dimensions.overflowingPage).toBe(false);
    // Horizontal overflow belongs to the keyboard-focusable table region.
    if (dimensions.content > dimensions.viewport + 2) {
      await page.keyboard.press(locale === 'ar' ? 'ArrowLeft' : 'ArrowRight');
      await expect.poll(() => tableRegion.evaluate(element => Math.abs(element.scrollLeft))).toBeGreaterThan(0);
    }
    await expect(tableRegion.locator('table')).toBeVisible();
    expect(await page.locator('link[rel="canonical"]').getAttribute('href')).toBe(`https://inayadomestic.ae${route}`);
    const graph = (await page.locator('script[type="application/ld+json"]').allTextContents())
      .flatMap(value => { const data = JSON.parse(value); return data['@graph'] ?? [data]; });
    const article = graph.find(node => node['@type'] === 'Article');
    expect(article?.dateModified).toBe('2026-10-29');
    expect(article?.image).toContain('https://inayadomestic.ae/images/');
    expect(article?.datePublished).not.toBe('2026-10-29');
  });
}
