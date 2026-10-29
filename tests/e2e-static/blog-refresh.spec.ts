import { expect, test } from '../browser-fixture';

for (const lang of ['en', 'ar']) {
  for (let archive = 1; archive <= 6; archive++) {
    test(`${lang}/page${archive}: aligned full-text cards and matching image frames`, async ({ page }, testInfo) => {
      await page.goto(`/${lang}/blog/${archive === 1 ? '' : `page/${archive}/`}`);
      const reject = page.getByRole('button', { name: lang === 'ar' ? 'رفض التحليلات الاختيارية' : 'Reject optional analytics' });
      if (await reject.isVisible()) await reject.click();
      await page.evaluate(() => document.fonts.ready);
      const cards = page.locator('[data-blog-guide]');
      await expect(cards).toHaveCount(archive === 6 ? 10 : 12);
      for (const image of await cards.locator('img').all()) {
        await image.evaluate(el => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
        await expect.poll(() => image.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
        await image.evaluate(el => (el as HTMLImageElement).decode());
      }
      await page.mouse.move(0, 0);
      await expect.poll(() => cards.evaluateAll(elements => elements.every(el => /^(?:none|0px(?: 0px)?)$/.test(getComputedStyle(el).translate)))).toBe(true);
      const rows = await cards.evaluateAll(elements => elements.map(element => {
        const rect = (node: Element) => { const r = node.getBoundingClientRect(); return { y: r.y, height: r.height, width: r.width, bottom: r.bottom }; };
        const heading = element.querySelector('h2')!, description = element.querySelector('p')!, image = element.querySelector('[data-blog-image="card"]')!, cta = element.querySelector('a > span:last-child')!;
        return { card: rect(element), image: rect(image), title: rect(heading), description: rect(description), cta: rect(cta), font: getComputedStyle(heading).fontSize, line: getComputedStyle(heading).lineHeight, bodyFont: getComputedStyle(description).fontSize, textOverflow: heading.scrollHeight > heading.clientHeight + 1, imageFit: getComputedStyle(image.querySelector('img')!).objectFit };
      }));
      for (const row of rows) {
        expect(Math.abs(row.image.width / row.image.height - 1.6)).toBeLessThan(0.015);
        expect(row.imageFit).toBe('cover'); expect(row.textOverflow).toBe(false);
        expect(row.font).toBe(rows[0].font); expect(row.line).toBe('32px'); expect(row.bodyFont).toBe('14px');
      }
      if ((page.viewportSize()?.width ?? 0) >= 768) {
        for (let index = 0; index < rows.length; index += 3) {
          const group = rows.slice(index, index + 3);
          for (const key of ['image', 'title', 'description', 'cta', 'card'] as const) {
            expect(Math.max(...group.map(row => row[key].y)) - Math.min(...group.map(row => row[key].y)), `${archive}/${index}: ${key} row`).toBeLessThan(1.5);
          }
          expect(Math.max(...group.map(row => row.card.bottom)) - Math.min(...group.map(row => row.card.bottom))).toBeLessThan(1.5);
        }
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
      await page.screenshot({ path: testInfo.outputPath(`archive-${lang}-${archive}.png`), fullPage: true });
    });
  }

  for (const slug of ['domestic-worker-package-pricing-factors', 'domestic-worker-contracts-renewal', 'tadbeer-center-ajman-first-visit-service-routing']) {
    test(`${lang}/${slug}: related cards remain usable beside long reading and links are visible`, async ({ page }, testInfo) => {
      await page.goto(`/${lang}/blog/${slug}/`);
      const reject = page.getByRole('button', { name: lang === 'ar' ? 'رفض التحليلات الاختيارية' : 'Reject optional analytics' });
      if (await reject.isVisible()) await reject.click();
      const related = page.locator('[data-related-blog-cards]');
      await expect(related.locator('[data-related-guide]')).toHaveCount(3);
      const inline = page.locator('[data-blog-layout] article a[data-contextual-blog-link]').first();
      await inline.scrollIntoViewIfNeeded();
      const style = await inline.evaluate(el => ({ line: getComputedStyle(el).textDecorationLine, weight: getComputedStyle(el).fontWeight }));
      expect(style.line).toBe('underline'); expect(Number(style.weight)).toBeGreaterThanOrEqual(600);
      await inline.focus(); await expect(inline).toBeFocused();
      const isDesktop = (page.viewportSize()?.width ?? 0) >= 1024;
      if (isDesktop) {
        const layout = page.locator('[data-blog-layout]');
        const reading = await layout.boundingBox(), box = await related.boundingBox();
        if (!reading || !box) throw new Error('Missing actual reading layout');
        const initialY = await related.evaluate(el => el.getBoundingClientRect().top + scrollY);
        await page.evaluate(y => scrollTo({ top: y, behavior: 'instant' }), initialY + 400);
        await expect(related).toBeInViewport();
        expect(Math.abs((await related.boundingBox())!.y - 96)).toBeLessThan(3);
        const body = await page.locator('[data-blog-layout] article').boundingBox(), cards = await related.boundingBox();
        if (!body || !cards) throw new Error('Missing columns');
        expect(lang === 'en' ? body.x + body.width <= cards.x : cards.x + cards.width <= body.x).toBe(true);
        const originalViewport = page.viewportSize()!;
        for (const width of [originalViewport.width, 1024]) {
          await page.setViewportSize({ width, height: originalViewport.height });
          const rail = await page.locator('aside.fixed.left-4').boundingBox();
          for (const column of [page.locator('[data-blog-layout] article'), related]) {
            const content = await column.boundingBox();
            if (rail && content) expect(content.x).toBeGreaterThan(rail.x + rail.width + 4);
          }
        }
        await page.setViewportSize(originalViewport);
      } else {
        await related.scrollIntoViewIfNeeded(); await expect(related).toBeInViewport();
      }
      for (const image of await related.locator('img').all()) {
        await expect.poll(() => image.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.screenshot({ path: testInfo.outputPath(`reading-${lang}-${slug}.png`) });
      const first = related.locator('[data-related-guide]').first();
      const href = await first.getAttribute('href');
      // A normal document request verifies the actual static destination; the
      // dedicated release navigation suite separately checks Linux RSC routing.
      expect((await page.request.get(href!)).status()).toBe(200);
    });
  }
}
