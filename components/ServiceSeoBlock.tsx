import Link from 'next/link';
import { getServiceWithExtras } from '@/lib/service-helpers';
import { serviceContentBriefs } from '@/lib/service-content-briefs';

export default function ServiceSeoBlock({ locale, slug }: { locale: string; slug: string }) {
  const lang = locale === 'ar' ? 'ar' : 'en';
  const brief = serviceContentBriefs[slug];
  if (!brief) return null;
  return <section data-content="service-comparison" className="bg-[#fbfaf7] px-6 py-12 text-primary-900 lg:px-10">
    <div className="mx-auto max-w-6xl rounded-[28px] border border-white/80 bg-white/78 p-7 shadow-[0_24px_70px_rgba(7,22,74,0.07)] sm:p-9">
      <p className="text-[0.66rem] font-bold uppercase tracking-[0.26em] text-accent-700">{lang === 'ar' ? 'دليل الخدمة' : 'Helpful Service Guide'}</p>
      <h2 className="mt-4 font-heading text-2xl font-bold">{lang === 'ar' ? 'قارن الأدوار قبل تحديد طلبك' : 'Compare roles before defining your request'}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {brief.related.map((relatedSlug) => {
          const service = getServiceWithExtras(relatedSlug);
          return service ? <article key={relatedSlug} className="rounded-2xl border border-primary-900/8 p-5">
            <h3 className="font-heading text-lg font-bold"><Link href={`/${locale}/services/${relatedSlug}/`} className="underline decoration-accent-500/50 underline-offset-4">{service.name[lang]}</Link></h3>
            <p className="mt-3 text-sm leading-7 text-primary-900/75">{service.short[lang]}</p>
          </article> : null;
        })}
      </div>
    </div>
  </section>;
}
