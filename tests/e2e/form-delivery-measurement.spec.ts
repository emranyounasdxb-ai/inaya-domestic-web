import { expect, test, type Page } from '@playwright/test';

async function stubAnalytics(page: Page) {
  // Exercise the real local GA queue without contacting either analytics vendor.
  await page.route(/www\.googletagmanager\.com\/(?:gtag\/js|gtm\.js)/, route => route.fulfill({ contentType: 'application/javascript', body: '' }));
  await page.route(/(?:google-analytics\.com|clarity\.ms)\//, route => route.abort());
}

async function acceptedEvents(page: Page) {
  return page.evaluate(() => (window.dataLayer ?? []).map(item => Array.from(item as ArrayLike<unknown>))
    .filter(args => args[0] === 'event' && ['generate_lead', 'career_enquiry_submitted'].includes(String(args[1]))));
}

async function fillForm(page: Page, kind: 'contact' | 'booking' | 'careers') {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  const offer = page.getByTestId('sierra-leone-offer');
  await expect(offer).toHaveCount(0);
  const form = page.locator('main form');
  await form.locator('[name="name"]').fill('Synthetic measurement QA');
  await form.locator('[name="phone"]').fill('+971500000000');
  await form.locator('[name="email"]').fill('measurement@example.invalid');
  await form.locator('[name="message"]').fill('Private synthetic message');
  if (kind === 'contact') await form.locator('[name="service"]').selectOption('live-in-maid');
  return form;
}

for (const language of ['en', 'ar'] as const) {
  for (const kind of ['contact', 'booking', 'careers'] as const) {
    test(`${language}/${kind}: only accepted receipt enters the consented GA queue without private data`, async ({ page }) => {
      await stubAnalytics(page);
      await page.addInitScript(() => localStorage.setItem('inaya.analytics-consent.v2', 'granted'));
      const ids: string[] = [];
      await page.route('**/inaya-enquiry.php', async route => {
        ids.push(route.request().postDataJSON().requestId);
        const count = ids.length;
        const result = count === 1 ? { ok: false }
          : { ok: true, reference: count === 2 ? '' : 'INAYA-QA-MEASUREMENT' };
        await route.fulfill({ status: count === 1 ? 503 : 200, contentType: 'application/json', body: JSON.stringify(result) });
      });
      await page.goto(`/${language}/${kind}/?private=secret#private`);
      await expect.poll(() => page.evaluate(() => window['ga-disable-G-986STCSR37'] === false && Array.isArray(window.dataLayer))).toBe(true);
      const form = await fillForm(page, kind);
      await form.locator('button[type="submit"]').click();
      await expect(form.getByRole('alert')).toBeVisible();
      expect(await acceptedEvents(page)).toEqual([]);
      await form.locator('button[type="submit"]').click();
      await expect.poll(() => ids.length).toBe(2);
      await expect(form.locator('button[type="submit"]')).toBeEnabled();
      await expect(page.getByRole('status')).toHaveCount(0);
      expect(await acceptedEvents(page)).toEqual([]);
      await form.locator('button[type="submit"]').click();
      await expect(page.getByRole('status')).toContainText('INAYA-QA-MEASUREMENT');
      await expect.poll(() => acceptedEvents(page)).toEqual([['event', kind === 'careers' ? 'career_enquiry_submitted' : 'generate_lead', {
        form_id: kind, language, page_location: `https://inayadomestic.ae/${language}/${kind}/`, page_referrer: '',
      }]]);
      expect(ids).toHaveLength(3);
      expect(new Set(ids).size).toBe(1);
      expect(JSON.stringify(await acceptedEvents(page))).not.toMatch(/secret|private|Synthetic|measurement@example|971500000000|INAYA-QA|\?|#/i);
    });
  }

  test(`${language}: consent withdrawn while a receipt is pending prevents measurement and later replay`, async ({ page }) => {
    await stubAnalytics(page);
    await page.addInitScript(() => localStorage.setItem('inaya.analytics-consent.v2', 'granted'));
    let release: () => void = () => {};
    const ready = new Promise<void>(resolve => { release = resolve; });
    let received = false;
    await page.route('**/inaya-enquiry.php', async route => {
      received = true;
      await ready;
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, reference: 'INAYA-QA-DENIED' }) });
    });
    await page.goto(`/${language}/booking/`);
    await expect.poll(() => page.evaluate(() => window['ga-disable-G-986STCSR37'] === false && Array.isArray(window.dataLayer))).toBe(true);
    const form = await fillForm(page, 'booking');
    await form.locator('button[type="submit"]').click();
    await expect.poll(() => received).toBe(true);
    await page.evaluate(() => window.inayaMeasurementConsent?.(false));
    release();
    await expect(page.getByRole('status')).toContainText('INAYA-QA-DENIED');
    expect(await acceptedEvents(page)).toEqual([]);
    await page.evaluate(() => window.inayaMeasurementConsent?.(true));
    await expect.poll(() => page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(false);
    expect(await acceptedEvents(page)).toEqual([]);
  });
}
