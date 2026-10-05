export type GuideLanguage = 'en' | 'ar';

type GuideSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

type GuideCopy = {
  title: string;
  description: string;
  lead: string;
  sections: GuideSection[];
  nextSteps: { label: string; route: string }[];
  sourceIntro: string;
};

export type DomesticWorkerGuide = {
  slug: string;
  en: GuideCopy;
  ar: GuideCopy;
  sources: { en: string; ar: string; url: string }[];
};

const contractEnglish = 'https://www.mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022';
const contractArabic = 'https://www.mohre.gov.ae/ar/services/issuance-of-a-new-employment-contract-domestic-worker-2022';
const ministryGuide = 'https://www.mohre.gov.ae/assets/download/5055543/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx';

export const domesticWorkerGuides: DomesticWorkerGuide[] = [
  {
    slug: 'uae-domestic-worker-hiring-process',
    en: {
      title: 'UAE domestic worker hiring: a practical process guide',
      description: 'Plan household duties, compare service arrangements, review the written agreement and confirm the official steps before hiring a domestic worker in the UAE.',
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
            'Before confirming, request a written explanation of the service scope, period, price components, payment schedule and any conditions for changes, support or replacement. INAYA’s published prices are indicative; the final proposal must be confirmed for the specific service and availability.'
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
      sourceIntro: 'Official background and current procedure references'
    },
    ar: {
      title: 'خطوات استقدام عامل أو عاملة منزلية في الإمارات',
      description: 'دليل عملي لتحديد المهام ومقارنة ترتيبات الخدمة ومراجعة الاتفاق المكتوب والتأكد من الإجراءات الرسمية قبل الاستقدام في الإمارات.',
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
            'قبل التأكيد، اطلب بياناً مكتوباً بنطاق الخدمة ومدتها وعناصر السعر ومواعيد السداد وشروط التغيير والدعم أو الاستبدال إن وجدت. الأسعار المنشورة لدى عناية إرشادية، ويجب تأكيد العرض النهائي للخدمة والتوفر في الحالة المحددة.'
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
      sourceIntro: 'مراجع رسمية للمعلومات العامة والإجراءات الحالية'
    },
    sources: [
      { en: 'MOHRE: new domestic worker employment contract (English)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)', url: contractEnglish },
      { en: 'MOHRE: domestic workers employers guide', ar: 'وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (بالإنجليزية)', url: ministryGuide },
      { en: 'MOHRE: new domestic worker employment contract (Arabic)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)', url: contractArabic }
    ]
  },
  {
    slug: 'domestic-worker-package-pricing-factors',
    en: {
      title: 'What affects domestic worker package pricing?',
      description: 'Understand the arrangement, duration, duties, location and separate fee items to review before confirming a domestic worker service quotation in the UAE.',
      lead: 'A useful price comparison looks beyond a headline amount. Ask what service arrangement is proposed, which costs are included and what will be confirmed separately. The final quote should match your household requirements.',
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
          heading: 'Treat displayed package prices as a starting point',
          paragraphs: [
            'INAYA’s pricing page shows indicative packages. It says final pricing is confirmed after reviewing the service type, emirate, duration and availability. Use that page to understand the options, then request the confirmed terms for your specific enquiry.',
            'If a quote is unclear, ask for clarification before booking. A written comparison of scope and costs is more useful than assuming that two packages with similar names provide the same support.'
          ]
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
      sourceIntro: 'Official background on arrangements and recruitment contracts'
    },
    ar: {
      title: 'ما العوامل التي تؤثر في أسعار باقات العمالة المنزلية؟',
      description: 'تعرف على نوع الترتيب والمدة والمهام والموقع وعناصر الرسوم التي ينبغي مراجعتها قبل تأكيد عرض خدمة العمالة المنزلية في الإمارات.',
      lead: 'لا تكفي مقارنة السعر المعلن وحده. اسأل عن ترتيب الخدمة المقترح والتكاليف المشمولة وما سيتم تأكيده بصورة منفصلة. ينبغي أن يعكس العرض النهائي احتياجات منزلك.',
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
          heading: 'تعامل مع أسعار الباقات المعروضة كنقطة بداية',
          paragraphs: [
            'تعرض صفحة أسعار عناية باقات بأسعار إرشادية، وتوضح أن السعر النهائي يؤكد بعد مراجعة نوع الخدمة والإمارة والمدة والتوفر. استخدم الصفحة لفهم الخيارات ثم اطلب الشروط المؤكدة لاستفسارك المحدد.',
            'إذا لم يكن العرض واضحاً، اطلب التوضيح قبل الحجز. مقارنة النطاق والتكاليف كتابةً أنفع من افتراض أن باقتين متشابهتي الاسم تقدمان الدعم نفسه.'
          ]
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
      sourceIntro: 'مراجع رسمية حول ترتيبات الخدمة وعقود الاستقدام'
    },
    sources: [
      { en: 'MOHRE: domestic workers employers guide', ar: 'وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (بالإنجليزية)', url: ministryGuide },
      { en: 'MOHRE: new domestic worker employment contract (English)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)', url: contractEnglish },
      { en: 'MOHRE: new domestic worker employment contract (Arabic)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)', url: contractArabic }
    ]
  },
  {
    slug: 'documents-for-domestic-worker-enquiry',
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
      sourceIntro: 'Official document and contract references'
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
      sourceIntro: 'مراجع رسمية للمستندات والعقود'
    },
    sources: [
      { en: 'MOHRE: domestic workers employers guide (English PDF)', ar: 'وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (ملف PDF بالإنجليزية)', url: ministryGuide },
      { en: 'MOHRE: new domestic worker employment contract (English)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)', url: contractEnglish },
      { en: 'MOHRE: new domestic worker employment contract (Arabic)', ar: 'وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)', url: contractArabic }
    ]
  }
];

export function getDomesticWorkerGuide(slug: string) {
  return domesticWorkerGuides.find((guide) => guide.slug === slug);
}
