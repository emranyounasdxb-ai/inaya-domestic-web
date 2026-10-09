import { publishedArticleGuides } from './published-articles';

export type GuideLanguage = 'en' | 'ar';

type GuideSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
  table?: { caption: string; columns: string[]; rows: string[][] };
};

type GuideCopy = {
  title: string;
  description: string;
  lead: string;
  sections: GuideSection[];
  nextSteps: { label: string; route: string }[];
  sourceIntro: string;
  sourceNote: string;
  citations?: string[];
};

export type DomesticWorkerGuide = {
  slug: string;
  published: string;
  updated: string;
  author?: Record<GuideLanguage, string>;
  publication?: boolean;
  en: GuideCopy;
  ar: GuideCopy;
  sources: { en: string; ar: string; url: string }[];
};

export const guideAuthor = 'INAYA Domestic Workers Editorial Team';

const contractEnglish = 'https://www.mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022';
const contractArabic = 'https://www.mohre.gov.ae/ar/services/issuance-of-a-new-employment-contract-domestic-worker-2022';
const ministryGuide = 'https://www.mohre.gov.ae/assets/download/5055543/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx';
const arrangementSources = [
  { en: 'MOHRE: domestic workers employers guide (English PDF)', ar: 'وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (ملف PDF بالإنجليزية)', url: ministryGuide },
  { en: 'MOHRE: new domestic worker employment contract (English)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)', url: contractEnglish },
  { en: 'MOHRE: new domestic worker employment contract (Arabic)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)', url: contractArabic }
];

export const domesticWorkerGuides: DomesticWorkerGuide[] = [
  {
    slug: 'uae-domestic-worker-hiring-process',
    published: '2026-10-01',
    updated: '2026-10-06',
    en: {
      title: 'Questions to ask before hiring a domestic worker in the UAE',
      description: 'Check the agency identity, individual worker profile, written costs and official contract steps before choosing domestic worker support in the UAE.',
      lead: 'Hiring starts with a clear description of the work your household needs. The service arrangement, documents and formal steps depend on the individual case. Use this guide to prepare questions and review the agreement before making a decision.',
      sections: [
        {
          heading: '1. Define the work and the arrangement',
          paragraphs: [
            'List the duties, preferred schedule, location and any language or experience requirements that matter to your household. Separate essential requirements from preferences so that the discussion stays focused on the actual role.',
            'The Ministry of Human Resources and Emiratisation (MOHRE) describes traditional, temporary and flexible recruitment arrangements. Ask which arrangement applies to the option being discussed, who employs the worker and what period the proposed agreement covers. Do not assume that the same procedure or cost applies to every arrangement.'
          ]
        },
        {
          heading: '2. Discuss available options and obtain the terms',
          paragraphs: [
            'Share your requirements with the service provider and ask what can actually be offered for your emirate and requested dates. Review the individual worker profile and the duties proposed for that person; a job title alone does not establish suitability.',
            'Before confirming, request a written explanation of the service scope, period, price components, payment schedule and conditions for changes, support or replacement. INAYA publishes starting monthly, all-inclusive Essential and Signature packages; the duties and individual terms still need confirmation for your selected option.'
          ],
          points: [
            'Does the provider’s legal name and physical office match its official contact channels? Verify current licence information through the relevant authority rather than an old document or a similar business name.',
            'Which experience is documented in this individual profile, and which duties have actually been agreed?',
            'Who employs the worker, which written contracts apply, and who handles each official step?',
            'Where are cancellation, refund and replacement terms recorded? Review the applicable policy without assuming an automatic entitlement.'
          ]
        },
        {
          heading: '3. Review the contracts and official process',
          paragraphs: [
            'MOHRE’s current domestic-worker employment-contract service lists a contract signed by both parties among its required documents. Read the terms applicable to your arrangement before signing, ask for a copy and confirm which official service applies to your case.',
            'Confirm with the provider which ministry, identity, residence, medical and insurance steps apply to your case. Requirements can differ by employer status and arrangement. Use current MOHRE instructions for the formal application rather than assuming a checklist from another case is complete.'
          ]
        },
        {
          heading: '4. Keep a clear record after confirmation',
          paragraphs: [
            'Keep copies of the confirmed agreement, payment details and the contact channel for follow-up. If a detail changes, ask for the revised term in writing. Raise questions about the agreed duties or service promptly so both sides can refer to the same record.',
            'For an INAYA enquiry, the website’s booking form prepares details locally and does not send an application. Contact the team by phone or WhatsApp to discuss the request and confirm the next step.'
          ]
        }
      ],
      nextSteps: [
        { label: 'Understand package pricing factors', route: 'blog/domestic-worker-package-pricing-factors' },
        { label: 'How INAYA services work', route: 'how-it-works' },
        { label: 'Compare services', route: 'services' },
        { label: 'Prepare an enquiry', route: 'booking' },
        { label: 'Ask a question', route: 'contact' }
      ],
      sourceIntro: 'Official background and current procedure references',
      sourceNote: 'Use the ministry references to check the contract procedure and arrangement, then compare those requirements with the provider’s written proposal.'
    },
    ar: {
      title: 'أسئلة قبل اختيار مكتب للعمالة المنزلية في الإمارات',
      description: 'راجع هوية المكتب وملف العاملة والتكاليف المكتوبة وخطوات العقد الرسمية قبل اختيار خدمة العمالة المنزلية المناسبة لأسرتك.',
      lead: 'تبدأ العملية بوصف واضح لاحتياجات المنزل. ويختلف ترتيب الخدمة والمستندات والإجراءات الرسمية بحسب الحالة. يساعدك هذا الدليل على تجهيز الأسئلة ومراجعة الاتفاق قبل اتخاذ القرار.',
      sections: [
        {
          heading: '١. حدد المهام وترتيب الخدمة',
          paragraphs: [
            'دوّن المهام ومواعيد العمل والموقع وأي متطلبات مهمة للأسرة تتعلق باللغة أو الخبرة. ميّز بين المتطلبات الأساسية والتفضيلات حتى تتركز المناقشة على طبيعة الدور الفعلية.',
            'توضح وزارة الموارد البشرية والتوطين ترتيبات للاستقدام التقليدي والمؤقت والمرن. اسأل عن الترتيب الذي ينطبق على الخيار المطروح، والجهة التي توظف العامل أو العاملة، ومدة الاتفاق المقترح. لا تفترض تطابق الإجراءات أو التكاليف بين جميع الترتيبات.'
          ]
        },
        {
          heading: '٢. ناقش الخيارات واطلب الشروط مكتوبة',
          paragraphs: [
            'شارك متطلباتك مع مقدم الخدمة واسأل عما يتوفر فعلياً في إمارتك وفي المواعيد المطلوبة. راجع ملف الشخص المقترح والمهام المناسبة له؛ فالمسمى الوظيفي وحده لا يكفي لتحديد الملاءمة.',
            'قبل التأكيد، اطلب بياناً مكتوباً بنطاق الخدمة ومدتها وعناصر السعر ومواعيد السداد وشروط التغيير والدعم أو الاستبدال إن وجدت. تنشر عناية باقتي Essential وSignature بأسعار شهرية تبدأ من المبلغ المعلن وشاملة، مع ضرورة تأكيد المهام والشروط الفردية للخيار المختار.'
          ],
          points: [
            'هل يطابق الاسم القانوني للمكتب وعنوانه قنوات التواصل الرسمية؟ تحقق من معلومات الترخيص الحالية لدى الجهة المختصة، ولا تعتمد على وثيقة قديمة أو اسم مكتب مشابه.',
            'ما الخبرة المثبتة في ملف هذه العاملة تحديداً، وما المهام المتفق عليها فعلياً؟',
            'من يوظف العاملة، وما العقود المكتوبة المطلوبة، ومن يتابع كل خطوة رسمية؟',
            'أين وردت شروط الإلغاء والاسترداد والاستبدال؟ راجع السياسة المنطبقة دون افتراض استحقاق تلقائي.'
          ]
        },
        {
          heading: '٣. راجع العقود والإجراءات الرسمية',
          paragraphs: [
            'تدرج خدمة إصدار عقد عمل جديد للعامل المساعد لدى الوزارة عقداً موقعاً من الطرفين ضمن المستندات المطلوبة. اقرأ الشروط التي تنطبق على ترتيبك قبل التوقيع، واطلب نسخة، وأكد الخدمة الرسمية المناسبة لحالتك.',
            'تأكد من مقدم الخدمة من خطوات الوزارة والهوية والإقامة والفحص الطبي والتأمين التي تنطبق على حالتك. قد تختلف المتطلبات بحسب صفة صاحب العمل وترتيب الخدمة. ارجع إلى تعليمات الوزارة الحالية عند تقديم الطلب الرسمي، ولا تعتمد على قائمة مستندات تخص حالة أخرى.'
          ]
        },
        {
          heading: '٤. احتفظ بسجل واضح بعد التأكيد',
          paragraphs: [
            'احتفظ بنسخ من الاتفاق المؤكد وتفاصيل الدفع ووسيلة التواصل للمتابعة. إذا تغير أي تفصيل، اطلب توثيق الشرط المعدل كتابةً. اطرح الأسئلة حول المهام أو الخدمة المتفق عليها مبكراً حتى يرجع الطرفان إلى السجل نفسه.',
            'في موقع عناية، يساعد نموذج الحجز على تجهيز البيانات محلياً ولا يرسل طلباً. تواصل مع الفريق هاتفياً أو عبر واتساب لمناقشة احتياجك وتأكيد الخطوة التالية.'
          ]
        }
      ],
      nextSteps: [
        { label: 'تعرف على عوامل تسعير الباقات', route: 'blog/domestic-worker-package-pricing-factors' },
        { label: 'كيف تعمل خدمات عناية', route: 'how-it-works' },
        { label: 'قارن الخدمات', route: 'services' },
        { label: 'جهز استفسارك', route: 'booking' },
        { label: 'تواصل مع الفريق', route: 'contact' }
      ],
      sourceIntro: 'مراجع رسمية للمعلومات العامة والإجراءات الحالية',
      sourceNote: 'استعن بمراجع الوزارة للتحقق من إجراء العقد وترتيب العمل، ثم قارن المتطلبات بالعرض المكتوب من مقدم الخدمة.'
    },
    sources: [
      { en: 'MOHRE: new domestic worker employment contract (English)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)', url: contractEnglish },
      { en: 'MOHRE: domestic workers employers guide', ar: 'وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (بالإنجليزية)', url: ministryGuide },
      { en: 'MOHRE: new domestic worker employment contract (Arabic)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)', url: contractArabic }
    ]
  },
  {
    slug: 'domestic-worker-package-pricing-factors',
    published: '2026-10-01',
    updated: '2026-10-06',
    en: {
      title: 'Domestic worker costs: package prices, wages and fees',
      description: 'Review INAYA’s monthly all-inclusive starting prices and ask how package charges, worker wages and official costs are recorded in your written agreement.',
      lead: 'Essential starts from AED 1,500/month, all-inclusive. Signature starts from AED 2,500/month, all-inclusive. INAYA Black is Custom Quote. These are starting prices; confirm the working arrangement, duties, schedule and terms included in your selected package.',
      sections: [
        {
          heading: 'Start with the type and duration of service',
          paragraphs: [
            'MOHRE’s employer guide describes traditional, temporary and flexible domestic worker packages. The person named as employer and the period of work differ across arrangements. Ask the provider to identify the arrangement before comparing two quotes.',
            'Duration and schedule matter too. An arrangement for specific days or hours is not the same as a longer service period. Compare like with like, including the hours, location and duties in the written proposal.'
          ]
        },
        {
          heading: 'Check what the quoted amount covers',
          paragraphs: [
            'Ask for a breakdown of the service fee and any other costs that apply. MOHRE’s domestic-worker employment-contract service lists government charges and business-centre commission separately. Confirm the costs applicable to your arrangement in writing; an INAYA package price does not by itself specify official fees or the worker’s wage.',
            'Government processing, residence, medical or insurance costs can depend on the arrangement and case. Do not assume they are included or excluded without a written explanation. Ask when payments are due and for what service each payment is made.'
          ],
          points: [
            'The role, duties, work location and schedule covered by the quote.',
            'The service period and the date from which it begins.',
            'Any official fees or third-party charges shown separately.',
            'The written terms for changes, support, cancellation and replacement review.'
          ]
        },
        {
          heading: 'Read the published monthly price correctly',
          paragraphs: [
            'The Essential and Signature figures are starting monthly, all-inclusive package prices, not a published one-time recruitment fee. INAYA Black has no fixed published amount. Do not infer individual benefits from a tier name or apply a price to a live-in, live-out or scheduled arrangement without confirmation.',
            'If a quote is unclear, ask for clarification before booking. A written comparison of scope and costs is more useful than assuming that two packages with similar names provide the same support.'
          ],
          table: {
            caption: 'Published INAYA package price basis',
            columns: ['Package', 'Published starting price', 'Basis'],
            rows: [
              ['Essential', 'Starting from AED 1,500/month', 'All-inclusive; individual terms require confirmation'],
              ['Signature', 'Starting from AED 2,500/month', 'All-inclusive; individual terms require confirmation'],
              ['INAYA Black', 'Custom Quote', 'Scope and terms confirmed in the quotation']
            ]
          }
        },
        {
          heading: 'Questions to ask before confirming',
          paragraphs: [
            'Which duties and hours are included? Who is responsible for each payment? Which documents or official steps are needed? What happens if the requested option is unavailable? Where are the support and replacement terms written?',
            'Keep the proposal and any later changes together. If your needs are still uncertain, discuss them with the team before selecting a package.'
          ]
        }
      ],
      nextSteps: [
        { label: 'Prepare documents for an enquiry', route: 'blog/documents-for-domestic-worker-enquiry' },
        { label: 'View INAYA pricing', route: 'pricing' },
        { label: 'Read common questions', route: 'faq' },
        { label: 'Discuss a quote', route: 'contact' },
        { label: 'Review service guidelines', route: 'service-guidelines' }
      ],
      sourceIntro: 'Official background on arrangements and recruitment contracts',
      sourceNote: 'The official contract service distinguishes its charges from a commercial quotation. It does not define the inclusions of an INAYA monthly package.'
    },
    ar: {
      title: 'تكاليف العمالة المنزلية: أسعار الباقات والأجور والرسوم',
      description: 'تعرف على أسعار عناية الشهرية الشاملة التي تبدأ من المبلغ المعلن، وكيف تراجع تكاليف الباقة وأجر العاملة والرسوم الرسمية في الاتفاق المكتوب.',
      lead: 'تبدأ Essential من 1,500 درهم شهرياً، شاملة. وتبدأ Signature من 2,500 درهم شهرياً، شاملة. أما INAYA Black فبعرض سعر مخصص. تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها.',
      sections: [
        {
          heading: 'ابدأ بنوع الخدمة ومدتها',
          paragraphs: [
            'يعرض دليل الوزارة لأصحاب العمل ترتيبات تقليدية ومؤقتة ومرنة للعمالة المساعدة. تختلف صفة صاحب العمل وفترة العمل بين هذه الترتيبات. اطلب تحديد الترتيب قبل مقارنة عرضين.',
            'تؤثر المدة والجدول أيضاً في المقارنة. فالخدمة لأيام أو ساعات محددة ليست مماثلة لترتيب أطول. قارن العروض على أساس الساعات والموقع والمهام المكتوبة نفسها.'
          ]
        },
        {
          heading: 'تحقق مما يشمله المبلغ المعروض',
          paragraphs: [
            'اطلب تفصيلاً لرسوم الخدمة وأي تكاليف أخرى تنطبق. تعرض خدمة عقد عمل العامل المساعد لدى الوزارة الرسوم الحكومية وعمولة مراكز الخدمة بشكل منفصل. أكد التكاليف المنطبقة على ترتيبك كتابةً؛ فسعر باقة عناية وحده لا يحدد الرسوم الرسمية أو أجر العاملة.',
            'قد تختلف تكاليف الإجراءات الحكومية والإقامة والفحص الطبي والتأمين حسب الترتيب والحالة. لا تفترض شمولها أو استبعادها من دون بيان مكتوب. اسأل عن موعد كل دفعة والخدمة التي تقابلها.'
          ],
          points: [
            'الدور والمهام وموقع العمل والجدول المشمول في العرض.',
            'مدة الخدمة وتاريخ بدايتها.',
            'أي رسوم رسمية أو تكاليف لطرف آخر تظهر بصورة منفصلة.',
            'الشروط المكتوبة للتغيير والدعم والإلغاء ومراجعة الاستبدال.'
          ]
        },
        {
          heading: 'اقرأ أساس السعر الشهري المنشور بدقة',
          paragraphs: [
            'المبالغ المعروضة لباقتي Essential وSignature هي أسعار شهرية شاملة تبدأ من المبلغ المعلن، وليست رسوماً منشورة للاستقدام لمرة واحدة. ولا يوجد مبلغ ثابت منشور لـ INAYA Black. لا تستنتج مزايا فردية من اسم الباقة، ولا تفترض انطباق السعر على الإقامة داخل المنزل أو خارجه أو الزيارات المجدولة دون تأكيد.',
            'إذا لم يكن العرض واضحاً، اطلب التوضيح قبل الحجز. مقارنة النطاق والتكاليف كتابةً أنفع من افتراض أن باقتين متشابهتي الاسم تقدمان الدعم نفسه.'
          ],
          table: {
            caption: 'أساس أسعار باقات عناية المنشورة',
            columns: ['الباقة', 'السعر الابتدائي المنشور', 'أساس العرض'],
            rows: [
              ['Essential', 'تبدأ من 1,500 درهم شهرياً', 'شاملة؛ تؤكد الشروط الفردية مع الفريق'],
              ['Signature', 'تبدأ من 2,500 درهم شهرياً', 'شاملة؛ تؤكد الشروط الفردية مع الفريق'],
              ['INAYA Black', 'عرض سعر مخصص', 'يحدد النطاق والشروط في العرض']
            ]
          }
        },
        {
          heading: 'أسئلة قبل تأكيد الخدمة',
          paragraphs: [
            'ما المهام والساعات المشمولة؟ من يتحمل كل دفعة؟ ما المستندات والخطوات الرسمية المطلوبة؟ ماذا يحدث إذا لم يتوفر الخيار المطلوب؟ أين وردت شروط الدعم والاستبدال كتابةً؟',
            'احتفظ بالعرض وأي تعديلات لاحقة في مكان واحد. إذا لم تتضح احتياجاتك بعد، ناقشها مع الفريق قبل اختيار الباقة.'
          ]
        }
      ],
      nextSteps: [
        { label: 'جهز مستندات الاستفسار', route: 'blog/documents-for-domestic-worker-enquiry' },
        { label: 'اطلع على أسعار عناية', route: 'pricing' },
        { label: 'اقرأ الأسئلة الشائعة', route: 'faq' },
        { label: 'ناقش العرض مع الفريق', route: 'contact' },
        { label: 'راجع إرشادات الخدمة', route: 'service-guidelines' }
      ],
      sourceIntro: 'مراجع رسمية حول ترتيبات الخدمة وعقود الاستقدام',
      sourceNote: 'تميز خدمة العقد الرسمية رسومها عن العرض التجاري، لكنها لا تحدد العناصر المشمولة في باقة عناية الشهرية.'
    },
    sources: [
      { en: 'MOHRE: domestic workers employers guide', ar: 'وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (بالإنجليزية)', url: ministryGuide },
      { en: 'MOHRE: new domestic worker employment contract (English)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)', url: contractEnglish },
      { en: 'MOHRE: new domestic worker employment contract (Arabic)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)', url: contractArabic }
    ]
  },
  {
    slug: 'documents-for-domestic-worker-enquiry',
    published: '2026-10-01',
    updated: '2026-10-06',
    en: {
      title: 'Documents to prepare for a domestic worker enquiry',
      description: 'Separate the details needed for an initial enquiry from the identity and contract documents that an official UAE domestic worker application may require.',
      lead: 'You can begin by explaining your household requirements. Identity and application documents may be needed later for an official process, but the exact list depends on the arrangement and employer. Confirm the current requirements before submitting anything.',
      sections: [
        {
          heading: 'For the first conversation, describe the service',
          paragraphs: [
            'Prepare the work location, preferred start period, duties, schedule and the best way to contact you. If a particular worker role is needed, explain the actual tasks rather than relying only on the role name.',
            'Ask what service arrangement is available and which documents that arrangement requires. An early discussion does not mean every formal document must be sent immediately.'
          ]
        },
        {
          heading: 'For a formal application, check the current MOHRE list',
          paragraphs: [
            'MOHRE’s domestic worker contract service lists examples such as the employer’s passport copy, the worker’s passport copy and photograph, insurance documents and a signed employment contract. It also sets validity conditions for some identity documents. The applicable set can change with the service and employer status.',
            'A resident or investor may have additional identity or residence requirements. Ask the provider which official service will be used and verify the exact current list on MOHRE’s service page before the application is prepared.'
          ],
          points: [
            'Check names and document validity before sharing copies.',
            'Confirm who will receive each document and why it is needed.',
            'Use the provider’s agreed secure channel for identity documents.',
            'Keep a copy of the final signed agreement and official receipts.'
          ]
        },
        {
          heading: 'Review the agreement before signing',
          paragraphs: [
            'MOHRE’s current domestic-worker employment-contract service lists an employment contract signed by both parties among its required documents. Review the proposed work, duties, workplace, wage and terms against your discussion with the provider. Ask for corrections before signing if the description does not match.',
            'Keep the recruitment or service terms and the employment contract distinct. They may describe different obligations. Ask for a clear explanation of any official fees, service charges and support conditions in the documents applicable to you.'
          ]
        },
        {
          heading: 'Use INAYA’s enquiry channels appropriately',
          paragraphs: [
            'The booking form on this website helps you organise details locally; it does not submit an application or upload documents. Contact the INAYA team by phone or WhatsApp for the next step and ask how sensitive documents should be shared if they become necessary.',
            'If you are unsure whether a document is required, ask before sending it. The current official MOHRE service instructions should guide the final application checklist.'
          ]
        }
      ],
      nextSteps: [
        { label: 'Review the hiring process', route: 'blog/uae-domestic-worker-hiring-process' },
        { label: 'See INAYA document guidance', route: 'documents-required' },
        { label: 'Prepare an enquiry', route: 'booking' },
        { label: 'Read common questions', route: 'faq' },
        { label: 'Contact the team', route: 'contact' }
      ],
      sourceIntro: 'Official document and contract references',
      sourceNote: 'Check the document list for the exact official service and employer category; the initial enquiry and a formal application need different information.'
    },
    ar: {
      title: 'المستندات التي تجهزها للاستفسار عن العمالة المنزلية',
      description: 'ميّز بين معلومات الاستفسار الأولي ووثائق الهوية والعقد التي قد تتطلبها معاملة رسمية للعمالة المساعدة في الإمارات.',
      lead: 'يمكنك البدء بشرح احتياجات المنزل. وقد تلزم لاحقاً مستندات هوية وطلب لإجراء رسمي، لكن القائمة الدقيقة تعتمد على الترتيب وصفة صاحب العمل. تأكد من المتطلبات الحالية قبل إرسال أي وثيقة.',
      sections: [
        {
          heading: 'للمحادثة الأولى، صف الخدمة المطلوبة',
          paragraphs: [
            'جهز موقع العمل والفترة المناسبة للبدء والمهام والجدول ووسيلة التواصل المفضلة. إذا كنت تحتاج دوراً محدداً، اشرح الأعمال الفعلية بدلاً من الاعتماد على اسم الوظيفة وحده.',
            'اسأل عن ترتيب الخدمة المتاح والمستندات التي يتطلبها. لا يعني النقاش الأولي ضرورة إرسال جميع الوثائق الرسمية فوراً.'
          ]
        },
        {
          heading: 'للمعاملة الرسمية، راجع قائمة الوزارة الحالية',
          paragraphs: [
            'تذكر خدمة عقد العامل المساعد لدى وزارة الموارد البشرية والتوطين أمثلة تشمل صورة جواز صاحب العمل وصورة جواز العامل وصورته الشخصية ومستندات التأمين وعقد العمل الموقع. وتحدد الخدمة كذلك شروط صلاحية لبعض وثائق الهوية. قد تختلف المجموعة اللازمة بحسب الخدمة وصفة صاحب العمل.',
            'قد تنطبق متطلبات إضافية للهوية أو الإقامة على المقيم أو المستثمر. اسأل مقدم الخدمة عن المعاملة الرسمية التي ستستخدم، وتحقق من القائمة الحالية في صفحة الوزارة قبل تجهيز الطلب.'
          ],
          points: [
            'راجع الأسماء وصلاحية الوثائق قبل مشاركة النسخ.',
            'تأكد ممن سيستلم كل مستند وسبب الحاجة إليه.',
            'استخدم وسيلة مشاركة آمنة ومتفقاً عليها لوثائق الهوية.',
            'احتفظ بنسخة من الاتفاق النهائي الموقع والإيصالات الرسمية.'
          ]
        },
        {
          heading: 'راجع الاتفاق قبل التوقيع',
          paragraphs: [
            'تدرج خدمة عقد عمل العامل المساعد الحالية لدى الوزارة عقد عمل موقعاً من الطرفين ضمن المستندات المطلوبة. راجع العمل والمهام والمكان والأجر والشروط المقترحة وفق مناقشتك مع مقدم الخدمة، واطلب التصحيح قبل التوقيع إذا لم يطابق الوصف ما اتفقتم عليه.',
            'ميّز بين شروط الاستقدام أو الخدمة وعقد العمل؛ فقد تحدد وثيقتان التزامات مختلفة. اطلب شرحاً واضحاً للرسوم الرسمية ورسوم الخدمة وشروط الدعم في الوثائق التي تنطبق على حالتك.'
          ]
        },
        {
          heading: 'استخدم قنوات استفسار عناية بالشكل المناسب',
          paragraphs: [
            'يساعدك نموذج الحجز في هذا الموقع على تنظيم البيانات محلياً؛ ولا يرسل طلباً أو يرفع مستندات. تواصل مع فريق عناية هاتفياً أو عبر واتساب لمعرفة الخطوة التالية، واسأل عن طريقة مشاركة المستندات الحساسة عند الحاجة إليها.',
            'إذا لم تتأكد من ضرورة وثيقة معينة، فاسأل قبل إرسالها. ينبغي أن توجه تعليمات خدمة الوزارة الحالية القائمة النهائية للطلب.'
          ]
        }
      ],
      nextSteps: [
        { label: 'راجع خطوات الاستقدام', route: 'blog/uae-domestic-worker-hiring-process' },
        { label: 'إرشادات عناية للمستندات', route: 'documents-required' },
        { label: 'جهز استفسارك', route: 'booking' },
        { label: 'اقرأ الأسئلة الشائعة', route: 'faq' },
        { label: 'تواصل مع الفريق', route: 'contact' }
      ],
      sourceIntro: 'مراجع رسمية للمستندات والعقود',
      sourceNote: 'راجع قائمة المستندات للخدمة الرسمية وصفة صاحب العمل المناسبة؛ فمعلومات الاستفسار الأولي تختلف عن مستندات الطلب الرسمي.'
    },
    sources: [
      { en: 'MOHRE: domestic workers employers guide (English PDF)', ar: 'وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (ملف PDF بالإنجليزية)', url: ministryGuide },
      { en: 'MOHRE: new domestic worker employment contract (English)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)', url: contractEnglish },
      { en: 'MOHRE: new domestic worker employment contract (Arabic)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)', url: contractArabic }
    ]
  },
  {
    slug: 'live-in-live-out-part-time-maid-uae',
    published: '2026-10-06',
    updated: '2026-10-06',
    en: {
      title: 'Live-in, live-out or part-time maid: comparing arrangements',
      description: 'Compare where a maid lives with the period of household support, and prepare questions about duties, schedules and contracts before choosing a UAE arrangement.',
      lead: 'Live-in and live-out describe whether the worker resides in your home. Part-time describes a limited work schedule. These labels do not, by themselves, establish the employer, contract, hours or price. Confirm those details before choosing household support.',
      sections: [
        {
          heading: 'Compare residence and work period separately',
          paragraphs: [
            'Start with the practical question your family needs to answer: does the role require someone to reside in the home, or support during agreed visits? Then discuss the work period separately. Residence in the household does not mean continuous availability.',
            'Use the comparison below as a vocabulary guide for an enquiry, rather than a promise about an INAYA package. The specific duties, working hours, weekly rest, accommodation and other terms must be confirmed for the arrangement you select.'
          ],
          table: {
            caption: 'Household arrangement labels and questions',
            columns: ['Label', 'What it describes', 'What to confirm'],
            rows: [
              ['Live-in', 'Residence in the household', 'Accommodation, agreed hours, duties and rest'],
              ['Live-out', 'Residence outside the household', 'Arrival times, travel arrangements and work period'],
              ['Part-time', 'Support for an agreed limited schedule', 'Visit frequency, duration, task priorities and availability']
            ]
          }
        },
        {
          heading: 'Identify the applicable employment arrangement',
          paragraphs: [
            'MOHRE’s employer guide distinguishes traditional, temporary and flexible recruitment arrangements. These official categories concern the employment relationship and service period; they should not be treated as automatic equivalents of live-in, live-out or a particular INAYA price tier.',
            'Ask who employs the worker and which service agreement and employment contract apply. Review the current official procedure for that arrangement. If residence or sponsorship processing is needed, confirm the steps for the individual case rather than borrowing another household’s checklist.'
          ]
        },
        {
          heading: 'Compare the actual work your household needs',
          paragraphs: [
            'Describe the home location, priorities and preferred dates. Explain whether the main need is household cleaning, childcare or another approved domestic role. A combined job title should not replace a clear discussion of the duties and the individual worker’s experience.',
            'Ask whether the proposed schedule is available in your emirate and how changes are handled. INAYA has one Ajman office and receives UAE enquiries subject to availability; a location enquiry does not establish another office or guarantee a worker for your requested dates.'
          ]
        },
        {
          heading: 'Obtain the written terms before deciding',
          paragraphs: [
            'Compare quotations using the same duties, location and period. Essential and Signature are advertised as starting monthly, all-inclusive packages, but their application to a live-in, live-out or scheduled arrangement requires confirmation. Do not infer individual inclusions from the label.',
            'Call or WhatsApp INAYA with your preferred arrangement and questions. Request the agreed scope, schedule, payment basis and relevant support policy in writing. Preparing details in the website enquiry form does not send them or confirm an appointment.'
          ]
        }
      ],
      nextSteps: [
        { label: 'Live-in maid enquiries', route: 'services/live-in-maid' },
        { label: 'Live-out maid enquiries', route: 'services/live-out-maid' },
        { label: 'Part-time household support', route: 'services/part-time-maid' },
        { label: 'Review monthly package questions', route: 'blog/monthly-maid-package-inclusions-checklist' },
        { label: 'Discuss your arrangement', route: 'contact' }
      ],
      sourceIntro: 'Official context for employment arrangements',
      sourceNote: 'MOHRE’s categories help identify the employment relationship. Ask which category and current contract procedure fit your proposed household arrangement.'
    },
    ar: {
      title: 'عاملة مقيمة أم غير مقيمة أم بدوام جزئي؟',
      description: 'قارن بين مكان إقامة العاملة وفترة الدعم المنزلي، وجهز أسئلتك عن المهام والمواعيد والعقد قبل اختيار الترتيب المناسب في الإمارات.',
      lead: 'المقيمة وغير المقيمة وصفان لمكان إقامة العاملة، بينما الدوام الجزئي يصف جدول عمل محدوداً. ولا تحدد هذه المسميات وحدها صاحب العمل أو العقد أو الساعات أو السعر. أكد التفاصيل قبل اختيار الدعم المنزلي.',
      sections: [
        {
          heading: 'افصل بين الإقامة وفترة العمل',
          paragraphs: [
            'ابدأ بالسؤال العملي الذي يهم أسرتك: هل تحتاج إلى عاملة تقيم في المنزل، أم إلى دعم خلال زيارات متفق عليها؟ ناقش فترة العمل بصورة مستقلة عن مكان الإقامة. فالإقامة داخل المنزل لا تعني التوفر للعمل طوال الوقت.',
            'يساعدك الجدول على فهم المصطلحات عند الاستفسار، ولا يمثل وعداً بمحتويات باقة من عناية. يجب تأكيد المهام وساعات العمل والراحة الأسبوعية والسكن وسائر الشروط في الترتيب الذي تختاره، بدلاً من افتراضها من المسمى.'
          ],
          table: {
            caption: 'مسميات الترتيبات المنزلية وما ينبغي تأكيده',
            columns: ['المسمى', 'ما الذي يصفه؟', 'أسئلة للتأكيد'],
            rows: [
              ['عاملة مقيمة', 'الإقامة داخل منزل الأسرة', 'السكن وساعات العمل والمهام والراحة المتفق عليها'],
              ['عاملة غير مقيمة', 'الإقامة خارج منزل الأسرة', 'مواعيد الوصول والتنقل وفترة العمل'],
              ['دوام جزئي', 'دعم ضمن جدول محدود ومتفق عليه', 'عدد الزيارات ومدتها وأولويات المهام والتوفر']
            ]
          }
        },
        {
          heading: 'حدد ترتيب التوظيف المنطبق',
          paragraphs: [
            'يميز دليل الوزارة لأصحاب العمل بين الاستقدام التقليدي والمؤقت والمرن. تتعلق هذه الفئات الرسمية بعلاقة العمل وفترة الخدمة؛ وليست مرادفات تلقائية للإقامة داخل المنزل أو خارجه، ولا تحدد انطباق باقة معينة من عناية.',
            'اسأل من يوظف العاملة وأي اتفاق خدمة وعقد عمل ينطبقان. راجع الإجراء الرسمي الحالي لهذا الترتيب. وإذا احتاجت الحالة إلى إجراءات إقامة أو كفالة، فأكد خطواتها المحددة دون الاعتماد على قائمة تخص أسرة أخرى.'
          ]
        },
        {
          heading: 'قارن احتياجات المنزل الفعلية',
          paragraphs: [
            'وضح موقع المنزل وأولوياتك والتواريخ المفضلة. حدد إن كان الاحتياج الأساسي للتنظيف المنزلي أو رعاية الأطفال أو دور منزلي آخر معتمد. لا يغني المسمى المركب عن مناقشة المهام وخبرة العاملة المقترحة بصورة فردية.',
            'اسأل عن توفر الجدول المقترح في إمارتك وطريقة التعامل مع التغييرات. لدى عناية مكتب واحد في عجمان، وتستقبل استفسارات من الإمارات بحسب التوفر. الاستفسار عن خدمة في مدينة أخرى لا يعني وجود فرع فيها أو ضمان التوفر.'
          ]
        },
        {
          heading: 'اطلب الشروط مكتوبة قبل الاختيار',
          paragraphs: [
            'قارن العروض على أساس المهام والموقع والفترة نفسها. تعرض Essential وSignature كباقات شهرية شاملة تبدأ من السعر المعلن، لكن انطباقها على الإقامة أو الزيارات يحتاج إلى تأكيد. لا تستنتج العناصر الفردية المشمولة من اسم الترتيب.',
            'تواصل مع عناية هاتفياً أو عبر واتساب لشرح الترتيب المفضل وأسئلتك. اطلب النطاق والجدول وأساس الدفع وسياسة الدعم ذات الصلة كتابةً. تجهيز التفاصيل في نموذج الاستفسار لا يرسلها إلى الفريق ولا يؤكد موعداً.'
          ]
        }
      ],
      nextSteps: [
        { label: 'استفسارات العاملة المقيمة', route: 'services/live-in-maid' },
        { label: 'استفسارات العاملة غير المقيمة', route: 'services/live-out-maid' },
        { label: 'الدعم المنزلي بدوام جزئي', route: 'services/part-time-maid' },
        { label: 'أسئلة الباقة الشهرية', route: 'blog/monthly-maid-package-inclusions-checklist' },
        { label: 'ناقش الترتيب المناسب', route: 'contact' }
      ],
      sourceIntro: 'السياق الرسمي لترتيبات التوظيف',
      sourceNote: 'تساعد فئات الوزارة على تحديد علاقة العمل. اسأل عن الفئة وإجراء العقد الحالي المناسبين للترتيب المنزلي المقترح.'
    },
    sources: arrangementSources
  },
  {
    slug: 'monthly-maid-package-inclusions-checklist',
    published: '2026-10-06',
    updated: '2026-10-06',
    en: {
      title: 'What is included in a monthly maid package?',
      description: 'Use a written-agreement checklist to confirm the duties, schedule and individual terms of INAYA’s monthly all-inclusive starting-price maid packages.',
      lead: 'Essential starts from AED 1,500/month, all-inclusive; Signature starts from AED 2,500/month, all-inclusive. INAYA Black remains Custom Quote. The individual duties, schedule and inclusions are not listed here: contact INAYA to confirm the terms of your selected package.',
      sections: [
        {
          heading: 'Separate the published price from individual terms',
          paragraphs: [
            'The published monthly price is a starting amount. “All-inclusive” is the published package wording, but it does not establish a detailed list of duties or costs on its own. Ask the team to explain the exact scope in a written quotation.',
            'Do not assume that Essential or Signature means live-in, live-out, full-time or scheduled visits. Nor does a package name establish particular experience, training, priority treatment or replacement benefits. Ask for INAYA Black’s written scope and terms before comparing its custom quote with another tier.'
          ]
        },
        {
          heading: 'Use a checklist when reviewing the agreement',
          paragraphs: [
            'Describe what your household needs before requesting terms. Then check that the proposed agreement answers the questions below. These are items to discuss, not a claim that every item is supplied by every package or that a particular arrangement is available.',
            'If the proposal leaves an item unclear, ask for clarification before confirming. Keep the answer with the quotation so that your family and the service provider refer to the same agreed scope when reviewing a change later.'
          ],
          table: {
            caption: 'Questions about your selected monthly package',
            columns: ['Topic', 'Ask for written confirmation'],
            rows: [
              ['Working arrangement', 'Residence, employer and applicable agreements'],
              ['Duties and schedule', 'Agreed work, hours, rest and service period'],
              ['Individual inclusions', 'What the all-inclusive quotation covers for this case'],
              ['Living arrangements', 'Accommodation, food and responsibilities where relevant'],
              ['Payments and changes', 'Start date, payment schedule and applicable policy terms']
            ]
          }
        },
        {
          heading: 'Check contract and processing responsibilities',
          paragraphs: [
            'MOHRE’s official contract service and employer guide describe formal arrangements and application requirements. Use those sources to identify the procedure, while confirming the commercial package terms separately. A government service page is not a list of INAYA package inclusions.',
            'Where visa or residence processing is relevant, ask which case steps apply and how costs are recorded. INAYA provides complete visa-processing support, but official requirements, fees, eligibility and timelines remain case- and authority-dependent. A monthly quotation cannot promise government approval.'
          ]
        },
        {
          heading: 'Keep confirmation and follow-up clear',
          paragraphs: [
            'Review the existing Refund Policy and ask how it applies to your agreement. Do not assume a universal refund deadline or automatic replacement. Request the contact channel for support and a written record of any later change to duties, dates or terms.',
            'To discuss a package, use the office phone or website WhatsApp below. The online enquiry form only helps prepare details locally. Speak with INAYA to confirm availability and an appointment; completing the form does not send a request or reserve a worker.'
          ]
        }
      ],
      nextSteps: [
        { label: 'Published package prices', route: 'pricing' },
        { label: 'Monthly maid enquiries', route: 'services/monthly-maid-contract' },
        { label: 'Compare residence and schedules', route: 'blog/live-in-live-out-part-time-maid-uae' },
        { label: 'Review refund terms', route: 'refund-policy' },
        { label: 'Confirm package details', route: 'contact' }
      ],
      sourceIntro: 'Contract references for your checklist',
      sourceNote: 'Official arrangements and application requirements provide context; the written INAYA quotation must confirm your package’s individual scope.'
    },
    ar: {
      title: 'ما الذي تشمله باقة العاملة المنزلية الشهرية؟',
      description: 'قائمة أسئلة لمراجعة المهام والجدول والشروط الفردية لباقات عناية الشهرية الشاملة التي تبدأ من السعر المعلن، قبل تأكيد الاتفاق.',
      lead: 'تبدأ Essential من 1,500 درهم شهرياً، شاملة؛ وتبدأ Signature من 2,500 درهم شهرياً، شاملة. وتبقى INAYA Black بعرض سعر مخصص. تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في باقتك المختارة.',
      sections: [
        {
          heading: 'ميز بين السعر المنشور والشروط الفردية',
          paragraphs: [
            'السعر الشهري المنشور مبلغ تبدأ منه الباقة. و«شاملة» هو وصف الباقة المنشور، لكنه لا يقدم وحده قائمة تفصيلية بالمهام أو التكاليف. اطلب من الفريق بيان النطاق الدقيق في عرض مكتوب قبل اتخاذ القرار.',
            'لا تفترض أن Essential أو Signature تعني إقامة داخل المنزل أو خارجه، أو دواماً كاملاً أو زيارات مجدولة. ولا يثبت اسم الباقة خبرة أو تدريباً أو أولوية أو مزايا للاستبدال. اطلب نطاق INAYA Black وشروطها كتابةً قبل مقارنة عرضها المخصص بباقة أخرى.'
          ]
        },
        {
          heading: 'استخدم قائمة أسئلة عند مراجعة الاتفاق',
          paragraphs: [
            'اشرح احتياجات أسرتك قبل طلب الشروط، ثم تحقق من إجابة الاتفاق المقترح عن الأسئلة التالية. هذه موضوعات للمناقشة، وليست إقراراً بأن كل عنصر مقدم في جميع الباقات أو أن كل ترتيب متاح حالياً.',
            'إذا ترك العرض تفصيلاً غير واضح، فاطلب توضيحه قبل التأكيد. احتفظ بالإجابة مع عرض السعر حتى ترجع الأسرة ومقدم الخدمة إلى النطاق نفسه عند مناقشة أي تعديل لاحق في المهام أو المدة.'
          ],
          table: {
            caption: 'أسئلة عن الباقة الشهرية التي تختارها',
            columns: ['الموضوع', 'ما الذي تؤكده كتابةً؟'],
            rows: [
              ['ترتيب العمل', 'الإقامة وصاحب العمل والاتفاقات المنطبقة'],
              ['المهام والجدول', 'العمل والساعات والراحة وفترة الخدمة المتفق عليها'],
              ['العناصر الفردية المشمولة', 'ما يشمله العرض الشامل لهذه الحالة تحديداً'],
              ['ترتيبات المعيشة', 'السكن والطعام والمسؤوليات عند انطباقها'],
              ['الدفع والتغييرات', 'تاريخ البداية ومواعيد الدفع وشروط السياسة ذات الصلة']
            ]
          }
        },
        {
          heading: 'راجع مسؤوليات العقد والإجراءات',
          paragraphs: [
            'تعرض خدمة العقد ودليل أصحاب العمل لدى الوزارة ترتيبات رسمية ومتطلبات للطلبات. استخدم المراجع لتحديد الإجراء، وأكد شروط الباقة التجارية بصورة مستقلة. صفحة الخدمة الحكومية ليست بياناً بمحتويات باقات عناية.',
            'عند الحاجة إلى إجراءات تأشيرة أو إقامة، اسأل عن الخطوات المنطبقة وتوثيق تكاليفها. تقدم عناية دعماً كاملاً لإجراءات التأشيرة، لكن المتطلبات والرسوم والأهلية والمدد تعتمد على الحالة والجهات المختصة. لا يضمن العرض الشهري الموافقة الحكومية.'
          ]
        },
        {
          heading: 'وثق التأكيد وطريقة المتابعة',
          paragraphs: [
            'راجع سياسة الاسترداد الحالية واسأل عن انطباقها على اتفاقك. لا تفترض مهلة استرداد موحدة أو استبدالاً تلقائياً. اطلب وسيلة التواصل للدعم، ووثق أي تغيير لاحق في المهام أو التواريخ أو الشروط كتابةً.',
            'لمناقشة الباقة، استخدم هاتف المكتب أو واتساب الموقع أدناه. يساعد نموذج الاستفسار على تجهيز التفاصيل محلياً فقط. تواصل مع عناية لتأكيد التوفر والموعد؛ فإكمال النموذج لا يرسل طلباً ولا يحجز عاملة.'
          ]
        }
      ],
      nextSteps: [
        { label: 'أسعار الباقات المنشورة', route: 'pricing' },
        { label: 'استفسارات العاملة الشهرية', route: 'services/monthly-maid-contract' },
        { label: 'قارن الإقامة والجداول', route: 'blog/live-in-live-out-part-time-maid-uae' },
        { label: 'راجع شروط الاسترداد', route: 'refund-policy' },
        { label: 'أكد تفاصيل الباقة', route: 'contact' }
      ],
      sourceIntro: 'مراجع العقود لقائمة المراجعة',
      sourceNote: 'توفر الترتيبات الرسمية ومتطلبات الطلب سياقاً للمراجعة؛ ويجب أن يوضح عرض عناية المكتوب النطاق الفردي لباقتك.'
    },
    sources: arrangementSources
  },
  {
    slug: 'maid-nanny-babysitter-differences',
    published: '2026-10-06',
    updated: '2026-10-06',
    en: {
      title: 'Maid, nanny or babysitter: choosing the right role',
      description: 'Compare household support and childcare priorities, review individual experience and agree duties before discussing maid, nanny or babysitter arrangements.',
      lead: 'Choose the role by the work your household needs, not the title alone. Maid enquiries usually focus on household tasks; nanny and babysitter enquiries focus on children. The individual duties, schedule and suitability must be discussed and agreed separately.',
      sections: [
        {
          heading: 'Identify the main priority first',
          paragraphs: [
            'Write down whether your primary need is household support or looking after children. Then describe the tasks and times that matter most. If both are needed, discuss how responsibilities would be allocated rather than assuming one person can cover simultaneous priorities.',
            'The descriptions below are common enquiry distinctions, not promised INAYA duties or qualifications. A maid may not be suitable for your childcare requirements, and a childcare role does not automatically include cleaning, cooking or every household task.'
          ],
          table: {
            caption: 'Questions that distinguish the three role enquiries',
            columns: ['Role', 'Enquiry focus', 'Individual details to review'],
            rows: [
              ['Maid', 'Household support and cleaning priorities', 'Agreed tasks, work area and relevant experience'],
              ['Nanny', 'Childcare needs within the family’s routine', 'Children’s ages, routine, experience and agreed responsibilities'],
              ['Babysitter', 'Child supervision during requested periods', 'Dates, duration, handover and relevant childcare experience']
            ]
          }
        },
        {
          heading: 'Review the individual profile, not a blanket claim',
          paragraphs: [
            'Explain the children’s ages and the routine you want to discuss. Ask about the proposed person’s experience with similar responsibilities and what information is available to assess it. Do not treat a general job title as evidence of training or a qualification.',
            'Discuss communication, handover instructions and how questions would be raised with the family. Agree responsibilities in writing before confirming. If a need falls outside ordinary non-clinical household or childcare support, seek an appropriately qualified professional rather than assuming the domestic role covers it.'
          ]
        },
        {
          heading: 'Confirm the arrangement and work schedule',
          paragraphs: [
            'Role and arrangement answer different questions. Nanny or babysitter describes the focus of the work, while live-in, live-out and a limited schedule concern residence or work period. Ask which arrangement is actually available; none establishes standard hours or a price automatically.',
            'MOHRE’s employer guide and contract service provide background on employment arrangements and formal requirements. Confirm the applicable agreement for the proposed role, including duties, period and relevant terms. Do not substitute an informal task list for the required contract process.'
          ]
        },
        {
          heading: 'Prepare a focused enquiry to INAYA',
          paragraphs: [
            'Share your emirate, preferred dates, main responsibilities and any experience preferences. INAYA receives UAE enquiries from its single Ajman office subject to service availability. Ask the team to confirm the proposed individual, duties, schedule and terms before making a decision.',
            'Use the maid, nanny or babysitting service page for the appropriate enquiry. Call or WhatsApp to discuss availability and an appointment. The website form prepares information locally and does not transmit a request, confirm an appointment or guarantee a suitable profile.'
          ]
        }
      ],
      nextSteps: [
        { label: 'Household support arrangements', route: 'services/live-out-maid' },
        { label: 'Nanny enquiries', route: 'services/nanny' },
        { label: 'Babysitting enquiries', route: 'services/babysitting' },
        { label: 'Questions before choosing a provider', route: 'blog/uae-domestic-worker-hiring-process' },
        { label: 'Discuss your family’s needs', route: 'contact' }
      ],
      sourceIntro: 'Employment context for household roles',
      sourceNote: 'Consult the official contract references for the applicable employment process; individual childcare experience and duties require a separate discussion.'
    },
    ar: {
      title: 'عاملة منزلية أم مربية أم جليسة أطفال؟',
      description: 'قارن أولويات الدعم المنزلي ورعاية الأطفال، وراجع الخبرة الفردية والمهام قبل مناقشة ترتيب العاملة المنزلية أو المربية أو جليسة الأطفال.',
      lead: 'اختر الدور بناءً على احتياجات أسرتك الفعلية، لا المسمى وحده. تركز استفسارات العاملة المنزلية عادةً على شؤون المنزل، بينما تركز المربية وجليسة الأطفال على الأطفال. وتحتاج المهام والجدول والملاءمة الفردية إلى مناقشة واتفاق مستقلين.',
      sections: [
        {
          heading: 'حدد الأولوية الأساسية أولاً',
          paragraphs: [
            'دوّن إن كان احتياجك الأساسي للدعم المنزلي أم للعناية بالأطفال، ثم وضح المهام والأوقات الأهم. إذا كنت تحتاج الأمرين، فناقش توزيع المسؤوليات بدلاً من افتراض قدرة شخص واحد على أداء أولويات متزامنة.',
            'الأوصاف التالية توضح فروقاً شائعة عند الاستفسار، ولا تعد بمهام أو مؤهلات محددة من عناية. قد لا تناسب العاملة المنزلية احتياجاتك لرعاية الأطفال، كما لا يتضمن دور رعاية الأطفال تلقائياً التنظيف أو الطبخ أو جميع أعمال المنزل.'
          ],
          table: {
            caption: 'أسئلة تميز الاستفسارات عن الأدوار الثلاثة',
            columns: ['الدور', 'محور الاستفسار', 'تفاصيل فردية للمراجعة'],
            rows: [
              ['عاملة منزلية', 'أولويات الدعم المنزلي والتنظيف', 'المهام ومكان العمل والخبرة ذات الصلة'],
              ['مربية', 'احتياجات الأطفال ضمن روتين الأسرة', 'أعمار الأطفال والروتين والخبرة والمسؤوليات المتفق عليها'],
              ['جليسة أطفال', 'الإشراف على الأطفال في الفترات المطلوبة', 'التواريخ والمدة والتسليم والخبرة ذات الصلة']
            ]
          }
        },
        {
          heading: 'راجع الملف الفردي دون تعميم',
          paragraphs: [
            'اشرح أعمار الأطفال والروتين الذي ترغب في مناقشته. اسأل عن خبرة الشخص المقترح في مسؤوليات مماثلة وعن المعلومات المتاحة لتقييمها. لا تعتبر المسمى الوظيفي العام دليلاً على تدريب أو مؤهل محدد.',
            'ناقش التواصل وتعليمات تسليم الطفل وطريقة طرح الأسئلة على الأسرة، واتفق على المسؤوليات كتابةً. إذا تجاوز الاحتياج الدعم المنزلي أو رعاية الأطفال غير الطبية، فاستعن بمختص مؤهل ولا تفترض أن الدور المنزلي يغطيه.'
          ]
        },
        {
          heading: 'أكد ترتيب العمل والجدول',
          paragraphs: [
            'الدور وترتيب العمل يجيبان عن سؤالين مختلفين. تصف المربية أو جليسة الأطفال محور المهام، بينما تصف الإقامة أو الزيارات المحدودة مكان السكن وفترة العمل. اسأل عن الترتيب المتاح فعلياً؛ فلا يحدد أي مسمى ساعات أو سعراً تلقائياً.',
            'يوفر دليل أصحاب العمل وخدمة العقد لدى الوزارة سياقاً لترتيبات التوظيف والمتطلبات الرسمية. أكد الاتفاق المنطبق على الدور المقترح، بما يشمل المهام والمدة والشروط. لا تستبدل إجراءات العقد المطلوبة بقائمة مهام غير رسمية.'
          ]
        },
        {
          heading: 'جهز استفساراً واضحاً لعناية',
          paragraphs: [
            'شارك إمارتك والتواريخ المفضلة والمسؤوليات الأساسية وتفضيلات الخبرة. تستقبل عناية استفسارات من الإمارات عبر مكتبها الوحيد في عجمان بحسب التوفر. اطلب تأكيد الشخص المقترح والمهام والجدول والشروط قبل الاختيار.',
            'استخدم صفحة الخدمة المناسبة للعاملة أو المربية أو جليسة الأطفال، وتواصل هاتفياً أو عبر واتساب لمناقشة التوفر والموعد. يجهز نموذج الموقع البيانات محلياً فقط، ولا يرسل طلباً أو يؤكد موعداً أو يضمن ملفاً مناسباً.'
          ]
        }
      ],
      nextSteps: [
        { label: 'ترتيبات الدعم المنزلي', route: 'services/live-out-maid' },
        { label: 'استفسارات المربية', route: 'services/nanny' },
        { label: 'استفسارات جليسة الأطفال', route: 'services/babysitting' },
        { label: 'أسئلة قبل اختيار مقدم الخدمة', route: 'blog/uae-domestic-worker-hiring-process' },
        { label: 'ناقش احتياجات الأسرة', route: 'contact' }
      ],
      sourceIntro: 'سياق التوظيف للأدوار المنزلية',
      sourceNote: 'راجع مراجع العقد الرسمية للإجراء المناسب؛ أما خبرة رعاية الأطفال والمهام الفردية فتحتاج إلى مناقشة مستقلة.'
    },
    sources: arrangementSources
  },
  {
    slug: 'domestic-worker-visa-sponsorship-support',
    published: '2026-10-06',
    updated: '2026-10-06',
    en: {
      title: 'Preparing a domestic worker visa or sponsorship case',
      description: 'Prepare questions for INAYA’s complete visa-processing support and confirm the case-specific documents, authority requirements, fees and next steps.',
      lead: 'INAYA provides complete visa-processing support: document guidance, application submission, status change, medical processing, Emirates ID processing, insurance processing and end-to-end case processing. Requirements, fees, eligibility and timelines depend on your case and the relevant authorities.',
      sections: [
        {
          heading: 'Explain your current situation before choosing a process',
          paragraphs: [
            'Describe the proposed household arrangement, emirate and current stage of the case. Ask which official service and employer category apply, and whether any existing residence or sponsorship situation needs review. Do not assume a new application and a transfer follow identical steps.',
            'The initial discussion helps identify the correct next step; it does not establish eligibility or approve a transfer. Share sensitive identity documents only when needed through an agreed channel. The website enquiry form does not upload documents or submit an official application.'
          ]
        },
        {
          heading: 'Understand the support INAYA provides',
          paragraphs: [
            'The support covers coordination and processing for the steps listed below as applicable to the individual case. Confirm what is needed, who handles each part and which documents must be supplied. A listed support step does not mean it is required in every case.',
            'Medical processing refers to support with the official processing step, not clinical care, nursing or treatment provided by INAYA. Government and other relevant authorities determine requirements and decisions; end-to-end case support does not guarantee approval or a completion date.'
          ],
          table: {
            caption: 'INAYA visa-processing support and case questions',
            columns: ['Support', 'What to clarify'],
            rows: [
              ['Document guidance', 'The list for the correct service and applicant category'],
              ['Application submission', 'Required information and the applicable authority'],
              ['Status change', 'Whether this step applies to the present case'],
              ['Medical processing', 'The applicable official medical processing requirements'],
              ['Emirates ID processing', 'The related identity application requirements'],
              ['Insurance processing', 'Applicable insurance requirements and documentation'],
              ['End-to-end case processing', 'Case stages, responsibilities and follow-up']
            ]
          }
        },
        {
          heading: 'Use official references for the correct category',
          paragraphs: [
            'MOHRE’s domestic-worker contract service identifies contract documents and application steps. ICP residence services and Dubai’s GDRFA domestic-worker service provide additional authority context. Select the category that actually applies: a family residence checklist is not automatically a domestic-worker checklist.',
            'Ask which contract, residence, identity, medical and insurance requirements apply together. Check the current official instructions before submission. Fees and requirements can differ by case and authority, so this guide does not publish a universal salary threshold, government price or processing deadline.'
          ]
        },
        {
          heading: 'Confirm costs, responsibilities and follow-up',
          paragraphs: [
            'Request a written explanation of the proposed support, applicable service charges and official costs, including how they are treated in your quotation. Confirm what happens if further information is requested. Do not assume an advertised monthly package defines every processing cost or guarantees a sponsorship outcome.',
            'Contact INAYA’s Ajman office by phone or website WhatsApp to review your case and confirm availability. The team handles UAE enquiries subject to service confirmation. Keep the agreed next steps and contact details; an enquiry or appointment discussion is separate from an official application decision.'
          ]
        }
      ],
      nextSteps: [
        { label: 'INAYA visa-processing support', route: 'services/maid-visa' },
        { label: 'Discuss sponsorship transfer support', route: 'services/sponsorship-transfer' },
        { label: 'Prepare enquiry information', route: 'blog/documents-for-domestic-worker-enquiry' },
        { label: 'Review the hiring questions', route: 'blog/uae-domestic-worker-hiring-process' },
        { label: 'Ask about your case', route: 'contact' }
      ],
      sourceIntro: 'Current official process references',
      sourceNote: 'These authorities publish different services and applicant categories. Check the correct case-specific service rather than combining their checklists into a universal requirement.'
    },
    ar: {
      title: 'تجهيز حالة تأشيرة أو كفالة للعمالة المنزلية',
      description: 'جهز أسئلتك عن دعم عناية الكامل لإجراءات التأشيرة، وأكد المستندات ومتطلبات الجهات والرسوم والخطوات المناسبة لحالتك.',
      lead: 'تقدم عناية دعماً كاملاً لإجراءات التأشيرة: إرشادات المستندات وتقديم الطلب وتعديل الوضع وإجراءات الفحص الطبي والهوية الإماراتية والتأمين ومتابعة الحالة من البداية إلى النهاية. تعتمد المتطلبات والرسوم والأهلية والمدد على الحالة والجهات المختصة.',
      sections: [
        {
          heading: 'اشرح وضعك الحالي قبل اختيار الإجراء',
          paragraphs: [
            'وضح ترتيب العمل المنزلي المقترح والإمارة والمرحلة الحالية للحالة. اسأل عن الخدمة الرسمية وصفة صاحب العمل المناسبة، وعن الحاجة إلى مراجعة وضع إقامة أو كفالة قائم. لا تفترض تطابق خطوات الطلب الجديد ونقل الكفالة.',
            'تساعد المناقشة الأولية على تحديد الخطوة المناسبة، لكنها لا تثبت الأهلية ولا توافق على النقل. شارك وثائق الهوية الحساسة عند الحاجة فقط عبر وسيلة متفق عليها. نموذج الموقع لا يرفع المستندات ولا يقدم طلباً رسمياً.'
          ]
        },
        {
          heading: 'تعرف على الدعم الذي تقدمه عناية',
          paragraphs: [
            'يشمل الدعم التنسيق والإجراءات للخطوات المبينة أدناه بحسب انطباقها على الحالة. أكد ما يلزم ومن يتابع كل جزء والمستندات المطلوبة منك. وجود خطوة ضمن نطاق الدعم لا يعني أنها ضرورية في جميع الحالات.',
            'تعني إجراءات الفحص الطبي الدعم في الخطوة الرسمية، ولا تعني تقديم عناية رعاية سريرية أو تمريضاً أو علاجاً. تحدد الجهات المختصة المتطلبات والقرارات؛ ولا تضمن متابعة الحالة من البداية إلى النهاية الموافقة أو تاريخ إنجاز محدداً.'
          ],
          table: {
            caption: 'دعم عناية لإجراءات التأشيرة وأسئلة الحالة',
            columns: ['الدعم', 'ما الذي تستوضحه؟'],
            rows: [
              ['إرشادات المستندات', 'القائمة المناسبة للخدمة وصفة مقدم الطلب'],
              ['تقديم الطلب', 'المعلومات المطلوبة والجهة المختصة'],
              ['تعديل الوضع', 'مدى انطباق الخطوة على الحالة الحالية'],
              ['إجراءات الفحص الطبي', 'متطلبات الإجراء الطبي الرسمي المنطبق'],
              ['إجراءات الهوية الإماراتية', 'متطلبات طلب الهوية المرتبط بالحالة'],
              ['إجراءات التأمين', 'المتطلبات والمستندات التأمينية المنطبقة'],
              ['متابعة الحالة من البداية إلى النهاية', 'المراحل والمسؤوليات وطريقة المتابعة']
            ]
          }
        },
        {
          heading: 'راجع المراجع الرسمية للفئة المناسبة',
          paragraphs: [
            'تحدد خدمة عقد العامل المساعد لدى الوزارة مستندات العقد وخطوات الطلب. وتوفر خدمات الإقامة لدى الهيئة الاتحادية وخدمة العمالة المنزلية لدى إقامة دبي سياقاً إضافياً. اختر الفئة المنطبقة فعلياً؛ فقائمة إقامة الأسرة ليست تلقائياً قائمة العمالة المساعدة.',
            'اسأل عن متطلبات العقد والإقامة والهوية والفحص الطبي والتأمين المرتبطة بحالتك، وراجع التعليمات الحالية قبل التقديم. قد تختلف الرسوم والمتطلبات بحسب الحالة والجهة، ولذلك لا ينشر هذا الدليل حداً موحداً للراتب أو سعراً حكومياً أو مهلة إنجاز عامة.'
          ]
        },
        {
          heading: 'أكد التكاليف والمسؤوليات والمتابعة',
          paragraphs: [
            'اطلب بياناً مكتوباً بالدعم المقترح ورسوم الخدمة والتكاليف الرسمية المنطبقة وطريقة إدراجها في العرض. اسأل عن الخطوة التالية إذا طلبت معلومات إضافية. لا تفترض أن الباقة الشهرية تحدد كل تكلفة للإجراءات أو تضمن نتيجة الكفالة.',
            'تواصل مع مكتب عناية في عجمان هاتفياً أو عبر واتساب الموقع لمراجعة الحالة وتأكيد التوفر. يستقبل الفريق استفسارات من الإمارات بحسب تأكيد الخدمة. احتفظ بالخطوات المتفق عليها وقنوات التواصل؛ فمناقشة الاستفسار أو الموعد منفصلة عن قرار الطلب الرسمي.'
          ]
        }
      ],
      nextSteps: [
        { label: 'دعم عناية لإجراءات التأشيرة', route: 'services/maid-visa' },
        { label: 'ناقش دعم نقل الكفالة', route: 'services/sponsorship-transfer' },
        { label: 'جهز معلومات الاستفسار', route: 'blog/documents-for-domestic-worker-enquiry' },
        { label: 'راجع أسئلة الاستقدام', route: 'blog/uae-domestic-worker-hiring-process' },
        { label: 'اسأل عن حالتك', route: 'contact' }
      ],
      sourceIntro: 'مراجع الإجراءات الرسمية الحالية',
      sourceNote: 'تنشر الجهات خدمات وفئات مختلفة للمتقدمين. تحقق من الخدمة المناسبة للحالة، ولا تجمع القوائم لتكوين متطلب موحد للجميع.'
    },
    sources: [
      { en: 'MOHRE: new domestic worker employment contract (English)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)', url: contractEnglish },
      { en: 'MOHRE: new domestic worker employment contract (Arabic)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)', url: contractArabic },
      { en: 'ICP: residence service and applicant categories', ar: 'الهيئة الاتحادية: خدمة الإقامة وفئات المتقدمين', url: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
      { en: 'GDRFA Dubai: domestic worker service', ar: 'الإدارة العامة للإقامة في دبي: خدمة العمالة المنزلية', url: 'https://www.gdrfad.gov.ae/en/node/14403' }
    ]
  },
  ...publishedArticleGuides
];

export function getDomesticWorkerGuide(slug: string) {
  return domesticWorkerGuides.find((guide) => guide.slug === slug);
}
