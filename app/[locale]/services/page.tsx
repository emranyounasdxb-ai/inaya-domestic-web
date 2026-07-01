import Image from 'next/image';
import Link from 'next/link';
import ServiceIcon from '@/components/ServiceIcon';
import { getServiceWithExtras } from '@/lib/service-helpers';
import { serviceGroups } from '@/lib/service-presentation';
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
        serviceCount: 'خدمة',
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
        serviceCount: 'services',
        learnMore: 'View service',
        finalTitle: 'Not sure which service fits your household?',
        finalText: 'Share your home, schedule and priorities. The INAYA team will help you compare suitable options clearly.',
        finalCta: 'Consult an Advisor'
      };

  return (
    <div className="overflow-hidden bg-white text-primary-900">
      <section className="border-b border-primary-900/8 bg-[#fffdf8] px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div className="ps-8 sm:ps-6 lg:ps-4 rtl:ps-0">
            <p className="text-sm font-bold text-accent-700">{copy.brand}</p>
            <h1 className={`${headingClass} mt-4 max-w-3xl text-[2.45rem] font-bold tracking-[-0.045em] text-primary-900 sm:text-[3.35rem] lg:text-[4.05rem]`}>
              {copy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-primary-900/80 sm:text-[1.05rem]">{copy.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${locale}/booking`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary-900 px-7 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(7,22,74,0.18)] transition hover:-translate-y-0.5 hover:bg-primary-800">
                {copy.consult}
              </Link>
              <a href="#service-groups" className="inline-flex min-h-12 items-center justify-center rounded-full border border-accent-500/40 bg-white px-7 py-3 text-sm font-bold text-primary-900 transition hover:border-accent-500 hover:bg-accent-50">
                {copy.browse}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] min-h-[320px] overflow-hidden rounded-lg border border-primary-900/10 bg-white shadow-[0_24px_60px_rgba(7,22,74,0.12)]">
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

      <nav id="service-groups" aria-label={copy.browse} className="border-b border-primary-900/8 bg-white px-5 py-5 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0">
          {serviceGroups.map((group) => (
            <a
              key={group.key}
              href={`#${group.key}`}
              className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-primary-900/12 bg-white px-4 py-2 text-sm font-semibold text-primary-900 transition hover:border-accent-500/45 hover:bg-accent-50"
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
              <div className="grid gap-5 border-b border-primary-900/10 pb-7 lg:grid-cols-[1fr_0.72fr] lg:items-end">
                <div>
                  <p className="text-sm font-bold text-accent-700">
                    {String(groupIndex + 1).padStart(2, '0')} / {String(serviceGroups.length).padStart(2, '0')}
                  </p>
                  <h2 className={`${headingClass} mt-3 text-[2rem] font-bold tracking-[-0.035em] text-primary-900 sm:text-[2.6rem]`}>
                    {group.title[lang]}
                  </h2>
                </div>
                <p className="text-[0.95rem] leading-7 text-primary-900/76 lg:text-end">{group.description[lang]}</p>
              </div>

              <div className="mt-7 grid gap-x-6 lg:grid-cols-2">
                {services.map((service) => service ? (
                  <Link
                    key={service.slug}
                    href={`/${locale}/services/${service.slug}`}
                    className="group grid min-h-[118px] grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-primary-900/10 py-5 transition hover:border-accent-500/50"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent-500/25 bg-accent-50 text-accent-700">
                      <ServiceIcon slug={service.slug} className="h-6 w-6" />
                    </span>
                    <span>
                      <span className={`${headingClass} block text-lg font-bold leading-snug text-primary-900`}>{service.name[lang]}</span>
                      <span className="mt-1.5 block text-sm leading-6 text-primary-900/70">{service.short[lang]}</span>
                      <span className="mt-2 block text-xs font-bold text-accent-700">{copy.learnMore}</span>
                    </span>
                    <span className={`${isArabic ? 'rotate-180' : ''} text-primary-900 transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1`}>
                      <ArrowIcon />
                    </span>
                  </Link>
                ) : null)}
              </div>
              <p className="mt-6 text-sm font-semibold text-primary-900/65">
                {services.length} {copy.serviceCount}
              </p>
            </div>
          </section>
        );
      })}

      <section className="bg-primary-900 px-5 py-14 text-white sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className={`${headingClass} text-[2rem] font-bold text-white sm:text-[2.65rem]`}>{copy.finalTitle}</h2>
            <p className="mt-4 text-base leading-7 text-white/78">{copy.finalText}</p>
          </div>
          <Link href={`/${locale}/contact`} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-accent-500 px-7 py-3 text-sm font-bold text-primary-900 transition hover:-translate-y-0.5 hover:bg-accent-300">
            {copy.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
