import Link from 'next/link';

type PageProps = {
  params: {
    locale: string;
  };
};

export default function ServicesPage({ params: { locale } }: PageProps) {
  const isArabic = locale === 'ar';

  const copy = {
    badge: isArabic ? 'مرخص ومنظم في دولة الإمارات' : 'MOHRE Licensed & Regulated',
    title: isArabic ? 'إعادة تعريف التميز في الخدمات المنزلية' : 'Domestic Excellence Reimagined',
    subtitle: isArabic
      ? 'اختر الدعم المنزلي المناسب لأسرتك. تقدم عناية خدمات منزلية موثوقة ومنظمة للعائلات في جميع أنحاء الإمارات.'
      : 'Choose the right home support for your household. INAYA delivers trusted and organized domestic worker services for families across the UAE.',
    coreTitle: isArabic ? 'خدماتنا الأساسية' : 'Our Core Services',
    coreSub: isArabic ? 'حلول عمالة منزلية مصممة لتناسب أسلوب حياتك.' : 'Tailored domestic staffing solutions to support your everyday living.',
    supportTitle: isArabic ? 'الخدمات الإدارية والدعم' : 'Administrative & Support Services',
    supportSub: isArabic ? 'متابعة واضحة للإجراءات والمستندات والدعم المطلوب.' : 'Clear support for staffing requirements, documents and next steps.',
    standardTitle: isArabic ? 'معيار عناية' : 'The INAYA Standard',
    standardText: isArabic
      ? 'كل خدمة من عناية مبنية على تواصل واضح، متابعة منظمة، وتجربة مريحة للأسرة.'
      : 'Every INAYA service is built around clear communication, organized follow-up and a calmer household experience.',
    addTitle: isArabic ? 'إضافات مطلوبة كثيراً' : 'Frequently Requested Add-ons',
    addSub: isArabic ? 'خدمات إضافية يمكن تنسيقها حسب احتياج المنزل.' : 'Additional services that can be coordinated around your household needs.',
    bespokeLabel: isArabic ? 'الحل المتكامل' : 'The Ultimate Solution',
    bespokeTitle: isArabic ? 'إدارة منزلية مخصصة' : 'Bespoke Household Management',
    bespokeText: isArabic
      ? 'إلى جانب الخدمات الفردية، يمكن لعناية تنسيق باقات دعم منزلي متكاملة تناسب متطلبات الأسرة.'
      : 'Beyond individual services, INAYA can coordinate tailored household support packages that fit your lifestyle and family requirements.',
    consult: isArabic ? 'تحدث مع مستشار' : 'Consult an Advisor',
    learnMore: isArabic ? 'اعرف المزيد' : 'Learn More',
    viewAll: isArabic ? 'عرض كل الخدمات' : 'View All Services'
  };

  const stats = [
    { value: '2%', label: isArabic ? 'اختيار دقيق' : 'Rigorous Selection' },
    { value: '100%', label: isArabic ? 'تحقق من الخلفية' : 'Background Verified' },
    { value: '24/7', label: isArabic ? 'دعم ومتابعة' : 'Concierge Support' }
  ];

  const coreServices = isArabic
    ? [
        { icon: '⌂', slug: 'live-in-maid', label: 'رعاية أساسية للمنزل', title: 'خدمات الخادمات المقيمات وغير المقيمات', text: 'عاملات محترفات لخدمة المنزل بشكل مقيم أو وفق جدول واضح للحفاظ على ترتيب وراحة منزلك.', cta: 'استكشف خدمات الخادمات' },
        { icon: '◷', slug: 'full-time-maid', label: 'حلول جدولة مرنة', title: 'توظيف بدوام كامل وجزئي', text: 'حلول توظيف مرنة تناسب روتين الأسرة وتوفر الدعم المطلوب في الوقت المناسب.', cta: 'استكشف خيارات التوظيف' },
        { icon: '♧', slug: 'nanny', label: 'رعاية الأطفال', title: 'خدمات المربيات وجليسات الأطفال', text: 'مربيات محترفات يقدمن بيئة آمنة وهادئة ومناسبة لرعاية الأطفال.', cta: 'استكشف خدمات المربيات' },
        { icon: '◌', slug: 'newborn-care', label: 'دعم متخصص للمواليد', title: 'خدمات رعاية المواليد', text: 'رعاية متخصصة للمواليد ودعم للأهل خلال الأشهر الأولى باهتمام واحتراف.', cta: 'استكشف رعاية المواليد' },
        { icon: '♨', slug: 'home-cooking', label: 'طعام منزلي راق', title: 'الطبخ المنزلي والشيف الخاص', text: 'طهاة مهرة يقدمون وجبات منزلية وقوائم مخصصة تناسب ذوق الأسرة.', cta: 'استكشف خدمات الطبخ' },
        { icon: '♡', slug: 'elder-care', label: 'رعاية كبار السن', title: 'رعاية المسنين والمرافقة', text: 'رعاية محترمة ورفقة إنسانية لكبار السن مع التركيز على الراحة والسلامة.', cta: 'استكشف رعاية المسنين' }
      ]
    : [
        { icon: '⌂', slug: 'live-in-maid', label: 'Most Essential Care For Your Home', title: 'Live-in & Live-out Maid Services', text: 'Dedicated professionals integrated into your household or working on a defined schedule to maintain daily comfort.', cta: 'Explore Maid Services' },
        { icon: '◷', slug: 'full-time-maid', label: 'Tailored Scheduling Solutions', title: 'Full-time & Part-time Hiring', text: 'Flexible hiring solutions designed around your routine, with reliable support exactly when you need it.', cta: 'Explore Flexible Hiring' },
        { icon: '♧', slug: 'nanny', label: 'Nurturing Childcare Experts', title: 'Nanny & Babysitting Services', text: 'Compassionate childcare professionals providing safe and engaging support for your children.', cta: 'Explore Nanny Services' },
        { icon: '◌', slug: 'newborn-care', label: 'Specialized Infant Support', title: 'Newborn Care Specialists', text: 'Specialist support for new parents and newborns during the important early months.', cta: 'Explore Newborn Care' },
        { icon: '♨', slug: 'home-cooking', label: 'Sophisticated Home Dining', title: 'Home Cooking & Private Chef', text: 'Home cooks and chefs preparing meals around your family taste and preferences.', cta: 'Explore Culinary Services' },
        { icon: '♡', slug: 'elder-care', label: 'Compassionate Senior Support', title: 'Elder & Companion Care', text: 'Respectful care and companionship for seniors, focused on comfort, safety and dignity.', cta: 'Explore Elder Care' }
      ];

  const supportServices = isArabic
    ? [
        { icon: '▣', slug: 'recruitment', title: 'توظيف العمالة المنزلية', text: 'خدمة توظيف متكاملة لاختيار العمالة المنزلية المناسبة وفق احتياج الأسرة.' },
        { icon: '▤', slug: 'maid-visa', title: 'المساعدة في التأشيرة والكفالة', text: 'متابعة إجراءات التأشيرة والكفالة والمستندات وفق متطلبات الإمارات.' },
        { icon: '◇', slug: 'maid-replacement', title: 'الاستبدال والتحقق', text: 'تحقق من الخلفية وخدمات استبدال منظمة لراحة بالك.' }
      ]
    : [
        { icon: '▣', slug: 'recruitment', title: 'Domestic Worker Recruitment', text: 'End-to-end recruitment support for selecting the right domestic worker for your household.' },
        { icon: '▤', slug: 'maid-visa', title: 'Visa Assistance & Sponsorship', text: 'Guidance for visa, sponsorship and documentation steps with clear follow-up.' },
        { icon: '◇', slug: 'maid-replacement', title: 'Replacement & Verification', text: 'Background checks and replacement support designed for peace of mind.' }
      ];

  const standards = isArabic
    ? ['دعم شامل', 'مدير حساب مخصص', 'تدريب ومتابعة']
    : ['Comprehensive Support', 'Dedicated Account Manager', 'Training & Follow-up'];

  const addOns = isArabic
    ? [
        { icon: '✦', title: 'تنسيق الزهور', text: 'تنسيقات أسبوعية راقية.' },
        { icon: '▰', title: 'دعم الانتقال', text: 'مساعدة منظمة أثناء الانتقال.' },
        { icon: '♢', title: 'رعاية الحيوانات الأليفة', text: 'رعاية متخصصة للحيوانات الأليفة.' },
        { icon: '☆', title: 'طاقم للمناسبات', text: 'طاقم خدمة للمناسبات الخاصة.' }
      ]
    : [
        { icon: '✦', title: 'Floral Styling', text: 'Weekly fresh arrangements.' },
        { icon: '▰', title: 'Relocation Support', text: 'Seamless moving assistance.' },
        { icon: '♢', title: 'Pet Care Specialists', text: 'Support for pet wellbeing.' },
        { icon: '☆', title: 'Event Staffing', text: 'Waitstaff for private parties.' }
      ];

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative bg-[linear-gradient(120deg,#EEF6FF_0%,#F8F6F0_58%,#F6EFD9_100%)] px-6 py-20 text-primary-900 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/25 bg-white/70 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] shadow-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            {copy.badge}
          </span>
          <h1 className={`${isArabic ? 'font-arabic leading-[1.22]' : 'font-heading leading-[1.03]'} mx-auto mt-7 max-w-3xl text-[2.65rem] font-bold tracking-[-0.045em] sm:text-[4.1rem]`}>
            {copy.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[0.98rem] leading-7 text-primary-900/62">{copy.subtitle}</p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.value} className="rounded-[18px] border border-accent-500/15 bg-white/78 px-6 py-5 shadow-[0_20px_55px_rgba(7,22,74,0.08)] backdrop-blur-xl">
                <div className="font-heading text-4xl font-bold text-primary-900">{item.value}</div>
                <div className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-primary-900/55">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA SERVICES</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-[2.2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.coreTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-ink/62">{copy.coreSub}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <Link key={service.slug} href={`/${locale}/services/${service.slug}`} className="group rounded-[24px] border border-accent-500/16 bg-white/82 p-7 text-ink shadow-[0_22px_70px_rgba(7,22,74,0.07)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent-500/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-xl text-accent-700 ring-1 ring-accent-500/20">{service.icon}</div>
                <p className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-700">{service.label}</p>
                <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-2 text-[1.42rem] font-bold leading-tight tracking-[-0.035em] text-primary-900`}>{service.title}</h3>
                <p className="mt-4 min-h-[7rem] text-sm leading-7 text-ink/62">{service.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary-900">{service.cta} <span className="transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2f4] px-6 py-20 text-primary-900 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA SUPPORT</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-[2.1rem] font-bold tracking-[-0.04em] sm:text-[3rem]`}>{copy.supportTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-primary-900/54">{copy.supportSub}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {supportServices.map((service) => (
              <Link key={service.slug} href={`/${locale}/services/${service.slug}`} className="rounded-[22px] border border-accent-500/14 bg-white/78 p-7 shadow-[0_18px_55px_rgba(7,22,74,0.05)] transition hover:-translate-y-1 hover:border-accent-500/35">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-lg text-accent-700">{service.icon}</div>
                <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-7 text-[1.3rem] font-bold leading-tight tracking-[-0.03em]`}>{service.title}</h3>
                <p className="mt-4 min-h-[6rem] text-sm leading-7 text-primary-900/58">{service.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary-900">{copy.learnMore} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA STANDARD</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-[2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[2.7rem]`}>{copy.standardTitle}</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-ink/62">{copy.standardText}</p>
            <div className="mt-9 space-y-6">
              {standards.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-primary-900">✓</span>
                  <div>
                    <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-lg font-bold text-primary-900`}>{item}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink/58">{isArabic ? 'تفاصيل واضحة ودعم منظم لكل أسرة.' : 'Clear guidance and organized support before and after confirmation.'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-accent-500/20 bg-[#f8f6f0] p-7 text-primary-900 shadow-[0_25px_70px_rgba(7,22,74,0.10)]">
            <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-2xl font-bold`}>{isArabic ? 'مستويات الخدمة' : 'Compare Placement Tiers'}</h3>
            <div className="mt-7 space-y-3 text-sm">
              <div className="grid grid-cols-2 rounded-xl bg-white px-4 py-3 shadow-sm"><span className="font-bold">{isArabic ? 'توظيف قياسي' : 'Standard Recruitment'}</span><span className="text-end text-primary-900/60">{isArabic ? 'اختيار أساسي' : 'Basic Vetting'}</span></div>
              <div className="grid grid-cols-2 rounded-xl bg-white px-4 py-3 shadow-sm"><span className="font-bold">{isArabic ? 'خدمة مميزة' : 'Premium Placement'}</span><span className="text-end text-primary-900/60">{isArabic ? 'تدريب متقدم' : 'Advanced Training'}</span></div>
              <div className="grid grid-cols-2 rounded-xl bg-primary-900 px-4 py-3 text-white"><span className="font-bold">{isArabic ? 'إدارة مخصصة' : 'Bespoke Management'}</span><span className="text-end text-accent-300">{isArabic ? 'كونسيرج منزلي' : 'Household Concierge'}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efe9de] px-6 py-20 text-primary-900 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA ADD-ONS</p>
              <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 max-w-xl text-[2rem] font-bold leading-tight tracking-[-0.04em] sm:text-[2.75rem]`}>{copy.addTitle}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-primary-900/62">{copy.addSub}</p>
            </div>
            <Link href={`/${locale}/contact`} className="inline-flex w-fit items-center justify-center rounded-full border border-accent-500/35 bg-white/70 px-5 py-2.5 text-xs font-bold text-primary-900 shadow-sm hover:bg-white">{copy.viewAll}</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((item) => (
              <div key={item.title} className="rounded-[20px] border border-accent-500/18 bg-white/72 p-6 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/12 text-lg text-accent-700">{item.icon}</div>
                <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-6 text-lg font-bold`}>{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-primary-900/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-[26px] border border-accent-500/22 bg-white/82 p-8 text-primary-900 shadow-[0_30px_90px_rgba(7,22,74,0.12)] backdrop-blur-xl sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">{copy.bespokeLabel}</p>
              <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 max-w-xl text-[2rem] font-bold leading-tight tracking-[-0.04em] sm:text-[2.8rem]`}>{copy.bespokeTitle}</h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-primary-900/62">{copy.bespokeText}</p>
            </div>
            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-full bg-primary-900 px-7 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(7,22,74,0.2)] transition hover:-translate-y-0.5">
              {copy.consult} <span className="ms-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
