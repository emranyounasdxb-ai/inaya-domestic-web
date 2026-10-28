import { expect, test } from '@playwright/test';
import { publishedArticles } from '../../lib/published-article-content';
import blogOrder from '../fixtures/blog-guide-order-20261028.json';

const worksheetGuides = new Set([
  'domestic-worker-hiring-costs-uae',
  'domestic-worker-skills-language-assessment',
  'agreeing-domestic-worker-household-duties',
  'domestic-worker-interview-trial-probation',
  'new-maid-first-week-checklist',
  'maid-daily-instructions-handover-template',
]);

for (const locale of ['en', 'ar'] as const) {
  for (const article of publishedArticles) {
    test(`${locale} published ${article.slug} preserves responsive reading and translation`, async ({ page }) => {
      const route = `/${locale}/blog/${article.slug}/`;
      await page.goto(route);
      await page.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات' : 'Reject analytics', exact: true }).click();
      await expect(page.getByRole('region', { name: locale === 'ar' ? 'تفضيلات ملفات تعريف الارتباط' : 'Your cookie preferences' })).toBeHidden();
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      const offer = page.getByTestId('sierra-leone-offer');
      await expect(offer).toHaveCount(0);
      await expect(offer).toBeHidden();
      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      await expect(page.locator('main h1')).toHaveText(article[locale].title);
      const content = page.locator('[data-published-article="content"]');
      await expect(content).toBeVisible();
      const worksheets = content.locator('section[data-guide-worksheets="true"]');
      await expect(worksheets).toHaveCount(worksheetGuides.has(article.slug) ? 1 : 0);
      // The separately checked download control adds a heading without changing
      // the manuscript. Keep the exact original editorial heading count.
      await expect(content.locator('h2:not(section[data-guide-worksheets="true"] h2)')).toHaveCount((article[locale].body.match(/^## /gm) || []).length);
      await expect(content.locator('li')).toHaveCount((article[locale].body.match(/^- /gm) || []).length);
      await expect(content.locator('table')).toHaveCount((article[locale].body.match(/^\|\s*:?-+/gm) || []).length);
      if (worksheetGuides.has(article.slug)) {
        await expect(worksheets.getByRole('heading', { level: 2 })).toHaveText(locale === 'ar' ? 'أوراق عمل لتخطيط احتياجات أسرتك' : 'Worksheets for your household planning');
        const downloadLink = worksheets.getByRole('link', { name: locale === 'ar' ? 'تحميل أوراق التخطيط (Excel)' : 'Download planning worksheets (Excel)', exact: true });
        await expect(downloadLink).toHaveAttribute('href', '/downloads/inaya-household-planning-worksheets.xlsx');
        await expect(downloadLink).toHaveAttribute('download', '');
        const downloadReady = page.waitForEvent('download');
        await downloadLink.click();
        const download = await downloadReady;
        expect(download.suggestedFilename()).toBe('inaya-household-planning-worksheets.xlsx');
        expect(await download.failure()).toBeNull();
      }
      await page.evaluate(() => document.fonts.ready);
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
      await expect(page.locator(`header a[href="/${locale}/blog/"][aria-current="page"]`).first()).toBeAttached();
      await expect(page.locator('main aside a[href="tel:+97167400128"]')).toBeAttached();
      await expect(page.locator('main aside a[href="https://wa.me/971502036767"]')).toBeAttached();
      const table = content.locator('[role="region"]').first();
      if (await table.count()) {
        await table.focus();
        await expect(table).toBeFocused();
        const id = await table.getAttribute('aria-labelledby');
        await expect(content.locator(`#${id}`)).toHaveCount(1);
        const tableWidth = await table.evaluate((element) => ({ width: element.clientWidth, scroll: element.scrollWidth }));
        expect(tableWidth.width).toBeLessThanOrEqual(page.viewportSize()!.width);
        expect(tableWidth.scroll).toBeGreaterThanOrEqual(tableWidth.width);
      }
      const mobileContents = page.locator('main details').first();
      if (await mobileContents.isVisible()) {
        await mobileContents.locator('summary').click();
        const first = mobileContents.locator('a').first();
        await expect(first).toBeVisible();
        await first.click();
        await expect(page).toHaveURL(new RegExp(`${route}#article-section-1$`));
      }
      const targetLocale = locale === 'ar' ? 'en' : 'ar';
      const translation = page.locator(`header a[href="/${targetLocale}/blog/${article.slug}/"]`);
      await expect(translation).toBeVisible();
      await translation.click();
      await expect(page).toHaveURL(new RegExp(`/${targetLocale}/blog/${article.slug}/$`));
      await expect(page.locator('main h1')).toHaveText(article[targetLocale].title);
    });
  }
  test(`${locale} blog listing includes all 37 published topics and their localized descriptions`, async ({ page }) => {
    // This collection now includes the original20 plus17 later published guides.
    expect(publishedArticles).toHaveLength(37);
    expect(blogOrder.slugs).toHaveLength(65);
    const seen: string[] = [];
    const found = new Map(publishedArticles.map(article => [article.slug, 0]));
    // The independently saved original65-card order pins each archive's exact
    // contents. No production pagination selector supplies these expectations.
    for (let number = 1; number <= 6; number++) {
      const route = number === 1 ? 'blog' : `blog/page/${number}`;
      await page.goto(`/${locale}/${route}/`);
      const expectedSlugs = blogOrder.slugs.slice((number - 1) * 12, number * 12);
      const cards = page.locator('main article[data-blog-guide]');
      await expect(cards).toHaveCount(expectedSlugs.length);
      const slugs = await cards.evaluateAll(elements => elements.map(element => element.getAttribute('data-blog-guide') ?? ''));
      expect(slugs).toEqual(expectedSlugs);
      seen.push(...slugs);
      for (const article of publishedArticles) {
        const card = page.locator(`main a[href="/${locale}/blog/${article.slug}/"]`);
        const expectedOnPage = expectedSlugs.includes(article.slug);
        await expect(card).toHaveCount(expectedOnPage ? 1 : 0);
        if (!expectedOnPage) continue;
        await expect(card).toContainText(article[locale].title);
        await expect(card).toContainText(article[locale].description);
        found.set(article.slug, found.get(article.slug)! + 1);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
    }
    expect(seen).toEqual(blogOrder.slugs);
    expect(new Set(seen).size).toBe(65);
    for (const article of publishedArticles) expect(found.get(article.slug), `${locale}/${article.slug}: exactly one correctly localized archive card`).toBe(1);
  });
}
