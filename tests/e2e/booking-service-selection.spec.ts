import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar'] as const) {
  test(`${locale} booking honors a known service query and keeps manual choice`, async ({ page }) => {
    await page.goto(`/${locale}/booking/?service=live-out-maid`);
    const service = page.locator('select[name="service"]');
    await expect(service).toHaveValue('live-out-maid');

    await service.selectOption('nanny');
    await expect(service).toHaveValue('nanny');

    await page.goto(`/${locale}/booking/?service=unknown-service`);
    await expect(service).toHaveValue('live-in-maid');

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
      await page.waitForLoadState('networkidle');
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
      await expect(service).toHaveValue('live-in-maid');
    } finally {
      releaseScripts();
    }
  });
}
