import type { LocationServicePage } from './location-service-pages';
import { siteConfig } from './site-config';

// Summaries of existing published services, with links to the complete terms.
// Candidate availability and driver recruitment are not established by these answers.
export const ajmanCustomerQuestions: LocationServicePage['faqs'] = [
  {
    question: { en: 'Can I walk in, or request an Ajman office appointment online?', ar: 'هل يمكن زيارة مكتب عجمان مباشرة أو طلب موعد عبر الإنترنت؟' },
    answer: {
      en: 'Both options are available. Walk into INAYA at Grand Mall, ground floor, Al Rashidiya 3, Ajman, during office hours and collect a queue token at the counter. Alternatively, send your preferred appointment time through the contact form; the team must confirm the slot. Form submission alone does not confirm an appointment. Waiting time for walk-ins depends on the visitors being served.',
      ar: 'الخياران متاحان. زر مكتب عناية في جراند مول، الطابق الأرضي، الراشدية 3، عجمان خلال ساعات العمل وخذ تذكرة انتظار من الكاونتر. أو أرسل الموعد المفضل عبر نموذج التواصل ليؤكده الفريق؛ إرسال النموذج وحده لا يؤكد الموعد. ويعتمد وقت انتظار الزيارة المباشرة على عدد المراجعين.'
    },
    links: [{ route: 'contact', label: { en: 'Request an office appointment', ar: 'طلب موعد في المكتب' } }]
  },
  {
    question: { en: 'Does INAYA arrange domestic-worker transport?', ar: 'هل ترتب عناية نقل العمالة المنزلية؟' },
    answer: {
      en: 'Yes. INAYA arranges transport using its own drivers. Share the pickup and drop-off addresses and required times so the team can confirm the arrangement. Check the charges and whether transport is included in your selected package before confirming the service.',
      ar: 'نعم، ترتب عناية النقل بواسطة سائقيها. شارك عنوان الاستلام والتوصيل والأوقات المطلوبة ليؤكد الفريق الترتيب. راجع التكلفة وما إذا كان النقل مشمولاً في الباقة المختارة قبل تأكيد الخدمة.'
    }
  },
  {
    question: { en: 'How can I hire a housemaid or domestic worker in Ajman?', ar: 'كيف أوظف خادمة أو عاملة منزلية في عجمان؟' },
    answer: {
      en: `INAYA Domestic Workers has an office at Grand Mall, ground floor, Al Rashidiya 3, Ajman. Contact the team on ${siteConfig.phone} with your household duties, area and preferred schedule. Compare the individual profile, working arrangement and written costs before confirming recruitment or a managed service.`,
      ar: `مكتب عناية للعمالة المنزلية في جراند مول، الطابق الأرضي، الراشدية 3، عجمان. تواصل مع الفريق على ${siteConfig.phone} وحدد مهام المنزل والمنطقة والجدول المطلوب. قارن الملف الفردي وترتيب العمل والتكاليف المكتوبة قبل تأكيد الاستقدام أو الخدمة المدارة.`
    },
    links: [{ route: 'services/recruitment', label: { en: 'Domestic worker recruitment', ar: 'استقدام العمالة المنزلية' } }, { route: 'contact', label: { en: 'Contact the Ajman office', ar: 'تواصل مع مكتب عجمان' } }]
  },
  {
    question: { en: 'Can I arrange a monthly live-in or live-out housemaid in Ajman?', ar: 'هل يمكن طلب خادمة مقيمة أو غير مقيمة بعقد شهري في عجمان؟' },
    answer: {
      en: 'INAYA’s monthly package is AED 3,500 for 30 days. A 6-month commitment costs AED 3,250 per month, and a 12-month commitment costs AED 3,000 per month; these are not total contract prices. Live-in and live-out use the same package prices. The managed monthly service includes salary within the stated scope and exclusions. Confirm duties, hours, rest, accommodation and transport responsibilities, candidate availability and replacement terms in writing.',
      ar: 'باقة عناية الشهرية هي 3,500 درهم لمدة 30 يوماً. يبلغ السعر مع التزام 6 أشهر 3,250 درهماً شهرياً، ومع التزام 12 شهراً 3,000 درهم شهرياً؛ وليسا إجمالي قيمة العقد. تنطبق أسعار الباقات نفسها على الخدمة المقيمة وغير المقيمة. تشمل الخدمة الشهرية المدارة الراتب ضمن النطاق والاستثناءات المحددة. أكد المهام والساعات والراحة ومسؤوليات السكن والنقل وتوفر المرشحة وشروط الاستبدال كتابةً.'
    },
    links: [{ route: 'services/monthly-maid-contract', label: { en: 'Monthly maid arrangements', ar: 'ترتيبات الخادمة الشهرية' } }, { route: 'pricing', label: { en: 'Package prices and inclusions', ar: 'أسعار الباقات وما تشمله' } }]
  },
  {
    question: { en: 'How do I request a live-out nanny or babysitter in Ajman?', ar: 'كيف أطلب مربية غير مقيمة أو جليسة أطفال في عجمان؟' },
    answer: {
      en: 'INAYA handles nanny and babysitting enquiries from Ajman. For a live-out request, provide the children’s ages, childcare duties, days and hours, and home location. Ongoing nanny care and occasional babysitting are different arrangements. Review the individual’s relevant experience and confirm availability, transport responsibilities, duties and the applicable package in writing before booking. Live-in and live-out use the same published package prices.',
      ar: 'تستقبل عناية طلبات المربيات وجليسات الأطفال من عجمان. لطلب مربية غير مقيمة، وضح أعمار الأطفال ومهام الرعاية والأيام والساعات وموقع المنزل. تختلف الرعاية المستمرة بالمربية عن مجالسة الأطفال المؤقتة. راجع الخبرة الفردية المناسبة وأكد التوفر ومسؤوليات النقل والمهام والباقة المنطبقة كتابةً قبل الحجز. تنطبق أسعار الباقات المنشورة نفسها على الخدمة المقيمة وغير المقيمة.'
    },
    links: [{ route: 'services/nanny', label: { en: 'Nanny services', ar: 'خدمات المربيات' } }, { route: 'services/babysitting', label: { en: 'Babysitting services', ar: 'خدمات جليسات الأطفال' } }]
  },
  {
    question: { en: 'Where can I request a part-time or hourly maid in Ajman?', ar: 'أين أطلب خادمة بالساعة أو بدوام جزئي في عجمان؟' },
    answer: {
      en: `Contact INAYA’s Ajman team on ${siteConfig.phone} to request scheduled part-time help. Share the rooms, cleaning or laundry priorities, preferred hours, visit frequency and address. The published visit packages are 4 hours for AED 120 and 8 hours for AED 200; these amounts are package totals. Confirm the visit duration, availability, supplies, transport and total cost in writing before relying on a booking.`,
      ar: `تواصل مع فريق عناية في عجمان على ${siteConfig.phone} لطلب مساعدة مجدولة بدوام جزئي. حدد الغرف وأولويات التنظيف أو الغسيل والساعات المفضلة وتكرار الزيارات والعنوان. الباقات المنشورة للزيارة هي 4 ساعات مقابل 120 درهماً و8 ساعات مقابل 200 درهم؛ وهذه مبالغ إجمالية للباقات. أكد مدة الزيارة والتوفر والمستلزمات والنقل والتكلفة الإجمالية كتابةً قبل اعتماد الحجز.`
    },
    links: [{ route: 'services/part-time-maid', label: { en: 'Part-time visit scope and booking questions', ar: 'نطاق الزيارات الجزئية وأسئلة الحجز' } }]
  },
  {
    question: { en: 'Does INAYA offer non-medical elderly companionship in Ajman?', ar: 'هل توفر عناية مرافقة غير طبية لكبار السن في عجمان؟' },
    answer: {
      en: 'INAYA accepts enquiries for non-clinical elderly support, companionship and everyday home routines in Ajman. Explain the daily assistance, supervision and schedule required so the individual role and experience can be reviewed. Confirm scope and availability before agreeing. This service does not include nursing, medical treatment or medication management.',
      ar: 'تستقبل عناية طلبات الدعم غير السريري لكبار السن والمرافقة والروتين المنزلي اليومي في عجمان. وضح المساعدة اليومية والإشراف والجدول المطلوب لمراجعة الدور والخبرة الفردية. أكد النطاق والتوفر قبل الاتفاق. لا تشمل هذه الخدمة التمريض أو العلاج الطبي أو إدارة الأدوية.'
    },
    links: [{ route: 'services/elder-care', label: { en: 'Non-medical elderly support', ar: 'دعم كبار السن غير الطبي' } }]
  },
  {
    question: { en: 'Can INAYA help with maid visa sponsorship and renewal in Ajman?', ar: 'هل تساعد عناية في كفالة الخادمة وتجديد إقامتها في عجمان؟' },
    answer: {
      en: 'Contact INAYA’s Ajman office about your current worker and sponsor situation and whether you need a new application, renewal or sponsorship-related support. Review the published visa-processing scope, case-specific documents, responsible parties and itemised fees with the team. A family-sponsored arrangement and an agency-managed monthly service are different. Government approval and outcomes are not guaranteed.',
      ar: 'تواصل مع مكتب عناية في عجمان بشأن وضع العاملة والكفيل وما إذا كنت تحتاج طلباً جديداً أو تجديداً أو دعماً متعلقاً بالكفالة. راجع نطاق إجراءات التأشيرة المنشور ومستندات الحالة والأطراف المسؤولة والرسوم المفصلة مع الفريق. يختلف ترتيب كفالة الأسرة عن الخدمة الشهرية التي تديرها الوكالة. لا تضمن عناية الموافقة الحكومية أو النتيجة.'
    },
    links: [{ route: 'services/maid-visa', label: { en: 'Maid visa processing support', ar: 'دعم إجراءات تأشيرة الخادمة' } }]
  },
  {
    question: { en: 'How can I enquire about a Filipino housemaid in Ajman?', ar: 'كيف أستفسر عن خادمة فلبينية في عجمان؟' },
    answer: {
      en: 'Ask INAYA about current Philippines domestic-worker profile options for your Ajman household. Specify the duties, language needs and preferred working arrangement. Review each person’s experience, documents and availability individually; a country guide is not a live candidate list or a guarantee of skills, price or start date.',
      ar: 'اسأل عناية عن خيارات ملفات العمالة المنزلية من الفلبين المتاحة حالياً لمنزلك في عجمان. حدد المهام واللغة المطلوبة وترتيب العمل المفضل. راجع خبرة كل فرد ومستنداته وتوفره بصورة مستقلة؛ فدليل الدولة ليس قائمة مرشحات مباشرة ولا ضماناً للمهارات أو السعر أو موعد البدء.'
    },
    links: [{ route: 'maid-source-countries/philippines-maid-uae', label: { en: 'Philippines domestic-worker guide', ar: 'دليل العمالة المنزلية من الفلبين' } }]
  },
  {
    question: { en: 'Can I request a home cook in Ajman?', ar: 'هل يمكن طلب طباخ منزلي في عجمان؟' },
    answer: {
      en: 'INAYA supports home-cooking and private-cook enquiries from Ajman. Describe your preferred cuisines, meals, dietary instructions, kitchen duties and working hours. Compare the proposed individual’s experience and agree the role, arrangement and quotation before confirmation. Home cooking is a separate duty discussion from a general maid or nanny request.',
      ar: 'تدعم عناية طلبات الطبخ المنزلي والطباخ الخاص من عجمان. وضح أنواع المأكولات والوجبات والتعليمات الغذائية ومهام المطبخ وساعات العمل. قارن خبرة الفرد المقترح واتفق على الدور والترتيب وعرض السعر قبل التأكيد. يناقش الطبخ كمهام مستقلة عن طلب الخادمة العام أو المربية.'
    },
    links: [{ route: 'services/home-cooking', label: { en: 'Home cooking support', ar: 'دعم الطبخ المنزلي' } }]
  }
];
