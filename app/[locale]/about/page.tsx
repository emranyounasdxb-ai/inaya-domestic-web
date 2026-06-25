import Link from 'next/link';

type IconName = 'shield' | 'heart' | 'spark' | 'check' | 'lock' | 'arrow';

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    heart: <path {...common} d="M20.4 6.6a4.6 4.6 0 0 0-6.5 0L12 8.5l-1.9-1.9a4.6 4.6 0 1 0-6.5 6.5L12 21l8.4-7.9a4.6 4.6 0 0 0 0-6.5Z" />,
    spark: <path {...common} d="M12 3l1.5 5.1L19 10l-5.5 1.9L12 17l-1.5-5.1L5 10l5.5-1.9L12 3Z" />,
    check: <path {...common} d="m5 12 4 4 10-10" />,
    lock: <><path {...common} d="M7 11V8a5 5 0 0 1 10 0v3" /><path {...common} d="M6 11h12v9H6v-9Z" /></>,
    arrow: <><path {...common} d="M5 12h14" /><path {...common} d="m13 6 6 6-6 6" /></>
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';

  const copy = {
    badge: isArabic ? 'حول عناية للعمالة المنزلية' : 'About INAYA Domestic Workers',
    eyebrow: isArabic ? 'إرث عناية' : 'The INAYA Legacy',
    title: isArabic ? 'تعريف التميز في خدمات العمالة المنزلية' : 'Defining Domestic Excellence',
    subtitle: isArabic
      ? 'إرث من الثقة والوضوح والجودة في خدمات العمالة المنزلية داخل الإمارات. نساعد العائلات على اختيار الدعم المنزلي بثقة وراحة.'
      : 'A legacy of trust, clarity and uncompromising quality in UAE domestic worker services. We help families choose home support with confidence.',
    storyTitle: isArabic ? 'قصتنا' : 'Our Story',
    story: isArabic ? [
      'بدأت عناية برؤية واضحة: سد الفجوة بين العائلات في الإمارات واحتياجها إلى خدمات منزلية موثوقة ومنظمة.',
      'نركز على الوضوح من أول تواصل، نفهم الاحتياج، نراجع التوفر، نشرح الخطوات، ونبقى متاحين للمتابعة.'
    ] : [
      'INAYA began with a focused vision: to bridge the gap between UAE families and reliable, well-organized domestic worker services.',
      'Our role is to make every household decision feel clear, supported and professionally managed from the first enquiry to follow-up.'
    ],
    principlesTitle: isArabic ? 'مبادئ التأسيس' : 'Founding Principles',
    principles: isArabic ? [
      'تواصل واضح قبل كل التزام.',
      'خدمة منظمة تناسب احتياج كل منزل.',
      'متابعة مسؤولة بعد تأكيد الخدمة.'
    ] : [
      'Clear communication before every commitment.',
      'Organized guidance around each household requirement.',
      'Responsible follow-up after every confirmation.'
    ],
    purposeTitle: isArabic ? 'الغاية والقيم' : 'Purpose & Values',
    purposeSub: isArabic ? 'الأسس التي تحدد خدمتنا وتوجه كل تواصل.' : 'The pillars that define our service and guide every interaction.',
    missionLabel: isArabic ? 'رسالتنا' : 'Our Mission',
    mission: isArabic
      ? 'رفع مستوى خدمات العمالة المنزلية من خلال تواصل واضح، متابعة مهنية، وتجربة تمنح كل أسرة راحة وثقة.'
      : 'To elevate the standard of domestic care through clear guidance, organized service and a calm experience for every family we serve.',
    visionLabel: isArabic ? 'رؤيتنا' : 'Our Vision',
    vision: isArabic
      ? 'أن نكون اسماً موثوقاً للعائلات التي تبحث عن خدمات عمالة منزلية راقية ومنظمة في الإمارات.'
      : 'To become a trusted name for families seeking premium, organized domestic worker services across the UAE.',
    values: isArabic ? [
      { icon: 'lock' as IconName, title: 'الخصوصية', text: 'نتعامل مع تفاصيل الأسرة والمستندات بعناية ومسؤولية.' },
      { icon: 'shield' as IconName, title: 'الثقة', text: 'كل خطوة مصممة لتكون واضحة قبل المتابعة.' },
      { icon: 'spark' as IconName, title: 'الرقي', text: 'خدمة هادئة ومنظمة تعكس معايير عناية.' },
      { icon: 'heart' as IconName, title: 'الرعاية', text: 'كل طلب يعامل كاحتياج منزلي مهم.' }
    ] : [
      { icon: 'lock' as IconName, title: 'Discretion', text: 'Family details and documents are handled with care and responsibility.' },
      { icon: 'shield' as IconName, title: 'Trust', text: 'Every step is designed to be clear before moving forward.' },
      { icon: 'spark' as IconName, title: 'Refinement', text: 'A calm, organized service experience that reflects INAYA standards.' },
      { icon: 'heart' as IconName, title: 'Care', text: 'Every request is treated as an important household requirement.' }
    ],
    standardsEyebrow: isArabic ? 'أسلوب عملنا' : 'The INAYA Standard',
    standardsTitle: isArabic ? 'معايير واضحة لا نتنازل عنها' : 'Uncompromising Standards',
    standardsText: isArabic
      ? 'تعتمد خدمتنا على خطوات عملية وواضحة تساعد العائلة على فهم الخيارات والتكلفة والتوفر قبل اتخاذ القرار.'
      : 'Our process is step-by-step, practical and clear, helping families understand options, cost and availability before making a decision.',
    standards: isArabic ? [
      { title: 'فهم الاحتياج أولاً', text: 'نبدأ بمعرفة نوع الخدمة، الإمارة، الوقت، وتفاصيل المنزل حتى يكون التوجيه مناسباً.' },
      { title: 'مراجعة التوفر', text: 'نراجع الخيارات المتاحة حسب الخدمة والمنطقة والمدة المطلوبة قبل تقديم أي تأكيد.' },
      { title: 'توضيح الخطوات', text: 'نشرح الأسعار، المستندات، والتزامات كل طرف قبل المتابعة.' },
      { title: 'متابعة منظمة', text: 'يبقى الفريق متاحاً بعد الحجز للرد على الأسئلة ومتابعة أي ملاحظة.' }
    ] : [
      { title: 'Initial Requirement Review', text: 'We start with the service type, emirate, timing and household details so guidance is relevant.' },
      { title: 'Availability Matching', text: 'Available options are reviewed by service, area and requested duration before confirmation.' },
      { title: 'Clear Step Explanation', text: 'Pricing, documents and responsibilities are explained before the family proceeds.' },
      { title: 'Organized Follow-up', text: 'The team remains available after booking to answer questions and review concerns.' }
    ],
    leadershipEyebrow: isArabic ? 'العنصر البشري' : 'The Human Element',
    leadershipTitle: isArabic ? 'التميز في القيادة' : 'Excellence in Leadership',
    leadershipText: isArabic
      ? 'يجمع فريق عناية بين الخبرة التشغيلية وفهم احتياجات البيوت في الإمارات، حتى تكون كل محادثة عملية وواضحة ومحترمة.'
      : 'Our team brings operational experience and an understanding of UAE households, ensuring every service conversation is practical, clear and respectful.',
    complianceTitle: isArabic ? 'التزام واضح' : 'Clear Compliance',
    complianceText: isArabic
      ? 'نوضح الخطوات والمستندات والسياسات الأساسية قبل الحجز حتى يكون القرار واضحاً.'
      : 'We explain steps, documents and key policies before booking so each decision is clear.',
    differenceTitle: isArabic ? 'الفرق مع عناية' : 'The INAYA Difference',
    differenceText: isArabic
      ? 'نحن لا نركز فقط على تقديم خدمة، بل على تجربة كاملة: فهم الاحتياج، توضيح الخيارات، تنظيم الخطوات، والمتابعة بعد الحجز.'
      : 'We focus on more than providing a service. We create a complete experience: understanding the need, explaining options, organizing steps and following up after booking.',
    ctaPrimary: isArabic ? 'قابل فريقنا' : 'Meet Our Team',
    ctaSecondary: isArabic ? 'احجز استشارة' : 'Book a Consultation'
  };

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(191,164,106,0.20),transparent_26rem),radial-gradient(circle_at_50%_70%,rgba(7,22,74,0.07),transparent_28rem)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/25 bg-white/80 px-4 py-2 text-sm font-semibold text-primary-900 shadow-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            {copy.badge}
          </span>
          <p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-accent-700">{copy.eyebrow}</p>
          <h1 className={`${isArabic ? 'font-arabic leading-[1.22]' : 'font-heading leading-[1.02]'} mx-auto mt-5 max-w-4xl text-[2.45rem] font-bold tracking-[-0.045em] text-primary-900 sm:text-[3.4rem] lg:text-[4.15rem]`}>{copy.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1rem] leading-8 text-ink/65 sm:text-[1.05rem]">{copy.subtitle}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-full bg-primary-900 px-7 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(7,22,74,0.18)] transition hover:-translate-y-0.5">
              {isArabic ? 'تواصل معنا' : 'Contact Us'}
            </Link>
            <Link href={`/${locale}/services`} className="inline-flex items-center justify-center rounded-full border border-accent-500/30 bg-white px-7 py-3 text-sm font-bold text-primary-900 shadow-sm transition hover:-translate-y-0.5">
              {isArabic ? 'استكشف الخدمات' : 'Explore Services'}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-black/8 px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold leading-tight tracking-[-0.03em] text-primary-900 sm:text-[2.45rem]`}>{copy.storyTitle}</h2>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-[1rem] leading-8 text-ink/65">
              {copy.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div>
              <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[1.35rem] font-bold text-primary-900`}>{copy.principlesTitle}</h3>
              <div className="mt-5 space-y-4 text-sm leading-6 text-ink/65">
                {copy.principles.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent-500/35 text-accent-700"><LineIcon name="check" className="h-3 w-3" /></span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2f4] px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2.15rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.purposeTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-ink/60 sm:text-base">{copy.purposeSub}</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[12px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"><p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent-700">{copy.missionLabel}</p><h3 className={`${isArabic ? 'font-arabic leading-snug' : 'font-heading leading-tight'} mt-5 text-[1.55rem] font-bold tracking-[-0.03em] text-primary-900 sm:text-[2rem]`}>{copy.mission}</h3></div>
            <div className="rounded-[12px] bg-primary-900 p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]"><p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent-300">{copy.visionLabel}</p><h3 className={`${isArabic ? 'font-arabic leading-snug' : 'font-heading leading-tight'} mt-5 text-[1.55rem] font-bold tracking-[-0.03em] sm:text-[2rem]`}>{copy.vision}</h3></div>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.values.map((value) => (
              <div key={value.title} className="min-h-[190px] rounded-[10px] bg-white p-6 shadow-[0_18px_55px_rgba(0,0,0,0.045)]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500/10 text-accent-700 ring-1 ring-accent-500/20"><LineIcon name={value.icon} className="h-4 w-4" /></div>
                <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-7 text-xl font-bold tracking-[-0.03em] text-primary-900`}>{value.title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/60">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-900 px-6 py-20 text-white sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl"><p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-300">{copy.standardsEyebrow}</p><h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 text-[2.1rem] font-bold tracking-[-0.04em] sm:text-[3rem]`}>{copy.standardsTitle}</h2><p className="mt-5 max-w-xl text-[0.98rem] leading-8 text-white/65">{copy.standardsText}</p></div>
          <div className="relative mx-auto mt-20 max-w-4xl"><div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/28 md:block" /><div className="space-y-14">{copy.standards.map((step, index) => (<div key={step.title} className={`relative grid gap-8 md:grid-cols-2 ${index % 2 === 0 ? 'md:text-end' : 'md:[&>*:first-child]:col-start-2'}`}><div className="md:px-8"><h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[1.28rem] font-bold tracking-[-0.03em] text-white`}>{step.title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{step.text}</p></div><span className="absolute left-1/2 top-0 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary-900 text-xs font-bold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.65),0_0_0_8px_rgba(255,255,255,0.05)] md:flex">{String(index + 1).padStart(2, '0')}</span></div>))}</div></div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl"><div className="mx-auto max-w-3xl text-center"><p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{copy.leadershipEyebrow}</p><h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 text-[2.15rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.leadershipTitle}</h2><p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-7 text-ink/60">{copy.leadershipText}</p></div><div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[10px] bg-primary-900 p-1 shadow-[0_30px_90px_rgba(0,0,0,0.18)]"><div className="relative flex min-h-[260px] items-center justify-center rounded-[8px] bg-primary-900 px-8 text-center text-white"><div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:70px_70px]" /><p className="relative text-[0.72rem] font-bold uppercase tracking-[0.32em] text-white/78">Leadership Profiles Coming Soon</p></div></div></div>
      </section>

      <section className="bg-primary-900 px-6 py-20 text-white sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.82fr_1.18fr]"><div className="rounded-[12px] bg-white p-8 text-ink shadow-[0_25px_70px_rgba(0,0,0,0.22)]"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/10 text-accent-700 ring-1 ring-accent-500/20"><LineIcon name="shield" className="h-5 w-5" /></div><h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-8 text-[1.55rem] font-bold tracking-[-0.04em] text-primary-900`}>{copy.complianceTitle}</h3><p className="mt-5 text-sm leading-7 text-ink/60">{copy.complianceText}</p></div><div className="rounded-[12px] bg-[#050505] p-8 text-white shadow-[0_25px_70px_rgba(0,0,0,0.28)] sm:p-10"><h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold tracking-[-0.04em] sm:text-[2.7rem]`}>{copy.differenceTitle}</h2><p className="mt-6 max-w-2xl text-[0.98rem] leading-8 text-white/62">{copy.differenceText}</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-primary-900 transition hover:-translate-y-0.5 hover:bg-white/90">{copy.ctaPrimary}</Link><Link href={`/${locale}/booking`} className="inline-flex items-center justify-center rounded-full border border-white/24 px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">{copy.ctaSecondary}</Link></div></div></div>
      </section>
    </div>
  );
}
