import Link from 'next/link';
import { nationalityContractPrices } from '@/lib/nationality-contract-prices';

type Props = {
  locale: string;
  city?: string;
};

export default function NationalityContractPricingSection({ locale, city }: Props) {
  const isArabic = locale === 'ar';

  return (
    <section data-content="nationality-contract-prices" className="border-y border-primary-900/10 bg-white px-6 py-14 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wide text-accent-700">{isArabic ? 'أسعار عقود معتمدة من وزارة الموارد البشرية والتوطين' : 'MOHRE-approved contract rates'}</p>
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-3xl font-bold leading-tight text-primary-900`}>
            {city
              ? (isArabic ? `رسوم العقد لمرة واحدة حسب الجنسية في ${city}` : `One-time contract fees by nationality in ${city}`)
              : (isArabic ? 'رسوم العقد لمرة واحدة حسب الجنسية' : 'One-time contract fees by nationality')}
          </h2>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">
            {isArabic
              ? 'هذه رسوم عقد استقدام لمرة واحدة وفق الأسعار المعتمدة الحالية. تأشيرة العمل غير مشمولة. اطلب تفصيلاً مكتوباً لتأكيد ضريبة القيمة المضافة وأي رسوم أخرى والمبلغ النهائي قبل التأكيد.'
              : 'These are current MOHRE-approved one-time recruitment contract fees. A visa is not included. Request a written breakdown to confirm VAT, any other charges and the final payable amount before confirming.'}
          </p>
        </div>
        <div className="mt-7 overflow-x-auto rounded-2xl border border-primary-900/10 bg-[#fbfaf7]" tabIndex={0} role="region" aria-label={isArabic ? 'رسوم العقد حسب الجنسية' : 'Contract fees by nationality'}>
          <table className="w-full min-w-[34rem] text-start text-sm leading-7">
            <caption className="p-5 text-start text-lg font-bold">{isArabic ? 'الجنسية والدور ورسوم العقد' : 'Nationality, role and contract fee'}</caption>
            <thead className="bg-primary-900/5">
              <tr>
                {(isArabic ? ['الجنسية', 'الدور', 'رسوم العقد لمرة واحدة'] : ['Nationality', 'Role', 'One-time contract fee']).map((heading) => <th key={heading} scope="col" className="px-5 py-3 text-start">{heading}</th>)}
              </tr>
            </thead>
            <tbody>
              {nationalityContractPrices.map((item) => <tr key={item.nationality.en} className="border-t border-primary-900/10">
                <th scope="row" className="px-5 py-3 text-start font-semibold">{item.nationality[isArabic ? 'ar' : 'en']}</th>
                <td className="px-5 py-3">{item.role[isArabic ? 'ar' : 'en']}</td>
                <td className="px-5 py-3 font-semibold"><bdi dir="ltr">{item.range}</bdi></td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-7 text-primary-900/75">
          {isArabic ? 'قد تختلف الخيارات والتوفر حسب الملف والدور. أكد الجنسية والدور والتكاليف المشمولة والشروط كتابةً مع الفريق.' : 'Options and availability may vary by profile and role. Confirm the nationality, role, included costs and terms in writing with the team.'}
          {' '}<Link href={`/${locale}/contact/`} className="font-semibold underline decoration-accent-500 underline-offset-4">{isArabic ? 'اطلب عرض سعر مكتوباً' : 'Request a written quote'}</Link>
        </p>
      </div>
    </section>
  );
}
