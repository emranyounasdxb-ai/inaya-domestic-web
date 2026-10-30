import { expect, test } from '../browser-fixture';

for (const locale of ['en', 'ar'] as const) {
  for (const width of [320, 375, 390, 768, 1024, 1165, 1280, 1440, 1536]) {
    test(`${locale} monthly hero keeps contact rail clear at ${width}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 746 });
      await page.goto(`/${locale}/services/monthly-maid-contract/`);
      const reject = page.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات الاختيارية' : 'Reject optional analytics', exact: true });
      await expect(reject).toBeVisible();
      await reject.click();
      await page.evaluate(() => document.fonts.ready);

      const hero = page.locator('main section').first();
      const controls = page.locator('aside').filter({ has: page.locator('a[href="tel:+97167400128"]') });
      const primary = hero.locator('a').first();
      const layout = await hero.evaluate(section => {
        const rail = [...document.querySelectorAll('aside')].find(el => el.querySelector('a[href="tel:+97167400128"]'));
        const box = (el: Element) => {
          const r = el.getBoundingClientRect();
          return { x: r.x, y: r.y, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
        };
        const railBox = rail ? box(rail) : null;
        // Measure real text/action rectangles instead of pinning CSS classes.
        const copy = section.querySelector('h1')!.parentElement!;
        return {
          viewport: window.innerWidth,
          pageWidth: document.documentElement.scrollWidth,
          rail: railBox,
          content: [...copy.querySelectorAll('h1, p, a')].map(el => ({ text: el.textContent, ...box(el) })),
        };
      });
      expect(layout.pageWidth).toBeLessThanOrEqual(width + 1);
      if (width >= 1024) {
        await expect(controls).toBeVisible();
        const rail = layout.rail!;
        for (const item of layout.content) {
          expect(item.right <= rail.x || rail.right + 6 <= item.x || item.bottom <= rail.y || rail.bottom <= item.y,
            `${locale}/${width}: contact rail covers ${item.text}`).toBe(true);
        }
      } else {
        await expect(controls).toBeHidden();
      }
      await expect(page.getByRole('link', { name: locale === 'ar' ? 'تواصل مع عناية عبر واتساب' : 'WhatsApp INAYA Domestic Workers', exact: true })).toHaveAttribute('href', 'https://wa.me/971502036767');
      await expect(page.getByRole('contentinfo').locator('a[href="tel:+97167400128"]')).toBeAttached();
      await primary.focus();
      await expect(primary).toBeFocused();
      if (width === 1165 || width === 1440) {
        await page.screenshot({ path: testInfo.outputPath(`contact-rail-${locale}-${width}.png`) });
      }
    });
  }
}
