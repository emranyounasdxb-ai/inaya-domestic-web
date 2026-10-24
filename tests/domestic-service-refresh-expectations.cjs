// Exact metadata for the owner-authorised domestic-worker-only service update.
// All other historical page identities and price mentions retain their prior guards.
const metadata = {
  'en/services/recruitment': {
    title: 'Tadbeer Domestic Worker Recruitment in Ajman | INAYA',
    description: 'INAYA Tadbeer centre in Ajman for domestic-worker recruitment and related services. Review household needs, individual profiles, availability and written terms.'
  },
  'ar/services/recruitment': {
    title: 'تدبير واستقدام العمالة المنزلية في عجمان | عناية',
    description: 'مركز عناية تدبير في عجمان للاستقدام والخدمات المنزلية والطباعة المرتبطة بالعمالة المنزلية. راجع احتياج الأسرة والتوفر والشروط المكتوبة.'
  },
  'en/services/housekeeping': {
    title: 'Home Cleaning in Ajman: Four or Eight Hours | INAYA',
    description: 'INAYA home cleaning in Ajman: 4 hours for AED 120 or 8 hours for AED 200. Plan priority tasks and confirm access, supplies, availability and written scope.'
  },
  'ar/services/housekeeping': {
    title: 'تنظيف المنازل في عجمان لأربع أو ثماني ساعات | عناية',
    description: 'تنظيف المنازل في عجمان مع عناية: 4 ساعات مقابل 120 درهماً أو 8 ساعات مقابل 200 درهم. جهز الأولويات وأكد المستلزمات والنطاق قبل الحجز.'
  },
  'en/services/maid-visa': {
    title: 'Domestic Worker Visa Typing and Processing in Ajman | INAYA',
    description: 'INAYA domestic-worker visa typing in Ajman: applications, renewal, cancellation, status and contract-related processing. Confirm case requirements, scope and fees.'
  },
  'ar/services/maid-visa': {
    title: 'طباعة وإجراءات تأشيرة العمالة المنزلية في عجمان | عناية',
    description: 'طباعة وإجراءات تأشيرة العمالة المنزلية في عجمان مع عناية: تقديم وتجديد وإلغاء وتعديل وضع ومعاملات العقد. أكد النطاق والرسوم لحالتك.'
  },
  'en/maid-services-ajman': {
    title: 'Maid Services in Ajman | Domestic Workers Ajman | INAYA',
    description: 'INAYA Tadbeer centre in Ajman for domestic-worker recruitment, cleaning visits and related visa typing. Confirm duties, availability and case-specific written scope.'
  },
  'ar/maid-services-ajman': {
    title: 'خدمات خادمات في عجمان | عمالة منزلية عجمان | عناية',
    description: 'مركز عناية تدبير في عجمان للاستقدام والتنظيف وطباعة معاملات العمالة المنزلية. أكد المهام والتوفر والنطاق المكتوب المناسب لحالتك.'
  }
};

// Existing package cards and FAQs remain. The new cleaning lead repeats only
// the two already-approved visit totals, adding one mention of each.
// The services hub's cleaning card also displays each approved visit total once.
const priceMentions = {
  'en/services': ['AED 120', 'AED 200'],
  'ar/services': ['120 درهم', '200 درهم'],
  'en/services/housekeeping': [...Array(3).fill('AED 1,120'), ...Array(5).fill('AED 120'), ...Array(5).fill('AED 200')],
  'ar/services/housekeeping': [...Array(3).fill('1,120 درهم'), ...Array(5).fill('120 درهم'), ...Array(5).fill('200 درهم')]
};

// Full reviewed hub summaries are a bounded commercial-copy fixture, not an
// allowance for arbitrary editorial repetition or additional placements.
const hubSummaries = {
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
module.exports = { metadata, priceMentions, hubSummaries };
