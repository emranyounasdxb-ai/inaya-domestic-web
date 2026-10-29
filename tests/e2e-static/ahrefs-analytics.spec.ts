import { expect, test } from '../browser-fixture';

const source = 'https://analytics.ahrefs.com/analytics.js';
const key = '2EXv77rohxGm3Dfl3xH7Gw';

for (const locale of ['en', 'ar'] as const) {
  test(`${locale}: initial-head Ahrefs runs once independently of the optional GA/Clarity choice`, async ({ page, context }) => {
    const ahrefsRequests: string[] = [];
    const optionalRequests: string[] = [];
    await context.route('https://analytics.ahrefs.com/**', route => {
      ahrefsRequests.push(route.request().url());
      return route.fulfill({
        contentType: 'application/javascript',
        // Observe execution/consent state without loading a real tracker or sending events.
        body: `window.ahrefsTestLoads = window.ahrefsTestLoads || [];
          window.ahrefsTestLoads.push(localStorage.getItem('inaya.analytics-consent.v2'));`,
      });
    });
    await context.route(/(?:googletagmanager\.com|google-analytics\.com|clarity\.ms)\//, route => {
      optionalRequests.push(route.request().url());
      return route.fulfill({ contentType: 'application/javascript', body: '' });
    });
    const loadStates = () => page.evaluate(() => (window as unknown as { ahrefsTestLoads?: (string | null)[] }).ahrefsTestLoads ?? []);
    await page.goto(`/${locale}/contact/`);
    const tracker = page.locator(`head script[src="${source}"]`);
    await expect(tracker).toHaveCount(1);
    await expect(tracker).toHaveAttribute('data-key', key);
    expect(await tracker.evaluate(script => (script as HTMLScriptElement).async)).toBe(true);
    await expect.poll(loadStates).toEqual([null]);
    expect(ahrefsRequests).toEqual([source]);
    expect(optionalRequests).toEqual([]);

    const banner = page.getByRole('region', { name: locale === 'ar' ? 'تفضيلات ملفات تعريف الارتباط' : 'Your cookie preferences' });
    await expect(banner).toBeVisible();
    await expect(banner).toContainText('Ahrefs');
    await expect(banner).toContainText(locale === 'ar' ? 'ولا يعطله هذا الاختيار' : 'this choice does not disable it');
    await banner.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات الاختيارية' : 'Reject optional analytics', exact: true }).click();
    await expect(banner).toBeHidden();
    expect(await page.evaluate(() => localStorage.getItem('inaya.analytics-consent.v2'))).toBe('denied');
    expect(optionalRequests).toEqual([]);
    expect(await page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(true);

    // Client navigation must not load another direct Ahrefs installation.
    await page.locator(`header a[href="/${locale}/"]`).first().click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/$`));
    await expect(page.locator(`head script[src="${source}"]`)).toHaveCount(1);
    expect(ahrefsRequests).toEqual([source]);
    expect(optionalRequests).toEqual([]);

    const settings = page.getByRole('button', { name: locale === 'ar' ? 'إعدادات ملفات تعريف الارتباط' : 'Cookie settings', exact: true });
    await settings.scrollIntoViewIfNeeded();
    await settings.click();
    await banner.getByRole('button', { name: locale === 'ar' ? 'السماح بالتحليلات الاختيارية' : 'Accept optional analytics', exact: true }).click();
    await expect(page.locator('script[src*="gtag/js?id=G-986STCSR37"]')).toHaveCount(1);
    await expect(page.locator('script[src*="gtm.js?id=GTM-MDBQLVGJ"]')).toHaveCount(1);
    expect(optionalRequests.filter(url => url.includes('/gtag/js'))).toHaveLength(1);
    expect(optionalRequests.filter(url => url.includes('/gtm.js'))).toHaveLength(1);
    expect(ahrefsRequests).toEqual([source]);
    await settings.click();
    await banner.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات الاختيارية' : 'Reject optional analytics', exact: true }).click();
    expect(await page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(true);

    optionalRequests.length = 0;
    await page.reload();
    await expect.poll(loadStates).toEqual(['denied']);
    await expect.poll(() => ahrefsRequests.length).toBe(2);
    expect(optionalRequests).toEqual([]);
    await expect(page.locator(`head script[src="${source}"]`)).toHaveCount(1);
  });
}
