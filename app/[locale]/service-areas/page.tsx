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
    message: <><path {...common} d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v3.8a3.8 3.8 0 0 1-3.8 3.8H10l-4.5 3.2.9-4A3.8 3.8 0 0 1 5 10.6V6.8Z" /></>,
    calendar: <><path {...common} d="M5 5h14v15H5V5Z" /><path {...common} d="M8 3v4M16 3v4M5 9h14" /></>,
    spark: <><path {...common} d="M12 3l1.5 5.1L19 10l-5.5 1.9L12 17l-1.5-5.1L5 10l5.5-1.9L12 3Z" /></>,
    check: <><path {...common} d="m5 12 4 4L19 6" /></>,
    map: <><path {...common} d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2V6Z" /><path {...common} d="M9 4v14M15 6v14" /></>
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

export default function ServiceAreasPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-5xl font-bold leading-[0.95] text-primary-900 sm:text-6xl lg:text-7xl';
  const sectionTitleClass = isArabic
    ? 'font-arabic text-3xl font-bold leading-[1.35] text-primary-900 sm:text-4xl'
    : 'font-heading text-4xl font-bold leading-tight text-primary-900';

  const copy = {
    badge: isArabic ? 'نخدم جميع إمارات الدولة' : 'Serving all UAE emirates',
    title: isArabic ? 'خدمات العمالة المنزلية في جميع أنحاء الإمارات' : 'Maid and domestic worker services across the UAE',
    subtitle: isArabic
      ? 'عناية للعمالة المنزلية خيار موثوق للعائلات التي تبحث عن خادمات ومربيات وطهاة وعمالة رعاية في جميع إمارات الدولة.'
      : 'INAYA Domestic Workers is a trusted UAE maid and domestic worker company for families looking for maids, nannies, cooks and caregivers across all emirates.',
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
    categoriesTitle: isArabic ? 'الخدمات المتوفرة في الإمارات' : 'Service categories available across the UAE',
    areasTitle: isArabic ? 'الإمارات والمناطق التي نخدمها' : 'UAE emirates and areas we serve',
    areasText: isArabic ? 'نغطي جميع إمارات الدولة، ويتم تأكيد التوفر حسب نوع الخدمة والموعد والمنطقة.' : 'We serve all UAE emirates, with availability confirmed by service type, timing and area.',
    viewAll: isArabic ? 'تواصل للتأكيد' : 'Contact to confirm',
    noteTitle: isArabic ? 'ملاحظة عن التوفر' : 'Availability note',
    noteText: isArabic ? 'نقدم خدمات العمالة المنزلية في جميع أنحاء الإمارات. قد يختلف التوفر حسب الإمارة والمنطقة ونوع الخدمة، لذلك يرجى التواصل معنا للتأكيد.' : 'We provide domestic worker services across the UAE. Availability can vary by emirate, area and service type, so please contact us to confirm your requirement.'
  };

  const stats = [
    { label: isArabic ? 'نطاق الخدمة' : 'Service scope', value: isArabic ? 'كل الإمارات' : 'All UAE' },
    { label: isArabic ? 'الإمارات' : 'Emirates', value: '7' },
    { label: isArabic ? 'التواصل' : 'Follow-up', value: isArabic ? 'واضح' : 'Clear' },
    { label: isArabic ? 'زيارة المكتب' : 'Office visit', value: isArabic ? 'متاح' : 'Available' }
  ];

  const categories = [
    { icon: 'home' as IconName, en: 'House Maid', ar: 'خادمة منزلية' },
    { icon: 'shield' as IconName, en: 'Nanny', ar: 'مربية أطفال' },
    { icon: 'service' as IconName, en: 'Babysitter', ar: 'جليسة أطفال' },
    { icon: 'message' as IconName, en: 'Caregiver', ar: 'رعاية منزلية' },
    { icon: 'calendar' as IconName, en: 'Part-time Help', ar: 'دوام جزئي' },
    { icon: 'spark' as IconName, en: 'Cook', ar: 'طباخة / طاهٍ' }
  ];

  const areas = [
    {
      name: isArabic ? 'دبي' : 'Dubai',
      sub: isArabic ? 'خدمات خادمات وعمالة منزلية للعائلات في دبي' : 'Maid and domestic worker services for Dubai families',
      points: isArabic ? ['خادمات ومربيات', 'خيارات حسب التوفر'] : ['Maids and nannies', 'Options subject to availability']
    },
    {
      name: isArabic ? 'أبوظبي' : 'Abu Dhabi',
      sub: isArabic ? 'دعم منزلي موثوق للعائلات في أبوظبي' : 'Trusted home support for families in Abu Dhabi',
      points: isArabic ? ['عمالة منزلية موثوقة', 'رعاية منزلية وطهاة'] : ['Trusted domestic workers', 'Caregivers and cooks']
    },
    {
      name: isArabic ? 'الشارقة' : 'Sharjah',
      sub: isArabic ? 'خدمات منزلية مرنة للعائلات في الشارقة' : 'Flexible domestic services for Sharjah homes',
      points: isArabic ? ['خدمات شهرية أو حسب الطلب', 'تأكيد سريع عبر واتساب'] : ['Monthly or requested services', 'Quick WhatsApp confirmation']
    },
    {
      name: isArabic ? 'عجمان' : 'Ajman',
      sub: isArabic ? 'مقرنا في عجمان مع دعم لجميع الإمارات' : 'Our office base with UAE-wide support',
      points: isArabic ? ['زيارة المكتب متاحة', 'متابعة واضحة قبل الحجز'] : ['Office visit available', 'Clear follow-up before booking']
    },
    {
      name: isArabic ? 'رأس الخيمة' : 'Ras Al Khaimah',
      sub: isArabic ? 'خيارات خادمات ودعم منزلي حسب التوفر' : 'Maid and home support options by availability',
      points: isArabic ? ['خدمات للعائلات', 'تأكيد المنطقة قبل الحجز'] : ['Family-focused services', 'Area confirmation before booking']
    },
    {
      name: isArabic ? 'الفجيرة' : 'Fujairah',
      sub: isArabic ? 'خدمات عمالة منزلية للعائلات في الفجيرة' : 'Domestic worker services for Fujairah families',
      points: isArabic ? ['خادمات ورعاية منزلية', 'تنسيق حسب المتطلبات'] : ['Maids and home care', 'Coordination by requirement']
    },
    {
      name: isArabic ? 'أم القيوين' : 'Umm Al Quwain',
      sub: isArabic ? 'دعم منزلي موثوق حسب التوفر' : 'Trusted home support subject to availability',
      points: isArabic ? ['خدمات مرنة', 'متابعة ودية'] : ['Flexible services', 'Friendly follow-up']
    },
    {
      name: isArabic ? 'العين' : 'Al Ain',
      sub: isArabic ? 'خدمات عائلية منزلية داخل منطقة العين' : 'Family home services across Al Ain',
      points: isArabic ? ['خيارات مناسبة للعائلات', 'تأكيد التوفر حسب المنطقة'] : ['Family-suitable options', 'Availability by area']
    }
  ];

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_8%_44%,rgba(7,22,74,0.10),transparent_26rem)]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-60 lg:block">
          <div className="h-full w-full bg-[linear-gradient(135deg,rgba(7,22,74,0.08)_1px,transparent_1px),linear-gradient(45deg,rgba(191,164,106,0.10)_1px,transparent_1px)] bg-[length:42px_42px]" />
        </div>
        <div className="container-x relative">
          <div className="max-w-4xl text-center sm:text-start">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:mx-0 sm:text-sm">
              <LineIcon name="pin" className="h-4 w-4 shrink-0 text-accent-600" />
              {copy.badge}
            </span>
            <h1 className={`mt-6 max-w-4xl ${headingClass}`}>
              {copy.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:mx-0 sm:text-lg sm:leading-8">{copy.subtitle}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-start">
              <Link href={`/${locale}/booking`} className="btn-primary w-full gap-2 sm:w-auto">
                {copy.primaryCta}
                <LineIcon name="spark" className="h-5 w-5" />
              </Link>
              <a href="https://wa.me/971502036767" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent-500/60 bg-white/65 px-7 py-3 font-semibold text-primary-900 shadow-glass backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-accent-50 sm:w-auto">
                <LineIcon name="message" className="h-5 w-5 text-accent-600" />
                {copy.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x relative z-10 -mt-6 sm:-mt-8">
        <div className="glass-panel mx-auto max-w-6xl rounded-[24px] p-4 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
            <div>
              <label className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink/55 sm:text-xs">{copy.searchTitle}</label>
              <div className="relative">
                <LineIcon name="search" className="absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-accent-600" />
                <input className="field ps-12" placeholder={copy.searchPlaceholder} />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink/55 sm:text-xs">{copy.serviceRequired}</label>
              <select className="field" defaultValue="all">
                <option value="all">{copy.allServices}</option>
                {categories.map((category) => (
                  <option key={category.en} value={category.en}>{isArabic ? category.ar : category.en}</option>
                ))}
              </select>
            </div>
            <button className="btn-primary h-[50px] w-full px-8 lg:w-auto">{copy.findHelp}</button>
          </div>
        </div>
      </section>

      <section className="container-x py-10 sm:py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-[18px] p-4 text-center sm:p-6">
              <div className={`${isArabic ? 'font-arabic text-2xl leading-snug' : 'font-heading text-3xl'} font-bold text-primary-900`}>{stat.value}</div>
              <div className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-ink/55 sm:text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-12 sm:pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="text-center lg:text-start">
            <h2 className={sectionTitleClass}>{copy.dashboardTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-ink/70 lg:mx-0">{copy.dashboardText}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold text-primary-900 lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/65 px-4 py-2 shadow-sm"><span className="h-2 w-2 rounded-full bg-accent-500" /> {copy.badge}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/65 px-4 py-2 shadow-sm"><LineIcon name="shield" className="h-4 w-4 text-accent-600" /> INAYA UAE</span>
            </div>
          </div>
          <div className="glass-panel relative min-h-[260px] overflow-hidden rounded-[24px] sm:min-h-[320px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(191,164,106,0.26),transparent_18%),linear-gradient(135deg,rgba(7,22,74,0.11)_1px,transparent_1px),linear-gradient(45deg,rgba(191,164,106,0.10)_1px,transparent_1px)] bg-[length:100%_100%,34px_34px,34px_34px]" />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-900 text-white shadow-premium sm:h-16 sm:w-16"><LineIcon name="map" className="h-7 w-7 sm:h-8 sm:w-8" /></span>
              <span className="mt-3 rounded-full border border-primary-700/10 bg-white/80 px-5 py-2 text-sm font-bold text-primary-900 shadow-sm backdrop-blur-xl">All UAE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-100/60 py-12 sm:py-16">
        <div className="container-x">
          <h2 className={`mx-auto max-w-4xl text-center ${sectionTitleClass}`}>{copy.categoriesTitle}</h2>
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <div key={category.en} className="glass-panel flex min-h-[128px] flex-col items-center justify-center rounded-[18px] p-4 text-center transition hover:-translate-y-1 hover:border-accent-500/40 sm:min-h-[140px] sm:p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/75 text-accent-600 shadow-sm sm:h-14 sm:w-14">
                  <LineIcon name={category.icon} className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <span className="mt-3 text-sm font-semibold leading-snug text-primary-900 sm:text-base">{isArabic ? category.ar : category.en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-start">
            <div>
              <h2 className={sectionTitleClass}>{copy.areasTitle}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-ink/70">{copy.areasText}</p>
            </div>
            <Link href={`/${locale}/contact`} className="btn-outline w-full gap-2 md:w-auto">
              {copy.viewAll}
              <LineIcon name="spark" className="h-5 w-5 text-accent-600" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area.name} className="glass-panel flex h-full flex-col overflow-hidden rounded-[22px] transition hover:-translate-y-1 hover:border-accent-500/40">
                <div className="relative h-32 overflow-hidden bg-ivory-100 sm:h-36">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(191,164,106,0.26),transparent_26%),linear-gradient(135deg,rgba(7,22,74,0.10)_1px,transparent_1px),linear-gradient(45deg,rgba(191,164,106,0.10)_1px,transparent_1px)] bg-[length:100%_100%,32px_32px,32px_32px]" />
                  <span className="absolute right-4 top-4 rounded-full bg-primary-900 px-3 py-1 text-xs font-bold text-white">UAE</span>
                  <LineIcon name="map" className="absolute bottom-5 start-5 h-10 w-10 text-accent-600" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className={`${isArabic ? 'font-arabic text-xl leading-snug' : 'font-heading text-2xl'} font-bold text-primary-900`}>{area.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{area.sub}</p>
                  <div className="mt-5 space-y-3">
                    {area.points.map((point) => (
                      <div key={point} className="flex items-start gap-2 text-sm leading-6 text-ink/70">
                        <LineIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent-600" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/${locale}/contact`} className="mt-auto inline-flex w-full items-center justify-center rounded-full border border-primary-700/15 bg-white/65 px-4 py-3 text-sm font-semibold text-primary-900 shadow-sm transition hover:border-accent-500 hover:bg-accent-50">
                    {copy.viewAll}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-panel mt-8 rounded-[22px] p-5 sm:p-6">
            <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-start">
              <div>
                <h3 className={`${isArabic ? 'font-arabic text-2xl leading-snug' : 'font-heading text-2xl'} font-bold text-primary-900`}>{copy.noteTitle}</h3>
                <p className="mt-2 max-w-3xl leading-7 text-ink/70">{copy.noteText}</p>
              </div>
              <Link href={`/${locale}/contact`} className="btn-primary w-full shrink-0 md:w-auto">{copy.viewAll}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[24px] border border-primary-700/10 bg-white/70 shadow-glass backdrop-blur-xl">
          <iframe
            src={mapEmbedUrl}
            title={copy.mapTitle}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full sm:h-[430px]"
          />
        </div>
      </section>
    </div>
  );
}
