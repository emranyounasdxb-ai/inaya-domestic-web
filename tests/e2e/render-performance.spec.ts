import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar']) {
  test(`${locale}: deferred sections retain rendered geometry, print content and keyboard navigation`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    for (const route of ['', 'contact/', 'blog/uae-domestic-worker-hiring-process/']) {
      await page.goto(`/${locale}/${route}`);
      await page.evaluate(() => document.fonts.ready);
      const sections = page.locator('main section, footer');
      const readGeometry = async () => {
        const result = [];
        for (const section of await sections.all()) {
          await section.scrollIntoViewIfNeeded();
          const offer = page.getByTestId('sierra-leone-offer');
          if (await offer.isVisible()) await offer.getByRole('button').click();
          await page.evaluate(() => document.fonts.ready);
          // Read the rendered content after scroll activation, not its estimated off-screen height.
          await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
          result.push(await section.evaluate(element => {
            const dimensions = (node: Element) => {
              const rect = node.getBoundingClientRect();
              // Blink lays out in 1/64 CSS-pixel units; DOMRect subtraction can
              // add floating-point noise at long scrolled document offsets.
              const layoutUnit = (value: number) => Math.round(value * 64) / 64;
              return { width: layoutUnit(rect.width), height: layoutUnit(rect.height) };
            };
            return { ...dimensions(element), text: element.textContent,
              children: [...element.querySelectorAll('h1, h2, h3, p, label, input, button')].map(node => ({ ...dimensions(node), text: node.textContent, font: getComputedStyle(node).font })) };
          }));
        }
        return result;
      };
      const deferred = await readGeometry();
      // Visible removes the implicit containment; the intrinsic-size hint is
      // inert in normal layout and can retain its remembered size during comparison.
      const comparison = await page.addStyleTag({ content: 'main section, footer { content-visibility: visible !important; }' });
      expect(await readGeometry()).toEqual(deferred);
      await comparison.evaluate(element => { element.parentNode?.removeChild(element); });
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
      await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');

      if (route === 'contact/') {
        const field = page.locator('form input').first();
        await field.focus();
        await expect(field).toBeFocused();
        await expect(field).toBeInViewport();
      }
      const guide = page.locator(`footer a[href="/${locale}/blog/"]`);
      await guide.focus();
      await expect(guide).toBeFocused();
      await expect(guide).toBeInViewport();
      await guide.press('Enter');
      await expect(page).toHaveURL(new RegExp(`/${locale}/blog/$`));
      await expect(page.locator('main h1')).toHaveCount(1);
      await page.emulateMedia({ media: 'print' });
      expect(await page.locator('footer').evaluate(element => getComputedStyle(element).contentVisibility)).toBe('visible');
      expect(await page.locator('main section').evaluateAll(elements => elements.every(element => getComputedStyle(element).contentVisibility === 'visible'))).toBe(true);
      await page.emulateMedia({ media: 'screen' });
    }
  });
}
