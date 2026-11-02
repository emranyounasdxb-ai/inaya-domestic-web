import { expect, test } from '../browser-fixture';

for (const locale of ['en', 'ar'] as const) {
  test(`${locale} booking honors a known service query and keeps manual choice`, async ({ page }) => {
    await page.goto(`/${locale}/booking/?service=live-out-maid`);
    const service = page.locator('select[name="service"]');
    await expect(service).toHaveValue('live-out-maid');

    await service.selectOption('nanny');
    await expect(service).toHaveValue('nanny');

    await page.goto(`/${locale}/booking/?service=unknown-service`);
    await expect(service).toHaveValue('');

    await page.goto(`/${locale}/services/part-time-maid/`);
    await page.locator(`a[href="/${locale}/booking/?service=part-time-maid"]`).first().click();
    await expect(service).toHaveValue('part-time-maid');
    await service.selectOption('nanny');
    await expect(service).toHaveValue('nanny');
  });

  test(`${locale} booking preserves a choice made before JavaScript hydration`, async ({ page }) => {
    let releaseScripts!: () => void;
    const scriptsReady = new Promise<void>((resolve) => { releaseScripts = resolve; });
    await page.route('**/*.js', async (route) => {
      await scriptsReady;
      await route.continue();
    });
    try {
      await page.goto(`/${locale}/booking/?service=live-out-maid`, { waitUntil: 'commit' });
      const service = page.locator('select[name="service"]');
      await expect(service).toHaveValue('live-out-maid');
      await service.selectOption('nanny');
      await expect(service).toHaveValue('nanny');
      releaseScripts();
      // Held script requests can leave networkidle satisfied before hydration.
      // Wait for the shared client effect before exercising popstate handlers.
      await expect.poll(() => page.evaluate(() => typeof window.inayaMeasurementConsent)).toBe('function');
      await expect(service).toHaveValue('nanny');
      await page.evaluate(() => {
        history.pushState(null, '', '?service=part-time-maid');
        window.dispatchEvent(new PopStateEvent('popstate'));
      });
      await expect(service).toHaveValue('part-time-maid');
      await page.evaluate(() => {
        history.pushState(null, '', '?service=unknown-service');
        window.dispatchEvent(new PopStateEvent('popstate'));
      });
      await expect(service).toHaveValue('');
    } finally {
      releaseScripts();
    }
  });

  test(`${locale} booking preserves the selected service and package when switching language`, async ({ page }) => {
    const otherLocale = locale === 'en' ? 'ar' : 'en';
    await page.goto(`/${locale}/booking/`);
    const service = page.locator('select[name="service"]');
    const plan = page.locator('select[name="plan"]');
    await service.selectOption('nanny');
    await plan.selectOption('12-month contract');

    await page.locator(`header a[hreflang="${otherLocale}"]`).click();
    await expect(page).toHaveURL(new RegExp(`/${otherLocale}/booking/\\?`));
    await expect(service).toHaveValue('nanny');
    await expect(plan).toHaveValue('12-month contract');
  });

  test(`${locale} booking identifies the required service field accessibly`, async ({ page }) => {
    await page.goto(`/${locale}/booking/`);
    const service = page.getByLabel(locale === 'ar' ? 'اختر الخدمة *' : 'Select Service *', { exact: true });
    await expect(service).toHaveAttribute('aria-required', 'true');
  });
}
