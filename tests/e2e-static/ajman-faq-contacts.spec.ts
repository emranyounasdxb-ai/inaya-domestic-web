import { expect, test } from '../browser-fixture';

const questions = {
  en: ['How can I hire a housemaid or domestic worker in Ajman?', 'Where can I request a part-time or hourly maid in Ajman?'],
  ar: ['كيف أوظف خادمة أو عاملة منزلية في عجمان؟', 'أين أطلب خادمة بالساعة أو بدوام جزئي في عجمان؟'],
};

for (const locale of ['en', 'ar'] as const) {
  for (const width of [320, 390, 768, 1165, 1440]) {
    test(`${locale} Ajman FAQ separates call and WhatsApp at ${width}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 900 });
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(`/${locale}/maid-services-ajman/`);
      await page.getByRole('button', { name: locale === 'ar' ? 'رفض التحليلات الاختيارية' : 'Reject optional analytics', exact: true }).click();
      await page.keyboard.press('Tab');

      for (const question of questions[locale]) {
        const faq = page.locator('details').filter({ has: page.getByText(question, { exact: true }) });
        await expect(faq).toHaveCount(1);
        await faq.locator('summary').focus();
        await faq.locator('summary').press('Enter');
        await expect(faq.locator('p').first()).toBeVisible();
        const call = faq.locator('[data-faq-contact="call"]');
        const whatsapp = faq.locator('[data-faq-contact="whatsapp"]');
        await expect(call).toHaveCount(1);
        await expect(whatsapp).toHaveCount(1);
        await expect(call).toHaveText('+971 6 740 0128');
        await expect(call).toHaveAttribute('href', 'tel:+97167400128');
        await expect(whatsapp).toHaveText('+971 50 203 6767');
        await expect(whatsapp).toHaveAttribute('href', 'https://wa.me/971502036767');
        await expect(whatsapp).toHaveAttribute('rel', 'noopener noreferrer');
        for (const link of [call, whatsapp]) {
          await expect(link).toHaveAttribute('dir', 'ltr');
          await link.focus();
          await expect(link).toBeFocused();
          await expect(link).toHaveCSS('outline-style', 'solid');
          const box = (await link.boundingBox())!;
          expect(box.x).toBeGreaterThanOrEqual(0);
          expect(box.x + box.width).toBeLessThanOrEqual(width + 1);
        }
        await call.focus();
        await call.press('Tab');
        await expect(whatsapp).toBeFocused();
        if (width === 390 || width === 1440) await faq.screenshot({ path: testInfo.outputPath(`contact-answer-${locale}-${width}-${questions[locale].indexOf(question)}.png`) });
      }

      await expect(page.locator('[data-faq-contact="whatsapp"]')).toHaveCount(2);
      const graphs = (await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(raw => JSON.parse(raw)['@graph'] ?? []);
      const schema = graphs.find(node => node['@type'] === 'FAQPage');
      expect(schema).toBeTruthy();
      for (const item of schema.mainEntity) {
        const faq = page.locator('details').filter({ has: page.getByText(item.name, { exact: true }) });
        await expect(faq.locator('p').first()).toHaveText(item.acceptedAnswer.text);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width + 1);
      if (width === 390 || width === 1440) await page.screenshot({ path: testInfo.outputPath(`ajman-faq-${locale}-${width}.png`), fullPage: true });
    });
  }
}

test('inline Ajman enquiry contacts do not appear on other location pages', async ({ page }) => {
  for (const locale of ['en', 'ar']) {
    await page.goto(`/${locale}/maid-services-dubai/`);
    await expect(page.locator('[data-faq-contact]')).toHaveCount(0);
    await expect(page.locator('h1')).toBeVisible();
  }
});
