import type { LocationServicePage } from './location-service-pages';

const notes = {
  'maid-services-ajman': {
    en: [
      ['live-in-maid', 'Live-in maid in Ajman', 'For a maid living in your Ajman home, describe the accommodation as well as cleaning, laundry and daily priorities. Agree work and rest arrangements separately from residence.'],
      ['full-time-maid', 'Full-time housemaid in Ajman', 'List the regular workload, days and hours needed in your home. A full-time schedule does not automatically include accommodation; discuss live-in or live-out arrangements separately.'],
      ['part-time-maid', 'Part-time maid visits in Ajman', 'Share the rooms, priority tasks and preferred visit times. Include the exact residential area and access details so the team can review the proposed visit.'],
      ['nanny', 'Nanny enquiries in Ajman', 'Prepare the children’s ages, nursery or school routine and parent instructions. Ask about the individual profile’s relevant childcare experience and how updates will be shared.'],
      ['monthly-maid-contract', 'Monthly maid visits in Ajman', 'For repeating cleaning needs, discuss visit frequency, hours and tasks. A monthly visit plan is different from a full-time worker or a live-in arrangement; confirm which model the quote covers.'],
      ['maid-visa', 'Maid visa enquiries in Ajman', 'Explain the current worker and sponsor situation. Contact INAYA to confirm the support available for your case, applicable requirements and fees.']
    ],
    ar: [
      ['live-in-maid', 'خادمة مقيمة في عجمان', 'إذا كنت تحتاج خادمة تقيم في منزلك بعجمان، وضح السكن والتنظيف والغسيل والأولويات اليومية. اتفق على العمل والراحة بشكل منفصل عن الإقامة.'],
      ['full-time-maid', 'عاملة منزل بدوام كامل في عجمان', 'حدد العمل المنتظم والأيام والساعات المطلوبة في المنزل. جدول الدوام الكامل لا يشمل السكن تلقائياً؛ ناقش الإقامة أو عدم الإقامة بشكل منفصل.'],
      ['part-time-maid', 'زيارات خادمة بدوام جزئي في عجمان', 'شارك الغرف والمهام ذات الأولوية وأوقات الزيارات المفضلة. أضف المنطقة السكنية الدقيقة وتفاصيل الدخول لمراجعة الزيارة المقترحة.'],
      ['nanny', 'طلبات المربيات في عجمان', 'جهز أعمار الأطفال وروتين الحضانة أو المدرسة وتعليمات الوالدين. اسأل عن خبرة الملف الفردي المناسبة وطريقة مشاركة التحديثات.'],
      ['monthly-maid-contract', 'زيارات خادمة شهرية في عجمان', 'ناقش تكرار الزيارات والساعات والمهام لاحتياجات التنظيف المتكررة. الخطة الشهرية تختلف عن الدوام الكامل أو الإقامة؛ أكد النموذج الذي يغطيه العرض.'],
      ['maid-visa', 'استفسارات تأشيرة الخادمة في عجمان', 'وضح الوضع الحالي للعاملة والكفيل. تواصل مع عناية لتأكيد الدعم المتاح لحالتك والمتطلبات والرسوم المنطبقة.']
    ]
  },
  'maid-services-dubai': {
    en: [
      ['live-in-maid', 'Live-in maid for a Dubai household', 'Explain the household routine and accommodation proposal alongside the duties. Residence alone does not define the work schedule; review both before comparing a live-in option.'],
      ['full-time-maid', 'Full-time maid enquiries in Dubai', 'For a villa or apartment, describe the rooms, regular laundry and daily workload. Confirm the days, hours and live-in or live-out model rather than choosing on the job title alone.'],
      ['part-time-maid', 'Scheduled maid visits in Dubai', 'Prioritize tasks for each visit and specify your area, building access and preferred time window. Ask what supplies and equipment should be ready.'],
      ['nanny', 'Nanny services for Dubai families', 'Working parents can describe childcare hours, school or nursery preparation and handovers. Review relevant individual experience and distinguish ongoing nanny care from occasional babysitting.'],
      ['monthly-maid-contract', 'Recurring monthly visits in Dubai', 'A recurring plan should specify the visit count, length and agreed tasks. Confirm how it fits your family schedule; a monthly charge does not by itself provide full-time residence.'],
      ['maid-visa', 'Maid visa enquiries from Dubai', 'State the current case and ask what support INAYA can provide. Confirm applicable requirements, responsible parties and fees before relying on a checklist or proposed next step.']
    ],
    ar: [
      ['live-in-maid', 'خادمة مقيمة لأسرة في دبي', 'وضح روتين المنزل واقتراح السكن إلى جانب المهام. الإقامة وحدها لا تحدد جدول العمل؛ راجع الاثنين قبل مقارنة الخيار.'],
      ['full-time-maid', 'طلبات خادمة بدوام كامل في دبي', 'صف الغرف والغسيل المنتظم والعمل اليومي في الفيلا أو الشقة. أكد الأيام والساعات والإقامة أو عدمها بدلاً من الاختيار بالمسمى وحده.'],
      ['part-time-maid', 'زيارات خادمة مجدولة في دبي', 'رتب مهام كل زيارة وحدد المنطقة والدخول إلى المبنى والفترة الزمنية المفضلة. اسأل عن المستلزمات والمعدات المطلوب تجهيزها.'],
      ['nanny', 'خدمات المربيات لأسر دبي', 'يمكن للوالدين العاملين توضيح ساعات الرعاية والاستعداد للمدرسة أو الحضانة وتسليم الرعاية. راجع الخبرة الفردية وميز الرعاية المستمرة عن جليسة الأطفال المؤقتة.'],
      ['monthly-maid-contract', 'زيارات شهرية متكررة في دبي', 'ينبغي تحديد عدد الزيارات ومدتها والمهام المتفق عليها. أكد ملاءمتها لجدول الأسرة؛ الرسوم الشهرية لا تعني وحدها إقامة بدوام كامل.'],
      ['maid-visa', 'استفسارات تأشيرة الخادمة من دبي', 'حدد الحالة الحالية واسأل عن الدعم الذي يمكن لعناية تقديمه. أكد المتطلبات والأطراف المسؤولة والرسوم قبل الاعتماد على قائمة أو خطوة مقترحة.']
    ]
  },
  'maid-services-sharjah': {
    en: [
      ['live-in-maid', 'Live-in maid enquiries in Sharjah', 'Describe the family’s daily routine, cleaning priorities and accommodation. Agree the hours and rest arrangements; living in is not a promise of uninterrupted support.'],
      ['full-time-maid', 'Full-time maid for a Sharjah home', 'List regular household tasks and how they fit your family and school schedule. Compare the work schedule separately from whether the worker lives in the home.'],
      ['part-time-maid', 'Part-time maid visits in Sharjah', 'Specify the rooms and tasks that matter most, preferred days and the exact area. Discuss visit length and practical access before confirming a scheduled visit.'],
      ['nanny', 'Nanny enquiries for Sharjah families', 'Separate child supervision, meals and school preparation from household cleaning. Share ages and parent instructions and ask about suitable individual experience and communication.'],
      ['monthly-maid-contract', 'Monthly household visits in Sharjah', 'For repeated cleaning or laundry, discuss a visit plan with clear frequency and tasks. Do not assume a recurring monthly plan creates a full-time job or live-in accommodation.'],
      ['maid-visa', 'Maid visa enquiries from Sharjah', 'Prepare the current worker and sponsor situation and your question. Contact INAYA to confirm available case support, applicable requirements and fees; no submission or approval is promised here.']
    ],
    ar: [
      ['live-in-maid', 'طلبات خادمة مقيمة في الشارقة', 'صف روتين الأسرة وأولويات التنظيف والسكن. اتفق على الساعات والراحة؛ الإقامة ليست وعداً بدعم متواصل بلا توقف.'],
      ['full-time-maid', 'خادمة بدوام كامل لمنزل في الشارقة', 'حدد المهام المنتظمة وملاءمتها لجدول الأسرة والمدرسة. قارن جدول العمل بشكل منفصل عن إقامة العاملة في المنزل.'],
      ['part-time-maid', 'زيارات خادمة بدوام جزئي في الشارقة', 'حدد الغرف والمهام الأهم والأيام المفضلة والمنطقة الدقيقة. ناقش مدة الزيارة والدخول قبل تأكيد الموعد.'],
      ['nanny', 'طلبات المربيات لأسر الشارقة', 'افصل الإشراف على الأطفال والوجبات والاستعداد للمدرسة عن التنظيف. شارك الأعمار وتعليمات الوالدين واسأل عن الخبرة الفردية والتواصل المناسبين.'],
      ['monthly-maid-contract', 'زيارات منزلية شهرية في الشارقة', 'ناقش خطة زيارات بتكرار ومهام واضحة للتنظيف أو الغسيل المتكرر. لا تفترض أن الخطة الشهرية تعني وظيفة بدوام كامل أو سكناً داخل المنزل.'],
      ['maid-visa', 'استفسارات تأشيرة الخادمة من الشارقة', 'جهز الوضع الحالي للعاملة والكفيل وسؤالك. تواصل مع عناية لتأكيد دعم الحالة والمتطلبات والرسوم؛ لا يوجد وعد بتقديم الطلب أو الموافقة هنا.']
    ]
  }
};

export function addLocalGuidance(location: LocationServicePage): LocationServicePage {
  const local = notes[location.slug as keyof typeof notes];
  if (!local) return location;
  const visitContext = {
    'maid-services-ajman': { en: 'Before an Ajman office visit, prepare your household duties and the working arrangement you want to discuss.', ar: 'قبل زيارة المكتب في عجمان، جهز المهام المنزلية وترتيب العمل المطلوب مناقشته.' },
    'maid-services-dubai': { en: 'Dubai families can start by sharing the residential area, building access and preferred schedule; confirm visit timing before travelling to the office.', ar: 'يمكن لأسر دبي البدء بمشاركة المنطقة السكنية وتفاصيل الدخول والجدول المفضل؛ أكد موعد الزيارة قبل التوجه إلى المكتب.' },
    'maid-services-sharjah': { en: 'For a Sharjah enquiry, share the family and school routine and required hours so the discussion concerns the actual household need.', ar: 'لاستفسار من الشارقة، شارك روتين الأسرة والمدرسة والساعات المطلوبة كي تركز المناقشة على احتياج المنزل الفعلي.' }
  }[location.slug as keyof typeof notes];
  return {
    ...location,
    serviceNotes: local.en.map(([slug, title, description], index) => ({ slug, title: { en: title, ar: local.ar[index][1] }, description: { en: description, ar: local.ar[index][2] } })),
    popularServices: [...location.popularServices, { slug: 'full-time-maid', title: { en: 'Full-time maid', ar: 'خادمة بدوام كامل' } }, { slug: 'monthly-maid-contract', title: { en: 'Monthly maid visits', ar: 'زيارات خادمة شهرية' } }],
    faqs: [...location.faqs.map((faq) => /visa/i.test(faq.question.en) ? { ...faq, answer: {
      en: 'Contact INAYA to confirm the support available for your case, applicable requirements and fees.',
      ar: 'تواصل مع عناية لتأكيد الدعم المتاح لحالتك والمتطلبات والرسوم المنطبقة.'
    } } : faq), {
      question: { en: 'Where is the office, and does coverage confirm availability?', ar: 'أين المكتب وهل التغطية تؤكد التوفر؟' },
      answer: { en: `${visitContext.en} INAYA’s office is at Grand Mall, ground floor, Al Rashidiya 3, Ajman. Dubai and Sharjah are service enquiry areas, not additional office locations. Share the exact address and schedule so the team can confirm current options; contact the office before visiting.`, ar: `${visitContext.ar} مكتب عناية في جراند مول، الطابق الأرضي، الراشدية 3، عجمان. دبي والشارقة منطقتان لاستفسارات الخدمة وليستا موقعين لمكاتب إضافية. شارك العنوان والجدول لتأكيد الخيارات الحالية، وتواصل مع المكتب قبل الزيارة.` }
    }, {
      question: { en: 'How can I compare an agency and a proposed worker?', ar: 'كيف أقارن الجهة والمرشحة المقترحة؟' },
      answer: { en: 'Read genuine reviews in context and compare the written service scope, costs and support conditions. Review the individual worker’s relevant experience and ask which references or documents can be checked. A selected review or nationality is not a suitability guarantee.', ar: 'اقرأ التقييمات الحقيقية ضمن سياقها وقارن نطاق الخدمة والتكاليف وشروط الدعم المكتوبة. راجع خبرة العاملة الفردية المناسبة واسأل عن المراجع أو المستندات التي يمكن فحصها. التقييم المختار أو الجنسية ليسا ضماناً للملاءمة.' }
    }]
  };
}
