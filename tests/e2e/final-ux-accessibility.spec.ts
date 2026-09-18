import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar'] as const) {
  for (const route of ['booking', 'careers', 'contact'] as const) {
    for (const reducedMotion of ['reduce', 'no-preference'] as const) {
      test(`${locale} ${route}: labelled local validation focuses visible confirmation (${reducedMotion})`, async ({ page }) => {
        await page.emulateMedia({ reducedMotion });
        const outbound: string[] = [];
        page.on('request', request => {
          // The unchanged Contact map iframe makes its own RPC POST requests.
          // No main-frame form delivery, analytics, or QA field data in ANY
          // frame/request is allowed; map RPCs are not form submissions.
          const payload = `${request.url()} ${request.postData() || ''}`;
          if ((request.frame() === page.mainFrame() && request.method() !== 'GET') ||
            /google-analytics|googletagmanager/.test(request.url()) ||
            /Local QA|Local-only QA details|local@example.invalid|971500000000/.test(payload)) outbound.push(request.url());
        });
        await page.goto(`/${locale}/${route}/`);
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        const offer = page.getByTestId('sierra-leone-offer');
        await expect(offer).toBeVisible();
        await offer.getByRole('button', { name: locale === 'ar' ? 'إغلاق عرض سيراليون' : 'Close Sierra Leone offer' }).click();
        await expect(page.getByTestId('sierra-leone-offer-backdrop')).toHaveCount(0);
        const form = page.locator('form');
        const associations = await form.locator('input, select, textarea').evaluateAll(controls => controls.map(control => {
          const field = control as HTMLInputElement;
          return { id: field.id, labels: [...(field.labels || [])].map(label => label.textContent?.trim()) };
        }));
        expect(associations.length).toBe(route === 'booking' ? 8 : 7);
        expect(new Set(associations.map(control => control.id)).size).toBe(associations.length);
        for (const control of associations) { expect(control.id).toBeTruthy(); expect(control.labels).toHaveLength(1); expect(control.labels[0]).toBeTruthy(); }
        await form.getByLabel(locale === 'ar' ? /الاسم الكامل|اسمك/ : /Full Name|Your Name/).fill('Local QA');
        await form.getByLabel(locale === 'ar' ? 'رقم الهاتف' : 'Phone Number', { exact: false }).fill('+971500000000');
        if (route === 'contact') {
          await form.getByLabel(locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address', { exact: false }).fill('local@example.invalid');
          await form.getByLabel(locale === 'ar' ? 'الخدمة المطلوبة' : 'Select Service').selectOption('live-in-maid');
          await form.getByLabel(locale === 'ar' ? 'رسالتك' : 'Your Message', { exact: false }).fill('Local-only QA details');
        }
        const buttonCopy = route === 'careers' ? (locale === 'ar' ? 'مراجعة بيانات استفسار العمل' : 'Check Career Enquiry Details') : (locale === 'ar' ? 'مراجعة بيانات الاستفسار' : 'Check Enquiry Details');
        await form.getByRole('button', { name: buttonCopy, exact: true }).click();
        const confirmation = page.getByRole('status');
        await expect(confirmation).toBeVisible();
        await expect(confirmation).toBeFocused();
        await expect(confirmation).toContainText(locale === 'ar' ? /لم ترسل|لم يرسل/ : /not sent|has not sent/);
        await expect(confirmation).not.toContainText(/received|sent successfully|تم إرسال|تم استلام/);
        await expect.poll(() => confirmation.evaluate(node => {
          const rect = node.getBoundingClientRect();
          return rect.top >= 56 && rect.bottom <= window.innerHeight;
        })).toBe(true);
        await expect(form).toHaveCount(0);
        expect(outbound).toEqual([]);
        expect(await page.evaluate(() => typeof window.inayaMeasurementConsent)).toBe('undefined');
      });
    }
  }
  test(`${locale}: inline errors and help are programmatically connected`, async ({ page }) => {
    for (const route of ['booking', 'contact']) {
      await page.goto(`/${locale}/${route}/`);
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      const offer = page.getByTestId('sierra-leone-offer');
      await expect(offer).toBeVisible();
      await offer.getByRole('button').click();
      await page.locator('form button[type="submit"]').click();
      const fields = page.locator('form [aria-invalid="true"]');
      expect(await fields.count()).toBe(route === 'booking' ? 2 : 5);
      for (const field of await fields.all()) {
        const id = await field.getAttribute('aria-describedby');
        expect(id).toBeTruthy();
        const error = page.locator(`[id="${id}"]`);
        await expect(error).toHaveText(locale === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required');
      }
      if (route === 'contact') {
        const helpId = await page.locator('form').getAttribute('aria-describedby');
        await expect(page.locator(`[id="${helpId}"]`)).toContainText(locale === 'ar' ? 'لا يرسل هذا النموذج' : 'This form does not send');
      }
    }
  });
  test(`${locale}: navigation and local-check copy stay truthful and localized`, async ({ page, isMobile }) => {
    await page.goto(`/${locale}/contact/`);
    await expect(page.locator('main')).not.toContainText(/Send Request|Send your requirement|Submit Application|أرسل طلبك|أرسل الطلب|أرسل لنا متطلباتك|إرسال الطلب/);
    await page.goto(`/${locale}/careers/`);
    await expect(page.locator('form button')).toHaveText(locale === 'ar' ? 'مراجعة بيانات استفسار العمل' : 'Check Career Enquiry Details');
    if (isMobile) {
      const menu = page.getByRole('button', { name: locale === 'ar' ? 'القائمة' : 'Menu', exact: true });
      await expect(menu).toHaveText(locale === 'ar' ? 'القائمة' : 'Menu');
      await menu.click();
      await expect(menu).toHaveAttribute('aria-expanded', 'true');
      await expect(page.locator('header').getByRole('link', { name: locale === 'ar' ? 'اتصل بنا' : 'Contact Us', exact: true }).last()).toBeVisible();
    }
  });
}
