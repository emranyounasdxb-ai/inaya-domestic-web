import { expect, test } from '../browser-fixture';

for (const locale of ['en', 'ar']) {
  test(`${locale}: Clarity requires fresh consent and stops when consent is withdrawn`, async ({ page }) => {
    const vendorRequests: string[] = [];
    page.on('request', request => {
      if (/googletagmanager|clarity\.ms|google-analytics/.test(request.url())) vendorRequests.push(request.url());
    });
    // The previous Google-only choice must not authorize a new recorder.
    await page.addInitScript(() => localStorage.setItem('inaya.analytics-consent', 'granted'));
    await page.route(/www\.googletagmanager\.com\/gtag\/js/, route => route.fulfill({
      contentType: 'application/javascript', body: '',
    }));
    await page.route(/www\.googletagmanager\.com\/gtm\.js/, route => route.fulfill({
      contentType: 'application/javascript',
      // Simulate a delayed vendor consuming the queue; no real recording or transmission.
      body: `window.testClarityCalls = Array.from(window.clarity.q || []);
        window.clarity = function () { window.testClarityCalls.push(Array.from(arguments)); };`,
    }));
    await page.goto(`/${locale}/contact/`);
    const banner = page.getByRole('region', {name: locale === 'ar' ? 'تفضيلات ملفات تعريف الارتباط' : 'Your cookie preferences'});
    await expect(banner).toBeVisible();
    await expect(banner).toContainText('Microsoft Clarity');
    expect(vendorRequests).toEqual([]);
    expect(await page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(true);

    await banner.getByRole('button', {name: locale === 'ar' ? 'السماح بالتحليلات الاختيارية' : 'Accept optional analytics', exact:true}).click();
    await expect(page.locator('script[src*="gtm.js?id=GTM-MDBQLVGJ"]')).toHaveCount(1);
    await expect(page.locator('script[src*="gtag/js?id=G-986STCSR37"]')).toHaveCount(1);
    const calls = () => page.evaluate(() => (window as unknown as {testClarityCalls?: unknown[][]}).testClarityCalls || []);
    await expect.poll(calls).toContainEqual(['consentv2', {ad_Storage:'denied', analytics_Storage:'granted'}]);
    expect(vendorRequests.filter(url => url.includes('/gtm.js'))).toHaveLength(1);
    expect(vendorRequests.find(url => url.includes('/gtm.js'))).toContain('l=inayaClarityDataLayer');

    await page.evaluate(() => window.inayaMeasurementConsent?.(false));
    await expect.poll(calls).toContainEqual(['consentv2', {ad_Storage:'denied', analytics_Storage:'denied'}]);
    expect((await calls()).at(-1)).toEqual(['stop']);
    expect(await page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(true);
    expect(await page.evaluate(() => localStorage.getItem('inaya.analytics-consent.v2'))).toBe('denied');

    // A later grant restarts the existing recorder without loading a second container.
    await page.evaluate(() => window.inayaMeasurementConsent?.(true));
    await expect.poll(calls).toContainEqual(['start']);
    expect((await calls()).at(-2)).toEqual(['consentv2', {ad_Storage:'denied', analytics_Storage:'granted'}]);
    await expect(page.locator('script[src*="gtm.js?id=GTM-MDBQLVGJ"]')).toHaveCount(1);
    expect(vendorRequests.filter(url => url.includes('/gtm.js'))).toHaveLength(1);
    await page.evaluate(() => window.inayaMeasurementConsent?.(false));
    vendorRequests.length = 0;
    await page.reload();
    await expect.poll(() => page.evaluate(() => typeof window.inayaMeasurementConsent)).toBe('function');
    await expect(banner).toBeHidden();
    expect(vendorRequests).toEqual([]);
  });

  for (const route of ['contact', 'booking', 'careers']) {
    test(`${locale}/${route}: enquiry and application fields stay inside an explicit Clarity mask`, async ({ page }) => {
      await page.goto(`/${locale}/${route}/`);
      const forms = page.locator('main form');
      await expect(forms).toHaveCount(1);
      await expect(forms).toHaveAttribute('data-clarity-mask', 'true');
      await expect(forms.locator('input[name="name"]')).toHaveCount(1);
    });
  }
}
