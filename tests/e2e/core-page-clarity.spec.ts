import { expect, test } from '../browser-fixture';
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
    await page.getByRole('button', { name: arabic ? 'رفض التحليلات الاختيارية' : 'Reject optional analytics' }).click();
    const firstPlan = page.locator('[data-package="half-day"]');
    // Reach the former promotion threshold and confirm the expired overlay is absent.
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toHaveCount(0);
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
    for (const cta of [
      page.locator('[data-package="monthly"]').getByRole('link'),
      page.getByRole('link', { name: arabic ? 'تواصل مع فريق عناية' : 'Contact the INAYA team', exact: true })
    ]) {
      const colors = await cta.evaluate(element => {
        const style = getComputedStyle(element);
        const parse = (color: string) => color.match(/[\d.]+/g)!.map(Number);
        const foreground = parse(style.color);
        const background = parse(style.backgroundColor);
        const luminance = (color: number[]) => color.slice(0, 3).map(value => {
          const channel = value / 255;
          return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
        }).reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
        const light = luminance(foreground);
        const dark = luminance(background);
        return {
          backgroundAlpha: background[3] ?? 1,
          foregroundAlpha: foreground[3] ?? 1,
          contrast: (Math.max(light, dark) + 0.05) / (Math.min(light, dark) + 0.05)
        };
      });
      expect(colors.backgroundAlpha, 'Pricing CTA must have an opaque background').toBe(1);
      expect(colors.foregroundAlpha, 'Pricing CTA text must be opaque').toBe(1);
      expect(colors.contrast, 'Pricing CTA text must meet 4.5:1 contrast').toBeGreaterThanOrEqual(4.5);
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
