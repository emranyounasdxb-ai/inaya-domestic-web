import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar'] as const) {
  const ar = locale === 'ar';
  test(`${locale}: home navigation, ratings, heading and RTL remain usable`, async ({ page, isMobile }) => {
    await page.goto(`/${locale}/`);
    await expect(page.getByTestId('sierra-leone-offer')).toHaveCount(0);
    await expect(page.locator('html')).toHaveAttribute('dir', ar ? 'rtl' : 'ltr');
    await expect(page.locator('h1')).toHaveText(ar ? 'خدمات الخادمات والعمالة المنزلية في عجمان وجميع أنحاء الإمارات' : 'Maid & Domestic Worker Services in Ajman and Across the UAE');
    await expect(page.locator('img[src*="inaya-home-hero-family"]')).toHaveAttribute('fetchpriority', 'high');
    const logo = page.locator('header img');
    await expect(logo).toBeVisible();
    expect(await logo.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
    await expect(page.locator('footer h2')).toHaveCount(3);
    await expect(page.getByRole('img', { name: ar ? '5 من 5 نجوم' : '5 out of 5 stars', exact: true }).first()).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
    if (isMobile) await page.getByRole('button', { name: ar ? 'القائمة' : 'Menu', exact: true }).click();
    const header = page.locator('header');
    await expect(header.getByRole('link', { name: ar ? 'الأدلة' : 'Guides', exact: true }).last()).toBeVisible();
    await expect(header.getByRole('link', { name: ar ? 'English' : 'العربية', exact: true })).toHaveAttribute('href', new RegExp(`^/${ar ? 'en' : 'ar'}/?$`));
    await expect(header.getByRole('link', { name: ar ? 'احجز الآن' : 'Book Now', exact: true }).last()).toBeVisible();
  });

  test(`${locale}: visa page asks for confirmed scope and monthly visits distinguish employment`, async ({ page }) => {
    await page.goto(`/${locale}/services/maid-visa/`);
    await expect(page.getByTestId('sierra-leone-offer')).toHaveCount(0);
    await expect(page.getByRole('heading', { name: ar ? 'المستندات والإجراءات: ما الذي يجب تأكيده؟' : 'Documents and process: what to confirm', exact: true })).toBeVisible();
    await expect(page.locator('main img[src*="maid-filipino"]')).toHaveCount(0);
    await page.goto(`/${locale}/services/monthly-maid-contract/`);
    await expect(page.getByRole('heading', { name: ar ? 'النطاق المطلوب الاتفاق عليه' : 'Scope to agree', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: ar ? 'راجع أساس تسعير الباقات وما يجب تأكيده' : 'Review the package pricing basis and what to confirm' })).toHaveAttribute('href', `/${locale}/pricing/`);
  });
}
