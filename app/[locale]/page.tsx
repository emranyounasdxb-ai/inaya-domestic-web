import Link from 'next/link';

const homeCopy = {
  en: {
    heroKicker: 'Modern UAE Luxury Domestic Services',
    heroTitle: 'Elevating Domestic Excellence.',
    heroText: 'Trusted maid and domestic worker services for UAE families, with organized guidance, respectful follow-up and support across all emirates.',
    primaryCta: 'Explore Services',
    secondaryCta: 'Discover The Process',
    heroBadge: 'Vetting Status',
    heroBadgeValue: 'Guided & Verified',
    stats: [
      { value: 'All UAE', label: 'Service Coverage', text: 'Support available across all seven emirates, subject to service type and availability.' },
      { value: '50+', label: 'Detail Checks', text: 'Service requirements, timing, area and household expectations are reviewed before confirmation.' },
      { value: '24/7', label: 'Follow-up Support', text: 'Our team remains available for WhatsApp guidance and next-step coordination.' }
    ],
    servicesLabel: 'Curated Disciplines',
    servicesTitle: 'Domestic support for every household rhythm',
    servicesText: 'Premium service categories presented with clear options, simple next steps and family-focused coordination.',
    viewAll: 'View All Services',
    cards: [
      { slug: 'nanny', label: 'Childcare Excellence', title: 'Nannies & Babysitters', text: 'Caring childcare professionals for families seeking safe, warm and reliable support.' },
      { slug: 'personal-chef', label: 'Home Dining', title: 'Cooks & Private Chefs', text: 'Home cooking support for daily meals, family preferences and special requirements.' },
      { slug: 'live-in-maid', label: 'Household Care', title: 'Live-in & Live-out Maids', text: 'Domestic worker services organized around cleaning, home routines and household comfort.' }
    ],
    philosophyLabel: 'The INAYA Philosophy',
    philosophyTitle: 'The Art of Living Well',
    philosophyText: 'A well-supported home feels calm, organized and easy to manage. INAYA focuses on matching the right service type to the household need, then keeping communication clear from enquiry to follow-up.',
    philosophyPoints: [
      { title: 'Quiet Confidence', text: 'Guidance that helps families understand options without pressure.' },
      { title: 'Respectful Coordination', text: 'A practical process built around privacy, clarity and household comfort.' }
    ],
    processLabel: 'Operational Rigor',
    processTitle: 'The 5-Step Service Journey',
    processText: 'A clear process designed to reduce confusion before a family proceeds with a booking.',
    process: [
      { title: 'Requirement Review', text: 'We confirm service type, emirate, schedule and household expectations.' },
      { title: 'Availability Check', text: 'Suitable options are reviewed by area, service type and requested duration.' },
      { title: 'Document Guidance', text: 'Documents, fees and responsibilities are explained before confirmation.' },
      { title: 'Service Confirmation', text: 'The family receives clear next steps and follow-up instructions.' },
      { title: 'After-booking Support', text: 'Our team stays available for questions and service-related feedback.' }
    ],
    perspectiveLabel: 'Perspectives',
    perspectiveTitle: 'Trusted by UAE families',
    quote: 'The process felt clear from the first call. The team understood what our household needed and followed up professionally.',
    quoteBy: 'Family client, Dubai',
    blackLabel: 'Premium Household Support',
    blackTitle: 'INAYA Signature Care',
    blackText: 'For families who require more structured support, our team can coordinate multiple service needs, follow-up points and household requirements through one clear consultation.',
    blackCta: 'Request Consultation',
    finalTitle: 'Experience the Exceptional',
    finalText: 'Start with a simple requirement review and our team will guide you toward the right domestic worker service for your home.',
    finalCta: 'Book Consultation'
  },
  ar: {
    heroKicker: 'خدمات منزلية راقية في الإمارات',
    heroTitle: 'نرتقي بتجربة الخدمات المنزلية.',
    heroText: 'خدمات خادمات وعمالة منزلية موثوقة للأسر في الإمارات، مع إرشاد منظم ومتابعة واضحة في جميع الإمارات.',
    primaryCta: 'استكشف الخدمات',
    secondaryCta: 'تعرف على الخطوات',
    heroBadge: 'حالة المتابعة',
    heroBadgeValue: 'إرشاد وتحقق',
    stats: [
      { value: 'كل الإمارات', label: 'نطاق الخدمة', text: 'دعم متاح في الإمارات السبع حسب نوع الخدمة والتوفر.' },
      { value: '50+', label: 'تفاصيل تتم مراجعتها', text: 'نراجع نوع الخدمة، الوقت، المنطقة وتوقعات الأسرة قبل التأكيد.' },
      { value: '24/7', label: 'متابعة ودعم', text: 'يبقى فريقنا متاحاً عبر واتساب لتوضيح الخطوات التالية.' }
    ],
    servicesLabel: 'خدمات مختارة',
    servicesTitle: 'دعم منزلي يناسب روتين كل أسرة',
    servicesText: 'فئات خدمة واضحة مع خيارات عملية وخطوات بسيطة وتنسيق يركز على راحة الأسرة.',
    viewAll: 'عرض كل الخدمات',
    cards: [
      { slug: 'nanny', label: 'رعاية الأطفال', title: 'المربيات وجليسات الأطفال', text: 'دعم آمن وهادئ للأطفال من خلال مربيات مناسبات لاحتياج الأسرة.' },
      { slug: 'personal-chef', label: 'الطبخ المنزلي', title: 'الطهاة والشيف الخاص', text: 'دعم للوجبات اليومية وتفضيلات الأسرة والمتطلبات الخاصة.' },
      { slug: 'live-in-maid', label: 'رعاية المنزل', title: 'الخادمات المقيمات وغير المقيمات', text: 'خدمات منزلية منظمة للتنظيف والروتين اليومي وراحة المنزل.' }
    ],
    philosophyLabel: 'فلسفة عناية',
    philosophyTitle: 'فن الحياة المنظمة',
    philosophyText: 'المنزل المدعوم بشكل صحيح يكون أكثر هدوءاً وسهولة في الإدارة. تركز عناية على ربط نوع الخدمة باحتياج المنزل ثم الحفاظ على وضوح التواصل من أول استفسار إلى المتابعة.',
    philosophyPoints: [
      { title: 'ثقة هادئة', text: 'إرشاد يساعد الأسرة على فهم الخيارات دون ضغط.' },
      { title: 'تنسيق محترم', text: 'عملية عملية تراعي الخصوصية والوضوح وراحة المنزل.' }
    ],
    processLabel: 'منهجية العمل',
    processTitle: 'رحلة الخدمة في خمس خطوات',
    processText: 'عملية واضحة تساعد الأسرة على فهم ما يحدث قبل المتابعة بالحجز.',
    process: [
      { title: 'مراجعة الطلب', text: 'نؤكد نوع الخدمة، الإمارة، الجدول وتوقعات الأسرة.' },
      { title: 'فحص التوفر', text: 'تراجع الخيارات المناسبة حسب المنطقة ونوع الخدمة والمدة المطلوبة.' },
      { title: 'إرشاد المستندات', text: 'يتم شرح المستندات والرسوم والمسؤوليات قبل التأكيد.' },
      { title: 'تأكيد الخدمة', text: 'تحصل الأسرة على خطوات واضحة وتعليمات المتابعة.' },
      { title: 'دعم بعد الحجز', text: 'يبقى الفريق متاحاً للأسئلة وملاحظات الخدمة.' }
    ],
    perspectiveLabel: 'آراء العملاء',
    perspectiveTitle: 'موثوق من الأسر في الإمارات',
    quote: 'كانت الخطوات واضحة من أول اتصال. فهم الفريق احتياج منزلنا وتابع معنا باحتراف.',
    quoteBy: 'عميل أسرة، دبي',
    blackLabel: 'دعم منزلي مميز',
    blackTitle: 'عناية سيجنتشر',
    blackText: 'للأسر التي تحتاج إلى دعم أكثر تنظيماً، يمكن لفريقنا تنسيق أكثر من خدمة ومتطلبات المنزل من خلال استشارة واضحة واحدة.',
    blackCta: 'اطلب استشارة',
    finalTitle: 'ابدأ تجربة مختلفة',
    finalText: 'ابدأ بمراجعة بسيطة لاحتياجك، وسنرشدك إلى خدمة العمالة المنزلية الأنسب لمنزلك.',
    finalCta: 'احجز استشارة'
  }
};

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const copy = isArabic ? homeCopy.ar : homeCopy.en;

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden px-6 pb-20 pt-28 sm:pt-32 lg:px-10 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_80%_18%,rgba(7,22,74,0.08),transparent_30rem),linear-gradient(120deg,#F8F6F0_0%,#FFFFFF_52%,#EFE9DE_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-accent-700">{copy.heroKicker}</p>
            <h1 className={`${isArabic ? 'font-arabicHeading leading-[1.25]' : 'font-heading leading-[1.02]'} mt-6 max-w-3xl text-[2.8rem] font-bold tracking-[-0.055em] text-primary-900 sm:text-[4.6rem] lg:text-[5.3rem]`}>
              {copy.heroTitle}
            </h1>
            <p className="mt-7 max-w-xl text-[1.02rem] leading-8 text-ink/66 sm:text-[1.1rem]">{copy.heroText}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href={`/${locale}/services`} className="inline-flex items-center justify-center rounded-full bg-primary-900 px-8 py-4 text-sm font-bold text-white shadow-[0_22px_55px_rgba(7,22,74,0.20)] transition hover:-translate-y-0.5">
                {copy.primaryCta} <span className="ms-2">→</span>
              </Link>
              <Link href={`/${locale}/how-it-works`} className="inline-flex items-center justify-center rounded-full border border-accent-500/35 bg-white/78 px-8 py-4 text-sm font-bold text-primary-900 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent-500">
                {copy.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[560px] rounded-[2rem] border border-accent-500/18 bg-white/70 p-2 shadow-[0_35px_100px_rgba(7,22,74,0.16)] backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[linear-gradient(135deg,#efe9de_0%,#ffffff_42%,#dfe7f3_100%)]">
                <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(7,22,74,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(7,22,74,.08)_1px,transparent_1px)] [background-size:54px_54px]" />
                <div className="absolute inset-8 rounded-[1.25rem] border border-white/70 bg-white/28" />
                <div className="absolute left-8 top-8 rounded-full border border-accent-500/30 bg-white/80 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-900 shadow-sm">
                  Image Placeholder
                </div>
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/70 bg-white/76 p-5 shadow-[0_18px_45px_rgba(7,22,74,0.12)] backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-700">{copy.heroBadge}</p>
                      <p className="mt-1 font-heading text-lg font-bold text-primary-900">{copy.heroBadgeValue}</p>
                    </div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-500/14 text-accent-700 ring-1 ring-accent-500/25">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-accent-500/12 bg-[#f5f2f4] px-6 py-14 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {copy.stats.map((item, index) => (
            <div key={item.label} className={`rounded-[24px] border border-white/70 bg-white/72 p-7 text-center shadow-[0_20px_60px_rgba(7,22,74,0.06)] backdrop-blur-xl ${index === 1 ? 'md:-translate-y-2' : ''}`}>
              <div className="font-heading text-4xl font-bold tracking-[-0.04em] text-primary-900">{item.value}</div>
              <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-700">{item.label}</p>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-ink/58">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-accent-700">{copy.servicesLabel}</p>
              <h2 className={`${isArabic ? 'font-arabicHeading' : 'font-heading'} mt-4 text-[2.15rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.servicesTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/62 sm:text-base">{copy.servicesText}</p>
            </div>
            <Link href={`/${locale}/services`} className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-500/30 bg-white/70 px-6 py-3 text-sm font-bold text-primary-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
              {copy.viewAll} <span>→</span>
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            {copy.cards.map((card, index) => (
              <Link key={card.slug} href={`/${locale}/services/${card.slug}`} className={`${index === 0 ? 'lg:col-span-7' : index === 1 ? 'lg:col-span-5' : 'lg:col-span-12'} group relative min-h-[390px] overflow-hidden rounded-[28px] border border-accent-500/18 bg-white shadow-[0_26px_80px_rgba(7,22,74,0.08)] transition hover:-translate-y-1`}>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#efe9de_0%,#ffffff_40%,#dfe7f3_100%)] transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(7,22,74,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(7,22,74,.08)_1px,transparent_1px)] [background-size:58px_58px]" />
                <div className="absolute left-7 top-7 rounded-full border border-accent-500/28 bg-white/76 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary-900 backdrop-blur-xl">Image Placeholder</div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-900/90 via-primary-900/45 to-transparent p-7 text-white sm:p-9">
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.22em] text-accent-100">{card.label}</p>
                  <h3 className={`${isArabic ? 'font-arabicHeading' : 'font-heading'} mt-3 max-w-xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl`}>{card.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/76">{card.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-accent-500/12 bg-[#f5f2f4] px-6 py-20 text-center sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-accent-700">{copy.philosophyLabel}</p>
          <h2 className={`${isArabic ? 'font-arabicHeading' : 'font-heading'} mx-auto mt-5 max-w-3xl text-[2.4rem] font-bold leading-tight tracking-[-0.05em] text-primary-900 sm:text-[4rem]`}>{copy.philosophyTitle}</h2>
          <div className="mx-auto my-9 h-px w-24 bg-accent-500/70" />
          <p className="mx-auto max-w-3xl text-[1rem] leading-8 text-ink/66 sm:text-[1.08rem]">{copy.philosophyText}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {copy.philosophyPoints.map((point) => (
              <div key={point.title} className="rounded-[24px] border border-accent-500/16 bg-white/76 p-7 text-start shadow-[0_20px_60px_rgba(7,22,74,0.06)] backdrop-blur-xl">
                <div className="mb-5 h-px w-16 bg-accent-500/70" />
                <h3 className={`${isArabic ? 'font-arabicHeading' : 'font-heading'} text-xl font-bold text-primary-900`}>{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-accent-700">{copy.processLabel}</p>
            <h2 className={`${isArabic ? 'font-arabicHeading' : 'font-heading'} mt-4 text-[2.1rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.processTitle}</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-ink/62 sm:text-base">{copy.processText}</p>
          </div>
          <div className="space-y-5">
            {copy.process.map((step, index) => (
              <div key={step.title} className="group flex gap-5 rounded-[24px] border border-accent-500/14 bg-white/76 p-6 shadow-[0_18px_55px_rgba(7,22,74,0.06)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent-500/35 sm:p-7">
                <span className="font-heading text-[3rem] font-bold leading-none text-primary-900/10 transition group-hover:text-accent-500">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className={`${isArabic ? 'font-arabicHeading' : 'font-heading'} text-xl font-bold text-primary-900`}>{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/62">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-accent-700">{copy.perspectiveLabel}</p>
          <h2 className={`${isArabic ? 'font-arabicHeading' : 'font-heading'} mt-4 text-[2.1rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.perspectiveTitle}</h2>
          <div className="relative mt-12 rounded-[28px] border border-accent-500/18 bg-[#f8f6f0] p-8 shadow-[0_25px_75px_rgba(7,22,74,0.08)] sm:p-12">
            <div className="absolute -top-5 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-accent-500 text-2xl font-bold text-primary-900 shadow-lg">“</div>
            <blockquote className="mx-auto max-w-3xl font-heading text-2xl font-semibold leading-snug tracking-[-0.035em] text-primary-900 sm:text-3xl">{copy.quote}</blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-12 w-12 rounded-full border border-accent-500/25 bg-[linear-gradient(135deg,#efe9de,#ffffff)]" />
              <div className="text-start">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary-900">{copy.quoteBy}</p>
                <p className="mt-1 text-sm text-ink/55">INAYA Domestic Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[32px] border border-accent-500/24 bg-primary-900 text-white shadow-[0_30px_95px_rgba(7,22,74,0.22)] lg:grid-cols-2">
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(191,164,106,0.32),transparent_18rem)]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/35 bg-white/6 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent-100"><span className="h-2 w-2 rounded-full bg-accent-500" />{copy.blackLabel}</span>
              <h2 className={`${isArabic ? 'font-arabicHeading' : 'font-heading'} mt-8 text-[2.3rem] font-bold leading-none tracking-[-0.055em] sm:text-[4rem]`}>{copy.blackTitle}</h2>
              <p className="mt-6 max-w-md text-[1rem] leading-8 text-white/70">{copy.blackText}</p>
              <Link href={`/${locale}/contact`} className="mt-9 inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-4 text-sm font-bold text-primary-900 shadow-[0_18px_45px_rgba(191,164,106,0.24)] transition hover:-translate-y-0.5">
                {copy.blackCta}
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden bg-[radial-gradient(circle_at_center,rgba(191,164,106,0.22),transparent_12rem)]">
            <div className="absolute inset-12 rounded-full border border-accent-500/25" />
            <div className="absolute inset-24 rounded-full border border-accent-500/15" />
            <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent-500/30 bg-white/6 text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-accent-100 backdrop-blur-xl">
              Image Placeholder
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 text-center sm:pb-24 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-accent-500/20 bg-white/78 p-8 shadow-[0_25px_75px_rgba(7,22,74,0.08)] backdrop-blur-xl sm:p-12">
          <h2 className={`${isArabic ? 'font-arabicHeading' : 'font-heading'} text-[2.15rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.finalTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink/62 sm:text-base">{copy.finalText}</p>
          <Link href={`/${locale}/booking`} className="mt-8 inline-flex items-center justify-center rounded-full bg-primary-900 px-9 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(7,22,74,0.18)] transition hover:-translate-y-0.5">
            {copy.finalCta} <span className="ms-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
