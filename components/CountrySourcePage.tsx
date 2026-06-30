import Link from 'next/link';

type Lang = 'en' | 'ar';

type Country = {
  code: string;
  name: { en: string; ar: string };
  text: { en: string; ar: string };
  points: { en: string[]; ar: string[] };
};

const countries: Country[] = [
  { code: 'lk', name: { en: 'Sri Lanka', ar: 'سريلانكا' }, text: { en: 'Profiles may be available from Sri Lanka. Each profile is reviewed according to home duties, documents and family expectations.', ar: 'قد تتوفر ملفات من سريلانكا. تتم مراجعة كل ملف حسب مهام المنزل والمستندات وتوقعات الأسرة.' }, points: { en: ['Home duties', 'Documents', 'Family fit'], ar: ['مهام المنزل', 'المستندات', 'ملاءمة الأسرة'] } },
  { code: 'np', name: { en: 'Nepal', ar: 'نيبال' }, text: { en: 'Profiles may be available from Nepal and are matched according to experience, schedule and household needs.', ar: 'قد تتوفر ملفات من نيبال ويتم مطابقتها حسب الخبرة والجدول واحتياج المنزل.' }, points: { en: ['Experience', 'Schedule', 'Duties'], ar: ['الخبرة', 'الجدول', 'المهام'] } },
  { code: 'mm', name: { en: 'Myanmar', ar: 'ميانمار' }, text: { en: 'Profiles may be available from Myanmar depending on current availability, documents and service requirements.', ar: 'قد تتوفر ملفات من ميانمار حسب التوفر الحالي والمستندات ومتطلبات الخدمة.' }, points: { en: ['Availability', 'Documents', 'Service fit'], ar: ['التوفر', 'المستندات', 'ملاءمة الخدمة'] } },
  { code: 'ph', name: { en: 'Philippines', ar: 'الفلبين' }, text: { en: 'Profiles may be available from the Philippines. Every profile is reviewed individually before recommendation.', ar: 'قد تتوفر ملفات من الفلبين. تتم مراجعة كل ملف بشكل فردي قبل الترشيح.' }, points: { en: ['Profile review', 'Document guidance', 'Family fit'], ar: ['مراجعة الملف', 'إرشاد المستندات', 'ملاءمة الأسرة'] } },
  { code: 'in', name: { en: 'India', ar: 'الهند' }, text: { en: 'Profiles may be available from India for families that need guided profile matching and clear process support.', ar: 'قد تتوفر ملفات من الهند للأسر التي تحتاج مطابقة موجهة ودعماً واضحاً للإجراءات.' }, points: { en: ['Profile matching', 'Process support', 'Contact'], ar: ['مطابقة الملف', 'دعم الإجراءات', 'التواصل'] } },
  { code: 'bd', name: { en: 'Bangladesh', ar: 'بنغلاديش' }, text: { en: 'Profiles may be available from Bangladesh and are reviewed by duties, documents, communication and family routine.', ar: 'قد تتوفر ملفات من بنغلاديش وتتم مراجعتها حسب المهام والمستندات والتواصل وروتين الأسرة.' }, points: { en: ['Duties', 'Communication', 'Routine'], ar: ['المهام', 'التواصل', 'الروتين'] } },
  { code: 'et', name: { en: 'Ethiopia', ar: 'إثيوبيا' }, text: { en: 'Profiles may be available from Ethiopia based on current availability, household needs and service coordination.', ar: 'قد تتوفر ملفات من إثيوبيا حسب التوفر الحالي واحتياج المنزل وتنسيق الخدمة.' }, points: { en: ['Availability', 'Household needs', 'Guidance'], ar: ['التوفر', 'احتياج المنزل', 'الإرشاد'] } },
  { code: 'ke', name: { en: 'Kenya', ar: 'كينيا' }, text: { en: 'Profiles may be available from Kenya. Final recommendation is based on the individual profile and family expectations.', ar: 'قد تتوفر ملفات من كينيا. الترشيح النهائي يعتمد على الملف الفردي وتوقعات الأسرة.' }, points: { en: ['Profile fit', 'Communication', 'Follow-up'], ar: ['ملاءمة الملف', 'التواصل', 'المتابعة'] } },
  { code: 'gh', name: { en: 'Ghana', ar: 'غانا' }, text: { en: 'Profiles may be available from Ghana and are matched after reviewing documents, duties and family suitability.', ar: 'قد تتوفر ملفات من غانا وتتم مطابقتها بعد مراجعة المستندات والمهام وملاءمة الأسرة.' }, points: { en: ['Documents', 'Duties', 'Suitability'], ar: ['المستندات', 'المهام', 'الملاءمة'] } },
  { code: 'ug', name: { en: 'Uganda', ar: 'أوغندا' }, text: { en: 'Profiles may be available from Uganda. Suitability is reviewed through duties, documents and availability.', ar: 'قد تتوفر ملفات من أوغندا. تتم مراجعة الملاءمة حسب المهام والمستندات والتوفر.' }, points: { en: ['Duties', 'Documents', 'Availability'], ar: ['المهام', 'المستندات', 'التوفر'] } },
  { code: 'sl', name: { en: 'Sierra Leone', ar: 'سيراليون' }, text: { en: 'Profiles may be available from Sierra Leone depending on current availability, service scope and documentation.', ar: 'قد تتوفر ملفات من سيراليون حسب التوفر الحالي ونطاق الخدمة والمستندات.' }, points: { en: ['Availability', 'Service scope', 'Documents'], ar: ['التوفر', 'نطاق الخدمة', 'المستندات'] } },
  { code: 'id', name: { en: 'Indonesia', ar: 'إندونيسيا' }, text: { en: 'Profiles may be available from Indonesia depending on current availability and service requirements.', ar: 'قد تتوفر ملفات من إندونيسيا حسب التوفر الحالي ومتطلبات الخدمة.' }, points: { en: ['Service scope', 'Availability', 'Home routine'], ar: ['نطاق الخدمة', 'التوفر', 'روتين المنزل'] } }
];

const copy = {
  en: {
    badge: 'Domestic Worker Source Countries',
    title: 'Countries We Source Domestic Workers From in UAE',
    lead: 'Explore country options with INAYA through a clear, respectful and profile-first consultation process for UAE families.',
    introTitle: 'A better way to compare source countries',
    intro: 'Country preference can help start the search, but the right decision should be based on the individual profile, experience, documents, communication, availability and duties required at home.',
    cardsTitle: 'Country profile cards',
    processTitle: 'How INAYA guides the selection',
    steps: ['Home and family requirement review', 'Preferred communication and duties discussion', 'Available country options explained', 'Profile and document guidance', 'Contact and next-step support'],
    ctaTitle: 'Need help choosing the right profile?',
    ctaText: 'Contact INAYA today for a guided country and profile consultation.'
  },
  ar: {
    badge: 'الدول التي نوفر منها العمالة المنزلية',
    title: 'الدول التي نوفر منها العمالة المنزلية في الإمارات',
    lead: 'استكشف خيارات الدول مع عناية من خلال استشارة واضحة ومحترمة تعتمد على الملف الفردي أولاً للأسر في الإمارات.',
    introTitle: 'طريقة أفضل لمقارنة دول المصدر',
    intro: 'تفضيل الدولة قد يساعد في بداية البحث، لكن القرار الصحيح يجب أن يعتمد على الملف الفردي والخبرة والمستندات والتواصل والتوفر والمهام المطلوبة في المنزل.',
    cardsTitle: 'بطاقات الدول والملفات',
    processTitle: 'كيف ترشدك عناية في الاختيار؟',
    steps: ['مراجعة احتياج المنزل والأسرة', 'مناقشة التواصل والمهام المطلوبة', 'شرح خيارات الدول المتاحة', 'إرشاد الملفات والمستندات', 'التواصل ودعم الخطوات التالية'],
    ctaTitle: 'هل تحتاج مساعدة في اختيار الملف المناسب؟',
    ctaText: 'تواصل مع عناية اليوم للحصول على استشارة موجهة للدولة والملف المناسب.'
  }
};

export default function CountrySourcePage({ locale }: { locale: string }) {
  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const t = copy[lang];
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-primary-900">
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-accent-500/25 bg-white/80 px-4 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.20em] text-accent-700">{t.badge}</span>
            <h1 className="mt-5 font-heading text-[2.25rem] font-bold leading-[1.05] tracking-[-0.055em] sm:text-[3.45rem]">{t.title}</h1>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-primary-900/72">{t.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3"><Link href={`/${locale}/booking?service=countries-we-source-from`} className="rounded-full bg-primary-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">{lang === 'ar' ? 'احجز استشارة' : 'Book Consultation'}</Link><Link href={`/${locale}/contact`} className="rounded-full border border-accent-500/30 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em]">{lang === 'ar' ? 'تواصل معنا' : 'Contact INAYA'}</Link></div>
          </div>
          <div className="rounded-[28px] border border-white/80 bg-white/70 p-6 shadow-[0_22px_60px_rgba(7,22,74,0.08)]"><h2 className="font-heading text-2xl font-bold">{t.introTitle}</h2><p className="mt-4 text-sm leading-7 text-primary-900/70">{t.intro}</p></div>
        </div>
      </section>
      <section className="px-6 py-10 lg:px-10"><div className="mx-auto max-w-6xl"><h2 className="text-center font-heading text-3xl font-bold tracking-[-0.04em]">{t.cardsTitle}</h2><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{countries.map((country) => <article key={country.name.en} className="rounded-[24px] border border-white/80 bg-white/80 p-5 shadow-[0_18px_48px_rgba(7,22,74,0.06)]"><div className="flex items-center gap-3"><span className="flex h-12 w-16 overflow-hidden rounded-2xl bg-white p-1 shadow-inner"><img src={`https://flagcdn.com/w80/${country.code}.png`} alt={`${country.name[lang]} flag`} className="h-full w-full rounded-xl object-cover" loading="lazy" /></span><h3 className="font-heading text-xl font-bold">{country.name[lang]}</h3></div><p className="mt-4 text-sm leading-6 text-primary-900/70">{country.text[lang]}</p><div className="mt-4 flex flex-wrap gap-2">{country.points[lang].map((point) => <span key={point} className="rounded-full border border-accent-500/20 bg-accent-50/60 px-3 py-1 text-[0.68rem] font-bold text-primary-900/75">{point}</span>)}</div></article>)}</div></div></section>
      <section className="px-6 py-10 lg:px-10"><div className="mx-auto max-w-6xl rounded-[28px] border border-white/80 bg-white/75 p-7 shadow-[0_18px_48px_rgba(7,22,74,0.06)]"><h2 className="text-center font-heading text-3xl font-bold tracking-[-0.04em]">{t.processTitle}</h2><div className="mt-6 grid gap-3 md:grid-cols-5">{t.steps.map((step, index) => <div key={step} className="rounded-2xl bg-[#fbfaf7] p-4 text-center"><div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-xs font-bold text-white">{index + 1}</div><p className="text-xs font-semibold leading-5 text-primary-900/75">{step}</p></div>)}</div></div></section>
      <section className="px-6 py-12 lg:px-10"><div className="mx-auto max-w-3xl rounded-[28px] border border-white/80 bg-white/80 p-8 text-center shadow-[0_18px_55px_rgba(7,22,74,0.07)]"><h2 className="font-heading text-2xl font-bold">{t.ctaTitle}</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-primary-900/70">{t.ctaText}</p><Link href={`/${locale}/contact`} className="mt-6 inline-flex rounded-full bg-primary-900 px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">{lang === 'ar' ? 'تواصل مع عناية' : 'Contact INAYA'}</Link></div></section>
    </main>
  );
}
