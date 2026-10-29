import { expect, test } from '@playwright/test';
import additions from '../four-guides-addition-expectations.cjs';

for (const locale of ['en', 'ar'] as const) for (const slug of additions.newSlugs) {
  test(`${locale}: new ${slug} supports real archive navigation, section links, tables and translation`, async ({ page }) => {
    const approved = additions.reviewed();
    const article = approved.articles.find((entry: { slug: string }) => entry.slug === slug);
    if (!article) throw new Error(`Reviewed article is missing: ${slug}`);
    let documents = 0;
    const failedSegments: string[] = [];
    page.on('request', request => { if (request.isNavigationRequest() && request.frame() === page.mainFrame()) documents++; });
    page.on('response', response => { if (new URL(response.url()).pathname.endsWith('.txt') && !response.ok()) failedSegments.push(response.url()); });
    await page.goto(`/${locale}/blog/`);
    const reject = page.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات' : 'Reject analytics' });
    if (await reject.isVisible()) await reject.click();
    const articleLink = page.locator(`main article[data-blog-guide="${slug}"] a[href="/${locale}/blog/${slug}/"]`);
    await expect(articleLink).toHaveCount(1);
    await articleLink.focus();
    await expect(articleLink).toBeFocused();
    await articleLink.press('Enter');
    await expect(page).toHaveURL(new RegExp(`/${locale}/blog/${slug}/$`));
    await expect(page.locator('main h1')).toHaveText(article[locale].title);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://inayadomestic.ae/${locale}/blog/${slug}/`);
    expect(documents, 'new static article navigation retains the document').toBe(1);
    expect(failedSegments, 'new articles receive real exported navigation segments').toEqual([]);
    const hero = page.locator('main img[fetchpriority="high"]').first();
    await expect(hero).toBeVisible();
    await expect.poll(() => hero.evaluate(image => (image as HTMLImageElement).naturalWidth), {
      message: 'the actual article cover image decodes in the release browser',
    }).toBeGreaterThan(0);
    await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
    const firstHeading = page.locator('main article h2').first();
    const headingId = await firstHeading.getAttribute('id');
    expect(headingId).toBe('article-section-1');
    const mobileContents = page.locator('main details summary').first();
    if (await mobileContents.isVisible()) await mobileContents.click();
    const sectionLink = page.locator(`main a[href="#${headingId}"]:visible`).first();
    await sectionLink.click();
    await expect(page).toHaveURL(new RegExp(`#${headingId}$`));
    await expect(firstHeading).toBeInViewport();
    const tables = page.locator('main article table');
    expect(await tables.count()).toBeGreaterThan(0);
    const regions = page.locator('main article [role="region"]');
    await expect(regions).toHaveCount(await tables.count());
    for (let index = 0; index < await regions.count(); index++) {
      const region = regions.nth(index);
      await region.focus();
      await expect(region).toBeFocused();
      const label = await region.getAttribute('aria-labelledby');
      expect(label).toBeTruthy();
      await expect(page.locator(`main article #${label}`)).toHaveCount(1);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const targetLocale = locale === 'en' ? 'ar' : 'en';
    await page.locator(`header a[href="/${targetLocale}/blog/${slug}/"]`).click();
    await expect(page).toHaveURL(new RegExp(`/${targetLocale}/blog/${slug}/$`));
    await expect(page.locator('main h1')).toHaveText(article[targetLocale].title);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://inayadomestic.ae/${targetLocale}/blog/${slug}/`);
    expect(failedSegments).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
