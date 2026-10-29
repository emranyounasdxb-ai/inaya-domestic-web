import { expect, test } from '../browser-fixture';

for (const locale of ['en', 'ar'] as const) {
  test(`${locale}: footer stays readable and aligned on phones, tablets and laptops`, async ({ page }) => {
    await page.goto(`/${locale}/about/`);
    await page.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات الاختيارية' : 'Reject optional analytics', exact: true }).click();
    const footer = page.getByRole('contentinfo');
    await expect(footer.getByRole('heading', { level: 2 })).toHaveCount(3);
    await expect(footer.getByRole('link', { name: 'info@inayadomestic.ae', exact: true })).toHaveAttribute('href', 'mailto:info@inayadomestic.ae');
    for (const width of [320, 390, 640, 768, 978, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await footer.getByText(locale === 'ar' ? 'ناقش التفاصيل قبل تأكيد الخدمة' : 'Discuss details before confirming a service', { exact: true }).scrollIntoViewIfNeeded();
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      const backToTop = page.getByTestId('back-to-top');
      await expect(backToTop).toHaveAttribute('aria-hidden', 'false');
      if (width < 1024) {
        const whatsapp = page.getByRole('link', { name: locale === 'ar' ? 'تواصل مع عناية عبر واتساب' : 'WhatsApp INAYA Domestic Workers', exact: true });
        // The floating WhatsApp and Back to Top utilities share the footer area
        // on tablets as well as phones; neither may obscure the other.
        const back = (await backToTop.boundingBox())!;
        const chat = (await whatsapp.boundingBox())!;
        expect(back.x + back.width <= chat.x || chat.x + chat.width <= back.x || back.y + back.height <= chat.y || chat.y + chat.height <= back.y, `${locale}/${width}: contact controls overlap`).toBe(true);
        const readable = await footer.locator('a, button, p').evaluateAll(elements => elements.map(element => {
          const range = document.createRange();
          range.selectNodeContents(element);
          const r = element.tagName === 'P' ? range.getBoundingClientRect() : element.getBoundingClientRect();
          return { label: element.textContent?.trim(), x: r.x, y: r.y, width: r.width, height: r.height };
        }));
        const note = (await footer.getByText(locale === 'ar' ? 'ناقش التفاصيل قبل تأكيد الخدمة' : 'Discuss details before confirming a service', { exact: true }).boundingBox())!;
        for (const content of [...readable, note]) for (const floating of [back, chat]) {
          expect(content.x + content.width <= floating.x || floating.x + floating.width <= content.x || content.y + content.height <= floating.y || floating.y + floating.height <= content.y, `${locale}/${width}: floating control covers ${'label' in content ? content.label : 'footer note'}`).toBe(true);
        }
      }
      const layout = await footer.evaluate(element => {
        const shell = element.firstElementChild!;
        const columns = shell.children[0];
        const stats = shell.children[1];
        const box = (el: Element) => {
          const r = el.getBoundingClientRect();
          return { left: r.left, right: r.right, top: r.top, bottom: r.bottom, width: r.width };
        };
        return {
          viewport: window.innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          footer: box(element),
          columns: Array.from(columns.children, box),
          stats: Array.from(stats.children, box),
          content: Array.from(element.querySelectorAll('a, button, h2, img, p'), box)
        };
      });
      expect(layout.documentWidth, `${locale}/${width}: page overflow`).toBeLessThanOrEqual(width + 1);
      for (const box of [...layout.columns, ...layout.stats, ...layout.content]) {
        expect(box.left, `${locale}/${width}: clipped start`).toBeGreaterThanOrEqual(layout.footer.left - 1);
        expect(box.right, `${locale}/${width}: clipped end`).toBeLessThanOrEqual(layout.footer.right + 1);
        expect(box.width).toBeGreaterThan(0);
      }
      if (width >= 768) {
        for (const box of layout.columns) expect(Math.abs(box.top - layout.columns[0].top)).toBeLessThan(1);
        for (const box of layout.stats) expect(Math.abs(box.top - layout.stats[0].top)).toBeLessThan(1);
      } else {
        expect(Math.abs(layout.columns[1].top - layout.columns[2].top)).toBeLessThan(1);
        expect(layout.columns[1].top).toBeGreaterThanOrEqual(layout.columns[0].bottom);
        expect(layout.columns[3].top).toBeGreaterThanOrEqual(Math.max(layout.columns[1].bottom, layout.columns[2].bottom));
        expect(Math.abs(layout.stats[0].top - layout.stats[1].top)).toBeLessThan(1);
        expect(Math.abs(layout.stats[2].top - layout.stats[3].top)).toBeLessThan(1);
        expect(layout.stats[2].top).toBeGreaterThanOrEqual(layout.stats[0].bottom);
      }
      for (const boxes of [layout.columns, layout.stats]) {
        for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
          const a = boxes[i], b = boxes[j];
          expect(a.right <= b.left + 1 || b.right <= a.left + 1 || a.bottom <= b.top + 1 || b.bottom <= a.top + 1, `${locale}/${width}: overlapping footer items`).toBe(true);
        }
      }
    }
  });
}
