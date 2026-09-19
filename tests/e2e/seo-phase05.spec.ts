import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar']) {
  test(`${locale}: unconfigured measurement has no consent API, provider scripts, events or analytics requests`, async ({ page }) => {
    const requests: string[] = [];
    page.on('request', (request) => { if (/google-analytics|googletagmanager|\/g\/collect/.test(request.url())) requests.push(request.url()); });
    await page.addInitScript(() => {
      Object.assign(window, { phase05Events: [] });
      window.addEventListener('inaya:measurement', (event) => (window as unknown as { phase05Events: unknown[] }).phase05Events.push((event as CustomEvent).detail));
    });
    await page.goto(`/${locale}/contact/`);
    await expect(page.locator('h1')).toHaveCount(1);
    expect(await page.evaluate(() => typeof window.inayaMeasurementConsent)).toBe('undefined');
    expect(await page.locator('script[src*="googletagmanager"], script[src*="google-analytics"]').count()).toBe(0);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeVisible();
    await offer.getByRole('button').click();
    await page.locator('input[name="name"]').fill('Private browser test');
    await page.locator('input[name="name"]').fill('Another private value');
    expect(await page.evaluate(() => (window as unknown as { phase05Events: unknown[] }).phase05Events)).toEqual([]);
    expect(requests).toEqual([]);
  });
}
