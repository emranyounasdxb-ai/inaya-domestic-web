import type { Lang, Pair, Pricing, ServiceCopy } from './service-page-copy';

export type LocalizedText = { en: string; ar: string };
type LocalizedPoints = { en: string[]; ar: string[] };
type PackageSection = { title: LocalizedText; body: LocalizedText; points: LocalizedPoints };
export type ManagedPackage = {
  id: 'half-day' | 'daily' | 'weekly' | 'monthly' | 'six-month' | 'yearly';
  name: LocalizedText;
  amount: number;
  billingUnit: 'package' | 'month';
  hours?: number;
  days?: number;
  commitmentMonths?: number;
  price: LocalizedText;
  period: LocalizedText;
  duration: LocalizedText;
  description: LocalizedText;
  features: LocalizedPoints;
};

// Owner-approved published package prices, effective 19 October 2026.
// Longer commitments are priced per month, not for the whole commitment.
export const packageSummary: LocalizedText = {
  en: 'Half-day: AED 120 for 4 hours. Daily: AED 200 for 8 hours. Weekly: AED 1,120 for 7 days. Monthly: AED 3,500 for 30 days. A 6-month commitment is AED 3,250 per month; a 12-month commitment is AED 3,000 per month. These published package prices are the same for live-in and live-out arrangements.',
  ar: 'نصف يوم: 120 درهماً مقابل 4 ساعات. يومي: 200 درهم مقابل 8 ساعات. أسبوعي: 1,120 درهماً لمدة 7 أيام. شهري: 3,500 درهم لمدة 30 يوماً. الالتزام لمدة 6 أشهر بسعر 3,250 درهماً شهرياً؛ والالتزام لمدة 12 شهراً بسعر 3,000 درهم شهرياً. أسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة.'
};

export const packageArrangements: LocalizedText = {
  en: 'Live-in and live-out arrangements have the same published package price. Record accommodation, meals, transport, cleaning products and equipment responsibilities in the written agreement. The half-day package covers 4 hours and the daily package 8 hours; agree the schedule, duties and rest for weekly, monthly and longer commitments. A 7-day or 30-day package describes the service period, not continuous work.',
  ar: 'سعر الباقة المنشور واحد للخدمة المقيمة وغير المقيمة. تسجل مسؤوليات السكن والطعام والنقل ومواد التنظيف والمعدات في الاتفاق المكتوب. تغطي باقة نصف اليوم 4 ساعات والباقة اليومية 8 ساعات؛ ويتفق على الجدول والمهام والراحة للباقات الأسبوعية والشهرية والالتزامات الأطول. تصف باقة 7 أيام أو 30 يوماً فترة الخدمة، ولا تعني العمل المتواصل.'
};

export const monthlyPackageSummary: LocalizedText = {
  en: 'The monthly package is AED 3,500 for 30 days. With a 6-month commitment, the price is AED 3,250 per month; with a 12-month commitment, it is AED 3,000 per month. Live-in and live-out prices are the same. The managed monthly agreement includes the worker’s agreed salary and the applicable published benefits within its written scope.',
  ar: 'الباقة الشهرية بسعر 3,500 درهم لمدة 30 يوماً. مع الالتزام لمدة 6 أشهر يكون السعر 3,250 درهماً شهرياً؛ ومع الالتزام لمدة 12 شهراً يكون 3,000 درهم شهرياً. السعر واحد للخدمة المقيمة وغير المقيمة. يشمل اتفاق الخدمة الشهرية المدارة راتب العاملة المتفق عليه والمزايا المنشورة المنطبقة ضمن نطاقه المكتوب.'
};

export const shortPackageSummary: LocalizedText = {
  en: 'The half-day package is AED 120 for 4 hours; the daily package is AED 200 for 8 hours; the weekly package is AED 1,120 for a 7-day service period. Confirm the household duties, schedule, availability and written scope for your selected package.',
  ar: 'باقة نصف اليوم بسعر 120 درهماً مقابل 4 ساعات؛ والباقة اليومية بسعر 200 درهم مقابل 8 ساعات؛ والباقة الأسبوعية بسعر 1,120 درهماً لفترة خدمة من 7 أيام. أكد المهام المنزلية والجدول والتوفر والنطاق المكتوب للباقة المختارة.'
};

export const managedPackages: ManagedPackage[] = [
  {
    id: 'half-day', name: { en: 'Half-day', ar: 'نصف يوم' }, amount: 120, billingUnit: 'package', hours: 4,
    price: { en: 'AED 120', ar: '120 درهماً' }, period: { en: 'for 4 hours', ar: 'مقابل 4 ساعات' }, duration: { en: '4 hours', ar: '4 ساعات' },
    description: { en: 'A defined four-hour visit for your agreed household priorities.', ar: 'زيارة محددة من أربع ساعات لإنجاز الأولويات المنزلية المتفق عليها.' },
    features: { en: ['4-hour service period', 'Agree the household task list', 'Confirm the visit date and availability'], ar: ['فترة خدمة من 4 ساعات', 'الاتفاق على قائمة المهام المنزلية', 'تأكيد موعد الزيارة والتوفر'] }
  },
  {
    id: 'daily', name: { en: 'Daily', ar: 'يومي' }, amount: 200, billingUnit: 'package', hours: 8,
    price: { en: 'AED 200', ar: '200 درهم' }, period: { en: 'for 8 hours', ar: 'مقابل 8 ساعات' }, duration: { en: '8 hours', ar: '8 ساعات' },
    description: { en: 'An eight-hour service package with duties and timing agreed in advance.', ar: 'باقة خدمة من ثماني ساعات، مع الاتفاق مسبقاً على المهام والتوقيت.' },
    features: { en: ['8-hour service period', 'Agree duties and timing', 'Written service scope before confirmation'], ar: ['فترة خدمة من 8 ساعات', 'الاتفاق على المهام والتوقيت', 'نطاق خدمة مكتوب قبل التأكيد'] }
  },
  {
    id: 'weekly', name: { en: 'Weekly', ar: 'أسبوعي' }, amount: 1120, billingUnit: 'package', days: 7,
    price: { en: 'AED 1,120', ar: '1,120 درهماً' }, period: { en: 'for 7 days', ar: 'لمدة 7 أيام' }, duration: { en: '7 days', ar: '7 أيام' },
    description: { en: 'A seven-day service period with the work schedule and rest agreed in writing.', ar: 'فترة خدمة من سبعة أيام، مع الاتفاق كتابةً على جدول العمل والراحة.' },
    features: { en: ['7-day service period', 'Agree working hours and rest', 'Same published live-in and live-out price'], ar: ['فترة خدمة من 7 أيام', 'الاتفاق على ساعات العمل والراحة', 'السعر المنشور نفسه للمقيمة وغير المقيمة'] }
  },
  {
    id: 'monthly', name: { en: 'Monthly', ar: 'شهري' }, amount: 3500, billingUnit: 'package', days: 30,
    price: { en: 'AED 3,500', ar: '3,500 درهم' }, period: { en: 'for 30 days', ar: 'لمدة 30 يوماً' }, duration: { en: '30 days', ar: '30 يوماً' },
    description: { en: 'Managed household support for a thirty-day service period under the agreed monthly scope.', ar: 'دعم منزلي مدار لفترة خدمة من ثلاثين يوماً ضمن النطاق الشهري المتفق عليه.' },
    features: { en: ['30-day service period', 'Agreed salary included in the monthly scope', 'Live-in or live-out at the same price'], ar: ['فترة خدمة من 30 يوماً', 'الراتب المتفق عليه مشمول ضمن النطاق الشهري', 'مقيمة أو غير مقيمة بالسعر نفسه'] }
  },
  {
    id: 'six-month', name: { en: 'Six-month plan', ar: 'باقة 6 أشهر' }, amount: 3250, billingUnit: 'month', commitmentMonths: 6,
    price: { en: 'AED 3,250', ar: '3,250 درهماً' }, period: { en: 'per month · 6-month commitment', ar: 'شهرياً · التزام لمدة 6 أشهر' }, duration: { en: '6-month commitment', ar: 'التزام لمدة 6 أشهر' },
    description: { en: 'A monthly package rate for an agreed six-month service commitment.', ar: 'سعر شهري للباقة عند الاتفاق على الالتزام بالخدمة لمدة ستة أشهر.' },
    features: { en: ['AED 3,250 each month', '6-month service commitment', 'Live-in or live-out at the same price'], ar: ['3,250 درهماً كل شهر', 'التزام بالخدمة لمدة 6 أشهر', 'مقيمة أو غير مقيمة بالسعر نفسه'] }
  },
  {
    id: 'yearly', name: { en: 'Yearly plan', ar: 'باقة سنوية' }, amount: 3000, billingUnit: 'month', commitmentMonths: 12,
    price: { en: 'AED 3,000', ar: '3,000 درهم' }, period: { en: 'per month · 12-month commitment', ar: 'شهرياً · التزام لمدة 12 شهراً' }, duration: { en: '12-month commitment', ar: 'التزام لمدة 12 شهراً' },
    description: { en: 'A monthly package rate for an agreed twelve-month service commitment.', ar: 'سعر شهري للباقة عند الاتفاق على الالتزام بالخدمة لمدة اثني عشر شهراً.' },
    features: { en: ['AED 3,000 each month', '12-month service commitment', 'Live-in or live-out at the same price'], ar: ['3,000 درهم كل شهر', 'التزام بالخدمة لمدة 12 شهراً', 'مقيمة أو غير مقيمة بالسعر نفسه'] }
  }
];

export function packagePriceLabel(plan: ManagedPackage, lang: Lang): string {
  return `${plan.price[lang]} — ${plan.period[lang]}`;
}

export function packagePricingCards(lang: Lang, scope: 'all' | 'monthly' | 'short' = 'all'): Pricing[] {
  return managedPackages
    .filter((plan) => scope === 'all' || (scope === 'monthly' ? ['monthly', 'six-month', 'yearly'].includes(plan.id) : ['half-day', 'daily', 'weekly'].includes(plan.id)))
    .map((plan) => ({ title: `${plan.name[lang]} — ${packagePriceLabel(plan, lang)}`, text: plan.description[lang], points: plan.features[lang] }));
}

export const packageSections: Record<string, PackageSection> = {
  responsibilities: {
    title: { en: 'Agency employment and household responsibilities', ar: 'توظيف الوكالة ومسؤوليات الأسرة' },
    body: {
      en: 'INAYA manages the monthly service under the applicable agency employment and sponsorship arrangement. The agreement identifies the agency employer and sponsor, the worker and the household beneficiary. The agency employer handles its employment obligations and the agreed salary-payment administration; the customer pays the monthly service charge and fulfils the household responsibilities recorded in the agreement.',
      ar: 'تدير عناية الخدمة الشهرية وفق ترتيب التوظيف والكفالة المنطبق لدى الوكالة. يحدد الاتفاق الوكالة صاحبة العمل والكفيل والعاملة والأسرة المستفيدة. تتولى الوكالة صاحبة العمل التزامات التوظيف وإدارة سداد الراتب المتفق عليه، بينما يدفع العميل رسوم الخدمة الشهرية ويلتزم بمسؤوليات المنزل المسجلة في الاتفاق.'
    },
    points: {
      en: ['The service payment includes the agreed worker salary; the customer does not pay that same salary separately.', 'Write down the individual role, duties, schedule, rest, supervision and safe working arrangements.', 'Record accommodation, meals, transport, household products and equipment responsibilities for the selected live-in or live-out arrangement in the agreement.', 'Required lawful authorisation and written confirmation precede service commencement.', 'A monthly service charge does not replace the employment contract or waive statutory rights.'],
      ar: ['تشمل رسوم الخدمة راتب العاملة المتفق عليه؛ ولا يدفع العميل الراتب نفسه مرة أخرى بصورة منفصلة.', 'سجل الدور الفردي والمهام والجدول والراحة والإشراف وترتيبات العمل الآمن كتابةً.', 'حدد في الاتفاق مسؤوليات السكن والطعام والنقل ومنتجات المنزل والمعدات للترتيب المختار، سواء بإقامة داخل المنزل أو خارجها.', 'يبدأ العمل بعد الحصول على التصاريح النظامية المطلوبة والتأكيد المكتوب.', 'رسوم الخدمة الشهرية لا تحل محل عقد العمل ولا تلغي الحقوق القانونية.']
    }
  },
  inclusions: {
    title: { en: 'What the managed monthly service includes', ar: 'ما تشمله الخدمة الشهرية المدارة' },
    body: {
      en: 'These components apply within the applicable managed monthly agreement and its stated scope. The published benefits include the worker’s salary, government fees, medical insurance, return ticket and end-of-service benefits as applicable under that agreement. They are not automatic benefits of every half-day, daily or weekly visit.',
      ar: 'تسري هذه العناصر ضمن اتفاق الخدمة الشهرية المدارة المنطبق ونطاقه المحدد. وتشمل المزايا المنشورة راتب العاملة والرسوم الحكومية والتأمين الطبي وتذكرة العودة ومكافأة نهاية الخدمة بحسب ما ينطبق في ذلك الاتفاق. ولا تعد مزايا تلقائية لكل زيارة بنصف يوم أو يومية أو أسبوعية.'
    },
    points: {
      en: ['The domestic worker’s agreed salary.', 'Documented salary-payment administration through the applicable approved mechanism.', 'Applicable government fees, agency sponsorship and work-permit/residence processing within the monthly agreement.', 'Emirates ID and required medical-fitness processing.', 'The applicable health-insurance premium; benefits, exclusions and co-payments follow the issued policy and lawful responsibilities.', 'Candidate assessment, initial orientation and agreed onboarding.', 'Return ticket and end-of-service benefits under the applicable monthly agreement and employment obligations.', 'Customer coordination and administration of eligible replacement requests.', 'Applicable agency employment obligations budgeted within the monthly service charge.'],
      ar: ['راتب العاملة المنزلية المتفق عليه.', 'إدارة موثقة لسداد الراتب عبر الآلية المعتمدة المنطبقة.', 'الرسوم الحكومية المنطبقة والكفالة لدى الوكالة وإجراءات تصريح العمل والإقامة ضمن الاتفاق الشهري.', 'إجراءات الهوية الإماراتية وفحص اللياقة الطبية المطلوب.', 'قسط التأمين الصحي المنطبق؛ وتحدد الوثيقة الصادرة والمسؤوليات القانونية المنافع والاستثناءات والمساهمات في الدفع.', 'تقييم المرشحة والتوجيه الأولي والتهيئة المتفق عليها لبدء الخدمة.', 'تذكرة العودة ومكافأة نهاية الخدمة وفق الاتفاق الشهري المنطبق والتزامات التوظيف.', 'التنسيق مع العميل وإدارة طلبات الاستبدال المؤهلة.', 'التزامات الوكالة المتعلقة بالتوظيف والمنطبقة على الترتيب، محسوبة ضمن رسوم الخدمة الشهرية.']
    }
  },
  exclusions: {
    title: { en: 'Household responsibilities and separately quoted services', ar: 'مسؤوليات المنزل والخدمات ذات العروض المنفصلة' },
    body: { en: packageArrangements.en, ar: packageArrangements.ar },
    points: {
      en: ['Live-in accommodation and meals: responsibilities are recorded in the applicable agreement.', 'Household cleaning products and equipment: responsibilities are recorded in the service scope.', 'Accommodation and transport for live-in and live-out arrangements: responsibilities are recorded in the written agreement; the published package price is the same.', 'Overseas travel with the family and destination-specific procedures: separately agreed.', 'Specialist clinical care, specialist cleaning and duties outside the agreed role are outside the standard household scope unless separately and lawfully arranged.', 'Additional requested services and material scope changes are priced and agreed before acceptance.', 'Applicable tax and the final payable amount are identified in the written quotation.'],
      ar: ['السكن والطعام للعاملة المقيمة: تسجل المسؤوليات في الاتفاق المنطبق.', 'منتجات التنظيف المنزلية والمعدات: تسجل المسؤوليات في نطاق الخدمة.', 'السكن والنقل للخدمة المقيمة وغير المقيمة: تسجل المسؤوليات في الاتفاق المكتوب؛ وسعر الباقة المنشور واحد.', 'السفر خارج الدولة مع الأسرة وإجراءات بلد الوجهة: يتفق عليها بصورة منفصلة.', 'الرعاية السريرية والتنظيف المتخصص والمهام خارج الدور المتفق عليه ليست ضمن نطاق الخدمة المنزلية القياسية إلا بترتيب منفصل ونظامي.', 'تحدد أسعار الخدمات الإضافية المطلوبة والتغييرات الجوهرية في النطاق، ويتفق عليها قبل قبولها.', 'يبين عرض السعر المكتوب الضريبة المنطبقة والمبلغ النهائي المستحق.']
    }
  },
  payments: {
    title: { en: 'Monthly payments and written confirmation', ar: 'السداد الشهري والتأكيد المكتوب' },
    body: {
      en: 'For the standard managed monthly offer, the first service month is paid in advance and later payments follow the agreed monthly billing date. There is no separate upfront recruitment/setup fee and no security deposit. Separately contracted recruitment and visa-only services have their own quotation and terms.',
      ar: 'في العرض الشهري القياسي المدار، يسدد الشهر الأول مقدماً، ثم تتبع الدفعات اللاحقة تاريخ الفوترة الشهري المتفق عليه. لا توجد رسوم استقدام أو تجهيز منفصلة مقدماً، ولا تأمين نقدي. وتكون لخدمات الاستقدام أو التأشيرة المتعاقد عليها منفصلة عروضها وشروطها الخاصة.'
    },
    points: {
      en: ['Receive the written service scope, price breakdown and applicable payment documentation before confirmation.', 'The quotation identifies included components, exclusions, applicable tax and the final payable amount.', 'Record the service period, monthly billing date, renewal arrangements and any agreed changes.', 'A package payment is different from the worker’s wage, even though the wage is included in the managed service price.'],
      ar: ['تسلم نطاق الخدمة المكتوب وتفصيل السعر ومستندات السداد المنطبقة قبل التأكيد.', 'يبين العرض العناصر المشمولة والاستثناءات والضريبة المنطبقة والمبلغ النهائي المستحق.', 'سجل فترة الخدمة وتاريخ الفوترة الشهري وترتيبات التجديد وأي تغييرات متفق عليها.', 'دفعة الباقة تختلف عن أجر العاملة، رغم أن الأجر مشمول في سعر الخدمة المدارة.']
    }
  },
  commencement: {
    title: { en: 'Candidate selection and service commencement', ar: 'اختيار المرشحة وبدء الخدمة' },
    body: {
      en: 'Start with the household role, duties, location and preferred timing. INAYA reviews availability and individual suitability, provides the written scope and quote, and confirms the selected candidate and start arrangements. Service starts after selection, required lawful authorisation and written confirmation.',
      ar: 'ابدأ بتحديد الدور المنزلي والمهام والموقع والتوقيت المفضل. تراجع عناية التوفر والملاءمة الفردية، وتقدم النطاق والعرض المكتوبين، ثم تؤكد المرشحة المختارة وترتيبات البدء. تبدأ الخدمة بعد الاختيار والحصول على التصاريح النظامية المطلوبة والتأكيد المكتوب.'
    },
    points: {
      en: ['Review the individual profile against agreed duties and communication needs, rather than nationality-based assumptions.', 'If another candidate is proposed, INAYA provides the revised profile and obtains customer consent.', 'Material changes and agreed alternatives are explained in writing.', 'Prepare a practical household handover with duties, safety instructions and key contacts.', 'Availability and official approvals determine the agreed start; no same-day placement or fixed government approval time is promised.'],
      ar: ['راجع الملف الفردي وفق المهام المتفق عليها واحتياجات التواصل، دون افتراضات مبنية على الجنسية.', 'إذا اقترحت مرشحة أخرى، تقدم عناية الملف المعدل وتحصل على موافقة العميل.', 'توضح التغييرات الجوهرية والبدائل المتفق عليها كتابةً.', 'جهز تسليماً عملياً لاحتياجات المنزل يشمل المهام وتعليمات السلامة وجهات التواصل الأساسية.', 'يحدد التوفر والموافقات الرسمية موعد البدء المتفق عليه؛ ولا يوجد وعد ببدء الخدمة في اليوم نفسه أو بمدة ثابتة للموافقة الحكومية.']
    }
  },
  cancellation: {
    title: { en: 'Managed monthly cancellation and refunds', ar: 'إلغاء الخدمة الشهرية المدارة والاسترداد' },
    body: {
      en: 'Before service commencement, INAYA returns the unused monthly service payment. After commencement, the unused prepaid service period following effective cancellation is refunded on a clear pro-rata basis. The calculation identifies the prepaid amount, service period, effective cancellation date and unused period.',
      ar: 'قبل بدء الخدمة، تعيد عناية دفعة الخدمة الشهرية غير المستخدمة. وبعد البدء، ترد قيمة الفترة المدفوعة مقدماً وغير المستخدمة بعد سريان الإلغاء، على أساس تناسبي واضح. يبين الحساب المبلغ المدفوع وفترة الخدمة وتاريخ سريان الإلغاء والفترة غير المستخدمة.'
    },
    points: {
      en: ['The unused-period calculation and relevant dates are explained in writing.', 'No undisclosed cancellation charge is imposed.', 'Costs already included in the monthly package are not reintroduced as unexpected deductions.', 'Customer service refunds are separate from the worker’s wages and employment entitlements.', 'Normal paid rest and protected leave are not automatic cancellation or refund events.', 'Applicable statutory remedies and deadlines remain in force; recruitment-fee rules apply to the relevant recruitment arrangement, not automatically to monthly payments.'],
      ar: ['يوضح حساب الفترة غير المستخدمة والتواريخ ذات الصلة كتابةً.', 'لا تفرض رسوم إلغاء غير مفصح عنها.', 'لا تعاد التكاليف المشمولة أصلاً في الباقة الشهرية كخصومات غير متوقعة.', 'استرداد رسوم الخدمة للعميل مستقل عن أجور العاملة وحقوقها الوظيفية.', 'الراحة المعتادة المدفوعة والإجازات المحمية ليستا سبباً تلقائياً للإلغاء أو الاسترداد.', 'تبقى سبل الإنصاف والمواعيد القانونية المنطبقة قائمة؛ وتخص قواعد رد رسوم الاستقدام ترتيب الاستقدام المعني، ولا تطبق تلقائياً على الدفعات الشهرية.']
    }
  },
  replacement: {
    title: { en: 'Eligible replacement support under the monthly agreement', ar: 'دعم الاستبدال المؤهل ضمن الاتفاق الشهري' },
    body: {
      en: 'The managed monthly agreement includes review and administration of eligible replacement requests. Eligibility is assessed against the agreed duties, applicable employment arrangement and relevant legal obligations. Matching coordination and follow-up follow the agreed service plan.',
      ar: 'يشمل اتفاق الخدمة الشهرية المدارة مراجعة طلبات الاستبدال المؤهلة وإدارة إجراءاتها. تقيم الأهلية وفق المهام المتفق عليها وترتيب التوظيف المنطبق والالتزامات القانونية ذات الصلة. يتبع تنسيق المطابقة والمتابعة خطة الخدمة المتفق عليها.'
    },
    points: {
      en: ['Share the agreement, agreed duties, relevant dates and a clear description of the concern.', 'INAYA explains the eligibility review, available matching options and next steps.', 'Review the proposed candidate and give consent before a replacement arrangement is confirmed.', 'If a suitable replacement is unavailable, discuss available alternatives and effective cancellation; unused prepaid service is handled under the monthly refund terms.', 'The support includes eligible review, matching coordination and administration, without an unlimited replacement promise or fixed completion deadline.', 'Legally required remedies remain available.'],
      ar: ['شارك الاتفاق والمهام المتفق عليها والتواريخ ذات الصلة ووصفاً واضحاً للملاحظة.', 'توضح عناية مراجعة الأهلية وخيارات المطابقة المتاحة والخطوات التالية.', 'راجع المرشحة المقترحة وقدم موافقتك قبل تأكيد ترتيب الاستبدال.', 'إذا لم يتوفر بديل مناسب، ناقش البدائل المتاحة وسريان الإلغاء؛ وتعالج الخدمة المدفوعة وغير المستخدمة وفق شروط الاسترداد الشهرية.', 'يشمل الدعم المراجعة المؤهلة وتنسيق المطابقة وإدارة الإجراءات، دون وعد باستبدال غير محدود أو بمدة إنجاز ثابتة.', 'تبقى سبل الإنصاف المطلوبة قانوناً متاحة.']
    }
  },
  followUp: {
    title: { en: 'Follow-up schedules and human support hours', ar: 'مواعيد المتابعة وساعات الدعم البشري' },
    body: {
      en: 'INAYA coordinates follow-up according to the agreed service plan. The written plan records the contact person, review schedule and how household feedback or replacement concerns will be handled.',
      ar: 'تنسق عناية المتابعة وفق خطة الخدمة المتفق عليها. تسجل الخطة المكتوبة مسؤول التواصل وجدول المراجعة وطريقة التعامل مع ملاحظات الأسرة أو طلبات الاستبدال.'
    },
    points: {
      en: ['Human support hours: Saturday–Thursday, 9 AM–9 PM; Friday closed.', 'WhatsApp messages may be received outside office hours; this is not a 24/7 human helpline or a guaranteed response time.', 'Office: +971 6 740 0128. WhatsApp: +971 50 203 6767. Email: info@inayadomestic.ae.', 'Visit Grand Mall, ground floor, Al Rashidiya 3, Ajman, and coordinate the visit with the team.', 'For a complaint, share the relevant agreement and concern, keep written communications and use the existing support and official escalation channels.'],
      ar: ['ساعات الدعم البشري: من السبت إلى الخميس، من 9 صباحاً إلى 9 مساءً؛ الجمعة مغلق.', 'يمكن استقبال رسائل واتساب خارج ساعات المكتب؛ ولا يعني ذلك خطاً بشرياً يعمل على مدار الساعة أو وقت رد مضموناً.', 'هاتف المكتب: +971 6 740 0128. واتساب: +971 50 203 6767. البريد الإلكتروني: info@inayadomestic.ae.', 'العنوان: جراند مول، الطابق الأرضي، الراشدية 3، عجمان. نسق الزيارة مع الفريق.', 'للشكوى، شارك الاتفاق والملاحظة ذات الصلة، واحتفظ بالمراسلات المكتوبة، واستخدم قنوات الدعم والتصعيد الرسمي القائمة.']
    }
  }
};

export const packageQuestions: { question: LocalizedText; answer: LocalizedText }[] = [
  {
    question: { en: 'What are the published package prices?', ar: 'ما أسعار الباقات المنشورة؟' },
    answer: packageSummary
  },
  {
    question: { en: 'Are the six-month and yearly prices per month?', ar: 'هل سعرا باقتي الستة أشهر والسنة شهريان؟' },
    answer: { en: 'Yes. AED 3,250 is the price per month with a 6-month commitment. AED 3,000 is the price per month with a 12-month commitment. Neither amount is the total price for the entire commitment. Record the commitment and payment schedule in the written agreement.', ar: 'نعم. 3,250 درهماً هو السعر الشهري مع الالتزام لمدة 6 أشهر. و3,000 درهم هو السعر الشهري مع الالتزام لمدة 12 شهراً. لا يمثل أي من المبلغين إجمالي سعر مدة الالتزام كاملة. سجل مدة الالتزام وجدول السداد في الاتفاق المكتوب.' }
  },
  {
    question: { en: 'Does live-out service cost more than live-in?', ar: 'هل سعر الخدمة غير المقيمة أعلى من المقيمة؟' },
    answer: packageArrangements
  },
  {
    question: { en: 'What do the weekly and monthly durations mean?', ar: 'ماذا تعني مدة الباقة الأسبوعية والشهرية؟' },
    answer: { en: 'The weekly price covers a 7-day service period and the monthly price a 30-day service period. The agreement records working hours, duties and rest. These durations do not mean continuous work or set daily hours for weekly or monthly arrangements.', ar: 'يغطي السعر الأسبوعي فترة خدمة من 7 أيام، والسعر الشهري فترة خدمة من 30 يوماً. يسجل الاتفاق ساعات العمل والمهام والراحة. لا تعني هذه المدد العمل المتواصل، ولا تحدد ساعات يومية للترتيب الأسبوعي أو الشهري.' }
  },
  {
    question: { en: 'What benefits apply to the managed monthly agreement?', ar: 'ما المزايا التي تسري ضمن اتفاق الخدمة الشهرية المدارة؟' },
    answer: packageSections.inclusions.body
  },
  {
    question: { en: 'Are materials, transport, accommodation and tax included?', ar: 'هل يشمل السعر المواد والنقل والسكن والضريبة؟' },
    answer: { en: 'The published package prices are the same for live-in and live-out service. The written agreement identifies responsibility for accommodation, meals, transport, cleaning products and equipment. The price breakdown identifies applicable tax and the final payable amount; do not assume an inclusion that has not been confirmed.', ar: 'أسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة. يحدد الاتفاق المكتوب مسؤولية السكن والطعام والنقل ومواد التنظيف والمعدات. ويبين تفصيل السعر الضريبة المنطبقة والمبلغ النهائي المستحق؛ فلا تفترض شمول بند لم يتم تأكيده.' }
  },
  {
    question: { en: 'What are the managed monthly payment terms?', ar: 'ما شروط سداد الخدمة الشهرية المدارة؟' },
    answer: packageSections.payments.body
  },
  {
    question: { en: 'Does INAYA accept Tabby?', ar: 'هل تقبل عناية الدفع عبر تابي؟' },
    answer: { en: 'INAYA accepts Tabby. Contact the INAYA office for current payment options.', ar: 'تقبل عناية الدفع عبر تابي. تواصل مع مكتب عناية لمعرفة خيارات الدفع المتاحة حالياً.' }
  },
  {
    question: { en: 'How are monthly cancellation and refunds handled?', ar: 'كيف يعالج إلغاء الخدمة الشهرية والاسترداد؟' },
    answer: packageSections.cancellation.body
  },
  {
    question: { en: 'What follow-up and replacement support applies?', ar: 'ما المتابعة ودعم الاستبدال المنطبقان؟' },
    answer: { en: packageSections.followUp.body.en + ' ' + packageSections.replacement.body.en, ar: packageSections.followUp.body.ar + ' ' + packageSections.replacement.body.ar }
  },
  {
    question: { en: 'When is a booking confirmed?', ar: 'متى يتم تأكيد الحجز؟' },
    answer: packageSections.commencement.body
  }
];

export function localizedPackageQuestions(lang: Lang): Pair[] {
  return packageQuestions.map(({ question, answer }) => ({ title: question[lang], text: answer[lang] }));
}

const managedRoleCopy: Record<string, LocalizedText> = {
  housemaid: { en: 'Housemaid support follows the individual cleaning, laundry, ironing and household duties agreed for the role. A maid role does not automatically include cooking, childcare and caregiving together.', ar: 'تتبع خدمة العاملة المنزلية مهام التنظيف والغسيل والكي والمهام المنزلية المتفق عليها للدور الفردي. ولا يشمل دور العاملة تلقائياً الطبخ ورعاية الأطفال والرعاية المنزلية جميعاً.' },
  'live-in-maid': { en: 'Choose live-in household support at the same published package price as live-out service. Agree the individual duties, accommodation, meals, working hours and rest in writing; living in does not mean continuous work.', ar: 'اختر دعماً منزلياً مع الإقامة بالسعر المنشور نفسه للخدمة غير المقيمة. اتفق كتابةً على المهام الفردية والسكن والطعام وساعات العمل والراحة؛ فالإقامة لا تعني العمل المستمر.' },
  'live-out-maid': { en: 'Choose live-out household support at the same published package price as live-in service. Agree the duties, work and rest schedule, accommodation and transport responsibilities in writing before confirmation.', ar: 'اختر دعماً منزلياً دون إقامة بالسعر المنشور نفسه للخدمة المقيمة. اتفق كتابةً على المهام وجدول العمل والراحة ومسؤوليات السكن والنقل قبل التأكيد.' },
  'full-time-maid': { en: 'Full-time household support follows an agreed work and rest schedule. The managed monthly service includes the worker’s agreed salary within its scope. Live-in and live-out arrangements have the same published package price.', ar: 'يتبع الدعم المنزلي بدوام كامل جدولاً متفقاً عليه للعمل والراحة. تشمل الخدمة الشهرية المدارة راتب العاملة المتفق عليه ضمن نطاقها. وسعر الباقة المنشور واحد للخدمة المقيمة وغير المقيمة.' },
  'monthly-maid-contract': monthlyPackageSummary,
  nanny: { en: 'Nanny options depend on the agreed childcare role and individual availability. Review relevant experience and communication, then agree the children’s routines, duties, supervision and schedule. A nanny is not automatically a cleaner, cook or licensed nurse.', ar: 'تعتمد خيارات المربية على دور رعاية الأطفال المتفق عليه والتوفر الفردي. راجع الخبرة المناسبة والتواصل، ثم اتفق على روتين الأطفال والمهام والإشراف والجدول. المربية ليست تلقائياً عاملة تنظيف أو طاهية أو ممرضة مرخصة.' },
  'elder-care': { en: 'Non-clinical caregiver options depend on the agreed role and availability. Define companionship, daily-routine assistance and household support individually. Medical treatment, nursing and medication management are outside this household role.', ar: 'تعتمد خيارات مقدمة الرعاية غير السريرية على الدور المتفق عليه والتوفر. حدد المرافقة والمساعدة في الروتين اليومي والدعم المنزلي بصورة فردية. العلاج الطبي والتمريض وإدارة الأدوية خارج هذا الدور المنزلي.' },
  'patient-care': { en: 'Household care support is non-clinical and follows the agreed individual duties. It does not provide a licensed nurse, therapist or specialist clinical treatment. Medical treatment, nursing and medication management are outside this service.', ar: 'دعم الرعاية المنزلية غير سريري ويتبع المهام الفردية المتفق عليها. ولا يقدم ممرضة مرخصة أو معالجة أو علاجاً سريرياً متخصصاً. لا تشمل هذه الخدمة العلاج الطبي أو التمريض أو إدارة الأدوية.' }
};

const separateServiceCopy: Record<string, LocalizedText> = {
  'experienced-maid': { en: 'Review the individual’s relevant household experience, communication and agreed duties. Nationality does not establish skill, and no universal experience threshold applies. Use the published package prices for the agreed service duration and confirm the individual scope and availability.', ar: 'راجع الخبرة المنزلية الفردية المناسبة والتواصل والمهام المتفق عليها. الجنسية لا تثبت المهارة، ولا ينطبق حد خبرة موحد. راجع أسعار الباقات المنشورة لمدة الخدمة المتفق عليها، وأكد النطاق الفردي والتوفر.' },
  'newborn-care': { en: 'Newborn support follows the individual non-clinical childcare role and the parents’ instructions. Review relevant experience and agree the routine, duties and schedule. The role does not establish nursing qualifications or cover specialist clinical care. Confirm the suitable package and written scope with INAYA.', ar: 'تتبع مساعدة رعاية المولود دور رعاية الأطفال الفردي غير السريري وتعليمات الوالدين. راجع الخبرة المناسبة واتفق على الروتين والمهام والجدول. لا يثبت الدور مؤهلاً تمريضياً ولا يشمل رعاية سريرية متخصصة. أكد الباقة المناسبة والنطاق المكتوب مع عناية.' },
  'companion-care': { en: 'Non-clinical companionship follows the agreed role and availability. Agree daily-routine assistance, supervision, work and rest individually. Clinical treatment is outside this household role. Review the published package for the chosen service period and record the scope in writing.', ar: 'تتبع المرافقة غير السريرية الدور المتفق عليه والتوفر. اتفق بصورة فردية على المساعدة في الروتين اليومي والإشراف والعمل والراحة. العلاج السريري خارج هذا الدور المنزلي. راجع الباقة المنشورة لفترة الخدمة المختارة وسجل النطاق كتابةً.' },
  'bespoke-household-management': { en: 'Describe the household staffing and coordination duties that need to be planned. Review each proposed role, the service period, location, availability and written costs. Multiple-worker or specialist requirements are not automatically included in one domestic-worker package.', ar: 'وضح مهام العمالة المنزلية والتنسيق المطلوب تخطيطها. راجع كل دور مقترح وفترة الخدمة والموقع والتوفر والتكاليف المكتوبة. لا تشمل باقة عاملة منزلية واحدة تلقائياً الاحتياجات متعددة العاملين أو المتخصصة.' },
  'on-demand-domestic-help': { en: shortPackageSummary.en + ' An urgent enquiry does not confirm immediate availability.', ar: shortPackageSummary.ar + ' الاستفسار العاجل لا يؤكد التوفر الفوري.' },
  'part-time-maid': shortPackageSummary,
  housekeeping: { en: shortPackageSummary.en + ' Routine housekeeping follows the agreed task list. Specialist deep cleaning and work outside that role require a separate agreed scope.', ar: shortPackageSummary.ar + ' يتبع التنظيف المنزلي المعتاد قائمة المهام المتفق عليها. يحتاج التنظيف العميق المتخصص والعمل خارج الدور إلى نطاق منفصل متفق عليه.' },
  babysitting: { en: 'Occasional babysitting and ongoing nanny care are different arrangements. Review the individual’s experience with the children’s ages, agree supervision duties and timing, and confirm the applicable published package and written scope. Monthly employment benefits do not automatically apply to a short visit.', ar: 'تختلف مجالسة الأطفال العرضية عن رعاية المربية المستمرة. راجع خبرة الفرد مع أعمار الأطفال، واتفق على مهام الإشراف والتوقيت، وأكد الباقة المنشورة المنطبقة والنطاق المكتوب. لا تسري مزايا التوظيف الشهرية تلقائياً على زيارة قصيرة.' },
  recruitment: { en: 'Separately contracted recruitment has its own itemised quotation, agreement and applicable statutory remedies. INAYA’s managed monthly service includes salary and applicable agency processing with no separate upfront recruitment/setup fee or security deposit; those terms do not automatically govern a separate recruitment contract.', ar: 'للاستقدام المتعاقد عليه منفصلاً عرض مفصل واتفاق وسبل إنصاف قانونية منطبقة خاصة به. تشمل خدمة عناية الشهرية المدارة الراتب وإجراءات الوكالة المنطبقة دون رسم استقدام أو تجهيز منفصل مقدماً أو تأمين نقدي؛ ولا تحكم هذه الشروط تلقائياً عقد استقدام منفصلاً.' },
  'maid-visa': { en: 'Applicable government fees, agency sponsorship, work-permit/residence, Emirates ID, required medical-fitness processing and the health-insurance premium are included within INAYA’s applicable managed monthly agreement. Visa-only services are separately contracted and itemised; requirements, charges and official decisions depend on the actual case.', ar: 'تشمل خدمة عناية ضمن اتفاقها الشهري المدار المنطبق الرسوم الحكومية والكفالة لدى الوكالة وإجراءات تصريح العمل والإقامة والهوية الإماراتية وفحص اللياقة الطبية المطلوب وقسط التأمين الصحي المنطبق. أما خدمات التأشيرة وحدها فيتعاقد عليها وتفصل تكاليفها بصورة مستقلة؛ وتعتمد المتطلبات والرسوم والقرارات الرسمية على الحالة الفعلية.' },
  'sponsorship-transfer': { en: 'The managed monthly service uses the applicable agency employment and sponsorship arrangement. A separately requested sponsorship transfer needs its own case review, lawful authorisation, written processing scope and itemised quotation; a monthly package price does not promise approval of a different transfer.', ar: 'تستخدم الخدمة الشهرية المدارة ترتيب التوظيف والكفالة المنطبق لدى الوكالة. ويحتاج طلب نقل كفالة منفصل إلى مراجعة الحالة والتصاريح النظامية ونطاق معالجة مكتوب وعرض مفصل؛ ولا يعني سعر الباقة الشهرية ضمان الموافقة على نقل مختلف.' },
  'maid-replacement': packageSections.replacement.body,
  'private-chefs': { en: 'Discuss specialist cooking duties through a written service scope. Routine maid duties do not automatically include a private-chef role. Confirm the individual experience, arrangement and written costs for the requested work.', ar: 'ناقش مهام الطبخ المتخصصة ضمن نطاق خدمة مكتوب. لا تشمل مهام العاملة الاعتيادية تلقائياً دور الطاهي الخاص. أكد الخبرة الفردية والترتيب والتكاليف المكتوبة للعمل المطلوب.' },
  'executive-nannies': { en: 'Assess individual childcare experience and communication against the agreed role. Confirm the routine, duties, package and availability without assuming a qualification or universal experience threshold. Complex household staffing requires its own written scope.', ar: 'قيم خبرة رعاية الأطفال الفردية والتواصل وفق الدور المتفق عليه. أكد الروتين والمهام والباقة والتوفر دون افتراض مؤهل أو حد خبرة موحد. تتطلب العمالة للاحتياجات المنزلية المعقدة نطاقاً مكتوباً خاصاً بها.' },
  'house-managers': { en: 'Define the household coordination duties, individual role requirements and review schedule in writing. Confirm the service period, availability and costs for the proposed arrangement. A household-management role is not automatically included in a general domestic-worker package.', ar: 'حدد كتابةً مهام التنسيق المنزلي ومتطلبات الدور الفردي وجدول المراجعة. أكد فترة الخدمة والتوفر والتكاليف للترتيب المقترح. لا تشمل باقة العمالة المنزلية العامة تلقائياً دور إدارة المنزل.' }
};

export function applyManagedServiceContent(slug: string, lang: Lang, copy: ServiceCopy): ServiceCopy {
  const role = managedRoleCopy[slug];
  const separate = separateServiceCopy[slug];
  if (!role && !separate) return copy;
  const ar = lang === 'ar';
  const relevantFaqs = copy.faqs.map((faq) => slug === 'on-demand-domestic-help' && ['Is pricing fixed?', 'هل الأسعار ثابتة؟'].includes(faq.title)
    ? { ...faq, text: shortPackageSummary[lang] + (ar ? ' تحدد الخدمات المتخصصة والإضافات المطلوبة خارج نطاق الباقة في عرض مكتوب منفصل، مع بيان الضريبة المنطبقة والمبلغ النهائي قبل التأكيد.' : ' Specialist services and requested additions outside the package scope are separately quoted in writing, with applicable tax and the final total stated before confirmation.') }
    : faq);
  if (role) {
    if (slug !== 'monthly-maid-contract') relevantFaqs.push(
      { title: ar ? 'هل أدفع راتب العاملة منفصلاً في الخدمة الشهرية؟' : 'Do I pay the worker’s salary separately in monthly service?', text: packageSections.responsibilities.points[lang][0] },
      { title: ar ? 'ما شروط السداد والإلغاء الشهري؟' : 'What are the monthly payment and cancellation terms?', text: packageSections.payments.body[lang] + ' ' + packageSections.cancellation.body[lang] },
      { title: ar ? 'ما المتابعة والاستبدال المشمولان؟' : 'What follow-up and replacement support are included?', text: packageSections.followUp.body[lang] + ' ' + packageSections.replacement.body[lang] }
    );
    return {
      ...copy,
      lead: role[lang],
      cards: [
        { title: ar ? 'توظيف الوكالة والراتب الشهري' : 'Agency employment and monthly salary', text: packageSections.responsibilities.body[lang] },
        { title: ar ? 'السداد والإلغاء الشهري' : 'Monthly payment and cancellation', text: packageSections.payments.body[lang] + ' ' + packageSections.cancellation.body[lang] },
        { title: ar ? 'خطة الخدمة والمتابعة' : 'Service plan and follow-up', text: packageSections.followUp.body[lang] }
      ],
      includedTitle: ar ? 'المهام المتفق عليها وعناصر الخدمة الشهرية المشمولة' : 'Agreed duties and included monthly service components',
      included: [ar ? 'تحدد المهام الفردية في نطاق الدور المكتوب؛ ولا يؤدي كل عامل جميع المهام المذكورة معاً.' : 'Individual duties follow the written role scope; not every worker performs all listed tasks together.', ...copy.included, ...packageSections.inclusions.points[lang]],
      pricingText: monthlyPackageSummary[lang] + ' ' + packageArrangements[lang],
      pricing: packagePricingCards(lang, 'monthly'),
      journeyText: copy.journeyText + (ar ? ' أكد المرشحة والنطاق كتابةً؛ تبدأ الخدمة بعد الاختيار والتصاريح النظامية المطلوبة. يقدم أي ملف بديل لأخذ موافقتك.' : ' Confirm the candidate and scope in writing; service begins after selection and required lawful authorisation. Any alternative profile is presented for your consent.'),
      finalText: copy.journeyText,
      faqs: relevantFaqs
    };
  }
  if (slug !== 'maid-replacement') relevantFaqs.push({ title: ar ? 'ما الباقة والنطاق اللذان يجب تأكيدهما؟' : 'Which package and scope should I confirm?', text: separate[lang] });
  const shortVisit = ['part-time-maid', 'housekeeping', 'on-demand-domestic-help', 'babysitting'].includes(slug);
  return {
    ...copy,
    pricingText: separate[lang],
    ...(shortVisit ? { pricing: packagePricingCards(lang, 'short') } : {}),
    faqs: relevantFaqs
  };
}
