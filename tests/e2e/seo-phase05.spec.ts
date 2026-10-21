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

  test(`${locale}: cookie banner saves rejection and allows consent to be changed`, async ({ page }) => {
    const ar = locale === 'ar';
    await page.route(/www\.googletagmanager\.com\/(gtag\/js|gtm\.js)/, route => route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }));
    await page.goto(`/${locale}/pricing/`);
    const banner = page.getByRole('region', { name: ar ? 'تفضيلات ملفات تعريف الارتباط' : 'Your cookie preferences' });
    await expect(banner).toBeVisible();
    await expect(banner).toHaveAttribute('dir', ar ? 'rtl' : 'ltr');
    await expect(banner.getByRole('link', { name: ar ? 'سياسة الخصوصية' : 'Privacy policy' })).toHaveAttribute('href', `/${locale}/privacy-policy/`);
    const reject = ar ? 'رفض التحليلات' : 'Reject analytics';
    const accept = ar ? 'السماح بالتحليلات' : 'Accept analytics';
    await banner.getByRole('button', { name: reject }).click();
    await expect(banner).toBeHidden();
    expect(await page.evaluate(() => localStorage.getItem('inaya.analytics-consent.v2'))).toBe('denied');
    await page.reload();
    await expect.poll(() => page.evaluate(() => typeof window.inayaMeasurementConsent)).toBe('function');
    await expect(banner).toBeHidden();
    await expect(page.locator('script[src*="googletagmanager.com/gtag/js"]')).toHaveCount(0);
    const settings = page.getByRole('button', { name: ar ? 'إعدادات ملفات تعريف الارتباط' : 'Cookie settings', exact: true });
    await settings.scrollIntoViewIfNeeded();
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeVisible();
    await offer.getByRole('button').click();
    await settings.click();
    await expect(banner.getByRole('button', { name: accept })).toBeFocused();
    await banner.getByRole('button', { name: accept }).click();
    await expect(settings).toBeFocused();
    await expect(page.locator('script[src*="googletagmanager.com/gtag/js?id=G-986STCSR37"]')).toHaveCount(1);
    expect(await page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(false);
    await settings.click();
    await banner.getByRole('button', { name: reject }).click();
    expect(await page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(true);
    expect(await page.evaluate(() => localStorage.getItem('inaya.analytics-consent.v2'))).toBe('denied');
    await page.reload();
    await expect(banner).toBeHidden();
    await expect(page.locator('script[src*="googletagmanager.com/gtag/js"]')).toHaveCount(0);
  });
}

test('GA4 consent loads once, survives a language switch and can be revoked', async ({ page }) => {
  await page.route(/www\.googletagmanager\.com\/(gtag\/js|gtm\.js)/, route => route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }));
  await page.goto('/en/');
  const englishTitle = await page.title();
  expect(englishTitle).toBeTruthy();
  expect(await page.locator('script[src*="googletagmanager.com/gtag/js"]').count()).toBe(0);
  await expect.poll(() => page.evaluate(() => typeof window.inayaMeasurementConsent)).toBe('function');
  await page.evaluate(() => window.inayaMeasurementConsent?.(true));
  await expect(page.locator('script[src*="googletagmanager.com/gtag/js?id=G-986STCSR37"]')).toHaveCount(1);
  await expect.poll(() => page.evaluate(() => Array.from((window as unknown as { dataLayer?: ArrayLike<ArrayLike<unknown>> }).dataLayer ?? []).filter(call => call[0] === 'config' && call[1] === 'G-986STCSR37').length)).toBe(1);
  expect(await page.evaluate(() => localStorage.getItem('inaya.analytics-consent.v2'))).toBe('granted');
  await page.getByRole('link', { name: 'العربية' }).first().click();
  await expect(page).toHaveURL(/\/ar\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
  expect(await page.title()).not.toBe(englishTitle);
  expect(await page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(false);
  await page.evaluate(() => window.inayaMeasurementConsent?.(false));
  expect(await page.evaluate(() => localStorage.getItem('inaya.analytics-consent.v2'))).toBe('denied');
  expect(await page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(true);
  await page.reload();
  expect(await page.locator('script[src*="googletagmanager.com/gtag/js"]').count()).toBe(0);
});
