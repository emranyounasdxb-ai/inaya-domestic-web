import Image from 'next/image';
import Link from 'next/link';
import ServiceIcon from '@/components/ServiceIcon';
import { getServiceWithExtras } from '@/lib/service-helpers';
import { getServiceImage, serviceGroups } from '@/lib/service-presentation';
import type { Lang } from '@/lib/service-page-copy-all';

type PageProps = {
  params: {
    locale: string;
  };
};

function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesPage({ params: { locale } }: PageProps) {
  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const isArabic = lang === 'ar';
  const headingClass = isArabic ? 'font-arabic leading-[1.35]' : 'font-heading leading-[1.05]';

  const copy = isArabic
    ? {
        brand: 'عناية للعمالة المنزلية',
        title: 'خدمات عمالة منزلية لكل احتياج أسري',
        subtitle: 'استكشف خدمات منزلية منظمة ومطابقة واضحة ودعماً مخصصاً للأسر في جميع أنحاء الإمارات.',
        consult: 'احجز استشارة',
        browse: 'تصفح فئات الخدمات',
        learnMore: 'تفاصيل الخدمة',
        finalTitle: 'لست متأكداً من الخدمة المناسبة؟',
        finalText: 'شاركنا تفاصيل المنزل والجدول والأولويات، وسيساعدك فريق عناية على مقارنة الخيارات المناسبة بوضوح.',
        finalCta: 'تحدث مع مستشار'
      }
    : {
        brand: 'INAYA Domestic Workers',
        title: 'Domestic Worker Services for Every Household Need',
        subtitle: 'Explore organized home services, clear matching guidance and dedicated support for families across the UAE.',
        consult: 'Book Consultation',
        browse: 'Browse service categories',
        learnMore: 'View service',
        finalTitle: 'Not sure which service fits your household?',
        finalText: 'Share your home, schedule and priorities. The INAYA team will help you compare suitable options clearly.',
        finalCta: 'Consult an Advisor'
      };

  return (
    <div className="overflow-hidden bg-white text-primary-900">
      <section className="relative border-b border-primary-900/10 bg-[#fffdf8] px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(191,164,106,0.16),transparent_24rem),radial-gradient(circle_at_84%_12%,rgba(7,22,74,0.05),transparent_28rem)]" />
        <div className="relative mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div className="ps-8 sm:ps-6 lg:ps-4 rtl:ps-0">
            <p className="text-sm font-bold text-accent-700">{copy.brand}</p>
            <h1 className={`${headingClass} mt-4 max-w-3xl text-[2.45rem] font-bold tracking-[-0.045em] text-primary-900 sm:text-[3.35rem] lg:text-[4.05rem]`}>
              {copy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-primary-900/85 sm:text-[1.05rem]">{copy.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${locale}/booking`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary-900 px-7 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(7,22,74,0.20)] transition hover:-translate-y-0.5 hover:bg-primary-800">
                {copy.consult}
              </Link>
              <a href="#service-groups" className="inline-flex min-h-12 items-center justify-center rounded-full border border-accent-500/50 bg-white px-7 py-3 text-sm font-bold text-primary-900 shadow-sm transition hover:border-accent-600 hover:bg-accent-50">
                {copy.browse}
              </a>
            </div>
          </div>
          <div className="relative min-h-[330px] overflow-hidden rounded-[28px] border border-primary-900/10 bg-white shadow-[0_26px_70px_rgba(7,22,74,0.14)]">
            <Image
              src="/images/home/home-concierge-support.webp"
              alt={copy.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <nav id="service-groups" aria-label={copy.browse} className="sticky top-0 z-20 border-b border-primary-900/10 bg-white/92 px-5 py-5 shadow-sm backdrop-blur-xl sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0">
          {serviceGroups.map((group) => (
            <a
              key={group.key}
              href={`#${group.key}`}
              className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-primary-900/14 bg-white px-4 py-2 text-sm font-bold text-primary-900 shadow-sm transition hover:border-accent-600 hover:bg-accent-50 hover:text-primary-900"
            >
              {group.title[lang]}
            </a>
          ))}
        </div>
      </nav>

      {serviceGroups.map((group, groupIndex) => {
        const services = group.slugs.map((slug) => getServiceWithExtras(slug)).filter(Boolean);

        return (
          <section
            key={group.key}
            id={group.key}
            className={`scroll-mt-24 border-b border-primary-900/8 px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 ${groupIndex % 2 === 0 ? 'bg-white' : 'bg-[#fffdf8]'}`}
          >
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <h2 className={`${headingClass} text-[2rem] font-bold tracking-[-0.035em] text-primary-900 sm:text-[2.65rem]`}>
                  {group.title[lang]}
                </h2>
                <p className="mt-4 text-[0.98rem] leading-8 text-primary-900/80">{group.description[lang]}</p>
              </div>

              <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service) => service ? (
                  <ServiceImageCard
                    key={service.slug}
                    locale={locale}
                    lang={lang}
                    title={service.name[lang]}
                    text={service.short[lang]}
                    slug={service.slug}
                    cta={copy.learnMore}
                  />
                ) : null)}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-primary-900 px-5 py-14 text-white sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className={`${headingClass} text-[2rem] font-bold text-white sm:text-[2.65rem]`}>{copy.finalTitle}</h2>
            <p className="mt-4 text-base leading-7 text-white/85">{copy.finalText}</p>
          </div>
          <Link href={`/${locale}/contact`} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-accent-500 px-7 py-3 text-sm font-bold text-primary-900 shadow-[0_14px_34px_rgba(191,164,106,0.22)] transition hover:-translate-y-0.5 hover:bg-accent-300">
            {copy.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceImageCard({
  locale,
  lang,
  title,
  text,
  slug,
  cta
}: {
  locale: string;
  lang: Lang;
  title: string;
  text: string;
  slug: string;
  cta: string;
}) {
  const isArabic = lang === 'ar';
  const headingClass = isArabic ? 'font-arabic leading-[1.35]' : 'font-heading';

  return (
    <Link
      href={`/${locale}/services/${slug}`}
      className="group flex h-full min-h-[390px] flex-col overflow-hidden rounded-[26px] border border-primary-900/10 bg-white shadow-[0_20px_52px_rgba(7,22,74,0.08)] transition hover:-translate-y-1 hover:border-accent-600/45 hover:shadow-[0_28px_70px_rgba(7,22,74,0.13)]"
    >
      <div className="relative h-52 overflow-hidden bg-[#f7f8fb]">
        <Image
          src={getServiceImage(slug)}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute start-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white text-accent-700 shadow-[0_12px_30px_rgba(7,22,74,0.12)]">
          <ServiceIcon slug={slug} className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={`${headingClass} text-[1.35rem] font-bold tracking-[-0.025em] text-primary-900`}>{title}</h3>
        <p className="mt-3 text-sm leading-7 text-primary-900/80">{text}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-accent-700 transition group-hover:text-primary-900">
          {cta}
          <span className={`${isArabic ? 'rotate-180' : ''} transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1`}>
            <ArrowIcon />
          </span>
        </span>
      </div>
    </Link>
  );
}
