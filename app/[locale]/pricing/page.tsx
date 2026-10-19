import Link from 'next/link';
import { managedPackages, packageArrangements, packageQuestions, packageSections } from '@/lib/package-content';
import PageBreadcrumbs from '@/components/PageBreadcrumbs';

function CheckIcon({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === 'ar';
  const lang = isArabic ? 'ar' : 'en';
  const heading = isArabic ? 'font-arabic' : 'font-heading';
  const monthlyBenefits = isArabic ? [
    ['راتب العاملة', 'الراتب المتفق عليه وإدارة سداده ضمن الخدمة الشهرية المدارة.'],
    ['الرسوم الحكومية', 'الرسوم والإجراءات المنطبقة ضمن اتفاق الخدمة الشهرية.'],
    ['التأمين الطبي', 'قسط التأمين المنطبق؛ تتبع التغطية والاستثناءات وثيقة التأمين الصادرة.'],
    ['تذكرة العودة', 'وفق الاتفاق الشهري المنطبق والتزامات التوظيف.'],
    ['مكافأة نهاية الخدمة', 'وفق الاتفاق الشهري المنطبق وحقوق العاملة الوظيفية.']
  ] : [
    ['Worker’s salary', 'The agreed salary and its administration within the managed monthly service.'],
    ['Government fees', 'Applicable fees and processing within the monthly service agreement.'],
    ['Medical insurance', 'The applicable premium; coverage and exclusions follow the issued insurance policy.'],
    ['Return ticket', 'Under the applicable monthly agreement and employment obligations.'],
    ['End-of-service benefits', 'Under the applicable monthly agreement and the worker’s employment entitlements.']
  ];
  const responsibilityRows = isArabic ? [
    ['السكن والطعام', 'تحدد مسؤوليات الإقامة والطعام في الاتفاق بحسب الترتيب المختار.'],
    ['النقل', 'تسجل مسؤوليات النقل وترتيبات الوصول في الاتفاق المكتوب.'],
    ['مواد التنظيف والمعدات', 'تحدد مسؤولية توفير المستلزمات وفق نطاق المهام.'],
    ['الجدول والراحة', 'تحدد ساعات العمل والراحة والمهام؛ لا تعني المدة الأسبوعية أو الشهرية العمل المتواصل.'],
    ['الضريبة والمبلغ المستحق', 'يبين تفصيل السعر الضريبة المنطبقة والمبلغ النهائي المستحق قبل التأكيد.']
  ] : [
    ['Accommodation and meals', 'Record the responsibilities for accommodation and meals for the selected arrangement.'],
    ['Transport', 'Record transport responsibilities and arrival arrangements in the written agreement.'],
    ['Cleaning products and equipment', 'Agree who provides the supplies required for the task list.'],
    ['Schedule and rest', 'Agree working hours, rest and duties; a weekly or monthly period does not mean continuous work.'],
    ['Tax and payable amount', 'The price breakdown identifies applicable tax and the final amount before confirmation.']
  ];

  return (
    <div className="overflow-hidden bg-[#fbfaf7] text-primary-900">
      <section className="container-x pb-12 pt-20 sm:pb-16 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-wide text-accent-700">{isArabic ? 'عناية للعمالة المنزلية' : 'INAYA Domestic Workers'}</p>
          <h1 className={`${heading} mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl`}>
            {isArabic ? 'باقات وأسعار العمالة المنزلية' : 'Domestic Worker Packages and Pricing'}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-primary-900/75">
            {isArabic ? 'اختر من ست باقات وفق المدة التي تحتاجها، من زيارة بنصف يوم إلى التزام سنوي. أسعار واضحة، مع الاتفاق على المهام والجدول قبل التأكيد.' : 'Choose from six packages, from a half-day visit to a yearly commitment. Clear published prices, with duties and schedules agreed before confirmation.'}
          </p>
          <p data-content="equal-arrangement-price" className="mx-auto mt-7 inline-flex max-w-full items-center gap-2 rounded-full border border-accent-500/35 bg-white px-5 py-3 text-sm font-bold leading-6 shadow-sm">
            <CheckIcon className="h-5 w-5 shrink-0 text-accent-700" />
            {isArabic ? 'السعر نفسه للخدمة المقيمة وغير المقيمة' : 'Same price for live-in and live-out'}
          </p>
        </div>
      </section>
      <PageBreadcrumbs locale={locale} route="pricing" />

      <section data-content="published-packages" className="container-x pb-20 pt-5 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="sr-only">{isArabic ? 'الباقات الست وأسعارها' : 'Six packages and their prices'}</h2>
          <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {managedPackages.map((plan) => {
              const featured = plan.id === 'monthly';
              return (
                <article key={plan.id} data-package={plan.id} className={`flex min-w-0 flex-col rounded-2xl border p-6 shadow-[0_16px_44px_rgba(7,22,74,0.05)] sm:p-7 ${featured ? 'border-primary-900 bg-primary-900 text-white' : 'border-accent-500/20 bg-white'}`}>
                  <div className="flex min-h-8 flex-wrap items-start justify-between gap-3">
                    <h3 className={`${heading} text-xl font-bold`}>{plan.name[lang]}</h3>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold leading-5 ${featured ? 'bg-white/10 text-accent-200' : 'bg-accent-50 text-primary-900/80'}`}>{plan.duration[lang]}</span>
                  </div>
                  <div className={`mt-6 border-t pt-6 ${featured ? 'border-white/15' : 'border-primary-900/10'}`}>
                    <p data-price="amount" className={`${heading} text-4xl font-bold leading-tight tracking-tight`}><bdi>{plan.price[lang]}</bdi></p>
                    <p data-price="period" className={`mt-2 min-h-6 text-sm font-semibold leading-6 ${featured ? 'text-accent-200' : 'text-accent-700'}`}>{plan.period[lang]}</p>
                  </div>
                  <p className={`mt-5 text-sm leading-7 ${featured ? 'text-white/80' : 'text-primary-900/75'}`}>{plan.description[lang]}</p>
                  <ul className="mb-7 mt-6 space-y-3">
                    {plan.features[lang].map((feature) => <li key={feature} className={`flex items-start gap-2 text-sm leading-6 ${featured ? 'text-white/85' : 'text-primary-900/80'}`}><CheckIcon className={`mt-0.5 h-5 w-5 shrink-0 ${featured ? 'text-accent-300' : 'text-accent-700'}`} /><span>{feature}</span></li>)}
                  </ul>
                  <Link href={`/${locale}/booking/`} className={`mt-auto inline-flex min-h-12 items-center justify-center rounded-full border px-4 py-3 text-center text-sm font-bold transition ${featured ? 'border-accent-300 bg-accent-400 text-primary-900 hover:bg-accent-300' : 'border-primary-900/15 bg-[#f8f7f3] hover:border-accent-500 hover:bg-accent-50'}`}>
                    {isArabic ? 'استفسر عن هذه الباقة' : `Enquire about ${plan.name[lang].toLowerCase()}`}
                  </Link>
                </article>
              );
            })}
          </div>
          <div data-content="package-price-basis" className="mt-7 rounded-2xl border border-accent-500/25 bg-[#f5f2e9] p-5 sm:p-6">
            <p className="text-sm font-bold leading-7">{isArabic ? '3,250 درهماً و3,000 درهم هما سعران شهريان مع الالتزام لمدة 6 أو 12 شهراً، وليسا إجمالي المدة.' : 'AED 3,250 and AED 3,000 are monthly prices with a 6- or 12-month commitment, not totals for the full term.'}</p>
            <p className="mt-2 text-sm leading-7 text-primary-900/75">{isArabic ? 'الأسعار المعروضة أسعار الباقات المحددة. يسجل الاتفاق المكتوب النطاق والجدول والمسؤوليات والضريبة المنطبقة والمبلغ النهائي المستحق. أكد التوفر وموعد البدء مع الفريق.' : 'These are the published prices for the specified packages. The written agreement records scope, schedule, responsibilities, applicable tax and the final payable amount. Confirm availability and the start date with the team.'}</p>
          </div>
        </div>
      </section>

      <section data-content="monthly-package-benefits" className="border-y border-primary-900/10 bg-white py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-wide text-accent-700">{isArabic ? 'ضمن الاتفاق الشهري المنطبق' : 'Within the applicable monthly agreement'}</p>
              <h2 className={`${heading} mt-3 text-3xl font-bold leading-tight`}>{isArabic ? 'المزايا المشمولة في الخدمة الشهرية' : 'Included monthly service benefits'}</h2>
              <p className="mt-5 text-sm leading-8 text-primary-900/75">{packageSections.inclusions.body[lang]}</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {monthlyBenefits.map(([title, description]) => <article key={title} className="rounded-2xl border border-primary-900/10 bg-[#fbfaf7] p-6">
                <CheckIcon className="h-6 w-6 text-accent-700" />
                <h3 className={`${heading} mt-4 text-lg font-bold`}>{title}</h3>
                <p className="mt-2 text-sm leading-7 text-primary-900/75">{description}</p>
              </article>)}
              <article className="rounded-2xl border border-accent-500/25 bg-accent-50 p-6">
                <h3 className={`${heading} text-lg font-bold`}>{isArabic ? 'نطاق واضح لكل ترتيب' : 'A clear scope for each arrangement'}</h3>
                <p className="mt-3 text-sm leading-7 text-primary-900/75">{isArabic ? 'تراجع المهام والخبرة الفردية والتوفر، وتحدد خطة الخدمة مكتوباً. تسري مزايا التوظيف الشهرية وفق الاتفاق الشهري، ولا تنقل تلقائياً إلى الزيارات القصيرة.' : 'Review duties, individual experience and availability, then record the service plan in writing. Monthly employment benefits follow the monthly agreement and do not automatically extend to short visits.'}</p>
                <Link href={`/${locale}/blog/monthly-maid-package-inclusions-checklist/`} className="mt-4 inline-block text-sm font-semibold underline decoration-accent-500 underline-offset-4">{isArabic ? 'راجع دليل الباقة الشهرية' : 'Review the monthly package guide'}</Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section data-content="payment-responsibilities" className="container-x py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className={`${heading} text-3xl font-bold leading-tight`}>{isArabic ? 'السعر واحد، والمسؤوليات مكتوبة' : 'One price, written responsibilities'}</h2>
            <p className="mt-5 text-sm leading-8 text-primary-900/75">{packageArrangements[lang]}</p>
            <dl className="mt-6 divide-y divide-primary-900/10 rounded-2xl border border-primary-900/10 bg-white px-5">
              {responsibilityRows.map(([title, description]) => <div key={title} className="py-5"><dt className="text-sm font-bold">{title}</dt><dd className="mt-2 text-sm leading-7 text-primary-900/75">{description}</dd></div>)}
            </dl>
          </div>
          <div className="space-y-5">
            <h2 className={`${heading} text-3xl font-bold leading-tight`}>{isArabic ? 'شروط الخدمة الشهرية' : 'Monthly service terms'}</h2>
            {[packageSections.payments, packageSections.cancellation, packageSections.replacement, packageSections.followUp].map((section) => <article key={section.title.en} className="rounded-2xl border border-primary-900/10 bg-white p-5 sm:p-6">
              <h3 className={`${heading} text-lg font-bold`}>{section.title[lang]}</h3>
              <p className="mt-3 text-sm leading-7 text-primary-900/75">{section.body[lang]}</p>
            </article>)}
            <p className="text-sm leading-7 text-primary-900/75">{isArabic ? 'تبقى حقوق العاملة وسبل الإنصاف القانونية المنطبقة محفوظة. تراجع شروط الالتزام والسداد والإلغاء في الاتفاق المكتوب.' : 'The worker’s rights and applicable statutory remedies remain protected. Review commitment, payment and cancellation terms in the written agreement.'}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
              <Link href={`/${locale}/refund-policy/`} className="underline decoration-accent-500 underline-offset-4">{isArabic ? 'سياسة الاسترداد والاستبدال' : 'Refund and replacement policy'}</Link>
              <Link href={`/${locale}/support-process/`} className="underline decoration-accent-500 underline-offset-4">{isArabic ? 'الدعم والشكوى' : 'Support and complaints'}</Link>
              <Link href={`/${locale}/blog/domestic-worker-package-pricing-factors/`} className="underline decoration-accent-500 underline-offset-4">{isArabic ? 'دليل أسعار الباقات' : 'Package pricing guide'}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x border-t border-primary-900/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className={`${heading} text-center text-3xl font-bold`}>{isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
          <div className="mt-9 space-y-3">
            {packageQuestions.map(({ question, answer }) => <details key={question.en} className="group rounded-xl border border-primary-900/10 bg-[#fbfaf7] open:border-accent-500/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-bold leading-7"><span>{question[lang]}</span><span className="shrink-0 text-xl text-accent-700 transition group-open:rotate-45" aria-hidden="true">+</span></summary>
              <p className="border-t border-primary-900/10 px-5 pb-5 pt-4 text-sm leading-8 text-primary-900/75">{answer[lang]}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-primary-900 px-6 py-12 text-center text-white sm:px-10">
          <h2 className={`${heading} text-3xl font-bold`}>{isArabic ? 'اختر الباقة المناسبة لمنزلك' : 'Choose the package for your home'}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/80">{isArabic ? 'شارك المدة والموقع والمهام المطلوبة. يراجع الفريق التوفر والنطاق المكتوب قبل تأكيد الخدمة.' : 'Share your required duration, location and duties. The team reviews availability and the written scope before confirming service.'}</p>
          <Link href={`/${locale}/contact/`} className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-accent-400 px-7 py-3 text-sm font-bold text-primary-900 transition hover:bg-accent-300">{isArabic ? 'تواصل مع فريق عناية' : 'Contact the INAYA team'}</Link>
        </div>
      </section>
    </div>
  );
}
