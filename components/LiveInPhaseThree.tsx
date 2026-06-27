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

    const copy = isArabic
      ? {
          compare: 'لماذا عناية هي الخيار الصحيح؟',
          compareText: 'نحن لا نوفر خادمة فقط، بل نقدم تجربة توظيف منظمة وموثوقة ومكتملة لا توفرها العديد من الشركات التقليدية.',
          offer: 'ما نقدمه',
          inaya: 'عناية',
          others: 'شركات أخرى',
          promise: 'وعد عناية: نتعامل مع كل أسرة كأنها أسرتنا، وكل تعيين كأنه مسؤوليتنا.',
          trust: 'ثقة. وضوح. عناية.',
          sticky: 'احجز خادمة مقيمة',
          call: 'اتصل الآن',
          rows: [
            ['مراجعة منظمة للاحتياج والاستشارة', 'مشمول', 'غير متوفر غالباً'],
            ['منسق مخصص للأسرة كنقطة اتصال واحدة', 'مشمول', 'غير متاح'],
            ['مرشحات موثقات وذوات خبرة فقط', 'تم التحقق', 'ليس دائماً'],
            ['عملية تحقق من المهارات والخلفية', 'تحقق كامل', 'نادراً'],
            ['مستندات واضحة وهيكل رسوم شفاف', 'شفافية كاملة', 'رسوم مخفية'],
            ['مطابقة حسب نمط حياة الأسرة وروتين المنزل', 'مطابقة شخصية', 'اختيار عشوائي'],
            ['توجيه وتدريب قبل بدء الخدمة', 'متوفر', 'غير متوفر'],
            ['متابعة ودعم بعد بدء الخدمة', 'دعم مستمر', 'لا توجد متابعة'],
            ['ضمان استبدال حسب السياسة', 'حسب الباقة', 'غير مضمون'],
            ['دعم العملاء والمتابعة', 'متاح', 'محدود'],
            ['دعم التأشيرة والخدمات الإدارية', 'إرشاد كامل', 'غير مشمول'],
            ['مساعدة في الهوية والفحص الطبي والتأمين', 'إرشاد متوفر', 'غير متوفر'],
            ['متابعة فترة التجربة', 'متابعة منظمة', 'لا توجد متابعة'],
            ['راحة بال واعتمادية طويلة المدى', 'وعدنا', 'غير مضمونة']
          ]
        }
      : {
          compare: 'Why INAYA is the Right Choice?',
          compareText: 'We go beyond just providing a maid. INAYA delivers a complete, verified and structured hiring experience that many traditional agencies simply do not offer.',
          offer: 'What We Offer',
          inaya: 'INAYA',
          others: 'Other Companies',
          promise: 'INAYA Promise: We treat every family like our own and every placement like our responsibility.',
          trust: 'Trust. Transparency. Care.',
          sticky: 'Book Live-in Maid',
          call: 'Call Now',
          rows: [
            ['Structured requirement review & consultation', 'Included', 'Usually not provided'],
            ['Dedicated family coordinator as single point of contact', 'Included', 'Not available'],
            ['Verified & experienced candidates only', '100% verified', 'Not always verified'],
            ['Skill & background verification process', 'Complete verification', 'Rarely done'],
            ['Clear documents & transparent fee structure', '100% transparent', 'Hidden charges'],
            ['Matching based on family lifestyle & routine', 'Personalized matching', 'Random / limited matching'],
            ['Training & orientation before deployment', 'Provided', 'Not provided'],
            ['Post-arrival support & follow up', 'Ongoing support', 'No follow up'],
            ['Replacement guarantee as per policy', 'Package based', 'Not guaranteed'],
            ['Customer support & family follow-up', 'Available', 'Limited support'],
            ['PRO services & visa processing guidance', 'End-to-end guidance', 'Not included'],
            ['Emirates ID, medical & insurance assistance', 'Assistance provided', 'Not provided'],
            ['Probation period monitoring', 'Monitored', 'Not monitored'],
            ['Long-term reliability & peace of mind', 'Our promise', 'Not assured']
          ]
        };

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          name: isArabic ? 'خدمات الخادمات المقيمات في الإمارات' : 'Live-in Maid Services in UAE',
          serviceType: 'Live-in Maid Services',
          provider: { '@type': 'Organization', name: 'INAYA Domestic Workers', url: baseUrl },
          areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
          url: pageUrl
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${pageUrl}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: isArabic ? 'الرئيسية' : 'Home', item: `${baseUrl}/${locale}` },
            { '@type': 'ListItem', position: 2, name: isArabic ? 'الخدمات' : 'Services', item: `${baseUrl}/${locale}/services` },
            { '@type': 'ListItem', position: 3, name: isArabic ? 'خدمات الخادمات المقيمات' : 'Live-in Maid Services', item: pageUrl }
          ]
        }
      ]
    };

    const schemaTag = document.createElement('script');
    schemaTag.type = 'application/ld+json';
    schemaTag.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaTag);

    const main = document.querySelector('main > div');
    if (!main) return;

    const section = document.createElement('section');
    section.dataset.liveinPhaseThree = 'true';
    section.className = 'livein-phase-three px-4 py-20 sm:px-6 lg:px-10 lg:py-28';
    section.innerHTML = `
      <div class="mx-auto max-w-[1500px]">
        <div class="mb-12 text-center">
          <span class="text-[0.72rem] font-bold uppercase tracking-[0.34em] text-accent-700">${isArabic ? 'المقارنة' : 'Comparison'}</span>
          <h2 class="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-primary-900 sm:text-5xl">${copy.compare}</h2>
          <p class="mx-auto mt-5 max-w-4xl text-base leading-8 text-ink/72 sm:text-lg">${copy.compareText}</p>
          <div class="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-accent-500 to-transparent"></div>
        </div>
        <div class="overflow-hidden rounded-[24px] border border-accent-500/28 bg-white/62 shadow-[0_30px_95px_rgba(7,22,74,0.10)] ring-1 ring-white/70 backdrop-blur-2xl">
          <div class="grid grid-cols-[1.4fr_1fr_1fr] border-b border-primary-900/10 bg-white/72 text-center text-sm font-bold uppercase tracking-[0.12em] text-primary-900">
            <div class="px-4 py-6 text-accent-800">${copy.offer}</div>
            <div class="bg-[linear-gradient(135deg,#c4a45d,#a57d33)] px-4 py-5 text-white"><div class="font-heading text-2xl tracking-[0.12em]">INAYA</div><div class="text-[0.65rem] tracking-normal text-white/82">Domestic Workers</div></div>
            <div class="px-4 py-6">${copy.others}</div>
          </div>
          <div>${copy.rows.map((row, index) => `
            <div class="grid grid-cols-[1.4fr_1fr_1fr] border-b border-primary-900/8 last:border-b-0 bg-white/${index % 2 ? '42' : '58'}">
              <div class="flex items-center gap-4 px-4 py-4 text-sm font-semibold text-ink/84 sm:px-8 sm:text-base"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-500/20 bg-white/70 text-accent-700">${index + 1}</span><span>${row[0]}</span></div>
              <div class="flex items-center justify-center gap-4 border-x border-primary-900/8 px-3 py-4 text-sm font-semibold text-primary-900 sm:text-base"><span class="flex h-7 w-7 items-center justify-center rounded-full bg-[#58ad5d] text-white">✓</span><span>${row[1]}</span></div>
              <div class="flex items-center justify-center gap-4 px-3 py-4 text-sm font-semibold text-ink/72 sm:text-base"><span class="flex h-7 w-7 items-center justify-center rounded-full bg-[#ef4444] text-white">×</span><span>${row[2]}</span></div>
            </div>`).join('')}</div>
        </div>
        <div class="mt-7 grid gap-5 rounded-[22px] border border-accent-500/20 bg-white/58 p-5 shadow-[0_18px_60px_rgba(7,22,74,0.06)] backdrop-blur-xl lg:grid-cols-[1.2fr_1fr] lg:p-6">
          <div class="flex items-center gap-4"><span class="flex h-12 w-12 items-center justify-center rounded-full border border-accent-500/28 bg-white/70 text-2xl text-accent-700">◇</span><p class="text-sm leading-7 text-ink/72"><strong class="text-primary-900">${copy.promise.split(':')[0]}:</strong>${copy.promise.includes(':') ? copy.promise.split(':').slice(1).join(':') : ''}</p></div>
          <div class="flex items-center gap-4 border-accent-500/20 lg:border-s lg:ps-8"><span class="flex h-12 w-12 items-center justify-center rounded-full border border-accent-500/28 bg-white/70 text-2xl text-accent-700">♢</span><div><p class="font-heading text-xl font-bold text-primary-900">${copy.trust}</p><p class="mt-1 text-sm text-ink/58">${isArabic ? 'هذا هو فرق عناية.' : 'That is the INAYA difference.'}</p></div></div>
        </div>
      </div>
    `;

    const finalCta = Array.from(main.querySelectorAll('section')).pop();
    if (finalCta) main.insertBefore(section, finalCta);
    else main.appendChild(section);

    const sticky = document.createElement('div');
    sticky.className = 'livein-sticky-cta fixed bottom-4 left-1/2 z-50 hidden w-[min(92vw,760px)] -translate-x-1/2 rounded-full border border-white/75 bg-white/80 p-2 shadow-[0_18px_65px_rgba(7,22,74,0.18)] ring-1 ring-accent-500/14 backdrop-blur-2xl md:flex';
    sticky.innerHTML = `
      <a href="/${locale}/booking?service=live-in-maid" class="flex-1 rounded-full bg-primary-900 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-white">${copy.sticky}</a>
      <a href="tel:+97167400128" class="rounded-full border border-accent-500/35 bg-white/70 px-6 py-3 text-sm font-bold text-primary-900">${copy.call}</a>
    `;
    document.body.appendChild(sticky);

    const revealItems = document.querySelectorAll('main section, .livein-phase-three [class*=rounded]');
    revealItems.forEach((el, i) => {
      const node = el as HTMLElement;
      node.style.opacity = '0';
      node.style.transform = 'translateY(18px)';
      node.style.transition = `opacity .65s ease ${Math.min(i * 0.02, 0.22)}s, transform .65s ease ${Math.min(i * 0.02, 0.22)}s`;
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const node = entry.target as HTMLElement;
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          io.unobserve(node);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((el) => io.observe(el));
  }, []);

  return null;
}
