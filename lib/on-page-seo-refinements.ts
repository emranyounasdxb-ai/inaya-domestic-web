type Localized = { en: string; ar: string };

// Reviewed summaries of existing services and owner-approved package terms.
// A monthly amount always states its commitment; no training or availability is promised.
export const onPageSeoRefinements: Record<string, { title: Localized; description: Localized }> = {
  '': {
    title: { en: 'Maid Agency in Ajman & UAE | Housemaids & Nannies | INAYA', ar: 'خادمات ومربيات في عجمان والإمارات | عناية' },
    description: {
      en: 'INAYA maid services in Ajman & UAE. 4 hours AED 120; AED 3,000/month with a 12-month commitment. Call 06 740 0128; WhatsApp 050 203 6767.',
      ar: 'خدمات عناية للخادمات في عجمان والإمارات. 4 ساعات بـ120 درهماً، أو 3,000 درهم شهرياً بالتزام 12 شهراً. اتصل 06 740 0128 أو واتساب 050 203 6767.'
    }
  },
  about: {
    title: { en: 'About INAYA | Domestic Worker Centre, Grand Mall Ajman', ar: 'عن عناية | مركز العمالة المنزلية في جراند مول عجمان' },
    description: {
      en: 'Meet INAYA’s MOHRE-listed domestic worker services centre at Grand Mall, Ajman. Facility No. 2637187. Maid, nanny and domestic-worker typing support.',
      ar: 'تعرف على مركز عناية لخدمات العمالة المنزلية المدرج لدى الوزارة في جراند مول عجمان، رقم المنشأة 2637187. خادمات ومربيات وطباعة معاملات العمالة المنزلية.'
    }
  },
  contact: {
    title: { en: 'Contact INAYA | Grand Mall Ajman | 06 740 0128', ar: 'تواصل مع عناية | جراند مول عجمان | 06 740 0128' },
    description: {
      en: 'Visit INAYA at Grand Mall, Ground Floor, Al Rashidiya 3, Ajman. Sat–Thu 9am–9pm; Friday closed. Call 06 740 0128 or WhatsApp 050 203 6767.',
      ar: 'زر عناية في جراند مول، الطابق الأرضي، الراشدية 3، عجمان. السبت–الخميس 9 صباحاً–9 مساءً؛ الجمعة مغلق. اتصل 06 740 0128 أو واتساب 050 203 6767.'
    }
  },
  'services/housemaid': {
    title: { en: 'Housemaid Services in Ajman & UAE | Live-in/Out | INAYA', ar: 'خدمات خادمات في عجمان والإمارات | مقيمة وغير مقيمة | عناية' },
    description: {
      en: 'Housemaid support in Ajman and across the UAE for cleaning, laundry and home routines. Live-in or live-out options. WhatsApp 050 203 6767.',
      ar: 'دعم الخادمات للتنظيف والغسيل وروتين المنزل في عجمان وجميع الإمارات. خيارات مقيمة وغير مقيمة حسب احتياج الأسرة. واتساب 050 203 6767.'
    }
  },
  'services/nanny': {
    title: { en: 'Nanny Services in Ajman & UAE | Childcare Support | INAYA', ar: 'خدمات مربيات في عجمان والإمارات | دعم رعاية الأطفال | عناية' },
    description: {
      en: 'Nanny and childcare support in Ajman and across the UAE. Match your child’s routine with individual experience. WhatsApp 050 203 6767.',
      ar: 'دعم المربيات ورعاية الأطفال في عجمان وجميع الإمارات. حدد روتين طفلك واحتياجات الأسرة وراجع خبرة كل مرشحة. واتساب 050 203 6767.'
    }
  },
  'services/part-time-maid': {
    title: { en: 'Part-Time Maid Ajman | 4 Hours AED 120 | INAYA', ar: 'خادمة بالساعة في عجمان | 4 ساعات بـ120 درهماً | عناية' },
    description: {
      en: 'Part-time maid visits in Ajman and UAE: 4 hours AED 120 or 8 hours AED 200. Confirm tasks and availability. WhatsApp 050 203 6767.',
      ar: 'زيارات خادمة بالساعة في عجمان والإمارات: 4 ساعات بـ120 درهماً أو 8 ساعات بـ200. أكد المهام والتوفر مع الفريق. واتساب 050 203 6767.'
    }
  },
  'services/maid-visa': {
    title: { en: 'Maid Visa Typing in Ajman | Renewal & Cancellation | INAYA', ar: 'طباعة تأشيرة خادمة في عجمان | التجديد والإلغاء | عناية' },
    description: {
      en: 'Domestic-worker visa typing, renewal and cancellation support at INAYA, Grand Mall Ajman. Authority decisions apply. Call 06 740 0128.',
      ar: 'دعم طباعة معاملات تأشيرة العمالة المنزلية والتجديد والإلغاء في عناية، جراند مول عجمان. القرارات للجهات المختصة. اتصل 06 740 0128.'
    }
  },
  'services/executive-nannies': {
    title: { en: 'Executive Nanny Services in Ajman & UAE | INAYA', ar: 'خدمات مربيات تنفيذيات في عجمان والإمارات | عناية' },
    description: {
      en: 'Plan childcare routines and household coordination with INAYA’s executive nanny service in Ajman and UAE. Review individual experience. Call 06 740 0128.',
      ar: 'خطط لروتين رعاية الأطفال وتنسيق المنزل مع خدمة المربيات التنفيذيات من عناية في عجمان والإمارات. راجع الخبرة الفردية. اتصل 06 740 0128.'
    }
  }
};

// Hub titles already describe their scope; refine the enquiry benefit and CTA only.
export const onPageDescriptionRefinements: Record<string, Localized> = {
  services: {
    en: 'Find maid, nanny, cooking and domestic-worker typing services with INAYA in Ajman & UAE. 4-hour visits AED 120. WhatsApp 050 203 6767.',
    ar: 'اختر خدمات الخادمات والمربيات والطبخ وطباعة معاملات العمالة المنزلية مع عناية في عجمان والإمارات. 4 ساعات بـ120 درهماً. واتساب 050 203 6767.'
  },
  'service-areas': {
    en: 'Explore INAYA maid and nanny service guides for Ajman and all seven emirates. Confirm local availability. Call 06 740 0128; WhatsApp 050 203 6767.',
    ar: 'استكشف أدلة خدمات عناية للخادمات والمربيات في عجمان والإمارات السبع. أكد التوفر في منطقتك. اتصل 06 740 0128 أو واتساب 050 203 6767.'
  }
};

export const serviceHeadingRefinements: Record<string, Localized> = {
  housemaid: { en: 'Housemaid Services in Ajman & Across the UAE', ar: 'خدمات الخادمات في عجمان وجميع أنحاء الإمارات' },
  nanny: { en: 'Nanny Services in Ajman & UAE', ar: 'خدمات المربيات في عجمان والإمارات' },
  'part-time-maid': { en: 'Part-Time Maid Services in Ajman & UAE', ar: 'خدمات الخادمات بالساعة في عجمان والإمارات' },
  'maid-visa': { en: 'Domestic-Worker Visa Typing in Ajman', ar: 'طباعة معاملات تأشيرة العمالة المنزلية في عجمان' }
};
