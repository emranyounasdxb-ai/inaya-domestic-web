import Link from 'next/link';

type IconName = 'home' | 'calendar' | 'baby' | 'bottle' | 'chef' | 'elder' | 'briefcase' | 'file' | 'shield' | 'star' | 'car' | 'paw' | 'spark' | 'arrow';

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    home: <><path {...common} d="M3 11.5 12 4l9 7.5" /><path {...common} d="M5.5 10.5V20h13v-9.5" /><path {...common} d="M9.5 20v-5h5v5" /></>,
    calendar: <><path {...common} d="M7 3v4M17 3v4" /><path {...common} d="M4 8h16" /><path {...common} d="M5 5h14v15H5z" /></>,
    baby: <><path {...common} d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path {...common} d="M4.5 20a7.5 7.5 0 0 1 15 0" /><path {...common} d="M9.2 9.4h.01M14.8 9.4h.01" /></>,
    bottle: <><path {...common} d="M10 3h4v3h-4z" /><path {...common} d="M9 6h6l1 3v9a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V9l1-3Z" /><path {...common} d="M9 12h6" /></>,
    chef: <><path {...common} d="M8 7a4 4 0 0 1 8 0" /><path {...common} d="M6 8.5a3 3 0 0 1 4.2-2.7" /><path {...common} d="M17.8 5.8A3 3 0 0 1 22 8.5" /><path {...common} d="M7 11h10v8H7z" /></>,
    elder: <><path {...common} d="M12 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path {...common} d="M8 21v-7a4 4 0 0 1 8 0v7" /><path {...common} d="M18 21v-5h2v5" /></>,
    briefcase: <><path {...common} d="M9 6V4h6v2" /><path {...common} d="M4 7h16v12H4z" /><path {...common} d="M4 12h16" /></>,
    file: <><path {...common} d="M7 3h7l4 4v14H7z" /><path {...common} d="M14 3v5h4" /><path {...common} d="M9.5 13h5M9.5 16h5" /></>,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    star: <path {...common} d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />,
    car: <><path {...common} d="M6 16h12l-1.2-5.2A3 3 0 0 0 13.9 8H10a3 3 0 0 0-2.9 2.8L6 16Z" /><path {...common} d="M7 16v3M17 16v3" /><path {...common} d="M8 13h.01M16 13h.01" /></>,
    paw: <><path {...common} d="M12 14c3.5 0 5 2 5 4.2 0 1.2-.8 2.1-2 2.1-1.1 0-1.8-.7-3-.7s-1.9.7-3 .7c-1.2 0-2-.9-2-2.1C7 16 8.5 14 12 14Z" /><path {...common} d="M7.5 10.5c.8 0 1.5-.9 1.5-2s-.7-2-1.5-2S6 7.4 6 8.5s.7 2 1.5 2ZM16.5 10.5c.8 0 1.5-.9 1.5-2s-.7-2-1.5-2-1.5.9-1.5 2 .7 2 1.5 2ZM11 9c.8 0 1.4-.9 1.4-2S11.8 5 11 5s-1.4.9-1.4 2S10.2 9 11 9ZM13.8 9c.8 0 1.4-.9 1.4-2s-.6-2-1.4-2-1.4.9-1.4 2 .6 2 1.4 2Z" /></>,
    spark: <path {...common} d="M12 3l1.5 5.1L19 10l-5.5 1.9L12 17l-1.5-5.1L5 10l5.5-1.9L12 3Z" />,
    arrow: <><path {...common} d="M5 12h14" /><path {...common} d="m13 6 6 6-6 6" /></>
  };
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const lang = isArabic ? 'ar' : 'en';

  const copy = {
    badge: isArabic ? 'مرخص ومنظم في دولة الإمارات' : 'MOHRE Licensed & Regulated',
    title: isArabic ? 'إعادة تعريف التميز في الخدمات المنزلية' : 'Domestic Excellence Reimagined',
    subtitle: isArabic
      ? 'اختر الدعم المنزلي المناسب لأسرتك. من الخادمات المدربات والمربيات إلى الرعاية المتخصصة، تقدم عناية جودة موثوقة للعائلات في الإمارات.'
      : 'Choose the right home support for your household. From expertly trained maids and nannies to specialized caregivers, INAYA delivers uncompromising quality and trust to UAE families.',
    coreTitle: isArabic ? 'خدماتنا الأساسية' : 'Our Core Services',
    coreSub: isArabic ? 'حلول عمالة منزلية مصممة لتناسب أسلوب حياتك.' : 'Tailored domestic staffing solutions to elevate your everyday living.',
    adminTitle: isArabic ? 'الخدمات الإدارية والدعم' : 'Administrative & Support Services',
    adminSub: isArabic ? 'إدارة سلسة للإجراءات، المستندات، والدعم المطلوب.' : 'Seamless management of domestic staffing legalities and sourcing.',
    standardTitle: isArabic ? 'معيار عناية' : 'The INAYA Standard',
    standardText: isArabic ? 'كل خدمة من عناية مدعومة بدعم شامل، مما يضمن راحة البال، الثقة، وتجربة منزلية منظمة.' : 'Every INAYA placement is backed by our comprehensive support ecosystem, ensuring calm communication, clear guidance and reliable follow-up.',
    compareTitle: isArabic ? 'قارن مستويات الخدمة' : 'Compare Placement Tiers',
    addTitle: isArabic ? 'إضافات مطلوبة كثيراً' : 'Frequently Requested Add-ons',
    addSub: isArabic ? 'عزز باقة الدعم المنزلي بخدمات تشغيلية متخصصة.' : 'Enhance your core staffing package with specialized, on-demand services for complete home support.',
    allServices: isArabic ? 'عرض كل الخدمات' : 'View All Services',
    bespokeLabel: isArabic ? 'الحل المتكامل' : 'The Ultimate Solution',
    bespokeTitle: isArabic ? 'إدارة منزلية مخصصة' : 'Bespoke Household Management',
    bespokeText: isArabic ? 'إلى جانب الخدمات الفردية، تصمم عناية باقات دعم منزلي متكاملة للأسر، تشمل تنسيق عدة أفراد وخدمات بسلاسة.' : 'Beyond individual services, INAYA curates comprehensive, tailored household management packages that fit your lifestyle and household needs.',
    consult: isArabic ? 'تحدث مع مستشار' : 'Consult an Advisor'
  };

  const stats = [
    { value: '2%', label: isArabic ? 'اختيار دقيق للمرشحين' : 'Rigorous Selection Rate' },
    { value: '100%', label: isArabic ? 'تحقق من الخلفية' : 'Background Verified' },
    { value: '24/7', label: isArabic ? 'دعم الكونسيرج' : 'Concierge Support' }
  ];

  const core = [
    { icon: 'home' as IconName, slug: 'live-in-maid', label: { en: 'Most Essential Care For Your Home', ar: 'رعاية أساسية لمنزلك' }, title: { en: 'Live-in & Live-out Maid Services', ar: 'خدمات الخادمات المقيمات وغير المقيمات' }, text: { en: 'Dedicated professionals integrated into your household or working on a defined schedule to maintain your sanctuary to the highest standards.', ar: 'عاملات محترفات لخدمة المنزل بشكل مقيم أو وفق جدول واضح للحفاظ على ترتيب وراحة منزلك.' }, cta: { en: 'Explore Maid Services', ar: 'استكشف خدمات الخادمات' } },
    { icon: 'calendar' as IconName, slug: 'full-time-maid', label: { en: 'Tailored Scheduling Solutions', ar: 'حلول جدولة مرنة' }, title: { en: 'Full-time & Part-time Hiring', ar: 'توظيف بدوام كامل وجزئي' }, text: { en: 'Flexible hiring solutions designed around your specific routine, ensuring reliable support exactly when you need it without compromise.', ar: 'حلول توظيف مرنة تناسب روتين الأسرة وتوفر الدعم المطلوب في الوقت المناسب.' }, cta: { en: 'Explore Flexible Hiring', ar: 'استكشف خيارات التوظيف' } },
    { icon: 'baby' as IconName, slug: 'nanny', label: { en: 'Nurturing Childcare Experts', ar: 'خبراء رعاية الأطفال' }, title: { en: 'Nanny & Babysitting Services', ar: 'خدمات المربيات وجليسات الأطفال' }, text: { en: 'Compassionate, highly-trained childcare professionals providing a safe, nurturing, and engaging environment for your children.', ar: 'مربيات محترفات يقدمن بيئة آمنة وهادئة ومناسبة لرعاية الأطفال.' }, cta: { en: 'Explore Nanny Services', ar: 'استكشف خدمات المربيات' } },
    { icon: 'bottle' as IconName, slug: 'newborn-care', label: { en: 'Specialized Infant Support', ar: 'دعم متخصص للمواليد' }, title: { en: 'Newborn Care Specialists', ar: 'خدمات رعاية المواليد' }, text: { en: 'Expert care for your newest family members, offering guidance, sleep training, and specialized neonatal support during those crucial early months.', ar: 'رعاية متخصصة للمواليد ودعم للأهل خلال الأشهر الأولى باهتمام واحتراف.' }, cta: { en: 'Explore Newborn Care', ar: 'استكشف رعاية المواليد' } },
    { icon: 'chef' as IconName, slug: 'home-cooking', label: { en: 'Sophisticated Home Dining', ar: 'تجربة طعام منزلية راقية' }, title: { en: 'Home Cooking & Private Chef', ar: 'الطبخ المنزلي والشيف الخاص' }, text: { en: 'Culinary experts crafting personalized menus and exquisite dining experiences tailored to your dietary preferences within the comfort of your home.', ar: 'طهاة مهرة يقدمون وجبات منزلية وقوائم مخصصة تناسب ذوق الأسرة.' }, cta: { en: 'Explore Culinary Services', ar: 'استكشف خدمات الطبخ' } },
    { icon: 'elder' as IconName, slug: 'elder-care', label: { en: 'Compassionate Senior Support', ar: 'دعم ورعاية كبار السن' }, title: { en: 'Elder & Companion Care', ar: 'رعاية المسنين والمرافقة' }, text: { en: 'Dignified, respectful care and companionship for seniors, ensuring comfort, safety, and a high quality of life with specialized attention.', ar: 'رعاية محترمة ورفقة إنسانية لكبار السن مع التركيز على الراحة والسلامة.' }, cta: { en: 'Explore Elder Care', ar: 'استكشف رعاية المسنين' } }
  ];

  const admin = [
    { icon: 'briefcase' as IconName, slug: 'recruitment', title: { en: 'Domestic Worker Recruitment', ar: 'توظيف العمالة المنزلية' }, text: { en: 'End-to-end recruitment services, sourcing top-tier domestic talent to meet your household standards.', ar: 'خدمة توظيف متكاملة لاختيار العمالة المنزلية المناسبة وفق احتياج الأسرة.' } },
    { icon: 'file' as IconName, slug: 'maid-visa', title: { en: 'Visa Assistance & Sponsorship', ar: 'المساعدة في التأشيرة والكفالة' }, text: { en: 'Seamless handling of legalities, visa processing, and sponsorship transfers with clear guidance.', ar: 'متابعة إجراءات التأشيرة والكفالة والمستندات وفق متطلبات الإمارات.' } },
    { icon: 'shield' as IconName, slug: 'maid-replacement', title: { en: 'Replacement & Verification', ar: 'الاستبدال والتحقق' }, text: { en: 'Background checks and replacement support designed for peace of mind.', ar: 'تحقق من الخلفية وخدمات استبدال منظمة لراحة بالك.' } }
  ];

  const bullets = isArabic ? ['دعم شامل', 'مدير حساب مخصص', 'تدريب مستمر'] : ['Comprehensive Support', 'Dedicated Account Manager', 'Continuous Training'];
  const tiers = isArabic ? ['توظيف قياسي', 'اختيار أساسي', 'خدمة مميزة', 'تدريب متقدم', 'إدارة مخصصة', 'كونسيرج منزلي كامل'] : ['Standard Recruitment', 'Basic Vetting', 'Premium Placement', 'Advanced Training', 'Bespoke Management', 'Full Household Concierge'];
  const addOns = [
    { icon: 'spark' as IconName, title: { en: 'Floral Styling', ar: 'تنسيق الزهور' }, text: { en: 'Weekly fresh arrangements.', ar: 'تنسيقات أسبوعية راقية.' } },
    { icon: 'car' as IconName, title: { en: 'Relocation Support', ar: 'دعم الانتقال' }, text: { en: 'Seamless moving assistance.', ar: 'مساعدة منظمة أثناء الانتقال.' } },
    { icon: 'paw' as IconName, title: { en: 'Pet Care Specialists', ar: 'رعاية الحيوانات الأليفة' }, text: { en: 'Expert handlers for pet wellbeing.', ar: 'رعاية متخصصة للحيوانات الأليفة.' } },
    { icon: 'star' as IconName, title: { en: 'Event Staffing', ar: 'طاقم للمناسبات' }, text: { en: 'Waitstaff for private parties.', ar: 'طاقم خدمة للمناسبات الخاصة.' } }
  ];

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative bg-[linear-gradient(120deg,#EEF6FF_0%,#F8F6F0_58%,#F6EFD9_100%)] px-6 py-20 text-primary-900 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/25 bg-white/70 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary-900 shadow-sm backdrop-blur-xl"><span className="h-2 w-2 rounded-full bg-accent-500" />{copy.badge}</span>
          <h1 className={`${isArabic ? 'font-arabic leading-[1.22]' : 'font-heading leading-[1.03]'} mx-auto mt-7 max-w-3xl text-[2.65rem] font-bold tracking-[-0.045em] sm:text-[4.1rem]`}>{copy.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-[0.98rem] leading-7 text-primary-900/62">{copy.subtitle}</p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-3">
            {stats.map((item) => <div key={item.value} className="rounded-[18px] border border-accent-500/15 bg-white/78 px-6 py-5 shadow-[0_20px_55px_rgba(7,22,74,0.08)] backdrop-blur-xl"><div className="font-heading text-4xl font-bold text-primary-900">{item.value}</div><div className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-primary-900/55">{item.label}</div></div>)}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center"><p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA SERVICES</p><h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-[2.2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.coreTitle}</h2><p className="mt-4 text-sm leading-7 text-ink/62">{copy.coreSub}</p></div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {core.map((item) => <Link key={item.slug} href={`/${locale}/services/${item.slug}`} className="group rounded-[24px] border border-accent-500/16 bg-white/82 p-7 text-ink shadow-[0_22px_70px_rgba(7,22,74,0.07)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent-500/40"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-700 ring-1 ring-accent-500/20"><LineIcon name={item.icon} className="h-5 w-5" /></div><p className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-700">{item.label[lang]}</p><h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-2 text-[1.42rem] font-bold leading-tight tracking-[-0.035em] text-primary-900`}>{item.title[lang]}</h3><p className="mt-4 min-h-[7.2rem] text-sm leading-7 text-ink/62">{item.text[lang]}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary-900">{item.cta[lang]} <LineIcon name="arrow" className="h-3.5 w-3.5 transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1" /></span></Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2f4] px-6 py-20 text-primary-900 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl"><div className="mx-auto max-w-3xl text-center"><p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA SUPPORT</p><h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-[2.1rem] font-bold tracking-[-0.04em] sm:text-[3rem]`}>{copy.adminTitle}</h2><p className="mt-4 text-sm leading-7 text-primary-900/54">{copy.adminSub}</p></div><div className="mt-12 grid gap-6 md:grid-cols-3">{admin.map((item) => <Link key={item.slug} href={`/${locale}/services/${item.slug}`} className="rounded-[22px] border border-accent-500/14 bg-white/78 p-7 shadow-[0_18px_55px_rgba(7,22,74,0.05)] transition hover:-translate-y-1 hover:border-accent-500/35"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-700"><LineIcon name={item.icon} className="h-5 w-5" /></div><h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-7 text-[1.3rem] font-bold leading-tight tracking-[-0.03em]`}>{item.title[lang]}</h3><p className="mt-4 min-h-[6rem] text-sm leading-7 text-primary-900/58">{item.text[lang]}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary-900">{isArabic ? 'اعرف المزيد' : 'Learn More'} <LineIcon name="arrow" className="h-3.5 w-3.5" /></span></Link>)}</div></div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div><p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA STANDARD</p><h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-[2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[2.7rem]`}>{copy.standardTitle}</h2><p className="mt-5 max-w-xl text-sm leading-7 text-ink/62">{copy.standardText}</p><div className="mt-9 space-y-6">{bullets.map((item) => <div key={item} className="flex gap-4"><span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500 text-primary-900"><LineIcon name="check" className="h-4 w-4" /></span><div><h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-lg font-bold text-primary-900`}>{item}</h3><p className="mt-1 text-sm leading-6 text-ink/58">{isArabic ? 'تفاصيل واضحة ودعم منظم لكل أسرة.' : 'Clear service guidance and organized support before and after confirmation.'}</p></div></div>)}</div></div>
          <div className="rounded-[24px] border border-accent-500/20 bg-[#f8f6f0] p-7 text-primary-900 shadow-[0_25px_70px_rgba(7,22,74,0.10)]"><h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-2xl font-bold`}>{copy.compareTitle}</h3><div className="mt-7 space-y-3"><div className="grid grid-cols-2 rounded-xl bg-white px-4 py-3 text-sm shadow-sm"><span className="font-bold">{tiers[0]}</span><span className="text-end text-primary-900/60">{tiers[1]}</span></div><div className="grid grid-cols-2 rounded-xl bg-white px-4 py-3 text-sm shadow-sm"><span className="font-bold">{tiers[2]}</span><span className="text-end text-primary-900/60">{tiers[3]}</span></div><div className="grid grid-cols-2 rounded-xl bg-primary-900 px-4 py-3 text-sm text-white"><span className="font-bold">{tiers[4]}</span><span className="text-end text-accent-300">{tiers[5]}</span></div></div></div>
        </div>
      </section>

      <section className="bg-[#efe9de] px-6 py-20 text-primary-900 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA ADD-ONS</p><h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 max-w-xl text-[2rem] font-bold leading-tight tracking-[-0.04em] sm:text-[2.75rem]`}>{copy.addTitle}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-primary-900/62">{copy.addSub}</p></div><Link href={`/${locale}/contact`} className="inline-flex w-fit items-center justify-center rounded-full border border-accent-500/35 bg-white/70 px-5 py-2.5 text-xs font-bold text-primary-900 shadow-sm hover:bg-white">{copy.allServices}</Link></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{addOns.map((item) => <div key={item.title.en} className="rounded-[20px] border border-accent-500/18 bg-white/72 p-6 shadow-[0_18px_55px_rgba(7,22,74,0.06)]"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/12 text-accent-700"><LineIcon name={item.icon} className="h-4 w-4" /></div><h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-6 text-lg font-bold`}>{item.title[lang]}</h3><p className="mt-3 text-sm leading-6 text-primary-900/60">{item.text[lang]}</p></div>)}</div></div>
      </section>

      <section className="bg-ivory px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-[26px] border border-accent-500/22 bg-white/82 p-8 text-primary-900 shadow-[0_30px_90px_rgba(7,22,74,0.12)] backdrop-blur-xl sm:p-12"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">{copy.bespokeLabel}</p><h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 max-w-xl text-[2rem] font-bold leading-tight tracking-[-0.04em] sm:text-[2.8rem]`}>{copy.bespokeTitle}</h2><p className="mt-5 max-w-3xl text-sm leading-7 text-primary-900/62">{copy.bespokeText}</p></div><Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-full bg-primary-900 px-7 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(7,22,74,0.2)] transition hover:-translate-y-0.5">{copy.consult} <LineIcon name="arrow" className="ms-2 h-4 w-4" /></Link></div></div>
      </section>
    </div>
  );
}
