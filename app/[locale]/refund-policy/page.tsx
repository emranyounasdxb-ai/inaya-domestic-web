import Link from 'next/link';
import { refundPolicyCopy } from '@/lib/refund-policy-content';
import PageBreadcrumbs from "@/components/PageBreadcrumbs";


export default async function RefundPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === 'ar';
  const copy = refundPolicyCopy[isArabic ? 'ar' : 'en'];

  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-primary-900">
      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_80%_28%,rgba(7,22,74,0.09),transparent_30rem)]" />
        <div className="relative mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{copy.badge}</p>
            <h1 className={`${isArabic ? 'font-arabic leading-[1.25]' : 'font-heading leading-[1.02]'} mt-4 max-w-4xl text-[2.35rem] font-bold tracking-[-0.055em] sm:text-[3.6rem]`}>{copy.title}</h1>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-8 text-primary-900/72">{copy.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/${locale}/contact`} className="rounded-full bg-primary-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_45px_rgba(7,22,74,0.16)]">{copy.cta}</Link>
              <Link href={`/${locale}/service-guidelines`} className="rounded-full border border-accent-500/28 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-900">{isArabic ? 'سياسة الخدمة' : 'Service Guidelines'}</Link>
            </div>
          </div>
          <div className="rounded-[30px] border border-white/80 bg-white/78 p-6 shadow-[0_24px_70px_rgba(7,22,74,0.08)] ring-1 ring-accent-500/10">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-accent-700">{copy.updated}</p>
            <div className="mt-5 grid gap-3">
              {copy.highlights.map((item) => <div key={item} className="rounded-2xl border border-primary-900/8 bg-[#f8f6f0] px-4 py-3 text-sm font-semibold leading-6 text-primary-900/76">✓ {item}</div>)}
            </div>
          </div>
        </div>
      </section>
      <PageBreadcrumbs locale={locale} route="refund-policy" />

      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          {copy.sections.map(([title, text, points]) => (
            <article key={title as string} className="rounded-[26px] border border-white/80 bg-white/78 p-6 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
              <h2 className={`${isArabic ? 'font-arabic leading-[1.35]' : 'font-heading leading-tight'} text-2xl font-bold tracking-[-0.035em] text-primary-900`}>{title}</h2>
              <p className="mt-4 text-sm leading-7 text-primary-900/70">{text}</p>
              <div className="mt-5 grid gap-3">
                {(points as string[]).map((point) => <div key={point} className="rounded-2xl bg-[#fbfaf7] px-4 py-3 text-xs font-semibold leading-5 text-primary-900/72">✓ {point}</div>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-content="refund-scenarios" className="px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-2xl font-bold text-primary-900`}>{copy.scenarioTitle}</h2>
          <p className="mt-4 text-sm leading-7 text-primary-900/70">{copy.scenarioIntro}</p>
          <div className="mt-6 overflow-x-auto rounded-[26px] border border-primary-900/10 bg-white">
            <table className="w-full text-start text-sm leading-7">
              <caption className="sr-only">{copy.scenarioTitle}</caption>
              <thead className="bg-[#f8f6f0]"><tr>{copy.scenarioHeaders.map((heading) => <th key={heading} scope="col" className="p-4 text-start align-top">{heading}</th>)}</tr></thead>
              <tbody>{copy.scenarios.map(([scenario, basis, records]) => <tr key={scenario} className="border-t border-primary-900/10"><th scope="row" className="p-4 text-start align-top">{scenario}</th><td className="p-4 align-top">{basis}</td><td className="p-4 align-top">{records}</td></tr>)}</tbody>
            </table>
          </div>
          <h3 className="mt-8 text-lg font-bold">{copy.sourceTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-primary-900/70">{copy.sourceNote}</p>
          <ul className="mt-4 list-inside list-disc space-y-3 text-sm leading-7">
            {copy.sources.map((source) => <li key={source.url}><a href={source.url} className="underline decoration-accent-500/70 underline-offset-4">{source.label}</a></li>)}
          </ul>
          <Link href={`/${locale}/support-process/`} className="mt-5 inline-block text-sm font-semibold underline decoration-accent-500/70 underline-offset-4">{isArabic ? 'وسائل الدعم والتصعيد الرسمي' : 'Support channels and official escalation'}</Link>
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-6 py-14 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[26px] border border-white/80 bg-white/82 p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
            <h2 className="font-heading text-2xl font-bold tracking-[-0.035em] text-primary-900">{isArabic ? 'أسئلة شائعة' : 'Frequently asked questions'}</h2>
            <div className="mt-5 grid gap-3">
              {copy.faqs.map(([question, answer]) => <details key={question} className="rounded-2xl border border-primary-900/8 bg-white px-4 py-3"><summary className="cursor-pointer text-sm font-bold text-primary-900">{question}</summary><p className="mt-3 text-xs leading-6 text-primary-900/75">{answer}</p></details>)}
            </div>
          </div>
          <div className="rounded-[26px] bg-primary-900 p-7 text-white shadow-[0_24px_70px_rgba(7,22,74,0.18)]">
            <h2 className="font-heading text-2xl font-bold">{isArabic ? 'تحتاج مساعدة؟' : 'Need help?'}</h2>
            <p className="mt-4 text-sm leading-7 text-white/85">{copy.ctaText}</p>
            <Link href={`/${locale}/contact`} className="mt-6 inline-flex rounded-full bg-accent-500 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-900 transition hover:bg-accent-300">{copy.cta}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
