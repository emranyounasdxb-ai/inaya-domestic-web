import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar']) {
  test(`${locale} hub links lead to formerly orphaned guides and information`, async ({ page }) => {
    await page.goto(`/${locale}/how-it-works/`);
    const blog = page.locator('[data-seo="related-guides"] a').filter({ hasText: locale === 'ar' ? 'أدلة الخدمات' : 'Domestic Service Guides' });
    await blog.click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/blog/$`));
    await expect(page.locator('[data-content="practical-guide"]')).toBeVisible();
    await expect(page.locator('[data-content="practical-guide"] a')).toHaveCount(3);
    await page.goto(`/${locale}/about/`);
    await page.locator(`[data-seo="related-guides"] a[href="/${locale}/careers/"]`).click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/careers/$`));
    await expect(page.locator('[data-content="page-purpose"]')).toBeVisible();
  });

  for (const route of ['services/housemaid', 'maid-source-countries/philippines-maid-uae', 'maid-services-dubai']) {
    test(`${locale}/${route} revised visible FAQs match schema and retain localized navigation`, async ({ page }) => {
      await page.goto(`/${locale}/${route}/`);
      await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      await expect(page.locator('h1')).toHaveCount(1);
      const graph = JSON.parse(await page.locator('script[data-seo="route"]').textContent() as string)['@graph'];
      const faq = graph.find((node: Record<string, unknown>) => node['@type'] === 'FAQPage');
      const details = page.locator('details');
      expect(await details.count()).toBe(faq.mainEntity.length);
      // The existing global offer appears after scroll on internal pages too.
      // Dismiss it through its real user control; do not hide/disable it or force clicks.
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      const offer = page.getByTestId('sierra-leone-offer');
      await expect(offer).toBeVisible();
      await offer.getByRole('button').click();
      await expect(offer).toBeHidden();
      for (const [index, item] of faq.mainEntity.entries()) {
        await expect(details.nth(index).locator('summary')).toHaveText(item.name);
        await details.nth(index).locator('summary').click();
        await expect(details.nth(index).locator('p')).toBeVisible();
        await expect(details.nth(index).locator('p')).toHaveText(item.acceptedAnswer.text);
      }
      for (const href of await page.locator('[data-seo="related-guides"] a').evaluateAll((links) => links.map((a) => a.getAttribute('href')))) expect(href).toMatch(new RegExp(`^/${locale}/`));
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
      expect(overflow).toBe(false);
      await page.locator('[data-seo="breadcrumbs"] a').first().click();
      await expect(page).toHaveURL(new RegExp(`/${locale}/$`));
    });
  }

  test(`${locale} practical preparation and support guides remain separate, crawlable and responsive`, async ({ page }) => {
    for (const route of ['service-guidelines', 'support-process']) {
      await page.goto(`/${locale}/${route}/`);
      await expect(page.locator('[data-content="practical-guide"] article')).toHaveCount(3);
      await expect(page.locator('h1')).toHaveCount(1);
      for (const href of await page.locator('[data-content="practical-guide"] a').evaluateAll((links) => links.map((a) => a.getAttribute('href')))) expect(href).toMatch(new RegExp(`^/${locale}/`));
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
    }
  });
}
