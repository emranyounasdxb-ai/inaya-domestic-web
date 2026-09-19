import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar']) {
  for (const route of ['booking', 'services/live-in-maid', 'maid-services-dubai', 'maid-source-countries/philippines-maid-uae']) {
    test(`${locale}/${route} exposes localized metadata, graphs and breadcrumb links`, async ({ page }) => {
      await page.goto(`/${locale}/${route}/`);
      const canonical = `https://inayadomestic.ae/${locale}/${route}/`;
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', canonical);
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', canonical);
      await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', `${locale}_AE`);
      await expect(page.locator('meta[name="twitter:description"]')).toHaveAttribute('content', await page.locator('meta[name="description"]').getAttribute('content') as string);
      await expect(page.locator('h1')).toHaveCount(1);
      const graph = JSON.parse(await page.locator('script[data-seo="route"]').textContent() as string)['@graph'];
      const ids = graph.map((node: Record<string, unknown>) => node['@id']);
      expect(new Set(ids).size).toBe(ids.length);
      const crumbs = graph.find((node: Record<string, unknown>) => node['@type'] === 'BreadcrumbList').itemListElement;
      const nav = page.locator('[data-seo="breadcrumbs"]');
      for (const crumb of crumbs) await expect(nav).toContainText(crumb.name);
      await expect(page.locator('[data-seo="related-guides"], [data-content="page-purpose"]')).toHaveCount(0);
      const guides = page.locator(`main a[href^="/${locale}/"]`);
      expect(await guides.count()).toBeGreaterThan(0);
      for (const href of await guides.evaluateAll((links) => links.map((link) => link.getAttribute('href')))) {
        expect(href).toMatch(new RegExp(`^/${locale}/`));
      }
      // Newly added links stay within the current host, including local previews.
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      const offer = page.getByTestId('sierra-leone-offer');
      await expect(offer).toBeVisible();
      await offer.getByRole('button').click();
      await expect(offer).toHaveCount(0);
      await expect(page.getByTestId('sierra-leone-offer-backdrop')).toHaveCount(0);
      await nav.locator('a').first().click();
      await expect(page).toHaveURL(new RegExp(`/${locale}/$`));
      await expect(page.locator('h1')).toHaveCount(1);
    });
  }

  test(`${locale}/faq schema tracks the exact currently rendered questions after tab changes`, async ({ page }) => {
    await page.goto(`/${locale}/faq/`);
    const tabs = page.locator('main button').filter({ has: page.locator('svg') });
    expect(await tabs.count()).toBe(5);
    await expect(page.locator('[data-faq-panel] details')).toHaveCount(100);
    for (const tab of await tabs.all()) {
      const label = (await tab.innerText()).trim();
      await tab.click();
      await expect(page.getByRole('heading', { name: label, exact: true })).toBeVisible();
      const activePanel = page.locator('[data-faq-panel]:not([hidden])');
      await expect(activePanel.locator('details')).toHaveCount(20);
      const questions = await activePanel.locator('details summary > span:first-child').allTextContents();
      const answers = await activePanel.locator('details > p').allTextContents();
      await expect.poll(async () => {
        const data = JSON.parse(await page.locator('script[data-seo="visible-faq"]').textContent() as string);
        return data.mainEntity.map((entity: { name: string }) => entity.name);
      }).toEqual(questions);
      const data = JSON.parse(await page.locator('script[data-seo="visible-faq"]').textContent() as string);
      expect(data.inLanguage).toBe(locale);
      expect(data.mainEntity.map((entity: { acceptedAnswer: { text: string } }) => entity.acceptedAnswer.text)).toEqual(answers);
    }
  });
}
