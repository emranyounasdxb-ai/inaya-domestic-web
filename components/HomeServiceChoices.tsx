import Link from 'next/link';
import { managedPackages } from '@/lib/package-content';
import { packageEnquiryHref } from '@/lib/package-enquiry';

export default function HomeServiceChoices({ locale }: { locale: string }) {
  const ar = locale === 'ar';
  const lang = ar ? 'ar' : 'en';
  const rows = ar ? [
    ['part-time-maid', 'تنظيف بدوام جزئي', 'حدد الغرف وأولويات التنظيف والغسيل والكي ضمن زيارة متفق عليها.'],
    ['monthly-maid-contract', 'خدمة خادمة شهرية', 'قارن فترة 30 يوماً والالتزام لمدة 6 أو 12 شهراً ونطاق الاتفاق الشهري.'],
    ['nanny', 'خدمة مربية', 'ناقش أعمار الأطفال والروتين وخبرة المرشحة الفردية وجدول الرعاية.'],
    ['maid-visa', 'طباعة معاملات التأشيرة', 'حدد طلب العمالة المنزلية أو التجديد أو الإلغاء أو متابعة الحالة.']
  ] : [
    ['part-time-maid', 'Part-time cleaning', 'Plan rooms, cleaning priorities, laundry and ironing within an agreed visit.'],
    ['monthly-maid-contract', 'Monthly maid service', 'Compare 30 days, six-month and twelve-month commitments and the monthly agreement scope.'],
    ['nanny', 'Nanny service', 'Discuss children’s ages, routines, individual experience and the childcare schedule.'],
    ['maid-visa', 'Visa typing', 'Identify the domestic-worker application, renewal, cancellation or status enquiry.']
  ];
  return <section aria-labelledby="home-service-choices" className="bg-[#fffdf8] px-6 py-12 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <h2 id="home-service-choices" className={`${ar ? 'font-arabic' : 'font-heading'} text-2xl font-bold text-primary-900`}>{ar ? 'ابدأ بالخدمة التي تحتاجها' : 'Start with the service you need'}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{rows.map(([slug, title, text]) => <Link key={slug} href={`/${locale}/services/${slug}/`} className="glass-panel rounded-[24px] p-5 text-primary-900 transition hover:border-accent-500 focus-visible:outline-2 focus-visible:outline-accent-700"><h3 className="text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-primary-900/80">{text}</p><span className="mt-4 block text-sm font-semibold underline underline-offset-4">{ar ? 'تفاصيل الخدمة' : 'Service details'}</span></Link>)}</div>
      <details className="mt-6 rounded-2xl border border-accent-500/25 bg-white p-5"><summary className="cursor-pointer font-bold text-primary-900">{ar ? 'الباقات الست: المدة والسعر والالتزام' : 'Six packages: duration, price and commitment'}</summary><ul className="mt-4 grid gap-3 text-sm leading-7 sm:grid-cols-2 lg:grid-cols-3">{managedPackages.map(plan => <li key={plan.id}><Link href={packageEnquiryHref(locale, plan.id)} className="font-semibold text-primary-900 underline decoration-accent-500 underline-offset-4">{plan.name[lang]}: {plan.price[lang]} — {plan.period[lang]}</Link></li>)}</ul><p className="mt-4 text-sm leading-7 text-primary-900/80">{ar ? 'السعر المنشور واحد للمقيمة وغير المقيمة. أسعار 6 و12 شهراً شهرية وليست إجمالي الالتزام؛ وتسجل المهام والجدول والراحة والمسؤوليات في الاتفاق.' : 'Published live-in and live-out prices are the same. Six- and twelve-month prices are monthly amounts, not commitment totals; duties, schedule, rest and responsibilities are recorded in the agreement.'}</p><Link href={`/${locale}/pricing/`} className="mt-3 inline-block text-sm font-bold underline underline-offset-4">{ar ? 'مقارنة الباقات والمزايا والشروط' : 'Compare packages, benefits and terms'}</Link></details>
    </div>
  </section>;
}
