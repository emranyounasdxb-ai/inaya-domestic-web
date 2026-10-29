import { expect, test } from '../browser-fixture';
import { buyerAnswers } from '../../lib/buyer-answers';
import { siteConfig } from '../../lib/site-config';

for (const locale of ['en', 'ar'] as const) {
  test(`${locale}: accepted enquiry confirms submission without confirming booking`, async ({ page }) => {
    await page.route('**/inaya-enquiry.php', route => route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,reference:'INAYA-QA-BOOKING'})}));
    await page.goto(`/${locale}/booking/`);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toHaveCount(0);
    await page.locator('input[name="name"]').fill('Local validation');
    await page.locator('input[name="phone"]').fill('+971500000000');
    await page.getByRole('button', { name: locale === 'ar' ? 'إرسال الاستفسار' : 'Send Enquiry' }).click();
    const confirmation = page.getByRole('status');
    await expect(confirmation).toBeVisible();
    await expect(confirmation).toContainText('INAYA-QA-BOOKING');
    await expect(confirmation).toContainText(locale === 'ar' ? /تم إرسال استفسارك/ : /submitted to INAYA/);
    await expect(confirmation).toContainText(locale === 'ar' ? /لا يؤكد هذا الإرسال حجزاً/ : /does not confirm a booking/);
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
  test(`${locale}: expired popup stays absent without changing enquiry controls`, async ({ page }) => {
    await page.goto(`/${locale}/`);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const offer = page.getByTestId('sierra-leone-offer');
    await expect(offer).toHaveCount(0);
    await expect(offer).toBeHidden();
  });
}
