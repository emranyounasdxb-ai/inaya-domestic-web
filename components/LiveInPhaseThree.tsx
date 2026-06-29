'use client';

import { useEffect } from 'react';

export default function LiveInPhaseThree() {
  useEffect(() => {
    const path = window.location.pathname;
    const isLiveIn = path.includes('/services/live-in-maid');
    if (!isLiveIn || document.querySelector('[data-livein-phase-three]')) return;

    const isArabic = path.startsWith('/ar');
    const locale = isArabic ? 'ar' : 'en';
    const baseUrl = 'https://inayadomestic.ae';
    const pageUrl = `${baseUrl}/${locale}/services/live-in-maid`;

    const copy = isArabic ? {
      compare: 'لماذا عناية هي الخيار الصحيح؟', compareText: 'تجربة توظيف منظمة وموثوقة ومكتملة لا توفرها العديد من الشركات التقليدية.', offer: 'ما نقدمه', inaya: 'عناية', others: 'شركات أخرى', promise: 'وعد عناية: نتعامل مع كل أسرة كأنها أسرتنا، وكل تعيين كأنه مسؤوليتنا.', trust: 'ثقة. وضوح. عناية.', sticky: 'احجز خادمة مقيمة', call: 'اتصل الآن',
      rows: [['مراجعة منظمة للاحتياج والاستشارة','مشمول','غير متوفر غالباً'],['منسق مخصص للأسرة كنقطة اتصال واحدة','مشمول','غير متاح'],['مرشحات موثقات وذوات خبرة فقط','تم التحقق','ليس دائماً'],['عملية تحقق من المهارات والخلفية','تحقق كامل','نادراً'],['مستندات واضحة وهيكل رسوم شفاف','شفافية كاملة','رسوم مخفية'],['مطابقة حسب نمط حياة الأسرة وروتين المنزل','مطابقة شخصية','اختيار عشوائي'],['توجيه وتدريب قبل بدء الخدمة','متوفر','غير متوفر'],['متابعة ودعم بعد بدء الخدمة','دعم مستمر','لا توجد متابعة'],['ضمان استبدال حسب السياسة','حسب الباقة','غير مضمون'],['دعم العملاء والمتابعة','متاح','محدود'],['دعم التأشيرة والخدمات الإدارية','إرشاد كامل','غير مشمول'],['مساعدة في الهوية والفحص الطبي والتأمين','إرشاد متوفر','غير متوفر'],['متابعة فترة التجربة','متابعة منظمة','لا توجد متابعة'],['راحة بال واعتمادية طويلة المدى','وعدنا','غير مضمونة']]
    } : {
      compare: 'Why INAYA is the Right Choice?', compareText: 'A structured, verified and transparent hiring experience that many traditional agencies simply do not offer.', offer: 'What We Offer', inaya: 'INAYA', others: 'Other Companies', promise: 'INAYA Promise: We treat every family like our own and every placement like our responsibility.', trust: 'Trust. Transparency. Care.', sticky: 'Book Live-in Maid', call: 'Call Now',
      rows: [['Structured requirement review & consultation','Included','Usually not provided'],['Dedicated family coordinator as single point of contact','Included','Not available'],['Verified & experienced candidates only','100% verified','Not always verified'],['Skill & background verification process','Complete verification','Rarely done'],['Clear documents & transparent fee structure','100% transparent','Hidden charges'],['Matching based on family lifestyle & routine','Personalized matching','Random / limited matching'],['Training & orientation before deployment','Provided','Not provided'],['Post-arrival support & follow up','Ongoing support','No follow up'],['Replacement guarantee as per policy','Package based','Not guaranteed'],['Customer support & family follow-up','Available','Limited support'],['PRO services & visa processing guidance','End-to-end guidance','Not included'],['Emirates ID, medical & insurance assistance','Assistance provided','Not provided'],['Probation period monitoring','Monitored','Not monitored'],['Long-term reliability & peace of mind','Our promise','Not assured']]
    };

    const schemaTag = document.createElement('script');
    schemaTag.type = 'application/ld+json';
    schemaTag.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': [{ '@type': 'Service', '@id': `${pageUrl}#service`, name: isArabic ? 'خدمات الخادمات المقيمات في الإمارات' : 'Live-in Maid Services in UAE', serviceType: 'Live-in Maid Services', provider: { '@type': 'Organization', name: 'INAYA Domestic Workers', url: baseUrl }, areaServed: { '@type': 'Country', name: 'United Arab Emirates' }, url: pageUrl }, { '@type': 'BreadcrumbList', '@id': `${pageUrl}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: isArabic ? 'الرئيسية' : 'Home', item: `${baseUrl}/${locale}` }, { '@type': 'ListItem', position: 2, name: isArabic ? 'الخدمات' : 'Services', item: `${baseUrl}/${locale}/services` }, { '@type': 'ListItem', position: 3, name: isArabic ? 'خدمات الخادمات المقيمات' : 'Live-in Maid Services', item: pageUrl }] }] });
    document.head.appendChild(schemaTag);

    const main = document.querySelector('main > div');
    if (!main) return;

    const section = document.createElement('section');
    section.dataset.liveinPhaseThree = 'true';
    section.className = 'livein-phase-three px-4 py-12 sm:px-6 lg:px-10';
    section.innerHTML = `
      <div class="mx-auto max-w-[1180px]">
        <div class="mb-7 text-center">
          <span class="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-accent-700">${isArabic ? 'المقارنة' : 'Comparison'}</span>
          <h2 class="mt-3 font-heading text-[1.75rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[2.25rem]">${copy.compare}</h2>
          <p class="mx-auto mt-3 max-w-3xl text-[0.82rem] leading-6 text-ink/70">${copy.compareText}</p>
          <div class="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-accent-500 to-transparent"></div>
        </div>
        <div class="overflow-hidden rounded-[15px] border border-primary-900/10 bg-white shadow-[0_14px_40px_rgba(7,22,74,0.07)]">
          <div class="grid grid-cols-[1.35fr_0.9fr_0.9fr] border-b border-primary-900/10 text-center text-[0.68rem] font-bold uppercase tracking-[0.12em] text-primary-900">
            <div class="px-3 py-3 bg-[#f8f8f6]">${copy.offer}</div>
            <div class="bg-[linear-gradient(135deg,#c6a85b,#a98236)] px-3 py-2 text-white"><div class="font-heading text-lg tracking-[0.12em]">INAYA</div><div class="text-[0.55rem] leading-none text-white/85">Domestic Workers</div></div>
            <div class="px-3 py-3 bg-[#f8f8f6]">${copy.others}</div>
          </div>
          <div>${copy.rows.map((row, index) => `<div class="grid grid-cols-[1.35fr_0.9fr_0.9fr] border-b border-primary-900/8 last:border-b-0 text-[0.72rem] font-semibold text-primary-900"><div class="flex items-center gap-3 px-3 py-2"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent-500/22 bg-white text-[0.68rem] text-accent-700">${index + 1}</span><span>${row[0]}</span></div><div class="flex items-center justify-center gap-3 border-x border-primary-900/8 px-2 py-2"><span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#52ae5f] text-white">✓</span><span>${row[1]}</span></div><div class="flex items-center justify-center gap-3 px-2 py-2"><span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#ef4444] text-white">×</span><span>${row[2]}</span></div></div>`).join('')}</div>
        </div>
        <div class="mt-4 grid gap-3 rounded-[15px] border border-accent-500/18 bg-white p-4 shadow-[0_12px_32px_rgba(7,22,74,0.055)] lg:grid-cols-[1.2fr_1fr]">
          <div class="flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/25 bg-white text-accent-700">◇</span><p class="text-[0.78rem] leading-5 text-ink/72"><strong class="text-primary-900">${copy.promise.split(':')[0]}:</strong>${copy.promise.includes(':') ? copy.promise.split(':').slice(1).join(':') : ''}</p></div>
          <div class="flex items-center gap-3 border-accent-500/18 lg:border-s lg:ps-5"><span class="flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/25 bg-white text-accent-700">♢</span><div><p class="font-heading text-base font-bold text-primary-900">${copy.trust}</p><p class="text-[0.72rem] text-ink/58">${isArabic ? 'هذا هو فرق عناية.' : 'That is the INAYA difference.'}</p></div></div>
        </div>
      </div>`;

    const finalCta = Array.from(main.querySelectorAll('section')).pop();
    if (finalCta) main.insertBefore(section, finalCta); else main.appendChild(section);

    const sticky = document.createElement('div');
    sticky.className = 'livein-sticky-cta fixed bottom-4 left-1/2 z-50 hidden w-[min(92vw,760px)] -translate-x-1/2 rounded-full border border-white/75 bg-white/80 p-2 shadow-[0_18px_65px_rgba(7,22,74,0.18)] ring-1 ring-accent-500/14 backdrop-blur-2xl md:flex';
    sticky.innerHTML = `<a href="/${locale}/booking?service=live-in-maid" class="flex-1 rounded-full bg-primary-900 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-white">${copy.sticky}</a><a href="tel:+97167400128" class="rounded-full border border-accent-500/35 bg-white/70 px-6 py-3 text-sm font-bold text-primary-900">${copy.call}</a>`;
    document.body.appendChild(sticky);

    document.querySelectorAll<HTMLElement>('main section, main section *').forEach((node) => {
      node.style.opacity = '1';
      node.style.filter = 'none';
    });
  }, []);

  return null;
}
