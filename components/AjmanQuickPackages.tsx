import Link from 'next/link';
import { managedPackages } from '@/lib/package-content';

const featuredIds = new Set(['half-day', 'daily', 'monthly', 'six-month', 'yearly']);

export default function AjmanQuickPackages({ locale }: { locale: string }) {
  const isArabic = locale === 'ar';
  const lang = isArabic ? 'ar' : 'en';
  const plans = managedPackages.filter((plan) => featuredIds.has(plan.id));

  return (
    <section data-content="ajman-quick-packages" aria-labelledby="ajman-quick-packages-heading" className="bg-[#f7f4ee] px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wide text-accent-700">{isArabic ? 'أسعار الباقات المنشورة' : 'Published package prices'}</p>
          <h2 id="ajman-quick-packages-heading" className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-2 text-2xl font-bold leading-tight text-primary-900`}>
            {isArabic ? 'قارن باقات خدمات الخادمات في عجمان' : 'Compare maid service packages in Ajman'}
          </h2>
          <p className="mt-3 text-sm leading-7 text-primary-900/75">
            {isArabic
              ? 'السعر المنشور نفسه للخادمة المقيمة وغير المقيمة. باقة 3,000 درهم سعر شهري مع التزام 12 شهراً، وليست إجمالي السنة.'
              : 'The same published prices apply to live-in and live-out arrangements. AED 3,000 is a monthly price with a 12-month commitment, not the total for the year.'}
          </p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {plans.map((plan) => <article key={plan.id} className="rounded-2xl border border-primary-900/10 bg-white p-5 shadow-sm">
            <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-sm font-bold text-primary-900`}>{plan.name[lang]}</h3>
            <p className="mt-3 text-2xl font-bold leading-tight text-primary-900"><bdi dir={isArabic ? 'rtl' : 'ltr'}>{plan.price[lang]}</bdi></p>
            <p className="mt-2 text-xs font-semibold leading-5 text-accent-700">{plan.period[lang]}</p>
          </article>)}
        </div>
        <p className="mt-5 text-sm leading-7 text-primary-900/75">
          {isArabic ? 'أكد المهام والجدول والتوفر والنطاق المكتوب قبل الحجز. ' : 'Confirm duties, schedule, availability and the written scope before booking. '}
          <Link href={`/${locale}/pricing/`} className="font-semibold underline decoration-accent-500 underline-offset-4">{isArabic ? 'راجع تفاصيل الباقات' : 'See package details'}</Link>
        </p>
      </div>
    </section>
  );
}
