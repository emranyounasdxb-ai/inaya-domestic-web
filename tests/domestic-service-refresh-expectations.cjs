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
const priceMentions = {
  'en/services/housekeeping': [...Array(3).fill('AED 1,120'), ...Array(5).fill('AED 120'), ...Array(5).fill('AED 200')],
  'ar/services/housekeeping': [...Array(3).fill('1,120 درهم'), ...Array(5).fill('120 درهم'), ...Array(5).fill('200 درهم')]
};
module.exports = { metadata, priceMentions };
