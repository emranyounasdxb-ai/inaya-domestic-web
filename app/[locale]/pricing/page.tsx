import Link from 'next/link';
import { managedPackages, packageSummary, packageArrangements, packageSections } from '@/lib/package-content';
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
  const lang = isArabic ? 'ar' : 'en';
  const copy = {
    hero: {
      title: isArabic ? 'باقات وأسعار العمالة المنزلية' : 'Domestic Worker Packages and Pricing',
      subtitle: packageSummary[lang],
      guide: isArabic ? 'اقرأ دليل أسعار الباقات' : 'Read the package pricing guide'
    },
    assurance: isArabic ? [
      ['راتب مشمول', 'تدير الوكالة سداد راتب العاملة المشمول في رسوم الخدمة؛ ولا يدفع العميل الراتب نفسه منفصلاً.'],
      ['دور واضح', 'تطابق المهام الفردية مع الدور المتفق عليه. العرض القياسي مقيم؛ وتعرض الخدمة غير المقيمة والزيارات الجزئية منفصلة.'],
      ['شروط مكتوبة', 'تسلم النطاق وتفصيل السعر ومستندات الدفع قبل التأكيد. الشهر الأول مقدم، دون رسم تجهيز منفصل أو تأمين نقدي للعرض القياسي.']
    ] : [
      ['Salary included', 'The agency administers the worker’s agreed salary within the service charge; the customer does not pay that salary separately.'],
      ['Defined role', 'Individual duties match the agreed role. The standard offer is live-in; live-out arrangements and part-time visits are separately quoted.'],
      ['Written terms', 'Receive the scope, price breakdown and payment documentation before confirmation. The first month is prepaid, with no separate setup fee or security deposit for the standard offer.']
    ],
    packages: managedPackages.map((plan) => ({
      eyebrow: plan.id === 'black' ? (isArabic ? 'حسب الطلب' : 'Bespoke') : plan.name,
      name: plan.name, price: plan.price[lang],
      period: plan.monthlyFrom === null ? (isArabic ? 'حسب عرض السعر' : 'as quoted') : (isArabic ? 'يبدأ من · شهرياً · شامل ضمن النطاق' : 'starting from · per month · all-inclusive within scope'),
      desc: plan.description[lang], features: plan.features[lang],
      cta: isArabic ? (plan.id === 'black' ? 'اطلب عرض سعر' : 'ناقش ' + plan.name) : (plan.id === 'black' ? 'Request a quote' : 'Discuss ' + plan.name),
      featured: plan.id === 'signature', badge: plan.id === 'black' ? 'INAYA BLACK' : undefined
    })),
    comparisonTitle: isArabic ? 'قارن الباقات والخدمة المشمولة' : 'Compare the packages and included service',
    tableHeaders: isArabic ? ['عنصر المقارنة', 'Essential', 'Signature', 'INAYA Black'] : ['Service feature', 'Essential', 'Signature', 'INAYA Black'],
    rows: isArabic ? [
      ['السعر الشهري المبدئي', '2,500 درهم', '3,000 درهم', 'عرض سعر مخصص'],
      ['نطاق الدور', 'دعم منزلي اعتيادي', 'دعم ذو خبرة أو مربية أو رعاية غير سريرية بحسب الدور والتوفر', 'احتياجات مخصصة أو متعددة العاملين أو معقدة'],
      ['مسؤول المتابعة', 'مسؤول للحجز والدعم', 'منسق خدمة مخصص', 'مسؤول حساب مسمى'],
      ['جدول المتابعة', 'الأسبوع الأول ثم شهرياً', 'الأسبوع الأول ثم كل أسبوعين', 'جدول مراجعة متفق عليه'],
      ['تنسيق الاستبدال المؤهل', 'اعتيادي', 'ذو أولوية', 'بحسب الدور'],
      ['الراتب والعناصر الأساسية للخدمة الشهرية المدارة', 'مشمولة', 'مشمولة', 'مشمولة ضمن نطاق الخدمة الشهرية المدارة'],
      ['السداد الأول للخدمة الشهرية', 'الشهر الأول مقدماً', 'الشهر الأول مقدماً', 'الشهر الأول مقدماً'],
      ['رسم تجهيز منفصل وتأمين نقدي للعرض الشهري القياسي', 'لا يوجد', 'لا يوجد', 'لا يوجد في العرض القياسي']
    ] : [
      ['Starting monthly price', 'AED 2,500', 'AED 3,000', 'Custom Quote'],
      ['Role scope', 'Routine household support', 'Experienced support, nanny or non-clinical care by role and availability', 'Bespoke, multiple-worker or complex needs'],
      ['Support contact', 'Assigned booking/support contact', 'Dedicated service coordinator', 'Named account contact'],
      ['Follow-up schedule', 'First week, then monthly', 'First week, then fortnightly', 'Agreed review schedule'],
      ['Eligible replacement coordination', 'Standard', 'Priority', 'Role-specific'],
      ['Salary and core managed monthly components', 'Included', 'Included', 'Included in the managed monthly scope'],
      ['Initial monthly service payment', 'First month in advance', 'First month in advance', 'First month in advance'],
      ['Separate setup fee and security deposit for the standard monthly offer', 'None', 'None', 'None for the standard offer']
    ],
    faqTitle: isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
    faqSubtitle: isArabic ? 'نطاق الخدمة الشهرية ومسؤوليات الدفع والتغيير.' : 'The monthly service scope, payment responsibilities and changes.',
    faqs: isArabic ? [
      ['هل الأسعار شهرية؟', 'نعم. تبدأ Essential من 2,500 درهم شهرياً وSignature من 3,000 درهم شهرياً، شاملتين التكاليف ضمن العناصر والاستثناءات المنشورة. INAYA Black بعرض سعر مخصص، ويبين العرض المكتوب المبلغ النهائي والضريبة المنطبقة.'],
      ['هل السعر يشمل راتب العاملة؟', 'نعم. يشمل راتب العاملة المتفق عليه وإدارة سداده عبر الآلية المعتمدة المنطبقة. دفعة العميل مقابل الخدمة المدارة وتختلف عن الأجر المستحق للعاملة؛ ولا يدفع العميل الأجر نفسه منفصلاً. لا يعني ذلك إلزام جميع المهن المنزلية بنظام حماية الأجور.'],
      ['هل تشمل الباقة السكن خارج المنزل أو الزيارات الجزئية؟', packageArrangements.ar],
      ['هل توجد رسوم استقدام مقدمة أو تأمين نقدي؟', packageSections.payments.body.ar],
      ['متى تبدأ الخدمة، وهل يمكن تغيير المرشحة؟', packageSections.commencement.body.ar + ' إذا اقترحت مرشحة مختلفة، يقدم الملف المعدل وتؤخذ موافقتك؛ وتوضح التغييرات الجوهرية كتابةً.'],
      ['كيف يعالج الإلغاء والاسترداد؟', packageSections.cancellation.body.ar + ' لا تفرض رسوم إلغاء غير مفصح عنها ولا تخصم بصورة غير متوقعة تكاليف مشمولة أصلاً. تبقى الحقوق والمواعيد القانونية المنطبقة قائمة.'],
      ['ما دعم الاستبدال المشمول؟', packageSections.replacement.body.ar + ' توضح الأهلية وخيارات المرشحات والخطوات التالية، وتؤخذ موافقتك قبل التأكيد.'],
      ['هل تغطي الباقة كل علاج طبي؟', 'يشمل العرض قسط التأمين الصحي المنطبق. تحدد الوثيقة الصادرة المنافع والاستثناءات والمساهمات في الدفع، مع مراعاة المسؤوليات القانونية. لا يعني شمول القسط تغطية كل علاج أو رعاية سريرية متخصصة.'],
      ['ما ساعات الدعم والمتابعة؟', packageSections.followUp.body.ar + ' ساعات الدعم البشري من السبت إلى الخميس، من 9 صباحاً إلى 9 مساءً؛ الجمعة مغلق. يمكن استقبال رسائل واتساب خارج هذه الساعات دون وعد برد فوري.']
    ] : [
      ['Are the prices monthly?', 'Yes. Essential starts from AED 2,500/month and Signature from AED 3,000/month, all-inclusive within the published components and exclusions. INAYA Black is Custom Quote; the written quotation identifies the final amount and applicable tax.'],
      ['Is the worker’s salary included?', 'Yes. The agreed salary and its administration through the applicable approved mechanism are included. The customer’s service payment is distinct from the worker’s wage, and the customer does not pay that wage separately. This does not mean WPS is mandatory for every domestic occupation.'],
      ['Does the price include live-out service or part-time visits?', packageArrangements.en],
      ['Is there an upfront recruitment fee or security deposit?', packageSections.payments.body.en],
      ['When does service start, and can the candidate change?', packageSections.commencement.body.en + ' If another candidate is proposed, the revised profile is provided and your consent obtained; material changes are explained in writing.'],
      ['How are cancellation and refunds handled?', packageSections.cancellation.body.en + ' No undisclosed cancellation charge or unexpected deduction of already-included costs is imposed. Applicable statutory rights and deadlines remain in force.'],
      ['What replacement support is included?', packageSections.replacement.body.en + ' Eligibility, candidate options and next steps are explained, and your consent is obtained before confirmation.'],
      ['Does the package cover every medical treatment?', 'The applicable health-insurance premium is included. Benefits, exclusions and co-payments follow the issued policy and lawful responsibilities. Including the premium does not mean every treatment or specialist clinical service is covered.'],
      ['What are the support hours and follow-up schedules?', packageSections.followUp.body.en + ' Human support is Saturday–Thursday, 9 AM–9 PM; Friday closed. WhatsApp messages may be received outside those hours without an immediate-response promise.']
    ],
    cta: {
      title: isArabic ? 'تحتاج ترتيباً مخصصاً؟' : 'Require a bespoke arrangement?',
      text: isArabic ? 'شارك المهام والموقع والجدول المطلوبين لعرض مفصل يناسب احتياجات منزلك.' : 'Share your duties, location and schedule for an itemised quotation suited to your household.',
      button: isArabic ? 'تواصل مع الفريق' : 'Consult Our Experts'
    },
    note: isArabic ? 'أسعار تبدأ من المبلغ المعلن للخدمة المقيمة القياسية، ضمن النطاق والاستثناءات. يبين العرض المكتوب المبلغ النهائي والضريبة المنطبقة والتوفر.' : 'Starting prices concern the standard live-in offer within the published scope and exclusions. The written quotation states the final payable amount, applicable tax and availability.'
  };

  const assuranceIcons: IconName[] = ['refresh', 'file', 'shield'];
  const costRows = isArabic ? [
    ['رسوم الخدمة الشهرية', 'دفعة العميل مقابل الخدمة المدارة خلال الفترة المدفوعة.', 'تشمل راتب العاملة والعناصر الأساسية التالية ضمن النطاق والاستثناءات.'],
    ['راتب العاملة وإدارة سداده', 'أجر مستحق للعاملة في علاقة التوظيف.', 'مشمول في الرسوم، وتدير الوكالة سداده وتوثيقه عبر الآلية المعتمدة؛ ولا يدفعه العميل مرة أخرى.'],
    ['الكفالة وتصريح العمل والإقامة', 'الإجراءات المنطبقة ضمن ترتيب توظيف الوكالة.', 'مشمول: المعالجة النظامية المطلوبة، دون وعد بمدة موافقة أو صلاحية تأشيرة محددة.'],
    ['الهوية وفحص اللياقة الطبية', 'إجراءات الهوية الإماراتية واللياقة الطبية المطلوبة.', 'مشمول ضمن الخدمة الشهرية المدارة بحسب المتطلبات المنطبقة.'],
    ['قسط التأمين الصحي', 'اشتراك التأمين الصحي المنطبق.', 'مشمول؛ وتحدد الوثيقة الصادرة المنافع والاستثناءات والمساهمات في الدفع والمسؤوليات القانونية.'],
    ['التقييم والتوجيه وبدء الخدمة', 'تقييم المرشحة والتوجيه الأولي والتهيئة المتفق عليها.', 'مشمول، مع تفاصيل التنسيق والمتابعة المبينة لكل باقة.'],
    ['النقل عند بدء الخدمة', 'النقل الاعتيادي للعاملة عند بدء الخدمة.', 'مشمول ضمن منطقة الخدمة المبينة في العرض؛ والنقل للخدمة غير المقيمة يبين منفصلاً في عرضها.'],
    ['التنسيق وإدارة الاستبدال المؤهل', 'متابعة العميل ومراجعة طلبات الاستبدال وتنسيق المطابقة.', 'مشمول بحسب الأهلية وتنسيق الباقة، دون وعد بعدد غير محدود أو موعد ثابت.'],
    ['التزامات توظيف الوكالة', 'التزامات الوكالة المنطبقة في علاقة التوظيف.', 'محسوبة ضمن رسوم الخدمة الشهرية؛ وتبقى حقوق العاملة القانونية محفوظة.'],
    ['السكن والطعام والمنتجات والمعدات', 'احتياجات المنزل والعمل اليومي.', 'تحدد المسؤوليات في الاتفاق ونطاق الخدمة، ولا يفترض شمولها كتكاليف تدفعها عناية.'],
    ['الخدمات الإضافية والضريبة', 'السفر والخدمات المنفصلة والتغييرات الجوهرية والضريبة المنطبقة.', 'توضح وتحدد أسعارها وتقبل كتابةً؛ ويبين العرض النهائي المبلغ المستحق.']
  ] : [
    ['Monthly service charge', 'The customer’s payment for managed service during the paid period.', 'Includes the worker salary and the core components below within the scope and exclusions.'],
    ['Worker salary and payment administration', 'The wage due to the worker within the employment relationship.', 'Included; the agency administers and documents payment through the applicable approved mechanism, without a separate customer wage payment.'],
    ['Sponsorship, work permit and residence', 'Applicable processing under the agency employment arrangement.', 'Included: required lawful processing, without a promised approval time or fixed visa validity.'],
    ['Emirates ID and medical fitness', 'Required identity and medical-fitness processing.', 'Included in the managed monthly service according to applicable requirements.'],
    ['Health-insurance premium', 'The applicable insurance subscription.', 'Included; benefits, exclusions and co-payments follow the issued policy and lawful responsibilities.'],
    ['Assessment, orientation and onboarding', 'Candidate assessment, initial orientation and agreed onboarding.', 'Included, with the coordination and follow-up features stated for each tier.'],
    ['Placement transport', 'Standard worker transport when service begins.', 'Included within the quoted service area; live-out transport is itemised separately in its quotation.'],
    ['Coordination and eligible replacement administration', 'Customer follow-up, eligibility review and matching coordination.', 'Included according to eligibility and tier coordination, without an unlimited-count or fixed-deadline promise.'],
    ['Agency employment obligations', 'Applicable obligations within the employment relationship.', 'Budgeted within the monthly charge; the worker’s statutory rights remain protected.'],
    ['Accommodation, meals, products and equipment', 'Household and daily-work requirements.', 'Responsibilities are recorded in the agreement and service scope; do not assume these costs are paid by INAYA.'],
    ['Additional services and tax', 'Travel, separately arranged services, material scope changes and applicable tax.', 'Explained, priced and accepted in writing; the final quotation states the payable amount.']
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
        <div className="mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-3 lg:gap-y-0">
          {copy.packages.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex min-w-0 flex-col rounded-[16px] border p-6 shadow-[0_24px_70px_rgba(7,22,74,0.07)] sm:p-9 lg:row-span-8 lg:grid lg:grid-rows-subgrid ${plan.featured ? 'border-accent-500/35 bg-[#020202] text-white shadow-[0_30px_80px_rgba(191,164,106,0.18)]' : 'border-accent-500/16 bg-white text-primary-900'}`}
            >
              {plan.badge ? <span className="absolute end-7 top-7 rounded-full border border-accent-300/70 bg-accent-500 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary-900 shadow-sm shadow-accent-500/20">{plan.badge}</span> : null}
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
              <div className="space-y-5 pb-8">
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
          <div className="mt-10 overflow-x-auto rounded-[14px] border border-accent-500/18 bg-white shadow-[0_18px_60px_rgba(7,22,74,0.045)]">
            <div className="grid min-w-[640px] grid-cols-4 bg-[#f3f1f0] text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary-900/70">
              {copy.tableHeaders.map((header, index) => (
                <div key={header} className={`px-5 py-6 ${index === 2 ? 'bg-accent-500/18 text-primary-900' : ''}`}>{header}</div>
              ))}
            </div>
            {copy.rows.map((row, index) => (
              <div key={String(row[0])} className={`grid min-w-[640px] grid-cols-4 border-t border-primary-900/6 text-sm ${index % 2 === 0 ? 'bg-white' : 'bg-[#fdfcf9]'}`}>
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
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{packageSections.responsibilities.body[lang]}</p>
          <div className="mt-6 overflow-x-auto rounded-[14px] border border-accent-500/18 bg-white">
            <table className="w-full text-start text-sm leading-7">
              <caption className="sr-only">{isArabic ? 'أنواع المبالغ ومسؤوليات الدفع' : 'Payment types and responsibilities'}</caption>
              <thead className="bg-[#f3f1f0]"><tr>{(isArabic ? ['نوع المبلغ', 'ما الذي يمثله؟', 'ما المطلوب توضيحه كتابةً؟'] : ['Payment type', 'What does it represent?', 'What needs written clarification?']).map((label) => <th key={label} scope="col" className="p-4 text-start align-top">{label}</th>)}</tr></thead>
              <tbody>{costRows.map(([type, purpose, confirmation]) => <tr key={type} className="border-t border-primary-900/10"><th scope="row" className="p-4 text-start align-top">{type}</th><td className="p-4 align-top">{purpose}</td><td className="p-4 align-top">{confirmation}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-primary-900/75">{isArabic ? 'راجع شروط الإلغاء والإنهاء والاستبدال مع الاتفاق. تختلف رسوم الاستقدام عن الرسوم الشهرية؛ ولا تلغي الشروط التجارية حقوقاً قانونية منطبقة.' : 'Review cancellation, termination and replacement terms alongside the agreement. Recruitment fees differ from monthly charges; commercial terms do not remove applicable statutory rights.'}</p>
          <h3 className="mt-8 text-lg font-bold">{packageSections.exclusions.title[lang]}</h3>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{packageSections.exclusions.body[lang]}</p>
          <ul className="mt-4 list-inside list-disc space-y-3 text-sm leading-7 text-primary-900/75">{packageSections.exclusions.points[lang].map(point => <li key={point}>{point}</li>)}</ul>
          <h3 className="mt-8 text-lg font-bold">{packageSections.payments.title[lang]}</h3>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{packageSections.payments.body[lang]}</p>
          <h3 className="mt-8 text-lg font-bold">{packageSections.cancellation.title[lang]}</h3>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{packageSections.cancellation.body[lang]}</p>
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
