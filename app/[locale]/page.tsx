import { withPageImageVersion } from '@/lib/home-about-images';
import HomeAboutPortrait from '@/components/HomeAboutPortrait';
import HomeHeroImage from '@/components/HomeHeroImage';
import { packageSummary, packageSections } from '@/lib/package-content';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/page-seo';
import RouteSeo from '@/components/RouteSeo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, '');
}
import HomeCountryAvailability from '@/components/HomeCountryAvailability';
import HomeGoogleReviews from '@/components/HomeGoogleReviews';
import '../home-country-availability.css';
import '../home-google-reviews.css';
import '../curated-discipline-images.css';
import '../home-hero.css';

const homeContent = {
  en: {
    heroLabel: 'Legacy of Trust',
    heroTitleA: 'Maid & Domestic Worker Services',
    heroTitleB: 'in Ajman and Across the UAE',
    heroText: packageSummary.en,
    primaryCta: 'Request Consultation',
    secondaryCta: 'Explore Services',
    trustLabel: 'Logos identify organizations only; no endorsement or approval is claimed',
    conciergeLabel: 'Enquiry & Follow-up',
    conciergeTitle: "Managed Service & Follow-up",
    conciergeText: packageSections.followUp.body.en,
    learnMore: 'Contact INAYA Support',
    safetyTitle: 'Safety & Discretion',
    safetyText: 'Privacy is part of the service experience. Household information, documents and expectations are handled carefully before any step is confirmed.',
    safetyCards: [
      { title: 'Document Care', text: 'Requirements are handled with clear records and careful follow-up.' },
      { title: 'Family Privacy', text: 'Communication remains respectful, private and relevant to the household.' }
    ],
    spotlightTitle: 'Which household roles can I discuss?',
    spotlightText: 'Explore childcare, cooking and household coordination. Ask the team for individual profiles and current availability.',
    candidates: [
      { name: 'Childcare', role: 'Executive Nanny Role', text: 'Discuss childcare experience and the family routine when reviewing individual profiles.' },
      { name: 'Cooking', role: 'Private Chef • Home Dining', text: 'Explain meal preferences and kitchen duties before comparing profiles.' },
      { name: 'Household Coordination', role: 'House Manager • Estate Support', text: 'Describe coordination duties and the household team before selecting a role.' }
    ],
    journeyTitle: 'A Seamless Journey',
    journeyText: 'Hiring domestic support should not feel complex. The process is arranged in three clear stages.',
    startSearch: 'Start Your Search',
    steps: [
      { title: 'Share Requirement', text: 'Tell us the service type, emirate, timing and household details.' },
      { title: 'Confirm Details', text: "Review individual profiles, agreed duties and the written scope, price breakdown and payment documents." },
      { title: 'Review Before Confirmation', text: "Confirm the selected candidate and service start after required lawful authorisation and written confirmation; any revised candidate requires your consent." }
    ],
    disciplinesTitle: 'Curated Disciplines',
    disciplinesText: 'Compare the listed household roles and discuss which duties are relevant to your request.',
    services: [
      { slug: 'executive-nannies', tag: 'Premier Selection', title: 'Executive Nannies', text: 'Specialized childcare support focused on care, routine and family comfort.', cta: 'Learn More' },
      { slug: 'private-chefs', title: 'Private Chefs', text: 'Culinary support in the comfort of your kitchen.', cta: 'Inquire' },
      { slug: 'house-managers', title: 'House Managers', text: 'Structured household support and coordination for busy homes.', cta: 'View Credentials' }
    ],
    testimonialsLabel: 'Client Perspectives',
    testimonialsTitle: 'Whispers of Satisfaction',
    testimonials: [
      { quote: 'INAYA helped me find reliable support for my home. The team was polite, clear and responsive.', name: 'Sarah Malik', role: 'Working Mother, Ajman' },
      { quote: 'Excellent and transparent service. The team explained every step and followed up professionally.', name: 'Ali Khan', role: 'Business Owner, Sharjah' }
    ],
    imageQuote: 'Our sanctuary is finally managed with the precision it deserves.',
    blackLabel: "HOUSEHOLD PLANNING",
    blackTitle: "Bespoke Staffing & Household Support",
    blackText: "Share your household roles, schedule and requirements. We review availability and explain the service scope, published package rates and any additional requirements before written confirmation.",
    blackCta: 'Enquire About Your Requirements'
  },
  ar: {
    heroLabel: 'إرث من الثقة',
    heroTitleA: 'خدمات الخادمات والعمالة المنزلية',
    heroTitleB: 'في عجمان وجميع أنحاء الإمارات',
    heroText: packageSummary.ar,
    primaryCta: 'اطلب استشارة',
    secondaryCta: 'استكشف الخدمات',
    trustLabel: 'الشعارات للتعريف بالجهات فقط ولا تعني اعتماداً أو تأييداً',
    conciergeLabel: 'دعم ومتابعة',
    conciergeTitle: "خدمة مدارة ومتابعة منظمة",
    conciergeText: packageSections.followUp.body.ar,
    learnMore: 'تواصل مع فريق عناية',
    safetyTitle: 'السلامة والخصوصية',
    safetyText: 'الخصوصية جزء أساسي من تجربة الخدمة. يتم التعامل مع معلومات الأسرة والمستندات والتوقعات بعناية قبل تأكيد أي خطوة.',
    safetyCards: [
      { title: 'عناية بالمستندات', text: 'تتم متابعة المتطلبات بسجلات واضحة وتنسيق دقيق.' },
      { title: 'خصوصية الأسرة', text: 'يبقى التواصل محترماً وخاصاً ومرتبطاً باحتياج المنزل.' }
    ],
    spotlightTitle: 'ما الأدوار المنزلية التي يمكنني مناقشتها؟',
    spotlightText: 'استكشف رعاية الأطفال والطهي وتنسيق المنزل. اطلب من الفريق الملفات الفردية والتوفر الحالي.',
    candidates: [
      { name: 'رعاية الأطفال', role: 'دور المربية التنفيذية', text: 'ناقش خبرة رعاية الأطفال وروتين الأسرة عند مراجعة الملفات الفردية.' },
      { name: 'الطبخ', role: 'شيف خاص • طبخ منزلي', text: 'وضح تفضيلات الوجبات ومهام المطبخ قبل مقارنة الملفات.' },
      { name: 'تنسيق المنزل', role: 'مديرة منزل • دعم الأسر', text: 'وضح مهام التنسيق وفريق المنزل قبل اختيار الدور.' }
    ],
    journeyTitle: 'رحلة سلسة',
    journeyText: 'طلب الدعم المنزلي يجب ألا يكون معقداً. لذلك نرتب العملية في ثلاث مراحل واضحة.',
    startSearch: 'ابدأ طلبك',
    steps: [
      { title: 'شارك الاحتياج', text: 'أخبرنا بنوع الخدمة، الإمارة، التوقيت وتفاصيل المنزل.' },
      { title: 'تأكيد التفاصيل', text: "راجع الملفات الفردية والمهام المتفق عليها والنطاق المكتوب وتفصيل السعر ومستندات السداد." },
      { title: 'المراجعة قبل التأكيد', text: "أكد المرشحة المختارة وبدء الخدمة بعد التصاريح النظامية والتأكيد المكتوب؛ ويتطلب تغيير المرشحة موافقتك." }
    ],
    disciplinesTitle: 'تخصصات مختارة',
    disciplinesText: 'قارن الأدوار المنزلية المدرجة وناقش المهام ذات الصلة بطلبك.',
    services: [
      { slug: 'executive-nannies', tag: 'اختيار مميز', title: 'مربيات تنفيذيات', text: 'دعم متخصص للأطفال يركز على الرعاية والروتين وراحة الأسرة.', cta: 'اعرف المزيد' },
      { slug: 'private-chefs', title: 'شيف خاص', text: 'دعم للطبخ داخل منزلك بما يناسب ذوق الأسرة.', cta: 'استفسر' },
      { slug: 'house-managers', title: 'مديرو المنزل', text: 'دعم منظم وتنسيق منزلي للأسر كثيرة الانشغال.', cta: 'عرض التفاصيل' }
    ],
    testimonialsLabel: 'آراء العملاء',
    testimonialsTitle: 'ثقة ورضا العملاء',
    testimonials: [
      { quote: 'ساعدتني عناية في الوصول إلى دعم موثوق للمنزل. كان الفريق واضحاً ومتعاوناً.', name: 'سارة مالك', role: 'أم عاملة، عجمان' },
      { quote: 'خدمة ممتازة وواضحة. شرح الفريق كل خطوة وتابع معنا باحتراف.', name: 'علي خان', role: 'صاحب عمل، الشارقة' }
    ],
    imageQuote: 'أصبح منزلنا أكثر تنظيماً وراحة.',
    blackLabel: "تخطيط احتياجات المنزل",
    blackTitle: "عمالة ودعم منزلي حسب الطلب",
    blackText: "شارك الأدوار والجدول واحتياجات منزلك. نراجع التوفر ونوضح نطاق الخدمة والأسعار المنشورة أو أي احتياجات إضافية قبل التأكيد المكتوب.",
    blackCta: 'استفسر عن متطلباتك'
  }
};

const authorityLogos = [
  { name: 'MOHRE', nameAr: 'وزارة الموارد البشرية والتوطين', file: 'Ministry-logo.png' },
  { name: 'Tadbeer', nameAr: 'تدبير', file: 'ajman-tadbeer-logo.png' },
  { name: 'Ajman Chamber', nameAr: 'غرفة عجمان', file: 'Ajman-Chamber-logo.png' },
  { name: 'UAE Pass', nameAr: 'الهوية الرقمية', file: 'ajman-UAE-Pass-Logo.png' },
  { name: 'Ajman Gold', nameAr: 'عجمان جولد', file: 'Ajman-Gold-logo.png' },
  { name: 'Ajman', nameAr: 'عجمان', file: 'Ajman-logo.png' }
];

const homeImages = {
  candidates: [
    '/images/services/nanny.webp',
    '/images/services/home-cooking.webp',
    '/images/services/bespoke-household-management.webp'
  ],
  disciplines: [
    '/images/services/executive-nannies.webp',
    '/images/services/private-chefs.webp',
    '/images/services/house-managers.webp'
  ]
};

const homeImageWidths = [480, 768, 960, 1200, 1400];
const serviceImageWidths = [480, 768, 900];
const useOptimizedImageVariants = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

function optimizedVariant(src: string, width: number) {
  const cleanSrc = src.replace(/^\//, '').replace(/\.[^.]+$/i, '');
  return withPageImageVersion(`/optimized/${cleanSrc}-${width}.webp`, src);
}

function optimizedSrcSet(src: string) {
  const widths = src.startsWith('/images/services/') ? serviceImageWidths : homeImageWidths;
  return widths.map((width) => `${optimizedVariant(src, width)} ${width}w`).join(', ');
}

function ResponsiveImage({
  alt,
  src,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  imageClassName = 'object-cover'
}: {
  alt: string;
  src: string;
  priority?: boolean;
  sizes?: string;
  imageClassName?: string;
}) {
  return (
    <picture className="absolute inset-0 block">
      {useOptimizedImageVariants ? <source type="image/webp" srcSet={optimizedSrcSet(src)} sizes={sizes} /> : null}
      <img
        src={withPageImageVersion(src)}
        alt={alt}
        width={1586}
        height={992}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding={priority ? 'sync' : 'async'}
        className={`h-full w-full ${imageClassName}`}
      />
    </picture>
  );
}

function HomeImage({ alt, className = '', src, priority = false }: { alt: string; className?: string; src: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-[#f7f8fb] ${className}`}>
      <ResponsiveImage alt={alt} src={src} priority={priority} />
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
      <ResponsiveImage
        src={image}
        alt={title}
        sizes={featured ? '(max-width: 1024px) 100vw, 58vw' : '(max-width: 1024px) 100vw, 42vw'}
        imageClassName="curated-discipline-card__image object-cover"
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
  const src = `/authority-logos/${file}`;
  const base = `/optimized/authority-logos/${file.replace(/\.[^.]+$/i, '')}`;

  return (
    <div className="flex h-20 min-w-[178px] items-center justify-center rounded-[20px] border border-white/70 bg-white/68 px-7 shadow-[0_14px_34px_rgba(7,22,74,0.055)] ring-1 ring-accent-500/8 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent-500/30 hover:bg-white/82">
      <picture>
        {useOptimizedImageVariants ? <source type="image/webp" srcSet={`${base}-160.webp 160w, ${base}-320.webp 320w`} sizes="144px" /> : null}
        <img src={src} alt={name} width="144" height="44" loading="lazy" decoding="async" className="h-11 w-36 object-contain" />
      </picture>
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
          <AuthorityLogoCard key={`${logo.file}-${index}`} name={isArabic ? logo.nameAr : logo.name} file={logo.file} />
        ))}
      </div>
    </div>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === 'ar';
  const copy = isArabic ? homeContent.ar : homeContent.en;

  return (
    <div className="overflow-hidden bg-[linear-gradient(180deg,#fcf8fa_0%,#f8f6f0_44%,#fbfaf7_100%)] text-ink">
      <RouteSeo locale={locale} route="" />
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

      <section className="home-hero" data-home-hero>
        <div className="home-hero__inner">
          <div className="home-hero__media">
            <HomeHeroImage isArabic={isArabic} />
            <div className="home-hero__shade" />
          </div>
          <div className="home-hero__content">
            <div className="home-hero__copy" data-home-hero-copy dir={isArabic ? 'rtl' : 'ltr'}>
              <p className="home-hero__label">{copy.heroLabel}</p>
              <h1 className={`${isArabic ? 'font-arabic' : 'font-heading'} home-hero__title`}>
                {copy.heroTitleA}{' '}<br />
                <span className="home-hero__title-accent">{copy.heroTitleB}</span>
              </h1>
              <p className="home-hero__text">{copy.heroText}</p>
              <div className="home-hero__actions">
                <Link href={`/${locale}/contact`} className="home-hero__primary">
                  {copy.primaryCta}
                </Link>
                <Link href={`/${locale}/services`} className="home-hero__secondary">
                  {copy.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-accent-500/12 bg-white/72 px-6 py-14 backdrop-blur-xl lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary-900/75">{copy.trustLabel}</p>
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
              <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-primary-900/82">{copy.conciergeText}</p>
              <Link href={`/${locale}/contact`} className="mt-8 inline-flex items-center rounded-full bg-primary-900 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(7,22,74,0.16)] transition hover:-translate-y-0.5 hover:bg-primary-800">
                {copy.learnMore}
              </Link>
            </div>
            <HomeAboutPortrait slot="homeFollowUp" isArabic={isArabic} className="border border-primary-900/10 shadow-[0_18px_50px_rgba(7,22,74,0.10)]" />
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
                <p className="mt-3 text-sm leading-6 text-primary-900/80">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[28px] border border-white/55 bg-white/32 p-7 shadow-[0_18px_50px_rgba(7,22,74,0.045)] backdrop-blur-xl lg:bg-transparent lg:shadow-none lg:backdrop-blur-0">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.safetyTitle}</h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-8 text-primary-900/82">{copy.safetyText}</p>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_6%,rgba(7,22,74,0.045),transparent_28rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.spotlightTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-primary-900/80">{copy.spotlightText}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {copy.candidates.map((item, index) => (
              <div key={item.name} className="overflow-hidden rounded-[24px] border border-white/70 bg-white/68 shadow-[0_22px_70px_rgba(7,22,74,0.075)] ring-1 ring-accent-500/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent-500/30">
                <HomeImage alt={isArabic ? ['مربية بزي بيج تلعب بالمكعبات مع طفل', 'عاملة بزي وردي تقطع الخضراوات في مطبخ منزلي', 'عاملات بأزياء وردية وزرقاء وبيج يرتبن أغطية وكتباً في المنزل'][index] : ['A nanny in a beige uniform playing with blocks beside a child', 'A worker in a pink uniform chopping vegetables in a home kitchen', 'Workers in pink, blue and beige uniforms organising blankets and books at home'][index]} src={homeImages.candidates[index]} className="h-64 border-b border-primary-900/10" />
                <div className="p-7">
                  <h3 className="font-heading text-xl font-bold text-primary-900">{item.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent-700">{item.role}</p>
                  <p className="mt-4 text-sm leading-6 text-primary-900/80">{item.text}</p>
                </div>
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
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">{copy.journeyText}</p>
            </div>
            <Link href={`/${locale}/how-it-works`} className="w-fit border-b border-accent-300/60 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-accent-300 hover:text-accent-100">
              {copy.startSearch}
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {copy.steps.map((step, index) => (
              <div key={step.title} className="relative border border-white/14 bg-white/[0.075] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent-500/35 hover:bg-white/[0.105]">
                <span className="absolute right-8 top-7 font-heading text-4xl font-bold text-accent-300/75">{String(index + 1).padStart(2, '0')}</span>
                <div className="mb-7 text-4xl text-accent-300">{index === 0 ? '⌕' : index === 1 ? '▤' : '▶'}</div>
                <h3 className="font-heading text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/85">{step.text}</p>
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
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-900/80">{copy.disciplinesText}</p>
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

      <section className="px-6 py-14 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-2xl font-bold text-primary-900`}>{isArabic ? 'اختر الخدمة ومنطقة طلبك' : 'Find the service for your household and emirate'}</h2>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{isArabic ? 'ابدأ بنوع المهام والجدول المطلوب، ثم راجع التفاصيل مع المكتب في عجمان. التغطية لا تؤكد التوفر أو موعد البدء.' : 'Start with the duties and schedule you need, then discuss the details with our Ajman office. Service coverage does not confirm availability or a start date.'}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              ['services/housemaid', 'Housemaid services', 'خدمات عاملة المنزل'],
              ['services/live-in-maid', 'Live-in maid', 'خادمة مقيمة'],
              ['services/full-time-maid', 'Full-time maid', 'خادمة بدوام كامل'],
              ['services/part-time-maid', 'Part-time maid', 'خادمة بدوام جزئي'],
              ['services/monthly-maid-contract', 'Monthly maid contracts', 'عقود خادمة شهرية'],
              ['services/nanny', 'Nanny and childcare', 'المربيات ورعاية الأطفال'],
              ['services/maid-visa', 'Maid visa enquiry', 'استفسار تأشيرة خادمة'],
              ['maid-services-ajman', 'Maid services in Ajman', 'خدمات خادمات في عجمان'],
              ['maid-services-dubai', 'Maid services in Dubai', 'خدمات خادمات في دبي'],
              ['maid-services-sharjah', 'Maid services in Sharjah', 'خدمات خادمات في الشارقة']
            ].map(([route, en, ar]) => <Link key={route} href={`/${locale}/${route}/`} className="rounded-full border border-accent-500/22 bg-[#fbfaf7] px-4 py-2 text-sm font-semibold text-primary-900 transition hover:bg-white">{isArabic ? ar : en}</Link>)}
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
          <p className="mx-auto mt-8 max-w-3xl text-[1rem] leading-8 text-white/85 sm:text-lg">{copy.blackText}</p>
          <Link href={`/${locale}/contact`} className="mt-10 inline-flex border border-accent-500 bg-accent-500/5 px-9 py-4 text-xs font-bold uppercase tracking-[0.18em] text-accent-500 shadow-[0_18px_45px_rgba(191,164,106,0.12)] transition hover:-translate-y-0.5 hover:bg-accent-500 hover:text-black">
            {copy.blackCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
