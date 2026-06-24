import Link from 'next/link';

type IconName = 'check' | 'spark' | 'shield' | 'clock' | 'message' | 'arrow';

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    check: <path {...common} d="m5 12 4 4L19 6" />,
    spark: <path {...common} d="M12 3l1.5 5.1L19 10l-5.5 1.9L12 17l-1.5-5.1L5 10l5.5-1.9L12 3Z" />,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    clock: <><path {...common} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path {...common} d="M12 7v5l3 2" /></>,
    message: <path {...common} d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v3.8a3.8 3.8 0 0 1-3.8 3.8H10l-4.5 3.2.9-4A3.8 3.8 0 0 1 5 10.6V6.8Z" />,
    arrow: <><path {...common} d="M5 12h14" /><path {...common} d="m13 6 6 6-6 6" /></>
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

export default function PricingPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl';
  const sectionTitleClass = isArabic
    ? 'font-arabic text-3xl font-bold leading-[1.35] text-primary-900 sm:text-4xl'
    : 'font-heading text-3xl font-bold leading-tight text-primary-900 sm:text-4xl';

  const copy = {
    badge: isArabic ? 'أسعار واضحة حسب نوع الخدمة' : 'Transparent guidance by service type',
    title: isArabic ? 'باقات وأسعار خدمات العمالة المنزلية' : 'Domestic worker service pricing',
    subtitle: isArabic
      ? 'تختلف الأسعار حسب نوع الخدمة، مدة التعاقد، الإمارة، والتوفر. نوضح لك التكلفة والخطوات قبل تأكيد أي حجز.'
      : 'Pricing depends on service type, contract duration, emirate and availability. We explain the cost and steps before any booking is confirmed.',
    primaryCta: isArabic ? 'اطلب عرض سعر' : 'Request a Quote',
    whatsapp: isArabic ? 'اسأل عبر واتساب' : 'Ask on WhatsApp',
    compareTitle: isArabic ? 'اختر طريقة الخدمة المناسبة' : 'Choose the right service model',
    noteTitle: isArabic ? 'ملاحظة مهمة' : 'Important note',
    noteText: isArabic
      ? 'الأسعار المعروضة إرشادية فقط. يتم تأكيد السعر النهائي بعد مراجعة احتياجك، الإمارة، نوع الخدمة، والمدة المطلوبة.'
      : 'Displayed prices are guidance only. Final pricing is confirmed after reviewing your requirement, emirate, service type and requested duration.',
    includesTitle: isArabic ? 'ما الذي يشمله التواصل معنا؟' : 'What our consultation includes',
    ctaTitle: isArabic ? 'تحتاج سعراً دقيقاً؟' : 'Need an exact price?',
    ctaText: isArabic ? 'أرسل لنا تفاصيل الخدمة المطلوبة وسنوضح لك أفضل خيار متاح والخطوات التالية.' : 'Share your requirement and we will explain the best available option and next steps.',
    ctaButton: isArabic ? 'تواصل الآن' : 'Contact Now'
  };

  const plans = [
    {
      name: isArabic ? 'مساعدة بدوام جزئي' : 'Part-time Help',
      price: isArabic ? 'حسب الساعات' : 'Hourly / Daily',
      tag: isArabic ? 'مرن' : 'Flexible',
      desc: isArabic ? 'خيار مناسب للتنظيف أو المساعدة المنزلية حسب الحاجة.' : 'Suitable for cleaning or household help based on your schedule.',
      features: isArabic ? ['توقيت مرن حسب التوفر', 'مناسب للزيارات القصيرة', 'تأكيد قبل الحجز'] : ['Flexible timing by availability', 'Good for short visits', 'Confirmed before booking']
    },
    {
      name: isArabic ? 'خادمة أو مربية شهرية' : 'Monthly Maid or Nanny',
      price: isArabic ? 'شهرياً' : 'Monthly',
      tag: isArabic ? 'الأكثر طلباً' : 'Most requested',
      desc: isArabic ? 'مناسب للعائلات التي تحتاج دعماً منزلياً منتظماً.' : 'For families that need regular home support.',
      popular: true,
      features: isArabic ? ['خادمة أو مربية حسب الاحتياج', 'متابعة واضحة من الفريق', 'خيارات حسب الإمارة'] : ['Maid or nanny by requirement', 'Clear team follow-up', 'Options by emirate']
    },
    {
      name: isArabic ? 'خدمة إقامة كاملة' : 'Live-in Support',
      price: isArabic ? 'حسب العقد' : 'By contract',
      tag: isArabic ? 'شامل' : 'Full support',
      desc: isArabic ? 'خيار للعائلات التي تحتاج دعماً مستمراً داخل المنزل.' : 'For families needing continuous in-home support.',
      features: isArabic ? ['إرشاد بشأن الإجراءات', 'مناسب للعقود الطويلة', 'تفاصيل واضحة قبل البدء'] : ['Process guidance', 'Suitable for longer contracts', 'Clear details before starting']
    }
  ];

  const includes = [
    { icon: 'shield' as IconName, title: isArabic ? 'توضيح الخيارات' : 'Option guidance', text: isArabic ? 'نشرح الفرق بين الخدمات حسب احتياج الأسرة.' : 'We explain the differences between service options.' },
    { icon: 'clock' as IconName, title: isArabic ? 'تأكيد التوفر' : 'Availability check', text: isArabic ? 'نراجع الإمارة، الوقت، ونوع الخدمة قبل التأكيد.' : 'We review emirate, timing and service type before confirmation.' },
    { icon: 'message' as IconName, title: isArabic ? 'متابعة سريعة' : 'Fast follow-up', text: isArabic ? 'واتساب متاح لتوضيح التفاصيل والخطوة التالية.' : 'WhatsApp is available to clarify details and next steps.' }
  ];

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_10%_48%,rgba(7,22,74,0.10),transparent_26rem)]" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500" />
              {copy.badge}
            </span>
            <h1 className={`mx-auto mt-6 max-w-4xl ${headingClass}`}>{copy.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">{copy.subtitle}</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link href={`/${locale}/booking`} className="btn-primary w-full gap-2 sm:w-auto">
                {copy.primaryCta}
                <LineIcon name="arrow" className="h-5 w-5" />
              </Link>
              <a href="https://wa.me/971502036767" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent-500/60 bg-white/65 px-7 py-3 font-semibold text-primary-900 shadow-glass backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-accent-50 sm:w-auto">
                <LineIcon name="message" className="h-5 w-5 text-accent-600" />
                {copy.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className={sectionTitleClass}>{copy.compareTitle}</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`glass-panel relative flex h-full flex-col rounded-[26px] p-6 transition hover:-translate-y-1 hover:border-accent-500/40 sm:p-7 ${plan.popular ? 'ring-1 ring-accent-500/45' : ''}`}>
                <div className="absolute right-5 top-5 rounded-full bg-primary-900 px-3 py-1 text-xs font-bold text-white">{plan.tag}</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-50 text-accent-700 shadow-sm">
                  <LineIcon name="spark" className="h-6 w-6" />
                </div>
                <h3 className={`${isArabic ? 'font-arabic text-2xl leading-snug' : 'font-heading text-3xl'} mt-6 font-bold text-primary-900`}>{plan.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{plan.desc}</p>
                <div className="mt-5 text-2xl font-bold text-primary-900">{plan.price}</div>
                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-ink/70">
                      <LineIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={`/${locale}/booking`} className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-primary-700/15 bg-white/65 px-4 py-3 text-sm font-semibold text-primary-900 shadow-sm transition hover:border-accent-500 hover:bg-accent-50">
                  {copy.primaryCta}
                </Link>
              </div>
            ))}
          </div>
          <div className="glass-panel mt-6 rounded-[22px] p-5 sm:p-6">
            <h3 className="font-bold text-primary-900">{copy.noteTitle}</h3>
            <p className="mt-2 leading-7 text-ink/70">{copy.noteText}</p>
          </div>
        </div>
      </section>

      <section className="bg-ivory-100/60 py-12 sm:py-16">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <h2 className={`text-center ${sectionTitleClass}`}>{copy.includesTitle}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {includes.map((item) => (
                <div key={item.title} className="glass-panel rounded-[22px] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/75 text-accent-600 shadow-sm">
                    <LineIcon name={item.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-bold text-primary-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-12 sm:py-16">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-primary-900 p-7 text-white shadow-glass sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(191,164,106,0.28),transparent_22rem)]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className={`${isArabic ? 'font-arabic text-3xl leading-snug' : 'font-heading text-4xl'} font-bold`}>{copy.ctaTitle}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/78">{copy.ctaText}</p>
            </div>
            <Link href={`/${locale}/contact`} className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3 font-bold text-primary-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-accent-400 md:w-auto">
              {copy.ctaButton}
              <LineIcon name="arrow" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
