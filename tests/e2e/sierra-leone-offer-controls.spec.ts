import { expect, test } from '@playwright/test';

const scrollNearBottom = async (page: import('@playwright/test').Page) => {
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
};

test.describe('Sierra Leone offer controls', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en');
  });

  test('shows a centered English modal and blurred backdrop after scrolling', async ({ page }) => {
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeHidden();

    await scrollNearBottom(page);
    await expect(offer).toBeVisible();
    await expect(offer).toHaveAttribute('role', 'dialog');
    await expect(offer).toHaveAttribute('aria-modal', 'true');
    await expect(offer.getByRole('heading', { name: 'Sierra Leone Maid Offer' })).toBeVisible();
    await expect(offer).toContainText('AED 6,500');
    await expect(offer).toContainText('AED 4,500');

    const centered = await offer.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return {
        horizontal: Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2),
        vertical: Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)
      };
    });
    expect(centered.horizontal).toBeLessThanOrEqual(2);
    expect(centered.vertical).toBeLessThanOrEqual(2);

    const backdrop = page.getByTestId('sierra-leone-offer-backdrop');
    await expect(backdrop).toBeVisible();
    const backdropStyles = await backdrop.evaluate((element) => {
      const style = getComputedStyle(element);
      return {
        background: style.backgroundColor,
        filter: style.backdropFilter || style.getPropertyValue('-webkit-backdrop-filter')
      };
    });
    expect(backdropStyles.background).toBe('rgba(2, 10, 44, 0.38)');
    expect(backdropStyles.filter).toContain('blur(9px)');

    const whatsapp = page.getByTestId('sierra-leone-whatsapp');
    const href = await whatsapp.getAttribute('href');
    expect(href).toContain('https://wa.me/971502036767?text=');
    expect(decodeURIComponent(href ?? '')).toContain("Hello INAYA, I’m interested in the Sierra Leone maid offer for AED 4,500.");
  });

  test('keeps the offer dismissed for the page load and allows it after reload', async ({ page }) => {
    await scrollNearBottom(page);
    const offer = page.getByTestId('sierra-leone-offer');
    const backdrop = page.getByTestId('sierra-leone-offer-backdrop');
    await expect(offer).toBeVisible();
    await offer.getByRole('button', { name: 'Close Sierra Leone offer' }).click();
    await expect(offer).toBeHidden();
    await expect(backdrop).toBeHidden();

    await page.evaluate(() => window.scrollTo(0, 0));
    await scrollNearBottom(page);
    await expect(offer).toBeHidden();

    await page.reload();
    await scrollNearBottom(page);
    await expect(offer).toBeVisible();
  });

  test('renders localized Arabic RTL content and message', async ({ page }) => {
    await page.goto('/ar');
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
    await page.getByTestId('sierra-leone-offer').getByRole('button', { name: 'Close Sierra Leone offer' }).click();
    const backToTop = page.getByTestId('back-to-top');
    await expect(backToTop).toBeVisible();
    await backToTop.click();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(5);
    await expect(backToTop).toHaveAttribute('aria-hidden', 'true');
    await expect(backToTop).toHaveAttribute('tabindex', '-1');
  });

  test('centers the modal without overflow at 390 by 844', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await scrollNearBottom(page);
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeVisible();
    const geometry = await offer.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return {
        horizontal: Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2),
        vertical: Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2),
        withinViewport: rect.top >= 0 && rect.bottom <= window.innerHeight
      };
    });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(geometry.horizontal).toBeLessThanOrEqual(2);
    expect(geometry.vertical).toBeLessThanOrEqual(2);
    expect(geometry.withinViewport).toBe(true);
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
