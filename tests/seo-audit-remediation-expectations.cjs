const assert = require('node:assert/strict');

// Exact approved content and font-loading changes; every other historical source line remains protected.
const patches = {
  "components/Navbar.tsx": [
    [
      "            href={switchedPath}\n",
      "            href={switchedPath}\n            prefetch={false}\n"
    ]
  ],
  "app/[locale]/layout.tsx": [
    [
      "const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });\nconst plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });\nconst notoSansArabic = Noto_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-arabic-body', display: 'swap' });\nconst ibmPlexSansArabic = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-arabic-heading', display: 'swap' });\n",
      "// Inline font CSS discovers the faces used by this locale without preloading unused languages or weights.\nconst inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap', preload: false });\nconst plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading', display: 'swap', preload: false });\nconst notoSansArabic = Noto_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-arabic-body', display: 'swap', preload: false });\nconst ibmPlexSansArabic = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-arabic-heading', display: 'swap', preload: false });\n"
    ],
    [
      "import '../globals.css';\n",
      "import '../globals.css';\nimport '../arabic-body-font.css';\nimport '../arabic-heading-font.css';\n"
    ],
    [
      '      <body className={`${inter.variable} ${plusJakarta.variable} ${notoSansArabic.variable} ${ibmPlexSansArabic.variable}`}>',
      '      <body className={`${inter.variable} ${plusJakarta.variable} ${notoSansArabic.variable} ${ibmPlexSansArabic.variable}`} style={locale === \'ar\' ? { \'--font-arabic-body\': `"INAYA Arabic Body", ${notoSansArabic.style.fontFamily}`, \'--font-arabic-heading\': `"INAYA Arabic Heading", ${ibmPlexSansArabic.style.fontFamily}` } as React.CSSProperties : undefined}>'
    ],
    [
      "import type { Metadata } from 'next';\n",
      "import type { Metadata } from 'next';\nimport { preload } from 'react-dom';\n"
    ],
    [
      "  const dir = locale === 'ar' ? 'rtl' : 'ltr';\n",
      "  const dir = locale === 'ar' ? 'rtl' : 'ltr';\n  if (locale === 'ar') {\n    preload('/fonts/inaya-arabic-body-core-eb3aa9ff2a7a.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });\n    preload('/fonts/inaya-arabic-body-latin.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });\n    preload('/fonts/inaya-arabic-heading-700.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });\n  }\n"
    ]
  ],
  "lib/services.ts": [
    [
      "    short: { en: 'Cost-effective monthly plans.', ar: 'خطط شهرية اقتصادية.' },\n    description: { en: 'Affordable monthly maid contracts with regular scheduled cleaning visits, defined duties and priority household support.', ar: 'عقود خادمة شهرية بأسعار مناسبة مع زيارات تنظيف منتظمة ومهام واضحة ودعم منزلي ذي أولوية.' }\n",
      "    short: { en: 'Discuss monthly maid contracts and package terms.', ar: 'ناقش عقود الخادمات الشهرية وشروط الباقات.' },\n    description: { en: 'Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package.', ar: 'تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها.' }\n"
    ],
    [
      "    short: { en: 'Hassle-free visa processing.', ar: 'معالجة تأشيرة دون عناء.' },\n",
      "    short: { en: 'Confirm case-specific visa support, requirements and fees with INAYA.', ar: 'أكد مع عناية دعم التأشيرة المتاح لحالتك والمتطلبات والرسوم.' },\n"
    ],
    [
      "    description: { en: 'Full assistance with maid visa application, renewal, sponsorship steps and documentation guidance as per UAE regulations.', ar: 'مساعدة كاملة في تقديم وتأشيرة الخادمة والتجديد وخطوات الكفالة وإرشاد المستندات وفق لوائح الإمارات.' }\n",
      "    description: { en: 'Contact INAYA to confirm the support available for your case, applicable requirements and fees.', ar: 'تواصل مع عناية للتأكد من الدعم المتاح لحالتك والمتطلبات والرسوم المطبقة.' }\n"
    ],
    [
      "    short: { en: 'Easy sponsorship transfer.', ar: 'نقل كفالة سهل.' },\n",
      "    short: { en: 'Ask INAYA about support, requirements and fees for your transfer enquiry.', ar: 'استفسر من عناية عن الدعم والمتطلبات والرسوم لطلب نقل الكفالة.' },\n"
    ],
    [
      "    description: { en: 'Smooth maid transfer and sponsorship change services handled with clear documentation guidance and UAE process support.', ar: 'خدمات نقل الخادمة وتغيير الكفالة بسلاسة مع إرشاد واضح للمستندات ودعم إجراءات الإمارات.' }\n",
      "    description: { en: 'Contact INAYA to confirm the support available for your case, applicable requirements and fees.', ar: 'تواصل مع عناية للتأكد من الدعم المتاح لحالتك والمتطلبات والرسوم المطبقة.' }\n"
    ]
  ],
  "lib/service-content-briefs.ts": [
    [
      "    overview: { en: 'A monthly maid enquiry concerns recurring visits and a defined household task plan. Compare the proposed schedule and duties with your actual routine; the word monthly alone does not explain the visit pattern or service scope.', ar: 'يتعلق طلب العقد الشهري بزيارات متكررة وخطة مهام منزلية محددة. قارن الجدول والمهام المقترحة بروتينك الفعلي؛ فكلمة شهري وحدها لا توضح نمط الزيارات أو نطاق الخدمة.' },\n    prepare: { en: 'Bring a recurring cleaning checklist and preferred visit pattern. Review the confirmed agreement for included duties and support rather than treating this guide as a fixed package quotation.', ar: 'جهز قائمة التنظيف المتكرر ونمط الزيارات المفضل. راجع الاتفاق المؤكد لمعرفة المهام والدعم المشمول، ولا تعتبر هذا الدليل عرض سعر ثابتاً لباقة.' }, related: ['part-time-maid', 'housekeeping', 'full-time-maid']\n",
      "    overview: { en: 'Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package.', ar: 'تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها.' },\n    prepare: { en: 'Describe your household needs and the arrangement you want to discuss. Review the proposed duties, schedule, costs and terms in writing before selecting a monthly package.', ar: 'صف احتياجات المنزل والترتيب المطلوب مناقشته. راجع المهام والجدول والتكاليف والشروط المقترحة كتابةً قبل اختيار باقة شهرية.' }, related: ['part-time-maid', 'housekeeping', 'full-time-maid']\n"
    ],
    [
      "    overview: { en: 'Maid visa assistance is a document-and-process guidance enquiry, not a promise of approval. Explain the current situation and the selected service path so that the team can clarify the checklist applicable to the case.', ar: 'مساعدة تأشيرة الخادمة طلب لإرشاد المستندات والإجراءات، وليست وعداً بالموافقة. وضح الوضع الحالي ومسار الخدمة المختار ليشرح الفريق القائمة المناسبة للحالة.' },\n",
      "    overview: { en: 'Contact INAYA to confirm the support available for your case, applicable requirements and fees.', ar: 'تواصل مع عناية للتأكد من الدعم المتاح لحالتك والمتطلبات والرسوم المطبقة.' },\n"
    ],
    [
      "    overview: { en: 'Sponsorship transfer guidance concerns an existing arrangement, the document status and responsibilities to clarify. Keep the transfer enquiry separate from choosing a new profile or assuming a visa outcome.', ar: 'يتعلق إرشاد نقل الكفالة بترتيب قائم وحالة المستندات والمسؤوليات المطلوب توضيحها. افصل طلب النقل عن اختيار ملف جديد أو افتراض نتيجة للتأشيرة.' },\n",
      "    overview: { en: 'Contact INAYA to confirm the support available for your case, applicable requirements and fees.', ar: 'تواصل مع عناية للتأكد من الدعم المتاح لحالتك والمتطلبات والرسوم المطبقة.' },\n"
    ]
  ]
};

const metadata = {
  "en/services/live-in-maid": {
    "description": "Discuss live-in maid services in the UAE with INAYA. Review household duties, accommodation and work arrangements before choosing a profile."
  },
  "en/services/live-out-maid": {
    "description": "Explore live-out maid services in the UAE with INAYA. Discuss cleaning, laundry, working hours and access without accommodation in your home."
  },
  "en/services/housemaid": {
    "description": "Discuss housemaid support in the UAE with INAYA for cleaning, laundry and daily home tasks. Confirm the duties and arrangement for your household."
  },
  "en/services/housekeeping": {
    "description": "Explore cleaning and housekeeping support in the UAE with INAYA. Describe the rooms, laundry and organization tasks you need."
  },
  "en/services/full-time-maid": {
    "description": "Discuss full-time maid services in the UAE with INAYA. Review daily duties, working hours and accommodation separately before agreeing."
  },
  "en/services/part-time-maid": {
    "description": "Discuss part-time maid services in the UAE with INAYA. Set cleaning and laundry priorities, preferred hours and the scope of your request."
  },
  "en/services/on-demand-domestic-help": {
    "description": "Ask INAYA about on-demand household help in the UAE. Describe your occasion, tasks and preferred date to confirm suitable options."
  },
  "en/services/nanny": {
    "description": "Discuss nanny services in the UAE with INAYA. Share your child’s age, routine and care needs, and review relevant individual experience."
  },
  "en/services/executive-nannies": {
    "description": "Explore executive nanny enquiries with INAYA in the UAE. Discuss childcare priorities, household coordination and individual experience."
  },
  "en/services/newborn-care": {
    "description": "Discuss newborn-care support in the UAE with INAYA. Share your baby’s routine, parent instructions and the practical help you need."
  },
  "en/services/private-chefs": {
    "description": "Explore private chef enquiries in the UAE with INAYA. Discuss menus, home dining preferences and the cooking role you need."
  },
  "en/services/personal-chef": {
    "description": "Discuss a personal chef or cook for your UAE home with INAYA. Share meal preferences, dietary requirements and the proposed schedule."
  },
  "en/services/house-managers": {
    "description": "Discuss household management in the UAE with INAYA. Review home routines, coordination needs and the responsibilities to agree."
  },
  "en/services/patient-care": {
    "description": "Discuss non-clinical home support with INAYA in the UAE for daily routines, practical household help and companionship."
  },
  "en/services/recruitment": {
    "description": "Discuss domestic worker recruitment in the UAE with INAYA. Define the household role and review individual profiles against your needs."
  },
  "en/services/experienced-maid": {
    "description": "Discuss experienced maid enquiries in the UAE with INAYA. Compare individual cleaning, cooking or childcare experience with your household needs."
  },
  "en/services/background-verification": {
    "description": "Discuss maid background guidance in the UAE with INAYA. Ask which identity details, documents and experience notes can be reviewed."
  },
  "en/services/bespoke-household-management": {
    "description": "Discuss bespoke household management with INAYA in the UAE. Describe the home routines, roles and coordination you want to review."
  },
  "en/services/floral-styling": {
    "description": "Explore floral styling enquiries with INAYA in the UAE. Describe the home space or occasion and the presentation you want to discuss."
  },
  "en/services/relocation-support": {
    "description": "Discuss household relocation support with INAYA in the UAE. Describe the moving-day and settling-in tasks you want to review."
  },
  "en/services/pet-care-specialists": {
    "description": "Discuss pet-care support with INAYA in the UAE. Share your pet’s routine and the practical duties and experience needed for your request."
  },
  "en/services/event-staffing": {
    "description": "Discuss household event support with INAYA in the UAE. Describe the occasion, guest-related duties and coordination you need."
  },
  "en/maid-source-countries/philippines-maid-uae": {
    "description": "Compare Philippines domestic worker profiles with INAYA in the UAE. Discuss individual experience, communication and the household role you need."
  },
  "en/maid-source-countries/kenyan-maid-uae": {
    "description": "Compare Kenya domestic worker profiles with INAYA in the UAE. Review relevant childcare or household experience and communication needs."
  },
  "en/maid-source-countries/ghanaian-maid-uae": {
    "description": "Compare Ghana domestic worker profiles with INAYA in the UAE. Discuss your home routine and review each person’s experience and communication."
  },
  "en/maid-source-countries/indonesian-maid-uae": {
    "description": "Compare Indonesia domestic worker profiles with INAYA in the UAE. Review individual housekeeping or cooking experience against your requirements."
  },
  "en/services/sponsorship-transfer": {
    "title": "Maid Sponsorship Transfer Enquiries in UAE | INAYA",
    "description": "Ask INAYA about a maid sponsorship transfer enquiry in the UAE. Confirm available case support, applicable requirements and fees before proceeding."
  },
  "ar/services/sponsorship-transfer": {
    "title": "استفسارات نقل كفالة الخادمة في الإمارات | عناية",
    "description": "استفسر من عناية عن نقل كفالة الخادمة في الإمارات. أكد الدعم المتاح لحالتك والمتطلبات والرسوم قبل المتابعة."
  },
  "en/services/monthly-maid-contract": {
    "title": "Monthly Maid Contracts in UAE | INAYA",
    "description": "Discuss a monthly maid contract in the UAE with INAYA. Confirm the working arrangement, duties, schedule and terms of your selected package."
  },
  "ar/services/monthly-maid-contract": {
    "title": "عقود خادمة شهرية في الإمارات | عناية",
    "description": "ناقش عقد خادمة شهري في الإمارات مع عناية. أكد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة المختارة."
  }
};

function approvedRemediation(file, source) {
  for (const [before, after] of patches[file] ?? []) {
    assert.equal(source.split(before).length, 2, `${file}: one approved remediation anchor`);
    source = source.replace(before, after);
  }
  return source;
}

module.exports = { approvedRemediation, metadata };
