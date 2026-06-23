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

  const copy = {
    badge: isArabic ? 'تغطية داخل عجمان فقط' : 'Ajman coverage only',
    title: isArabic ? 'خدمات العمالة المنزلية داخل مناطق عجمان' : 'Domestic worker services across Ajman districts',
    subtitle: isArabic
      ? 'نساعد العائلات داخل عجمان في اختيار خدمات الخادمات، المربيات، الطهاة، والرعاية المنزلية بتواصل واضح وتجربة راقية.'
      : 'We help families across Ajman arrange trusted maid, nanny, cook, and home-care services with clear guidance and premium follow-up.',
    primaryCta: isArabic ? 'احجز استشارة' : 'Book Consultation',
    whatsapp: isArabic ? 'واتساب' : 'WhatsApp Us',
    searchTitle: isArabic ? 'ابحث عن منطقتك داخل عجمان' : 'Find your Ajman neighborhood',
    searchPlaceholder: isArabic ? 'مثال: الراشدية، النعيمية، الجرف' : 'Enter neighborhood, e.g. Al Jurf',
    serviceRequired: isArabic ? 'الخدمة المطلوبة' : 'Service required',
    allServices: isArabic ? 'كل الخدمات' : 'All services',
    findHelp: isArabic ? 'اعرف التوفر' : 'Find Help',
    dashboardTitle: isArabic ? 'تغطية مركزة داخل عجمان' : 'Focused Ajman coverage',
    dashboardText: isArabic ? 'خدمة محلية واضحة مع متابعة منظمة داخل إمارة عجمان فقط.' : 'Clear local support and organized follow-up within Ajman only.',
    mapTitle: isArabic ? 'خريطة مكتب عناية في عجمان' : 'INAYA Ajman office map',
    categoriesTitle: isArabic ? 'الخدمات المتوفرة داخل عجمان' : 'Service categories available in Ajman',
    areasTitle: isArabic ? 'أبرز مناطق الخدمة' : 'Prime Ajman neighborhoods',
    areasText: isArabic ? 'نغطي مناطق عجمان الرئيسية، ويتم تأكيد التوفر حسب نوع الخدمة والموعد.' : 'We cover key Ajman districts, with availability confirmed by service type and timing.',
    viewAll: isArabic ? 'تواصل للتأكيد' : 'Contact to confirm',
    noteTitle: isArabic ? 'ملاحظة مهمة' : 'Important note',
    noteText: isArabic ? 'نخدم العملاء داخل عجمان فقط. إذا لم تكن منطقتك مذكورة، تواصل معنا لتأكيد التوفر.' : 'We currently serve customers inside Ajman only. If your area is not listed, contact us to confirm availability.'
  };

  const stats = [
    { label: isArabic ? 'نطاق الخدمة' : 'Service scope', value: isArabic ? 'عجمان فقط' : 'Ajman only' },
    { label: isArabic ? 'المناطق الرئيسية' : 'Key districts', value: isArabic ? 'رئيسية' : 'Focused' },
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

  const neighborhoods = [
    {
      name: isArabic ? 'الراشدية' : 'Al Rashidiya',
      sub: isArabic ? 'قريب من جراند مول والمناطق السكنية' : 'Near Grand Mall and residential communities',
      points: isArabic ? ['خادمات منزلية', 'خدمات رعاية ومتابعة'] : ['Maid services', 'Care and follow-up support']
    },
    {
      name: isArabic ? 'النعيمية' : 'Al Nuaimiya',
      sub: isArabic ? 'شقق ومنازل عائلية داخل عجمان' : 'Family apartments and homes in Ajman',
      points: isArabic ? ['خدمات تنظيف منزلية', 'مربيات حسب التوفر'] : ['Home cleaning support', 'Nannies subject to availability']
    },
    {
      name: isArabic ? 'الجرف' : 'Al Jurf',
      sub: isArabic ? 'فلل ومجتمعات سكنية' : 'Villas and residential communities',
      points: isArabic ? ['عمالة منزلية موثوقة', 'خدمات شهرية أو حسب الطلب'] : ['Trusted domestic workers', 'Monthly or requested services']
    },
    {
      name: isArabic ? 'المويهات' : 'Al Mowaihat',
      sub: isArabic ? 'مناطق عائلية واسعة داخل عجمان' : 'Spacious family districts inside Ajman',
      points: isArabic ? ['خدمات للعائلات', 'متابعة واضحة قبل الحجز'] : ['Family-focused services', 'Clear follow-up before booking']
    },
    {
      name: isArabic ? 'الروضة' : 'Al Rawda',
      sub: isArabic ? 'منازل وفلل بالقرب من الخدمات' : 'Homes and villas near key amenities',
      points: isArabic ? ['خادمات ومربيات', 'تأكيد التوفر عبر واتساب'] : ['Maids and nannies', 'Availability via WhatsApp']
    },
    {
      name: isArabic ? 'كورنيش عجمان' : 'Ajman Corniche',
      sub: isArabic ? 'أبراج وشقق سكنية على الساحل' : 'Coastal towers and apartments',
      points: isArabic ? ['خدمات منزلية مرنة', 'خيارات حسب احتياج الأسرة'] : ['Flexible domestic support', 'Options based on family needs']
    }
  ];

  return (
    <div className="bg-ivory text-ink">
      <section className="relative min-h-[82vh] overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(191,164,106,0.22),transparent_30rem),radial-gradient(circle_at_10%_45%,rgba(7,22,74,0.11),transparent_28rem)]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-70 lg:block">
          <div className="h-full w-full bg-[linear-gradient(135deg,rgba(7,22,74,0.10)_1px,transparent_1px),linear-gradient(45deg,rgba(191,164,106,0.12)_1px,transparent_1px)] bg-[length:42px_42px]" />
        </div>
        <div className="container-x relative flex min-h-[62vh] items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/60 px-4 py-2 text-sm font-semibold text-primary-900 shadow-sm backdrop-blur-xl">
              <LineIcon name="pin" className="h-4 w-4 text-accent-600" />
              {copy.badge}
            </span>
            <h1 className="mt-7 max-w-4xl font-heading text-5xl font-bold leading-none text-primary-900 sm:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">{copy.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={`/${locale}/booking`} className="btn-primary gap-2">
                {copy.primaryCta}
                <LineIcon name="spark" className="h-5 w-5" />
              </Link>
              <a href="https://wa.me/971502036767" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-accent-500/60 bg-white/60 px-7 py-3 font-semibold text-primary-900 shadow-glass backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-accent-50">
                <LineIcon name="message" className="h-5 w-5 text-accent-600" />
                {copy.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x relative z-10 -mt-20">
        <div className="glass-panel rounded-[28px] p-5 sm:p-7">
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-ink/55">{copy.searchTitle}</label>
              <div className="relative">
                <LineIcon name="search" className="absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-accent-600" />
                <input className="field ps-12" placeholder={copy.searchPlaceholder} />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-ink/55">{copy.serviceRequired}</label>
              <select className="field" defaultValue="all">
                <option value="all">{copy.allServices}</option>
                {categories.map((category) => (
                  <option key={category.en} value={category.en}>{isArabic ? category.ar : category.en}</option>
                ))}
              </select>
            </div>
            <button className="btn-primary h-[50px] px-8">{copy.findHelp}</button>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-[20px] p-6 text-center">
              <div className="font-heading text-3xl font-bold text-primary-900">{stat.value}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/55">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="font-heading text-4xl font-bold text-primary-900">{copy.dashboardTitle}</h2>
            <p className="mt-4 max-w-xl leading-7 text-ink/70">{copy.dashboardText}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-primary-900">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 shadow-sm"><span className="h-2 w-2 rounded-full bg-accent-500" /> {copy.badge}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 shadow-sm"><LineIcon name="shield" className="h-4 w-4 text-accent-600" /> INAYA Ajman</span>
            </div>
          </div>
          <div className="glass-panel relative min-h-[360px] overflow-hidden rounded-[28px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(191,164,106,0.26),transparent_18%),linear-gradient(135deg,rgba(7,22,74,0.11)_1px,transparent_1px),linear-gradient(45deg,rgba(191,164,106,0.10)_1px,transparent_1px)] bg-[length:100%_100%,34px_34px,34px_34px]" />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-900 text-white shadow-premium"><LineIcon name="pin" className="h-8 w-8" /></span>
              <span className="mt-3 rounded-full border border-primary-700/10 bg-white/80 px-6 py-2 text-sm font-bold text-primary-900 shadow-sm backdrop-blur-xl">Ajman</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-100/60 py-16">
        <div className="container-x">
          <h2 className="text-center font-heading text-4xl font-bold text-primary-900">{copy.categoriesTitle}</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {categories.map((category) => (
              <div key={category.en} className="glass-panel flex w-40 flex-col items-center rounded-[20px] p-6 text-center transition hover:-translate-y-1 hover:border-accent-500/40">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70 text-accent-600 shadow-sm">
                  <LineIcon name={category.icon} className="h-7 w-7" />
                </div>
                <span className="mt-4 font-semibold text-primary-900">{isArabic ? category.ar : category.en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-4xl font-bold text-primary-900">{copy.areasTitle}</h2>
            <p className="mt-3 max-w-2xl leading-7 text-ink/70">{copy.areasText}</p>
          </div>
          <Link href={`/${locale}/contact`} className="btn-outline gap-2">
            {copy.viewAll}
            <LineIcon name="spark" className="h-5 w-5 text-accent-600" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {neighborhoods.map((area) => (
            <div key={area.name} className="glass-panel overflow-hidden rounded-[24px] transition hover:-translate-y-1 hover:border-accent-500/40">
              <div className="relative h-44 overflow-hidden bg-ivory-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(191,164,106,0.26),transparent_26%),linear-gradient(135deg,rgba(7,22,74,0.10)_1px,transparent_1px),linear-gradient(45deg,rgba(191,164,106,0.10)_1px,transparent_1px)] bg-[length:100%_100%,32px_32px,32px_32px]" />
                <span className="absolute right-4 top-4 rounded-full bg-primary-900 px-3 py-1 text-xs font-bold text-white">Ajman</span>
                <LineIcon name="map" className="absolute bottom-5 start-5 h-12 w-12 text-accent-600" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-primary-900">{area.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink/65">{area.sub}</p>
                  </div>
                  <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-bold text-primary-900">{isArabic ? 'متاح' : 'Live'}</span>
                </div>
                <div className="mt-5 space-y-3">
                  {area.points.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-ink/70">
                      <LineIcon name="check" className="h-4 w-4 text-accent-600" />
                      {point}
                    </div>
                  ))}
                </div>
                <Link href={`/${locale}/contact`} className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-primary-700/15 bg-white/60 px-4 py-3 font-semibold text-primary-900 shadow-sm transition hover:border-accent-500 hover:bg-accent-50">
                  {copy.viewAll}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel mt-8 rounded-[24px] p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary-900">{copy.noteTitle}</h3>
              <p className="mt-2 leading-7 text-ink/70">{copy.noteText}</p>
            </div>
            <Link href={`/${locale}/contact`} className="btn-primary shrink-0">{copy.viewAll}</Link>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="overflow-hidden rounded-[28px] border border-primary-700/10 bg-white/70 shadow-glass backdrop-blur-xl">
          <iframe
            src={mapEmbedUrl}
            title={copy.mapTitle}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[430px] w-full"
          />
        </div>
      </section>
    </div>
  );
}
