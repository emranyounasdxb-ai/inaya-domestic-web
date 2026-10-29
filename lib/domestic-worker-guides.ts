import { publishedArticleGuides } from './published-articles';
import { keywordArticleGuides } from './keyword-article-guides';

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
            "For an INAYA enquiry, the website’s booking form sends an enquiry to the INAYA team; it does not submit an official application. Contact the team by phone or WhatsApp to discuss the request and confirm the next step."
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
            "في موقع عناية، يرسل نموذج الحجز استفساراً إلى فريق عناية؛ ولا يقدم طلباً رسمياً. تواصل مع الفريق هاتفياً أو عبر واتساب لمناقشة احتياجك وتأكيد الخطوة التالية."
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
    "updated": "2026-10-29",
    "en": {
      "title": "Documents for a domestic-worker enquiry in Ajman",
      "description": "Prepare a case-specific domestic-worker document folder: enquiry details, named parties, requested records, readiness checks and safe follow-up with INAYA.",
      "lead": "Start with the household service or transaction you need, not a folder of every personal document you own. An initial enquiry, a managed monthly service and an official domestic-worker application need different information. This guide helps you identify the case, organise requested records and confirm a private sharing channel before submission.",
      "sections": [
        {
          "heading": "1. Make the first conversation useful without sending identity files",
          "paragraphs": [
            "Describe the emirate and work location, the duties, the preferred arrangement and the period in which you hope to begin. Explain essential skills or communication needs using actual household tasks. If you already know the worker or have an application in progress, say so; this changes the question the team needs to answer.",
            "For a first service discussion, a short description is more useful than unsolicited passport, identity or medical copies. Ask whether the next step is a service quotation, candidate discussion or review of a particular official transaction. A preferred start date is a planning request until the required case steps and written confirmation are complete."
          ],
          "points": [
            "Prepare one description of the work and the arrangement you want.",
            "Mention an existing worker or application without putting private document numbers in a public message.",
            "Ask the team what it needs next and why that information is relevant."
          ]
        },
        {
          "heading": "2. Choose a document route for the actual request",
          "paragraphs": [
            "Use this routing matrix to organise the conversation. Its entries are questions to resolve, not a compulsory list of documents for every household. Confirm the applicant, employer or sponsor and the transaction before collecting files. Do not assume that the household receiving a managed service is also the worker’s employer.",
            "A renewal, change of an existing arrangement or cancellation needs the relevant current record. A new household-employer application may involve a different applicant category from an agency-managed service. Where the correct category is uncertain, leave it for review rather than selecting the nearest-looking checklist."
          ],
          "table": {
            "caption": "A planning matrix for domestic-worker document enquiries",
            "columns": [
              "Request",
              "Describe first",
              "Confirm before sharing files"
            ],
            "rows": [
              [
                "Managed household service",
                "Role, location, routine and requested arrangement",
                "Named agency and household parties; documents relevant to the service"
              ],
              [
                "New household-employer case",
                "Proposed arrangement and present worker situation",
                "Applicable official service, applicant category and requested record list"
              ],
              [
                "Existing worker’s renewal",
                "Which contract or residence record needs renewal",
                "Current record, appropriate renewal process and case-specific list"
              ],
              [
                "Change or end of an arrangement",
                "What is changing and the existing employment situation",
                "Records affected, relevant parties and instructions for the next step"
              ],
              [
                "Application already submitted",
                "The requested action and latest status",
                "Application reference, outstanding request and authorised follow-up channel"
              ]
            ]
          }
        },
        {
          "heading": "3. Separate document families instead of treating them as one checklist",
          "paragraphs": [
            "When documents are requested, record their purpose and which transaction they support. The same person may have a service agreement, an employment record and a residence record; one does not establish that all the others are complete. The person handling the case should explain which record is relevant.",
            "ICP’s residence service separates applicant categories and connects residence issuance with an Emirates ID application. Select the actual category; other lists on the page are not a domestic-worker checklist."
          ],
          "table": {
            "caption": "Document families to review only where requested for the case",
            "columns": [
              "Record family",
              "What to clarify",
              "Useful quality check"
            ],
            "rows": [
              [
                "Worker identity or photograph",
                "Which document or format the identified service requests",
                "Legibility, matching names and the version requested"
              ],
              [
                "Applicant or employer identity",
                "Who is actually applying or named as employer",
                "Correct person or entity; requested validity checked"
              ],
              [
                "Contract and service terms",
                "Which parties, duties and arrangement each document covers",
                "Terms match the discussion and corrections are resolved"
              ],
              [
                "Existing permit, residence or ID record",
                "Which current record the transaction concerns",
                "Correct reference and latest known result"
              ],
              [
                "Medical or insurance record",
                "What official record is relevant and who must receive it",
                "Share only the required record through the agreed private channel"
              ],
              [
                "Application and payment records",
                "What was submitted, for which action and with what result",
                "Keep reference, receipt and completed result distinguishable"
              ]
            ]
          }
        },
        {
          "heading": "4. Build a readiness ledger with clear limits",
          "paragraphs": [
            "Keep one private ledger for the identified case. Suggested fields are the record requested, who requested it, why it is needed, the version supplied, review status and next action. A ledger can say that information is ready for a review; it cannot grant eligibility or replace an authority decision.",
            "Use plain status descriptions consistently. If a file has been sent but nobody has checked it, mark it supplied for review. If a discrepancy remains, record the question. Avoid using one word such as complete for both a document folder and an approved application."
          ],
          "table": {
            "caption": "A simple readiness legend",
            "columns": [
              "Status",
              "What it means",
              "Next action"
            ],
            "rows": [
              [
                "Not requested",
                "No confirmed need for this record in the current step",
                "Do not send it merely because another checklist includes it"
              ],
              [
                "Requested",
                "The relevant recipient has identified the record",
                "Confirm the purpose, format and sharing channel"
              ],
              [
                "Supplied for review",
                "A version has been delivered",
                "Wait for or request confirmation of the review outcome"
              ],
              [
                "Clarification needed",
                "A name, version or requirement needs resolving",
                "Record who will clarify it; do not guess or edit evidence"
              ],
              [
                "Ready for the agreed next step",
                "The requested review has been addressed",
                "Confirm what happens next; this is not official approval"
              ]
            ]
          }
        },
        {
          "heading": "5. Compare names, references and versions before relying on a file",
          "paragraphs": [
            "Check the spelling and sequence of names against the relevant identity record, and compare the worker and employer shown on each document. If two versions differ, ask the person handling the transaction which version is current. Do not silently change a name, date or document image to make records appear consistent.",
            "Use recognisable file names and keep superseded copies separate from the version being reviewed. Record the date of a correction and the reason for it. If a new passport or updated record has been issued, ask whether it changes the information required for the application. Document validity is service-specific; this guide does not impose one validity period on every case."
          ]
        },
        {
          "heading": "6. Agree how sensitive records will be shared",
          "paragraphs": [
            "Confirm the recipient and channel using INAYA’s official contact details before sharing personal records. Ask whether a copy is needed now, who is reviewing it and whether an original must be presented through the relevant official process. Do not place identity documents, full application references or medical details in public comments or a general household comparison sheet.",
            "Keep passwords, one-time codes and account access under your control. Where an official step needs your authentication or participation, ask for clear instructions and complete that part yourself. Do not redact or alter a document required by an authority unless the receiving official channel confirms what it can accept. Retain the records you need to understand your agreement and transaction."
          ],
          "points": [
            "Check the recipient before sending a sensitive file.",
            "Keep a note of what was sent and which case it concerns.",
            "Ask before sending an unrelated record or repeating a large document bundle.",
            "Use the agreed private channel; a website enquiry is not a document submission."
          ]
        },
        {
          "heading": "7. Read agreements before signing and keep the parties distinct",
          "paragraphs": [
            "Review the proposed work, duties, workplace, pay and other terms against the discussion. Read any declarations and ask for a correction if the document does not describe the facts accurately. Keep a copy of the final agreement you sign; an earlier draft or quotation may not record the final terms.",
            "Recruitment or household-service terms and the worker’s employment contract can describe different relationships. Ask which document sets the service charge, who is responsible for the employment obligations and where support or ending arrangements are explained. Signing a customer agreement does not, by itself, prove that an official application has been submitted or completed."
          ]
        },
        {
          "heading": "8. Record INAYA’s managed monthly arrangement correctly",
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
        },
        {
          "heading": "9. Two examples: different enquiries, different preparation",
          "paragraphs": [
            "Planning example: an Ajman household wants managed monthly help with cleaning and meal preparation but has not selected a worker. Its first record can describe the duties, household routine and preferred start period. The useful next questions concern suitability, availability and written service scope. It should not label itself the individual worker’s employer merely because it receives the service.",
            "Different planning example: a household asks about renewal for a worker already in an established arrangement. The team first identifies the current record, the named parties and the action requested. The document ledger then follows that confirmed transaction. A new recruitment checklist copied from another family would not establish what this renewal needs. Neither example describes an approved application or a currently available candidate."
          ]
        },
        {
          "heading": "10. Follow up with a specific question and retain the result",
          "paragraphs": [
            "A useful update identifies the case, the last confirmed action, the record still under review and the person responsible for the next step. Ask whether the request is for missing information, a clearer copy or an additional official step. Confirm which version should be used before sending replacements.",
            "Suggested message: “For the document review discussed with your team, please confirm which item remains outstanding, why it is needed and the agreed channel for supplying it.” Add private references only through that channel. Keep the completed outcome separately from a payment receipt or submission acknowledgement, and review any instructions that accompany it."
          ]
        },
        {
          "heading": "11. Take the right next step with INAYA",
          "paragraphs": [
            "The website booking form sends enquiry details to the INAYA team. It does not upload identity files or submit an official application. Use the team’s phone or WhatsApp contact to describe your request and agree any later document-sharing step. The Ajman office is at Grand Mall, Ground Floor, Al Rashidiya 3; confirm the requested service and arrangements before relying on a visit or start date.",
            "Use the related visa-preparation guide for a processing question, the hiring guide for a new recruitment discussion and the contracts or cancellation guides when an existing arrangement is changing. These resources help you prepare questions; the final document list and official outcome depend on the actual case."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "Use the Ajman application-readiness ledger",
          "route": "blog/housemaid-visa-ajman-application-readiness-ledger"
        },
        {
          "label": "Prepare a visa or sponsorship case",
          "route": "blog/domestic-worker-visa-sponsorship-support"
        },
        {
          "label": "Review employer and document categories",
          "route": "blog/domestic-worker-employer-eligibility-documents"
        },
        {
          "label": "Understand the hiring discussion",
          "route": "blog/uae-domestic-worker-hiring-process"
        },
        {
          "label": "Read the contracts and renewal guide",
          "route": "blog/domestic-worker-contracts-renewal"
        },
        {
          "label": "Separate cancellation records",
          "route": "blog/domestic-worker-contract-permit-residence-cancellation"
        },
        {
          "label": "INAYA document guidance",
          "route": "documents-required"
        },
        {
          "label": "Send a service enquiry",
          "route": "booking"
        },
        {
          "label": "Contact INAYA",
          "route": "contact"
        }
      ],
      "sourceIntro": "Official process references",
      "sourceNote": "Official process information was checked on 29 October 2026. Select the relevant service and applicant category when checking current instructions. The worksheets and examples here are practical planning aids. INAYA’s managed-service inclusions are separate business terms recorded in the quotation and agreement."
    },
    "ar": {
      "title": "مستندات الاستفسار عن العمالة المنزلية في عجمان",
      "description": "جهز ملف مستندات يناسب حالة العمالة المنزلية: معلومات الاستفسار وأطراف التعاقد والسجلات المطلوبة ومراجعة الجاهزية والمشاركة الخاصة مع عناية.",
      "lead": "ابدأ بالخدمة المنزلية أو المعاملة التي تحتاجها، لا بجمع جميع وثائقك الشخصية وإرسالها. تختلف معلومات الاستفسار الأولي والخدمة الشهرية المدارة والطلب الرسمي للعمالة المنزلية. يساعدك هذا الدليل على تحديد الحالة وتنظيم السجلات المطلوبة وتأكيد قناة خاصة للمشاركة قبل التقديم.",
      "sections": [
        {
          "heading": "1. اجعل المحادثة الأولى مفيدة دون إرسال ملفات الهوية",
          "paragraphs": [
            "وضح الإمارة وموقع العمل والمهام والترتيب المفضل والفترة التي تأمل بدء الخدمة خلالها. اشرح المهارات أو احتياجات التواصل من خلال أعمال المنزل الفعلية. وإذا كنت تعرف العاملة المقصودة أو لديك طلب جارٍ، فاذكر ذلك؛ لأنه يغير السؤال الذي يحتاج الفريق إلى مراجعته.",
            "يكون الوصف المختصر أنسب للمناقشة الأولى من إرسال صور الجوازات والهويات والملفات الطبية دون طلب. اسأل هل الخطوة التالية عرض خدمة أم مناقشة مرشحة أم مراجعة معاملة رسمية معينة. يظل موعد البدء المفضل طلباً للتخطيط إلى حين إكمال الخطوات المطلوبة للحالة وتأكيد الترتيب كتابةً."
          ],
          "points": [
            "جهز وصفاً واحداً للعمل والترتيب المطلوب.",
            "اذكر وجود عاملة أو طلب قائم دون وضع أرقام الوثائق الخاصة في رسالة عامة.",
            "اسأل عما يحتاجه الفريق في الخطوة التالية وسبب ارتباطه بطلبك."
          ]
        },
        {
          "heading": "2. حدد مسار المستندات وفق الطلب الفعلي",
          "paragraphs": [
            "استخدم المصفوفة لتنظيم المحادثة. صفوفها أسئلة ينبغي حسمها، وليست قائمة وثائق إلزامية لكل أسرة. أكد مقدم الطلب وصاحب العمل أو الكفيل والمعاملة قبل جمع الملفات. لا تفترض أن الأسرة المستفيدة من خدمة مدارة هي أيضاً صاحبة عمل العاملة.",
            "يحتاج التجديد أو تغيير ترتيب قائم أو الإلغاء إلى تحديد السجل الحالي المعني. وقد تختلف فئة مقدم الطلب في حالة صاحب عمل منزلي جديد عنها في خدمة تديرها وكالة. اترك الفئة غير المحسومة للمراجعة بدلاً من اختيار قائمة تبدو قريبة من حالتك دون تأكيد."
          ],
          "table": {
            "caption": "مصفوفة لتخطيط استفسار مستندات العمالة المنزلية",
            "columns": [
              "الطلب",
              "ما توضحه أولاً",
              "ما تؤكده قبل مشاركة الملفات"
            ],
            "rows": [
              [
                "خدمة منزلية مدارة",
                "الدور والمنطقة والروتين والترتيب المطلوب",
                "أطراف الوكالة والأسرة والمستندات المتعلقة بالخدمة"
              ],
              [
                "حالة جديدة لصاحب عمل منزلي",
                "الترتيب المقترح ووضع العاملة الحالي",
                "الخدمة الرسمية وفئة مقدم الطلب وقائمة السجلات المطلوبة"
              ],
              [
                "تجديد لعاملة موجودة",
                "العقد أو سجل الإقامة المراد تجديده",
                "السجل الحالي وإجراء التجديد وقائمة الحالة"
              ],
              [
                "تغيير ترتيب أو إنهاؤه",
                "التغيير المطلوب ووضع التوظيف القائم",
                "السجلات المتأثرة والأطراف وتعليمات الخطوة التالية"
              ],
              [
                "طلب مقدم بالفعل",
                "الإجراء المطلوب والحالة الأخيرة",
                "مرجع الطلب وما طلب استكماله وقناة المتابعة المخولة"
              ]
            ]
          }
        },
        {
          "heading": "3. افصل مجموعات السجلات بدلاً من جمعها في قائمة واحدة",
          "paragraphs": [
            "عند طلب وثيقة، سجل الغرض منها والمعاملة التي تدعمها. فقد يكون للشخص اتفاق خدمة وسجل توظيف وسجل إقامة؛ ولا يثبت أحدها اكتمال البقية. ينبغي لمن يتابع الحالة توضيح السجل المناسب ولماذا يحتاج إليه في هذه الخطوة تحديداً.",
            "تفصل خدمة الإقامة لدى الهيئة بين فئات المتقدمين، وترتبط إجراءات الإصدار بطلب الهوية الإماراتية. اختر الفئة الفعلية؛ فالقوائم الأخرى الظاهرة في الصفحة ليست قائمة للعمالة المنزلية."
          ],
          "table": {
            "caption": "مجموعات تراجع عند طلبها للحالة فقط",
            "columns": [
              "مجموعة السجلات",
              "ما الذي تستوضحه؟",
              "مراجعة مفيدة"
            ],
            "rows": [
              [
                "هوية العاملة أو صورتها",
                "الوثيقة أو الصيغة التي تطلبها الخدمة المحددة",
                "وضوح النسخة وتطابق الأسماء والإصدار المطلوب"
              ],
              [
                "هوية مقدم الطلب أو صاحب العمل",
                "من يقدم الطلب أو يسمى صاحب عمل فعلياً",
                "صحة الشخص أو الجهة ومراجعة الصلاحية المطلوبة"
              ],
              [
                "العقد وشروط الخدمة",
                "الأطراف والمهام والترتيب الذي تغطيه كل وثيقة",
                "مطابقة المناقشة وحسم التصحيحات"
              ],
              [
                "التصريح أو الإقامة أو الهوية القائمة",
                "السجل الحالي الذي تتعلق به المعاملة",
                "المرجع الصحيح وأحدث نتيجة معروفة"
              ],
              [
                "السجل الطبي أو التأميني",
                "السجل الرسمي المناسب والجهة التي تحتاجه",
                "مشاركة المطلوب فقط عبر القناة الخاصة المتفق عليها"
              ],
              [
                "الطلب والدفع",
                "ما قدم والإجراء المقصود ونتيجته",
                "تمييز المرجع والإيصال والنتيجة المكتملة"
              ]
            ]
          }
        },
        {
          "heading": "4. أنشئ سجل جاهزية بحدود واضحة",
          "paragraphs": [
            "خصص سجلاً خاصاً للحالة المحددة. يمكن أن يتضمن الوثيقة المطلوبة ومن طلبها والغرض منها والنسخة المقدمة وحالة مراجعتها والخطوة التالية. يستطيع السجل توضيح جاهزية المعلومات للمراجعة، لكنه لا يمنح الأهلية ولا يحل محل القرار الرسمي.",
            "استخدم أوصاف الحالة باتساق. إذا أرسلت الملف ولم يراجعه المستلم بعد، فسجله مقدماً للمراجعة. وإذا بقي اختلاف، فاكتب السؤال المطلوب حسمه. تجنب كلمة مكتمل لوصف ملف المستندات والطلب الموافق عليه معاً؛ فهما نتيجتان مختلفتان."
          ],
          "table": {
            "caption": "دليل مبسط لحالة الجاهزية",
            "columns": [
              "الحالة",
              "معناها",
              "الخطوة التالية"
            ],
            "rows": [
              [
                "لم تطلب",
                "لا توجد حاجة مؤكدة لهذا السجل في الخطوة الحالية",
                "لا ترسله لمجرد وجوده في قائمة أخرى"
              ],
              [
                "مطلوبة",
                "حدد المستلم المختص السجل المطلوب",
                "أكد الغرض والصيغة وقناة المشاركة"
              ],
              [
                "قدمت للمراجعة",
                "سلمت نسخة من السجل",
                "انتظر نتيجة المراجعة أو اطلب تأكيدها"
              ],
              [
                "تحتاج إلى توضيح",
                "يوجد سؤال عن الاسم أو الإصدار أو المتطلب",
                "حدد من يوضحه ولا تخمن أو تعدل الدليل"
              ],
              [
                "جاهزة للخطوة المتفق عليها",
                "عولجت المراجعة المطلوبة",
                "أكد الإجراء التالي؛ فهذا لا يعني الموافقة الرسمية"
              ]
            ]
          }
        },
        {
          "heading": "5. قارن الأسماء والمراجع والإصدارات قبل الاعتماد عليها",
          "paragraphs": [
            "راجع كتابة الأسماء وترتيبها وفق سجل الهوية المناسب، وقارن العاملة وصاحب العمل الواردين في الوثائق. إذا اختلف إصداران، فاسأل متابع المعاملة عن النسخة الحالية. لا تغير اسماً أو تاريخاً أو صورة وثيقة بنفسك لجعل السجلات تبدو متطابقة.",
            "استخدم أسماء ملفات واضحة، وافصل النسخ السابقة عن النسخة الجاري مراجعتها. سجل تاريخ التصحيح وسببه. وإذا صدر جواز جديد أو سجل محدث، فاسأل عن أثره في المعلومات المطلوبة للطلب. تعتمد صلاحية الوثيقة على الخدمة؛ ولا يحدد هذا الدليل مدة صلاحية موحدة لجميع الحالات."
          ]
        },
        {
          "heading": "6. اتفق على طريقة مشاركة السجلات الحساسة",
          "paragraphs": [
            "أكد المستلم والقناة عبر بيانات عناية الرسمية قبل مشاركة السجلات الشخصية. اسأل هل تحتاج النسخة الآن ومن يراجعها وهل يلزم إبراز أصلها ضمن الإجراء الرسمي المعني. لا تضع وثائق الهوية أو مراجع الطلب الكاملة أو التفاصيل الطبية في التعليقات العامة أو ورقة مقارنة منزلية مشتركة.",
            "احتفظ بالتحكم في كلمات المرور ورموز التحقق والدخول إلى الحسابات. إذا احتاج الإجراء الرسمي إلى تحققك أو مشاركتك، فاطلب تعليمات واضحة ونفذ هذا الجزء بنفسك. لا تحجب أجزاء من وثيقة رسمية أو تعدلها إلا بعد تأكيد ما تقبله الجهة المستلمة. واحتفظ بالسجلات اللازمة لفهم اتفاقك ومعاملتك."
          ],
          "points": [
            "تحقق من المستلم قبل إرسال ملف حساس.",
            "دوّن ما أرسلته والحالة التي يتعلق بها.",
            "اسأل قبل إرسال سجل غير متعلق أو تكرار مجموعة كبيرة من الوثائق.",
            "استخدم القناة الخاصة المتفق عليها؛ فالاستفسار عبر الموقع ليس تقديم مستندات."
          ]
        },
        {
          "heading": "7. اقرأ الاتفاقات قبل التوقيع وميز أطرافها",
          "paragraphs": [
            "راجع العمل والمهام والمكان والأجر وبقية الشروط وفق المناقشة. اقرأ الإقرارات واطلب التصحيح إذا لم تصف الوثيقة الوقائع بدقة. احتفظ بنسخة الاتفاق النهائي الذي توقعه؛ فقد لا تتضمن المسودة أو عرض السعر السابقان الشروط النهائية.",
            "قد تصف شروط الاستقدام أو الخدمة المنزلية وعقد توظيف العاملة علاقات مختلفة. اسأل أي وثيقة تحدد رسوم الخدمة ومن يتحمل التزامات التوظيف وأين تسجل شروط الدعم أو الإنهاء. لا يثبت توقيع اتفاق العميل وحده تقديم الطلب الرسمي أو اكتماله."
          ]
        },
        {
          "heading": "8. سجل ترتيب عناية الشهري المدار بصورة صحيحة",
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
        },
        {
          "heading": "9. مثالان: استفساران مختلفان وتجهيز مختلف",
          "paragraphs": [
            "مثال للتخطيط: تريد أسرة في عجمان مساعدة شهرية مدارة للتنظيف وتحضير الوجبات، ولم تختر عاملة بعد. يمكن أن يصف سجلها الأول المهام وروتين المنزل والفترة المفضلة للبدء. تتعلق الأسئلة التالية بالملاءمة والتوفر ونطاق الخدمة المكتوب. ولا تسجل الأسرة نفسها صاحبة عمل للعاملة لمجرد أنها تستفيد من الخدمة.",
            "مثال مختلف: تسأل أسرة عن تجديد لعاملة ضمن ترتيب قائم بالفعل. يحدد الفريق أولاً السجل الحالي والأطراف والإجراء المطلوب، ثم يتبع سجل المستندات هذه المعاملة المؤكدة. لا تثبت قائمة استقدام جديدة من أسرة أخرى ما يحتاجه التجديد. ولا يمثل أي من المثالين طلباً موافقاً عليه أو مرشحة متاحة حالياً."
          ]
        },
        {
          "heading": "10. تابع بسؤال محدد واحتفظ بالنتيجة",
          "paragraphs": [
            "يحدد التحديث المفيد الحالة وآخر إجراء مؤكد والسجل الذي ما زال يراجع والمسؤول عن الخطوة التالية. اسأل هل المطلوب معلومة ناقصة أم نسخة أوضح أم خطوة رسمية إضافية. أكد الإصدار المطلوب استخدامه قبل إرسال بدائل للوثائق السابقة.",
            "رسالة مقترحة: «بخصوص مراجعة المستندات التي ناقشتها مع فريقكم، يرجى تأكيد العنصر المتبقي وسبب الحاجة إليه وقناة تقديمه المتفق عليها». أضف المراجع الخاصة عبر تلك القناة فقط. احتفظ بالنتيجة المكتملة منفصلة عن إيصال الدفع أو إشعار تقديم الطلب، وراجع التعليمات المرافقة لها."
          ]
        },
        {
          "heading": "11. اختر الخطوة المناسبة مع عناية",
          "paragraphs": [
            "يرسل نموذج الحجز في الموقع تفاصيل الاستفسار إلى فريق عناية؛ ولا يرفع ملفات الهوية ولا يقدم طلباً رسمياً. استخدم الهاتف أو واتساب لشرح طلبك والاتفاق على أي مشاركة لاحقة للوثائق. يقع مكتب عجمان في جراند مول، الطابق الأرضي، الراشدية 3؛ وأكد الخدمة والترتيب المطلوبين قبل الاعتماد على زيارة أو موعد بدء.",
            "راجع دليل تجهيز التأشيرة لسؤال يتعلق بالإجراءات، ودليل الاستقدام لمناقشة توظيف جديد، ودليل العقود أو الإلغاء عند تغيير ترتيب قائم. تساعد الموارد على إعداد الأسئلة؛ وتعتمد القائمة النهائية للمستندات والنتيجة الرسمية على الحالة الفعلية."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "استخدم سجل جاهزية طلب تأشيرة العاملة في عجمان",
          "route": "blog/housemaid-visa-ajman-application-readiness-ledger"
        },
        {
          "label": "جهز حالة تأشيرة أو كفالة",
          "route": "blog/domestic-worker-visa-sponsorship-support"
        },
        {
          "label": "راجع فئات صاحب العمل والمستندات",
          "route": "blog/domestic-worker-employer-eligibility-documents"
        },
        {
          "label": "افهم مناقشة الاستقدام",
          "route": "blog/uae-domestic-worker-hiring-process"
        },
        {
          "label": "اقرأ دليل العقود والتجديد",
          "route": "blog/domestic-worker-contracts-renewal"
        },
        {
          "label": "ميز سجلات الإلغاء",
          "route": "blog/domestic-worker-contract-permit-residence-cancellation"
        },
        {
          "label": "إرشادات عناية للمستندات",
          "route": "documents-required"
        },
        {
          "label": "أرسل استفسار خدمة",
          "route": "booking"
        },
        {
          "label": "تواصل مع عناية",
          "route": "contact"
        }
      ],
      "sourceIntro": "مراجع الإجراءات الرسمية",
      "sourceNote": "روجعت معلومات الإجراءات الرسمية في 29 أكتوبر 2026. اختر الخدمة وفئة مقدم الطلب المناسبتين عند مراجعة التعليمات الحالية. الجداول والأمثلة هنا أدوات عملية للتخطيط. وتبقى عناصر خدمة عناية المدارة شروطاً تجارية منفصلة تسجل في العرض والاتفاق."
    },
    "sources": [
      {
        "en": "ICP: residence issuance and applicant categories (English)",
        "ar": "الهيئة الاتحادية: إصدار الإقامة وفئات المتقدمين (بالإنجليزية)",
        "url": "https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64"
      },
      {
        "en": "ICP: residence renewal and applicant categories (English)",
        "ar": "الهيئة الاتحادية: تجديد الإقامة وفئات المتقدمين (بالإنجليزية)",
        "url": "https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e66"
      },
      {
        "en": "ICP: residence cancellation and domestic-worker routing (English)",
        "ar": "الهيئة الاتحادية: إلغاء الإقامة ومسار العمالة المنزلية (بالإنجليزية)",
        "url": "https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e68"
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
            "Call or WhatsApp INAYA with your preferred arrangement and questions. Request the agreed scope, schedule, payment basis and relevant support policy in writing. Submitting the website enquiry form sends your details to INAYA for review; it does not confirm an appointment."
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
            "تواصل مع عناية هاتفياً أو عبر واتساب لشرح الترتيب المفضل وأسئلتك. اطلب النطاق والجدول وأساس الدفع وسياسة الدعم ذات الصلة كتابةً. يرسل إرسال نموذج الاستفسار بياناتك إلى عناية للمراجعة؛ ولا يؤكد موعداً."
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
            "Use the maid, nanny or babysitting service page for the appropriate enquiry. Call or WhatsApp to discuss availability and an appointment. Submitting the website form sends an enquiry to INAYA for review; it does not confirm an appointment or guarantee a suitable profile."
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
            "استخدم صفحة الخدمة المناسبة للعاملة أو المربية أو جليسة الأطفال، وتواصل هاتفياً أو عبر واتساب لمناقشة التوفر والموعد. يرسل إرسال نموذج الموقع استفساراً إلى عناية للمراجعة؛ ولا يؤكد موعداً أو يضمن ملفاً مناسباً."
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
    "updated": "2026-10-29",
    "en": {
      "title": "Domestic-worker visa support in Ajman: stages and documents",
      "description": "Plan domestic-worker visa support with INAYA: identify the transaction, employer and authority route, confirm document hand-offs and track the actual result.",
      "lead": "INAYA provides complete visa-processing support: document guidance, application submission, status change, medical processing, Emirates ID processing, insurance processing and end-to-end case processing. Requirements, fees, eligibility and timelines depend on your case and the relevant authorities.",
      "sections": [
        {
          "heading": "1. Start with the transaction, the parties and the present record",
          "paragraphs": [
            "Explain what you want to achieve: a new domestic-worker arrangement, review of an existing case, renewal, a proposed sponsorship change or ending a current arrangement. Give the emirate, the current stage and whether the worker is already identified. Describe the current situation accurately instead of selecting a process from a headline alone.",
            "Then identify the employer or sponsor named in the records and the household receiving the service. A household may be the beneficiary of a managed service rather than the employer. A worker’s existing residence document does not by itself settle whether a different work or sponsorship arrangement is permitted. Ask which records and parties must be reviewed before any next step is confirmed."
          ]
        },
        {
          "heading": "2. Decide which enquiry you are making before comparing quotations",
          "paragraphs": [
            "The same phrase, maid visa, can describe different customer questions. Use the matrix below to identify yours. It is an enquiry aid rather than an eligibility ruling or a complete application sequence. Where the arrangement is unclear, ask INAYA to identify the service that can be supported before sending documents or making assumptions about charges.",
            "A new request and a change to an existing record should remain distinguishable. If you have already submitted a transaction through another channel, tell the team and keep its reference available privately. Ask how it affects the proposed next step instead of starting a second application simply to obtain an update."
          ],
          "table": {
            "caption": "Domestic-worker processing enquiries and the first confirmation",
            "columns": [
              "Enquiry",
              "Establish first",
              "What to request in writing"
            ],
            "rows": [
              [
                "Managed monthly household service",
                "The named agency and household arrangement",
                "Included agency processing and household responsibilities"
              ],
              [
                "Separate visa-processing request",
                "The specific action and applicant or employer category",
                "Case scope, requested records and itemised quotation"
              ],
              [
                "Renewal for an existing worker",
                "Which contract, permit or residence record is involved",
                "Applicable route and the next action for that record"
              ],
              [
                "Proposed sponsorship change",
                "Existing employment and residence situation",
                "Whether the requested support and route apply to this case"
              ],
              [
                "Ending an arrangement",
                "The service agreement and official records concerned",
                "Records to address and instructions following the completed result"
              ]
            ]
          }
        },
        {
          "heading": "3. Understand how the official stages connect",
          "paragraphs": [
            "ICP describes the Domestic Workers Work Bundle as a connected journey involving entry permission, medical fitness, biometrics, Emirates ID and residence. Confirm which stages actually apply to the case.",
            "Use the table in reading order to review the case, not as a mandatory authority sequence. An existing record may mean a particular action is different or unnecessary. Confirm linked processing and required personal participation instead of opening a separate manual application for every row."
          ],
          "table": {
            "caption": "A case-dependent stage and hand-off planner",
            "columns": [
              "Review stage",
              "Question to resolve",
              "Who clarifies the hand-off",
              "Record to retain"
            ],
            "rows": [
              [
                "1. Classify the request",
                "New arrangement, renewal, proposed change or ending?",
                "Household and INAYA identify the actual case",
                "Named parties and requested action"
              ],
              [
                "2. Employment or work-entry step, if applicable",
                "Which MoHRE domestic-worker service and contract or permit record matter?",
                "Relevant applicant or employer and the team handling that service",
                "Applicable agreement and transaction reference"
              ],
              [
                "3. Personal steps, where required",
                "What official medical, biometric or identity participation is requested?",
                "Worker or applicant follows the confirmed official instructions",
                "Relevant appointment, participation or result record"
              ],
              [
                "4. Residence and linked ID",
                "Which ICP process and existing record apply?",
                "The responsible applicant and relevant official channel",
                "Application reference and actual result"
              ],
              [
                "5. Review the outcome",
                "What is completed and which next-step instruction remains?",
                "Responsible party checks the result with the household",
                "Completed result and next-action record"
              ]
            ]
          }
        },
        {
          "heading": "4. Agree INAYA’s support and each hand-off",
          "paragraphs": [
            "INAYA’s support is for domestic workers and related documents. It covers coordination and processing within the written scope applicable to the case. Confirm what the team handles, what you or the worker must do personally and where an authority, insurer or official service provider must make the decision or supply the result.",
            "Medical processing means support with the official step; INAYA is not providing clinical care, nursing or treatment. A statement that support is end-to-end describes case coordination. It does not promise that an authority will approve the request or that it will finish by a particular date."
          ],
          "table": {
            "caption": "Support, hand-off and a useful record to retain",
            "columns": [
              "Support",
              "Clarify the hand-off",
              "Useful record"
            ],
            "rows": [
              [
                "Document guidance",
                "The applicable service and reason for each requested record",
                "Case-specific checklist and clarification notes"
              ],
              [
                "Application submission",
                "Data review, participation and agreed submission channel",
                "Submitted transaction reference and acknowledgement"
              ],
              [
                "Status change where applicable",
                "Whether it applies and which existing record matters",
                "Relevant instruction and actual transaction outcome"
              ],
              [
                "Medical processing",
                "Official appointment or processing step and personal participation",
                "The required official appointment or result record"
              ],
              [
                "Emirates ID processing",
                "The related application and any requested attendance",
                "Application or completion reference as applicable"
              ],
              [
                "Insurance processing",
                "Applicable policy, person covered and requested documentation",
                "The policy or relevant processing record"
              ],
              [
                "Case follow-up",
                "Who acts on an outstanding request and updates the case",
                "Latest status, source and next-action owner"
              ]
            ]
          }
        },
        {
          "heading": "5. Use the correct authority reference without copying unrelated rules",
          "paragraphs": [
            "Separate the MoHRE employment-contract or work-permit question from the residence and Emirates ID record in the applicable ICP process. An integrated route can connect them; identify the relevant service rather than assuming one record proves the others.",
            "For cancellation, ICP specifically directs the domestic-worker residence route through MoHRE or the Domestic Work Bundle, including the linked residence and ID process. This is why a household service-ending message and a completed official cancellation are different records. Confirm the actual transaction and any related next step instead of assuming that one message closes every record.",
            "Identify the issuing authority from the existing record and confirm the appropriate current channel. If the case requires instructions from another competent authority, use that authority’s applicable service. The office address alone does not establish the route for every residence file."
          ]
        },
        {
          "heading": "6. Keep a private case pack with a practical readiness check",
          "paragraphs": [
            "Build the pack around the confirmed action: requested identity records, applicable agreement, existing permit or residence references where relevant, requested medical or insurance records and transaction receipts. This describes record families to organise, not a list every customer must submit. Ask why an item is needed before adding it.",
            "Use a readiness check before the next hand-off. Compare names and the relevant versions, identify unanswered questions and confirm who is receiving the information. If an item is unavailable or inconsistent, report that accurately. A neat file does not establish eligibility, and a missing item should not be replaced with an assumption."
          ],
          "table": {
            "caption": "Case-readiness questions before a hand-off",
            "columns": [
              "Check",
              "What to establish",
              "If unresolved"
            ],
            "rows": [
              [
                "Action and route",
                "The actual transaction and official service have been identified",
                "Clarify before treating a generic checklist as final"
              ],
              [
                "Named parties",
                "Applicant, employer or sponsor and worker match the case",
                "Ask which record needs review or correction"
              ],
              [
                "Requested information",
                "The relevant version is legible and reviewed",
                "Keep the question open and request specific guidance"
              ],
              [
                "Submission status",
                "Draft, submitted request and completed result are distinct",
                "Confirm the reference and latest actual status"
              ],
              [
                "Next action",
                "A responsible person and agreed follow-up point are recorded",
                "Ask what remains before the next milestone"
              ]
            ]
          }
        },
        {
          "heading": "7. Protect document handling and personal participation",
          "paragraphs": [
            "Share sensitive files only when needed through the channel agreed with the INAYA team. Do not attach passports or medical information to a public comment or general planning worksheet. The website enquiry form collects enquiry details; it does not upload documents or submit an official application.",
            "Keep account passwords and one-time codes private. If the official process needs your own authentication, signature or attendance, ask for the relevant instructions and complete that participation yourself. Read declarations before confirming them. Ask the receiving channel about the correct version or format rather than changing official evidence on your own."
          ]
        },
        {
          "heading": "8. Keep managed-service inclusions separate from visa-only quotations",
          "paragraphs": [
            "In the managed monthly arrangement, the agency is employer/sponsor and includes wage administration and applicable employment obligations in its charge. The customer is the household beneficiary with responsibilities set out in writing. Use the actual named arrangement to distinguish included agency processing from a visa-only request.",
            "The managed monthly charge includes applicable agency sponsorship and work-permit/residence processing, Emirates ID, required medical-fitness processing and the applicable health-insurance premium. Visa-only services and separately requested sponsorship transfers have their own case-specific scope and itemised quotation. Official approval and timelines remain with the responsible authorities."
          ],
          "points": [
            "The service charge includes the agreed worker salary; the customer does not pay the same salary again separately.",
            "The written agreement records household responsibilities, including the applicable live-in accommodation, meals, products, equipment, rest, supervision and safe work arrangements.",
            "Required lawful authorisation and written confirmation precede service commencement; a service payment does not waive statutory rights."
          ]
        },
        {
          "heading": "9. Review the quotation as a case document",
          "paragraphs": [
            "Ask which steps and charges are included in the proposed support and how applicable official costs are treated. Keep the quotation linked to the named service and case. A monthly service charge, a separate visa-processing quotation and a government receipt serve different purposes and should not be treated as interchangeable totals.",
            "If the route or requested scope changes, ask for written clarification of its effect before relying on the earlier amount. Record payments against the correct transaction and retain the receipts. This guide does not publish one government fee, sponsor-income threshold or completion time for all domestic-worker cases."
          ]
        },
        {
          "heading": "10. Worked examples: useful questions for different cases",
          "paragraphs": [
            "Planning example: a household considers INAYA’s managed monthly service and asks whether it must separately sponsor the worker. The discussion should identify the named agency-employment arrangement and its included processing, then record the household’s responsibilities. It should not copy a separate household-employer application checklist simply because both enquiries concern domestic help.",
            "Different planning example: someone requests support with an existing worker’s residence renewal and mentions a record submitted through another channel. The first task is to identify that record and the outstanding action. The team can then confirm the support it can provide and the necessary hand-off. The example assumes no particular eligibility, documents, fee or approval.",
            "If the enquiry instead concerns ending the arrangement, identify whether the question is about the customer agreement, the worker’s employment record or residence. Use the completed relevant result to understand what happens next. Cancellation itself should not be treated as permission to begin work in a different arrangement."
          ]
        },
        {
          "heading": "11. Follow an actual status, not an expected date",
          "paragraphs": [
            "Keep a short progress record showing the last confirmed action, its source and date, an outstanding request, the responsible party and the agreed next review. Separate preparation, submission, a request for more information and a final result. Ask what evidence supports the update rather than treating a paid receipt or an informal expected date as completion.",
            "A focused follow-up might say: “Please confirm the current status of the transaction we discussed, what action remains and who should complete it.” Send the private reference through the agreed channel. If further information is requested, ask exactly what is needed and which version should replace the earlier one. Keep the completed result with the instructions for the next step."
          ]
        },
        {
          "heading": "12. Discuss the case with the Ajman team",
          "paragraphs": [
            "Contact INAYA’s Grand Mall office in Ajman by its published phone or WhatsApp channel. Start with the requested action, the current situation and whether an application is already in progress. The team receives UAE enquiries subject to service confirmation; an appointment or enquiry discussion is separate from an official decision.",
            "Use the document-preparation guide to organise requested records, the eligibility guide to frame applicant-category questions, and the contract, sponsorship-responsibilities and cancellation guides for the relevant issue. Confirm the supported route, written scope and next responsible action before treating the case as ready to proceed."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "Use the Ajman application-readiness ledger",
          "route": "blog/housemaid-visa-ajman-application-readiness-ledger"
        },
        {
          "label": "INAYA domestic-worker visa support",
          "route": "services/maid-visa"
        },
        {
          "label": "Discuss sponsorship-transfer support",
          "route": "services/sponsorship-transfer"
        },
        {
          "label": "Prepare case-specific document records",
          "route": "blog/documents-for-domestic-worker-enquiry"
        },
        {
          "label": "Review employer and document categories",
          "route": "blog/domestic-worker-employer-eligibility-documents"
        },
        {
          "label": "Understand sponsorship responsibilities",
          "route": "blog/domestic-worker-sponsorship-responsibilities"
        },
        {
          "label": "Read contracts and renewal questions",
          "route": "blog/domestic-worker-contracts-renewal"
        },
        {
          "label": "Separate ending and cancellation records",
          "route": "blog/domestic-worker-contract-permit-residence-cancellation"
        },
        {
          "label": "Ask INAYA about the actual case",
          "route": "contact"
        }
      ],
      "sourceIntro": "Official process and Work Bundle references",
      "sourceNote": "ICP process information was checked on 29 October 2026. Select the applicable category and current official channel for the actual case. This guide’s hand-off tables and examples are planning aids, not authority decisions. INAYA’s managed-service inclusions and separately quoted support remain distinct commercial terms."
    },
    "ar": {
      "title": "دعم تأشيرة العمالة المنزلية في عجمان: المراحل والمستندات",
      "description": "خطط لدعم تأشيرة العمالة المنزلية مع عناية: حدد المعاملة وصاحب العمل والجهة، وأكد تسليم المستندات والمسؤوليات وتابع النتيجة الفعلية.",
      "lead": "تقدم عناية دعماً كاملاً لإجراءات التأشيرة: إرشادات المستندات وتقديم الطلب وتعديل الوضع وإجراءات الفحص الطبي والهوية الإماراتية والتأمين ومتابعة الحالة من البداية إلى النهاية. تعتمد المتطلبات والرسوم والأهلية والمدد على الحالة والجهات المختصة.",
      "sections": [
        {
          "heading": "1. ابدأ بالمعاملة والأطراف والسجل الحالي",
          "paragraphs": [
            "وضح ما تريد تحقيقه: ترتيب جديد للعمالة المنزلية، أو مراجعة حالة قائمة، أو تجديد، أو تغيير مقترح للكفالة، أو إنهاء ترتيب حالي. اذكر الإمارة والمرحلة الحالية وهل العاملة محددة بالفعل. صف الوضع بدقة بدلاً من اختيار إجراء اعتماداً على عنوان إعلان فقط.",
            "حدد بعد ذلك صاحب العمل أو الكفيل المسمى في السجلات والأسرة المستفيدة من الخدمة. فقد تكون الأسرة مستفيدة من خدمة مدارة وليست صاحبة عمل العاملة. ولا تحسم وثيقة الإقامة القائمة وحدها السماح بترتيب عمل أو كفالة مختلف. اسأل عن السجلات والأطراف الواجب مراجعتها قبل تأكيد الخطوة التالية."
          ]
        },
        {
          "heading": "2. حدد نوع الاستفسار قبل مقارنة عروض الأسعار",
          "paragraphs": [
            "قد تصف عبارة تأشيرة خادمة أسئلة مختلفة للعملاء. استخدم المصفوفة لتحديد سؤالك؛ فهي أداة للاستفسار وليست حكماً بالأهلية أو تسلسلاً كاملاً للطلبات. إذا لم يتضح الترتيب، فاطلب من عناية تحديد الخدمة التي يمكن دعمها قبل إرسال المستندات أو افتراض التكاليف.",
            "ميز الطلب الجديد عن تغيير سجل قائم. وإذا قدمت معاملة عبر قناة أخرى، فأخبر الفريق واحتفظ بمرجعها بصورة خاصة. اسأل عن أثرها في الخطوة المقترحة بدلاً من فتح طلب ثانٍ لمجرد الرغبة في معرفة الحالة."
          ],
          "table": {
            "caption": "استفسارات إجراءات العمالة المنزلية والتأكيد الأول",
            "columns": [
              "الاستفسار",
              "ما الذي تحدده أولاً؟",
              "ما الذي تطلبه كتابةً؟"
            ],
            "rows": [
              [
                "خدمة منزلية شهرية مدارة",
                "ترتيب الوكالة والأسرة المسميتين",
                "إجراءات الوكالة المشمولة ومسؤوليات الأسرة"
              ],
              [
                "طلب إجراءات تأشيرة منفصل",
                "الإجراء المحدد وفئة مقدم الطلب أو صاحب العمل",
                "نطاق الحالة والسجلات المطلوبة والعرض المفصل"
              ],
              [
                "تجديد لعاملة موجودة",
                "العقد أو التصريح أو سجل الإقامة المعني",
                "المسار والخطوة التالية للسجل المحدد"
              ],
              [
                "تغيير كفالة مقترح",
                "وضع التوظيف والإقامة القائم",
                "انطباق الدعم والمسار المطلوبين على الحالة"
              ],
              [
                "إنهاء ترتيب",
                "اتفاق الخدمة والسجلات الرسمية المعنية",
                "السجلات المطلوب التعامل معها وتعليمات ما بعد النتيجة"
              ]
            ]
          }
        },
        {
          "heading": "3. افهم ترابط المراحل الرسمية",
          "paragraphs": [
            "تعرض الهيئة باقة العمل للعمالة المنزلية مساراً يربط إذن الدخول واللياقة الطبية والبصمات والهوية والإقامة. أكد المراحل المنطبقة على الحالة الفعلية.",
            "راجع الحالة وفق ترتيب الجدول، دون اعتباره تسلسلاً إلزامياً للجهات. فقد يجعل سجل قائم الإجراء مختلفاً أو غير مطلوب. أكد ترابط الإجراءات والمشاركة الشخصية اللازمة، بدلاً من فتح طلب يدوي منفصل لكل صف."
          ],
          "table": {
            "caption": "مخطط مراحل وتسليم يعتمد على الحالة",
            "columns": [
              "مرحلة المراجعة",
              "السؤال المطلوب حسمه",
              "من يوضح التسليم؟",
              "السجل الذي تحتفظ به"
            ],
            "rows": [
              [
                "1. تصنيف الطلب",
                "ترتيب جديد أم تجديد أم تغيير مقترح أم إنهاء؟",
                "تحدد الأسرة وعناية الحالة الفعلية",
                "الأطراف المسماة والإجراء المطلوب"
              ],
              [
                "2. خطوة التوظيف أو الدخول للعمل عند انطباقها",
                "أي خدمة للعمالة المنزلية لدى الوزارة وأي عقد أو تصريح يتعلقان بالحالة؟",
                "مقدم الطلب أو صاحب العمل والفريق المتابع للخدمة",
                "الاتفاق المناسب ومرجع المعاملة"
              ],
              [
                "3. المشاركة الشخصية عند طلبها",
                "ما الفحص أو البصمة أو إجراء الهوية المطلوب رسمياً؟",
                "تتبع العاملة أو مقدم الطلب التعليمات الرسمية المؤكدة",
                "سجل الموعد أو المشاركة أو النتيجة المناسب"
              ],
              [
                "4. الإقامة والهوية المرتبطة",
                "أي إجراء للهيئة وسجل قائم ينطبقان؟",
                "مقدم الطلب المسؤول والقناة الرسمية المناسبة",
                "مرجع الطلب والنتيجة الفعلية"
              ],
              [
                "5. مراجعة النتيجة",
                "ما الذي اكتمل وما التعليمات المتبقية؟",
                "يراجع الطرف المسؤول النتيجة مع الأسرة",
                "النتيجة المكتملة وسجل الخطوة التالية"
              ]
            ]
          }
        },
        {
          "heading": "4. اتفق على دعم عناية ومسؤولية كل تسليم",
          "paragraphs": [
            "يتعلق دعم عناية بالعمالة المنزلية ومستنداتها المرتبطة. ويشمل التنسيق والإجراءات ضمن نطاق مكتوب يناسب الحالة. أكد ما يتولاه الفريق وما يلزمك أو يلزم العاملة تنفيذه شخصياً، وأين تصدر الجهة أو شركة التأمين أو مقدم الخدمة الرسمي القرار أو النتيجة.",
            "تعني إجراءات الفحص الطبي الدعم في الخطوة الرسمية، ولا تقدم عناية رعاية سريرية أو تمريضاً أو علاجاً. تصف متابعة الحالة من البداية إلى النهاية تنسيق إجراءاتها؛ ولا تعد بموافقة الجهة أو الإنجاز في تاريخ معين."
          ],
          "table": {
            "caption": "الدعم والتسليم والسجل المفيد",
            "columns": [
              "الدعم",
              "ما الذي تؤكده عند التسليم؟",
              "سجل مفيد"
            ],
            "rows": [
              [
                "إرشادات المستندات",
                "الخدمة المناسبة وسبب كل سجل مطلوب",
                "قائمة الحالة وملاحظات التوضيح"
              ],
              [
                "تقديم الطلب",
                "مراجعة البيانات والمشاركة وقناة التقديم",
                "مرجع المعاملة وإشعار تقديمها"
              ],
              [
                "تعديل الوضع عند انطباقه",
                "الحاجة إلى الخطوة والسجل القائم المعني",
                "التعليمات ونتيجة المعاملة الفعلية"
              ],
              [
                "إجراءات الفحص الطبي",
                "الموعد أو الإجراء الرسمي والمشاركة الشخصية",
                "الموعد أو سجل النتيجة المطلوب"
              ],
              [
                "إجراءات الهوية الإماراتية",
                "الطلب المرتبط وأي حضور يطلب",
                "مرجع الطلب أو الإنجاز بحسب الحالة"
              ],
              [
                "إجراءات التأمين",
                "الوثيقة والشخص المشمول والمستندات المطلوبة",
                "وثيقة التأمين أو سجل الإجراء المناسب"
              ],
              [
                "متابعة الحالة",
                "من يعالج طلب الاستكمال ويحدث الحالة",
                "الحالة ومصدرها والمسؤول عن الخطوة التالية"
              ]
            ]
          }
        },
        {
          "heading": "5. استخدم مرجع الجهة الصحيح دون نقل قواعد فئة أخرى",
          "paragraphs": [
            "ميز مسألة عقد التوظيف أو تصريح العمل لدى الوزارة عن سجل الإقامة والهوية في إجراء الهيئة المناسب. قد يربط المسار المتكامل بينها؛ فحدد الخدمة المعنية بدلاً من اعتبار سجل واحد دليلاً على اكتمال البقية.",
            "توجه الهيئة إلغاء إقامة العامل المساعد عبر الوزارة أو باقة العمل المنزلي، بما يشمل الإقامة والهوية المرتبطتين. لذلك يختلف طلب إنهاء الخدمة المنزلية عن نتيجة الإلغاء الرسمية المكتملة. أكد المعاملة والخطوة المرتبطة بها، ولا تفترض أن رسالة واحدة تغلق جميع السجلات.",
            "حدد جهة الإصدار من السجل الحالي وأكد القناة الرسمية المناسبة. وإذا احتاجت الحالة إلى تعليمات من جهة مختصة أخرى، فاستخدم خدمتها المنطبقة. ولا يحدد عنوان المكتب وحده المسار الصحيح لكل ملف إقامة."
          ]
        },
        {
          "heading": "6. جهز ملف حالة خاصاً مع مراجعة عملية للجاهزية",
          "paragraphs": [
            "ابن الملف حول الإجراء المؤكد: سجلات الهوية المطلوبة والاتفاق المناسب ومراجع التصريح أو الإقامة عند الحاجة والسجلات الطبية أو التأمينية المطلوبة وإيصالات المعاملة. هذه مجموعات لتنظيم السجلات، وليست قائمة يجب على كل عميل تقديمها. اسأل عن الغرض من العنصر قبل إضافته.",
            "راجع الجاهزية قبل التسليم التالي. قارن الأسماء والإصدارات المعنية، وحدد الأسئلة المفتوحة وأكد المستلم. إذا تعذرت وثيقة أو اختلفت المعلومات، فوضح ذلك بدقة. لا يثبت الملف المرتب الأهلية، ولا يستعاض عن عنصر ناقص بافتراض غير مؤكد."
          ],
          "table": {
            "caption": "أسئلة الجاهزية قبل تسليم الحالة",
            "columns": [
              "المراجعة",
              "ما الذي تؤكده؟",
              "عند عدم الحسم"
            ],
            "rows": [
              [
                "الإجراء والمسار",
                "تحديد المعاملة والخدمة الرسمية الفعلية",
                "استوضح قبل اعتماد قائمة عامة نهائية"
              ],
              [
                "الأطراف المسماة",
                "تطابق مقدم الطلب أو صاحب العمل أو الكفيل والعاملة",
                "اسأل عن السجل الذي يحتاج إلى مراجعة أو تصحيح"
              ],
              [
                "المعلومات المطلوبة",
                "وضوح النسخة المعنية ومراجعتها",
                "أبق السؤال مفتوحاً واطلب إرشاداً محدداً"
              ],
              [
                "حالة التقديم",
                "تمييز المسودة والطلب المقدم والنتيجة المكتملة",
                "أكد المرجع وآخر حالة فعلية"
              ],
              [
                "الخطوة التالية",
                "تحديد المسؤول ونقطة المتابعة المتفق عليها",
                "اسأل عما يبقى قبل المرحلة التالية"
              ]
            ]
          }
        },
        {
          "heading": "7. احمِ مشاركة المستندات والمشاركة الشخصية",
          "paragraphs": [
            "شارك الملفات الحساسة عند الحاجة فقط عبر القناة المتفق عليها مع فريق عناية. لا ترفق الجوازات أو المعلومات الطبية بتعليق عام أو ورقة تخطيط مشتركة. يجمع نموذج الاستفسار في الموقع تفاصيل الطلب؛ ولا يرفع الوثائق ولا يقدم معاملة رسمية.",
            "احتفظ بكلمات المرور ورموز التحقق لنفسك. إذا احتاج الإجراء الرسمي إلى تحققك أو توقيعك أو حضورك، فاطلب التعليمات ونفذ مشاركتك شخصياً. اقرأ الإقرارات قبل تأكيدها. واسأل القناة المستلمة عن الإصدار أو الصيغة الصحيحة بدلاً من تعديل الدليل الرسمي بنفسك."
          ]
        },
        {
          "heading": "8. ميز عناصر الخدمة المدارة عن عروض التأشيرة المنفصلة",
          "paragraphs": [
            "في الترتيب الشهري المدار، تكون الوكالة صاحبة العمل والكفيل وتشمل رسومها إدارة الأجر والتزامات التوظيف المنطبقة. العميل هو المستفيد المنزلي بمسؤوليات مبينة كتابةً. استخدم الترتيب الفعلي المسمى لتمييز إجراءات الوكالة المشمولة عن طلب تأشيرة فقط.",
            "تشمل الرسوم الشهرية المدارة الكفالة لدى الوكالة وإجراءات تصريح العمل والإقامة المنطبقة والهوية الإماراتية وفحص اللياقة الطبية المطلوب وقسط التأمين الصحي المنطبق. ولخدمات التأشيرة وحدها وطلبات نقل الكفالة المنفصلة نطاق خاص بحسب الحالة وعرض مفصل مستقل. وتبقى الموافقات والمواعيد الرسمية من اختصاص الجهات المعنية."
          ],
          "points": [
            "تشمل رسوم الخدمة راتب العاملة المتفق عليه؛ ولا يدفع العميل الراتب نفسه مرة أخرى منفصلاً.",
            "يسجل الاتفاق مسؤوليات الأسرة، بما فيها السكن والطعام للعاملة المقيمة والمنتجات والمعدات والراحة والإشراف والعمل الآمن بحسب الترتيب.",
            "يسبق بدء الخدمة التصريح النظامي المطلوب والتأكيد المكتوب؛ ولا تلغي دفعة الخدمة الحقوق القانونية."
          ]
        },
        {
          "heading": "9. راجع عرض السعر بوصفه وثيقة للحالة",
          "paragraphs": [
            "اسأل عن الخطوات والتكاليف المشمولة بالدعم المقترح وطريقة احتساب التكاليف الرسمية المنطبقة. اربط العرض بالخدمة والحالة المسميتين. تختلف وظيفة رسوم الخدمة الشهرية وعرض إجراءات التأشيرة المنفصل والإيصال الحكومي، ولا تعاملها بوصفها إجماليات متبادلة.",
            "إذا تغير المسار أو النطاق، فاطلب توضيح أثره كتابةً قبل الاعتماد على المبلغ السابق. سجل المدفوعات مقابل المعاملة الصحيحة واحتفظ بالإيصالات. لا ينشر الدليل رسماً حكومياً أو حد دخل للكفيل أو مدة إنجاز موحدة لجميع حالات العمالة المنزلية."
          ]
        },
        {
          "heading": "10. أمثلة عملية لأسئلة حالات مختلفة",
          "paragraphs": [
            "مثال للتخطيط: تفكر أسرة في خدمة عناية الشهرية المدارة وتسأل هل تحتاج إلى كفالة العاملة بنفسها بصورة منفصلة. ينبغي تحديد ترتيب توظيف الوكالة المسمى وإجراءاته المشمولة ثم تسجيل مسؤوليات الأسرة. ولا تنقل قائمة طلب صاحب عمل منزلي منفصل لمجرد أن الاستفسارين يتعلقان بالمساعدة المنزلية.",
            "مثال آخر: يطلب شخص دعماً لتجديد إقامة عاملة موجودة ويذكر معاملة قدمت عبر قناة أخرى. تبدأ المراجعة بتحديد السجل والإجراء المتبقي، ثم يؤكد الفريق الدعم الذي يمكن تقديمه والتسليم المطلوب. لا يفترض المثال أهلية أو مستندات أو رسوماً أو موافقة محددة.",
            "إذا كان السؤال عن إنهاء الترتيب، فحدد هل يتعلق باتفاق العميل أم سجل توظيف العاملة أم الإقامة. استخدم نتيجة المعاملة المعنية المكتملة لفهم الخطوة التالية. ولا يعد الإلغاء بذاته إذناً ببدء العمل ضمن ترتيب مختلف."
          ]
        },
        {
          "heading": "11. تابع الحالة الفعلية بدلاً من موعد متوقع",
          "paragraphs": [
            "احتفظ بسجل تقدم مختصر يوضح آخر إجراء مؤكد ومصدره وتاريخه وطلب الاستكمال والمسؤول ونقطة المراجعة المتفق عليها. ميز التجهيز والتقديم وطلب معلومات إضافية والنتيجة النهائية. اسأل عن الدليل الذي يستند إليه التحديث، ولا تعتبر الإيصال المدفوع أو الموعد المتوقع شفهياً اكتمالاً.",
            "قد تكون المتابعة: «يرجى تأكيد حالة المعاملة التي ناقشناها، والإجراء المتبقي، ومن ينبغي أن ينفذه». أرسل المرجع الخاص عبر القناة المتفق عليها. وإذا طلبت معلومات إضافية، فاسأل عما يلزم بالضبط وعن النسخة التي تستبدل السابقة. احتفظ بالنتيجة المكتملة وتعليمات الخطوة التالية."
          ]
        },
        {
          "heading": "12. ناقش الحالة مع فريق عجمان",
          "paragraphs": [
            "تواصل مع مكتب عناية في جراند مول بعجمان عبر الهاتف أو واتساب المعلنين. ابدأ بالإجراء المطلوب والوضع الحالي ووجود طلب جارٍ من عدمه. يستقبل الفريق استفسارات من الإمارات بحسب تأكيد الخدمة؛ وتبقى مناقشة الموعد أو الاستفسار منفصلة عن القرار الرسمي.",
            "استخدم دليل المستندات لتنظيم السجلات المطلوبة، ودليل الأهلية لصياغة أسئلة فئة مقدم الطلب، وأدلة العقود ومسؤوليات الكفالة والإلغاء للمسألة المناسبة. أكد المسار المدعوم والنطاق المكتوب والمسؤول عن الخطوة التالية قبل اعتبار الحالة جاهزة للمتابعة."
          ]
        }
      ],
      "nextSteps": [
        {
          "label": "استخدم سجل جاهزية طلب تأشيرة العاملة في عجمان",
          "route": "blog/housemaid-visa-ajman-application-readiness-ledger"
        },
        {
          "label": "دعم عناية لتأشيرة العمالة المنزلية",
          "route": "services/maid-visa"
        },
        {
          "label": "ناقش دعم نقل الكفالة",
          "route": "services/sponsorship-transfer"
        },
        {
          "label": "جهز سجلات مستندات الحالة",
          "route": "blog/documents-for-domestic-worker-enquiry"
        },
        {
          "label": "راجع فئات صاحب العمل والمستندات",
          "route": "blog/domestic-worker-employer-eligibility-documents"
        },
        {
          "label": "افهم مسؤوليات الكفالة",
          "route": "blog/domestic-worker-sponsorship-responsibilities"
        },
        {
          "label": "اقرأ أسئلة العقود والتجديد",
          "route": "blog/domestic-worker-contracts-renewal"
        },
        {
          "label": "ميز سجلات الإنهاء والإلغاء",
          "route": "blog/domestic-worker-contract-permit-residence-cancellation"
        },
        {
          "label": "اسأل عناية عن الحالة الفعلية",
          "route": "contact"
        }
      ],
      "sourceIntro": "مراجع الإجراءات الرسمية وباقة العمل",
      "sourceNote": "روجعت معلومات إجراءات الهيئة في 29 أكتوبر 2026. اختر الفئة والقناة الرسمية المناسبتين للحالة الفعلية. جداول التسليم والأمثلة أدوات للتخطيط وليست قرارات رسمية. وتبقى عناصر خدمة عناية المدارة والدعم المعروض بصورة منفصلة شروطاً تجارية مميزة."
    },
    "sources": [
      {
        "en": "ICP: residence issuance and applicant categories (English)",
        "ar": "الهيئة الاتحادية: إصدار الإقامة وفئات المتقدمين (بالإنجليزية)",
        "url": "https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64"
      },
      {
        "en": "ICP: residence renewal and applicant categories (English)",
        "ar": "الهيئة الاتحادية: تجديد الإقامة وفئات المتقدمين (بالإنجليزية)",
        "url": "https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e66"
      },
      {
        "en": "ICP: residence cancellation and domestic-worker routing (English)",
        "ar": "الهيئة الاتحادية: إلغاء الإقامة ومسار العمالة المنزلية (بالإنجليزية)",
        "url": "https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e68"
      },
      {
        "en": "ICP: FAQs, including the Domestic Workers Work Bundle (English)",
        "ar": "الهيئة الاتحادية: الأسئلة الشائعة وباقة العمل للعمالة المنزلية (بالإنجليزية)",
        "url": "https://icp.gov.ae/en/faq/"
      }
    ]
  },
  ...publishedArticleGuides,
  ...keywordArticleGuides
];

export function getDomesticWorkerGuide(slug: string) {
  return domesticWorkerGuides.find((guide) => guide.slug === slug);
}
