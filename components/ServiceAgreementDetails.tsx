import Link from 'next/link';
import { packageSections } from '@/lib/package-content';
import type { Lang } from '@/lib/service-page-copy';

export default function ServiceAgreementDetails({ lang }: { lang: Lang }) {
  return <section className="border-y border-primary-900/10 bg-[#fffdf8] px-5 py-14 sm:px-6 lg:px-10">
    <div className="mx-auto max-w-6xl">
      <h2 className={`${lang === 'ar' ? 'font-arabic' : 'font-heading'} text-2xl font-bold`}>{lang === 'ar' ? 'مسؤوليات عناية ضمن الاتفاق الشهري' : 'INAYA responsibilities within the monthly agreement'}</h2>
      <p className="mt-4 text-sm leading-7 text-primary-900/80">{packageSections.inclusions.body[lang]}</p>
      <ul className="mt-5 grid list-disc gap-x-10 gap-y-3 ps-5 text-sm leading-7 md:grid-cols-2">{packageSections.inclusions.points[lang].map(point => <li key={point}>{point}</li>)}</ul>
      <div className="mt-8 grid gap-4 md:grid-cols-2">{['payments', 'cancellation', 'replacement', 'followUp'].map(key => <details key={key} className="rounded-2xl border border-primary-900/10 bg-white p-5">
        <summary className="cursor-pointer text-base font-bold">{packageSections[key].title[lang]}</summary>
        <p className="mt-4 text-sm leading-7">{packageSections[key].body[lang]}</p>
        <ul className="mt-4 list-disc space-y-2 ps-5 text-sm leading-7">{packageSections[key].points[lang].map(point => <li key={point}>{point}</li>)}</ul>
      </details>)}</div>
      <p className="mt-6 text-sm leading-7"><Link href={`/${lang}/pricing/`} className="font-semibold underline decoration-accent-500 underline-offset-4">{lang === 'ar' ? 'راجع مقارنة الباقات وتفاصيل العرض' : 'Compare packages and quotation details'}</Link> · <Link href={`/${lang}/refund-policy/`} className="font-semibold underline decoration-accent-500 underline-offset-4">{lang === 'ar' ? 'شروط الاسترداد والاستبدال' : 'Refund and replacement terms'}</Link></p>
    </div>
  </section>;
}
