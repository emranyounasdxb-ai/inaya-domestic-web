import Link from 'next/link';
import { getTrustSupportPage, type Lang } from '@/lib/trust-support-pages';

export default function TrustSupportPage({ locale, slug }: { locale: string; slug: string }) {
  const page = getTrustSupportPage(slug);
  if (!page) return null;
  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const contactLabel = lang === 'ar' ? 'تواصل مع عناية' : 'Contact INAYA';

  return (
    <main className="bg-[#fbfaf7] px-6 py-16 text-primary-900 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{page.badge[lang]}</p>
        <h1 className={`${lang === 'ar' ? 'font-arabic leading-[1.25]' : 'font-heading leading-[1.05]'} mt-4 text-[2.35rem] font-bold tracking-[-0.055em] sm:text-[3.5rem]`}>{page.title[lang]}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-primary-900/72 sm:text-base">{page.lead[lang]}</p>
        <Link href={`/${locale}/contact`} className="mt-7 inline-flex rounded-full bg-primary-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">{contactLabel}</Link>
        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          {page.sections.map((section) => (
            <article key={section.title.en} className="rounded-[26px] border border-white/80 bg-white/78 p-6 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
              <h2 className={`${lang === 'ar' ? 'font-arabic leading-[1.35]' : 'font-heading leading-tight'} text-2xl font-bold text-primary-900`}>{section.title[lang]}</h2>
              <p className="mt-4 text-sm leading-7 text-primary-900/70">{section.body[lang]}</p>
              <div className="mt-5 grid gap-3">
                {section.points[lang].map((point) => <div key={point} className="rounded-2xl bg-[#f8f6f0] px-4 py-3 text-xs font-semibold leading-5 text-primary-900/72">✓ {point}</div>)}
              </div>
            </article>
          ))}
        </section>
        <section className="mt-10 rounded-[26px] border border-white/80 bg-white/82 p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
          <h2 className="font-heading text-2xl font-bold text-primary-900">{lang === 'ar' ? 'أسئلة شائعة' : 'Frequently asked questions'}</h2>
          <div className="mt-5 grid gap-3">
            {page.faqs.map((faq) => <details key={faq.question.en} className="rounded-2xl border border-primary-900/8 bg-white px-4 py-3"><summary className="cursor-pointer text-sm font-bold text-primary-900">{faq.question[lang]}</summary><p className="mt-3 text-xs leading-6 text-primary-900/68">{faq.answer[lang]}</p></details>)}
          </div>
        </section>
      </div>
    </main>
  );
}
