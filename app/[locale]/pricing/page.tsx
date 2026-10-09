import Link from 'next/link';
import PageBreadcrumbs from "@/components/PageBreadcrumbs";

type IconName = 'check' | 'x' | 'shield' | 'file' | 'refresh' | 'star' | 'arrow' | 'message';

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    check: <path {...common} d="m5 12 4 4L19 6" />,
    x: <><path {...common} d="M6 6l12 12" /><path {...common} d="M18 6 6 18" /></>,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    file: <><path {...common} d="M7 3h7l4 4v14H7V3Z" /><path {...common} d="M14 3v5h4" /><path {...common} d="M9.5 13h5M9.5 16h5" /></>,
    refresh: <><path {...common} d="M20 7v5h-5" /><path {...common} d="M4 17v-5h5" /><path {...common} d="M18.5 10A7 7 0 0 0 6.8 6.2L4 9" /><path {...common} d="M5.5 14a7 7 0 0 0 11.7 3.8L20 15" /></>,
    star: <path {...common} d="M12 3l1.5 5.1L19 10l-5.5 1.9L12 17l-1.5-5.1L5 10l5.5-1.9L12 3Z" />,
    arrow: <><path {...common} d="M5 12h14" /><path {...common} d="m13 6 6 6-6 6" /></>,
    message: <path {...common} d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v3.8a3.8 3.8 0 0 1-3.8 3.8H10l-4.5 3.2.9-4A3.8 3.8 0 0 1 5 10.6V6.8Z" />
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

function FeatureValue({ value }: { value: string | boolean }) {
  if (value === true) return <LineIcon name="check" className="mx-auto h-4 w-4 text-accent-700" />;
  if (value === false) return <LineIcon name="x" className="mx-auto h-4 w-4 text-primary-900/70" />;
  return <span>{value}</span>;
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === 'ar';
  const copy = {
    hero: isArabic ? {
      title: 'باقات وأسعار العمالة المنزلية',
      subtitle: 'تبدأ Essential من 1,500 درهم شهرياً وSignature من 2,500 درهم شهرياً، شاملتين التكاليف. أكد المهام وشروط الباقة والعرض النهائي مع عناية قبل الاتفاق.',
      guide: 'اقرأ دليل عوامل تسعير الباقات'
    } : {
      title: 'Domestic Worker Packages and Pricing',
      subtitle: 'Essential starts from AED 1,500/month and Signature from AED 2,500/month, all-inclusive. Confirm the package duties, terms and final quote with INAYA before agreeing.',
      guide: 'Read the package pricing guide'
    },
    assurance: isArabic ? [
      ['باقات شهرية', 'تبدأ Essential من 1,500 درهم شهرياً وSignature من 2,500 درهم شهرياً، شاملتين التكاليف.'],
      ['حدد المهام', 'أكد الخدمة والمهام وساعات العمل قبل اختيار الباقة؛ تفاصيل كل باقة تحتاج إلى تأكيد.'],
      ['عرض مكتوب', 'اطلب نطاق الخدمة والشروط والمبلغ النهائي كتابةً قبل الاتفاق.']
    ] : [
      ['Monthly packages', 'Essential starts from AED 1,500/month and Signature from AED 2,500/month, all-inclusive.'],
      ['Confirm the duties', 'Confirm the service, duties and working hours before choosing a package; individual package details need confirmation.'],
      ['Written quote', 'Request the service scope, terms and final amount in writing before agreeing.']
    ],
    packages: isArabic ? [
      {
        eyebrow: 'أساسي', name: 'Essential', price: 'AED 1,500',
        period: 'يبدأ من · شهرياً · شامل التكاليف',
        desc: 'تبدأ Essential من 1,500 درهم شهرياً، شاملة التكاليف. أكد نوع الخدمة والمهام المشمولة مع عناية.',
        cta: 'ناقش الباقة الأساسية',
        features: ['حدد الخدمة والمهام المطلوبة', 'أكد الجدول وساعات العمل', 'اطلب تفاصيل الباقة وشروطها كتابةً']
      },
      {
        eyebrow: 'مميز', name: 'Signature', price: 'AED 2,500',
        period: 'يبدأ من · شهرياً · شامل التكاليف',
        desc: 'تبدأ Signature من 2,500 درهم شهرياً، شاملة التكاليف. أكد نوع الخدمة والمهام المشمولة مع عناية.',
        cta: 'ناقش الباقة المميزة', featured: true,
        features: ['حدد الخدمة والمهام المطلوبة', 'أكد الجدول وساعات العمل', 'اطلب تفاصيل الباقة وشروطها كتابةً']
      },
      {
        eyebrow: 'عناية بلاك', name: 'INAYA Black', price: 'عرض سعر مخصص',
        period: 'حسب عرض السعر', desc: 'تواصل مع عناية لتأكيد نطاق الخدمة وشروط عرض السعر.',
        cta: 'اطلب عرض سعر', badge: 'INAYA BLACK',
        features: ['أكد نطاق الخدمة قبل الاتفاق', 'اطلب عرض سعر مكتوباً']
      }
    ] : [
      {
        eyebrow: 'Essential', name: 'Essential', price: 'AED 1,500',
        period: 'starting from · per month · all-inclusive',
        desc: 'Essential — Starting from AED 1,500/month, all-inclusive. Confirm the service and agreed duties with INAYA.',
        cta: 'Discuss Essential',
        features: ['Specify the service and duties you need', 'Confirm the schedule and working hours', 'Request written package details and terms']
      },
      {
        eyebrow: 'Signature', name: 'Signature', price: 'AED 2,500',
        period: 'starting from · per month · all-inclusive',
        desc: 'Signature — Starting from AED 2,500/month, all-inclusive. Confirm the service and agreed duties with INAYA.',
        cta: 'Discuss Signature', featured: true,
        features: ['Specify the service and duties you need', 'Confirm the schedule and working hours', 'Request written package details and terms']
      },
      {
        eyebrow: 'Bespoke', name: 'INAYA Black', price: 'Custom Quote',
        period: 'as quoted', desc: 'Contact INAYA to confirm the service scope and quote terms.',
        cta: 'Request a quote', badge: 'INAYA BLACK',
        features: ['Confirm the scope before agreeing', 'Request a written quote']
      }
    ],
    comparisonTitle: isArabic ? 'أساس التسعير المؤكد' : 'Confirmed pricing basis',
    tableHeaders: isArabic ? ['أساس التسعير', 'أساسي', 'مميز', 'عناية بلاك'] : ['Pricing basis', 'Essential', 'Signature', 'INAYA Black'],
    rows: isArabic ? [
      ['السعر المبدئي', '1,500 درهم', '2,500 درهم', 'عرض سعر مخصص'],
      ['فترة التسعير', 'شهرياً', 'شهرياً', 'أكد مع عناية'],
      ['شمول التكاليف', 'شامل التكاليف', 'شامل التكاليف', 'أكد مع عناية'],
      ['تفاصيل المهام والشروط', 'تحتاج إلى تأكيد', 'تحتاج إلى تأكيد', 'تحتاج إلى تأكيد']
    ] : [
      ['Starting price', 'AED 1,500', 'AED 2,500', 'Custom Quote'],
      ['Pricing period', 'Per month', 'Per month', 'Confirm with INAYA'],
      ['Cost basis', 'All-inclusive', 'All-inclusive', 'Confirm with INAYA'],
      ['Individual duties and terms', 'Confirm before agreeing', 'Confirm before agreeing', 'Confirm before agreeing']
    ],
    faqTitle: isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
    faqSubtitle: isArabic ? 'أساس التسعير وما يجب تأكيده قبل الاتفاق.' : 'The pricing basis and what to confirm before agreeing.',
    faqs: isArabic ? [
      ['هل الأسعار شهرية؟', 'نعم. تبدأ Essential من 1,500 درهم شهرياً وSignature من 2,500 درهم شهرياً، شاملتين التكاليف. السعر المبدئي ليس عرضاً نهائياً لحالتك.'],
      ['ما الخدمة والمهام التي تشملها الباقة؟', 'تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها. اطلب النطاق كتابةً قبل الاتفاق.'],
      ['كيف أؤكد التكاليف والشروط؟', 'شارك المهام والإمارة والجدول المطلوب، واطلب عرضاً مكتوباً يوضح المبلغ النهائي والتكاليف المشمولة وأي متطلبات خاصة بالحالة. لا توجد رسوم منفصلة محددة منشورة هنا.'],
      ['هل السعر الشهري هو أجر العاملة أو رسم الاستقدام؟', 'لا يحدد السعر الشهري المنشور أجر العاملة أو رسم استقدام لمرة واحدة. رسوم الباقة مقابل نطاق الخدمة المتفق عليه؛ والأجر مبلغ مستحق للعاملة بموجب عقد العمل، ورسوم الاستقدام مقابل إجراء الاستقدام المنطبق. اطلب توضيح الجهة المسؤولة عن كل دفعة وما إذا كانت مشمولة دون دفع إضافي.'],
      ['ماذا أراجع بشأن التجديد والإلغاء والاستبدال؟', 'راجع تاريخ البدء ومدة العقد وأي حد أدنى للالتزام وآلية التجديد والإشعار والدفع والدفعات المقدمة وشروط الإلغاء والاستبدال كتابةً. الحقوق القانونية المنطبقة مستقلة عن مزايا الباقة الإضافية؛ ولا تفترض انطباق معادلة رد رسوم الاستقدام على كل رسم شهري.'],
      ['ما نطاق INAYA Black؟', 'تبقى INAYA Black بعرض سعر مخصص. تواصل مع عناية لتأكيد نطاق الخدمة وشروطها.']
    ] : [
      ['Are the prices monthly?', 'Yes. Essential starts from AED 1,500/month and Signature from AED 2,500/month, all-inclusive. A starting price is not the final quote for your case.'],
      ['Which service and duties does each package cover?', 'Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package. Request the scope in writing before agreeing.'],
      ['How do I confirm costs and terms?', 'Share the duties, emirate and schedule you need, and request a written quote stating the final amount, included costs and any case-specific requirements. No specific separate fee is published here.'],
      ['Is the monthly price the worker’s wage or a recruitment fee?', 'The published monthly price does not specify the worker’s wage or a one-time recruitment fee. A package charge covers the agreed service scope; a wage is due to the worker under the employment contract, while a recruitment fee concerns the applicable recruitment service. Ask who is responsible for each payment and whether it is covered without an additional charge.'],
      ['What should I review about renewal, cancellation and replacement?', 'Review the start date, contract period, any minimum commitment, renewal, notice, payment timing, deposits and cancellation or replacement conditions in writing. Applicable statutory rights are separate from extra package benefits; do not apply the recruitment-fee refund formula to every monthly charge.'],
      ['What does INAYA Black cover?', 'INAYA Black remains Custom Quote. Contact INAYA to confirm the service scope and terms.']
    ],
    cta: isArabic ? {
      title: 'تحتاج ترتيباً مخصصاً؟',
      text: 'كل منزل له احتياج مختلف. أرسل لنا التفاصيل وسنوضح لك الخيار الأنسب.',
      button: 'تواصل مع الفريق'
    } : {
      title: 'Require a bespoke arrangement?',
      text: 'Share your household requirements with INAYA to confirm the service scope and request a quote.',
      button: 'Consult Our Experts'
    },
    note: isArabic ? 'الأسعار إرشادية وتخضع للتأكيد النهائي حسب الخدمة والتوفر.' : 'Prices are indicative and subject to final confirmation based on service and availability.'
  };

  const assuranceIcons: IconName[] = ['refresh', 'file', 'shield'];
  const costRows = isArabic ? [
    ['رسوم الباقة الشهرية', 'مبلغ مقابل نطاق الخدمة المتفق عليه خلال فترة الفوترة الشهرية.', 'حدد النطاق المشمول وما يقابله المبلغ النهائي؛ والسعر الابتدائي ليس تفاصيل العقد كاملة.'],
    ['أجر العاملة', 'مبلغ مستحق للعاملة وفق عقد العمل.', 'حدد صاحب العمل ومقدار الأجر وطريقة الدفع ومسؤوليته، وما إذا كان يغطيه مبلغ الباقة.'],
    ['رسوم الاستقدام', 'مبلغ مقابل خدمة الاستقدام المنطبقة؛ يختلف عن الأجر والرسوم الشهرية.', 'حدد ما إذا كان الترتيب يتضمن استقداماً وما يغطيه المبلغ ومن يستلمه.'],
    ['تكاليف إجراءات التأشيرة', 'تكاليف خطوات المعالجة المنطبقة على الحالة والجهات المختصة.', 'حدد خطوات المعالجة والرسوم الحكومية وأي رسوم خدمة معروضة، وما هو مشمول وما يعرض منفصلاً.'],
    ['أي تكلفة إضافية مقترحة', 'لا يثبت وصف الباقة بأنها شاملة وجود رسم إضافي أو قيمته.', 'اطلب تفسير النطاق قبل الموافقة؛ لا تفترض شمول بند أو استبعاده دون بيان مكتوب.']
  ] : [
    ['Monthly package charge', 'An amount for the agreed service scope during the monthly billing period.', 'Specify the scope covered and what the final amount pays for; a starting price is not the complete contract.'],
    ['Worker’s wage', 'An amount due to the worker under the employment contract.', 'Identify the employer, wage, payment method and responsibility, and whether the package amount covers it.'],
    ['Recruitment fee', 'An amount for the applicable recruitment service, distinct from wages and monthly charges.', 'Identify whether the arrangement includes recruitment, what the amount covers and who receives it.'],
    ['Visa-processing costs', 'Costs for the processing steps applicable to the case and responsible authorities.', 'Identify processing steps, government fees and any quoted service charges, stating what is covered and what is quoted separately.'],
    ['Any proposed additional cost', 'The all-inclusive package description does not establish an extra charge or its amount.', 'Obtain a scope explanation before agreeing; do not assume inclusion or exclusion without a written breakdown.']
  ];

  return (
    <div className="overflow-hidden bg-[#fbfaf7] text-ink">
      <section className="container-x pt-24 pb-28 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2.25rem] font-bold leading-[1.08] tracking-[-0.02em] text-primary-900 sm:text-[3rem] lg:text-[3.35rem]`}>
            {copy.hero.title}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-primary-900/80 sm:text-base">
            {copy.hero.subtitle}{' '}
            <Link href={`/${locale}/blog/domestic-worker-package-pricing-factors/`} className="font-semibold text-primary-900 underline decoration-accent-500/70 underline-offset-4 hover:text-accent-700">{copy.hero.guide}</Link>
          </p>
        </div>
      </section>
      <PageBreadcrumbs locale={locale} route="pricing" />

      <section className="container-x pb-24 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {copy.assurance.map(([title, text], index) => (
            <div key={title} className="min-h-[260px] rounded-[14px] border border-accent-500/18 bg-[#f2eff1] p-9 shadow-[0_18px_50px_rgba(7,22,74,0.04)]">
              <div className="mb-9 flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/35 bg-white text-accent-700 shadow-sm shadow-accent-500/10">
                <LineIcon name={assuranceIcons[index]} className="h-4 w-4" />
              </div>
              <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} max-w-[13rem] text-2xl font-bold leading-[1.05] text-primary-900`}>
                {title}
              </h2>
              <div className="mt-5 h-px w-14 bg-accent-500/55" />
              <p className="mt-5 text-sm leading-7 text-primary-900/80">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-28 sm:pb-32">
        <div className="mx-auto grid max-w-6xl items-end gap-8 lg:grid-cols-3">
          {copy.packages.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex min-h-[650px] flex-col rounded-[16px] border p-9 shadow-[0_24px_70px_rgba(7,22,74,0.07)] ${plan.featured ? 'border-accent-500/35 bg-[#020202] text-white lg:min-h-[715px] lg:-translate-y-10 shadow-[0_30px_80px_rgba(191,164,106,0.18)]' : 'border-accent-500/16 bg-white text-primary-900'}`}
            >
              {plan.badge ? <span className="absolute right-7 top-7 rounded-full border border-accent-300/70 bg-accent-500 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary-900 shadow-sm shadow-accent-500/20">{plan.badge}</span> : null}
              <p className={`text-[0.67rem] font-bold uppercase tracking-[0.22em] ${plan.featured ? 'text-accent-400' : 'text-accent-700'}`}>{plan.eyebrow}</p>
              <div className={`mt-4 h-px w-12 ${plan.featured ? 'bg-accent-500/80' : 'bg-accent-500/55'}`} />
              <div className="mt-8 flex items-start justify-between gap-4">
                <div>
                  <p className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2.45rem] font-bold leading-none ${plan.featured ? 'text-white' : 'text-primary-900'}`}>{plan.price}</p>
                  <p className={`mt-3 text-xs ${plan.featured ? 'text-white/85' : 'text-primary-900/75'}`}>{plan.period}</p>
                </div>
              </div>
              <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-6 text-xl font-bold ${plan.featured ? 'text-white' : 'text-primary-900'}`}>{plan.name}</h2>
              <p className={`mt-4 text-sm leading-7 ${plan.featured ? 'text-white/85' : 'text-primary-900/80'}`}>{plan.desc}</p>
              <div className={`my-9 h-px ${plan.featured ? 'bg-accent-500/28' : 'bg-accent-500/18'}`} />
              <div className="space-y-5">
                {plan.features.map((feature, index) => (
                  <div key={feature} className={`flex items-start gap-3 text-sm leading-7 ${plan.featured ? 'text-white/85' : 'text-primary-900/80'}`}>
                    <LineIcon name={plan.featured && index > 1 ? 'star' : 'check'} className={`mt-1 h-4 w-4 shrink-0 ${plan.featured ? 'text-accent-500' : 'text-accent-700'}`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href={`/${locale}/booking`}
                className={`mt-auto inline-flex w-full items-center justify-center rounded-full border px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${plan.featured ? 'border-accent-500 bg-white text-primary-900 hover:bg-accent-50' : 'border-accent-500/55 bg-white text-primary-900 hover:border-accent-600 hover:bg-accent-50'}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-primary-900/70">
          {copy.note}{' '}
          <Link href={`/${locale}/blog/monthly-maid-package-inclusions-checklist/`} className="font-semibold text-primary-900 underline decoration-accent-500/70 underline-offset-4 hover:text-accent-700">{isArabic ? 'أسئلة لتأكيد ما تشمله الباقة الشهرية' : 'Questions to confirm your monthly package inclusions'}</Link>
        </p>
      </section>

      <section className="container-x pb-28 sm:pb-32">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-3xl font-bold text-primary-900`}>{copy.comparisonTitle}</h2>
          <div className="mt-10 overflow-hidden rounded-[14px] border border-accent-500/18 bg-white shadow-[0_18px_60px_rgba(7,22,74,0.045)]">
            <div className="grid grid-cols-4 bg-[#f3f1f0] text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary-900/70">
              {copy.tableHeaders.map((header, index) => (
                <div key={header} className={`px-5 py-6 ${index === 2 ? 'bg-accent-500/18 text-primary-900' : ''}`}>{header}</div>
              ))}
            </div>
            {copy.rows.map((row, index) => (
              <div key={String(row[0])} className={`grid grid-cols-4 border-t border-primary-900/6 text-sm ${index % 2 === 0 ? 'bg-white' : 'bg-[#fdfcf9]'}`}>
                <div className="px-5 py-6 text-start font-semibold text-primary-900">{row[0]}</div>
                <div className="px-5 py-6 text-center text-primary-900/80"><FeatureValue value={row[1]} /></div>
                <div className="bg-accent-500/[0.08] px-5 py-6 text-center font-semibold text-primary-900"><FeatureValue value={row[2]} /></div>
                <div className="px-5 py-6 text-center text-primary-900/80"><FeatureValue value={row[3]} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-content="payment-responsibilities" className="container-x pb-28 sm:pb-32">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-3xl font-bold text-primary-900`}>{isArabic ? 'ميز الرسوم ومسؤوليات الدفع' : 'Distinguish charges and payment responsibilities'}</h2>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{isArabic ? 'تبدأ Essential من 1,500 درهم شهرياً وSignature من 2,500 درهم شهرياً، شاملتين التكاليف. وتبقى INAYA Black بعرض سعر مخصص. الجدول يشرح أنواع المبالغ المطلوب توضيحها في العرض المكتوب؛ ولا يعلن رسوماً إضافية أو يستبعد تكاليف من أي باقة.' : 'Essential starts from AED 1,500/month and Signature from AED 2,500/month, all-inclusive. INAYA Black remains Custom Quote. The table explains payment types to clarify in the written proposal; it does not announce extra charges or exclude costs from a package.'}</p>
          <div className="mt-6 overflow-x-auto rounded-[14px] border border-accent-500/18 bg-white">
            <table className="w-full text-start text-sm leading-7">
              <caption className="sr-only">{isArabic ? 'أنواع المبالغ ومسؤوليات الدفع' : 'Payment types and responsibilities'}</caption>
              <thead className="bg-[#f3f1f0]"><tr>{(isArabic ? ['نوع المبلغ', 'ما الذي يمثله؟', 'ما المطلوب توضيحه كتابةً؟'] : ['Payment type', 'What does it represent?', 'What needs written clarification?']).map((label) => <th key={label} scope="col" className="p-4 text-start align-top">{label}</th>)}</tr></thead>
              <tbody>{costRows.map(([type, purpose, confirmation]) => <tr key={type} className="border-t border-primary-900/10"><th scope="row" className="p-4 text-start align-top">{type}</th><td className="p-4 align-top">{purpose}</td><td className="p-4 align-top">{confirmation}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-primary-900/75">{isArabic ? 'راجع شروط الإلغاء والإنهاء والاستبدال مع الاتفاق. تختلف رسوم الاستقدام عن الرسوم الشهرية؛ ولا تلغي الشروط التجارية حقوقاً قانونية منطبقة.' : 'Review cancellation, termination and replacement terms alongside the agreement. Recruitment fees differ from monthly charges; commercial terms do not remove applicable statutory rights.'}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href={`/${locale}/refund-policy/`} className="underline">{isArabic ? 'قواعد الاسترداد والاستبدال' : 'Refund and replacement rules'}</Link>
            <Link href={`/${locale}/support-process/`} className="underline">{isArabic ? 'الدعم والشكوى' : 'Support and complaints'}</Link>
          </div>
        </div>
      </section>

      <section className="container-x pb-28 sm:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-3xl font-bold text-primary-900`}>{copy.faqTitle}</h2>
          <p className="mt-4 text-sm text-primary-900/75">{copy.faqSubtitle}</p>
          <div className="mt-10 space-y-4 text-start">
            {copy.faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-[12px] border border-accent-500/16 bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-primary-900">
                  <span>{question}</span>
                  <span className="text-accent-700 transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="border-t border-accent-500/12 px-6 pb-6 pt-5 text-sm leading-7 text-primary-900/80">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-28 sm:pb-36">
        <div className="mx-auto max-w-6xl rounded-[18px] border border-accent-500/20 bg-[radial-gradient(circle_at_70%_20%,rgba(191,164,106,0.18),transparent_22rem),#f2eff1] px-6 py-20 text-center shadow-[0_18px_60px_rgba(7,22,74,0.04)] sm:px-10">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-3xl font-bold text-primary-900`}>{copy.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary-900/80">{copy.cta.text}</p>
          <Link href={`/${locale}/contact`} className="mt-9 inline-flex items-center justify-center gap-2 rounded-full border border-accent-400 bg-primary-900 px-7 py-3 text-sm font-bold text-accent-100 shadow-[0_12px_30px_rgba(7,22,74,0.20)] transition hover:-translate-y-0.5 hover:bg-accent-500 hover:text-primary-900">
            {copy.cta.button}
            <LineIcon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
