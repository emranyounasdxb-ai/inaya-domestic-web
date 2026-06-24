import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getService } from '@/lib/services';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const service = getService(slug);
  if (!service) return {};
  const lang = locale === 'ar' ? 'ar' : 'en';
  return { title: service.name[lang], description: service.short[lang] };
}

function CheckIcon({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default async function ServiceDetailPage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  const service = getService(slug);
  if (!service) notFound();
  const isArabic = locale === 'ar';
  const lang = isArabic ? 'ar' : 'en';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl';
  const copy = {
    badge: isArabic ? 'خدمة عناية للعمالة المنزلية' : 'INAYA domestic service',
    book: isArabic ? 'احجز هذه الخدمة' : 'Book This Service',
    back: isArabic ? 'كل الخدمات' : 'All Services',
    included: isArabic ? 'ما الذي نوضحه لك' : 'What we clarify for you',
    points: isArabic ? ['التوفر حسب الإمارة والمنطقة', 'المدة المناسبة ونوع الخدمة', 'الخطوات والتفاصيل قبل الحجز'] : ['Availability by emirate and area', 'Suitable duration and service type', 'Steps and details before booking']
  };

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_10%_48%,rgba(7,22,74,0.10),transparent_26rem)]" />
        <div className="container-x relative">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div className="text-center lg:text-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:text-sm"><span className="h-2 w-2 rounded-full bg-accent-500" />{copy.badge}</span>
              <h1 className={`mx-auto mt-6 max-w-4xl lg:mx-0 ${headingClass}`}>{service.name[lang]}</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink/75 lg:mx-0 sm:text-lg">{service.description[lang]}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link href={`/${locale}/booking`} className="btn-primary w-full sm:w-auto">{copy.book}</Link>
                <Link href={`/${locale}/services`} className="btn-outline w-full sm:w-auto">{copy.back}</Link>
              </div>
            </div>
            <div className="glass-panel rounded-[28px] p-7 sm:p-9">
              <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-white/75 text-5xl shadow-sm ring-1 ring-primary-700/10">{service.icon}</div>
              <h2 className={`${isArabic ? 'font-arabic text-2xl leading-snug' : 'font-heading text-3xl'} mt-7 font-bold text-primary-900`}>{copy.included}</h2>
              <div className="mt-5 space-y-4">
                {copy.points.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-primary-700/10 bg-white/60 p-4 text-sm leading-6 text-ink/70">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent-600" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
