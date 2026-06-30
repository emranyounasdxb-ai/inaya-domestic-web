import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLocationServicePage, locationServicePages, type Lang } from '@/lib/location-service-pages';

export function generateStaticParams() {
  return locationServicePages.map((location) => ({ locationSlug: location.slug }));
}

export function generateMetadata({ params: { locale, locationSlug } }: { params: { locale: string; locationSlug: string } }): Metadata {
  const location = getLocationServicePage(locationSlug);
  if (!location) return {};
  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const canonical = `/${locale}/${location.slug}`;

  return {
    title: location.metaTitle[lang],
    description: location.metaDescription[lang],
    alternates: {
      canonical,
      languages: {
        en: `/en/${location.slug}`,
        ar: `/ar/${location.slug}`
      }
    },
    openGraph: {
      title: location.metaTitle[lang],
      description: location.metaDescription[lang],
      type: 'website',
      locale: lang === 'ar' ? 'ar_AE' : 'en_AE',
      url: canonical
    },
    twitter: {
      card: 'summary_large_image',
      title: location.metaTitle[lang],
      description: location.metaDescription[lang]
    }
  };
}

export default function LocationServicePage({ params: { locale, locationSlug } }: { params: { locale: string; locationSlug: string } }) {
  const location = getLocationServicePage(locationSlug);
  if (!location) notFound();

  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const otherLocations = locationServicePages.filter((item) => item.slug !== location.slug).slice(0, 6);
  const t = lang === 'ar'
    ? {
        badge: 'دليل خدمات المنطقة',
        areaBadge: 'منطقة خدمة داخل الإمارات',
        localTitle: 'احتياجات الأسر في هذه الإمارة',
        servicesTitle: 'الخدمات المتوفرة',
        areasTitle: 'مناطق قريبة نخدمها',
        processTitle: 'كيف تساعدك عناية؟',
        process: ['مراجعة احتياج المنزل والأسرة', 'تحديد نوع الخدمة والمهام', 'شرح التوفر والخطوات', 'متابعة واضحة قبل التأكيد'],
        faqTitle: 'أسئلة شائعة',
        otherTitle: 'مناطق أخرى في الإمارات',
        ctaTitle: 'هل تحتاج خدمة خادمة في هذه الإمارة؟',
        ctaText: 'شارك نوع الخدمة والمنطقة وتاريخ البدء، وسيرشدك فريق عناية للخيارات المناسبة.',
        cta: 'تواصل مع عناية',
        contact: 'طلب استشارة',
        countries: 'قارن دول المصدر',
        back: 'كل مناطق الخدمة'
      }
    : {
        badge: 'Location Service Guide',
        areaBadge: 'UAE Service Area',
        localTitle: 'Common family needs in this emirate',
        servicesTitle: 'Available service options',
        areasTitle: 'Nearby areas we support',
        processTitle: 'How INAYA helps',
        process: ['Review the home and family requirement', 'Confirm service type and duties', 'Explain availability and next steps', 'Follow up clearly before confirmation'],
        faqTitle: 'Frequently asked questions',
        otherTitle: 'Other UAE service areas',
        ctaTitle: 'Need maid service in this emirate?',
        ctaText: 'Share the service type, area and preferred start date, and the INAYA team will guide you to suitable options.',
        cta: 'Contact INAYA',
        contact: 'Request Consultation',
        countries: 'Compare Source Countries',
        back: 'All Service Areas'
      };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: location.heroTitle[lang],
    description: location.metaDescription[lang],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: location.city[lang]
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'INAYA Domestic Workers',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ajman',
        addressCountry: 'AE'
      }
    },
    serviceType: ['Maid Services', 'Domestic Workers', 'Nanny Services', 'Home Cooking', 'Maid Visa Assistance']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question[lang],
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer[lang]
      }
    }))
  };

  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-primary-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_80%_28%,rgba(7,22,74,0.09),transparent_30rem)]" />
        <div className="relative mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1fr_0.76fr] lg:items-center">
          <div>
            <Link href={`/${locale}/service-areas`} className="inline-flex rounded-full border border-accent-500/25 bg-white/78 px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.22em] text-accent-700 shadow-sm">
              {t.back}
            </Link>
            <p className="mt-7 text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{t.badge}</p>
            <h1 className={`${lang === 'ar' ? 'font-arabic leading-[1.25]' : 'font-heading leading-[1.02]'} mt-4 max-w-4xl text-[2.35rem] font-bold tracking-[-0.055em] text-primary-900 sm:text-[3.6rem]`}>
              {location.heroTitle[lang]}
            </h1>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-8 text-primary-900/72">{location.lead[lang]}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/${locale}/contact`} className="rounded-full bg-primary-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_45px_rgba(7,22,74,0.16)]">{t.contact}</Link>
              <Link href={`/${locale}/services/countries-we-source-from`} className="rounded-full border border-accent-500/28 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-900">{t.countries}</Link>
            </div>
          </div>
          <div className="rounded-[30px] border border-white/80 bg-white/78 p-6 shadow-[0_24px_70px_rgba(7,22,74,0.08)] ring-1 ring-accent-500/10">
            <div className="rounded-[24px] bg-[linear-gradient(135deg,#07164A,#10266c)] p-6 text-white shadow-[0_20px_50px_rgba(7,22,74,0.18)]">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-accent-300">{t.areaBadge}</p>
              <h2 className={`${lang === 'ar' ? 'font-arabic' : 'font-heading'} mt-3 text-3xl font-bold tracking-[-0.04em]`}>{location.city[lang]}</h2>
              <p className="mt-3 text-sm leading-7 text-white/72">{location.intro[lang]}</p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {location.localNeeds[lang].slice(0, 4).map((need) => <div key={need} className="rounded-2xl border border-primary-900/8 bg-[#f8f6f0] px-4 py-3 text-xs font-semibold leading-5 text-primary-900/76"><span className="me-2 text-accent-700">✓</span>{need}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[26px] border border-white/80 bg-white/78 p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
            <h2 className="font-heading text-2xl font-bold tracking-[-0.035em] text-primary-900">{t.localTitle}</h2>
            <div className="mt-5 grid gap-3">
              {location.localNeeds[lang].map((item) => <div key={item} className="rounded-2xl border border-accent-500/14 bg-[#fbfaf7] px-4 py-3 text-sm font-semibold leading-6 text-primary-900/75"><span className="me-2 text-accent-700">✓</span>{item}</div>)}
            </div>
          </article>
          <article className="rounded-[26px] border border-white/80 bg-white/78 p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
            <h2 className="font-heading text-2xl font-bold tracking-[-0.035em] text-primary-900">{t.servicesTitle}</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {location.popularServices.map((service) => <Link key={service.slug} href={`/${locale}/services/${service.slug}`} className="rounded-full border border-accent-500/22 bg-[#fbfaf7] px-4 py-2 text-xs font-bold text-primary-900 transition hover:-translate-y-0.5 hover:bg-white">{service.title[lang]}</Link>)}
            </div>
            <h3 className="mt-7 font-heading text-xl font-bold tracking-[-0.025em] text-primary-900">{t.areasTitle}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {location.neighbourhoods[lang].map((area) => <span key={area} className="rounded-full border border-primary-900/8 bg-white px-3 py-1.5 text-xs font-semibold text-primary-900/66">{area}</span>)}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-6 py-14 lg:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-[2rem] font-bold tracking-[-0.045em] text-primary-900 sm:text-[2.7rem]">{t.processTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {t.process.map((step, index) => <div key={step} className="rounded-[22px] border border-white/80 bg-white/80 p-5 shadow-[0_18px_50px_rgba(7,22,74,0.065)]"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-900 text-xs font-bold text-white">{index + 1}</div><p className="mt-4 text-sm font-semibold leading-6 text-primary-900/72">{step}</p></div>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[26px] border border-white/80 bg-white/82 p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
            <h2 className="font-heading text-2xl font-bold tracking-[-0.035em] text-primary-900">{t.faqTitle}</h2>
            <div className="mt-5 grid gap-3">
              {location.faqs.map((faq) => <details key={faq.question.en} className="rounded-2xl border border-primary-900/8 bg-white px-4 py-3"><summary className="cursor-pointer text-sm font-bold text-primary-900">{faq.question[lang]}</summary><p className="mt-3 text-xs leading-6 text-primary-900/68">{faq.answer[lang]}</p></details>)}
            </div>
          </div>
          <div className="rounded-[26px] bg-primary-900 p-7 text-white shadow-[0_24px_70px_rgba(7,22,74,0.18)]">
            <h2 className="font-heading text-2xl font-bold">{t.otherTitle}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {otherLocations.map((item) => <Link key={item.slug} href={`/${locale}/${item.slug}`} className="rounded-2xl border border-white/12 bg-white/8 p-4 transition hover:bg-white/14"><span className="text-xs font-bold uppercase tracking-[0.14em] text-accent-300">{item.city[lang]}</span><p className="mt-2 text-sm font-semibold text-white/82">{item.heroTitle[lang]}</p></Link>)}
            </div>
            <div className="mt-7 rounded-[22px] bg-white/8 p-5">
              <h3 className="font-heading text-xl font-bold">{t.ctaTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">{t.ctaText}</p>
              <Link href={`/${locale}/contact`} className="mt-5 inline-flex rounded-full bg-accent-500 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-900 transition hover:bg-accent-300">{t.cta}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
