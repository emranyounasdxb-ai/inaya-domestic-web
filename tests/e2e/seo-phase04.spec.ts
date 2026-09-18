import { expect, test } from '@playwright/test';
import { buyerAnswers } from '../../lib/buyer-answers';
import { siteConfig } from '../../lib/site-config';

for (const locale of ['en', 'ar'] as const) {
  test(`${locale}: local form completion never claims delivery or booking confirmation`, async ({ page }) => {
    await page.goto(`/${locale}/booking/`);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeVisible();
    await offer.getByRole('button').click();
    await page.locator('input[name="name"]').fill('Local validation');
    await page.locator('input[name="phone"]').fill('+971500000000');
    await page.getByRole('button', { name: locale === 'ar' ? 'مراجعة بيانات الاستفسار' : 'Check Enquiry Details' }).click();
    await expect(page.getByText(locale === 'ar' ? /لم ترسل إلى المكتب/ : /not sent to the office/)).toBeVisible();
    await expect(page.getByText(locale === 'ar' ? /لم يتم تأكيد أي حجز/ : /No booking is confirmed/)).toBeVisible();
  });
  test(`${locale}: enquiry, pricing and replacement answers are localized and linked`, async ({ page }) => {
    for (const route of ['booking', 'pricing', 'refund-policy']) {
      await page.goto(`/${locale}/${route}/`);
      const answer = page.locator('[data-content="buyer-answer"]');
      await expect(answer.getByRole('heading')).toHaveText(buyerAnswers[route].question[locale]);
      await expect(answer.locator('p')).toHaveText(buyerAnswers[route].answer[locale]);
      await expect(answer.locator('a')).toHaveAttribute('href', `/${locale}/${buyerAnswers[route].detailRoute}/`);
      await expect(page.locator('h1')).toHaveCount(1);
    }
  });
  test(`${locale}: contact details and actual directions use the existing listing`, async ({ page }) => {
    await page.goto(`/${locale}/contact/`);
    await expect(page.locator('[data-content="buyer-answer"]')).toContainText(buyerAnswers.contact.answer[locale]);
    expect(await page.locator(`a[href="${siteConfig.directionsUrl}"]`).count()).toBeGreaterThan(0);
    await expect(page.locator('footer')).toContainText(siteConfig.email);
    await expect(page.locator('footer')).not.toContainText(/100%|10,000\+|24\/7|Licensed & Approved/);
  });
  test(`${locale}: popup copy changes without changing enquiry controls`, async ({ page }) => {
    await page.goto(`/${locale}/`);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toBeVisible();
    await expect(offer).toContainText(locale === 'ar' ? 'ملفات المرشحات' : 'Candidate Profiles');
    await expect(offer).not.toContainText(/Available Profiles|ملفات متاحة/);
    await offer.getByRole('button', { name: locale === 'ar' ? 'إغلاق عرض سيراليون' : 'Close Sierra Leone offer' }).click();
    await expect(offer).toBeHidden();
  });
}
