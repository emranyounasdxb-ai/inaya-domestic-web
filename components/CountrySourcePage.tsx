import Image from 'next/image';
import Link from 'next/link';
import { countrySourcePages, type Lang } from '@/lib/country-source-pages';

const copy = {
  en: {
    badge: 'Domestic Worker Source Countries',
    title: 'Countries We Source Domestic Workers From in UAE',
    lead: 'Explore country options with INAYA through a clear, respectful and profile-first consultation process for UAE families.',
    introTitle: 'A better way to compare source countries',
    intro: 'Country preference can help start the search, but the right decision should be based on the individual profile, experience, documents, communication, availability and duties required at home.',
    cardsTitle: 'Country profile cards',
    processTitle: 'How INAYA guides the selection',
    steps: ['Home and family requirement review', 'Preferred communication and duties discussion', 'Available country options explained', 'Profile and document guidance', 'Contact and next-step support'],
    ctaTitle: 'Need help choosing the right profile?',
    ctaText: 'Contact INAYA today for a guided country and profile consultation.',
    book: 'Book Consultation',
    contact: 'Contact INAYA',
    learn: 'View country guide'
  },
  ar: {
    badge: 'الدول التي نوفر منها العمالة المنزلية',
    title: 'الدول التي نوفر منها العمالة المنزلية في الإمارات',
    lead: 'استكشف خيارات الدول مع عناية من خلال استشارة واضحة ومحترمة تعتمد على الملف الفردي أولاً للأسر في الإمارات.',
    introTitle: 'طريقة أفضل لمقارنة دول المصدر',
    intro: 'تفضيل الدولة قد يساعد في بداية البحث، لكن القرار الصحيح يجب أن يعتمد على الملف الفردي والخبرة والمستندات والتواصل والتوفر والمهام المطلوبة في المنزل.',
    cardsTitle: 'بطاقات الدول والملفات',
    processTitle: 'كيف ترشدك عناية في الاختيار؟',
    steps: ['مراجعة احتياج المنزل والأسرة', 'مناقشة التواصل والمهام المطلوبة', 'شرح خيارات الدول المتاحة', 'إرشاد الملفات والمستندات', 'التواصل ودعم الخطوات التالية'],
    ctaTitle: 'هل تحتاج مساعدة في اختيار الملف المناسب؟',
    ctaText: 'تواصل مع عناية اليوم للحصول على استشارة موجهة للدولة والملف المناسب.',
    book: 'احجز استشارة',
    contact: 'تواصل مع عناية',
    learn: 'عرض دليل الدولة'
  }
};

export default function CountrySourcePage({ locale }: { locale: string }) {
  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const t = copy[lang];

  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-primary-900">
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-accent-500/25 bg-white/80 px-4 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.20em] text-accent-700">{t.badge}</span>
            <h1 className={`${lang === 'ar' ? 'font-arabic leading-[1.25]' : 'font-heading leading-[1.05]'} mt-5 text-[2.25rem] font-bold tracking-[-0.055em] sm:text-[3.45rem]`}>{t.title}</h1>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-primary-900/72">{t.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/${locale}/booking?service=countries-we-source-from`} className="rounded-full bg-primary-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">{t.book}</Link>
              <Link href={`/${locale}/contact`} className="rounded-full border border-accent-500/30 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em]">{t.contact}</Link>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/80 bg-white/70 p-6 shadow-[0_22px_60px_rgba(7,22,74,0.08)]">
            <h2 className="font-heading text-2xl font-bold">{t.introTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-primary-900/70">{t.intro}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold tracking-[-0.04em]">{t.cardsTitle}</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {countrySourcePages.map((country) => (
              <Link key={country.slug} href={`/${locale}/maid-source-countries/${country.slug}`} className="group rounded-[24px] border border-white/80 bg-white/80 p-5 shadow-[0_18px_48px_rgba(7,22,74,0.06)] transition hover:-translate-y-1 hover:border-accent-500/28 hover:shadow-[0_24px_60px_rgba(7,22,74,0.10)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-16 overflow-hidden rounded-2xl bg-white p-1 shadow-inner">
                    <Image src={`https://flagcdn.com/w80/${country.code}.png`} alt={`${country.country[lang]} flag`} width={80} height={48} className="h-full w-full rounded-xl object-cover" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold">{country.country[lang]}</h3>
                    <p className="mt-1 text-xs font-semibold text-primary-900/75">{country.workerLabel[lang]}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-primary-900/70">{country.lead[lang]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {country.bestFor[lang].slice(0, 3).map((point) => <span key={point} className="rounded-full border border-accent-500/20 bg-accent-50/60 px-3 py-1 text-[0.68rem] font-bold text-primary-900/75">{point}</span>)}
                </div>
                <span className="mt-5 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-accent-700 transition group-hover:translate-x-1">{t.learn} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-white/80 bg-white/75 p-7 shadow-[0_18px_48px_rgba(7,22,74,0.06)]">
          <h2 className="text-center font-heading text-3xl font-bold tracking-[-0.04em]">{t.processTitle}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {t.steps.map((step, index) => <div key={step} className="rounded-2xl bg-[#fbfaf7] p-4 text-center"><div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-xs font-bold text-white">{index + 1}</div><p className="text-xs font-semibold leading-5 text-primary-900/75">{step}</p></div>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-white/80 bg-white/80 p-7 text-center shadow-[0_18px_48px_rgba(7,22,74,0.06)]">
          <h2 className="font-heading text-2xl font-bold tracking-[-0.04em]">{t.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-primary-900/70">{t.ctaText}</p>
          <Link href={`/${locale}/contact`} className="mt-6 inline-flex rounded-full bg-primary-900 px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">{t.contact}</Link>
        </div>
      </section>
    </main>
  );
}
