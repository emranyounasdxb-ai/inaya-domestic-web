import { expect, test } from '@playwright/test';
import { expectedPlans } from '../poster-pricing-contract.cjs';

for (const locale of ['en', 'ar'] as const) {
  const arabic = locale === 'ar';

  test(`${locale}: six pricing cards retain amounts, monthly units and readable responsive layout`, async ({ page }) => {
    await page.goto(`/${locale}/pricing/`);
    await expect(page.locator('html')).toHaveAttribute('dir', arabic ? 'rtl' : 'ltr');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(arabic ? 'باقات وأسعار العمالة المنزلية' : 'Domestic Worker Packages and Pricing');
    await expect(page.locator('[data-content="equal-arrangement-price"]')).toHaveText(arabic ? 'السعر نفسه للخدمة المقيمة وغير المقيمة' : 'Same price for live-in and live-out');
    await expect(page.locator('main')).not.toContainText('1,500');
    await expect(page.locator('main')).not.toContainText(/2,500|Essential|Signature|INAYA Black/);
    await expect(page.getByRole('link', { name: arabic ? 'دليل أسعار الباقات' : 'Package pricing guide', exact: true })).toHaveAttribute('href', `/${locale}/blog/domestic-worker-package-pricing-factors/`);
    await page.getByRole('button', { name: arabic ? 'رفض التحليلات' : 'Reject analytics' }).click();
    const firstPlan = page.locator('[data-package="half-day"]');
    // Reach the real scroll threshold before dismissing the global offer.
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeVisible();
    await offer.getByRole('button').click();
    await expect(offer).toBeHidden();
    await firstPlan.scrollIntoViewIfNeeded();
    const cards = [];
    const headings = [];
    const buttons = [];
    await expect(page.locator('[data-content="published-packages"] [data-package]')).toHaveCount(6);
    for (const plan of expectedPlans) {
      const card = page.locator(`[data-package="${plan.id}"]`);
      const heading = card.getByRole('heading', { level: 3 });
      await expect(card.locator('[data-price="amount"]')).toHaveText(plan.price[locale]);
      await expect(card.locator('[data-price="period"]')).toHaveText(plan.period[locale]);
      await expect(card.getByRole('link')).toHaveAttribute('href', `/${locale}/booking/`);
      cards.push((await card.boundingBox())!);
      headings.push((await heading.boundingBox())!);
      buttons.push((await card.getByRole('link').boundingBox())!);
      const sections = await card.evaluate(element => Array.from(element.children).filter(child => getComputedStyle(child).position !== 'absolute').map(child => { const box = child.getBoundingClientRect(); return { top: box.top, bottom: box.bottom }; }));
      for (let i = 1; i < sections.length; i++) expect(sections[i].top).toBeGreaterThanOrEqual(sections[i - 1].bottom - 1);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const columns = page.viewportSize()!.width >= 1280 ? 3 : page.viewportSize()!.width >= 640 ? 2 : 1;
    for (let i = 0; i < cards.length; i++) {
      const rowStart = Math.floor(i / columns) * columns;
      expect(Math.abs(cards[i].y - cards[rowStart].y)).toBeLessThan(2);
      expect(Math.abs(cards[i].height - cards[rowStart].height)).toBeLessThan(2);
      expect(Math.abs(headings[i].y - headings[rowStart].y)).toBeLessThan(2);
      expect(Math.abs(buttons[i].y - buttons[rowStart].y)).toBeLessThan(2);
      if (i >= columns) expect(cards[i].y).toBeGreaterThanOrEqual(cards[i - columns].y + cards[i - columns].height);
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
