import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';

const base = 'http://127.0.0.1:3195';
const browser = await chromium.launch();
let checks = 0;
try {
  for (const locale of ['en', 'ar']) {
    const page = await browser.newPage();
    const network = [];
    page.on('request', (r) => { if (/google-analytics|googletagmanager|\/g\/collect/.test(r.url())) network.push(r.url()); });
    await page.addInitScript(() => {
      window.phase05Events = [];
      window.addEventListener('inaya:measurement', (event) => window.phase05Events.push(event.detail));
      // Prevent external protocol/navigation in this check; retain native trusted clicks.
      document.addEventListener('click', (event) => { if (event.target.closest?.('a')) event.preventDefault(); }, true);
    });
    await page.goto(`${base}/${locale}/contact/?email=private@example.test#private`);
    await page.waitForFunction(() => typeof window.inayaMeasurementConsent === 'function');
    assert.deepEqual(await page.evaluate(() => window.phase05Events), []); checks++;
    await page.evaluate(() => { window.inayaMeasurementConsent(true); window.inayaMeasurementConsent(true); });
    assert.equal((await page.evaluate(() => window.phase05Events)).length, 1); checks++;
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const offer = page.getByTestId('sierra-leone-offer');
    await offer.waitFor({ state: 'visible' });
    await offer.getByRole('button').click();
    await page.locator('input[name="name"]').fill('Private test name');
    await page.locator('input[name="name"]').fill('Private changed name');
    const phone = page.locator('footer a[href^="tel:"]').first();
    await phone.click();
    const payloads = await page.evaluate(() => window.phase05Events);
    assert.equal(payloads.filter((p) => p.event === 'form_start').length, 1); checks++;
    assert.equal(payloads.filter((p) => p.event === 'phone_click').length, 1); checks++;
    assert.equal(payloads.filter((p) => p.event === 'page_view').length, 1); checks++;
    for (const payload of payloads) {
      assert.equal(payload.page_location, `https://inayadomestic.ae/${locale}/contact/`);
      assert.equal(payload.language, locale);
      assert.doesNotMatch(JSON.stringify(payload), /Private|private|@|\?|#|phone_number|form_success/);
    } checks++;
    await page.evaluate(() => window.inayaMeasurementConsent(false));
    await phone.click();
    assert.equal((await page.evaluate(() => window.phase05Events)).length, payloads.length); checks++;
    assert.deepEqual(network, []); checks++;
    await page.evaluate(() => window.inayaMeasurementConsent(true));
    await page.locator('a[href*="wa.me"], a[href*="api.whatsapp.com"]').first().click();
    assert.equal((await page.evaluate(() => window.phase05Events)).filter((p) => p.event === 'whatsapp_click').length, 1); checks++;
    await page.locator(`header a[href^="/${locale === 'en' ? 'ar' : 'en'}/contact"]`).first().click();
    assert.equal((await page.evaluate(() => window.phase05Events)).filter((p) => p.event === 'language_switch').length, 1); checks++;
    await page.goto(`${base}/${locale}/services/live-in-maid/`);
    await page.waitForFunction(() => typeof window.inayaMeasurementConsent === 'function');
    await page.evaluate(() => window.inayaMeasurementConsent(true));
    await page.locator(`main a[href^="/${locale}/booking"]`).first().click();
    assert.equal((await page.evaluate(() => window.phase05Events)).filter((p) => p.event === 'service_enquiry').length, 1); checks++;
    await page.goto(`${base}/${locale}/`);
    await page.waitForFunction(() => typeof window.inayaMeasurementConsent === 'function');
    await page.evaluate(() => window.inayaMeasurementConsent(true));
    await page.locator(`header a[href="/${locale}/contact"], header a[href="/${locale}/contact/"]`).first().click();
    assert.equal((await page.evaluate(() => window.phase05Events)).filter((p) => p.event === 'contact_cta').length, 1); checks++;
    await page.close();
  }
} finally { await browser.close(); }
console.log(JSON.stringify({ checks, locales: 2, providerRequests: 0, successEvents: 0 }));
