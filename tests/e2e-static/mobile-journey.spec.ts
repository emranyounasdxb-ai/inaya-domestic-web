import {expect,test} from '../browser-fixture';
import type {Locator} from '@playwright/test';
import en from '../../messages/en.json';
import ar from '../../messages/ar.json';

const routes=['','pricing/','contact/','services/monthly-maid-contract/','blog/'];
async function activate(target:Locator,touch:boolean|undefined){
  if(touch)await target.tap();else await target.click();
}
for(const locale of ['en','ar'] as const) {
  for(const route of routes) {
    test(`${locale} respects reduced motion on ${route||'home'}`,async({page})=>{
      await page.setViewportSize({width:390,height:900});
      await page.emulateMedia({reducedMotion:'no-preference'});
      await page.goto(`/${locale}/${route}`);
      await expect(page.locator('html')).toHaveCSS('scroll-behavior','smooth');
      await page.emulateMedia({reducedMotion:'reduce'});
      await expect(page.locator('html')).toHaveCSS('scroll-behavior','auto');
      await page.emulateMedia({reducedMotion:'no-preference'});
      await expect(page.locator('html')).toHaveCSS('scroll-behavior','smooth');
    });
  }

  for(const width of [320,390]) {
    test(`${locale} menu pricing and safe contact journey at ${width}px`,async({page},info)=>{
      const labels=(locale==='en'?en:ar).nav;
      const enquiryRequests:string[]=[];
      await page.route('**/inaya-enquiry.php',route=>{
        enquiryRequests.push(route.request().method());
        return route.abort();
      });
      await page.setViewportSize({width,height:950});
      await page.emulateMedia({reducedMotion:'reduce'});
      await page.goto(`/${locale}/`);
      await page.getByRole('button',{name:locale==='ar'?'رفض التحليلات الاختيارية':'Reject optional analytics',exact:true}).click();
      const menu=page.getByRole('button',{name:locale==='ar'?'القائمة':'Menu',exact:true});
      await activate(menu,info.project.use.hasTouch);await expect(menu).toHaveAttribute('aria-expanded','true');
      await activate(page.locator('header').getByRole('link',{name:labels.pricing,exact:true}),info.project.use.hasTouch);
      await expect(page).toHaveURL(new RegExp(`/${locale}/pricing/$`));
      await expect(menu).toHaveAttribute('aria-expanded','false');
      const comparison=page.getByRole('region',{name:locale==='ar'?'مقارنة الباقات':'Package comparison',exact:true});
      await comparison.focus();await expect(comparison).toBeFocused();
      const scrollBefore=await comparison.evaluate(el=>el.scrollLeft);
      await comparison.press(locale==='ar'?'ArrowLeft':'ArrowRight');
      await comparison.press(locale==='ar'?'ArrowLeft':'ArrowRight');
      await expect.poll(()=>comparison.evaluate(el=>el.scrollLeft)).not.toBe(scrollBefore);
      const bounds=(await comparison.boundingBox())!;
      expect(bounds.x).toBeGreaterThanOrEqual(0);expect(bounds.x+bounds.width).toBeLessThanOrEqual(width+1);
      expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);
      await page.screenshot({path:info.outputPath(`mobile-pricing-${locale}-${width}.png`)});

      await activate(menu,info.project.use.hasTouch);await activate(page.locator('header').getByRole('link',{name:labels.contact,exact:true}),info.project.use.hasTouch);
      await expect(page).toHaveURL(new RegExp(`/${locale}/contact/$`));
      await expect(menu).toHaveAttribute('aria-expanded','false');
      const form=page.locator('form:visible').filter({has:page.locator('textarea[name="message"]')});
      await expect(form).toHaveCount(1);
      await activate(form.getByRole('button',{name:locale==='ar'?'إرسال الاستفسار':'Send Enquiry',exact:true}),info.project.use.hasTouch);
      await expect(form.locator('[aria-invalid="true"]')).toHaveCount(5);
      for(const fieldName of ['name','phone','email','service','message']) {
        const field=form.locator(`[name="${fieldName}"]`);
        await field.focus();await expect(field).toBeFocused();
        const labelled=await field.evaluate(el=>{const id=el.id;return [...document.querySelectorAll('label')].some(label=>label.htmlFor===id)&&Boolean(document.getElementById(el.getAttribute('aria-describedby')??''))});
        expect(labelled).toBe(true);
        const box=(await field.boundingBox())!;
        expect(box.x).toBeGreaterThanOrEqual(0);expect(box.x+box.width).toBeLessThanOrEqual(width+1);
      }
      expect(enquiryRequests,'empty form must validate without sending').toEqual([]);
      expect(await page.locator('a[href="tel:+97167400128"]:visible').count()).toBeGreaterThan(0);
      await expect(page.getByRole('link',{name:locale==='ar'?'تواصل مع عناية عبر واتساب':'WhatsApp INAYA Domestic Workers',exact:true})).toHaveAttribute('href','https://wa.me/971502036767');
      expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);
      await page.screenshot({path:info.outputPath(`mobile-contact-${locale}-${width}.png`)});
    });
  }

  test(`${locale} reduced-motion back-to-top is immediate and separate from WhatsApp`,async({page},info)=>{
    await page.setViewportSize({width:390,height:900});
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.goto(`/${locale}/`);
    await page.getByRole('button',{name:locale==='ar'?'رفض التحليلات الاختيارية':'Reject optional analytics',exact:true}).click();
    await page.keyboard.press('End');
    const top=page.getByTestId('back-to-top');
    await expect(top).toHaveAttribute('aria-hidden','false');
    const a=(await top.boundingBox())!;
    const b=(await page.getByRole('link',{name:locale==='ar'?'تواصل مع عناية عبر واتساب':'WhatsApp INAYA Domestic Workers',exact:true}).boundingBox())!;
    expect(a.x<b.x+b.width&&a.x+a.width>b.x&&a.y<b.y+b.height&&a.y+a.height>b.y).toBe(false);
    await page.screenshot({path:info.outputPath(`mobile-fixed-controls-${locale}.png`)});
    await activate(top,info.project.use.hasTouch);
    const y=await page.evaluate(()=>new Promise<number>(resolve=>requestAnimationFrame(()=>requestAnimationFrame(()=>resolve(scrollY)))));
    expect(y).toBe(0);
  });
}
