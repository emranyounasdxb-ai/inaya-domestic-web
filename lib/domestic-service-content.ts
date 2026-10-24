import type { Lang, ServiceCopy } from './service-page-copy';

// Owner-confirmed scope: domestic-worker Tadbeer services and related typing.
// These facts do not establish Amer, Tasheel or ICP-centre affiliation.
export const domesticServiceSummaries: Record<string, Record<Lang, string>> = {
  recruitment: {
    en: 'INAYA Tadbeer centre in Ajman supports domestic-worker recruitment, individual profile review and household service enquiries. Confirm the role, availability, employment arrangement and written terms.',
    ar: 'يدعم مركز عناية تدبير في عجمان استقدام العمالة المنزلية ومراجعة الملفات الفردية وطلبات الخدمة المنزلية. أكد الدور والتوفر وترتيب التوظيف والشروط المكتوبة.'
  },
  housekeeping: {
    en: 'Cleaning and housekeeping visits for agreed household tasks: 4 hours for AED 120 or 8 hours for AED 200. Confirm priorities, access, supplies, availability and the final written scope.',
    ar: 'زيارات لتنظيف المنزل وترتيبه وفق المهام المتفق عليها: 4 ساعات مقابل 120 درهماً أو 8 ساعات مقابل 200 درهم. أكد الأولويات والدخول والمستلزمات والتوفر والنطاق النهائي كتابةً.'
  },
  'maid-visa': {
    en: 'Domestic-worker visa typing and document processing in Ajman: applications, renewal, cancellation, status and contract-related requests, with Emirates ID, medical and insurance processing as applicable. Scope, fees and official outcomes depend on the case.',
    ar: 'طباعة طلبات تأشيرة العمالة المنزلية ومعالجة مستنداتها في عجمان: الطلبات والتجديد والإلغاء وتعديل الوضع ومعاملات العقد، مع إجراءات الهوية والفحص الطبي والتأمين بحسب الحالة. يعتمد النطاق والرسوم والقرار الرسمي على الحالة.'
  }
};

export const domesticServiceReferences: Record<string, { href: string; label: Record<Lang, string> }[]> = {
  recruitment: [{
    href: 'https://mohre.gov.ae/en/services/approved-services-centers-new1/inaya-domestic-workers-services-s-p-s-l-l-c',
    label: { en: 'MoHRE public centre record for INAYA', ar: 'سجل مركز عناية العام لدى وزارة الموارد البشرية والتوطين' }
  }],
  'maid-visa': [{
    href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64',
    label: { en: 'ICP residence-permit service: check the category and official steps', ar: 'خدمة إصدار الإقامة لدى الهيئة: تحقق من الفئة والخطوات الرسمية' }
  }]
};

export function applyDomesticServiceContent(slug: string, lang: Lang, copy: ServiceCopy): ServiceCopy {
  const ar = lang === 'ar';
  if (slug === 'recruitment') return {
    ...copy,
    title: ar ? 'تدبير واستقدام العمالة المنزلية في عجمان' : 'Tadbeer Domestic Worker Recruitment in Ajman',
    badge: ar ? 'مركز عناية تدبير في عجمان' : 'INAYA Tadbeer centre in Ajman',
    lead: domesticServiceSummaries.recruitment[lang],
    meta: ar ? 'مركز عناية تدبير في عجمان للاستقدام والخدمات المنزلية والطباعة المرتبطة بالعمالة المنزلية. راجع احتياج الأسرة والتوفر والشروط المكتوبة.' : 'INAYA Tadbeer centre in Ajman for domestic-worker recruitment and related services. Review household needs, individual profiles, availability and written terms.',
    whatText: ar
      ? 'ابدأ بالدور والمهام وترتيب العمل المطلوب. يدعم مركز عناية تدبير في عجمان استفسارات الاستقدام والتنظيف وطباعة معاملات العمالة المنزلية. اختيار مرشحة وحجز زيارة تنظيف ومعالجة مستندات عاملة موجودة طلبات مختلفة؛ أكد نطاق الخدمة والتكاليف والمسؤوليات المناسبة لكل طلب.'
      : 'Start with the role, duties and working arrangement you need. INAYA’s Ajman Tadbeer centre handles recruitment, cleaning and domestic-worker document-typing enquiries. Choosing a candidate, booking a cleaning visit and processing an existing worker’s documents are different requests; confirm the scope, costs and responsibilities for the selected service.',
    faqs: [...copy.faqs, {
      title: ar ? 'كيف أختار خدمة تدبير المناسبة لطلبي؟' : 'How do I choose the right Tadbeer service for my request?',
      text: ar ? 'للاستقدام، وضح المهام وترتيب العمل والمنطقة. وللتنظيف، حدد الأولويات ومدة الزيارة. وللطباعة، حدد معاملة العاملة المنزلية ووضع الكفيل. أكد التوفر والنطاق والشروط كتابةً؛ فالاستفسار لا يثبت الحجز أو الموافقة الرسمية.' : 'For recruitment, explain duties, the working arrangement and location. For cleaning, identify priorities and visit length. For typing, identify the domestic-worker transaction and sponsor situation. Confirm availability, scope and terms in writing; an enquiry does not establish a booking or official approval.'
    }]
  };
  if (slug === 'housekeeping') return {
    ...copy,
    title: ar ? 'تنظيف المنازل في عجمان لأربع أو ثماني ساعات' : 'Home Cleaning in Ajman: Four or Eight Hours',
    lead: domesticServiceSummaries.housekeeping[lang],
    meta: ar ? 'تنظيف المنازل في عجمان مع عناية: 4 ساعات مقابل 120 درهماً أو 8 ساعات مقابل 200 درهم. جهز الأولويات وأكد المستلزمات والنطاق قبل الحجز.' : 'INAYA home cleaning in Ajman: 4 hours for AED 120 or 8 hours for AED 200. Plan priority tasks and confirm access, supplies, availability and written scope.',
    whatText: ar ? 'نظم التنظيف وفق الغرف والنتائج المطلوبة، مع إدراج الغسيل أو الكي عند الاتفاق. جهز قائمة بالأولويات والأسطح الحساسة وتعليمات الأجهزة، وأكد مسؤولية المواد والمعدات. مدة الزيارة ليست ضماناً لعدد غرف ثابت، ولا تشمل تلقائياً التنظيف العميق المتخصص أو العمل على ارتفاع أو رفع الأثاث الثقيل.' : 'Plan cleaning around named rooms and desired results, adding laundry or ironing when agreed. Prepare priorities, delicate-surface instructions and appliance guidance, and confirm who provides products and equipment. Visit length does not guarantee a fixed room count or automatically include specialist deep cleaning, high-access work or heavy lifting.',
    journeyText: ar ? 'قبل الحجز، حدد المنطقة والدخول والأولوية الأولى وما يمكن تأجيله. بعد الزيارة، سجل المهام المكتملة أو الجزئية أو المرحلة وناقش أي تغيير قبل الاتفاق.' : 'Before booking, identify the location, access, first priority and work that can wait. At handover, record completed, partial or carried-forward tasks and discuss any change before agreeing.'
  };
  if (slug === 'maid-visa') return {
    ...copy,
    title: ar ? 'طباعة وإجراءات تأشيرة العمالة المنزلية في عجمان' : 'Domestic Worker Visa Typing and Processing in Ajman',
    badge: ar ? 'طباعة معاملات العمالة المنزلية' : 'Domestic-worker application typing',
    lead: domesticServiceSummaries['maid-visa'][lang],
    meta: ar ? 'طباعة وإجراءات تأشيرة العمالة المنزلية في عجمان مع عناية: تقديم وتجديد وإلغاء وتعديل وضع ومعاملات العقد. أكد النطاق والرسوم لحالتك.' : 'INAYA domestic-worker visa typing in Ajman: applications, renewal, cancellation, status and contract-related processing. Confirm case requirements, scope and fees.',
    whatText: ar ? 'تقدم عناية طباعة الطلبات ومعالجة المستندات المرتبطة بالعمالة المنزلية. يشمل الدعم إرشاد المستندات وتقديم الطلبات والمتابعة والتجديد والإلغاء وتعديل الوضع ومعاملات العقد وإجراءات الهوية الإماراتية وتنسيق الفحص الطبي والتأمين بحسب الحالة. حدد الإجراء أولاً لتأكيد الخطوات والأهلية والمسؤوليات والرسوم كتابةً. الفحص الطبي إجراء يتم تنسيقه، وليس علاجاً تقدمه عناية.' : 'INAYA provides application typing and document processing related to domestic workers. Support covers document guidance, application submission and follow-up, renewal, cancellation, status change, contract-related requests, Emirates ID processing, medical-processing coordination and insurance processing as applicable. Identify the action first so the steps, eligibility, responsibilities and fees can be confirmed in writing. Medical processing is coordination, not treatment provided by INAYA.',
    included: [...copy.included, ar ? 'طباعة الطلبات المرتبطة بالعمالة المنزلية ومراجعة البيانات قبل التقديم' : 'Domestic-worker application typing and data review before submission', ar ? 'معاملات التجديد والإلغاء والعقد والمتابعة وفق الحالة والنطاق المتفق عليه' : 'Renewal, cancellation, contract-related requests and follow-up according to the case and agreed scope'],
    faqs: [...copy.faqs, {
      title: ar ? 'هل الطباعة وتقديم الطلب يعنيان الموافقة؟' : 'Do typing and submission mean the application is approved?',
      text: ar ? 'لا. افصل الإعداد والطباعة والتقديم والمتابعة عن قرار الجهة المختصة. احتفظ بمرجع الطلب والإيصال والنتيجة الرسمية عند صدورها. تعتمد الأهلية والمستندات والرسوم والمدة على الحالة، ولا توجد ضمانات للموافقة أو تاريخ الإنجاز.' : 'No. Separate preparation, typing, submission and follow-up from the responsible authority’s decision. Keep the application reference, receipt and actual official result when issued. Eligibility, documents, fees and timing depend on the case; approval and completion dates are not guaranteed.'
    }, {
      title: ar ? 'ما الذي أرسله في الاستفسار الأول؟' : 'What should I send in the first enquiry?',
      text: ar ? 'ابدأ بالإمارة والإجراء المطلوب ووضع العاملة والكفيل ومرحلة الطلب. أكد قناة مشاركة المستندات مع الفريق قبل إرسالها، ولا تضع جوازات أو هويات أو بيانات دخول أو رموز تحقق في نموذج الموقع العام.' : 'Start with the emirate, requested action, worker and sponsor situation and application stage. Confirm the document-sharing channel with the team before sending records; do not put passports, identity documents, login credentials or one-time passwords in the general website form.'
    }]
  };
  return copy;
}
