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
          compare: 'لماذا عناية أفضل للأسر؟',
          compareText: 'مقارنة واضحة بين تجربة عناية المنظمة وتجربة التوظيف التقليدية غير الواضحة.',
          inaya: 'عناية',
          others: 'خيارات أخرى',
          items: ['مراجعة منظمة للاحتياج', 'منسق مخصص للأسرة', 'توضيح المستندات والرسوم', 'مطابقة حسب روتين المنزل', 'دعم بعد بدء الخدمة'],
          cta: 'احجز استشارة الآن',
          sticky: 'احجز خادمة مقيمة',
          call: 'اتصل الآن'
        }
      : {
          compare: 'Why INAYA vs Other Agencies?',
          compareText: 'A clear comparison between INAYA’s structured family experience and a typical unorganized hiring process.',
          inaya: 'INAYA',
          others: 'Others',
          items: ['Structured requirement review', 'Dedicated family coordinator', 'Clear documents and fees', 'Matching by household routine', 'Aftercare support guidance'],
          cta: 'Book Consultation Now',
          sticky: 'Book Live-in Maid',
          call: 'Call Now'
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
    section.className = 'livein-phase-three px-6 py-20 lg:px-10 lg:py-28';
    section.innerHTML = `
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <span class="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-accent-700">${isArabic ? 'المقارنة' : 'Comparison'}</span>
          <h2 class="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-primary-900 sm:text-5xl">${copy.compare}</h2>
          <p class="mx-auto mt-5 max-w-3xl text-base leading-8 text-ink/64">${copy.compareText}</p>
          <div class="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-accent-500 to-transparent"></div>
        </div>
        <div class="grid gap-6 lg:grid-cols-2">
          <div class="relative overflow-hidden rounded-[32px] border border-white/75 bg-white/68 p-8 shadow-[0_30px_90px_rgba(7,22,74,0.09)] ring-1 ring-accent-500/12 backdrop-blur-2xl">
            <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/12 blur-2xl"></div>
            <h3 class="font-heading text-3xl font-bold text-primary-900">${copy.inaya}</h3>
            <div class="mt-8 space-y-4">${copy.items.map((x) => `<div class="flex items-center gap-4 rounded-2xl border border-accent-500/12 bg-white/62 p-4 text-sm font-semibold text-ink/72"><span class="flex h-7 w-7 items-center justify-center rounded-full bg-accent-500/16 text-accent-700">✓</span><span>${x}</span></div>`).join('')}</div>
          </div>
          <div class="rounded-[32px] border border-white/60 bg-white/35 p-8 shadow-[0_18px_60px_rgba(7,22,74,0.045)] backdrop-blur-xl">
            <h3 class="font-heading text-3xl font-bold text-primary-900/72">${copy.others}</h3>
            <div class="mt-8 space-y-4">${copy.items.map((x) => `<div class="flex items-center gap-4 rounded-2xl border border-primary-900/8 bg-white/35 p-4 text-sm font-semibold text-ink/48"><span class="flex h-7 w-7 items-center justify-center rounded-full bg-primary-900/8 text-primary-900/38">–</span><span>${x}</span></div>`).join('')}</div>
          </div>
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
