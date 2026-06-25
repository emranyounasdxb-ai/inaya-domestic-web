import Link from 'next/link';

type PageProps = {
  params: {
    locale: string;
  };
};

export default function AboutPage({ params: { locale } }: PageProps) {
  const isArabic = locale === 'ar';

  const copy = {
    badge: isArabic ? 'حول عناية للعمالة المنزلية' : 'About INAYA Domestic Workers',
    eyebrow: isArabic ? 'إرث عناية' : 'The INAYA Legacy',
    title: isArabic ? 'تعريف التميز في خدمات العمالة المنزلية' : 'Defining Domestic Excellence',
    subtitle: isArabic
      ? 'إرث من الثقة والوضوح والجودة في خدمات العمالة المنزلية داخل الإمارات. نساعد العائلات على اختيار الدعم المنزلي بثقة وراحة.'
      : 'A legacy of trust, clarity and uncompromising quality in UAE domestic worker services. We help families choose home support with confidence.',
    contact: isArabic ? 'تواصل معنا' : 'Contact Us',
    services: isArabic ? 'استكشف الخدمات' : 'Explore Services',
    storyLabel: isArabic ? 'بداية واضحة' : 'A Clear Beginning',
    storyTitle: isArabic ? 'قصتنا' : 'Our Story',
    story: isArabic
      ? [
          'بدأت عناية برؤية واضحة: سد الفجوة بين العائلات في الإمارات واحتياجها إلى خدمات منزلية موثوقة ومنظمة.',
          'نركز على الوضوح من أول تواصل، نفهم الاحتياج، نراجع التوفر، نشرح الخطوات، ونبقى متاحين للمتابعة.'
        ]
      : [
          'INAYA began with a focused vision: to bridge the gap between UAE families and reliable, well-organized domestic worker services.',
          'Our role is to make every household decision feel clear, supported and professionally managed from the first enquiry to follow-up.'
        ],
    principlesTitle: isArabic ? 'مبادئ التأسيس' : 'Founding Principles',
    principles: isArabic
      ? ['تواصل واضح قبل كل التزام.', 'خدمة منظمة تناسب احتياج كل منزل.', 'متابعة مسؤولة بعد تأكيد الخدمة.']
      : ['Clear communication before every commitment.', 'Organized guidance around each household requirement.', 'Responsible follow-up after every confirmation.'],
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
    values: isArabic
      ? [
          { icon: '◇', title: 'الخصوصية', text: 'نتعامل مع تفاصيل الأسرة والمستندات بعناية ومسؤولية.' },
          { icon: '✓', title: 'الثقة', text: 'كل خطوة مصممة لتكون واضحة قبل المتابعة.' },
          { icon: '✦', title: 'الرقي', text: 'خدمة هادئة ومنظمة تعكس معايير عناية.' },
          { icon: '♡', title: 'الرعاية', text: 'كل طلب يعامل كاحتياج منزلي مهم.' }
        ]
      : [
          { icon: '◇', title: 'Discretion', text: 'Family details and documents are handled with care and responsibility.' },
          { icon: '✓', title: 'Trust', text: 'Every step is designed to be clear before moving forward.' },
          { icon: '✦', title: 'Refinement', text: 'A calm, organized service experience that reflects INAYA standards.' },
          { icon: '♡', title: 'Care', text: 'Every request is treated as an important household requirement.' }
        ],
    standardsLabel: isArabic ? 'أسلوب عملنا' : 'The INAYA Standard',
    standardsTitle: isArabic ? 'معايير واضحة لا نتنازل عنها' : 'Uncompromising Standards',
    standardsText: isArabic
      ? 'تعتمد خدمتنا على خطوات عملية وواضحة تساعد العائلة على فهم الخيارات والتكلفة والتوفر قبل اتخاذ القرار.'
      : 'Our process is step-by-step, practical and clear, helping families understand options, cost and availability before making a decision.',
    standards: isArabic
      ? [
          { title: 'فهم الاحتياج أولاً', text: 'نبدأ بمعرفة نوع الخدمة، الإمارة، الوقت، وتفاصيل المنزل حتى يكون التوجيه مناسباً.' },
          { title: 'مراجعة التوفر', text: 'نراجع الخيارات المتاحة حسب الخدمة والمنطقة والمدة المطلوبة قبل تقديم أي تأكيد.' },
          { title: 'توضيح الخطوات', text: 'نشرح الأسعار، المستندات، والتزامات كل طرف قبل المتابعة.' },
          { title: 'متابعة منظمة', text: 'يبقى الفريق متاحاً بعد الحجز للرد على الأسئلة ومتابعة أي ملاحظة.' }
        ]
      : [
          { title: 'Initial Requirement Review', text: 'We start with the service type, emirate, timing and household details so guidance is relevant.' },
          { title: 'Availability Matching', text: 'Available options are reviewed by service, area and requested duration before confirmation.' },
          { title: 'Clear Step Explanation', text: 'Pricing, documents and responsibilities are explained before the family proceeds.' },
          { title: 'Organized Follow-up', text: 'The team remains available after booking to answer questions and review concerns.' }
        ],
    leadershipLabel: isArabic ? 'العنصر البشري' : 'The Human Element',
    leadershipTitle: isArabic ? 'التميز في القيادة' : 'Excellence in Leadership',
    leadershipText: isArabic
      ? 'يجمع فريق عناية بين الخبرة التشغيلية وفهم احتياجات البيوت في الإمارات، حتى تكون كل محادثة عملية وواضحة ومحترمة.'
      : 'Our team brings operational experience and an understanding of UAE households, ensuring every service conversation is practical, clear and respectful.',
    complianceTitle: isArabic ? 'التزام واضح' : 'Clear Compliance',
    complianceText: isArabic
      ? 'نوضح الخطوات والمستندات والسياسات الأساسية قبل الحجز حتى يكون القرار واضحاً.'
      : 'We explain steps, documents and key policies before booking so each decision is clear.',
    differenceLabel: isArabic ? 'معيار عناية' : 'INAYA Standard',
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(191,164,106,0.20),transparent_26rem),radial-gradient(circle_at_50%_70%,rgba(7,22,74,0.06),transparent_28rem)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/25 bg-white/80 px-4 py-2 text-sm font-semibold text-primary-900 shadow-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            {copy.badge}
          </span>
          <p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-accent-700">{copy.eyebrow}</p>
          <h1 className={`${isArabic ? 'font-arabic leading-[1.22]' : 'font-heading leading-[1.02]'} mx-auto mt-5 max-w-4xl text-[2.45rem] font-bold tracking-[-0.045em] text-primary-900 sm:text-[3.4rem] lg:text-[4.15rem]`}>
            {copy.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1rem] leading-8 text-ink/65 sm:text-[1.05rem]">{copy.subtitle}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-full bg-primary-900 px-7 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(7,22,74,0.18)] transition hover:-translate-y-0.5">
              {copy.contact}
            </Link>
            <Link href={`/${locale}/services`} className="inline-flex items-center justify-center rounded-full border border-accent-500/30 bg-white px-7 py-3 text-sm font-bold text-primary-900 shadow-sm transition hover:-translate-y-0.5">
              {copy.services}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-accent-500/12 bg-ivory px-6 py-18 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">{copy.storyLabel}</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-[2rem] font-bold leading-tight tracking-[-0.03em] text-primary-900 sm:text-[2.45rem]`}>{copy.storyTitle}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[24px] border border-accent-500/16 bg-white/76 p-7 shadow-[0_20px_60px_rgba(7,22,74,0.06)] backdrop-blur-xl">
              <div className="mb-5 h-px w-20 bg-accent-500/70" />
              <div className="space-y-5 text-[1rem] leading-8 text-ink/65">
                {copy.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <div className="rounded-[24px] border border-accent-500/16 bg-white/76 p-7 shadow-[0_20px_60px_rgba(7,22,74,0.05)] backdrop-blur-xl">
              <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[1.35rem] font-bold text-primary-900`}>{copy.principlesTitle}</h3>
              <div className="mt-6 space-y-4 text-sm leading-6 text-ink/65">
                {copy.principles.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/12 text-xs font-bold text-accent-700 ring-1 ring-accent-500/22">✓</span>
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
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA VALUES</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-[2.15rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.purposeTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-ink/60 sm:text-base">{copy.purposeSub}</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[24px] border border-accent-500/16 bg-white p-8 shadow-[0_20px_60px_rgba(7,22,74,0.06)]">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent-700">{copy.missionLabel}</p>
              <h3 className={`${isArabic ? 'font-arabic leading-snug' : 'font-heading leading-tight'} mt-5 text-[1.55rem] font-bold tracking-[-0.03em] text-primary-900 sm:text-[2rem]`}>{copy.mission}</h3>
            </div>
            <div className="rounded-[24px] border border-accent-500/22 bg-[linear-gradient(135deg,#ffffff_0%,#f8f6f0_100%)] p-8 shadow-[0_20px_60px_rgba(7,22,74,0.06)]">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent-700">{copy.visionLabel}</p>
              <h3 className={`${isArabic ? 'font-arabic leading-snug' : 'font-heading leading-tight'} mt-5 text-[1.55rem] font-bold tracking-[-0.03em] text-primary-900 sm:text-[2rem]`}>{copy.vision}</h3>
            </div>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.values.map((value) => (
              <div key={value.title} className="min-h-[190px] rounded-[22px] border border-accent-500/14 bg-white p-6 shadow-[0_18px_55px_rgba(7,22,74,0.05)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/10 text-lg font-bold text-accent-700 ring-1 ring-accent-500/20">{value.icon}</div>
                <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-7 text-xl font-bold tracking-[-0.03em] text-primary-900`}>{value.title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/60">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">{copy.standardsLabel}</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-[2.1rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.standardsTitle}</h2>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-8 text-ink/62">{copy.standardsText}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {copy.standards.map((step, index) => (
              <div key={step.title} className="rounded-[24px] border border-accent-500/16 bg-[#f8f6f0] p-6 shadow-[0_18px_55px_rgba(7,22,74,0.06)] sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-primary-900 shadow-sm">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[1.28rem] font-bold tracking-[-0.03em] text-primary-900`}>{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink/62">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe9de] px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{copy.leadershipLabel}</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 text-[2.15rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.leadershipTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-7 text-ink/62">{copy.leadershipText}</p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl rounded-[26px] border border-accent-500/22 bg-white/76 p-8 text-center shadow-[0_26px_75px_rgba(7,22,74,0.08)] backdrop-blur-xl sm:p-12">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-accent-700">INAYA DOMESTIC WORKERS</p>
            <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 text-2xl font-bold text-primary-900 sm:text-3xl`}>{copy.leadershipTitle}</h3>
            <div className="mx-auto mt-6 h-px w-24 bg-accent-500/65" />
          </div>
        </div>
      </section>

      <section className="border-y border-accent-500/20 bg-ivory px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[24px] border border-accent-500/25 bg-white p-8 text-ink shadow-[0_24px_70px_rgba(7,22,74,0.08)] sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/15 text-lg font-bold text-accent-700 ring-1 ring-accent-500/25">✓</div>
            <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-8 text-[1.55rem] font-bold tracking-[-0.04em] text-primary-900`}>{copy.complianceTitle}</h3>
            <p className="mt-5 text-sm leading-7 text-ink/62">{copy.complianceText}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-primary-900">MOHRE Licensed</span>
              <span className="rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-primary-900">UAE Certified</span>
            </div>
          </div>
          <div className="rounded-[24px] border border-accent-500/25 bg-[linear-gradient(135deg,#ffffff_0%,#f8f6f0_100%)] p-8 text-primary-900 shadow-[0_28px_85px_rgba(7,22,74,0.10)] sm:p-10">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.26em] text-accent-700">{copy.differenceLabel}</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 text-[2rem] font-bold tracking-[-0.04em] sm:text-[2.7rem]`}>{copy.differenceTitle}</h2>
            <p className="mt-6 max-w-2xl text-[0.98rem] leading-8 text-ink/66">{copy.differenceText}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-full bg-accent-500 px-7 py-3 text-sm font-bold text-primary-900 shadow-[0_18px_45px_rgba(191,164,106,0.22)] transition hover:-translate-y-0.5 hover:bg-accent-400">{copy.ctaPrimary}</Link>
              <Link href={`/${locale}/booking`} className="inline-flex items-center justify-center rounded-full border border-accent-500/35 bg-white px-7 py-3 text-sm font-bold text-primary-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-accent-50">{copy.ctaSecondary}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
