import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { countrySourcePages, getCountrySourcePage, type Lang } from '@/lib/country-source-pages';

export function generateStaticParams() {
  return countrySourcePages.map((country) => ({ slug: country.slug }));
}

export function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }): Metadata {
  const country = getCountrySourcePage(slug);
  if (!country) return {};
  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const canonical = `/${locale}/maid-source-countries/${slug}`;

  return {
    title: country.metaTitle[lang],
    description: country.metaDescription[lang],
    alternates: {
      canonical,
      languages: {
        en: `/en/maid-source-countries/${slug}`,
        ar: `/ar/maid-source-countries/${slug}`
      }
    },
    openGraph: {
      title: country.metaTitle[lang],
      description: country.metaDescription[lang],
      type: 'website',
      locale: lang === 'ar' ? 'ar_AE' : 'en_AE',
      url: canonical
    },
    twitter: {
      card: 'summary_large_image',
      title: country.metaTitle[lang],
      description: country.metaDescription[lang]
    }
  };
}

export default function MaidSourceCountryPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  const country = getCountrySourcePage(slug);
  if (!country) notFound();

  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const otherCountries = countrySourcePages.filter((item) => item.slug !== country.slug).slice(0, 6);
  const t = lang === 'ar'
    ? {
        badge: 'دليل دولة المصدر',
        sourceLabel: 'دولة المصدر',
        profileFirst: 'اختيار يعتمد على الملف الفردي',
        profileText: 'الجنسية تساعد في بداية البحث، لكن القرار الصحيح يعتمد على الخبرة والمهام والمستندات وملاءمة الأسرة.',
        strengthsTitle: 'لماذا تفكر الأسر في هذه الدولة؟',
        bestForTitle: 'مناسبة غالباً لـ',
        rolesTitle: 'الخدمات المرتبطة',
        processTitle: 'كيف تساعدك عناية في الاختيار؟',
        process: ['مراجعة احتياج الأسرة والمنطقة', 'مناقشة تفضيل الدولة واللغة والمهام', 'فحص التوفر والملفات المناسبة', 'شرح المستندات والخطوات التالية'],
        faqTitle: 'أسئلة شائعة',
        relatedTitle: 'دول أخرى يمكن مقارنتها',
        ctaTitle: 'هل تريد مقارنة الملفات المتاحة؟',
        ctaText: 'شارك احتياج الأسرة وستساعدك عناية على فهم الخيارات المناسبة حسب التوفر والملف.',
        cta: 'تواصل مع عناية',
        back: 'العودة إلى دول المصدر'
      }
    : {
        badge: 'Source Country Guide',
        sourceLabel: 'Source Country',
        profileFirst: 'Profile-first selection',
        profileText: 'Nationality can start the search, but the right decision depends on experience, duties, documents and family suitability.',
        strengthsTitle: 'Why families consider this country',
        bestForTitle: 'Often suitable for',
        rolesTitle: 'Related services',
        processTitle: 'How INAYA guides your selection',
        process: ['Review the family requirement and area', 'Discuss country, language and duty preferences', 'Check availability and suitable profiles', 'Explain documents and next steps'],
        faqTitle: 'Frequently asked questions',
        relatedTitle: 'Other countries to compare',
        ctaTitle: 'Want to compare available profiles?',
        ctaText: 'Share your family requirement and INAYA will help you understand suitable options based on availability and profile fit.',
        cta: 'Contact INAYA',
        back: 'Back to Source Countries'
      };

  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-primary-900">
      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(191,164,106,0.18),transparent_28rem),radial-gradient(circle_at_84%_30%,rgba(7,22,74,0.08),transparent_30rem)]" />
        <div className="relative mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <Link href={`/${locale}/services/countries-we-source-from`} className="inline-flex rounded-full border border-accent-500/25 bg-white/78 px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.22em] text-accent-700 shadow-sm">
              {t.back}
            </Link>
            <p className="mt-7 text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{t.badge}</p>
            <h1 className={`${lang === 'ar' ? 'font-arabic leading-[1.25]' : 'font-heading leading-[1.02]'} mt-4 max-w-4xl text-[2.35rem] font-bold tracking-[-0.055em] text-primary-900 sm:text-[3.6rem]`}>
              {country.heroTitle[lang]}
            </h1>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-8 text-primary-900/72">{country.lead[lang]}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/${locale}/contact`} className="rounded-full bg-primary-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_45px_rgba(7,22,74,0.16)]">{t.cta}</Link>
              <Link href={`/${locale}/services/recruitment`} className="rounded-full border border-accent-500/28 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-900">Recruitment</Link>
            </div>
          </div>
          <div className="rounded-[30px] border border-white/80 bg-white/78 p-6 shadow-[0_24px_70px_rgba(7,22,74,0.08)] ring-1 ring-accent-500/10">
            <div className="flex items-center gap-4">
              <span className="flex h-20 w-28 overflow-hidden rounded-[22px] bg-white p-1 shadow-inner">
                <img src={`https://flagcdn.com/w160/${country.code}.png`} alt={`${country.country[lang]} flag`} className="h-full w-full rounded-[18px] object-cover" />
              </span>
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-accent-700">{t.sourceLabel}</p>
                <h2 className="mt-1 font-heading text-2xl font-bold text-primary-900">{country.country[lang]}</h2>
                <p className="mt-1 text-sm font-semibold text-primary-900/62">{country.workerLabel[lang]}</p>
              </div>
            </div>
            <div className="mt-6 rounded-[22px] bg-[#f8f6f0] p-5">
              <h3 className="font-heading text-lg font-bold text-primary-900">{t.profileFirst}</h3>
              <p className="mt-3 text-sm leading-7 text-primary-900/68">{t.profileText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[26px] border border-white/80 bg-white/78 p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
            <h2 className="font-heading text-2xl font-bold tracking-[-0.035em] text-primary-900">{country.workerLabel[lang]}</h2>
            <p className="mt-4 text-sm leading-7 text-primary-900/70">{country.intro[lang]}</p>
          </article>
          <article className="rounded-[26px] border border-white/80 bg-white/78 p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
            <h2 className="font-heading text-2xl font-bold tracking-[-0.035em] text-primary-900">{t.strengthsTitle}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {country.strengths[lang].map((item) => <div key={item} className="rounded-2xl border border-accent-500/14 bg-[#fbfaf7] px-4 py-3 text-sm font-semibold leading-6 text-primary-900/75"><span className="me-2 text-accent-700">✓</span>{item}</div>)}
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-2">
          <div className="rounded-[26px] border border-white/80 bg-white/78 p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
            <h2 className="font-heading text-2xl font-bold tracking-[-0.035em] text-primary-900">{t.bestForTitle}</h2>
            <div className="mt-5 grid gap-3">
              {country.bestFor[lang].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#f8f6f0] px-4 py-3 text-sm font-semibold text-primary-900/76"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-primary-900">✓</span>{item}</div>)}
            </div>
          </div>
          <div className="rounded-[26px] border border-white/80 bg-white/78 p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
            <h2 className="font-heading text-2xl font-bold tracking-[-0.035em] text-primary-900">{t.rolesTitle}</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {country.roles.map((role) => <Link key={role.slug} href={`/${locale}/services/${role.slug}`} className="rounded-full border border-accent-500/22 bg-[#fbfaf7] px-4 py-2 text-xs font-bold text-primary-900 transition hover:-translate-y-0.5 hover:bg-white">{role.title[lang]}</Link>)}
            </div>
          </div>
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
              {country.faqs.map((faq) => <details key={faq.question.en} className="rounded-2xl border border-primary-900/8 bg-white px-4 py-3"><summary className="cursor-pointer text-sm font-bold text-primary-900">{faq.question[lang]}</summary><p className="mt-3 text-xs leading-6 text-primary-900/68">{faq.answer[lang]}</p></details>)}
            </div>
          </div>
          <div className="rounded-[26px] bg-primary-900 p-7 text-white shadow-[0_24px_70px_rgba(7,22,74,0.18)]">
            <h2 className="font-heading text-2xl font-bold">{t.relatedTitle}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {otherCountries.map((item) => <Link key={item.slug} href={`/${locale}/maid-source-countries/${item.slug}`} className="rounded-2xl border border-white/12 bg-white/8 p-4 transition hover:bg-white/14"><span className="text-xs font-bold uppercase tracking-[0.14em] text-accent-300">{item.country[lang]}</span><p className="mt-2 text-sm font-semibold text-white/82">{item.workerLabel[lang]}</p></Link>)}
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
