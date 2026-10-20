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

export const domesticWorkerGuides: DomesticWorkerGuide[] = [
  {
    "slug": "uae-domestic-worker-hiring-process",
    "published": "2026-10-13",
    "updated": "2026-10-19",
    "en": {
      "title": "Questions to ask before hiring a domestic worker in the UAE",
      "description": "Check the agency identity, individual worker profile, written costs and official contract steps before choosing domestic worker support in the UAE.",
      "lead": "Hiring starts with a clear description of the work your household needs. The service arrangement, documents and formal steps depend on the individual case. Use this guide to prepare questions and review the agreement before making a decision.",
      "sections": [
        {
          "heading": "1. Define the work and the arrangement",
          "paragraphs": [
            "List the duties, preferred schedule, location and any language or experience requirements that matter to your household. Separate essential requirements from preferences so that the discussion stays focused on the actual role.",
            "The Ministry of Human Resources and Emiratisation (MOHRE) describes traditional, temporary and flexible recruitment arrangements. Ask which arrangement applies to the option being discussed, who employs the worker and what period the proposed agreement covers. Do not assume that the same procedure or cost applies to every arrangement."
          ]
        },
        {
          "heading": "2. Discuss available options and obtain the terms",
          "paragraphs": [
            "Share your requirements with the service provider and ask what can actually be offered for your emirate and requested dates. Review the individual worker profile and the duties proposed for that person; a job title alone does not establish suitability.",
            "For the standard managed monthly offer, the first service month is paid in advance and later payments follow the agreed monthly billing date. There is no separate upfront recruitment/setup fee and no security deposit. Separately contracted recruitment and visa-only services have their own quotation and terms. Start with the household role, duties, location and preferred timing. INAYA reviews availability and individual suitability, provides the written scope and quote, and confirms the selected candidate and start arrangements. Service starts after selection, required lawful authorisation and written confirmation."
          ],
          "points": [
            "Does the provider’s legal name and physical office match its official contact channels? Verify current licence information through the relevant authority rather than an old document or a similar business name.",
            "Which experience is documented in this individual profile, and which duties have actually been agreed?",
            "Who employs the worker, which written contracts apply, and who handles each official step?",
            "Where are cancellation, refund and replacement terms recorded? Review the applicable policy without assuming an automatic entitlement."
          ]
        },
        {
          "heading": "3. Review the contracts and official process",
          "paragraphs": [
            "MOHRE’s current domestic-worker employment-contract service lists a contract signed by both parties among its required documents. Read the terms applicable to your arrangement before signing, ask for a copy and confirm which official service applies to your case.",
            "Confirm with the provider which ministry, identity, residence, medical and insurance steps apply to your case. Requirements can differ by employer status and arrangement. Use current MOHRE instructions for the formal application rather than assuming a checklist from another case is complete."
          ]
        },
        {
          "heading": "4. Keep a clear record after confirmation",
          "paragraphs": [
            "Keep copies of the confirmed agreement, payment details and the contact channel for follow-up. If a detail changes, ask for the revised term in writing. Raise questions about the agreed duties or service promptly so both sides can refer to the same record.",
            "For an INAYA enquiry, the website’s booking form prepares details locally and does not send an application. Contact the team by phone or WhatsApp to discuss the request and confirm the next step."
          ]
        },
        {
          "heading": "Candidate selection and service commencement",
          "paragraphs": [
            "Selection comes before the service start: review the individual candidate and written scope, then confirm the start after required lawful authorisation. A different candidate needs a revised profile and your consent; material changes and agreed alternatives are explained in writing."
          ],
          "points": [
            "Review the individual profile against agreed duties and communication needs, rather than nationality-based assumptions.",
            "If another candidate is proposed, INAYA provides the revised profile and obtains customer consent.",
            "Material changes and agreed alternatives are explained in writing.",
            "Prepare a practical household handover with duties, safety instructions and key contacts.",
            "Availability and official approvals determine the agreed start; no same-day placement or fixed government approval time is promised."
          ]
        },
        {
          "heading": "Monthly payments and written confirmation",
          "paragraphs": [
            "Before confirming standard monthly service, review the scope, final price and payment documents. Pay the first month in advance and later months on the agreed billing date, without a separate upfront recruitment/setup fee or security deposit. Separately contracted recruitment or visa work retains its own quotation."
          ],
          "points": [
            "Receive the written service scope, price breakdown and applicable payment documentation before confirmation.",
            "The quotation identifies included components, exclusions, applicable tax and the final payable amount.",
            "Record the service period, monthly billing date, renewal arrangements and any agreed changes.",
            "A package payment is different from the worker’s wage, even though the wage is included in the managed service price."
          ]
        },
        {
          "heading": "Follow-up schedules and human support hours",
          "paragraphs": [
            "After the written duty handover, use the contact and review schedule recorded in your service agreement. Discuss individual duties, coordination and any concerns with that contact. Follow-up does not promise immediate placement, a fixed response time or uninterrupted human support."
          ],
          "points": [
            "Human support hours: Saturday–Thursday, 9 AM–9 PM; Friday closed.",
            "WhatsApp messages may be received outside office hours; this is not a 24/7 human helpline or a guaranteed response time.",
            "Office: +971 6 740 0128. WhatsApp: +971 50 203 6767. Email: info@inayadomestic.ae.",
            "Visit Grand Mall, ground floor, Al Rashidiya 3, Ajman, and coordinate the visit with the team.",
            "For a complaint, share the relevant agreement and concern, keep written communications and use the existing support and official escalation channels."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "Understand package pricing factors",
          "route": "blog/domestic-worker-package-pricing-factors"
        },
        {
          "label": "How INAYA services work",
          "route": "how-it-works"
        },
        {
          "label": "Compare services",
          "route": "services"
        },
        {
          "label": "Prepare an enquiry",
          "route": "booking"
        },
        {
          "label": "Ask a question",
          "route": "contact"
        }
      ],
      "sourceIntro": "Official background and current procedure references",
      "sourceNote": "The official sources explain the applicable employment and processing requirements. INAYA’s managed-service inclusions and commercial terms are stated separately above and in the written quotation."
    },
    "ar": {
      "title": "أسئلة قبل اختيار مكتب للعمالة المنزلية في الإمارات",
      "description": "راجع هوية المكتب وملف العاملة والتكاليف المكتوبة وخطوات العقد الرسمية قبل اختيار خدمة العمالة المنزلية المناسبة لأسرتك.",
      "lead": "تبدأ العملية بوصف واضح لاحتياجات المنزل. ويختلف ترتيب الخدمة والمستندات والإجراءات الرسمية بحسب الحالة. يساعدك هذا الدليل على تجهيز الأسئلة ومراجعة الاتفاق قبل اتخاذ القرار.",
      "sections": [
        {
          "heading": "١. حدد المهام وترتيب الخدمة",
          "paragraphs": [
            "دوّن المهام ومواعيد العمل والموقع وأي متطلبات مهمة للأسرة تتعلق باللغة أو الخبرة. ميّز بين المتطلبات الأساسية والتفضيلات حتى تتركز المناقشة على طبيعة الدور الفعلية.",
            "توضح وزارة الموارد البشرية والتوطين ترتيبات للاستقدام التقليدي والمؤقت والمرن. اسأل عن الترتيب الذي ينطبق على الخيار المطروح، والجهة التي توظف العامل أو العاملة، ومدة الاتفاق المقترح. لا تفترض تطابق الإجراءات أو التكاليف بين جميع الترتيبات."
          ]
        },
        {
          "heading": "٢. ناقش الخيارات واطلب الشروط مكتوبة",
          "paragraphs": [
            "شارك متطلباتك مع مقدم الخدمة واسأل عما يتوفر فعلياً في إمارتك وفي المواعيد المطلوبة. راجع ملف الشخص المقترح والمهام المناسبة له؛ فالمسمى الوظيفي وحده لا يكفي لتحديد الملاءمة.",
            "في العرض الشهري القياسي المدار، يسدد الشهر الأول مقدماً، ثم تتبع الدفعات اللاحقة تاريخ الفوترة الشهري المتفق عليه. لا توجد رسوم استقدام أو تجهيز منفصلة مقدماً، ولا تأمين نقدي. وتكون لخدمات الاستقدام أو التأشيرة المتعاقد عليها منفصلة عروضها وشروطها الخاصة. ابدأ بتحديد الدور المنزلي والمهام والموقع والتوقيت المفضل. تراجع عناية التوفر والملاءمة الفردية، وتقدم النطاق والعرض المكتوبين، ثم تؤكد المرشحة المختارة وترتيبات البدء. تبدأ الخدمة بعد الاختيار والحصول على التصاريح النظامية المطلوبة والتأكيد المكتوب."
          ],
          "points": [
            "هل يطابق الاسم القانوني للمكتب وعنوانه قنوات التواصل الرسمية؟ تحقق من معلومات الترخيص الحالية لدى الجهة المختصة، ولا تعتمد على وثيقة قديمة أو اسم مكتب مشابه.",
            "ما الخبرة المثبتة في ملف هذه العاملة تحديداً، وما المهام المتفق عليها فعلياً؟",
            "من يوظف العاملة، وما العقود المكتوبة المطلوبة، ومن يتابع كل خطوة رسمية؟",
            "أين وردت شروط الإلغاء والاسترداد والاستبدال؟ راجع السياسة المنطبقة دون افتراض استحقاق تلقائي."
          ]
        },
        {
          "heading": "٣. راجع العقود والإجراءات الرسمية",
          "paragraphs": [
            "تدرج خدمة إصدار عقد عمل جديد للعامل المساعد لدى الوزارة عقداً موقعاً من الطرفين ضمن المستندات المطلوبة. اقرأ الشروط التي تنطبق على ترتيبك قبل التوقيع، واطلب نسخة، وأكد الخدمة الرسمية المناسبة لحالتك.",
            "تأكد من مقدم الخدمة من خطوات الوزارة والهوية والإقامة والفحص الطبي والتأمين التي تنطبق على حالتك. قد تختلف المتطلبات بحسب صفة صاحب العمل وترتيب الخدمة. ارجع إلى تعليمات الوزارة الحالية عند تقديم الطلب الرسمي، ولا تعتمد على قائمة مستندات تخص حالة أخرى."
          ]
        },
        {
          "heading": "٤. احتفظ بسجل واضح بعد التأكيد",
          "paragraphs": [
            "احتفظ بنسخ من الاتفاق المؤكد وتفاصيل الدفع ووسيلة التواصل للمتابعة. إذا تغير أي تفصيل، اطلب توثيق الشرط المعدل كتابةً. اطرح الأسئلة حول المهام أو الخدمة المتفق عليها مبكراً حتى يرجع الطرفان إلى السجل نفسه.",
            "في موقع عناية، يساعد نموذج الحجز على تجهيز البيانات محلياً ولا يرسل طلباً. تواصل مع الفريق هاتفياً أو عبر واتساب لمناقشة احتياجك وتأكيد الخطوة التالية."
          ]
        },
        {
          "heading": "اختيار المرشحة وبدء الخدمة",
          "paragraphs": [
            "يسبق الاختيار بدء الخدمة: راجع المرشحة الفردية والنطاق المكتوب، ثم أكد البدء بعد التصاريح النظامية المطلوبة. تحتاج المرشحة المختلفة ملفاً معدلاً وموافقتك؛ وتوضح التغييرات الجوهرية والبدائل المتفق عليها كتابةً."
          ],
          "points": [
            "راجع الملف الفردي وفق المهام المتفق عليها واحتياجات التواصل، دون افتراضات مبنية على الجنسية.",
            "إذا اقترحت مرشحة أخرى، تقدم عناية الملف المعدل وتحصل على موافقة العميل.",
            "توضح التغييرات الجوهرية والبدائل المتفق عليها كتابةً.",
            "جهز تسليماً عملياً لاحتياجات المنزل يشمل المهام وتعليمات السلامة وجهات التواصل الأساسية.",
            "يحدد التوفر والموافقات الرسمية موعد البدء المتفق عليه؛ ولا يوجد وعد ببدء الخدمة في اليوم نفسه أو بمدة ثابتة للموافقة الحكومية."
          ]
        },
        {
          "heading": "السداد الشهري والتأكيد المكتوب",
          "paragraphs": [
            "قبل تأكيد الخدمة الشهرية القياسية، راجع النطاق والسعر النهائي ومستندات السداد. ادفع الشهر الأول مقدماً والأشهر اللاحقة في تاريخ الفوترة المتفق عليه، دون رسم استقدام أو تجهيز منفصل مقدماً أو تأمين نقدي. يبقى للاستقدام أو التأشيرة المتعاقد عليهما منفصلة عرضهما الخاص."
          ],
          "points": [
            "تسلم نطاق الخدمة المكتوب وتفصيل السعر ومستندات السداد المنطبقة قبل التأكيد.",
            "يبين العرض العناصر المشمولة والاستثناءات والضريبة المنطبقة والمبلغ النهائي المستحق.",
            "سجل فترة الخدمة وتاريخ الفوترة الشهري وترتيبات التجديد وأي تغييرات متفق عليها.",
            "دفعة الباقة تختلف عن أجر العاملة، رغم أن الأجر مشمول في سعر الخدمة المدارة."
          ]
        },
        {
          "heading": "مواعيد المتابعة وساعات الدعم البشري",
          "paragraphs": [
            "بعد تسليم بيان المهام المكتوب، استخدم مسؤول التواصل وجدول المراجعة المحددين في اتفاق الخدمة. ناقش معه المهام الفردية والتنسيق وأي ملاحظات. لا تعني المتابعة وعداً بتوفير فوري لعاملة أو وقت رد ثابت أو دعم بشري مستمر."
          ],
          "points": [
            "ساعات الدعم البشري: من السبت إلى الخميس، من 9 صباحاً إلى 9 مساءً؛ الجمعة مغلق.",
            "يمكن استقبال رسائل واتساب خارج ساعات المكتب؛ ولا يعني ذلك خطاً بشرياً يعمل على مدار الساعة أو وقت رد مضموناً.",
            "هاتف المكتب: +971 6 740 0128. واتساب: +971 50 203 6767. البريد الإلكتروني: info@inayadomestic.ae.",
            "العنوان: جراند مول، الطابق الأرضي، الراشدية 3، عجمان. نسق الزيارة مع الفريق.",
            "للشكوى، شارك الاتفاق والملاحظة ذات الصلة، واحتفظ بالمراسلات المكتوبة، واستخدم قنوات الدعم والتصعيد الرسمي القائمة."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "تعرف على عوامل تسعير الباقات",
          "route": "blog/domestic-worker-package-pricing-factors"
        },
        {
          "label": "كيف تعمل خدمات عناية",
          "route": "how-it-works"
        },
        {
          "label": "قارن الخدمات",
          "route": "services"
        },
        {
          "label": "جهز استفسارك",
          "route": "booking"
        },
        {
          "label": "تواصل مع الفريق",
          "route": "contact"
        }
      ],
      "sourceIntro": "مراجع رسمية للمعلومات العامة والإجراءات الحالية",
      "sourceNote": "تشرح المصادر الرسمية متطلبات التوظيف والإجراءات المنطبقة. وتبين أعلاه عناصر خدمة عناية المدارة وشروطها التجارية بصورة منفصلة، كما تسجل في عرض السعر المكتوب."
    },
    "sources": [
      {
        "en": "MOHRE: new domestic worker employment contract (English)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      },
      {
        "en": "MOHRE: domestic workers employers guide",
        "ar": "وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/assets/download/5055543/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx"
      },
      {
        "en": "MOHRE: new domestic worker employment contract (Arabic)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)",
        "url": "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      }
    ]
  },
  {
    "slug": "domestic-worker-package-pricing-factors",
    "published": "2026-10-14",
    "updated": "2026-10-19",
    "en": {
      "title": "Domestic worker costs: package prices, wages and fees",
      "description": "Compare INAYA’s 4-hour, daily, weekly, 30-day, six-month and yearly plans, with the same published live-in and live-out prices.",
      "lead": "INAYA’s published contract plans are AED 120 for 4 hours, AED 200 for 8 hours, AED 1,120 for 7 days and AED 3,500 for 30 days. A six-month contract costs AED 3,250 per month; a twelve-month contract costs AED 3,000 per month. The published rates are the same for live-in and live-out arrangements. Confirm the selected role, schedule, responsibilities and final written quotation before booking.",
      "sections": [
        {
          "heading": "Start with the type and duration of service",
          "paragraphs": [
            "MOHRE’s employer guide describes traditional, temporary and flexible domestic worker packages. The person named as employer and the period of work differ across arrangements. Ask the provider to identify the arrangement before comparing two quotes.",
            "Duration and schedule matter too. An arrangement for specific days or hours is not the same as a longer service period. Compare like with like, including the hours, location and duties in the written proposal."
          ]
        },
        {
          "heading": "Compare the published contract plans",
          "paragraphs": [
            "INAYA’s published contract plans are AED 120 for 4 hours, AED 200 for 8 hours, AED 1,120 for 7 days and AED 3,500 for 30 days. A six-month contract costs AED 3,250 per month; a twelve-month contract costs AED 3,000 per month. The published rates are the same for live-in and live-out arrangements. Confirm the selected role, schedule, responsibilities and final written quotation before booking.",
            "The published plan prices are the same for live-in and live-out service. Record accommodation, meals, transport, cleaning supplies, equipment and applicable tax in the written scope and quotation; equal plan prices do not establish that every related expense is included. The 4-hour and 8-hour plans specify visit duration. Agree working hours, weekly rest and additional duties for longer plans; a 7-day plan does not mean seven consecutive working days."
          ],
          "table": {
            "caption": "INAYA contract plans — same published price for live-in and live-out",
            "columns": [
              "Contract plan",
              "Duration or commitment",
              "Published price"
            ],
            "rows": [
              [
                "Half day",
                "4 hours",
                "AED 120"
              ],
              [
                "Daily",
                "8 hours",
                "AED 200"
              ],
              [
                "Weekly",
                "7 days",
                "AED 1,120"
              ],
              [
                "Monthly",
                "30 days",
                "AED 3,500"
              ],
              [
                "Six-month contract",
                "6-month commitment",
                "AED 3,250 per month"
              ],
              [
                "Yearly contract",
                "12-month commitment",
                "AED 3,000 per month"
              ]
            ]
          }
        },
        {
          "heading": "Agency employment and household responsibilities",
          "paragraphs": [
            "Identify the agency employer/sponsor and household beneficiary in the quotation and agreements. The agency administers the included salary and applicable employment obligations; the customer pays the service charge and fulfils written household responsibilities. Do not add the same salary to the monthly bill a second time."
          ],
          "points": [
            "The service payment includes the agreed worker salary; the customer does not pay that same salary separately.",
            "Write down the individual role, duties, schedule, rest, supervision and safe working arrangements.",
            "Record live-in accommodation, meals, household products and equipment responsibilities in the agreement.",
            "Required lawful authorisation and written confirmation precede service commencement.",
            "A monthly service charge does not replace the employment contract or waive statutory rights."
          ]
        },
        {
          "heading": "What the managed monthly service includes",
          "paragraphs": [
            "Use the core components below to compare the managed monthly service price. The included insurance premium is distinct from benefits, exclusions and co-payments under the issued policy; the quotation and published exceptions determine the cost boundaries. These inclusions apply within the managed monthly agreement and its scope; they are not automatic benefits of every half-day, daily or weekly visit."
          ],
          "points": [
            "The domestic worker’s agreed salary.",
            "Documented salary-payment administration through the applicable approved mechanism.",
            "Applicable government fees, agency sponsorship and work-permit/residence processing within the monthly agreement.",
            "Emirates ID and required medical-fitness processing.",
            "The applicable health-insurance premium; benefits, exclusions and co-payments follow the issued policy and lawful responsibilities.",
            "Candidate assessment, initial orientation and agreed onboarding.",
            "Return ticket and end-of-service benefits under the applicable monthly agreement and employment obligations.",
            "Customer coordination and administration of eligible replacement requests.",
            "Applicable agency employment obligations budgeted within the monthly service charge."
          ]
        },
        {
          "heading": "Household responsibilities and separately quoted services",
          "paragraphs": [
            "The published plan prices are the same for live-in and live-out service. Record accommodation, meals, transport, cleaning supplies, equipment and applicable tax in the written scope and quotation; equal plan prices do not establish that every related expense is included. The 4-hour and 8-hour plans specify visit duration. Agree working hours, weekly rest and additional duties for longer plans; a 7-day plan does not mean seven consecutive working days."
          ],
          "points": [
            "Live-in accommodation and meals: responsibilities are recorded in the applicable agreement.",
            "Household cleaning products and equipment: responsibilities are recorded in the service scope.",
            "Accommodation and transport responsibilities: recorded in the written quotation; published live-in and live-out plan prices are the same.",
            "Overseas travel with the family and destination-specific procedures: separately agreed.",
            "Specialist clinical care, specialist cleaning and duties outside the agreed role are outside the standard household scope unless separately and lawfully arranged.",
            "Additional requested services and material scope changes are priced and agreed before acceptance.",
            "Applicable tax and the final payable amount are identified in the written quotation."
          ]
        },
        {
          "heading": "Monthly payments and written confirmation",
          "paragraphs": [
            "The standard offer’s first month is an advance service payment, followed by billing on the agreed monthly date. It is not a separate recruitment/setup fee or deposit: neither is required for this offer. Recruitment-only or visa-only quotations are different contracts and need their own cost comparison."
          ],
          "points": [
            "Receive the written service scope, price breakdown and applicable payment documentation before confirmation.",
            "The quotation identifies included components, exclusions, applicable tax and the final payable amount.",
            "Record the service period, monthly billing date, renewal arrangements and any agreed changes.",
            "A package payment is different from the worker’s wage, even though the wage is included in the managed service price."
          ]
        },
        {
          "heading": "Managed monthly cancellation and refunds",
          "paragraphs": [
            "For a cost comparison, also read the unused-payment remedy: unused service payment is returned before commencement, or unused prepaid service after effective cancellation is refunded pro rata. The calculation records the paid amount and relevant dates without hidden cancellation charges or unexpected deductions of included costs."
          ],
          "points": [
            "The unused-period calculation and relevant dates are explained in writing.",
            "No undisclosed cancellation charge is imposed.",
            "Costs already included in the monthly package are not reintroduced as unexpected deductions.",
            "Customer service refunds are separate from the worker’s wages and employment entitlements.",
            "Normal paid rest and protected leave are not automatic cancellation or refund events.",
            "Applicable statutory remedies and deadlines remain in force; recruitment-fee rules apply to the relevant recruitment arrangement, not automatically to monthly payments."
          ]
        },
        {
          "heading": "Eligible replacement support in the managed monthly service",
          "paragraphs": [
            "Eligible replacement review, matching coordination and administration are included in the managed monthly service. Eligibility follows the agreed duties, employment arrangement and applicable legal obligations. Review an alternative profile and give consent before confirmation; no unlimited replacement count or fixed completion date is promised."
          ],
          "points": [
            "Share the agreement, agreed duties, relevant dates and a clear description of the concern.",
            "INAYA explains the eligibility review, available matching options and next steps.",
            "Review the proposed candidate and give consent before a replacement arrangement is confirmed.",
            "If a suitable replacement is unavailable, discuss available alternatives and effective cancellation; unused prepaid service is handled under the monthly refund terms.",
            "The support includes eligible review, matching coordination and administration, without an unlimited replacement promise or fixed completion deadline.",
            "Legally required remedies remain available."
          ]
        },
        {
          "heading": "Separate the monthly invoice from wages and recruitment fees",
          "paragraphs": [
            "The worker’s agreed salary and applicable agency processing are included in the managed monthly charge. The customer pays that service invoice without paying the same wage again. A separately contracted recruitment or visa-only service identifies its own costs and legal arrangement. Government service-card fees describe the official transaction; they are not unexpected additional deductions from already-included monthly components."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "Prepare documents for an enquiry",
          "route": "blog/documents-for-domestic-worker-enquiry"
        },
        {
          "label": "View INAYA pricing",
          "route": "pricing"
        },
        {
          "label": "Read common questions",
          "route": "faq"
        },
        {
          "label": "Discuss a quote",
          "route": "contact"
        },
        {
          "label": "Review service guidelines",
          "route": "service-guidelines"
        }
      ],
      "sourceIntro": "Official background on arrangements and recruitment contracts",
      "sourceNote": "The official sources explain the applicable employment and processing requirements. INAYA’s managed-service inclusions and commercial terms are stated separately above and in the written quotation."
    },
    "ar": {
      "title": "تكاليف العمالة المنزلية: أسعار الباقات والأجور والرسوم",
      "description": "قارن باقات عناية لأربع ساعات ويوم وأسبوع وثلاثين يوماً وعقود ستة أشهر وسنة، بأسعار منشورة واحدة للمقيمة وغير المقيمة.",
      "lead": "باقات عناية المنشورة هي 120 درهماً لأربع ساعات، و200 درهم لثماني ساعات، و1,120 درهماً لسبعة أيام، و3,500 درهم لثلاثين يوماً. تبلغ تكلفة عقد الستة أشهر 3,250 درهماً شهرياً، وعقد الاثني عشر شهراً 3,000 درهم شهرياً. الأسعار المنشورة واحدة للخدمة المقيمة وغير المقيمة. أكد الدور المختار والجدول والمسؤوليات وعرض السعر النهائي المكتوب قبل الحجز.",
      "sections": [
        {
          "heading": "ابدأ بنوع الخدمة ومدتها",
          "paragraphs": [
            "يعرض دليل الوزارة لأصحاب العمل ترتيبات تقليدية ومؤقتة ومرنة للعمالة المساعدة. تختلف صفة صاحب العمل وفترة العمل بين هذه الترتيبات. اطلب تحديد الترتيب قبل مقارنة عرضين.",
            "تؤثر المدة والجدول أيضاً في المقارنة. فالخدمة لأيام أو ساعات محددة ليست مماثلة لترتيب أطول. قارن العروض على أساس الساعات والموقع والمهام المكتوبة نفسها."
          ]
        },
        {
          "heading": "قارن باقات العقود المنشورة",
          "paragraphs": [
            "باقات عناية المنشورة هي 120 درهماً لأربع ساعات، و200 درهم لثماني ساعات، و1,120 درهماً لسبعة أيام، و3,500 درهم لثلاثين يوماً. تبلغ تكلفة عقد الستة أشهر 3,250 درهماً شهرياً، وعقد الاثني عشر شهراً 3,000 درهم شهرياً. الأسعار المنشورة واحدة للخدمة المقيمة وغير المقيمة. أكد الدور المختار والجدول والمسؤوليات وعرض السعر النهائي المكتوب قبل الحجز.",
            "أسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة. سجل السكن والطعام والنقل ومواد التنظيف والمعدات والضريبة المنطبقة في النطاق وعرض السعر المكتوبين؛ فتساوي سعر الباقة لا يثبت شمول كل نفقة مرتبطة بها. تحدد باقتا الأربع والثماني ساعات مدة الزيارة. اتفق على ساعات العمل والراحة الأسبوعية والمهام الإضافية للباقات الأطول؛ ولا تعني باقة السبعة أيام العمل سبعة أيام متتالية."
          ],
          "table": {
            "caption": "باقات عناية — السعر المنشور نفسه للخدمة المقيمة وغير المقيمة",
            "columns": [
              "الباقة",
              "المدة أو الالتزام",
              "السعر المنشور"
            ],
            "rows": [
              [
                "نصف يوم",
                "4 ساعات",
                "120 درهماً"
              ],
              [
                "يومي",
                "8 ساعات",
                "200 درهم"
              ],
              [
                "أسبوعي",
                "7 أيام",
                "1,120 درهماً"
              ],
              [
                "شهري",
                "30 يوماً",
                "3,500 درهم"
              ],
              [
                "عقد ستة أشهر",
                "التزام لمدة 6 أشهر",
                "3,250 درهماً شهرياً"
              ],
              [
                "عقد سنوي",
                "التزام لمدة 12 شهراً",
                "3,000 درهم شهرياً"
              ]
            ]
          }
        },
        {
          "heading": "توظيف الوكالة ومسؤوليات الأسرة",
          "paragraphs": [
            "حدد الوكالة صاحبة العمل والكفيل والأسرة المستفيدة في العرض والاتفاقات. تدير الوكالة الراتب المشمول والتزامات التوظيف المنطبقة؛ ويدفع العميل رسوم الخدمة ويلتزم بمسؤوليات المنزل المكتوبة. لا تضف الراتب نفسه إلى الحساب الشهري مرة ثانية."
          ],
          "points": [
            "تشمل رسوم الخدمة راتب العاملة المتفق عليه؛ ولا يدفع العميل الراتب نفسه مرة أخرى بصورة منفصلة.",
            "سجل الدور الفردي والمهام والجدول والراحة والإشراف وترتيبات العمل الآمن كتابةً.",
            "حدد في الاتفاق مسؤوليات السكن والطعام للعاملة المقيمة ومنتجات المنزل والمعدات.",
            "يبدأ العمل بعد الحصول على التصاريح النظامية المطلوبة والتأكيد المكتوب.",
            "رسوم الخدمة الشهرية لا تحل محل عقد العمل ولا تلغي الحقوق القانونية."
          ]
        },
        {
          "heading": "ما تشمله الخدمة الشهرية المدارة",
          "paragraphs": [
            "استخدم العناصر الأساسية أدناه لمقارنة سعر الخدمة الشهرية المدارة. قسط التأمين المشمول منفصل عن المنافع والاستثناءات والمساهمات في الدفع وفق الوثيقة الصادرة؛ ويحدد العرض والاستثناءات المنشورة حدود التكاليف. تسري هذه العناصر ضمن اتفاق الخدمة الشهرية المدارة ونطاقه؛ ولا تعد مزايا تلقائية لكل زيارة بنصف يوم أو يومية أو أسبوعية."
          ],
          "points": [
            "راتب العاملة المنزلية المتفق عليه.",
            "إدارة موثقة لسداد الراتب عبر الآلية المعتمدة المنطبقة.",
            "الرسوم الحكومية المنطبقة والكفالة لدى الوكالة وإجراءات تصريح العمل والإقامة ضمن الاتفاق الشهري.",
            "إجراءات الهوية الإماراتية وفحص اللياقة الطبية المطلوب.",
            "قسط التأمين الصحي المنطبق؛ وتحدد الوثيقة الصادرة والمسؤوليات القانونية المنافع والاستثناءات والمساهمات في الدفع.",
            "تقييم المرشحة والتوجيه الأولي والتهيئة المتفق عليها لبدء الخدمة.",
            "تذكرة العودة ومكافأة نهاية الخدمة وفق الاتفاق الشهري المنطبق والتزامات التوظيف.",
            "التنسيق مع العميل وإدارة طلبات الاستبدال المؤهلة.",
            "التزامات الوكالة المتعلقة بالتوظيف والمنطبقة على الترتيب، محسوبة ضمن رسوم الخدمة الشهرية."
          ]
        },
        {
          "heading": "مسؤوليات المنزل والخدمات ذات العروض المنفصلة",
          "paragraphs": [
            "أسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة. سجل السكن والطعام والنقل ومواد التنظيف والمعدات والضريبة المنطبقة في النطاق وعرض السعر المكتوبين؛ فتساوي سعر الباقة لا يثبت شمول كل نفقة مرتبطة بها. تحدد باقتا الأربع والثماني ساعات مدة الزيارة. اتفق على ساعات العمل والراحة الأسبوعية والمهام الإضافية للباقات الأطول؛ ولا تعني باقة السبعة أيام العمل سبعة أيام متتالية."
          ],
          "points": [
            "السكن والطعام للعاملة المقيمة: تسجل المسؤوليات في الاتفاق المنطبق.",
            "منتجات التنظيف المنزلية والمعدات: تسجل المسؤوليات في نطاق الخدمة.",
            "مسؤوليات السكن والنقل: تسجل في عرض السعر المكتوب؛ وأسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة.",
            "السفر خارج الدولة مع الأسرة وإجراءات بلد الوجهة: يتفق عليها بصورة منفصلة.",
            "الرعاية السريرية والتنظيف المتخصص والمهام خارج الدور المتفق عليه ليست ضمن نطاق الخدمة المنزلية القياسية إلا بترتيب منفصل ونظامي.",
            "تحدد أسعار الخدمات الإضافية المطلوبة والتغييرات الجوهرية في النطاق، ويتفق عليها قبل قبولها.",
            "يبين عرض السعر المكتوب الضريبة المنطبقة والمبلغ النهائي المستحق."
          ]
        },
        {
          "heading": "السداد الشهري والتأكيد المكتوب",
          "paragraphs": [
            "الشهر الأول في العرض القياسي دفعة خدمة مقدمة، تتبعها الفوترة في الموعد الشهري المتفق عليه. ليست رسم استقدام أو تجهيز منفصلاً أو تأميناً نقدياً: فلا يتطلب العرض أياً منهما. عروض الاستقدام فقط أو التأشيرة فقط عقود مختلفة وتحتاج مقارنتها الخاصة للتكاليف."
          ],
          "points": [
            "تسلم نطاق الخدمة المكتوب وتفصيل السعر ومستندات السداد المنطبقة قبل التأكيد.",
            "يبين العرض العناصر المشمولة والاستثناءات والضريبة المنطبقة والمبلغ النهائي المستحق.",
            "سجل فترة الخدمة وتاريخ الفوترة الشهري وترتيبات التجديد وأي تغييرات متفق عليها.",
            "دفعة الباقة تختلف عن أجر العاملة، رغم أن الأجر مشمول في سعر الخدمة المدارة."
          ]
        },
        {
          "heading": "إلغاء الخدمة الشهرية المدارة والاسترداد",
          "paragraphs": [
            "لمقارنة التكاليف، اقرأ أيضاً معالجة الدفعة غير المستخدمة: ترد دفعة الخدمة غير المستخدمة قبل البدء، أو تسترد الخدمة المدفوعة وغير المستخدمة بعد سريان الإلغاء بالتناسب. يسجل الحساب المبلغ المدفوع والتواريخ ذات الصلة دون رسوم إلغاء خفية أو خصومات مفاجئة لتكاليف مشمولة."
          ],
          "points": [
            "يوضح حساب الفترة غير المستخدمة والتواريخ ذات الصلة كتابةً.",
            "لا تفرض رسوم إلغاء غير مفصح عنها.",
            "لا تعاد التكاليف المشمولة أصلاً في الباقة الشهرية كخصومات غير متوقعة.",
            "استرداد رسوم الخدمة للعميل مستقل عن أجور العاملة وحقوقها الوظيفية.",
            "الراحة المعتادة المدفوعة والإجازات المحمية ليستا سبباً تلقائياً للإلغاء أو الاسترداد.",
            "تبقى سبل الإنصاف والمواعيد القانونية المنطبقة قائمة؛ وتخص قواعد رد رسوم الاستقدام ترتيب الاستقدام المعني، ولا تطبق تلقائياً على الدفعات الشهرية."
          ]
        },
        {
          "heading": "دعم الاستبدال المؤهل في الخدمة الشهرية المدارة",
          "paragraphs": [
            "تشمل الخدمة الشهرية المدارة مراجعة طلبات الاستبدال المؤهلة وتنسيق المطابقة وإدارة الإجراءات. تتبع الأهلية المهام المتفق عليها وترتيب التوظيف والالتزامات القانونية المنطبقة. راجع الملف البديل ووافق عليه قبل التأكيد؛ ولا يوجد وعد باستبدالات غير محدودة أو موعد إنجاز ثابت."
          ],
          "points": [
            "شارك الاتفاق والمهام المتفق عليها والتواريخ ذات الصلة ووصفاً واضحاً للملاحظة.",
            "توضح عناية مراجعة الأهلية وخيارات المطابقة المتاحة والخطوات التالية.",
            "راجع المرشحة المقترحة وقدم موافقتك قبل تأكيد ترتيب الاستبدال.",
            "إذا لم يتوفر بديل مناسب، ناقش البدائل المتاحة وسريان الإلغاء؛ وتعالج الخدمة المدفوعة وغير المستخدمة وفق شروط الاسترداد الشهرية.",
            "يشمل الدعم المراجعة المؤهلة وتنسيق المطابقة وإدارة الإجراءات، دون وعد باستبدال غير محدود أو بمدة إنجاز ثابتة.",
            "تبقى سبل الإنصاف المطلوبة قانوناً متاحة."
          ]
        },
        {
          "heading": "افصل الفاتورة الشهرية عن الأجور ورسوم الاستقدام",
          "paragraphs": [
            "يشمل مبلغ الخدمة الشهرية المدارة راتب العاملة المتفق عليه وإجراءات الوكالة المنطبقة. يدفع العميل فاتورة الخدمة دون سداد الأجر نفسه مرة أخرى. ويحدد الاستقدام أو خدمة التأشيرة المتعاقد عليها منفصلة تكاليفها وترتيبها القانوني. تصف رسوم بطاقة الخدمة الحكومية المعاملة الرسمية، ولا تعد خصومات إضافية غير متوقعة من عناصر مشمولة أصلاً في الخدمة الشهرية."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "جهز مستندات الاستفسار",
          "route": "blog/documents-for-domestic-worker-enquiry"
        },
        {
          "label": "اطلع على أسعار عناية",
          "route": "pricing"
        },
        {
          "label": "اقرأ الأسئلة الشائعة",
          "route": "faq"
        },
        {
          "label": "ناقش العرض مع الفريق",
          "route": "contact"
        },
        {
          "label": "راجع إرشادات الخدمة",
          "route": "service-guidelines"
        }
      ],
      "sourceIntro": "مراجع رسمية حول ترتيبات الخدمة وعقود الاستقدام",
      "sourceNote": "تشرح المصادر الرسمية متطلبات التوظيف والإجراءات المنطبقة. وتبين أعلاه عناصر خدمة عناية المدارة وشروطها التجارية بصورة منفصلة، كما تسجل في عرض السعر المكتوب."
    },
    "sources": [
      {
        "en": "MOHRE: domestic workers employers guide",
        "ar": "وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/assets/download/5055543/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx"
      },
      {
        "en": "MOHRE: new domestic worker employment contract (English)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      },
      {
        "en": "MOHRE: new domestic worker employment contract (Arabic)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)",
        "url": "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      }
    ]
  },
  {
    "slug": "documents-for-domestic-worker-enquiry",
    "published": "2026-10-12",
    "updated": "2026-10-12",
    "en": {
      "title": "Documents to prepare for a domestic worker enquiry",
      "description": "Separate the details needed for an initial enquiry from the identity and contract documents that an official UAE domestic worker application may require.",
      "lead": "You can begin by explaining your household requirements. Identity and application documents may be needed later for an official process, but the exact list depends on the arrangement and employer. Confirm the current requirements before submitting anything.",
      "sections": [
        {
          "heading": "For the first conversation, describe the service",
          "paragraphs": [
            "Prepare the work location, preferred start period, duties, schedule and the best way to contact you. If a particular worker role is needed, explain the actual tasks rather than relying only on the role name.",
            "Ask what service arrangement is available and which documents that arrangement requires. An early discussion does not mean every formal document must be sent immediately."
          ]
        },
        {
          "heading": "For a formal application, check the current MOHRE list",
          "paragraphs": [
            "MOHRE’s domestic worker contract service lists examples such as the employer’s passport copy, the worker’s passport copy and photograph, insurance documents and a signed employment contract. It also sets validity conditions for some identity documents. The applicable set can change with the service and employer status.",
            "A resident or investor may have additional identity or residence requirements. Ask the provider which official service will be used and verify the exact current list on MOHRE’s service page before the application is prepared."
          ],
          "points": [
            "Check names and document validity before sharing copies.",
            "Confirm who will receive each document and why it is needed.",
            "Use the provider’s agreed secure channel for identity documents.",
            "Keep a copy of the final signed agreement and official receipts."
          ]
        },
        {
          "heading": "Review the agreement before signing",
          "paragraphs": [
            "MOHRE’s current domestic-worker employment-contract service lists an employment contract signed by both parties among its required documents. Review the proposed work, duties, workplace, wage and terms against your discussion with the provider. Ask for corrections before signing if the description does not match.",
            "Keep the recruitment or service terms and the employment contract distinct. They may describe different obligations. Ask for a clear explanation of any official fees, service charges and support conditions in the documents applicable to you."
          ]
        },
        {
          "heading": "Use INAYA’s enquiry channels appropriately",
          "paragraphs": [
            "The booking form on this website helps you organise details locally; it does not submit an application or upload documents. Contact the INAYA team by phone or WhatsApp for the next step and ask how sensitive documents should be shared if they become necessary.",
            "If you are unsure whether a document is required, ask before sending it. The current official MOHRE service instructions should guide the final application checklist."
          ]
        },
        {
          "heading": "Agency employment and household responsibilities",
          "paragraphs": [
            "In a managed monthly enquiry, document the agency as employer/sponsor and your household as beneficiary. Agency wage administration and applicable employment obligations are included, while the agreement records your household responsibilities. Use those named parties to identify the correct documents; the service payment is not a second worker wage."
          ],
          "points": [
            "The service payment includes the agreed worker salary; the customer does not pay that same salary separately.",
            "Write down the individual role, duties, schedule, rest, supervision and safe working arrangements.",
            "Record live-in accommodation, meals, household products and equipment responsibilities in the agreement.",
            "Required lawful authorisation and written confirmation precede service commencement.",
            "A monthly service charge does not replace the employment contract or waive statutory rights."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "Review the hiring process",
          "route": "blog/uae-domestic-worker-hiring-process"
        },
        {
          "label": "See INAYA document guidance",
          "route": "documents-required"
        },
        {
          "label": "Prepare an enquiry",
          "route": "booking"
        },
        {
          "label": "Read common questions",
          "route": "faq"
        },
        {
          "label": "Contact the team",
          "route": "contact"
        }
      ],
      "sourceIntro": "Official document and contract references",
      "sourceNote": "The official sources explain the applicable employment and processing requirements. INAYA’s managed-service inclusions and commercial terms are stated separately above and in the written quotation."
    },
    "ar": {
      "title": "المستندات التي تجهزها للاستفسار عن العمالة المنزلية",
      "description": "ميّز بين معلومات الاستفسار الأولي ووثائق الهوية والعقد التي قد تتطلبها معاملة رسمية للعمالة المساعدة في الإمارات.",
      "lead": "يمكنك البدء بشرح احتياجات المنزل. وقد تلزم لاحقاً مستندات هوية وطلب لإجراء رسمي، لكن القائمة الدقيقة تعتمد على الترتيب وصفة صاحب العمل. تأكد من المتطلبات الحالية قبل إرسال أي وثيقة.",
      "sections": [
        {
          "heading": "للمحادثة الأولى، صف الخدمة المطلوبة",
          "paragraphs": [
            "جهز موقع العمل والفترة المناسبة للبدء والمهام والجدول ووسيلة التواصل المفضلة. إذا كنت تحتاج دوراً محدداً، اشرح الأعمال الفعلية بدلاً من الاعتماد على اسم الوظيفة وحده.",
            "اسأل عن ترتيب الخدمة المتاح والمستندات التي يتطلبها. لا يعني النقاش الأولي ضرورة إرسال جميع الوثائق الرسمية فوراً."
          ]
        },
        {
          "heading": "للمعاملة الرسمية، راجع قائمة الوزارة الحالية",
          "paragraphs": [
            "تذكر خدمة عقد العامل المساعد لدى وزارة الموارد البشرية والتوطين أمثلة تشمل صورة جواز صاحب العمل وصورة جواز العامل وصورته الشخصية ومستندات التأمين وعقد العمل الموقع. وتحدد الخدمة كذلك شروط صلاحية لبعض وثائق الهوية. قد تختلف المجموعة اللازمة بحسب الخدمة وصفة صاحب العمل.",
            "قد تنطبق متطلبات إضافية للهوية أو الإقامة على المقيم أو المستثمر. اسأل مقدم الخدمة عن المعاملة الرسمية التي ستستخدم، وتحقق من القائمة الحالية في صفحة الوزارة قبل تجهيز الطلب."
          ],
          "points": [
            "راجع الأسماء وصلاحية الوثائق قبل مشاركة النسخ.",
            "تأكد ممن سيستلم كل مستند وسبب الحاجة إليه.",
            "استخدم وسيلة مشاركة آمنة ومتفقاً عليها لوثائق الهوية.",
            "احتفظ بنسخة من الاتفاق النهائي الموقع والإيصالات الرسمية."
          ]
        },
        {
          "heading": "راجع الاتفاق قبل التوقيع",
          "paragraphs": [
            "تدرج خدمة عقد عمل العامل المساعد الحالية لدى الوزارة عقد عمل موقعاً من الطرفين ضمن المستندات المطلوبة. راجع العمل والمهام والمكان والأجر والشروط المقترحة وفق مناقشتك مع مقدم الخدمة، واطلب التصحيح قبل التوقيع إذا لم يطابق الوصف ما اتفقتم عليه.",
            "ميّز بين شروط الاستقدام أو الخدمة وعقد العمل؛ فقد تحدد وثيقتان التزامات مختلفة. اطلب شرحاً واضحاً للرسوم الرسمية ورسوم الخدمة وشروط الدعم في الوثائق التي تنطبق على حالتك."
          ]
        },
        {
          "heading": "استخدم قنوات استفسار عناية بالشكل المناسب",
          "paragraphs": [
            "يساعدك نموذج الحجز في هذا الموقع على تنظيم البيانات محلياً؛ ولا يرسل طلباً أو يرفع مستندات. تواصل مع فريق عناية هاتفياً أو عبر واتساب لمعرفة الخطوة التالية، واسأل عن طريقة مشاركة المستندات الحساسة عند الحاجة إليها.",
            "إذا لم تتأكد من ضرورة وثيقة معينة، فاسأل قبل إرسالها. ينبغي أن توجه تعليمات خدمة الوزارة الحالية القائمة النهائية للطلب."
          ]
        },
        {
          "heading": "توظيف الوكالة ومسؤوليات الأسرة",
          "paragraphs": [
            "في طلب الخدمة الشهرية المدارة، وثق الوكالة صاحبة العمل والكفيل ومنزلك بصفته المستفيد. تشمل الخدمة إدارة الوكالة للأجر والتزامات التوظيف المنطبقة، ويسجل الاتفاق مسؤوليات المنزل. استخدم هذه الأطراف المسماة لتحديد المستندات الصحيحة؛ فدفعة الخدمة ليست أجراً ثانياً للعاملة."
          ],
          "points": [
            "تشمل رسوم الخدمة راتب العاملة المتفق عليه؛ ولا يدفع العميل الراتب نفسه مرة أخرى بصورة منفصلة.",
            "سجل الدور الفردي والمهام والجدول والراحة والإشراف وترتيبات العمل الآمن كتابةً.",
            "حدد في الاتفاق مسؤوليات السكن والطعام للعاملة المقيمة ومنتجات المنزل والمعدات.",
            "يبدأ العمل بعد الحصول على التصاريح النظامية المطلوبة والتأكيد المكتوب.",
            "رسوم الخدمة الشهرية لا تحل محل عقد العمل ولا تلغي الحقوق القانونية."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "راجع خطوات الاستقدام",
          "route": "blog/uae-domestic-worker-hiring-process"
        },
        {
          "label": "إرشادات عناية للمستندات",
          "route": "documents-required"
        },
        {
          "label": "جهز استفسارك",
          "route": "booking"
        },
        {
          "label": "اقرأ الأسئلة الشائعة",
          "route": "faq"
        },
        {
          "label": "تواصل مع الفريق",
          "route": "contact"
        }
      ],
      "sourceIntro": "مراجع رسمية للمستندات والعقود",
      "sourceNote": "تشرح المصادر الرسمية متطلبات التوظيف والإجراءات المنطبقة. وتبين أعلاه عناصر خدمة عناية المدارة وشروطها التجارية بصورة منفصلة، كما تسجل في عرض السعر المكتوب."
    },
    "sources": [
      {
        "en": "MOHRE: domestic workers employers guide (English PDF)",
        "ar": "وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (ملف PDF بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/assets/download/5055543/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx"
      },
      {
        "en": "MOHRE: new domestic worker employment contract (English)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      },
      {
        "en": "MOHRE: new domestic worker employment contract (Arabic)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)",
        "url": "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      }
    ]
  },
  {
    "slug": "live-in-live-out-part-time-maid-uae",
    "published": "2026-10-08",
    "updated": "2026-10-19",
    "en": {
      "title": "Live-in, live-out or part-time maid: comparing arrangements",
      "description": "Compare where a maid lives with the period of household support, and prepare questions about duties, schedules and contracts before choosing a UAE arrangement.",
      "lead": "Live-in and live-out describe whether the worker resides in your home. Part-time describes a limited work schedule. These labels do not, by themselves, establish the employer, contract, hours or price. Confirm those details before choosing household support.",
      "sections": [
        {
          "heading": "Compare residence and work period separately",
          "paragraphs": [
            "Start with the practical question your family needs to answer: does the role require someone to reside in the home, or support during agreed visits? Then discuss the work period separately. Residence in the household does not mean continuous availability.",
            "Use the comparison below as a vocabulary guide for an enquiry, rather than a promise about an INAYA package. The specific duties, working hours, weekly rest, accommodation and other terms must be confirmed for the arrangement you select."
          ],
          "table": {
            "caption": "Household arrangement labels and questions",
            "columns": [
              "Label",
              "What it describes",
              "What to confirm"
            ],
            "rows": [
              [
                "Live-in",
                "Residence in the household",
                "Accommodation, agreed hours, duties and rest"
              ],
              [
                "Live-out",
                "Residence outside the household",
                "Arrival times, travel arrangements and work period"
              ],
              [
                "Part-time",
                "Support for an agreed limited schedule",
                "Visit frequency, duration, task priorities and availability"
              ]
            ]
          }
        },
        {
          "heading": "Identify the applicable employment arrangement",
          "paragraphs": [
            "MOHRE’s employer guide distinguishes traditional, temporary and flexible recruitment arrangements. These official categories concern the employment relationship and service period; they should not be treated as automatic equivalents of live-in, live-out or a particular INAYA contract plan.",
            "Ask who employs the worker and which service agreement and employment contract apply. Review the current official procedure for that arrangement. If residence or sponsorship processing is needed, confirm the steps for the individual case rather than borrowing another household’s checklist."
          ]
        },
        {
          "heading": "Compare the actual work your household needs",
          "paragraphs": [
            "Describe the home location, priorities and preferred dates. Explain whether the main need is household cleaning, childcare or another approved domestic role. A combined job title should not replace a clear discussion of the duties and the individual worker’s experience.",
            "Ask whether the proposed schedule is available in your emirate and how changes are handled. INAYA has one Ajman office and receives UAE enquiries subject to availability; a location enquiry does not establish another office or guarantee a worker for your requested dates."
          ]
        },
        {
          "heading": "Obtain the written terms before deciding",
          "paragraphs": [
            "INAYA’s published contract plans are AED 120 for 4 hours, AED 200 for 8 hours, AED 1,120 for 7 days and AED 3,500 for 30 days. A six-month contract costs AED 3,250 per month; a twelve-month contract costs AED 3,000 per month. The published rates are the same for live-in and live-out arrangements. Confirm the selected role, schedule, responsibilities and final written quotation before booking. The published plan prices are the same for live-in and live-out service. Record accommodation, meals, transport, cleaning supplies, equipment and applicable tax in the written scope and quotation; equal plan prices do not establish that every related expense is included. The 4-hour and 8-hour plans specify visit duration. Agree working hours, weekly rest and additional duties for longer plans; a 7-day plan does not mean seven consecutive working days.",
            "Call or WhatsApp INAYA with your preferred arrangement and questions. Request the agreed scope, schedule, payment basis and relevant support policy in writing. Preparing details in the website enquiry form does not send them or confirm an appointment."
          ]
        },
        {
          "heading": "Compare the published contract plans",
          "paragraphs": [
            "INAYA’s published contract plans are AED 120 for 4 hours, AED 200 for 8 hours, AED 1,120 for 7 days and AED 3,500 for 30 days. A six-month contract costs AED 3,250 per month; a twelve-month contract costs AED 3,000 per month. The published rates are the same for live-in and live-out arrangements. Confirm the selected role, schedule, responsibilities and final written quotation before booking.",
            "The published plan prices are the same for live-in and live-out service. Record accommodation, meals, transport, cleaning supplies, equipment and applicable tax in the written scope and quotation; equal plan prices do not establish that every related expense is included. The 4-hour and 8-hour plans specify visit duration. Agree working hours, weekly rest and additional duties for longer plans; a 7-day plan does not mean seven consecutive working days."
          ],
          "table": {
            "caption": "INAYA contract plans — same published price for live-in and live-out",
            "columns": [
              "Contract plan",
              "Duration or commitment",
              "Published price"
            ],
            "rows": [
              [
                "Half day",
                "4 hours",
                "AED 120"
              ],
              [
                "Daily",
                "8 hours",
                "AED 200"
              ],
              [
                "Weekly",
                "7 days",
                "AED 1,120"
              ],
              [
                "Monthly",
                "30 days",
                "AED 3,500"
              ],
              [
                "Six-month contract",
                "6-month commitment",
                "AED 3,250 per month"
              ],
              [
                "Yearly contract",
                "12-month commitment",
                "AED 3,000 per month"
              ]
            ]
          }
        },
        {
          "heading": "Agency employment and household responsibilities",
          "paragraphs": [
            "For INAYA’s managed monthly service, the agency employer/sponsor administers the wage and applicable employment obligations within the service charge. Published plan prices are the same for live-in and live-out arrangements. Your household is the beneficiary and fulfils its written accommodation, meals, equipment and duty responsibilities; it does not pay the included wage again."
          ],
          "points": [
            "The service payment includes the agreed worker salary; the customer does not pay that same salary separately.",
            "Write down the individual role, duties, schedule, rest, supervision and safe working arrangements.",
            "Record live-in accommodation, meals, household products and equipment responsibilities in the agreement.",
            "Required lawful authorisation and written confirmation precede service commencement.",
            "A monthly service charge does not replace the employment contract or waive statutory rights."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "Live-in maid enquiries",
          "route": "services/live-in-maid"
        },
        {
          "label": "Live-out maid enquiries",
          "route": "services/live-out-maid"
        },
        {
          "label": "Part-time household support",
          "route": "services/part-time-maid"
        },
        {
          "label": "Review monthly package questions",
          "route": "blog/monthly-maid-package-inclusions-checklist"
        },
        {
          "label": "Discuss your arrangement",
          "route": "contact"
        }
      ],
      "sourceIntro": "Official context for employment arrangements",
      "sourceNote": "The official sources explain the applicable employment and processing requirements. INAYA’s managed-service inclusions and commercial terms are stated separately above and in the written quotation."
    },
    "ar": {
      "title": "عاملة مقيمة أم غير مقيمة أم بدوام جزئي؟",
      "description": "قارن بين مكان إقامة العاملة وفترة الدعم المنزلي، وجهز أسئلتك عن المهام والمواعيد والعقد قبل اختيار الترتيب المناسب في الإمارات.",
      "lead": "المقيمة وغير المقيمة وصفان لمكان إقامة العاملة، بينما الدوام الجزئي يصف جدول عمل محدوداً. ولا تحدد هذه المسميات وحدها صاحب العمل أو العقد أو الساعات أو السعر. أكد التفاصيل قبل اختيار الدعم المنزلي.",
      "sections": [
        {
          "heading": "افصل بين الإقامة وفترة العمل",
          "paragraphs": [
            "ابدأ بالسؤال العملي الذي يهم أسرتك: هل تحتاج إلى عاملة تقيم في المنزل، أم إلى دعم خلال زيارات متفق عليها؟ ناقش فترة العمل بصورة مستقلة عن مكان الإقامة. فالإقامة داخل المنزل لا تعني التوفر للعمل طوال الوقت.",
            "يساعدك الجدول على فهم المصطلحات عند الاستفسار، ولا يمثل وعداً بمحتويات باقة من عناية. يجب تأكيد المهام وساعات العمل والراحة الأسبوعية والسكن وسائر الشروط في الترتيب الذي تختاره، بدلاً من افتراضها من المسمى."
          ],
          "table": {
            "caption": "مسميات الترتيبات المنزلية وما ينبغي تأكيده",
            "columns": [
              "المسمى",
              "ما الذي يصفه؟",
              "أسئلة للتأكيد"
            ],
            "rows": [
              [
                "عاملة مقيمة",
                "الإقامة داخل منزل الأسرة",
                "السكن وساعات العمل والمهام والراحة المتفق عليها"
              ],
              [
                "عاملة غير مقيمة",
                "الإقامة خارج منزل الأسرة",
                "مواعيد الوصول والتنقل وفترة العمل"
              ],
              [
                "دوام جزئي",
                "دعم ضمن جدول محدود ومتفق عليه",
                "عدد الزيارات ومدتها وأولويات المهام والتوفر"
              ]
            ]
          }
        },
        {
          "heading": "حدد ترتيب التوظيف المنطبق",
          "paragraphs": [
            "يميز دليل الوزارة لأصحاب العمل بين الاستقدام التقليدي والمؤقت والمرن. تتعلق هذه الفئات الرسمية بعلاقة العمل وفترة الخدمة؛ وليست مرادفات تلقائية للإقامة داخل المنزل أو خارجه، ولا تحدد انطباق باقة معينة من عناية.",
            "اسأل من يوظف العاملة وأي اتفاق خدمة وعقد عمل ينطبقان. راجع الإجراء الرسمي الحالي لهذا الترتيب. وإذا احتاجت الحالة إلى إجراءات إقامة أو كفالة، فأكد خطواتها المحددة دون الاعتماد على قائمة تخص أسرة أخرى."
          ]
        },
        {
          "heading": "قارن احتياجات المنزل الفعلية",
          "paragraphs": [
            "وضح موقع المنزل وأولوياتك والتواريخ المفضلة. حدد إن كان الاحتياج الأساسي للتنظيف المنزلي أو رعاية الأطفال أو دور منزلي آخر معتمد. لا يغني المسمى المركب عن مناقشة المهام وخبرة العاملة المقترحة بصورة فردية.",
            "اسأل عن توفر الجدول المقترح في إمارتك وطريقة التعامل مع التغييرات. لدى عناية مكتب واحد في عجمان، وتستقبل استفسارات من الإمارات بحسب التوفر. الاستفسار عن خدمة في مدينة أخرى لا يعني وجود فرع فيها أو ضمان التوفر."
          ]
        },
        {
          "heading": "اطلب الشروط مكتوبة قبل الاختيار",
          "paragraphs": [
            "باقات عناية المنشورة هي 120 درهماً لأربع ساعات، و200 درهم لثماني ساعات، و1,120 درهماً لسبعة أيام، و3,500 درهم لثلاثين يوماً. تبلغ تكلفة عقد الستة أشهر 3,250 درهماً شهرياً، وعقد الاثني عشر شهراً 3,000 درهم شهرياً. الأسعار المنشورة واحدة للخدمة المقيمة وغير المقيمة. أكد الدور المختار والجدول والمسؤوليات وعرض السعر النهائي المكتوب قبل الحجز. أسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة. سجل السكن والطعام والنقل ومواد التنظيف والمعدات والضريبة المنطبقة في النطاق وعرض السعر المكتوبين؛ فتساوي سعر الباقة لا يثبت شمول كل نفقة مرتبطة بها. تحدد باقتا الأربع والثماني ساعات مدة الزيارة. اتفق على ساعات العمل والراحة الأسبوعية والمهام الإضافية للباقات الأطول؛ ولا تعني باقة السبعة أيام العمل سبعة أيام متتالية.",
            "تواصل مع عناية هاتفياً أو عبر واتساب لشرح الترتيب المفضل وأسئلتك. اطلب النطاق والجدول وأساس الدفع وسياسة الدعم ذات الصلة كتابةً. تجهيز التفاصيل في نموذج الاستفسار لا يرسلها إلى الفريق ولا يؤكد موعداً."
          ]
        },
        {
          "heading": "قارن باقات العقود المنشورة",
          "paragraphs": [
            "باقات عناية المنشورة هي 120 درهماً لأربع ساعات، و200 درهم لثماني ساعات، و1,120 درهماً لسبعة أيام، و3,500 درهم لثلاثين يوماً. تبلغ تكلفة عقد الستة أشهر 3,250 درهماً شهرياً، وعقد الاثني عشر شهراً 3,000 درهم شهرياً. الأسعار المنشورة واحدة للخدمة المقيمة وغير المقيمة. أكد الدور المختار والجدول والمسؤوليات وعرض السعر النهائي المكتوب قبل الحجز.",
            "أسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة. سجل السكن والطعام والنقل ومواد التنظيف والمعدات والضريبة المنطبقة في النطاق وعرض السعر المكتوبين؛ فتساوي سعر الباقة لا يثبت شمول كل نفقة مرتبطة بها. تحدد باقتا الأربع والثماني ساعات مدة الزيارة. اتفق على ساعات العمل والراحة الأسبوعية والمهام الإضافية للباقات الأطول؛ ولا تعني باقة السبعة أيام العمل سبعة أيام متتالية."
          ],
          "table": {
            "caption": "باقات عناية — السعر المنشور نفسه للخدمة المقيمة وغير المقيمة",
            "columns": [
              "الباقة",
              "المدة أو الالتزام",
              "السعر المنشور"
            ],
            "rows": [
              [
                "نصف يوم",
                "4 ساعات",
                "120 درهماً"
              ],
              [
                "يومي",
                "8 ساعات",
                "200 درهم"
              ],
              [
                "أسبوعي",
                "7 أيام",
                "1,120 درهماً"
              ],
              [
                "شهري",
                "30 يوماً",
                "3,500 درهم"
              ],
              [
                "عقد ستة أشهر",
                "التزام لمدة 6 أشهر",
                "3,250 درهماً شهرياً"
              ],
              [
                "عقد سنوي",
                "التزام لمدة 12 شهراً",
                "3,000 درهم شهرياً"
              ]
            ]
          }
        },
        {
          "heading": "توظيف الوكالة ومسؤوليات الأسرة",
          "paragraphs": [
            "في خدمة عناية الشهرية المدارة، تدير الوكالة صاحبة العمل والكفيل الأجر والتزامات التوظيف المنطبقة ضمن رسوم الخدمة. أسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة. منزلك هو المستفيد ويلتزم بمسؤوليات السكن والطعام والمعدات والمهام المكتوبة؛ ولا يدفع الأجر المشمول مرة أخرى."
          ],
          "points": [
            "تشمل رسوم الخدمة راتب العاملة المتفق عليه؛ ولا يدفع العميل الراتب نفسه مرة أخرى بصورة منفصلة.",
            "سجل الدور الفردي والمهام والجدول والراحة والإشراف وترتيبات العمل الآمن كتابةً.",
            "حدد في الاتفاق مسؤوليات السكن والطعام للعاملة المقيمة ومنتجات المنزل والمعدات.",
            "يبدأ العمل بعد الحصول على التصاريح النظامية المطلوبة والتأكيد المكتوب.",
            "رسوم الخدمة الشهرية لا تحل محل عقد العمل ولا تلغي الحقوق القانونية."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "استفسارات العاملة المقيمة",
          "route": "services/live-in-maid"
        },
        {
          "label": "استفسارات العاملة غير المقيمة",
          "route": "services/live-out-maid"
        },
        {
          "label": "الدعم المنزلي بدوام جزئي",
          "route": "services/part-time-maid"
        },
        {
          "label": "أسئلة الباقة الشهرية",
          "route": "blog/monthly-maid-package-inclusions-checklist"
        },
        {
          "label": "ناقش الترتيب المناسب",
          "route": "contact"
        }
      ],
      "sourceIntro": "السياق الرسمي لترتيبات التوظيف",
      "sourceNote": "تشرح المصادر الرسمية متطلبات التوظيف والإجراءات المنطبقة. وتبين أعلاه عناصر خدمة عناية المدارة وشروطها التجارية بصورة منفصلة، كما تسجل في عرض السعر المكتوب."
    },
    "sources": [
      {
        "en": "MOHRE: domestic workers employers guide (English PDF)",
        "ar": "وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (ملف PDF بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/assets/download/5055543/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx"
      },
      {
        "en": "MOHRE: new domestic worker employment contract (English)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      },
      {
        "en": "MOHRE: new domestic worker employment contract (Arabic)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)",
        "url": "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      }
    ]
  },
  {
    "slug": "monthly-maid-package-inclusions-checklist",
    "published": "2026-10-09",
    "updated": "2026-10-19",
    "en": {
      "title": "What is included in a monthly maid package?",
      "description": "See the managed monthly salary inclusions, tier features, household responsibilities, payment terms, cancellation refunds and eligible replacement support.",
      "lead": "INAYA’s published contract plans are AED 120 for 4 hours, AED 200 for 8 hours, AED 1,120 for 7 days and AED 3,500 for 30 days. A six-month contract costs AED 3,250 per month; a twelve-month contract costs AED 3,000 per month. The published rates are the same for live-in and live-out arrangements. Confirm the selected role, schedule, responsibilities and final written quotation before booking.",
      "sections": [
        {
          "heading": "Compare the published contract plans",
          "paragraphs": [
            "INAYA’s published contract plans are AED 120 for 4 hours, AED 200 for 8 hours, AED 1,120 for 7 days and AED 3,500 for 30 days. A six-month contract costs AED 3,250 per month; a twelve-month contract costs AED 3,000 per month. The published rates are the same for live-in and live-out arrangements. Confirm the selected role, schedule, responsibilities and final written quotation before booking.",
            "The published plan prices are the same for live-in and live-out service. Record accommodation, meals, transport, cleaning supplies, equipment and applicable tax in the written scope and quotation; equal plan prices do not establish that every related expense is included. The 4-hour and 8-hour plans specify visit duration. Agree working hours, weekly rest and additional duties for longer plans; a 7-day plan does not mean seven consecutive working days."
          ],
          "table": {
            "caption": "INAYA contract plans — same published price for live-in and live-out",
            "columns": [
              "Contract plan",
              "Duration or commitment",
              "Published price"
            ],
            "rows": [
              [
                "Half day",
                "4 hours",
                "AED 120"
              ],
              [
                "Daily",
                "8 hours",
                "AED 200"
              ],
              [
                "Weekly",
                "7 days",
                "AED 1,120"
              ],
              [
                "Monthly",
                "30 days",
                "AED 3,500"
              ],
              [
                "Six-month contract",
                "6-month commitment",
                "AED 3,250 per month"
              ],
              [
                "Yearly contract",
                "12-month commitment",
                "AED 3,000 per month"
              ]
            ]
          }
        },
        {
          "heading": "Choose the service period and record the duties",
          "paragraphs": [
            "The 4-hour and 8-hour plans specify the visit duration. The weekly plan covers a 7-day service period and the monthly plan a 30-day period; these labels do not establish daily working hours or remove weekly rest. The six-month and yearly prices are monthly amounts tied to the stated contract commitment."
          ],
          "points": [
            "Confirm the individual role, available candidate and written schedule.",
            "Record accommodation, meals, transport, supplies, equipment and applicable tax responsibilities.",
            "Agree onboarding, the service contact and follow-up arrangements.",
            "Review the contract, cancellation and replacement terms before confirmation."
          ]
        },
        {
          "heading": "Agency employment and household responsibilities",
          "paragraphs": [
            "Check that the agency employer/sponsor, worker and household beneficiary are named. The agency administers the salary and employment obligations included in the charge; the household fulfils its agreed responsibilities. Confirm that the included wage is not also requested as a separate customer payment."
          ],
          "points": [
            "The service payment includes the agreed worker salary; the customer does not pay that same salary separately.",
            "Write down the individual role, duties, schedule, rest, supervision and safe working arrangements.",
            "Record live-in accommodation, meals, household products and equipment responsibilities in the agreement.",
            "Required lawful authorisation and written confirmation precede service commencement.",
            "A monthly service charge does not replace the employment contract or waive statutory rights."
          ]
        },
        {
          "heading": "What the managed monthly service includes",
          "paragraphs": [
            "Tick each core inclusion below against the monthly quotation. “All-inclusive” describes these defined components, not unlimited duties or every expense. For insurance, check the issued policy’s benefits, exclusions and co-payments separately from the included premium. These inclusions apply within the managed monthly agreement and its scope; they are not automatic benefits of every half-day, daily or weekly visit."
          ],
          "points": [
            "The domestic worker’s agreed salary.",
            "Documented salary-payment administration through the applicable approved mechanism.",
            "Applicable government fees, agency sponsorship and work-permit/residence processing within the monthly agreement.",
            "Emirates ID and required medical-fitness processing.",
            "The applicable health-insurance premium; benefits, exclusions and co-payments follow the issued policy and lawful responsibilities.",
            "Candidate assessment, initial orientation and agreed onboarding.",
            "Return ticket and end-of-service benefits under the applicable monthly agreement and employment obligations.",
            "Customer coordination and administration of eligible replacement requests.",
            "Applicable agency employment obligations budgeted within the monthly service charge."
          ]
        },
        {
          "heading": "Household responsibilities and separately quoted services",
          "paragraphs": [
            "The published plan prices are the same for live-in and live-out service. Record accommodation, meals, transport, cleaning supplies, equipment and applicable tax in the written scope and quotation; equal plan prices do not establish that every related expense is included. The 4-hour and 8-hour plans specify visit duration. Agree working hours, weekly rest and additional duties for longer plans; a 7-day plan does not mean seven consecutive working days."
          ],
          "points": [
            "Live-in accommodation and meals: responsibilities are recorded in the applicable agreement.",
            "Household cleaning products and equipment: responsibilities are recorded in the service scope.",
            "Accommodation and transport responsibilities: recorded in the written quotation; published live-in and live-out plan prices are the same.",
            "Overseas travel with the family and destination-specific procedures: separately agreed.",
            "Specialist clinical care, specialist cleaning and duties outside the agreed role are outside the standard household scope unless separately and lawfully arranged.",
            "Additional requested services and material scope changes are priced and agreed before acceptance.",
            "Applicable tax and the final payable amount are identified in the written quotation."
          ]
        },
        {
          "heading": "Monthly payments and written confirmation",
          "paragraphs": [
            "Verify the advance first-month payment, later monthly billing date and payment documents. For standard managed monthly service there is no separate upfront setup/recruitment fee or security deposit. Do not extend those terms automatically to a separate recruitment or visa contract."
          ],
          "points": [
            "Receive the written service scope, price breakdown and applicable payment documentation before confirmation.",
            "The quotation identifies included components, exclusions, applicable tax and the final payable amount.",
            "Record the service period, monthly billing date, renewal arrangements and any agreed changes.",
            "A package payment is different from the worker’s wage, even though the wage is included in the managed service price."
          ]
        },
        {
          "heading": "Candidate selection and service commencement",
          "paragraphs": [
            "Record the selected candidate, lawful authorisation and written start confirmation. If INAYA proposes someone different, check the revised profile and give consent before confirmation; keep material changes and agreed alternatives in writing."
          ],
          "points": [
            "Review the individual profile against agreed duties and communication needs, rather than nationality-based assumptions.",
            "If another candidate is proposed, INAYA provides the revised profile and obtains customer consent.",
            "Material changes and agreed alternatives are explained in writing.",
            "Prepare a practical household handover with duties, safety instructions and key contacts.",
            "Availability and official approvals determine the agreed start; no same-day placement or fixed government approval time is promised."
          ]
        },
        {
          "heading": "Managed monthly cancellation and refunds",
          "paragraphs": [
            "Check how the monthly agreement records unused service payment: return before commencement, or a pro-rata refund for unused prepaid service after effective cancellation. The calculation must identify the prepaid amount and relevant dates; included costs are not unexpected deductions and cancellation charges are not hidden."
          ],
          "points": [
            "The unused-period calculation and relevant dates are explained in writing.",
            "No undisclosed cancellation charge is imposed.",
            "Costs already included in the monthly package are not reintroduced as unexpected deductions.",
            "Customer service refunds are separate from the worker’s wages and employment entitlements.",
            "Normal paid rest and protected leave are not automatic cancellation or refund events.",
            "Applicable statutory remedies and deadlines remain in force; recruitment-fee rules apply to the relevant recruitment arrangement, not automatically to monthly payments."
          ]
        },
        {
          "heading": "Eligible replacement support in the managed monthly service",
          "paragraphs": [
            "Eligible replacement review, matching coordination and administration are included in the managed monthly service. Eligibility follows the agreed duties, employment arrangement and applicable legal obligations. Review an alternative profile and give consent before confirmation; no unlimited replacement count or fixed completion date is promised."
          ],
          "points": [
            "Share the agreement, agreed duties, relevant dates and a clear description of the concern.",
            "INAYA explains the eligibility review, available matching options and next steps.",
            "Review the proposed candidate and give consent before a replacement arrangement is confirmed.",
            "If a suitable replacement is unavailable, discuss available alternatives and effective cancellation; unused prepaid service is handled under the monthly refund terms.",
            "The support includes eligible review, matching coordination and administration, without an unlimited replacement promise or fixed completion deadline.",
            "Legally required remedies remain available."
          ]
        },
        {
          "heading": "Follow-up schedules and human support hours",
          "paragraphs": [
            "After the written duty handover, use the contact and review schedule recorded in your service agreement. Discuss individual duties, coordination and any concerns with that contact. Follow-up does not promise immediate placement, a fixed response time or uninterrupted human support."
          ],
          "points": [
            "Human support hours: Saturday–Thursday, 9 AM–9 PM; Friday closed.",
            "WhatsApp messages may be received outside office hours; this is not a 24/7 human helpline or a guaranteed response time.",
            "Office: +971 6 740 0128. WhatsApp: +971 50 203 6767. Email: info@inayadomestic.ae.",
            "Visit Grand Mall, ground floor, Al Rashidiya 3, Ajman, and coordinate the visit with the team.",
            "For a complaint, share the relevant agreement and concern, keep written communications and use the existing support and official escalation channels."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "Published package prices",
          "route": "pricing"
        },
        {
          "label": "Monthly maid enquiries",
          "route": "services/monthly-maid-contract"
        },
        {
          "label": "Compare residence and schedules",
          "route": "blog/live-in-live-out-part-time-maid-uae"
        },
        {
          "label": "Review refund terms",
          "route": "refund-policy"
        },
        {
          "label": "Confirm package details",
          "route": "contact"
        }
      ],
      "sourceIntro": "Contract references for your checklist",
      "sourceNote": "The official sources explain the applicable employment and processing requirements. INAYA’s managed-service inclusions and commercial terms are stated separately above and in the written quotation."
    },
    "ar": {
      "title": "ما الذي تشمله باقة العاملة المنزلية الشهرية؟",
      "description": "تعرف على شمول الراتب وعناصر الباقات الشهرية المدارة ومسؤوليات المنزل وشروط السداد والاسترداد عند الإلغاء ودعم الاستبدال المؤهل.",
      "lead": "باقات عناية المنشورة هي 120 درهماً لأربع ساعات، و200 درهم لثماني ساعات، و1,120 درهماً لسبعة أيام، و3,500 درهم لثلاثين يوماً. تبلغ تكلفة عقد الستة أشهر 3,250 درهماً شهرياً، وعقد الاثني عشر شهراً 3,000 درهم شهرياً. الأسعار المنشورة واحدة للخدمة المقيمة وغير المقيمة. أكد الدور المختار والجدول والمسؤوليات وعرض السعر النهائي المكتوب قبل الحجز.",
      "sections": [
        {
          "heading": "قارن باقات العقود المنشورة",
          "paragraphs": [
            "باقات عناية المنشورة هي 120 درهماً لأربع ساعات، و200 درهم لثماني ساعات، و1,120 درهماً لسبعة أيام، و3,500 درهم لثلاثين يوماً. تبلغ تكلفة عقد الستة أشهر 3,250 درهماً شهرياً، وعقد الاثني عشر شهراً 3,000 درهم شهرياً. الأسعار المنشورة واحدة للخدمة المقيمة وغير المقيمة. أكد الدور المختار والجدول والمسؤوليات وعرض السعر النهائي المكتوب قبل الحجز.",
            "أسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة. سجل السكن والطعام والنقل ومواد التنظيف والمعدات والضريبة المنطبقة في النطاق وعرض السعر المكتوبين؛ فتساوي سعر الباقة لا يثبت شمول كل نفقة مرتبطة بها. تحدد باقتا الأربع والثماني ساعات مدة الزيارة. اتفق على ساعات العمل والراحة الأسبوعية والمهام الإضافية للباقات الأطول؛ ولا تعني باقة السبعة أيام العمل سبعة أيام متتالية."
          ],
          "table": {
            "caption": "باقات عناية — السعر المنشور نفسه للخدمة المقيمة وغير المقيمة",
            "columns": [
              "الباقة",
              "المدة أو الالتزام",
              "السعر المنشور"
            ],
            "rows": [
              [
                "نصف يوم",
                "4 ساعات",
                "120 درهماً"
              ],
              [
                "يومي",
                "8 ساعات",
                "200 درهم"
              ],
              [
                "أسبوعي",
                "7 أيام",
                "1,120 درهماً"
              ],
              [
                "شهري",
                "30 يوماً",
                "3,500 درهم"
              ],
              [
                "عقد ستة أشهر",
                "التزام لمدة 6 أشهر",
                "3,250 درهماً شهرياً"
              ],
              [
                "عقد سنوي",
                "التزام لمدة 12 شهراً",
                "3,000 درهم شهرياً"
              ]
            ]
          }
        },
        {
          "heading": "اختر مدة الخدمة وسجل المهام",
          "paragraphs": [
            "تحدد باقتا الأربع والثماني ساعات مدة الزيارة. تغطي الباقة الأسبوعية فترة خدمة لسبعة أيام والشهرية فترة لثلاثين يوماً؛ ولا تحدد هذه المسميات ساعات العمل اليومية ولا تلغي الراحة الأسبوعية. سعرا عقد الستة أشهر والعقد السنوي مبالغ شهرية مرتبطة بالالتزام المحدد للعقد."
          ],
          "points": [
            "أكد الدور الفردي والمرشحة المتاحة والجدول المكتوب.",
            "سجل مسؤوليات السكن والطعام والنقل والمستلزمات والمعدات والضريبة المنطبقة.",
            "اتفق على التهيئة ومسؤول الخدمة وترتيبات المتابعة.",
            "راجع العقد وشروط الإلغاء والاستبدال قبل التأكيد."
          ]
        },
        {
          "heading": "توظيف الوكالة ومسؤوليات الأسرة",
          "paragraphs": [
            "تحقق من تسمية الوكالة صاحبة العمل والكفيل والعاملة والأسرة المستفيدة. تدير الوكالة الراتب والتزامات التوظيف المشمولة في الرسوم؛ ويلتزم المنزل بمسؤولياته المتفق عليها. أكد ألا يطلب الأجر المشمول أيضاً كدفعة منفصلة من العميل."
          ],
          "points": [
            "تشمل رسوم الخدمة راتب العاملة المتفق عليه؛ ولا يدفع العميل الراتب نفسه مرة أخرى بصورة منفصلة.",
            "سجل الدور الفردي والمهام والجدول والراحة والإشراف وترتيبات العمل الآمن كتابةً.",
            "حدد في الاتفاق مسؤوليات السكن والطعام للعاملة المقيمة ومنتجات المنزل والمعدات.",
            "يبدأ العمل بعد الحصول على التصاريح النظامية المطلوبة والتأكيد المكتوب.",
            "رسوم الخدمة الشهرية لا تحل محل عقد العمل ولا تلغي الحقوق القانونية."
          ]
        },
        {
          "heading": "ما تشمله الخدمة الشهرية المدارة",
          "paragraphs": [
            "طابق كل عنصر أساسي مشمول أدناه مع العرض الشهري. تصف عبارة شمول التكاليف هذه العناصر المحددة، لا مهاماً غير محدودة أو كل نفقة. وللتأمين، تحقق من منافع الوثيقة الصادرة واستثناءاتها والمساهمات في الدفع منفصلة عن القسط المشمول. تسري هذه العناصر ضمن اتفاق الخدمة الشهرية المدارة ونطاقه؛ ولا تعد مزايا تلقائية لكل زيارة بنصف يوم أو يومية أو أسبوعية."
          ],
          "points": [
            "راتب العاملة المنزلية المتفق عليه.",
            "إدارة موثقة لسداد الراتب عبر الآلية المعتمدة المنطبقة.",
            "الرسوم الحكومية المنطبقة والكفالة لدى الوكالة وإجراءات تصريح العمل والإقامة ضمن الاتفاق الشهري.",
            "إجراءات الهوية الإماراتية وفحص اللياقة الطبية المطلوب.",
            "قسط التأمين الصحي المنطبق؛ وتحدد الوثيقة الصادرة والمسؤوليات القانونية المنافع والاستثناءات والمساهمات في الدفع.",
            "تقييم المرشحة والتوجيه الأولي والتهيئة المتفق عليها لبدء الخدمة.",
            "تذكرة العودة ومكافأة نهاية الخدمة وفق الاتفاق الشهري المنطبق والتزامات التوظيف.",
            "التنسيق مع العميل وإدارة طلبات الاستبدال المؤهلة.",
            "التزامات الوكالة المتعلقة بالتوظيف والمنطبقة على الترتيب، محسوبة ضمن رسوم الخدمة الشهرية."
          ]
        },
        {
          "heading": "مسؤوليات المنزل والخدمات ذات العروض المنفصلة",
          "paragraphs": [
            "أسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة. سجل السكن والطعام والنقل ومواد التنظيف والمعدات والضريبة المنطبقة في النطاق وعرض السعر المكتوبين؛ فتساوي سعر الباقة لا يثبت شمول كل نفقة مرتبطة بها. تحدد باقتا الأربع والثماني ساعات مدة الزيارة. اتفق على ساعات العمل والراحة الأسبوعية والمهام الإضافية للباقات الأطول؛ ولا تعني باقة السبعة أيام العمل سبعة أيام متتالية."
          ],
          "points": [
            "السكن والطعام للعاملة المقيمة: تسجل المسؤوليات في الاتفاق المنطبق.",
            "منتجات التنظيف المنزلية والمعدات: تسجل المسؤوليات في نطاق الخدمة.",
            "مسؤوليات السكن والنقل: تسجل في عرض السعر المكتوب؛ وأسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة.",
            "السفر خارج الدولة مع الأسرة وإجراءات بلد الوجهة: يتفق عليها بصورة منفصلة.",
            "الرعاية السريرية والتنظيف المتخصص والمهام خارج الدور المتفق عليه ليست ضمن نطاق الخدمة المنزلية القياسية إلا بترتيب منفصل ونظامي.",
            "تحدد أسعار الخدمات الإضافية المطلوبة والتغييرات الجوهرية في النطاق، ويتفق عليها قبل قبولها.",
            "يبين عرض السعر المكتوب الضريبة المنطبقة والمبلغ النهائي المستحق."
          ]
        },
        {
          "heading": "السداد الشهري والتأكيد المكتوب",
          "paragraphs": [
            "تحقق من دفعة الشهر الأول المقدمة وتاريخ الفوترة الشهري اللاحق ومستندات السداد. لا توجد رسوم تجهيز أو استقدام منفصلة مقدماً أو تأمين نقدي للخدمة الشهرية القياسية المدارة. لا تمدد هذه الشروط تلقائياً إلى عقد استقدام أو تأشيرة منفصل."
          ],
          "points": [
            "تسلم نطاق الخدمة المكتوب وتفصيل السعر ومستندات السداد المنطبقة قبل التأكيد.",
            "يبين العرض العناصر المشمولة والاستثناءات والضريبة المنطبقة والمبلغ النهائي المستحق.",
            "سجل فترة الخدمة وتاريخ الفوترة الشهري وترتيبات التجديد وأي تغييرات متفق عليها.",
            "دفعة الباقة تختلف عن أجر العاملة، رغم أن الأجر مشمول في سعر الخدمة المدارة."
          ]
        },
        {
          "heading": "اختيار المرشحة وبدء الخدمة",
          "paragraphs": [
            "سجل المرشحة المختارة والتصاريح النظامية وتأكيد البدء المكتوب. إذا اقترحت عناية شخصاً مختلفاً، تحقق من الملف المعدل ووافق قبل التأكيد؛ واحتفظ بالتغييرات الجوهرية والبدائل المتفق عليها كتابةً."
          ],
          "points": [
            "راجع الملف الفردي وفق المهام المتفق عليها واحتياجات التواصل، دون افتراضات مبنية على الجنسية.",
            "إذا اقترحت مرشحة أخرى، تقدم عناية الملف المعدل وتحصل على موافقة العميل.",
            "توضح التغييرات الجوهرية والبدائل المتفق عليها كتابةً.",
            "جهز تسليماً عملياً لاحتياجات المنزل يشمل المهام وتعليمات السلامة وجهات التواصل الأساسية.",
            "يحدد التوفر والموافقات الرسمية موعد البدء المتفق عليه؛ ولا يوجد وعد ببدء الخدمة في اليوم نفسه أو بمدة ثابتة للموافقة الحكومية."
          ]
        },
        {
          "heading": "إلغاء الخدمة الشهرية المدارة والاسترداد",
          "paragraphs": [
            "تحقق من كيفية تسجيل الاتفاق الشهري لدفعة الخدمة غير المستخدمة: إعادتها قبل البدء، أو استرداد تناسبي للخدمة المدفوعة وغير المستخدمة بعد سريان الإلغاء. يجب أن يحدد الحساب المبلغ المدفوع والتواريخ ذات الصلة؛ فلا تخصم التكاليف المشمولة بصورة مفاجئة ولا تخفى رسوم الإلغاء."
          ],
          "points": [
            "يوضح حساب الفترة غير المستخدمة والتواريخ ذات الصلة كتابةً.",
            "لا تفرض رسوم إلغاء غير مفصح عنها.",
            "لا تعاد التكاليف المشمولة أصلاً في الباقة الشهرية كخصومات غير متوقعة.",
            "استرداد رسوم الخدمة للعميل مستقل عن أجور العاملة وحقوقها الوظيفية.",
            "الراحة المعتادة المدفوعة والإجازات المحمية ليستا سبباً تلقائياً للإلغاء أو الاسترداد.",
            "تبقى سبل الإنصاف والمواعيد القانونية المنطبقة قائمة؛ وتخص قواعد رد رسوم الاستقدام ترتيب الاستقدام المعني، ولا تطبق تلقائياً على الدفعات الشهرية."
          ]
        },
        {
          "heading": "دعم الاستبدال المؤهل في الخدمة الشهرية المدارة",
          "paragraphs": [
            "تشمل الخدمة الشهرية المدارة مراجعة طلبات الاستبدال المؤهلة وتنسيق المطابقة وإدارة الإجراءات. تتبع الأهلية المهام المتفق عليها وترتيب التوظيف والالتزامات القانونية المنطبقة. راجع الملف البديل ووافق عليه قبل التأكيد؛ ولا يوجد وعد باستبدالات غير محدودة أو موعد إنجاز ثابت."
          ],
          "points": [
            "شارك الاتفاق والمهام المتفق عليها والتواريخ ذات الصلة ووصفاً واضحاً للملاحظة.",
            "توضح عناية مراجعة الأهلية وخيارات المطابقة المتاحة والخطوات التالية.",
            "راجع المرشحة المقترحة وقدم موافقتك قبل تأكيد ترتيب الاستبدال.",
            "إذا لم يتوفر بديل مناسب، ناقش البدائل المتاحة وسريان الإلغاء؛ وتعالج الخدمة المدفوعة وغير المستخدمة وفق شروط الاسترداد الشهرية.",
            "يشمل الدعم المراجعة المؤهلة وتنسيق المطابقة وإدارة الإجراءات، دون وعد باستبدال غير محدود أو بمدة إنجاز ثابتة.",
            "تبقى سبل الإنصاف المطلوبة قانوناً متاحة."
          ]
        },
        {
          "heading": "مواعيد المتابعة وساعات الدعم البشري",
          "paragraphs": [
            "بعد تسليم بيان المهام المكتوب، استخدم مسؤول التواصل وجدول المراجعة المحددين في اتفاق الخدمة. ناقش معه المهام الفردية والتنسيق وأي ملاحظات. لا تعني المتابعة وعداً بتوفير فوري لعاملة أو وقت رد ثابت أو دعم بشري مستمر."
          ],
          "points": [
            "ساعات الدعم البشري: من السبت إلى الخميس، من 9 صباحاً إلى 9 مساءً؛ الجمعة مغلق.",
            "يمكن استقبال رسائل واتساب خارج ساعات المكتب؛ ولا يعني ذلك خطاً بشرياً يعمل على مدار الساعة أو وقت رد مضموناً.",
            "هاتف المكتب: +971 6 740 0128. واتساب: +971 50 203 6767. البريد الإلكتروني: info@inayadomestic.ae.",
            "العنوان: جراند مول، الطابق الأرضي، الراشدية 3، عجمان. نسق الزيارة مع الفريق.",
            "للشكوى، شارك الاتفاق والملاحظة ذات الصلة، واحتفظ بالمراسلات المكتوبة، واستخدم قنوات الدعم والتصعيد الرسمي القائمة."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "أسعار الباقات المنشورة",
          "route": "pricing"
        },
        {
          "label": "استفسارات العاملة الشهرية",
          "route": "services/monthly-maid-contract"
        },
        {
          "label": "قارن الإقامة والجداول",
          "route": "blog/live-in-live-out-part-time-maid-uae"
        },
        {
          "label": "راجع شروط الاسترداد",
          "route": "refund-policy"
        },
        {
          "label": "أكد تفاصيل الباقة",
          "route": "contact"
        }
      ],
      "sourceIntro": "مراجع العقود لقائمة المراجعة",
      "sourceNote": "تشرح المصادر الرسمية متطلبات التوظيف والإجراءات المنطبقة. وتبين أعلاه عناصر خدمة عناية المدارة وشروطها التجارية بصورة منفصلة، كما تسجل في عرض السعر المكتوب."
    },
    "sources": [
      {
        "en": "MOHRE: domestic workers employers guide (English PDF)",
        "ar": "وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (ملف PDF بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/assets/download/5055543/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx"
      },
      {
        "en": "MOHRE: new domestic worker employment contract (English)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      },
      {
        "en": "MOHRE: new domestic worker employment contract (Arabic)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)",
        "url": "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      }
    ]
  },
  {
    "slug": "maid-nanny-babysitter-differences",
    "published": "2026-10-10",
    "updated": "2026-10-19",
    "en": {
      "title": "Maid, nanny or babysitter: choosing the right role",
      "description": "Compare household support and childcare priorities, review individual experience and agree duties before discussing maid, nanny or babysitter arrangements.",
      "lead": "Choose the role by the work your household needs, not the title alone. Maid enquiries usually focus on household tasks; nanny and babysitter enquiries focus on children. The individual duties, schedule and suitability must be discussed and agreed separately.",
      "sections": [
        {
          "heading": "Identify the main priority first",
          "paragraphs": [
            "Write down whether your primary need is household support or looking after children. Then describe the tasks and times that matter most. If both are needed, discuss how responsibilities would be allocated rather than assuming one person can cover simultaneous priorities.",
            "The descriptions below are common enquiry distinctions, not promised INAYA duties or qualifications. A maid may not be suitable for your childcare requirements, and a childcare role does not automatically include cleaning, cooking or every household task."
          ],
          "table": {
            "caption": "Questions that distinguish the three role enquiries",
            "columns": [
              "Role",
              "Enquiry focus",
              "Individual details to review"
            ],
            "rows": [
              [
                "Maid",
                "Household support and cleaning priorities",
                "Agreed tasks, work area and relevant experience"
              ],
              [
                "Nanny",
                "Childcare needs within the family’s routine",
                "Children’s ages, routine, experience and agreed responsibilities"
              ],
              [
                "Babysitter",
                "Child supervision during requested periods",
                "Dates, duration, handover and relevant childcare experience"
              ]
            ]
          }
        },
        {
          "heading": "Review the individual profile, not a blanket claim",
          "paragraphs": [
            "Explain the children’s ages and the routine you want to discuss. Ask about the proposed person’s experience with similar responsibilities and what information is available to assess it. Do not treat a general job title as evidence of training or a qualification.",
            "Discuss communication, handover instructions and how questions would be raised with the family. Agree responsibilities in writing before confirming. If a need falls outside ordinary non-clinical household or childcare support, seek an appropriately qualified professional rather than assuming the domestic role covers it."
          ]
        },
        {
          "heading": "Confirm the arrangement and work schedule",
          "paragraphs": [
            "Role and arrangement answer different questions. Nanny or babysitter describes the focus of the work, while live-in, live-out and a limited schedule concern residence or work period. Ask which arrangement is actually available; none establishes standard hours or a price automatically.",
            "MOHRE’s employer guide and contract service provide background on employment arrangements and formal requirements. Confirm the applicable agreement for the proposed role, including duties, period and relevant terms. Do not substitute an informal task list for the required contract process."
          ]
        },
        {
          "heading": "Prepare a focused enquiry to INAYA",
          "paragraphs": [
            "Share your emirate, preferred dates, main responsibilities and any experience preferences. INAYA receives UAE enquiries from its single Ajman office subject to service availability. Ask the team to confirm the proposed individual, duties, schedule and terms before making a decision.",
            "Use the maid, nanny or babysitting service page for the appropriate enquiry. Call or WhatsApp to discuss availability and an appointment. The website form prepares information locally and does not transmit a request, confirm an appointment or guarantee a suitable profile."
          ]
        },
        {
          "heading": "Match the service plan to the individual role",
          "paragraphs": [
            "INAYA reviews housemaid, nanny, babysitting and non-clinical caregiver enquiries according to the individual duties and availability. Define the role, relevant experience, communication needs and household handover in the written service plan. A contract duration does not make every domestic role interchangeable or establish a professional qualification.",
            "The published plan prices are the same for live-in and live-out service. Record accommodation, meals, transport, cleaning supplies, equipment and applicable tax in the written scope and quotation; equal plan prices do not establish that every related expense is included. The 4-hour and 8-hour plans specify visit duration. Agree working hours, weekly rest and additional duties for longer plans; a 7-day plan does not mean seven consecutive working days."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "Household support arrangements",
          "route": "services/live-out-maid"
        },
        {
          "label": "Nanny enquiries",
          "route": "services/nanny"
        },
        {
          "label": "Babysitting enquiries",
          "route": "services/babysitting"
        },
        {
          "label": "Questions before choosing a provider",
          "route": "blog/uae-domestic-worker-hiring-process"
        },
        {
          "label": "Discuss your family’s needs",
          "route": "contact"
        }
      ],
      "sourceIntro": "Employment context for household roles",
      "sourceNote": "The official sources explain the applicable employment and processing requirements. INAYA’s managed-service inclusions and commercial terms are stated separately above and in the written quotation."
    },
    "ar": {
      "title": "عاملة منزلية أم مربية أم جليسة أطفال؟",
      "description": "قارن أولويات الدعم المنزلي ورعاية الأطفال، وراجع الخبرة الفردية والمهام قبل مناقشة ترتيب العاملة المنزلية أو المربية أو جليسة الأطفال.",
      "lead": "اختر الدور بناءً على احتياجات أسرتك الفعلية، لا المسمى وحده. تركز استفسارات العاملة المنزلية عادةً على شؤون المنزل، بينما تركز المربية وجليسة الأطفال على الأطفال. وتحتاج المهام والجدول والملاءمة الفردية إلى مناقشة واتفاق مستقلين.",
      "sections": [
        {
          "heading": "حدد الأولوية الأساسية أولاً",
          "paragraphs": [
            "دوّن إن كان احتياجك الأساسي للدعم المنزلي أم للعناية بالأطفال، ثم وضح المهام والأوقات الأهم. إذا كنت تحتاج الأمرين، فناقش توزيع المسؤوليات بدلاً من افتراض قدرة شخص واحد على أداء أولويات متزامنة.",
            "الأوصاف التالية توضح فروقاً شائعة عند الاستفسار، ولا تعد بمهام أو مؤهلات محددة من عناية. قد لا تناسب العاملة المنزلية احتياجاتك لرعاية الأطفال، كما لا يتضمن دور رعاية الأطفال تلقائياً التنظيف أو الطبخ أو جميع أعمال المنزل."
          ],
          "table": {
            "caption": "أسئلة تميز الاستفسارات عن الأدوار الثلاثة",
            "columns": [
              "الدور",
              "محور الاستفسار",
              "تفاصيل فردية للمراجعة"
            ],
            "rows": [
              [
                "عاملة منزلية",
                "أولويات الدعم المنزلي والتنظيف",
                "المهام ومكان العمل والخبرة ذات الصلة"
              ],
              [
                "مربية",
                "احتياجات الأطفال ضمن روتين الأسرة",
                "أعمار الأطفال والروتين والخبرة والمسؤوليات المتفق عليها"
              ],
              [
                "جليسة أطفال",
                "الإشراف على الأطفال في الفترات المطلوبة",
                "التواريخ والمدة والتسليم والخبرة ذات الصلة"
              ]
            ]
          }
        },
        {
          "heading": "راجع الملف الفردي دون تعميم",
          "paragraphs": [
            "اشرح أعمار الأطفال والروتين الذي ترغب في مناقشته. اسأل عن خبرة الشخص المقترح في مسؤوليات مماثلة وعن المعلومات المتاحة لتقييمها. لا تعتبر المسمى الوظيفي العام دليلاً على تدريب أو مؤهل محدد.",
            "ناقش التواصل وتعليمات تسليم الطفل وطريقة طرح الأسئلة على الأسرة، واتفق على المسؤوليات كتابةً. إذا تجاوز الاحتياج الدعم المنزلي أو رعاية الأطفال غير الطبية، فاستعن بمختص مؤهل ولا تفترض أن الدور المنزلي يغطيه."
          ]
        },
        {
          "heading": "أكد ترتيب العمل والجدول",
          "paragraphs": [
            "الدور وترتيب العمل يجيبان عن سؤالين مختلفين. تصف المربية أو جليسة الأطفال محور المهام، بينما تصف الإقامة أو الزيارات المحدودة مكان السكن وفترة العمل. اسأل عن الترتيب المتاح فعلياً؛ فلا يحدد أي مسمى ساعات أو سعراً تلقائياً.",
            "يوفر دليل أصحاب العمل وخدمة العقد لدى الوزارة سياقاً لترتيبات التوظيف والمتطلبات الرسمية. أكد الاتفاق المنطبق على الدور المقترح، بما يشمل المهام والمدة والشروط. لا تستبدل إجراءات العقد المطلوبة بقائمة مهام غير رسمية."
          ]
        },
        {
          "heading": "جهز استفساراً واضحاً لعناية",
          "paragraphs": [
            "شارك إمارتك والتواريخ المفضلة والمسؤوليات الأساسية وتفضيلات الخبرة. تستقبل عناية استفسارات من الإمارات عبر مكتبها الوحيد في عجمان بحسب التوفر. اطلب تأكيد الشخص المقترح والمهام والجدول والشروط قبل الاختيار.",
            "استخدم صفحة الخدمة المناسبة للعاملة أو المربية أو جليسة الأطفال، وتواصل هاتفياً أو عبر واتساب لمناقشة التوفر والموعد. يجهز نموذج الموقع البيانات محلياً فقط، ولا يرسل طلباً أو يؤكد موعداً أو يضمن ملفاً مناسباً."
          ]
        },
        {
          "heading": "طابق خطة الخدمة مع الدور الفردي",
          "paragraphs": [
            "تراجع عناية طلبات العاملات والمربيات وجليسات الأطفال ومقدمي الرعاية غير السريرية بحسب المهام الفردية والتوفر. حدد الدور والخبرة ذات الصلة واحتياجات التواصل وتسليم احتياجات المنزل في خطة الخدمة المكتوبة. لا تجعل مدة العقد الأدوار المنزلية متبادلة ولا تثبت مؤهلاً مهنياً.",
            "أسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة. سجل السكن والطعام والنقل ومواد التنظيف والمعدات والضريبة المنطبقة في النطاق وعرض السعر المكتوبين؛ فتساوي سعر الباقة لا يثبت شمول كل نفقة مرتبطة بها. تحدد باقتا الأربع والثماني ساعات مدة الزيارة. اتفق على ساعات العمل والراحة الأسبوعية والمهام الإضافية للباقات الأطول؛ ولا تعني باقة السبعة أيام العمل سبعة أيام متتالية."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "ترتيبات الدعم المنزلي",
          "route": "services/live-out-maid"
        },
        {
          "label": "استفسارات المربية",
          "route": "services/nanny"
        },
        {
          "label": "استفسارات جليسة الأطفال",
          "route": "services/babysitting"
        },
        {
          "label": "أسئلة قبل اختيار مقدم الخدمة",
          "route": "blog/uae-domestic-worker-hiring-process"
        },
        {
          "label": "ناقش احتياجات الأسرة",
          "route": "contact"
        }
      ],
      "sourceIntro": "سياق التوظيف للأدوار المنزلية",
      "sourceNote": "تشرح المصادر الرسمية متطلبات التوظيف والإجراءات المنطبقة. وتبين أعلاه عناصر خدمة عناية المدارة وشروطها التجارية بصورة منفصلة، كما تسجل في عرض السعر المكتوب."
    },
    "sources": [
      {
        "en": "MOHRE: domestic workers employers guide (English PDF)",
        "ar": "وزارة الموارد البشرية والتوطين: دليل أصحاب العمل (ملف PDF بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/assets/download/5055543/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx"
      },
      {
        "en": "MOHRE: new domestic worker employment contract (English)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      },
      {
        "en": "MOHRE: new domestic worker employment contract (Arabic)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)",
        "url": "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      }
    ]
  },
  {
    "slug": "domestic-worker-visa-sponsorship-support",
    "published": "2026-10-11",
    "updated": "2026-10-12",
    "en": {
      "title": "Preparing a domestic worker visa or sponsorship case",
      "description": "Prepare questions for INAYA’s complete visa-processing support and confirm the case-specific documents, authority requirements, fees and next steps.",
      "lead": "INAYA provides complete visa-processing support: document guidance, application submission, status change, medical processing, Emirates ID processing, insurance processing and end-to-end case processing. Requirements, fees, eligibility and timelines depend on your case and the relevant authorities.",
      "sections": [
        {
          "heading": "Explain your current situation before choosing a process",
          "paragraphs": [
            "Describe the proposed household arrangement, emirate and current stage of the case. Ask which official service and employer category apply, and whether any existing residence or sponsorship situation needs review. Do not assume a new application and a transfer follow identical steps.",
            "The initial discussion helps identify the correct next step; it does not establish eligibility or approve a transfer. Share sensitive identity documents only when needed through an agreed channel. The website enquiry form does not upload documents or submit an official application."
          ]
        },
        {
          "heading": "Understand the support INAYA provides",
          "paragraphs": [
            "The support covers coordination and processing for the steps listed below as applicable to the individual case. Confirm what is needed, who handles each part and which documents must be supplied. A listed support step does not mean it is required in every case.",
            "Medical processing refers to support with the official processing step, not clinical care, nursing or treatment provided by INAYA. Government and other relevant authorities determine requirements and decisions; end-to-end case support does not guarantee approval or a completion date."
          ],
          "table": {
            "caption": "INAYA visa-processing support and case questions",
            "columns": [
              "Support",
              "What to clarify"
            ],
            "rows": [
              [
                "Document guidance",
                "The list for the correct service and applicant category"
              ],
              [
                "Application submission",
                "Required information and the applicable authority"
              ],
              [
                "Status change",
                "Whether this step applies to the present case"
              ],
              [
                "Medical processing",
                "The applicable official medical processing requirements"
              ],
              [
                "Emirates ID processing",
                "The related identity application requirements"
              ],
              [
                "Insurance processing",
                "Applicable insurance requirements and documentation"
              ],
              [
                "End-to-end case processing",
                "Case stages, responsibilities and follow-up"
              ]
            ]
          }
        },
        {
          "heading": "Use official references for the correct category",
          "paragraphs": [
            "MOHRE’s domestic-worker contract service identifies contract documents and application steps. ICP residence services and Dubai’s GDRFA domestic-worker service provide additional authority context. Select the category that actually applies: a family residence checklist is not automatically a domestic-worker checklist.",
            "Ask which contract, residence, identity, medical and insurance requirements apply together. Check the current official instructions before submission. Fees and requirements can differ by case and authority, so this guide does not publish a universal salary threshold, government price or processing deadline."
          ]
        },
        {
          "heading": "Confirm costs, responsibilities and follow-up",
          "paragraphs": [
            "Request a written explanation of the proposed support, applicable service charges and official costs, including how they are treated in your quotation. Confirm what happens if further information is requested. Do not assume an advertised monthly package defines every processing cost or guarantees a sponsorship outcome.",
            "Contact INAYA’s Ajman office by phone or website WhatsApp to review your case and confirm availability. The team handles UAE enquiries subject to service confirmation. Keep the agreed next steps and contact details; an enquiry or appointment discussion is separate from an official application decision."
          ]
        },
        {
          "heading": "Included agency processing and separate visa-only requests",
          "paragraphs": [
            "In the managed monthly arrangement, the agency is employer/sponsor and includes wage administration and applicable employment obligations in its charge. The customer is the household beneficiary with responsibilities set out in writing. Use the actual named arrangement to distinguish included agency processing from a visa-only request.",
            "The managed monthly charge includes applicable agency sponsorship and work-permit/residence processing, Emirates ID, required medical-fitness processing and the applicable health-insurance premium. Visa-only services and separately requested sponsorship transfers have their own case-specific scope and itemised quotation. Official approval and timelines remain with the responsible authorities."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "INAYA visa-processing support",
          "route": "services/maid-visa"
        },
        {
          "label": "Discuss sponsorship transfer support",
          "route": "services/sponsorship-transfer"
        },
        {
          "label": "Prepare enquiry information",
          "route": "blog/documents-for-domestic-worker-enquiry"
        },
        {
          "label": "Review the hiring questions",
          "route": "blog/uae-domestic-worker-hiring-process"
        },
        {
          "label": "Ask about your case",
          "route": "contact"
        }
      ],
      "sourceIntro": "Current official process references",
      "sourceNote": "The official sources explain the applicable employment and processing requirements. INAYA’s managed-service inclusions and commercial terms are stated separately above and in the written quotation."
    },
    "ar": {
      "title": "تجهيز حالة تأشيرة أو كفالة للعمالة المنزلية",
      "description": "جهز أسئلتك عن دعم عناية الكامل لإجراءات التأشيرة، وأكد المستندات ومتطلبات الجهات والرسوم والخطوات المناسبة لحالتك.",
      "lead": "تقدم عناية دعماً كاملاً لإجراءات التأشيرة: إرشادات المستندات وتقديم الطلب وتعديل الوضع وإجراءات الفحص الطبي والهوية الإماراتية والتأمين ومتابعة الحالة من البداية إلى النهاية. تعتمد المتطلبات والرسوم والأهلية والمدد على الحالة والجهات المختصة.",
      "sections": [
        {
          "heading": "اشرح وضعك الحالي قبل اختيار الإجراء",
          "paragraphs": [
            "وضح ترتيب العمل المنزلي المقترح والإمارة والمرحلة الحالية للحالة. اسأل عن الخدمة الرسمية وصفة صاحب العمل المناسبة، وعن الحاجة إلى مراجعة وضع إقامة أو كفالة قائم. لا تفترض تطابق خطوات الطلب الجديد ونقل الكفالة.",
            "تساعد المناقشة الأولية على تحديد الخطوة المناسبة، لكنها لا تثبت الأهلية ولا توافق على النقل. شارك وثائق الهوية الحساسة عند الحاجة فقط عبر وسيلة متفق عليها. نموذج الموقع لا يرفع المستندات ولا يقدم طلباً رسمياً."
          ]
        },
        {
          "heading": "تعرف على الدعم الذي تقدمه عناية",
          "paragraphs": [
            "يشمل الدعم التنسيق والإجراءات للخطوات المبينة أدناه بحسب انطباقها على الحالة. أكد ما يلزم ومن يتابع كل جزء والمستندات المطلوبة منك. وجود خطوة ضمن نطاق الدعم لا يعني أنها ضرورية في جميع الحالات.",
            "تعني إجراءات الفحص الطبي الدعم في الخطوة الرسمية، ولا تعني تقديم عناية رعاية سريرية أو تمريضاً أو علاجاً. تحدد الجهات المختصة المتطلبات والقرارات؛ ولا تضمن متابعة الحالة من البداية إلى النهاية الموافقة أو تاريخ إنجاز محدداً."
          ],
          "table": {
            "caption": "دعم عناية لإجراءات التأشيرة وأسئلة الحالة",
            "columns": [
              "الدعم",
              "ما الذي تستوضحه؟"
            ],
            "rows": [
              [
                "إرشادات المستندات",
                "القائمة المناسبة للخدمة وصفة مقدم الطلب"
              ],
              [
                "تقديم الطلب",
                "المعلومات المطلوبة والجهة المختصة"
              ],
              [
                "تعديل الوضع",
                "مدى انطباق الخطوة على الحالة الحالية"
              ],
              [
                "إجراءات الفحص الطبي",
                "متطلبات الإجراء الطبي الرسمي المنطبق"
              ],
              [
                "إجراءات الهوية الإماراتية",
                "متطلبات طلب الهوية المرتبط بالحالة"
              ],
              [
                "إجراءات التأمين",
                "المتطلبات والمستندات التأمينية المنطبقة"
              ],
              [
                "متابعة الحالة من البداية إلى النهاية",
                "المراحل والمسؤوليات وطريقة المتابعة"
              ]
            ]
          }
        },
        {
          "heading": "راجع المراجع الرسمية للفئة المناسبة",
          "paragraphs": [
            "تحدد خدمة عقد العامل المساعد لدى الوزارة مستندات العقد وخطوات الطلب. وتوفر خدمات الإقامة لدى الهيئة الاتحادية وخدمة العمالة المنزلية لدى إقامة دبي سياقاً إضافياً. اختر الفئة المنطبقة فعلياً؛ فقائمة إقامة الأسرة ليست تلقائياً قائمة العمالة المساعدة.",
            "اسأل عن متطلبات العقد والإقامة والهوية والفحص الطبي والتأمين المرتبطة بحالتك، وراجع التعليمات الحالية قبل التقديم. قد تختلف الرسوم والمتطلبات بحسب الحالة والجهة، ولذلك لا ينشر هذا الدليل حداً موحداً للراتب أو سعراً حكومياً أو مهلة إنجاز عامة."
          ]
        },
        {
          "heading": "أكد التكاليف والمسؤوليات والمتابعة",
          "paragraphs": [
            "اطلب بياناً مكتوباً بالدعم المقترح ورسوم الخدمة والتكاليف الرسمية المنطبقة وطريقة إدراجها في العرض. اسأل عن الخطوة التالية إذا طلبت معلومات إضافية. لا تفترض أن الباقة الشهرية تحدد كل تكلفة للإجراءات أو تضمن نتيجة الكفالة.",
            "تواصل مع مكتب عناية في عجمان هاتفياً أو عبر واتساب الموقع لمراجعة الحالة وتأكيد التوفر. يستقبل الفريق استفسارات من الإمارات بحسب تأكيد الخدمة. احتفظ بالخطوات المتفق عليها وقنوات التواصل؛ فمناقشة الاستفسار أو الموعد منفصلة عن قرار الطلب الرسمي."
          ]
        },
        {
          "heading": "إجراءات الوكالة المشمولة وطلبات التأشيرة المنفصلة",
          "paragraphs": [
            "في الترتيب الشهري المدار، تكون الوكالة صاحبة العمل والكفيل وتشمل رسومها إدارة الأجر والتزامات التوظيف المنطبقة. العميل هو المستفيد المنزلي بمسؤوليات مبينة كتابةً. استخدم الترتيب الفعلي المسمى لتمييز إجراءات الوكالة المشمولة عن طلب تأشيرة فقط.",
            "تشمل الرسوم الشهرية المدارة الكفالة لدى الوكالة وإجراءات تصريح العمل والإقامة المنطبقة والهوية الإماراتية وفحص اللياقة الطبية المطلوب وقسط التأمين الصحي المنطبق. ولخدمات التأشيرة وحدها وطلبات نقل الكفالة المنفصلة نطاق خاص بحسب الحالة وعرض مفصل مستقل. وتبقى الموافقات والمواعيد الرسمية من اختصاص الجهات المعنية."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "دعم عناية لإجراءات التأشيرة",
          "route": "services/maid-visa"
        },
        {
          "label": "ناقش دعم نقل الكفالة",
          "route": "services/sponsorship-transfer"
        },
        {
          "label": "جهز معلومات الاستفسار",
          "route": "blog/documents-for-domestic-worker-enquiry"
        },
        {
          "label": "راجع أسئلة الاستقدام",
          "route": "blog/uae-domestic-worker-hiring-process"
        },
        {
          "label": "اسأل عن حالتك",
          "route": "contact"
        }
      ],
      "sourceIntro": "مراجع الإجراءات الرسمية الحالية",
      "sourceNote": "تشرح المصادر الرسمية متطلبات التوظيف والإجراءات المنطبقة. وتبين أعلاه عناصر خدمة عناية المدارة وشروطها التجارية بصورة منفصلة، كما تسجل في عرض السعر المكتوب."
    },
    "sources": [
      {
        "en": "MOHRE: new domestic worker employment contract (English)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالإنجليزية)",
        "url": "https://www.mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      },
      {
        "en": "MOHRE: new domestic worker employment contract (Arabic)",
        "ar": "وزارة الموارد البشرية والتوطين: عقد عمل جديد للعامل المساعد (بالعربية)",
        "url": "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      },
      {
        "en": "ICP: residence service and applicant categories",
        "ar": "الهيئة الاتحادية: خدمة الإقامة وفئات المتقدمين",
        "url": "https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64"
      },
      {
        "en": "GDRFA Dubai: domestic worker service",
        "ar": "الإدارة العامة للإقامة في دبي: خدمة العمالة المنزلية",
        "url": "https://www.gdrfad.gov.ae/en/node/14403"
      }
    ]
  },
  ...publishedArticleGuides
];

export function getDomesticWorkerGuide(slug: string) {
  return domesticWorkerGuides.find((guide) => guide.slug === slug);
}
