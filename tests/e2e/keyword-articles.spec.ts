import { expect, test } from '@playwright/test';
import review from '../fixtures/keyword-articles-reviewed-20261024.json';

// Export checks cover all 42 full copies. These two distinct articles exercise
// both graph sizes, H3 FAQs, qualified price bars and wide table scrolling in
// the existing desktop Chromium and Pixel 5 browser projects.
const topics = review.articles.filter(article => ['K09', 'K10'].includes(article.id));
for (const locale of ['en', 'ar'] as const) for (const topic of topics) {
  test(`${locale} keyword article ${topic.id} keeps tables, diagrams, TOC and language switching usable`, async ({ page }) => {
    const route = `/${locale}/blog/${topic.slug}/`;
    await page.goto(route);
    await page.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات' : 'Reject analytics', exact: true }).click();
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeVisible();
    await offer.getByRole('button').click();
    await expect(offer).toBeHidden();
    await expect(page.locator('html')).toHaveAttribute('lang', locale);
    await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
    await expect(page.locator('h1')).toHaveCount(1);
    const targetLocale = locale === 'en' ? 'ar' : 'en';
    const hero = page.locator('main section').filter({ has: page.locator('h1') }).first();
    await expect(hero.locator(`a[href="/${targetLocale}/blog/${topic.slug}/"]`)).toHaveText(locale === 'en' ? 'Read this article in Arabic' : 'اقرأ هذا المقال بالإنجليزية');
    expect(await hero.innerText()).not.toMatch(locale === 'en' ? /[\u0600-\u06ff]/ : /[A-Za-z]/);
    const article = page.locator(`[data-keyword-article="${topic.id}"]`);
    await expect(article.locator('table')).toHaveCount(2);
    await expect(article.locator('figure[data-keyword-visual="flow"]')).toHaveCount(1);
    await expect(article.locator('figure[data-keyword-visual="graph"]')).toHaveCount(1);
    await expect(article.locator('figure[data-keyword-visual="bars"]')).toHaveCount(topic.id === 'K10' ? 1 : 0);
    await expect(article.locator('figure[data-keyword-visual="flow"] li')).toHaveCount(6);
    for (const figure of await article.locator('figure[data-keyword-visual]').all()) {
      await figure.scrollIntoViewIfNeeded();
      await expect(figure.locator('figcaption')).not.toBeEmpty();
      const bounds = await figure.boundingBox();
      expect(bounds?.width).toBeLessThanOrEqual(page.viewportSize()!.width);
      const titleId = await figure.getAttribute('aria-labelledby');
      const captionId = await figure.getAttribute('aria-describedby');
      await expect(figure.locator(`[id="${titleId}"]`)).toBeVisible();
      await expect(figure.locator(`[id="${captionId}"]`)).toBeVisible();
    }
    const tables = article.locator('[role="region"]').filter({ has: page.locator('table') });
    await expect(tables).toHaveCount(2);
    for (const region of await tables.all()) {
      await region.scrollIntoViewIfNeeded();
      await region.focus();
      await expect(region).toBeFocused();
      expect((await region.boundingBox())?.width).toBeLessThanOrEqual(page.viewportSize()!.width);
      await expect(region.locator('th[scope="col"]').first()).toBeVisible();
    }
    const graph = article.locator('figure[data-keyword-visual="graph"]');
    await expect(graph.locator('svg, details, [data-keyword-graph-legend]')).toHaveCount(0);
    const rows = graph.locator('ol[data-keyword-relationship-rows="true"]');
    await expect(rows).toBeVisible();
    await expect(rows.locator('[data-keyword-relationship="true"]')).toHaveCount(topic.id === 'K09' ? 7 : 6);
    for (const relationship of await rows.locator('[data-keyword-relationship="true"]').all()) {
      await relationship.scrollIntoViewIfNeeded();
      await expect(relationship).toBeVisible();
      for (const field of ['from', 'label', 'to']) {
        const textField = relationship.locator(`[data-relationship-${field}="true"]`);
        await expect(textField).toBeVisible();
        await expect(textField).not.toBeEmpty();
        expect(await textField.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
      }
      expect((await relationship.boundingBox())?.width).toBeLessThanOrEqual(page.viewportSize()!.width);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);

    const mobileContents = page.locator('main details').filter({ has: page.locator('summary', { hasText: locale === 'ar' ? 'في هذا المقال' : 'In this article' }) }).first();
    const desktopContents = page.getByRole('navigation', { name: locale === 'ar' ? 'محتويات المقال' : 'Article contents', exact: true });
    const contents = await desktopContents.isVisible() ? desktopContents : mobileContents;
    if (contents === mobileContents) await mobileContents.locator('summary').click();
    const firstLink = contents.locator('a[href^="#"]').first();
    const href = await firstLink.getAttribute('href');
    expect(href).toMatch(/^#keyword-section-/);
    await firstLink.click();
    await expect(page.locator(href!)).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);

    const target = locale === 'en' ? 'ar' : 'en';
    await page.locator(`header a[href="/${target}/blog/${topic.slug}/"]`).click();
    await expect(page).toHaveURL(new RegExp(`/${target}/blog/${topic.slug}/$`));
    await expect(page.locator('html')).toHaveAttribute('lang', target);
    await expect(page.locator(`[data-keyword-article="${topic.id}"] table`)).toHaveCount(2);
    await expect(page.locator(`[data-keyword-article="${topic.id}"] figure[data-keyword-visual="graph"]`)).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  });
}
