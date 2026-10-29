import { expect, test } from '../browser-fixture';
for (const locale of ['en','ar'] as const) {
  test(`${locale}: office careers keeps all eight roles, application contacts and translation accessible`, async ({ page }) => {
    const slug = 'inaya-office-staff-careers-ajman';
    await page.goto(`/${locale}/blog/`);
    const reject=page.getByRole('button',{name:locale==='ar'?'رفض التحليلات الاختيارية':'Reject optional analytics'});
    if(await reject.isVisible()) await reject.click();
    await page.locator(`main article[data-blog-guide="${slug}"] a`).first().click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/blog/${slug}/$`));
    await expect(page.locator('main article h2').filter({hasText:/^\d+\. /})).toHaveCount(8);
    await expect(page.locator('main article')).toContainText('info@inayadomestic.ae');
    await expect(page.locator('main article a[href="https://wa.me/971502036767"]')).toHaveCount(1);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    const other=locale==='ar'?'en':'ar';
    await page.locator(`header a[href="/${other}/blog/${slug}/"]`).click();
    await expect(page.locator('main article h2').filter({hasText:/^\d+\. /})).toHaveCount(8);
    await expect(page.locator('html')).toHaveAttribute('lang',other);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href',`https://inayadomestic.ae/${other}/blog/${slug}/`);
  });
}
