import {expect,test} from '../browser-fixture';
import fixture from '../fixtures/editorial-scope-20261031.json';

const examples=['monthly-maid-service-ajman-commitment-budget','uae-domestic-worker-rights-employer-duties','inaya-office-staff-careers-ajman','documents-for-domestic-worker-enquiry'];
for(const slug of examples)for(const lang of ['en','ar'] as const)for(const width of [390,1440]) {
  test(`${lang} ${slug} publication context at ${width}px`,async({page},info)=>{
    await page.setViewportSize({width,height:950});
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.goto(`/${lang}/blog/${slug}/`);
    await page.getByRole('button',{name:lang==='ar'?'رفض التحليلات الاختيارية':'Reject optional analytics',exact:true}).click();
    await page.keyboard.press('Tab');
    const note=page.locator('[data-editorial-scope="true"]');
    await expect(note).toHaveCount(1);
    const careers=slug==='inaya-office-staff-careers-ajman';const copy=fixture.copy[lang];
    await expect(note).toContainText(careers?copy.careersBody:copy.body);
    await expect(page.locator('[data-guide="attribution"]')).toContainText(lang==='ar'?'آخر تحديث':'Updated');
    const link=note.getByRole('link',{name:careers?copy.careersLink:copy.link,exact:true});
    await expect(link).toHaveAttribute('href',`/${lang}/contact/`);
    await link.focus();await expect(link).toBeFocused();await expect(link).toHaveCSS('outline-style','solid');
    await expect(link).toBeInViewport({ratio:1});
    const box=(await link.boundingBox())!;expect(box.x).toBeGreaterThanOrEqual(0);expect(box.x+box.width).toBeLessThanOrEqual(width+1);
    expect(box.y).toBeGreaterThanOrEqual(0);expect(box.y+box.height).toBeLessThanOrEqual(951);
    expect(box.height).toBeGreaterThanOrEqual(44);
    const whatsapp=await page.getByRole('link',{name:lang==='ar'?'تواصل مع عناية عبر واتساب':'WhatsApp INAYA Domestic Workers',exact:true}).boundingBox();
    if(whatsapp)expect(box.x<whatsapp.x+whatsapp.width && box.x+box.width>whatsapp.x && box.y<whatsapp.y+whatsapp.height && box.y+box.height>whatsapp.y).toBe(false);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);
    const article=(await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(raw=>JSON.parse(raw)['@graph']??[]).find(node=>node['@type']==='Article');
    const dates=await page.locator('[data-guide="attribution"] time').evaluateAll(nodes=>nodes.map(node=>node.getAttribute('datetime')));
    expect(dates).toEqual([article.datePublished,article.dateModified]);
    await page.screenshot({path:info.outputPath(`editorial-${slug}-${lang}-${width}.png`)});
  });
}
