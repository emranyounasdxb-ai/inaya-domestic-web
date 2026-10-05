import { expect, test } from '@playwright/test';

test('Arabic mixed-script pricing renders both owned font subsets without downloading the full Arabic fallback', async ({ page }) => {
  const fontResponses: Promise<number>[] = [];
  page.on('response', response => {
    if (response.url().includes('.woff2')) fontResponses.push(response.body().then(body => body.length));
  });
  await page.goto('/ar/pricing/');
  await page.evaluate(() => document.fonts.ready);
  const loadedSubsets = await page.evaluate(() => Array.from(document.fonts)
    .filter(face => face.family === 'INAYA Arabic Body' && face.status === 'loaded')
    .map(face => ({ weight: face.weight, range: face.unicodeRange })));
  expect(loadedSubsets).toHaveLength(2);
  expect(loadedSubsets.every(face => face.weight === '400 700')).toBe(true);
  expect(loadedSubsets.some(face => face.range.includes('U+600-6FF'))).toBe(true);
  expect(loadedSubsets.some(face => face.range.includes('U+0-FF'))).toBe(true);
  expect((await Promise.all(fontResponses)).every(bytes => bytes < 150_000)).toBe(true);
});

for (const locale of ['en', 'ar']) {
  const ar = locale === 'ar';
  test(`${locale}: transfer enquiry has neutral visible FAQs and no matching promise`, async ({ page }) => {
    await page.goto(`/${locale}/services/sponsorship-transfer/`);
    await expect(page.locator('html')).toHaveAttribute('dir', ar ? 'rtl' : 'ltr');
    await expect(page.locator('main h1')).toHaveText(ar ? 'استفسارات نقل كفالة الخادمة في الإمارات' : 'Maid Sponsorship Transfer Enquiries in UAE');
    const faq = page.locator('main details').first();
    await faq.locator('summary').click();
    await expect(faq).toContainText(ar ? 'الدعم المتاح لحالتك والمتطلبات والرسوم المطبقة' : 'support available for your case, applicable requirements and fees');
    await expect(page.getByRole('link', { name: ar ? 'اطلب المطابقة' : 'Request Matching', exact: true })).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  });

  test(`${locale}: Ajman arrangement guide links pricing and core services link Ajman`, async ({ page }) => {
    await page.goto(`/${locale}/maid-services-ajman/`);
    const arrangement = page.locator('main article').filter({ has: page.locator(`a[href="/${locale}/services/monthly-maid-contract/"]`) });
    await expect(arrangement.getByRole('link', { name: ar ? 'الأسعار' : 'Pricing', exact: true })).toHaveAttribute('href', `/${locale}/pricing/`);
    await page.goto(`/${locale}/services/monthly-maid-contract/`);
    await expect(page.locator('main h1')).toHaveText(ar ? 'عقود خادمة شهرية في الإمارات' : 'Monthly Maid Contracts in UAE');
    await expect(page.locator(`main a[href="/${locale}/maid-services-ajman/"]`).first()).toBeVisible();
    await expect(page.locator('main img[src*="monthly-maid-contract"]')).toHaveAttribute('fetchpriority', 'high');
  });
}
