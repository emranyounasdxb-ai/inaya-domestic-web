import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar'] as const) {
  test(`${locale}: paginated guides remain usable with real navigation and localized URLs`, async ({ page }) => {
    let documents = 0;
    const failedSegments: string[] = [];
    page.on('request', request => { if (request.isNavigationRequest() && request.frame() === page.mainFrame()) documents++; });
    page.on('response', response => { if (new URL(response.url()).pathname.endsWith('.txt') && !response.ok()) failedSegments.push(response.url()); });
    await page.goto(`/${locale}/blog/`);
    const reject = page.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات' : 'Reject analytics' });
    if (await reject.isVisible()) await reject.click();
    const nav = page.getByRole('navigation', { name: locale === 'ar' ? 'صفحات الأدلة' : 'Guide pages' });
    await expect(page.locator('[data-blog-guide]')).toHaveCount(12);
    const first = await page.locator('[data-blog-guide]').first().getAttribute('data-blog-guide');
    await nav.getByRole('link', { name: locale === 'ar' ? 'الصفحة 2' : 'Page 2', exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/blog/page/2/$`));
    await expect(page.locator('[data-blog-guide]')).toHaveCount(12);
    expect(await page.locator('[data-blog-guide]').first().getAttribute('data-blog-guide')).not.toBe(first);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://inayadomestic.ae/${locale}/blog/page/2/`);
    expect(documents, 'real static RSC navigation must retain the browser document').toBe(1);
    expect(failedSegments, 'the actual Linux release must serve its Next export segment files').toEqual([]);
    await nav.getByRole('link', { name: locale === 'ar' ? 'الصفحة السابقة' : 'Previous page', exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/blog/$`));
    expect(await page.locator('[data-blog-guide]').first().getAttribute('data-blog-guide')).toBe(first);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });

  test(`${locale}: commercial guide links support keyboard navigation in the production export`, async ({ page }) => {
    for (const [route, guide] of [
      ['services/live-in-maid', 'live-in-live-out-part-time-maid-uae'],
      ['services/maid-visa', 'domestic-worker-visa-sponsorship-support'],
      ['pricing', 'monthly-maid-package-inclusions-checklist'],
      ['faq', 'monthly-maid-package-inclusions-checklist'],
      ['maid-services-dubai', 'uae-domestic-worker-hiring-process']
    ]) {
      await page.goto(`/${locale}/${route}/`);
      if (route === 'services/live-in-maid') await page.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات' : 'Reject analytics' }).click();
      const link = page.locator(`main a[href="/${locale}/blog/${guide}/"]`);
      await expect(link).toHaveCount(1);
      await link.focus();
      await expect(link).toBeFocused();
      await link.press('Enter');
      await expect(page).toHaveURL(new RegExp(`/${locale}/blog/${guide}/$`));
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    }
  });

  test(`${locale}: home country cards load local flags and expose individual guides accessibly`, async ({ page }) => {
    const remoteFlags: string[] = [];
    page.on('request', request => { if (new URL(request.url()).hostname === 'flagcdn.com') remoteFlags.push(request.url()); });
    await page.goto(`/${locale}/`);
    const reject = page.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات' : 'Reject analytics' });
    if (await reject.isVisible()) await reject.click();
    const cards = page.locator('.home-country-card');
    await expect(cards).toHaveCount(12);
    await cards.first().scrollIntoViewIfNeeded();
    const first = cards.first();
    await first.focus();
    await expect(first).toBeFocused();
    const flags = cards.locator('img');
    await expect(flags).toHaveCount(12);
    for (const flag of await flags.all()) {
      await flag.scrollIntoViewIfNeeded();
      await expect.poll(() => flag.evaluate(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0)).toBe(true);
      await expect(flag).toHaveAttribute('src', /^\/flags\/[a-z]{2}\.svg$/);
      await expect(flag).toHaveAttribute('alt', /.+/);
    }
    expect(remoteFlags).toEqual([]);
    const faq = page.locator('section[aria-labelledby="home-faq-heading"]');
    await expect(faq.locator('article')).toHaveCount(6);
    await expect(faq).toContainText('3,000');
    await expect(page.locator('footer')).toContainText('2637187');
    const clones = page.locator('.home-logo-track > [aria-hidden="true"]');
    await expect(clones).toHaveCount(6);
    await expect(clones.locator('img[alt=""]')).toHaveCount(6);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await cards.first().click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/maid-source-countries/sri-lankan-maid-uae/$`));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test(`${locale}: Ajman office map is deferred until its visible section is reached`, async ({ page }) => {
    await page.goto(`/${locale}/maid-services-ajman/`);
    const frame = page.locator('[data-office-location-map] iframe[data-inaya-location-map]');
    await expect(frame).toHaveCount(1);
    await expect(frame).not.toHaveAttribute('src', /google\.com/);
    await frame.scrollIntoViewIfNeeded();
    await expect(frame).toHaveAttribute('src', /^https:\/\/www\.google\.com\/maps\/embed\?/);
    await expect(frame).toHaveAttribute('title', locale === 'ar' ? 'موقع مكتب عناية في جراند مول، عجمان' : 'INAYA office at Grand Mall, Ajman');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
