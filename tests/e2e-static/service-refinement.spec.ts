import {expect,test} from '../browser-fixture';
import {serviceSupportBenefits} from '../../lib/service-support-benefits';
const articleTitles={
 en:[['housemaid-visa-ajman-application-readiness-ledger','Housemaid Visa in Ajman: Documents and Application Checklist'],['housemaid-recruitment-ajman-candidate-evidence-cards','Housemaid Recruitment in Ajman: Interviews and Candidate Comparison']],
 ar:[['housemaid-visa-ajman-application-readiness-ledger','تأشيرة خادمة في عجمان: المستندات وخطوات الطلب'],['housemaid-recruitment-ajman-candidate-evidence-cards','استقدام خادمة في عجمان: المقابلة ومقارنة المرشحات']]
};
for(const lang of ['en','ar'] as const){
 test(`${lang}: all31 service benefit sections are specific and responsive`,async({page},testInfo)=>{
  test.setTimeout(180_000);
  for(const[slug,benefits]of Object.entries(serviceSupportBenefits)){
   const response=await page.goto(`/${lang}/services/${slug}/`);expect(response?.status()).toBe(200);
   const reject=page.getByRole('button',{name:lang==='ar'?'رفض التحليلات الاختيارية':'Reject optional analytics',exact:true});if(await reject.isVisible())await reject.click();
   const section=page.locator(`[data-service-benefits="${slug}"]`);await section.scrollIntoViewIfNeeded();await expect(section.locator('li')).toHaveCount(3);
   for(const item of benefits){await expect(section.getByRole('heading',{name:item.title[lang],exact:true})).toBeVisible();await expect(section).toContainText(item.text[lang]);}
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
   if(['part-time-maid','nanny','maid-visa'].includes(slug)){await page.evaluate(()=>document.fonts.ready);await section.screenshot({path:testInfo.outputPath(`service-benefit-${lang}-${slug}.png`)});}
  }
 });
 test(`${lang}: visa and recruitment articles use simple headings at the original URLs`,async({page})=>{
  for(const[slug,title]of articleTitles[lang]){
   const response=await page.goto(`/${lang}/blog/${slug}/`);expect(response?.status()).toBe(200);await expect(page.getByRole('heading',{level:1})).toHaveText(title);
   await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href',`https://inayadomestic.ae/${lang}/blog/${slug}/`);
   await expect(page.locator('article table')).toHaveCount(2);await expect(page.locator('article [data-keyword-visual="flow"]')).toHaveCount(1);
  }
 });
}
