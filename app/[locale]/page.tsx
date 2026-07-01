import Link from 'next/link';
import HomeCountryAvailability from '@/components/HomeCountryAvailability';
import HomeGoogleReviews from '@/components/HomeGoogleReviews';
import HomeStandardsSpotlight from '@/components/HomeStandardsSpotlight';
import HomeVettingMatrix from '@/components/HomeVettingMatrix';
import TrustTextGsap from '@/components/TrustTextGsap';

const homeContent = {
  en: {
    heroLabel: 'Legacy of Trust',
    heroTitleA: 'Elevating Domestic',
    heroTitleB: 'Excellence',
    heroText: 'Bespoke domestic worker services for UAE families who expect clarity, trust and a calm household experience.',
    primaryCta: 'Request Consultation',
    secondaryCta: 'Explore Services',
    trustLabel: 'Recognized & Trusted by UAE Authorities',
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

const authorityLogos = [
  { name: 'MOHRE', file: 'Ministry-logo.png' },
  { name: 'Tadbeer', file: 'ajman-tadbeer-logo.png' },
  { name: 'Ajman Chamber', file: 'Ajman-Chamber-logo.png' },
  { name: 'UAE Pass', file: 'ajman-UAE-Pass-Logo.png' },
  { name: 'Ajman Gold', file: 'Ajman-Gold-logo.png' },
  { name: 'Ajman', file: 'Ajman-logo.png' }
];

const homeImages = {
  hero: '/images/home/home-hero-family.webp',
  concierge: '/images/home/home-concierge-support.webp',
  candidates: [
    '/images/home/candidate-executive-nanny.webp',
    '/images/home/candidate-private-chef.webp',
    '/images/home/candidate-house-manager.webp'
  ],
  disciplines: [
    '/images/home/discipline-executive-nannies.webp',
    '/images/home/discipline-private-chef.webp',
    '/images/home/discipline-house-manager.webp'
  ],
  testimonial: '/images/home/home-interior-testimonial.webp'
};

function ImagePlaceholder({ label, className = '', src }: { label: string; className?: string; src?: string }) {
  const backgroundImage = src ? `url(${src}), linear-gradient(135deg,#f2eadc,#ffffff,#e7edf6)` : undefined;

  return (
    <div
      aria-label={label}
      className={`relative overflow-hidden bg-[linear-gradient(135deg,#f2eadc_0%,#ffffff_42%,#e7edf6_100%)] bg-cover bg-center ${className}`}
      style={backgroundImage ? { backgroundImage } : undefined}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(191,164,106,0.22),transparent_16rem),radial-gradient(circle_at_82%_68%,rgba(7,22,74,0.10),transparent_18rem)]" />
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(7,22,74,.075)_1px,transparent_1px),linear-gradient(90deg,rgba(7,22,74,.075)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-5 rounded-[1.1rem] border border-white/75 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[2px]" />
      {!src ? (
        <div className="absolute left-5 top-5 rounded-full border border-accent-500/30 bg-white/75 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-primary-900 shadow-[0_12px_30px_rgba(7,22,74,0.08)] backdrop-blur-xl">
          {label}
        </div>
      ) : null}
    </div>
  );
}


function CuratedDisciplineCard({
  href,
  image,
  title,
  text,
  cta,
  tag,
  featured = false,
  isArabic
}: {
  href: string;
  image: string;
  title: string;
  text: string;
  cta: string;
  tag?: string;
  featured?: boolean;
  isArabic: boolean;
}) {
  return (
    <Link
      href={href}
      className={`curated-discipline-card group ${featured ? 'curated-discipline-card--featured lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'}`}
    >
      <div
        className="curated-discipline-card__image"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="curated-discipline-card__glow" aria-hidden="true" />
      <div className="curated-discipline-card__content">
        {tag ? <span className="curated-discipline-card__badge">{tag}</span> : null}
        <h3 className={`${isArabic ? 'font-arabicHeading' : 'font-heading'} curated-discipline-card__title`}>{title}</h3>
        <p className="curated-discipline-card__text">{text}</p>
        <span className="curated-discipline-card__button">{cta}</span>
      </div>
    </Link>
  );
}

function AuthorityLogoCard({ name, file }: { name: string; file: string }) {
  return (
    <div className="flex h-20 min-w-[178px] items-center justify-center rounded-[20px] border border-white/70 bg-white/68 px-7 shadow-[0_14px_34px_rgba(7,22,74,0.055)] ring-1 ring-accent-500/8 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent-500/30 hover:bg-white/82">
      <div
        className="h-11 w-36 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/authority-logos/${file}')` }}
        aria-label={name}
        role="img"
      />
    </div>
  );
}

function AuthorityLogoCarousel({ isArabic }: { isArabic: boolean }) {
  const logos = [...authorityLogos, ...authorityLogos];
  const animationName = isArabic ? 'homeLogoMarqueeLtr' : 'homeLogoMarqueeRtl';

  return (
    <div className="relative mt-9 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]" dir="ltr">
      <div className="home-logo-track flex w-max gap-4 py-2" style={{ animation: `${animationName} 30s linear infinite` }}>
        {logos.map((logo, index) => (
          <AuthorityLogoCard key={`${logo.file}-${index}`} {...logo} />
        ))}
      </div>
    </div>
  );
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const copy = isArabic ? homeContent.ar : homeContent.en;

  return (
    <div className="overflow-hidden bg-[linear-gradient(180deg,#fcf8fa_0%,#f8f6f0_44%,#fbfaf7_100%)] text-ink">
      <TrustTextGsap />
      <HomeStandardsSpotlight />
      <style>{`
        @keyframes homeLogoMarqueeRtl {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes homeLogoMarqueeLtr {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .home-logo-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .home-logo-track { animation: none !important; }
        }
      `}</style>

      <section className="relative min-h-[82vh] overflow-hidden">
        <ImagePlaceholder label="Hero Image Placeholder" src={homeImages.hero} className="absolute inset-0" />
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
          <AuthorityLogoCarousel isArabic={isArabic} />
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
            <ImagePlaceholder label="Concierge Image" src={homeImages.concierge} className="min-h-[320px] rounded-[22px] border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_18px_50px_rgba(7,22,74,0.08)]" />
          </div>
        </div>
      </section>

      <HomeCountryAvailability locale={locale} />

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
                <ImagePlaceholder label={`Candidate ${index + 1}`} src={homeImages.candidates[index]} className="h-64 border-b border-white/70" />
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

      <HomeVettingMatrix />

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
          <div className="curated-disciplines-grid grid gap-6 lg:grid-cols-12">
            {copy.services.map((service, index) => (
              <CuratedDisciplineCard
                key={service.slug}
                href={`/${locale}/services/${service.slug}`}
                image={homeImages.disciplines[index]}
                title={service.title}
                text={service.text}
                cta={service.cta}
                tag={service.tag}
                featured={index === 0}
                isArabic={isArabic}
              />
            ))}
          </div>
        </div>
      </section>

      <HomeGoogleReviews locale={locale} />

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
