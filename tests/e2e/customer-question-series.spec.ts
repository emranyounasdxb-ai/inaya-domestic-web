import { expect, test } from '@playwright/test';
import brief from '../../content/research/2026-10-20/editorial-brief.json';
import { customerArticleFaqs } from '../../lib/customer-article-faqs';

// Static export checks cover all forty versions. These representative pages
// exercise bar charts, process diagrams, long tables and existing-URL updates
// in both of the configured desktop/mobile browser projects.
const topics = brief.topics.filter(topic => ['01', '08', '11', '16', '20'].includes(topic.id));
for (const locale of ['en', 'ar'] as const) {
  for (const topic of topics) {
    test(`${locale} customer article ${topic.id} keeps chart, Q&A and translation usable`, async ({ page }) => {
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
      const article = page.locator('[data-published-article="content"]');
      const figure = article.locator('figure[data-article-visual]');
      await expect(figure).toHaveCount(1);
      await expect(figure.locator('figcaption')).not.toBeEmpty();
      await figure.scrollIntoViewIfNeeded();
      const bounds = await figure.boundingBox();
      expect(bounds?.width).toBeLessThanOrEqual(page.viewportSize()!.width);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
      const table = article.locator('[role="region"]').first();
      await table.focus();
      await expect(table).toBeFocused();
      const faq = customerArticleFaqs[topic.slug][locale];
      expect(faq).toHaveLength(4);
      for (const pair of faq) {
        await expect(article).toContainText(pair.question);
        await expect(article).toContainText(pair.answer);
      }
      const target = locale === 'en' ? 'ar' : 'en';
      await page.locator(`header a[href="/${target}/blog/${topic.slug}/"]`).click();
      await expect(page).toHaveURL(new RegExp(`/${target}/blog/${topic.slug}/$`));
      await expect(page.locator('html')).toHaveAttribute('lang', target);
      await expect(page.locator('[data-published-article="content"] figure[data-article-visual]')).toHaveCount(1);
    });
  }
}
