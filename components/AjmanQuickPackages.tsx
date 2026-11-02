import Link from 'next/link';
import { managedPackages } from '@/lib/package-content';

const shortIds = new Set(['half-day', 'daily', 'weekly']);
const monthlyIds = new Set(['monthly', 'six-month', 'yearly']);

function PriceRows({ locale, ids }: { locale: 'en' | 'ar'; ids: Set<string> }) {
  const plans = managedPackages.filter((plan) => ids.has(plan.id));
  return (
    <ul className="mt-4 space-y-3">
      {plans.map((plan) => (
        <li key={plan.id} className="flex items-start justify-between gap-4 border-b border-primary-900/10 pb-3 last:border-b-0 last:pb-0">
          <span className="text-sm font-semibold text-primary-900">{plan.name[locale]}</span>
          <span className="text-end">
            <bdi dir={locale === 'ar' ? 'rtl' : 'ltr'} className="block text-sm font-bold text-primary-900">{plan.price[locale]}</bdi>
            <span className="block text-xs leading-5 text-primary-900/70">{plan.period[locale]}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function AjmanQuickPackages({ locale }: { locale: string }) {
  const lang = locale === 'ar' ? 'ar' : 'en';
  const isArabic = lang === 'ar';

  return (
    <section data-content="ajman-quick-packages" aria-labelledby="ajman-quick-packages-heading" className="bg-[#f7f4ee] px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wide text-accent-700">{isArabic ? 'خيارات الخدمة والأسعار' : 'Service options and prices'}</p>
          <h2 id="ajman-quick-packages-heading" className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-2 text-2xl font-bold leading-tight text-primary-900`}>
            {isArabic ? 'اختر ترتيب الخدمة المناسب في عجمان' : 'Compare home-support options in Ajman'}
          </h2>
          <p className="mt-3 text-sm leading-7 text-primary-900/75">
            {isArabic
              ? 'تختلف الأسعار وطريقة الخدمة حسب الترتيب المختار. أكد المهام والتوفر والنطاق المكتوب قبل التأكيد.'
              : 'Prices and service arrangements depend on the option selected. Confirm duties, availability and the written scope before confirming.'}
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <article className="rounded-2xl border border-primary-900/10 bg-white p-5 shadow-sm">
            <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-lg font-bold text-primary-900`}>
              {isArabic ? 'زيارات قصيرة' : 'Short visits'}
            </h3>
            <p className="mt-2 text-sm leading-6 text-primary-900/75">
              {isArabic ? 'خدمة جزئية لمدة محددة؛ اتفق على المهام وموعد الزيارة.' : 'Part-time support for a defined period; agree the duties and visit time.'}
            </p>
            <PriceRows locale={lang} ids={shortIds} />
            <Link href={`/${locale}/services/part-time-maid/`} className="mt-4 inline-flex font-semibold text-primary-900 underline decoration-accent-500 underline-offset-4">
              {isArabic ? 'تفاصيل الخدمة الجزئية' : 'Part-time service details'}
            </Link>
          </article>

          <article className="rounded-2xl border border-primary-900/10 bg-white p-5 shadow-sm">
            <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-lg font-bold text-primary-900`}>
              {isArabic ? 'خدمة شهرية مُدارة' : 'Managed monthly service'}
            </h3>
            <p className="mt-2 text-sm leading-6 text-primary-900/75">
              {isArabic ? 'باقات شهرية مع توضيح مدة الالتزام والسعر الشهري.' : 'Monthly support with the commitment period and monthly rate stated clearly.'}
            </p>
            <PriceRows locale={lang} ids={monthlyIds} />
            <Link href={`/${locale}/services/monthly-maid-contract/`} className="mt-4 inline-flex font-semibold text-primary-900 underline decoration-accent-500 underline-offset-4">
              {isArabic ? 'تفاصيل الخدمة الشهرية' : 'Monthly service details'}
            </Link>
          </article>

          <article className="rounded-2xl border border-primary-900/10 bg-white p-5 shadow-sm">
            <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-lg font-bold text-primary-900`}>
              {isArabic ? 'استقدام بعقد لمرة واحدة' : 'One-time recruitment'}
            </h3>
            <p className="mt-2 text-sm leading-7 text-primary-900/75">
              {isArabic
                ? 'تختلف رسوم العقد المنشورة حسب الجنسية والدور. تأشيرة العمل غير مشمولة؛ اطلب عرضاً مكتوباً لتأكيد الرسوم والمبلغ النهائي.'
                : 'Published contract fees vary by nationality and role. A work visa is not included; request a written quote to confirm applicable charges and the final amount.'}
            </p>
            <Link href={`/${locale}/pricing/#nationality-contract-prices`} className="mt-4 inline-flex font-semibold text-primary-900 underline decoration-accent-500 underline-offset-4">
              {isArabic ? 'عرض الرسوم حسب الجنسية' : 'View fees by nationality'}
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
