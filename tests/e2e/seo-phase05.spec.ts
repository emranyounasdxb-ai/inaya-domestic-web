import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar']) {
  test(`${locale}: GA4 remains disabled without explicit consent and emits no duplicate measurement`, async ({ page }) => {
    const requests: string[] = [];
    page.on('request', (request) => { if (/google-analytics|googletagmanager|\/g\/collect/.test(request.url())) requests.push(request.url()); });
    await page.addInitScript(() => {
      Object.assign(window, { phase05Events: [] });
      window.addEventListener('inaya:measurement', (event) => (window as unknown as { phase05Events: unknown[] }).phase05Events.push((event as CustomEvent).detail));
    });
    await page.goto(`/${locale}/contact/`);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect.poll(() => page.evaluate(() => typeof window.inayaMeasurementConsent)).toBe('function');
    expect(await page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(true);
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

test('GA4 consent loads once, survives a language switch and can be revoked', async ({ page }) => {
  await page.route(/www\.googletagmanager\.com\/gtag\/js/, route => route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }));
  await page.goto('/en/');
  const englishTitle = await page.title();
  expect(englishTitle).toBeTruthy();
  expect(await page.locator('script[src*="googletagmanager.com/gtag/js"]').count()).toBe(0);
  await expect.poll(() => page.evaluate(() => typeof window.inayaMeasurementConsent)).toBe('function');
  await page.evaluate(() => window.inayaMeasurementConsent?.(true));
  await expect(page.locator('script[src*="googletagmanager.com/gtag/js?id=G-986STCSR37"]')).toHaveCount(1);
  await expect.poll(() => page.evaluate(() => Array.from((window as unknown as { dataLayer?: ArrayLike<ArrayLike<unknown>> }).dataLayer ?? []).filter(call => call[0] === 'config' && call[1] === 'G-986STCSR37').length)).toBe(1);
  expect(await page.evaluate(() => localStorage.getItem('inaya.analytics-consent'))).toBe('granted');
  await page.getByRole('link', { name: 'العربية' }).first().click();
  await expect(page).toHaveURL(/\/ar\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
  expect(await page.title()).not.toBe(englishTitle);
  expect(await page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(false);
  await page.evaluate(() => window.inayaMeasurementConsent?.(false));
  expect(await page.evaluate(() => localStorage.getItem('inaya.analytics-consent'))).toBe('denied');
  expect(await page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(true);
  await page.reload();
  expect(await page.locator('script[src*="googletagmanager.com/gtag/js"]').count()).toBe(0);
});
