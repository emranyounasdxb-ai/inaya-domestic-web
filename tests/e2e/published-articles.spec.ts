import { expect, test } from '@playwright/test';
import { publishedArticles } from '../../lib/published-article-content';

for (const locale of ['en', 'ar'] as const) {
  for (const article of publishedArticles) {
    test(`${locale} published ${article.slug} preserves responsive reading and translation`, async ({ page }) => {
      const route = `/${locale}/blog/${article.slug}/`;
      await page.goto(route);
      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      await expect(page.locator('main h1')).toHaveText(article[locale].title);
      const content = page.locator('[data-published-article="content"]');
      await expect(content).toBeVisible();
      await expect(content.locator('h2')).toHaveCount((article[locale].body.match(/^## /gm) || []).length);
      await expect(content.locator('li')).toHaveCount((article[locale].body.match(/^- /gm) || []).length);
      await expect(content.locator('table')).toHaveCount((article[locale].body.match(/^\|\s*:?-+/gm) || []).length);
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
  test(`${locale} blog listing includes all twenty new topics and their localized descriptions`, async ({ page }) => {
    await page.goto(`/${locale}/blog/`);
    for (const article of publishedArticles) {
      const card = page.locator(`main a[href="/${locale}/blog/${article.slug}/"]`);
      await expect(card).toHaveCount(1);
      await expect(card).toContainText(article[locale].title);
      await expect(card).toContainText(article[locale].description);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
  });
}
