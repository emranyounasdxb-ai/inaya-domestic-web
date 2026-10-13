import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar'] as const) {
  const arabic = locale === 'ar';

  test(`${locale}: pricing explains indicative amounts and links to the pricing guide`, async ({ page }) => {
    await page.goto(`/${locale}/pricing/`);
    await expect(page.locator('html')).toHaveAttribute('dir', arabic ? 'rtl' : 'ltr');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(arabic ? 'باقات وأسعار العمالة المنزلية' : 'Domestic Worker Packages and Pricing');
    await expect(page.locator('section').first().getByText(arabic ? 'تبدأ Essential من 2,500 درهم شهرياً وSignature من 3,000 درهم شهرياً، شاملتين التكاليف' : 'Essential starts from AED 2,500/month and Signature from AED 3,000/month, all-inclusive', {exact:false})).toBeVisible();
    await expect(page.locator('main')).not.toContainText('1,500');
    await expect(page.getByRole('link', { name: arabic ? 'اقرأ دليل أسعار الباقات' : 'Read the package pricing guide' })).toHaveAttribute('href', `/${locale}/blog/domestic-worker-package-pricing-factors/`);
    await page.getByRole('button', { name: arabic ? 'رفض التحليلات' : 'Reject analytics' }).click();
    const firstPlan = page.getByRole('heading', { name: 'Essential', exact: true });
    await firstPlan.scrollIntoViewIfNeeded();
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeVisible();
    await offer.getByRole('button').click();
    const cards = [];
    const headings = [];
    const buttons = [];
    for (const name of ['Essential', 'Signature', 'INAYA Black']) {
      const heading = page.getByRole('heading', { name, exact: true });
      const card = heading.locator('..');
      cards.push((await card.boundingBox())!);
      headings.push((await heading.boundingBox())!);
      buttons.push((await card.getByRole('link').boundingBox())!);
      const sections = await card.evaluate(element => Array.from(element.children).filter(child => getComputedStyle(child).position !== 'absolute').map(child => { const box = child.getBoundingClientRect(); return { top: box.top, bottom: box.bottom }; }));
      for (let i = 1; i < sections.length; i++) expect(sections[i].top).toBeGreaterThanOrEqual(sections[i - 1].bottom - 1);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    if (page.viewportSize()!.width >= 1024) {
      for (let i = 1; i < cards.length; i++) {
        expect(Math.abs(cards[i].y - cards[0].y)).toBeLessThan(2);
        expect(Math.abs(cards[i].height - cards[0].height)).toBeLessThan(2);
        expect(Math.abs(headings[i].y - headings[0].y)).toBeLessThan(2);
        expect(Math.abs(buttons[i].y - buttons[0].y)).toBeLessThan(2);
      }
    } else {
      for (let i = 1; i < cards.length; i++) expect(cards[i].y).toBeGreaterThanOrEqual(cards[i - 1].y + cards[i - 1].height);
    }
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
    const hero = page.locator('section').filter({ has: page.getByRole('heading', { level: 1 }) });
    await expect(hero.getByText(arabic ? /لا تشمل هذه الخدمة العلاج الطبي أو التمريض/ : /Medical treatment, nursing and medication management are outside this service/)).toBeVisible();
    await expect(page.locator('body')).not.toContainText(arabic ? 'رعاية المرضى' : 'Patient Care Services');
  });
}
