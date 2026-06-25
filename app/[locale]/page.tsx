import Link from 'next/link';

const homeContent = {
  en: {
    heroLabel: 'Legacy of Trust',
    heroTitleA: 'Elevating Domestic',
    heroTitleB: 'Excellence',
    heroText: 'Bespoke domestic worker services for UAE families who expect clarity, trust and a calm household experience.',
    primaryCta: 'Request Consultation',
    secondaryCta: 'Explore Services',
    trustLabel: 'Recognized & Trusted by UAE Authorities',
    authorities: ['MOHRE', 'Tadbeer', 'Ajman Chamber', 'UAE Pass'],
    conciergeLabel: '24/7 Support',
    conciergeTitle: 'Global Executive Concierge',
    conciergeText: 'Beyond staffing, INAYA provides a dedicated support layer for family requirements, urgent coordination and practical follow-up across the UAE.',
    learnMore: 'Learn More',
    safetyTitle: 'Safety & Discretion',
    safetyText: 'Privacy is part of the service experience. Household information, documents and expectations are handled carefully before any step is confirmed.',
    safetyCards: [
      { title: 'Document Care', text: 'Requirements are handled with clear records and careful follow-up.' },
      { title: 'Family Privacy', text: 'Communication remains respectful, private and relevant to the household.' }
    ],
    spotlightTitle: 'Elite Candidate Spotlight',
    spotlightText: 'A glimpse into the caliber of professionals within our service network.',
    candidates: [
      { name: 'Elena V.', role: 'Executive Nanny • 12 Years Exp.', text: 'Specialized in early childhood support and family routines.' },
      { name: 'Marcus T.', role: 'Private Chef • Home Dining', text: 'Experienced in family meal planning and private home cooking.' },
      { name: 'Sarah J.', role: 'House Manager • Estate Support', text: 'Skilled in household coordination and domestic team support.' }
    ],
    matrixTitle: 'The Inaya Vetting Matrix',
    matrix: [
      { title: 'Identity', text: 'Documentation and eligibility review before service coordination.' },
      { title: 'Skill', text: 'Requirement matching based on household needs and service type.' },
      { title: 'Behaviour', text: 'Communication style and suitability are considered carefully.' },
      { title: 'Reference', text: 'Past experience and available background details are reviewed.' },
      { title: 'Matching', text: 'The service recommendation is aligned with family expectations.' }
    ],
    journeyTitle: 'A Seamless Journey',
    journeyText: 'Hiring domestic support should not feel complex. The process is arranged in three clear stages.',
    startSearch: 'Start Your Search',
    steps: [
      { title: 'Share Requirement', text: 'Tell us the service type, emirate, timing and household details.' },
      { title: 'Confirm Details', text: 'We explain suitable options, documents and next steps.' },
      { title: 'Commence Service', text: 'Your service begins with clear follow-up and support guidance.' }
    ],
    disciplinesTitle: 'Curated Disciplines',
    disciplinesText: 'Expertise that extends beyond cleaning. We provide specialized professionals for every part of your home.',
    services: [
      { slug: 'nanny', tag: 'Premier Selection', title: 'Executive Nannies', text: 'Specialized childcare support focused on care, routine and family comfort.', cta: 'Learn More' },
      { slug: 'personal-chef', title: 'Private Chefs', text: 'Culinary support in the comfort of your kitchen.', cta: 'Inquire' },
      { slug: 'live-in-maid', title: 'House Managers', text: 'Structured household support and coordination for busy homes.', cta: 'View Credentials' }
    ],
    testimonialsLabel: 'Client Perspectives',
    testimonialsTitle: 'Whispers of Satisfaction',
    testimonials: [
      { quote: 'INAYA helped me find reliable support for my home. The team was polite, clear and responsive.', name: 'Sarah Malik', role: 'Working Mother, Ajman' },
      { quote: 'Excellent and transparent service. The team explained every step and followed up professionally.', name: 'Ali Khan', role: 'Business Owner, Sharjah' }
    ],
    imageQuote: 'Our sanctuary is finally managed with the precision it deserves.',
    blackLabel: 'INAYA BLACK',
    blackTitle: 'The Zenith of Domestic Staffing',
    blackText: 'A premium consultation tier for families requiring structured household support, priority coordination and a more personalized domestic service plan.',
    blackCta: 'Apply for Membership'
  },
  ar: {
    heroLabel: 'إرث من الثقة',
    heroTitleA: 'نرتقي بتجربة',
    heroTitleB: 'الخدمات المنزلية',
    heroText: 'خدمات عمالة منزلية منظمة للأسر في الإمارات، مع وضوح في الخطوات وثقة ومتابعة محترمة.',
    primaryCta: 'اطلب استشارة',
    secondaryCta: 'استكشف الخدمات',
    trustLabel: 'موثوق ومنظم مع جهات الإمارات',
    authorities: ['MOHRE', 'تدبير', 'غرفة عجمان', 'UAE Pass'],
    conciergeLabel: 'دعم ومتابعة',
    conciergeTitle: 'كونسيرج تنفيذي للعائلة',
    conciergeText: 'إلى جانب الخدمة، تقدم عناية طبقة دعم مخصصة لاحتياجات الأسرة، التنسيق العاجل، والمتابعة العملية داخل الإمارات.',
    learnMore: 'اعرف المزيد',
    safetyTitle: 'السلامة والخصوصية',
    safetyText: 'الخصوصية جزء أساسي من تجربة الخدمة. يتم التعامل مع معلومات الأسرة والمستندات والتوقعات بعناية قبل تأكيد أي خطوة.',
    safetyCards: [
      { title: 'عناية بالمستندات', text: 'تتم متابعة المتطلبات بسجلات واضحة وتنسيق دقيق.' },
      { title: 'خصوصية الأسرة', text: 'يبقى التواصل محترماً وخاصاً ومرتبطاً باحتياج المنزل.' }
    ],
    spotlightTitle: 'نماذج من الكفاءات',
    spotlightText: 'لمحة عن مستوى المهنيين ضمن شبكة خدماتنا.',
    candidates: [
      { name: 'إيلينا V.', role: 'مربية تنفيذية • 12 سنة خبرة', text: 'متخصصة في رعاية الأطفال ودعم روتين الأسرة.' },
      { name: 'ماركوس T.', role: 'شيف خاص • طبخ منزلي', text: 'خبرة في تخطيط وجبات الأسرة والطبخ المنزلي.' },
      { name: 'سارة J.', role: 'مديرة منزل • دعم الأسر', text: 'مهارة في تنسيق المنزل ودعم فريق الخدمة.' }
    ],
    matrixTitle: 'مصفوفة التحقق في عناية',
    matrix: [
      { title: 'الهوية', text: 'مراجعة المستندات والأهلية قبل تنسيق الخدمة.' },
      { title: 'المهارة', text: 'مطابقة الاحتياج حسب نوع الخدمة ومتطلبات المنزل.' },
      { title: 'السلوك', text: 'تؤخذ طريقة التواصل والملاءمة بعين الاعتبار.' },
      { title: 'الخبرة', text: 'تتم مراجعة الخبرات والتفاصيل المتاحة بعناية.' },
      { title: 'المطابقة', text: 'يتم ربط التوصية بتوقعات الأسرة واحتياجها.' }
    ],
    journeyTitle: 'رحلة سلسة',
    journeyText: 'طلب الدعم المنزلي يجب ألا يكون معقداً. لذلك نرتب العملية في ثلاث مراحل واضحة.',
    startSearch: 'ابدأ طلبك',
    steps: [
      { title: 'شارك الاحتياج', text: 'أخبرنا بنوع الخدمة، الإمارة، التوقيت وتفاصيل المنزل.' },
      { title: 'تأكيد التفاصيل', text: 'نشرح الخيارات المناسبة والمستندات والخطوات التالية.' },
      { title: 'بدء الخدمة', text: 'تبدأ الخدمة مع متابعة واضحة وإرشادات دعم.' }
    ],
    disciplinesTitle: 'تخصصات مختارة',
    disciplinesText: 'خبرات تتجاوز التنظيف. نقدم مهنيين متخصصين لكل جانب من جوانب المنزل.',
    services: [
      { slug: 'nanny', tag: 'اختيار مميز', title: 'مربيات تنفيذيات', text: 'دعم متخصص للأطفال يركز على الرعاية والروتين وراحة الأسرة.', cta: 'اعرف المزيد' },
      { slug: 'personal-chef', title: 'شيف خاص', text: 'دعم للطبخ داخل منزلك بما يناسب ذوق الأسرة.', cta: 'استفسر' },
      { slug: 'live-in-maid', title: 'مديرو المنزل', text: 'دعم منظم وتنسيق منزلي للأسر كثيرة الانشغال.', cta: 'عرض التفاصيل' }
    ],
    testimonialsLabel: 'آراء العملاء',
    testimonialsTitle: 'ثقة ورضا العملاء',
    testimonials: [
      { quote: 'ساعدتني عناية في الوصول إلى دعم موثوق للمنزل. كان الفريق واضحاً ومتعاوناً.', name: 'سارة مالك', role: 'أم عاملة، عجمان' },
      { quote: 'خدمة ممتازة وواضحة. شرح الفريق كل خطوة وتابع معنا باحتراف.', name: 'علي خان', role: 'صاحب عمل، الشارقة' }
    ],
    imageQuote: 'أصبح منزلنا أكثر تنظيماً وراحة.',
    blackLabel: 'عناية بلاك',
    blackTitle: 'قمة خدمات العمالة المنزلية',
    blackText: 'مستوى استشارة مميز للأسر التي تحتاج إلى دعم منزلي منظم وتنسيق أولوية وخطة خدمة أكثر تخصيصاً.',
    blackCta: 'اطلب العضوية'
  }
};

function ImagePlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[linear-gradient(135deg,#f2eadc_0%,#ffffff_42%,#e7edf6_100%)] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(191,164,106,0.22),transparent_16rem),radial-gradient(circle_at_82%_68%,rgba(7,22,74,0.10),transparent_18rem)]" />
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(7,22,74,.075)_1px,transparent_1px),linear-gradient(90deg,rgba(7,22,74,.075)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-5 rounded-[1.1rem] border border-white/75 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[2px]" />
      <div className="absolute left-5 top-5 rounded-full border border-accent-500/30 bg-white/75 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-primary-900 shadow-[0_12px_30px_rgba(7,22,74,0.08)] backdrop-blur-xl">
        {label}
      </div>
    </div>
  );
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const copy = isArabic ? homeContent.ar : homeContent.en;

  return (
    <div className="overflow-hidden bg-[linear-gradient(180deg,#fcf8fa_0%,#f8f6f0_44%,#fbfaf7_100%)] text-ink">
      <section className="relative min-h-[82vh] overflow-hidden">
        <ImagePlaceholder label="Hero Image Placeholder" className="absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(191,164,106,0.18),transparent_22rem),linear-gradient(90deg,rgba(252,248,250,0.96)_0%,rgba(252,248,250,0.78)_48%,rgba(255,255,255,0.30)_100%)]" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-24 lg:px-10">
          <div className="max-w-3xl rounded-[28px] border border-white/55 bg-white/[0.22] p-6 shadow-[0_28px_85px_rgba(7,22,74,0.08)] backdrop-blur-[10px] sm:p-8 lg:bg-white/[0.16]">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-accent-700">{copy.heroLabel}</p>
            <h1 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-6 text-[2.65rem] font-bold leading-[1.05] tracking-[-0.055em] text-primary-900 sm:text-[4.4rem] lg:text-[5rem]`}>
              {copy.heroTitleA}<br />
              <span className="font-light italic text-primary-900/88">{copy.heroTitleB}</span>
            </h1>
            <p className="mt-7 max-w-xl text-[1rem] leading-8 text-ink/64 sm:text-[1.08rem]">{copy.heroText}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center bg-primary-900 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_18px_45px_rgba(7,22,74,0.16)] transition hover:-translate-y-0.5 hover:bg-primary-800">
                {copy.primaryCta}
              </Link>
              <Link href={`/${locale}/services`} className="inline-flex items-center justify-center border border-accent-500/35 bg-white/58 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-900 shadow-[0_14px_35px_rgba(7,22,74,0.06)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white hover:border-accent-500/55">
                {copy.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-accent-500/12 bg-white/72 px-6 py-14 backdrop-blur-xl lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-ink/46">{copy.trustLabel}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {copy.authorities.map((item) => (
              <div key={item} className="flex h-16 min-w-[145px] items-center justify-center rounded-[18px] border border-white/70 bg-white/62 px-6 text-xs font-bold uppercase tracking-[0.18em] text-primary-900/68 shadow-[0_14px_34px_rgba(7,22,74,0.055)] ring-1 ring-accent-500/8 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent-500/30 hover:text-primary-900">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="absolute inset-x-0 top-10 h-80 bg-[radial-gradient(circle_at_50%_20%,rgba(191,164,106,0.12),transparent_28rem)]" />
        <div className="relative mx-auto max-w-7xl rounded-[28px] border border-white/70 bg-white/58 p-7 shadow-[0_30px_90px_rgba(7,22,74,0.10)] ring-1 ring-accent-500/10 backdrop-blur-2xl sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.20)_55%,rgba(191,164,106,0.08)_100%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-accent-700">{copy.conciergeLabel}</p>
              <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 text-[2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.conciergeTitle}</h2>
              <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-ink/62">{copy.conciergeText}</p>
              <Link href={`/${locale}/contact`} className="mt-8 inline-flex items-center rounded-full bg-primary-900 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(7,22,74,0.16)] transition hover:-translate-y-0.5 hover:bg-primary-800">
                {copy.learnMore}
              </Link>
            </div>
            <ImagePlaceholder label="Concierge Image" className="min-h-[320px] rounded-[22px] border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_18px_50px_rgba(7,22,74,0.08)]" />
          </div>
        </div>
      </section>

      <section className="relative border-y border-accent-500/12 bg-[#f6f3f5]/85 px-6 py-20 backdrop-blur-xl lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(191,164,106,0.13),transparent_24rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-5">
            {copy.safetyCards.map((card, index) => (
              <div key={card.title} className={`rounded-[24px] border border-white/70 bg-white/58 p-6 shadow-[0_18px_50px_rgba(7,22,74,0.055)] ring-1 ring-accent-500/8 backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/75 ${index === 1 ? 'mt-8' : ''}`}>
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/14 text-accent-700 ring-1 ring-accent-500/20">✓</div>
                <h3 className="font-heading text-lg font-bold text-primary-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[28px] border border-white/55 bg-white/32 p-7 shadow-[0_18px_50px_rgba(7,22,74,0.045)] backdrop-blur-xl lg:bg-transparent lg:shadow-none lg:backdrop-blur-0">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.safetyTitle}</h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-8 text-ink/64">{copy.safetyText}</p>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_6%,rgba(7,22,74,0.045),transparent_28rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.spotlightTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/60">{copy.spotlightText}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {copy.candidates.map((item, index) => (
              <div key={item.name} className="overflow-hidden rounded-[24px] border border-white/70 bg-white/68 shadow-[0_22px_70px_rgba(7,22,74,0.075)] ring-1 ring-accent-500/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent-500/30">
                <ImagePlaceholder label={`Candidate ${index + 1}`} className="h-64 border-b border-white/70" />
                <div className="p-7">
                  <h3 className="font-heading text-xl font-bold text-primary-900">{item.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent-700">{item.role}</p>
                  <p className="mt-4 text-sm leading-6 text-ink/62">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.matrixTitle}</h2>
            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
          </div>
          <div className="grid gap-px overflow-hidden rounded-[26px] border border-white/70 bg-white/48 shadow-[0_24px_75px_rgba(7,22,74,0.08)] ring-1 ring-accent-500/10 backdrop-blur-2xl md:grid-cols-5">
            {copy.matrix.map((item) => (
              <div key={item.title} className="bg-white/64 p-7 transition hover:bg-white/86 sm:p-9">
                <div className="mb-6 text-3xl text-accent-700">✦</div>
                <h3 className="font-heading text-xl font-bold text-primary-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/62">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-900 px-6 py-20 text-white sm:py-24 lg:px-10 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(191,164,106,0.18),transparent_26rem),radial-gradient(circle_at_82%_72%,rgba(255,255,255,0.08),transparent_30rem)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold tracking-[-0.04em] sm:text-[3rem]`}>{copy.journeyTitle}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66 sm:text-base">{copy.journeyText}</p>
            </div>
            <Link href={`/${locale}/how-it-works`} className="w-fit border-b border-accent-300/60 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-accent-300 hover:text-accent-100">
              {copy.startSearch}
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {copy.steps.map((step, index) => (
              <div key={step.title} className="relative border border-white/14 bg-white/[0.075] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent-500/35 hover:bg-white/[0.105]">
                <span className="absolute right-8 top-7 font-heading text-4xl font-bold text-white/12">{String(index + 1).padStart(2, '0')}</span>
                <div className="mb-7 text-4xl text-accent-300">{index === 0 ? '⌕' : index === 1 ? '▤' : '▶'}</div>
                <h3 className="font-heading text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/66">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(191,164,106,0.10),transparent_30rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.disciplinesTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ink/62">{copy.disciplinesText}</p>
          </div>
          <div className="grid min-h-[720px] gap-6 lg:grid-cols-12">
            <Link href={`/${locale}/services/${copy.services[0].slug}`} className="group relative overflow-hidden rounded-[28px] border border-white/70 shadow-[0_30px_90px_rgba(7,22,74,0.12)] ring-1 ring-accent-500/12 backdrop-blur-xl lg:col-span-7 lg:row-span-2">
              <ImagePlaceholder label="Service Image" className="absolute inset-0 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/86 via-primary-900/28 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
                <span className="inline-flex rounded-full bg-accent-500 px-4 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-primary-900 shadow-[0_14px_35px_rgba(191,164,106,0.20)]">{copy.services[0].tag}</span>
                <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl`}>{copy.services[0].title}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/78">{copy.services[0].text}</p>
                <span className="mt-6 inline-flex bg-white/90 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-900 shadow-[0_12px_32px_rgba(7,22,74,0.14)] backdrop-blur-xl">{copy.services[0].cta}</span>
              </div>
            </Link>
            <Link href={`/${locale}/services/${copy.services[1].slug}`} className="group relative min-h-[340px] overflow-hidden rounded-[28px] border border-white/70 shadow-[0_26px_80px_rgba(7,22,74,0.10)] ring-1 ring-accent-500/12 lg:col-span-5">
              <ImagePlaceholder label="Service Image" className="absolute inset-0 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary-900/42 transition group-hover:bg-primary-900/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                <h3 className="font-heading text-3xl font-bold">{copy.services[1].title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">{copy.services[1].text}</p>
                <span className="mt-6 border-b border-accent-300/70 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-accent-100">{copy.services[1].cta}</span>
              </div>
            </Link>
            <Link href={`/${locale}/services/${copy.services[2].slug}`} className="flex min-h-[340px] flex-col justify-center rounded-[28px] border border-white/70 bg-white/58 p-9 shadow-[0_26px_80px_rgba(7,22,74,0.08)] ring-1 ring-accent-500/10 backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/72 lg:col-span-5">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/14 text-3xl text-accent-700 ring-1 ring-accent-500/25">⌂</div>
              <h3 className="font-heading text-3xl font-bold text-primary-900">{copy.services[2].title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-ink/62">{copy.services[2].text}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary-900">{copy.services[2].cta} <span>→</span></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-accent-500/12 bg-white/72 px-6 py-20 backdrop-blur-xl sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[28px] border border-white/60 bg-white/40 p-7 shadow-[0_20px_60px_rgba(7,22,74,0.055)] backdrop-blur-xl lg:bg-transparent lg:shadow-none">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-accent-700">{copy.testimonialsLabel}</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 text-[2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.testimonialsTitle}</h2>
            <div className="mt-10 space-y-9">
              {copy.testimonials.map((item) => (
                <div key={item.name} className="relative border-s-2 border-accent-500/25 ps-8">
                  <span className="absolute -start-4 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent-500/20 bg-[#fcf8fa] text-accent-700 shadow-sm">“</span>
                  <p className="text-lg italic leading-8 text-ink/78">{item.quote}</p>
                  <div className="mt-5 flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full border border-accent-500/25 bg-[linear-gradient(135deg,#efe9de,#ffffff)] shadow-sm" />
                    <div>
                      <p className="font-bold text-primary-900">{item.name}</p>
                      <p className="text-sm text-ink/55">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[560px] overflow-hidden rounded-[2px] border border-white/70 shadow-[0_30px_90px_rgba(7,22,74,0.12)] ring-1 ring-accent-500/10">
            <ImagePlaceholder label="Interior Image" className="absolute inset-0" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/82 to-transparent p-9 text-white">
              <p className="text-2xl font-light leading-snug">“{copy.imageQuote}”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-20 text-center text-white sm:py-24 lg:px-10 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(191,164,106,0.18),transparent_24rem),radial-gradient(circle_at_18%_82%,rgba(255,255,255,0.08),transparent_20rem)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />
        <div className="relative mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-12">
          <div className="mb-8 inline-flex items-center gap-4">
            <span className="h-px w-12 bg-accent-500" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.45em] text-accent-500">{copy.blackLabel}</span>
            <span className="h-px w-12 bg-accent-500" />
          </div>
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2.3rem] font-bold leading-tight tracking-[-0.05em] sm:text-[4.2rem]`}>{copy.blackTitle}</h2>
          <p className="mx-auto mt-8 max-w-3xl text-[1rem] leading-8 text-white/70 sm:text-lg">{copy.blackText}</p>
          <Link href={`/${locale}/contact`} className="mt-10 inline-flex border border-accent-500 bg-accent-500/5 px-9 py-4 text-xs font-bold uppercase tracking-[0.18em] text-accent-500 shadow-[0_18px_45px_rgba(191,164,106,0.12)] transition hover:-translate-y-0.5 hover:bg-accent-500 hover:text-black">
            {copy.blackCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
