import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar'] as const) {
  const arabic = locale === 'ar';

  test(`${locale}: pricing explains indicative amounts and links to the pricing guide`, async ({ page }) => {
    await page.goto(`/${locale}/pricing/`);
    await expect(page.locator('html')).toHaveAttribute('dir', arabic ? 'rtl' : 'ltr');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(arabic ? 'باقات وأسعار العمالة المنزلية' : 'Domestic Worker Packages and Pricing');
    await expect(page.locator('section').first().getByText(arabic ? 'تبدأ Essential من 1,500 درهم شهرياً وSignature من 2,500 درهم شهرياً، شاملتين التكاليف' : 'Essential starts from AED 1,500/month and Signature from AED 2,500/month, all-inclusive')).toBeVisible();
    await expect(page.getByRole('link', { name: arabic ? 'اقرأ دليل عوامل تسعير الباقات' : 'Read the package pricing guide' })).toHaveAttribute('href', `/${locale}/blog/domestic-worker-package-pricing-factors/`);
  });

  test(`${locale}: Ajman process names the written terms and hiring guide`, async ({ page }) => {
    await page.goto(`/${locale}/maid-services-ajman/`);
    await expect(page.locator('html')).toHaveAttribute('dir', arabic ? 'rtl' : 'ltr');
    await expect(page.getByText(arabic ? /النطاق والتكاليف والمستندات حسب حالتك كتابةً/ : /proposed scope, costs and case-specific documents in writing/)).toBeVisible();
    await expect(page.getByRole('link', { name: arabic ? 'اقرأ خطوات استقدام العمالة المنزلية' : 'Read the UAE domestic worker hiring process' })).toHaveAttribute('href', `/${locale}/blog/uae-domestic-worker-hiring-process/`);
  });

  test(`${locale}: legacy care route clearly describes non-clinical home support`, async ({ page }) => {
    await page.goto(`/${locale}/services/patient-care/`);
    await expect(page.locator('html')).toHaveAttribute('dir', arabic ? 'rtl' : 'ltr');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(arabic ? 'دعم منزلي غير طبي للروتين اليومي في الإمارات' : 'Non-clinical Home Support in UAE for Daily Routines');
    await expect(page.getByText(arabic ? /لا تشمل هذه الخدمة العلاج الطبي أو التمريض/ : /Medical treatment, nursing and medication management are outside this service/)).toBeVisible();
    await expect(page.locator('body')).not.toContainText(arabic ? 'رعاية المرضى' : 'Patient Care Services');
  });
}
