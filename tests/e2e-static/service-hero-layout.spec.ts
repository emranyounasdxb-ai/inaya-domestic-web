import { expect, test } from '../browser-fixture';

for (const locale of ['en', 'ar']) {
  for (const width of [320, 393, 1024, 1100, 1440]) {
    test(`${locale}: service hero image fits its column at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.emulateMedia({ reducedMotion: 'reduce' });

      for (const slug of ['recruitment', 'housemaid']) {
        const response = await page.goto(`/${locale}/services/${slug}/`);
        expect(response?.status()).toBe(200);

        const hero = page.locator('main section').filter({ has: page.locator('h1') }).first();
        const image = hero.locator('img');
        await expect(image).toHaveCount(1);
        await expect.poll(() => image.evaluate(element => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
        // A cached image can finish before its route stylesheet has applied.
        // Wait for the frame's layout as well as the image resource.
        await expect(image.locator('..')).toBeVisible();
        await page.evaluate(() => document.fonts.ready);

        const bounds = await image.evaluate(element => {
          const frame = element.parentElement!;
          const rect = frame.getBoundingClientRect();
          const column = frame.parentElement!.getBoundingClientRect();
          return {
            left: rect.left,
            right: rect.right,
            width: rect.width,
            height: rect.height,
            columnLeft: column.left,
            columnRight: column.right,
            viewport: innerWidth,
          };
        });

        // Global overflow clipping can hide an oversized image even when the
        // document's scrollWidth equals the viewport, so inspect the frame.
        expect(bounds.left, `${slug}: left edge`).toBeGreaterThanOrEqual(Math.max(0, bounds.columnLeft) - 1);
        expect(bounds.right, `${slug}: right edge`).toBeLessThanOrEqual(Math.min(bounds.viewport, bounds.columnRight) + 1);
        expect(bounds.width).toBeGreaterThan(0);
        expect(bounds.width / bounds.height).toBeCloseTo(4 / 3, 2);
        if (width === 1440) expect(bounds.height).toBeGreaterThanOrEqual(350);
      }
    });
  }
}
