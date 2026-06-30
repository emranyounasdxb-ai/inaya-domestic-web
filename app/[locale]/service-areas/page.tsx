import Link from 'next/link';

const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.365890608938!2d55.43878240000001!3d25.3925602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5942014634c7%3A0xf39f2fefc97933f3!2sINAYA%20Domestic%20Workers%20Ajman!5e0!3m2!1sen!2sae!4v1782223058219!5m2!1sen!2sae';

type IconName = 'pin' | 'search' | 'service' | 'home' | 'shield' | 'message' | 'calendar' | 'spark' | 'check' | 'map';

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    pin: <><path {...common} d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" /><path {...common} d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /></>,
    search: <><path {...common} d="m20 20-4.2-4.2" /><path {...common} d="M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" /></>,
    service: <><path {...common} d="M4 19h16" /><path {...common} d="M6 19V9l6-4 6 4v10" /><path {...common} d="M10 19v-6h4v6" /></>,
    home: <><path {...common} d="M4 11.5 12 5l8 6.5" /><path {...common} d="M6.5 10.5V20h11V10.5" /></>,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    message: <path {...common} d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v3.8a3.8 3.8 0 0 1-3.8 3.8H10l-4.5 3.2.9-4A3.8 3.8 0 0 1 5 10.6V6.8Z" />,
    calendar: <><path {...common} d="M5 5h14v15H5V5Z" /><path {...common} d="M8 3v4M16 3v4M5 9h14" /></>,
    spark: <path {...common} d="M12 3l1.5 5.1L19 10l-5.5 1.9L12 17l-1.5-5.1L5 10l5.5-1.9L12 3Z" />,
    check: <path {...common} d="m5 12 4 4L19 6" />,
    map: <><path {...common} d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2V6Z" /><path {...common} d="M9 4v14M15 6v14" /></>
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

function UaeFlag() {
  return (
    <span className="grid h-8 w-11 overflow-hidden rounded-md border border-white/60 shadow-sm">
      <span className="col-start-1 row-span-3 row-start-1 w-3.5 bg-[#CE1126]" />
      <span className="col-start-2 row-start-1 bg-[#007A3D]" />
      <span className="col-start-2 row-start-2 bg-white" />
      <span className="col-start-2 row-start-3 bg-black" />
    </span>
  );
}

function CoverageVisual({ isArabic }: { isArabic: boolean }) {
  const title = isArabic ? 'تغطية جميع الإمارات' : 'All UAE Coverage';
  const subtitle = isArabic ? 'مركز المكتب: عجمان' : 'Ajman office hub';
  const cities = isArabic ? ['دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'رأس الخيمة', 'الفجيرة'] : ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'RAK', 'Fujairah'];

  return (
    <div className="glass-panel relative min-h-[280px] overflow-hidden rounded-[24px] sm:min-h-[340px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(191,164,106,0.20),transparent_22rem),radial-gradient(circle_at_22%_80%,rgba(7,22,74,0.08),transparent_18rem)]" />
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(191,164,106,0.32)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className={`absolute top-5 z-10 flex max-w-[78%] items-center gap-3 rounded-full border border-accent-500/45 bg-white/72 py-2 pl-2 pr-5 text-primary-900 shadow-glass backdrop-blur-xl ${isArabic ? 'right-5 flex-row-reverse pl-5 pr-2 text-right' : 'left-5'}`}>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-900 ring-1 ring-accent-500/50"><UaeFlag /></span>
        <span className="min-w-0"><span className="block truncate text-sm font-bold sm:text-base">{title}</span><span className="block truncate text-xs font-semibold text-ink/55">{subtitle}</span></span>
      </div>
      <svg className="absolute inset-x-0 bottom-0 h-full w-full" viewBox="0 0 720 390" preserveAspectRatio="xMidYMid meet" role="img" aria-label={title}>
        <defs><filter id="coverageShadowClean" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#07164A" floodOpacity="0.18" /></filter><linearGradient id="mapFillClean" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#07164A" /><stop offset="1" stopColor="#020A2C" /></linearGradient></defs>
        <g opacity="0.34" stroke="#BFA46A" strokeWidth="1" fill="none"><path d="M28 318c118 40 224 38 322 6s200-58 342-8" /><path d="M22 336c126 40 238 42 344 9s200-60 340-12" /><path d="M18 354c132 42 250 46 358 12s200-62 338-14" /></g>
        <g filter="url(#coverageShadowClean)"><path d="M96 238l23 20 40-5 64-22 82-14 76-29 72-22 44-28 49-7 42-34 45 24 13 48-28 42 37 33-34 35-55 31-38 54-82 18-126-11-92-18-72-29-48-34-43-47-17-35Z" fill="url(#mapFillClean)" stroke="#BFA46A" strokeWidth="3" strokeLinejoin="round" /></g>
        {[351, 424, 526, 548, 562, 620, 626].map((x, index) => <g key={x} transform={`translate(${x} ${[217, 211, 139, 122, 96, 78, 177][index]})`}><path d="M0 22c11-14 17-24 17-34A17 17 0 0 0-17-12c0 10 6 20 17 34Z" fill="#BFA46A" /><circle r="7" fill="#F8F6F0" /><circle r="17" fill="none" stroke="#FFF8E6" strokeOpacity="0.9" strokeWidth="3" /></g>)}
      </svg>
      <div className="absolute bottom-5 left-5 right-5 flex flex-wrap justify-center gap-2 sm:justify-end">{cities.map((city) => <span key={city} className="rounded-full border border-primary-700/10 bg-white/70 px-3 py-1 text-xs font-bold text-primary-900 shadow-sm backdrop-blur-xl">{city}</span>)}</div>
    </div>
  );
}

export default function ServiceAreasPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl' : 'font-heading text-5xl font-bold leading-[0.95] text-primary-900 sm:text-6xl lg:text-7xl';
  const sectionTitleClass = isArabic ? 'font-arabic text-3xl font-bold leading-[1.35] text-primary-900 sm:text-4xl' : 'font-heading text-4xl font-bold leading-tight text-primary-900';

  const copy = {
    badge: isArabic ? 'نخدم جميع إمارات الدولة' : 'Serving all UAE emirates',
    title: isArabic ? 'خدمات العمالة المنزلية في جميع أنحاء الإمارات' : 'Maid and domestic worker services across the UAE',
    subtitle: isArabic ? 'عناية للعمالة المنزلية خيار موثوق للعائلات التي تبحث عن خادمات ومربيات وطهاة وعمالة رعاية في جميع إمارات الدولة.' : 'INAYA Domestic Workers is a trusted UAE maid and domestic worker company for families looking for maids, nannies, cooks and caregivers across all emirates.',
    primaryCta: isArabic ? 'احجز استشارة' : 'Book Consultation',
    whatsapp: isArabic ? 'واتساب' : 'WhatsApp Us',
    searchTitle: isArabic ? 'ابحث عن إمارتك أو منطقتك' : 'Find your emirate or area',
    searchPlaceholder: isArabic ? 'مثال: دبي، أبوظبي، الشارقة، عجمان' : 'Enter emirate or area, e.g. Dubai Marina',
    serviceRequired: isArabic ? 'الخدمة المطلوبة' : 'Service required',
    allServices: isArabic ? 'كل الخدمات' : 'All services',
    findHelp: isArabic ? 'اعرف التوفر' : 'Find Help',
    dashboardTitle: isArabic ? 'تغطية موثوقة في الإمارات' : 'Trusted UAE-wide coverage',
    dashboardText: isArabic ? 'خدمة منظمة للعائلات في جميع إمارات الدولة مع متابعة واضحة حسب الإمارة ونوع الخدمة.' : 'Organized support for families across the UAE, with clear follow-up based on emirate, area and service type.',
    mapTitle: isArabic ? 'خريطة مكتب عناية في عجمان' : 'INAYA Ajman office map',
    categoriesTitle: isArabic ? 'فئات خدمات العمالة المنزلية في الإمارات' : 'Maid service categories across the UAE',
    areasTitle: isArabic ? 'الإمارات والمناطق التي نخدمها' : 'UAE emirates and areas we serve',
    areasText: isArabic ? 'اختر الإمارة لعرض صفحة الخدمة المحلية، ثم تواصل معنا لتأكيد التوفر حسب نوع الخدمة والمنطقة.' : 'Choose an emirate to view the local service page, then contact us to confirm availability by service type and area.',
    viewAll: isArabic ? 'تواصل للتأكيد' : 'Contact to confirm',
    viewServices: isArabic ? 'عرض خدمات' : 'View Services',
    noteTitle: isArabic ? 'ملاحظة عن التوفر' : 'Availability note',
    noteText: isArabic ? 'نقدم خدمات العمالة المنزلية في جميع أنحاء الإمارات. قد يختلف التوفر حسب الإمارة والمنطقة ونوع الخدمة، لذلك يرجى التواصل معنا للتأكيد.' : 'We provide domestic worker services across the UAE. Availability can vary by emirate, area and service type, so please contact us to confirm your requirement.',
    officeTitle: isArabic ? 'زيارة مكتب عناية' : 'Visit INAYA office',
    officeText: isArabic ? 'موقع المكتب في جراند مول عجمان مع دعم استفسارات جميع الإمارات عبر الهاتف وواتساب.' : 'Our office is in Grand Mall Ajman, with UAE-wide enquiry support by phone and WhatsApp.',
    timing: isArabic ? '09:00 صباحاً - 09:00 مساءً' : '09:00 AM - 09:00 PM',
    allDays: isArabic ? 'كل الأيام' : 'All days'
  };

  const stats = [
    { label: isArabic ? 'نطاق الخدمة' : 'Service scope', value: isArabic ? 'كل الإمارات' : 'All UAE' },
    { label: isArabic ? 'الإمارات' : 'Emirates', value: '7' },
    { label: isArabic ? 'التواصل' : 'Follow-up', value: isArabic ? 'واضح' : 'Clear' },
    { label: isArabic ? 'زيارة المكتب' : 'Office visit', value: isArabic ? 'متاح' : 'Available' }
  ];

  const categories = [
    { icon: 'home' as IconName, en: 'House Maid', ar: 'خادمة منزلية', slug: 'live-in-maid' },
    { icon: 'shield' as IconName, en: 'Nanny', ar: 'مربية أطفال', slug: 'nanny' },
    { icon: 'service' as IconName, en: 'Babysitter', ar: 'جليسة أطفال', slug: 'babysitting' },
    { icon: 'message' as IconName, en: 'Caregiver', ar: 'رعاية منزلية', slug: 'elder-care' },
    { icon: 'calendar' as IconName, en: 'Part-time Help', ar: 'دوام جزئي', slug: 'part-time-maid' },
    { icon: 'spark' as IconName, en: 'Cook', ar: 'طباخة / طاهٍ', slug: 'home-cooking' }
  ];

  const areas = [
    { name: isArabic ? 'دبي' : 'Dubai', slug: 'maid-services-dubai', sub: isArabic ? 'خدمات خادمات وعمالة منزلية للعائلات في دبي' : 'Maid and domestic worker services for Dubai families', points: isArabic ? ['خادمات ومربيات', 'خيارات حسب التوفر'] : ['Maids and nannies', 'Options subject to availability'] },
    { name: isArabic ? 'أبوظبي' : 'Abu Dhabi', slug: 'maid-services-abu-dhabi', sub: isArabic ? 'دعم منزلي موثوق لأبوظبي والعين' : 'Trusted home support for Abu Dhabi and Al Ain families', points: isArabic ? ['عمالة منزلية موثوقة', 'يشمل إرشاد منطقة العين'] : ['Trusted domestic workers', 'Includes Al Ain enquiries'] },
    { name: isArabic ? 'الشارقة' : 'Sharjah', slug: 'maid-services-sharjah', sub: isArabic ? 'خدمات منزلية مرنة للعائلات في الشارقة' : 'Flexible domestic services for Sharjah homes', points: isArabic ? ['خدمات شهرية أو حسب الطلب', 'تأكيد سريع عبر واتساب'] : ['Monthly or requested services', 'Quick WhatsApp confirmation'] },
    { name: isArabic ? 'عجمان' : 'Ajman', slug: 'maid-services-ajman', sub: isArabic ? 'مقرنا في عجمان مع دعم لجميع الإمارات' : 'Our office base with UAE-wide support', points: isArabic ? ['زيارة المكتب متاحة', 'متابعة واضحة قبل الحجز'] : ['Office visit available', 'Clear follow-up before booking'] },
    { name: isArabic ? 'رأس الخيمة' : 'Ras Al Khaimah', slug: 'maid-services-ras-al-khaimah', sub: isArabic ? 'خيارات خادمات ودعم منزلي حسب التوفر' : 'Maid and home support options by availability', points: isArabic ? ['خدمات للعائلات', 'تأكيد المنطقة قبل الحجز'] : ['Family-focused services', 'Area confirmation before booking'] },
    { name: isArabic ? 'الفجيرة' : 'Fujairah', slug: 'maid-services-fujairah', sub: isArabic ? 'خدمات عمالة منزلية للعائلات في الفجيرة' : 'Domestic worker services for Fujairah families', points: isArabic ? ['خادمات ورعاية منزلية', 'تنسيق حسب المتطلبات'] : ['Maids and home care', 'Coordination by requirement'] },
    { name: isArabic ? 'أم القيوين' : 'Umm Al Quwain', slug: 'maid-services-umm-al-quwain', sub: isArabic ? 'دعم منزلي موثوق حسب التوفر' : 'Trusted home support subject to availability', points: isArabic ? ['خدمات مرنة', 'متابعة ودية'] : ['Flexible services', 'Friendly follow-up'] }
  ];

  const coverageBullets = isArabic
    ? ['إرشاد لخدمات الخادمات والمربيات والطهاة والرعاية', 'زيارة المكتب متاحة في عجمان', 'تأكيد التوفر عبر الهاتف وواتساب']
    : ['Maid, nanny, cook and caregiver service guidance', 'Office visit available in Ajman', 'Availability confirmation by phone and WhatsApp'];

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_8%_44%,rgba(7,22,74,0.10),transparent_26rem)]" />
        <div className="container-x relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.52fr] lg:items-center">
            <div className="max-w-4xl text-center sm:text-start">
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:mx-0 sm:text-sm"><LineIcon name="pin" className="h-4 w-4 shrink-0 text-accent-600" />{copy.badge}</span>
              <h1 className={`mt-6 max-w-4xl ${headingClass}`}>{copy.title}</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:mx-0 sm:text-lg sm:leading-8">{copy.subtitle}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-start">
                <Link href={`/${locale}/booking`} className="btn-primary w-full gap-2 sm:w-auto">{copy.primaryCta}<LineIcon name="spark" className="h-5 w-5" /></Link>
                <a href="https://wa.me/971502036767" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent-500/60 bg-white/65 px-7 py-3 font-semibold text-primary-900 shadow-glass backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-accent-50 sm:w-auto"><LineIcon name="message" className="h-5 w-5 text-accent-600" />{copy.whatsapp}</a>
              </div>
            </div>
            <div className="glass-panel hidden rounded-[28px] p-6 lg:block">
              <div className="flex items-center gap-3"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-900"><UaeFlag /></span><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">{isArabic ? 'تغطية الإمارات' : 'UAE Coverage'}</p><h2 className="font-heading text-2xl font-bold text-primary-900">7 {isArabic ? 'إمارات' : 'Emirates'}</h2></div></div>
              <div className="mt-5 grid gap-3">{coverageBullets.map((item) => <div key={item} className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-semibold text-primary-900/72">✓ {item}</div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x relative z-10 -mt-6 sm:-mt-8"><div className="glass-panel mx-auto max-w-6xl rounded-[24px] p-4 sm:p-6"><div className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end"><div><label className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink/55 sm:text-xs">{copy.searchTitle}</label><div className="relative"><LineIcon name="search" className="absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-accent-600" /><input className="field ps-12" placeholder={copy.searchPlaceholder} /></div></div><div><label className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink/55 sm:text-xs">{copy.serviceRequired}</label><select className="field" defaultValue="all"><option value="all">{copy.allServices}</option>{categories.map((category) => <option key={category.en} value={category.en}>{isArabic ? category.ar : category.en}</option>)}</select></div><Link href={`/${locale}/contact`} className="btn-primary h-[50px] w-full px-8 lg:w-auto">{copy.findHelp}</Link></div></div></section>

      <section className="container-x py-10 sm:py-12"><div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">{stats.map((stat) => <div key={stat.label} className="glass-panel rounded-[18px] p-4 text-center sm:p-6"><div className={`${isArabic ? 'font-arabic text-2xl leading-snug' : 'font-heading text-3xl'} font-bold text-primary-900`}>{stat.value}</div><div className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-ink/55 sm:text-xs">{stat.label}</div></div>)}</div></section>

      <section className="container-x pb-12 sm:pb-16"><div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div className="text-center lg:text-start"><h2 className={sectionTitleClass}>{copy.dashboardTitle}</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-ink/70 lg:mx-0">{copy.dashboardText}</p><div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold text-primary-900 lg:justify-start"><span className="inline-flex items-center gap-2 rounded-full bg-white/65 px-4 py-2 shadow-sm"><span className="h-2 w-2 rounded-full bg-accent-500" /> {copy.badge}</span><span className="inline-flex items-center gap-2 rounded-full bg-white/65 px-4 py-2 shadow-sm"><LineIcon name="shield" className="h-4 w-4 text-accent-600" /> INAYA UAE</span></div></div><CoverageVisual isArabic={isArabic} /></div></section>

      <section className="bg-ivory-100/60 py-12 sm:py-16"><div className="container-x"><h2 className={`mx-auto max-w-4xl text-center ${sectionTitleClass}`}>{copy.categoriesTitle}</h2><div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{categories.map((category) => <Link key={category.en} href={`/${locale}/services/${category.slug}`} className="glass-panel flex min-h-[128px] flex-col items-center justify-center rounded-[18px] p-4 text-center transition hover:-translate-y-1 hover:border-accent-500/40 hover:bg-white sm:min-h-[140px] sm:p-5"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/75 text-accent-600 shadow-sm sm:h-14 sm:w-14"><LineIcon name={category.icon} className="h-6 w-6 sm:h-7 sm:w-7" /></div><span className="mt-3 text-sm font-semibold leading-snug text-primary-900 sm:text-base">{isArabic ? category.ar : category.en}</span></Link>)}</div></div></section>

      <section className="container-x py-12 sm:py-16"><div className="mx-auto max-w-6xl"><div className="mb-8 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-start"><div><h2 className={sectionTitleClass}>{copy.areasTitle}</h2><p className="mt-3 max-w-2xl leading-7 text-ink/70">{copy.areasText}</p></div><Link href={`/${locale}/contact`} className="btn-outline w-full gap-2 md:w-auto">{copy.viewAll}<LineIcon name="spark" className="h-5 w-5 text-accent-600" /></Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{areas.map((area) => <Link key={area.name} href={`/${locale}/${area.slug}`} className="glass-panel flex h-full flex-col overflow-hidden rounded-[22px] transition hover:-translate-y-1 hover:border-accent-500/40"><div className="relative h-32 overflow-hidden bg-ivory-100 sm:h-36"><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(191,164,106,0.26),transparent_26%),linear-gradient(135deg,rgba(7,22,74,0.10)_1px,transparent_1px),linear-gradient(45deg,rgba(191,164,106,0.10)_1px,transparent_1px)] bg-[length:100%_100%,32px_32px,32px_32px]" /><span className="absolute right-4 top-4 rounded-full bg-primary-900 px-3 py-1 text-xs font-bold text-white">UAE</span><LineIcon name="map" className="absolute bottom-5 start-5 h-10 w-10 text-accent-600" /></div><div className="flex flex-1 flex-col p-5"><h3 className={`${isArabic ? 'font-arabic text-xl leading-snug' : 'font-heading text-2xl'} font-bold text-primary-900`}>{area.name}</h3><p className="mt-2 text-sm leading-6 text-ink/65">{area.sub}</p><div className="mt-5 space-y-3">{area.points.map((point) => <div key={point} className="flex items-start gap-2 text-sm leading-6 text-ink/70"><LineIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent-600" /><span>{point}</span></div>)}</div><span className="mt-auto inline-flex w-full items-center justify-center rounded-full border border-primary-700/15 bg-white/65 px-4 py-3 text-sm font-semibold text-primary-900 shadow-sm transition hover:border-accent-500 hover:bg-accent-50">{copy.viewServices} {area.name}</span></div></Link>)}</div><div className="glass-panel mt-8 rounded-[22px] p-5 sm:p-6"><div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-start"><div><h3 className={`${isArabic ? 'font-arabic text-2xl leading-snug' : 'font-heading text-2xl'} font-bold text-primary-900`}>{copy.noteTitle}</h3><p className="mt-2 max-w-3xl leading-7 text-ink/70">{copy.noteText}</p></div><Link href={`/${locale}/contact`} className="btn-primary w-full shrink-0 md:w-auto">{copy.viewAll}</Link></div></div></div></section>

      <section className="container-x pb-16 sm:pb-20"><div className="mx-auto grid max-w-6xl overflow-hidden rounded-[28px] border border-primary-700/10 bg-white/70 shadow-glass backdrop-blur-xl lg:grid-cols-[0.38fr_0.62fr]"><div className="p-6 sm:p-8"><p className="text-[0.66rem] font-bold uppercase tracking-[0.22em] text-accent-700">{copy.officeTitle}</p><h2 className={`${isArabic ? 'font-arabic leading-[1.35]' : 'font-heading leading-tight'} mt-3 text-3xl font-bold text-primary-900`}>{copy.mapTitle}</h2><p className="mt-4 text-sm leading-7 text-ink/70">{copy.officeText}</p><div className="mt-6 grid gap-3 text-sm font-semibold text-primary-900/76"><div className="rounded-2xl bg-[#f8f6f0] px-4 py-3">📍 Grand Mall, Ajman</div><div className="rounded-2xl bg-[#f8f6f0] px-4 py-3">🕘 {copy.timing}</div><div className="rounded-2xl bg-[#f8f6f0] px-4 py-3">📅 {copy.allDays}</div></div><Link href={`/${locale}/contact`} className="mt-6 inline-flex rounded-full bg-primary-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">{copy.viewAll}</Link></div><iframe src={mapEmbedUrl} title={copy.mapTitle} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[330px] w-full lg:h-full" /></div></section>
    </div>
  );
}
