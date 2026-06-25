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
      ? 'تساعد عناية الأسر في دولة الإمارات على اختيار دعم منزلي موثوق من خلال تنسيق محترم، متابعة واضحة، وخدمة تناسب احتياج كل منزل.'
      : 'INAYA helps UAE families choose dependable home support through respectful coordination, practical guidance and service coverage across the UAE.',
    contact: isArabic ? 'تواصل معنا' : 'Contact Us',
    services: isArabic ? 'استكشف الخدمات' : 'Explore Services',
    storyLabel: isArabic ? 'بداية واضحة' : 'A Clear Beginning',
    storyTitle: isArabic ? 'قصتنا' : 'Our Story',
    story: isArabic
      ? [
          'تأسست عناية لتجعل طلب خدمات العمالة المنزلية أكثر سهولة وطمأنينة للأسر في الإمارات. نحن نركز على فهم احتياج المنزل قبل اقتراح أي خدمة.',
          'يجمع فريقنا تفاصيل الخدمة، الإمارة، التوقيت، ومتطلبات الأسرة، ثم يوضح الخيارات المتاحة بطريقة عملية ومحترمة.'
        ]
      : [
          'INAYA was created to make domestic worker enquiries easier and more reassuring for UAE households. We focus on understanding the home requirement before suggesting a service.',
          'Our team reviews the service type, emirate, schedule and household expectations, then explains suitable options in a practical and respectful way.'
        ],
    principlesTitle: isArabic ? 'مبادئ التأسيس' : 'Founding Principles',
    principles: isArabic
      ? ['احترام خصوصية الأسرة في كل تواصل.', 'اقتراح خدمات مرتبطة فعلاً بالاحتياج.', 'تأكيد الخطوات قبل الانتقال إلى الحجز.']
      : ['Respect for family privacy in every conversation.', 'Service options matched to the actual requirement.', 'Next steps confirmed before moving to booking.'],
    purposeTitle: isArabic ? 'الغاية والقيم' : 'Purpose & Values',
    purposeSub: isArabic ? 'القيم التي توجه طريقة تعاملنا مع كل أسرة.' : 'The values that shape how we support every household.',
    missionLabel: isArabic ? 'رسالتنا' : 'Our Mission',
    mission: isArabic
      ? 'رفع مستوى خدمات العمالة المنزلية من خلال تجربة هادئة، مهنية، وسهلة الفهم للعائلات في الإمارات.'
      : 'To raise the standard of domestic worker services through a calm, professional and easy-to-understand experience for UAE families.',
    visionLabel: isArabic ? 'رؤيتنا' : 'Our Vision',
    vision: isArabic
      ? 'أن تكون عناية اسماً موثوقاً للأسر التي تبحث عن خدمات منزلية منظمة وراقية في جميع أنحاء الإمارات.'
      : 'To become a trusted UAE name for families seeking organized, premium and reliable domestic worker services.',
    values: isArabic
      ? [
          { icon: '◇', title: 'الخصوصية', text: 'نحافظ على معلومات الأسرة والمستندات بعناية ومسؤولية.' },
          { icon: '✓', title: 'الموثوقية', text: 'نراجع تفاصيل الطلب قبل مشاركة الخيارات المناسبة.' },
          { icon: '✦', title: 'الرقي', text: 'نهتم بتجربة خدمة هادئة تعكس معايير عناية.' },
          { icon: '♡', title: 'الاهتمام', text: 'نتعامل مع كل منزل كحالة خاصة لها احتياجها.' }
        ]
      : [
          { icon: '◇', title: 'Discretion', text: 'Family information and documents are handled with care and responsibility.' },
          { icon: '✓', title: 'Reliability', text: 'Every request is reviewed before suitable options are shared.' },
          { icon: '✦', title: 'Refinement', text: 'We maintain a calm service experience that reflects INAYA standards.' },
          { icon: '♡', title: 'Care', text: 'Each household is treated as a unique requirement, not a generic request.' }
        ],
    standardsLabel: isArabic ? 'طريقة العمل' : 'How We Work',
    standardsTitle: isArabic ? 'خطوات عملية قبل القرار' : 'Practical Steps Before You Decide',
    standardsText: isArabic
      ? 'نرتب الطلب في مراحل بسيطة حتى تعرف الأسرة ماذا يحدث، وما المطلوب، وما هي الخيارات المناسبة.'
      : 'We keep the enquiry process simple, so families understand what happens next, what is required and which option fits best.',
    standards: isArabic
      ? [
          { title: 'مراجعة الطلب', text: 'نحدد نوع الخدمة، الإمارة، الجدول، وتفاصيل المنزل الأساسية.' },
          { title: 'فحص التوفر', text: 'نراجع الخيارات المتاحة حسب نوع الخدمة والمنطقة والمدة المطلوبة.' },
          { title: 'شرح المتطلبات', text: 'نوضح المستندات، الرسوم، والمسؤوليات قبل أي تأكيد.' },
          { title: 'متابعة بعد الحجز', text: 'يبقى الفريق متاحاً للرد على الأسئلة ومراجعة أي ملاحظات.' }
        ]
      : [
          { title: 'Requirement Review', text: 'We confirm the service type, emirate, schedule and key household details.' },
          { title: 'Availability Check', text: 'Suitable options are reviewed by service category, area and requested duration.' },
          { title: 'Guidance & Documents', text: 'Documents, fees and responsibilities are explained before confirmation.' },
          { title: 'After-booking Support', text: 'The team remains available for questions and service-related feedback.' }
        ],
    leadershipLabel: isArabic ? 'العنصر البشري' : 'The Human Element',
    leadershipTitle: isArabic ? 'قيادة تركز على جودة التجربة' : 'Leadership Focused on Service Quality',
    leadershipText: isArabic
      ? 'تعتمد عناية على تنسيق تشغيلي منظم وفهم لطبيعة الأسر في الإمارات، حتى تكون كل تجربة خدمة أكثر وضوحاً واحتراماً.'
      : 'INAYA is guided by operational discipline and an understanding of UAE households, helping every service conversation remain focused, respectful and useful.',
    leadershipCardLabel: isArabic ? 'منهج القيادة' : 'Leadership Approach',
    leadershipHighlights: isArabic
      ? [
          { title: 'إشراف تشغيلي', text: 'متابعة الطلبات بناءً على متطلبات موثقة وواضحة.' },
          { title: 'فهم الأسرة', text: 'مراعاة خصوصية المنزل وروتين الأسرة قبل اقتراح الخدمة.' },
          { title: 'تحسين مستمر', text: 'استخدام ملاحظات العملاء لتطوير طريقة التنسيق والمتابعة.' }
        ]
      : [
          { title: 'Operational Oversight', text: 'Requests are managed against documented household requirements.' },
          { title: 'Household Understanding', text: 'Family routines and privacy expectations guide our recommendations.' },
          { title: 'Continuous Improvement', text: 'Client feedback helps refine our coordination and follow-up process.' }
        ],
    complianceTitle: isArabic ? 'التزام واضح' : 'Clear Compliance',
    complianceText: isArabic
      ? 'يتم شرح السياسات، المستندات، وخطوات التأكيد قبل الحجز حتى تكون الصورة واضحة للأسرة.'
      : 'Policies, documents and confirmation steps are explained before booking so each family has a clear picture.',
    differenceLabel: isArabic ? 'معيار عناية' : 'INAYA Standard',
    differenceTitle: isArabic ? 'الفرق مع عناية' : 'The INAYA Difference',
    differenceText: isArabic
      ? 'تجمع عناية بين فهم احتياج المنزل، اختيار الخدمة المناسبة، والمتابعة المسؤولة، لتتمكن الأسرة من اتخاذ القرار براحة.'
      : 'INAYA combines household understanding, relevant service guidance and responsible follow-up so families can move forward with confidence.',
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

      <section className="border-t border-accent-500/12 bg-ivory px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
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
          <div className="mx-auto mt-10 max-w-5xl rounded-[26px] border border-accent-500/22 bg-white/76 p-7 shadow-[0_26px_75px_rgba(7,22,74,0.08)] backdrop-blur-xl sm:p-8">
            <p className="text-center text-[0.68rem] font-bold uppercase tracking-[0.28em] text-accent-700">{copy.leadershipCardLabel}</p>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {copy.leadershipHighlights.map((item) => (
                <div key={item.title} className="rounded-[20px] border border-accent-500/16 bg-[#f8f6f0] p-5 text-center shadow-sm">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/12 text-sm font-bold text-accent-700 ring-1 ring-accent-500/22">✓</div>
                  <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 text-lg font-bold text-primary-900`}>{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/62">{item.text}</p>
                </div>
              ))}
            </div>
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
