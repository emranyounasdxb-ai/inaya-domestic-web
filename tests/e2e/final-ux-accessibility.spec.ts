import { expect, test } from '@playwright/test';

for (const locale of ['en', 'ar'] as const) {
  for (const route of ['booking', 'careers', 'contact'] as const) {
    for (const reducedMotion of ['reduce', 'no-preference'] as const) {
      test(`${locale} ${route}: accepted enquiry focuses visible confirmation (${reducedMotion})`, async ({ page }) => {
        await page.emulateMedia({ reducedMotion });
        const outbound: string[] = [];
        const deliveries: Record<string, unknown>[] = [];
        await page.route('**/inaya-enquiry.php', async intercepted => {
          expect(intercepted.request().method()).toBe('POST');
          const payload = intercepted.request().postDataJSON();
          expect(payload.kind).toBe(route);
          expect(payload.locale).toBe(locale);
          expect(payload.requestId).toMatch(/^[0-9a-f-]{36}$/);
          expect(payload.fields.name).toBe('Local QA');
          expect(payload.fields.phone).toBe('+971500000000');
          deliveries.push(payload);
          await intercepted.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ok:true,reference:'INAYA-QA-123'}) });
        });
        page.on('request', request => {
          // Form data may go only to the same-origin delivery endpoint.
          const payload = `${request.url()} ${request.postData() || ''}`;
          if (!request.url().endsWith('/inaya-enquiry.php') &&
            ((request.frame() === page.mainFrame() && request.method() !== 'GET') ||
            /google-analytics|googletagmanager/.test(request.url()) ||
            /Local QA|Local-only QA details|local@example.invalid|971500000000/.test(payload))) outbound.push(request.url());
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
        const buttonCopy = locale === 'ar' ? 'إرسال الاستفسار' : 'Send Enquiry';
        await form.getByRole('button', { name: buttonCopy, exact: true }).click();
        const confirmation = page.getByRole('status');
        await expect(confirmation).toBeVisible();
        await expect(confirmation).toBeFocused();
        await expect(confirmation).toContainText(locale === 'ar' ? /تم إرسال استفسارك/ : /submitted to INAYA/);
        await expect(confirmation).toContainText('INAYA-QA-123');
        await expect(confirmation).toContainText(locale === 'ar' ? /لا يؤكد هذا الإرسال/ : /does not confirm a booking/);
        expect(deliveries).toHaveLength(1);
        await expect.poll(() => confirmation.evaluate(node => {
          const rect = node.getBoundingClientRect();
          return rect.top >= 56 && rect.bottom <= window.innerHeight;
        })).toBe(true);
        await expect(form).toHaveCount(0);
        expect(outbound).toEqual([]);
        await expect.poll(() => page.evaluate(() => typeof window.inayaMeasurementConsent)).toBe('function');
        expect(await page.evaluate(() => window['ga-disable-G-986STCSR37'])).toBe(true);
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
        await expect(page.locator(`[id="${helpId}"]`)).toContainText('info@inayadomestic.ae');
      }
    }
  });
  test(`${locale}: navigation and delivery copy stay truthful and localized`, async ({ page, isMobile }) => {
    await page.goto(`/${locale}/contact/`);
    await expect(page.locator('main')).not.toContainText(/Send Request|Submit Application|أرسل طلبك|أرسل الطلب|أرسل لنا متطلباتك|إرسال الطلب/);
    await page.goto(`/${locale}/careers/`);
    await expect(page.locator('form button')).toHaveText(locale === 'ar' ? 'إرسال الاستفسار' : 'Send Enquiry');
    if (isMobile) {
      const menu = page.getByRole('button', { name: locale === 'ar' ? 'القائمة' : 'Menu', exact: true });
      await expect(menu).toHaveText(locale === 'ar' ? 'القائمة' : 'Menu');
      await menu.click();
      await expect(menu).toHaveAttribute('aria-expanded', 'true');
      await expect(page.locator('header').getByRole('link', { name: locale === 'ar' ? 'اتصل بنا' : 'Contact Us', exact: true }).last()).toBeVisible();
    }
  });
}

for (const locale of ['en','ar'] as const) {
 test(`${locale}: failed delivery retains values and retry reuses request identifier`, async ({page}) => {
  const requests: string[] = [];
  await page.route('**/inaya-enquiry.php', async route => {
   requests.push(route.request().postDataJSON().requestId);
   await route.fulfill({status:requests.length===1 ? 503 : 200, contentType:'application/json',body:JSON.stringify(requests.length===1 ? {ok:false} : {ok:true,reference:'INAYA-QA-RETRY'})});
  });
  await page.goto(`/${locale}/careers/`);
  const form=page.locator('form');
  await form.locator('[name="name"]').fill('Retry QA');
  await form.locator('[name="phone"]').fill('+971500000000');
  await form.locator('button[type="submit"]').click();
  await expect(form.getByRole('alert')).toBeVisible();
  await expect(form.locator('[name="name"]')).toHaveValue('Retry QA');
  await expect(page.getByRole('status')).toHaveCount(0);
  await form.locator('button[type="submit"]').click();
  await expect(page.getByRole('status')).toContainText('INAYA-QA-RETRY');
  expect(requests).toHaveLength(2);
  expect(requests[1]).toBe(requests[0]);
 });
}
