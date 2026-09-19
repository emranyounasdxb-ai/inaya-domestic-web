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
  });
}
