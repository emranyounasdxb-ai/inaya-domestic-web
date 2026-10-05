import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar']) {
  test(`${locale}: Contact map loads near the viewport without changing its dimensions or URL`, async ({ page }) => {
    const requests: string[] = [];
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.route('https://www.google.com/maps/embed?*', async route => {
      requests.push(route.request().url());
      await route.fulfill({ contentType: 'text/html', body: '<p>Location map loaded</p>' });
    });
    await page.goto(`/${locale}/contact/`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const map = page.locator('iframe[data-inaya-location-map]');
    const initial = await map.boundingBox();
    expect(initial).not.toBeNull();
    expect(initial!.y).toBeGreaterThan(page.viewportSize()!.height + 200);
    expect(await map.getAttribute('src')).toBeNull();
    expect(requests).toHaveLength(0);
    await expect(map).toHaveAttribute('width', '100%');
    await expect(map).toHaveAttribute('height', '100%');
    await expect(map).toHaveAttribute('loading', 'lazy');
    await expect(map).toHaveAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    expect(await map.getAttribute('allowfullscreen')).not.toBeNull();
    expect(await map.evaluate(frame => getComputedStyle(frame).borderWidth)).toBe('0px');

    await map.scrollIntoViewIfNeeded();
    await expect(map).toHaveAttribute('src', /^https:\/\/www\.google\.com\/maps\/embed\?pb=/);
    await expect(page.frameLocator('iframe[data-inaya-location-map]').getByText('Location map loaded')).toBeVisible();
    expect(requests).toHaveLength(1);
    expect(requests[0]).toContain('INAYA%20Domestic%20Workers%20Ajman');
    const settled = await map.boundingBox();
    expect(settled!.height).toBe(initial!.height);
    expect(settled!.width).toBe(initial!.width);
    await expect(map).toHaveAttribute('title', locale === 'ar' ? 'موقع عناية للعمالة المنزلية في عجمان' : 'INAYA Domestic Workers Ajman location map');
    expect(errors).toEqual([]);
  });
}

test.describe('Contact map with JavaScript disabled', () => {
  test.use({ javaScriptEnabled: false });
  for (const locale of ['en', 'ar']) {
    test(`${locale}: the original native map remains available through the noscript fallback`, async ({ page }) => {
      await page.route('https://www.google.com/maps/embed?*', route => route.fulfill({ contentType: 'text/html', body: '<p>Location map loaded</p>' }));
      await page.goto(`/${locale}/contact/`);
      const fallback = page.locator('noscript iframe');
      await expect(page.locator('iframe[data-inaya-location-map]')).toBeHidden();
      await expect(fallback).toHaveAttribute('src', /^https:\/\/www\.google\.com\/maps\/embed\?pb=/);
      await fallback.scrollIntoViewIfNeeded();
      await expect(page.frameLocator('noscript iframe').getByText('Location map loaded')).toBeVisible();
      expect((await fallback.boundingBox())!.height).toBe(page.viewportSize()!.width < 640 ? 320 : 420);
    });
  }
});
