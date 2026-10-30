import { expect, test } from '../browser-fixture';

for (const lang of ['en', 'ar']) {
  test(`${lang}: every pricing choice reaches the existing enquiry with its exact plan`, async ({ page }) => {
    const plans = [
      ['half-day', 'Half day — 4 hours'], ['daily', 'Daily — 8 hours'], ['weekly', 'Weekly — 7 days'],
      ['monthly', 'Monthly — 30 days'], ['six-month', '6-month contract'], ['yearly', '12-month contract']
    ];
    let submissions = 0;
    page.on('request', request => { if (request.method() === 'POST') submissions++; });
    for (const [index, [id, value]] of plans.entries()) {
      await page.goto(`/${lang}/pricing/`);
      const reject = page.getByRole('button', { name: lang === 'ar' ? 'رفض التحليلات الاختيارية' : 'Reject optional analytics' });
      if (await reject.isVisible()) await reject.click();
      await page.locator(`[data-package="${id}"]`).getByRole('link').click();
      await expect(page.locator('select[name="plan"]')).toHaveValue(value);
      await expect(page.locator('select[name="service"]')).toHaveValue(index < 3 ? 'part-time-maid' : 'monthly-maid-contract');
      await expect(page.locator('input[name="name"]')).toHaveValue('');
      await expect(page.locator('input[name="phone"]')).toHaveValue('');
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
    expect(submissions).toBe(0);
  });

  test(`${lang}: customer categories, careers and the four main homepage routes remain usable`, async ({ page }) => {
    await page.goto(`/${lang}/blog/`);
    const reject = page.getByRole('button', { name: lang === 'ar' ? 'رفض التحليلات الاختيارية' : 'Reject optional analytics' });
    if (await reject.isVisible()) await reject.click();
    const directory = page.getByRole('navigation', { name: lang === 'ar' ? 'الأدلة حسب الموضوع' : 'Guides by topic' });
    await expect(directory.locator('details')).toHaveCount(6);
    await directory.locator('summary').first().click();
    await expect(directory.locator('details').first().getByRole('link').first()).toBeVisible();
    await expect(page.locator('[data-blog-guide]')).toHaveCount(12);
    const career = page.locator('[data-blog-guide="inaya-office-staff-careers-ajman"]');
    await career.scrollIntoViewIfNeeded();
    await expect(career.locator('xpath=../..').getByRole('heading', { name: lang === 'ar' ? 'وظائف المكتب' : 'Office careers', exact: true })).toBeVisible();
    await expect(career.getByRole('link')).toHaveAttribute('href', `/${lang}/blog/inaya-office-staff-careers-ajman/`);
    await page.goto(`/${lang}/`);
    const services = page.getByRole('region', { name: lang === 'ar' ? 'ابدأ بالخدمة التي تحتاجها' : 'Start with the service you need' });
    await services.scrollIntoViewIfNeeded();
    for (const slug of ['part-time-maid','monthly-maid-contract','nanny','maid-visa']) await expect(services.locator(`a[href="/${lang}/services/${slug}/"]`)).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
