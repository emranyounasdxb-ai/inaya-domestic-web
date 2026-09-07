import { expect, test } from '@playwright/test';

const scrollNearBottom = async (page: import('@playwright/test').Page) => {
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
};

test.describe('Sierra Leone offer controls', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en');
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
  });

  test('shows the English offer after scrolling with correct pricing and WhatsApp message', async ({ page }) => {
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeHidden();

    await scrollNearBottom(page);
    await expect(offer).toBeVisible();
    await expect(offer.getByRole('heading', { name: 'Sierra Leone Maid Offer' })).toBeVisible();
    await expect(offer).toContainText('AED 6,500');
    await expect(offer).toContainText('AED 4,500');

    const whatsapp = page.getByTestId('sierra-leone-whatsapp');
    const href = await whatsapp.getAttribute('href');
    expect(href).toContain('https://wa.me/971502036767?text=');
    expect(decodeURIComponent(href ?? '')).toContain("Hello INAYA, I’m interested in the Sierra Leone maid offer for AED 4,500.");
  });

  test('keeps the offer dismissed for the browser session', async ({ page }) => {
    await scrollNearBottom(page);
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeVisible();
    await offer.getByRole('button', { name: 'Close Sierra Leone offer' }).click();
    await expect(offer).toBeHidden();

    await page.reload();
    await scrollNearBottom(page);
    await expect(offer).toBeHidden();
  });

  test('renders localized Arabic RTL content and message', async ({ page }) => {
    await page.goto('/ar');
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
    await scrollNearBottom(page);

    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeVisible();
    await expect(offer).toHaveAttribute('dir', 'rtl');
    await expect(offer.getByRole('heading', { name: 'عرض العمالة المنزلية من سيراليون' })).toBeVisible();
    await expect(offer).toContainText('6,500 درهم');
    await expect(offer).toContainText('4,500 درهم');

    const href = await page.getByTestId('sierra-leone-whatsapp').getAttribute('href');
    expect(decodeURIComponent(href ?? '')).toContain('مرحباً عناية، أرغب في الاستفسار عن عرض العمالة المنزلية من سيراليون بسعر 4,500 درهم.');
  });

  test('shows Back to Top near the page bottom and returns to the top', async ({ page }) => {
    await scrollNearBottom(page);
    const backToTop = page.getByTestId('back-to-top');
    await expect(backToTop).toBeVisible();
    await backToTop.click();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(5);
    await expect(backToTop).toHaveAttribute('aria-hidden', 'true');
    await expect(backToTop).toHaveAttribute('tabindex', '-1');
  });

  test('does not overflow horizontally on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await scrollNearBottom(page);
    await expect(page.getByTestId('sierra-leone-offer')).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test('disables motion when reduced motion is requested', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await scrollNearBottom(page);
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeVisible();
    await expect(offer.locator('[role="img"]')).toHaveCSS('animation-name', 'none');
  });
});
