import Link from 'next/link';

type PageKey = 'about' | 'contact' | 'how' | 'countries';
type Lang = 'en' | 'ar';

type SeoContent = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: { title: string; text: string }[];
  bulletsTitle: string;
  bullets: string[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaHref: string;
  ctaLabel: string;
};

const content: Record<PageKey, Record<Lang, SeoContent>> = {
  about: {
    en: {
      eyebrow: 'SEO Guide',
      title: 'Trusted domestic worker agency for UAE families',
      lead: 'INAYA Domestic Workers supports families who need clear guidance for maid services, nanny support, cooks, caregivers, recruitment and maid visa assistance across the UAE.',
      sections: [
        { title: 'What makes INAYA different?', text: 'Families often compare maid agencies in Dubai, Ajman, Sharjah and Abu Dhabi by speed alone. INAYA focuses on the full experience: understanding the household routine, explaining available service options and keeping communication clear before any decision is made.' },
        { title: 'Profile-first guidance', text: 'Nationality and job title are only part of the decision. The right match depends on the worker profile, experience, documents, household duties, communication style, location and start date. Our team helps families review these points with a practical approach.' },
        { title: 'UAE-wide service support', text: 'From Ajman to Dubai, Sharjah, Abu Dhabi and the Northern Emirates, INAYA helps families choose services that fit their home, schedule and expectations.' }
      ],
      bulletsTitle: 'Families choose INAYA for',
      bullets: ['Live-in and live-out maid service guidance', 'Nanny, babysitting and newborn care coordination', 'Home cooking, personal chef and kitchen support', 'Elder care, patient care and companion care options', 'Maid visa, sponsorship transfer and recruitment support'],
      faqTitle: 'About INAYA — common questions',
      faqs: [
        { question: 'Is INAYA only based in Ajman?', answer: 'INAYA is based in Ajman and supports domestic worker enquiries across UAE emirates, subject to availability and service type.' },
        { question: 'Can INAYA help compare different service options?', answer: 'Yes. The team explains available maid, nanny, cook, caregiver, recruitment and visa-related options so the family can choose clearly.' },
        { question: 'Do you provide the same worker profile to every family?', answer: 'No. Requirements are reviewed first, then suitable profiles or service options are discussed based on household needs.' }
      ],
      ctaTitle: 'Need a trusted domestic worker service in UAE?',
      ctaText: 'Share your home requirement and INAYA will guide you through the next step.',
      ctaHref: '/contact',
      ctaLabel: 'Contact INAYA'
    },
    ar: {
      eyebrow: 'دليل تحسين المحتوى',
      title: 'شركة عمالة منزلية موثوقة للعائلات في الإمارات',
      lead: 'تساعد عناية للعمالة المنزلية الأسر التي تبحث عن إرشاد واضح لخدمات الخادمات والمربيات والطهاة والرعاية المنزلية والتوظيف وتأشيرة الخادمة في الإمارات.',
      sections: [
        { title: 'ما الذي يميز عناية؟', text: 'كثير من الأسر تقارن شركات الخادمات في دبي وعجمان والشارقة وأبوظبي بالسرعة فقط. عناية تركز على التجربة كاملة: فهم روتين المنزل، شرح الخيارات المتاحة، والحفاظ على تواصل واضح قبل اتخاذ القرار.' },
        { title: 'اختيار يعتمد على الملف الفردي', text: 'الجنسية والمسمى الوظيفي ليسا وحدهما أساس القرار. الاختيار المناسب يعتمد على الملف والخبرة والمستندات والمهام المطلوبة وطريقة التواصل والمنطقة وتاريخ البدء. يساعد فريقنا الأسرة على مراجعة هذه النقاط بوضوح.' },
        { title: 'دعم في جميع الإمارات', text: 'من عجمان إلى دبي والشارقة وأبوظبي والإمارات الشمالية، تساعد عناية الأسر على اختيار خدمة تناسب المنزل والجدول والتوقعات.' }
      ],
      bulletsTitle: 'لماذا تختار الأسر عناية؟',
      bullets: ['إرشاد لخدمات الخادمات المقيمات وغير المقيمات', 'تنسيق خدمات المربيات ورعاية الأطفال والمواليد', 'الطبخ المنزلي والشيف الخاص ومساعدة المطبخ', 'رعاية كبار السن والمرضى والمرافقة', 'دعم تأشيرة الخادمة ونقل الكفالة والتوظيف'],
      faqTitle: 'أسئلة شائعة عن عناية',
      faqs: [
        { question: 'هل عناية موجودة فقط في عجمان؟', answer: 'عناية مقرها في عجمان وتدعم طلبات العمالة المنزلية في مختلف إمارات الدولة حسب التوفر ونوع الخدمة.' },
        { question: 'هل تساعدون في مقارنة خيارات الخدمة؟', answer: 'نعم، يشرح الفريق خيارات الخادمات والمربيات والطهاة والرعاية المنزلية والتوظيف والتأشيرة حتى تختار الأسرة بوضوح.' },
        { question: 'هل يتم ترشيح نفس الملف لكل الأسر؟', answer: 'لا، تتم مراجعة احتياج الأسرة أولاً ثم يتم شرح الخيارات أو الملفات المناسبة حسب طبيعة المنزل.' }
      ],
      ctaTitle: 'هل تحتاج خدمة عمالة منزلية موثوقة في الإمارات؟',
      ctaText: 'شاركنا احتياج منزلك وسيرشدك فريق عناية للخطوة التالية.',
      ctaHref: '/contact',
      ctaLabel: 'تواصل مع عناية'
    }
  },
  contact: {
    en: {
      eyebrow: 'Contact & Availability',
      title: 'Speak with INAYA for maid services across the UAE',
      lead: 'Use this contact page to request maid services in Ajman, Dubai, Sharjah, Abu Dhabi and other UAE emirates. Share the service type, location, schedule and preferred start date for faster guidance.',
      sections: [
        { title: 'What to include in your enquiry', text: 'To help our team respond quickly, mention whether you need a live-in maid, live-out maid, part-time cleaning, nanny, babysitter, cook, caregiver, maid visa assistance or recruitment support.' },
        { title: 'Fast follow-up through WhatsApp', text: 'WhatsApp is usually the fastest way to share your requirement, ask about availability and receive the next steps from the INAYA team.' },
        { title: 'Office and UAE coverage', text: 'Our office is in Grand Mall, Ajman, while service coordination is available for families across UAE emirates depending on the service type and availability.' }
      ],
      bulletsTitle: 'Before contacting us, prepare',
      bullets: ['Required service type', 'Emirate and area', 'Preferred start date', 'Live-in, live-out, part-time or monthly preference', 'Any child care, cooking or elderly care requirements'],
      faqTitle: 'Contact questions',
      faqs: [
        { question: 'What is the fastest way to contact INAYA?', answer: 'WhatsApp is the fastest option for sharing your requirement and receiving follow-up.' },
        { question: 'Can I visit the INAYA office?', answer: 'Yes, you can visit the office in Grand Mall, Ajman. It is better to contact the team first to confirm timing.' },
        { question: 'Do you answer enquiries from Dubai and Abu Dhabi?', answer: 'Yes. INAYA supports enquiries across UAE emirates, with availability confirmed by service type and area.' }
      ],
      ctaTitle: 'Ready to discuss your requirement?',
      ctaText: 'Send your details and our team will guide you clearly.',
      ctaHref: '/contact',
      ctaLabel: 'Send Request'
    },
    ar: {
      eyebrow: 'التواصل والتوفر',
      title: 'تواصل مع عناية لخدمات الخادمات في الإمارات',
      lead: 'استخدم هذه الصفحة لطلب خدمات الخادمات في عجمان ودبي والشارقة وأبوظبي وباقي الإمارات. اذكر نوع الخدمة والمنطقة والجدول وتاريخ البدء للحصول على متابعة أسرع.',
      sections: [
        { title: 'ماذا تذكر في طلبك؟', text: 'حتى يرد الفريق بسرعة، وضح هل تحتاج خادمة مقيمة، خادمة غير مقيمة، تنظيف جزئي، مربية، جليسة أطفال، طباخة، رعاية منزلية، مساعدة في التأشيرة أو التوظيف.' },
        { title: 'متابعة أسرع عبر واتساب', text: 'واتساب عادة هو أسرع وسيلة لمشاركة المتطلبات ومعرفة التوفر والحصول على الخطوات التالية من فريق عناية.' },
        { title: 'المكتب والتغطية داخل الإمارات', text: 'مكتبنا في جراند مول، عجمان، مع تنسيق خدمات للأسر في إمارات الدولة حسب نوع الخدمة والتوفر.' }
      ],
      bulletsTitle: 'قبل التواصل معنا، جهز',
      bullets: ['نوع الخدمة المطلوبة', 'الإمارة والمنطقة', 'تاريخ البدء المفضل', 'تفضيل مقيمة أو غير مقيمة أو جزئي أو شهري', 'أي متطلبات لرعاية الأطفال أو الطبخ أو رعاية كبار السن'],
      faqTitle: 'أسئلة التواصل',
      faqs: [
        { question: 'ما أسرع طريقة للتواصل مع عناية؟', answer: 'واتساب هو الخيار الأسرع لمشاركة المتطلبات والحصول على متابعة.' },
        { question: 'هل يمكن زيارة مكتب عناية؟', answer: 'نعم، يمكن زيارة المكتب في جراند مول، عجمان. يفضل التواصل مع الفريق أولاً لتأكيد الموعد.' },
        { question: 'هل تردون على طلبات دبي وأبوظبي؟', answer: 'نعم، تدعم عناية الطلبات في إمارات الدولة ويتم تأكيد التوفر حسب نوع الخدمة والمنطقة.' }
      ],
      ctaTitle: 'جاهز لمناقشة احتياجك؟',
      ctaText: 'أرسل التفاصيل وسيرشدك فريقنا بوضوح.',
      ctaHref: '/contact',
      ctaLabel: 'أرسل الطلب'
    }
  },
  how: {
    en: {
      eyebrow: 'Hiring Process',
      title: 'How to hire a maid or domestic worker in UAE with INAYA',
      lead: 'The INAYA process is designed to make domestic worker enquiries easier for families. We guide you from requirement review to service matching, document guidance and follow-up.',
      sections: [
        { title: 'Step 1: Share your home requirement', text: 'Tell us the type of help you need, such as live-in maid, nanny, cook, caregiver or visa assistance. Include your emirate, area, timing and household notes.' },
        { title: 'Step 2: Review suitable service options', text: 'The team checks service category, availability and practical fit, then explains the next options clearly.' },
        { title: 'Step 3: Confirm process and support', text: 'Before moving ahead, we explain documents, timing, responsibilities and follow-up so the family understands the process.' }
      ],
      bulletsTitle: 'The process is useful for',
      bullets: ['New families hiring home support for the first time', 'Families comparing maid service options in UAE', 'Households needing nanny, cooking or care support', 'Clients requiring maid visa or sponsorship transfer guidance', 'Families that need clear follow-up before confirmation'],
      faqTitle: 'Process questions',
      faqs: [
        { question: 'How long does the process take?', answer: 'Timing depends on service type, availability, documents and location. The team explains expected next steps after reviewing your requirement.' },
        { question: 'Do I need documents before the first call?', answer: 'For general enquiries, basic requirement details are enough. Documents are explained when the service or visa process requires them.' },
        { question: 'Can I ask for a specific nationality?', answer: 'Yes, you can share a preference, but the final recommendation should be based on the individual profile and household fit.' }
      ],
      ctaTitle: 'Start with a clear process',
      ctaText: 'Send your requirement and INAYA will guide you step by step.',
      ctaHref: '/contact',
      ctaLabel: 'Start Request'
    },
    ar: {
      eyebrow: 'عملية التوظيف',
      title: 'كيف تختار خادمة أو عاملة منزلية في الإمارات مع عناية',
      lead: 'تم تصميم عملية عناية لتسهيل طلبات العمالة المنزلية على الأسر. نرشدك من مراجعة الاحتياج إلى مطابقة الخدمة وإرشاد المستندات والمتابعة.',
      sections: [
        { title: 'الخطوة الأولى: شارك احتياج المنزل', text: 'أخبرنا بنوع المساعدة المطلوبة مثل خادمة مقيمة أو مربية أو طباخة أو رعاية منزلية أو مساعدة في التأشيرة. اذكر الإمارة والمنطقة والوقت وملاحظات المنزل.' },
        { title: 'الخطوة الثانية: مراجعة خيارات الخدمة المناسبة', text: 'يتحقق الفريق من فئة الخدمة والتوفر والملاءمة العملية ثم يشرح الخيارات التالية بوضوح.' },
        { title: 'الخطوة الثالثة: تأكيد الإجراء والدعم', text: 'قبل المتابعة، نشرح المستندات والوقت والمسؤوليات والمتابعة حتى تفهم الأسرة العملية كاملة.' }
      ],
      bulletsTitle: 'هذه العملية مفيدة لـ',
      bullets: ['الأسر التي تطلب دعماً منزلياً لأول مرة', 'الأسر التي تقارن خيارات خدمات الخادمات في الإمارات', 'المنازل التي تحتاج مربية أو طبخ أو رعاية', 'العملاء الذين يحتاجون تأشيرة خادمة أو نقل كفالة', 'الأسر التي تريد متابعة واضحة قبل التأكيد'],
      faqTitle: 'أسئلة حول العملية',
      faqs: [
        { question: 'كم تستغرق العملية؟', answer: 'يعتمد الوقت على نوع الخدمة والتوفر والمستندات والمنطقة. يشرح الفريق الخطوات المتوقعة بعد مراجعة احتياجك.' },
        { question: 'هل أحتاج مستندات قبل أول تواصل؟', answer: 'للاستفسار العام تكفي تفاصيل الاحتياج الأساسية. يتم شرح المستندات عندما تتطلبها الخدمة أو التأشيرة.' },
        { question: 'هل يمكن طلب جنسية محددة؟', answer: 'نعم، يمكن مشاركة التفضيل، لكن الترشيح المناسب يعتمد على الملف الفردي وملاءمته للمنزل.' }
      ],
      ctaTitle: 'ابدأ بخطوات واضحة',
      ctaText: 'أرسل احتياجك وستوجهك عناية خطوة بخطوة.',
      ctaHref: '/contact',
      ctaLabel: 'ابدأ الطلب'
    }
  },
  countries: {
    en: {
      eyebrow: 'Source Countries',
      title: 'Compare maid source countries with profile-first guidance',
      lead: 'INAYA helps families compare domestic worker source countries such as the Philippines, Sri Lanka, Nepal, India, Bangladesh, Ethiopia, Kenya, Uganda, Ghana, Sierra Leone, Indonesia and Myanmar.',
      sections: [
        { title: 'Country preference is only a starting point', text: 'Many families search for Filipino maid in UAE, Sri Lankan maid in UAE, Nepali maid in UAE or Indonesian maid in UAE. A country preference is useful, but the individual profile, documents, skills and family fit matter more.' },
        { title: 'What INAYA reviews', text: 'The team reviews role expectations, previous experience, communication, availability and required documents before explaining suitable options.' },
        { title: 'UAE family matching', text: 'Every home has a different routine. INAYA supports families with a calm comparison process for housekeeping, childcare, cooking, care support and live-in or live-out arrangements.' }
      ],
      bulletsTitle: 'Country guidance covers',
      bullets: ['Current availability by service category', 'Profile experience and duties', 'Document and process guidance', 'Communication and household expectations', 'Relevant service links for maid, nanny, cook and care support'],
      faqTitle: 'Country source questions',
      faqs: [
        { question: 'Which maid nationality is best in UAE?', answer: 'There is no single best nationality for every family. The best choice depends on the individual profile, experience, duties, communication and household routine.' },
        { question: 'Can I request a specific country?', answer: 'Yes. You can share a country preference and INAYA will explain availability and suitable profile options.' },
        { question: 'Do all countries have the same availability?', answer: 'No. Availability can change by country, role, documents and timing. Contact INAYA to confirm current options.' }
      ],
      ctaTitle: 'Need help choosing a country or profile?',
      ctaText: 'Tell us your family requirement and we will explain suitable options.',
      ctaHref: '/contact',
      ctaLabel: 'Ask INAYA'
    },
    ar: {
      eyebrow: 'دول المصدر',
      title: 'قارن دول مصدر العمالة المنزلية بإرشاد يعتمد على الملف الفردي',
      lead: 'تساعد عناية الأسر على مقارنة دول مصدر العمالة المنزلية مثل الفلبين وسريلانكا ونيبال والهند وبنغلاديش وإثيوبيا وكينيا وأوغندا وغانا وسيراليون وإندونيسيا وميانمار.',
      sections: [
        { title: 'تفضيل الدولة مجرد بداية', text: 'تبحث كثير من الأسر عن خادمة فلبينية في الإمارات أو خادمة سريلانكية أو نيبالية أو إندونيسية. تفضيل الدولة مفيد، لكن الملف الفردي والمستندات والمهارات وملاءمة الأسرة أهم.' },
        { title: 'ما الذي تراجعه عناية؟', text: 'يراجع الفريق توقعات الدور والخبرة السابقة وطريقة التواصل والتوفر والمستندات المطلوبة قبل شرح الخيارات المناسبة.' },
        { title: 'مطابقة تناسب الأسرة في الإمارات', text: 'لكل منزل روتينه الخاص. تدعم عناية الأسر بعملية مقارنة هادئة لأعمال المنزل ورعاية الأطفال والطبخ والرعاية وخيارات الإقامة داخل المنزل أو خارجه.' }
      ],
      bulletsTitle: 'إرشاد الدول يشمل',
      bullets: ['التوفر الحالي حسب فئة الخدمة', 'خبرة الملف والمهام', 'إرشاد المستندات والإجراءات', 'التواصل وتوقعات المنزل', 'روابط الخدمات المناسبة للخادمات والمربيات والطهاة والرعاية'],
      faqTitle: 'أسئلة دول المصدر',
      faqs: [
        { question: 'ما أفضل جنسية للخادمات في الإمارات؟', answer: 'لا توجد جنسية واحدة أفضل لكل أسرة. الاختيار يعتمد على الملف الفردي والخبرة والمهام والتواصل وروتين المنزل.' },
        { question: 'هل يمكن طلب دولة محددة؟', answer: 'نعم، يمكن مشاركة تفضيل الدولة وستشرح عناية التوفر والملفات المناسبة.' },
        { question: 'هل التوفر متساوٍ في كل الدول؟', answer: 'لا، التوفر يتغير حسب الدولة والدور والمستندات والوقت. تواصل مع عناية لتأكيد الخيارات الحالية.' }
      ],
      ctaTitle: 'هل تحتاج مساعدة في اختيار الدولة أو الملف؟',
      ctaText: 'أخبرنا باحتياج أسرتك وسنشرح الخيارات المناسبة.',
      ctaHref: '/contact',
      ctaLabel: 'اسأل عناية'
    }
  }
};

export default function PhaseOneSeoSection({ page, locale }: { page: PageKey; locale: string }) {
  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const t = content[page][lang];
  const href = `/${locale}${t.ctaHref}`;

  return (
    <section className="bg-[#fbfaf7] px-6 py-16 text-primary-900 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-white/80 bg-white/78 p-7 shadow-[0_24px_70px_rgba(7,22,74,0.07)] ring-1 ring-accent-500/10 backdrop-blur-xl sm:p-9 lg:p-12">
        <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.26em] text-accent-700">{t.eyebrow}</p>
            <h2 className={`${lang === 'ar' ? 'font-arabic leading-[1.32]' : 'font-heading leading-tight'} mt-4 text-[2rem] font-bold tracking-[-0.045em] sm:text-[2.75rem]`}>{t.title}</h2>
            <p className="mt-5 text-[0.98rem] leading-8 text-primary-900/80">{t.lead}</p>
            <div className="mt-7 rounded-[22px] border border-accent-500/16 bg-[#f8f6f0] p-5">
              <h3 className="font-heading text-lg font-bold text-primary-900">{t.bulletsTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-primary-900/72">
                {t.bullets.map((item) => <li key={item} className="flex gap-3"><span className="mt-1 text-accent-700">✓</span><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
          <div className="space-y-5">
            {t.sections.map((item) => (
              <article key={item.title} className="rounded-[22px] border border-primary-900/8 bg-white p-5 shadow-[0_14px_40px_rgba(7,22,74,0.045)]">
                <h3 className="font-heading text-xl font-bold text-primary-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-primary-900/80">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-[-0.03em] text-primary-900">{t.faqTitle}</h3>
            <div className="mt-5 grid gap-4">
              {t.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-primary-900/8 bg-white p-5 open:border-accent-500/28">
                  <summary className="cursor-pointer font-semibold text-primary-900">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-primary-900/75">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] bg-primary-900 p-7 text-white shadow-[0_24px_70px_rgba(7,22,74,0.18)]">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-300">INAYA</p>
            <h3 className={`${lang === 'ar' ? 'font-arabic' : 'font-heading'} mt-4 text-2xl font-bold leading-tight`}>{t.ctaTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-white/85">{t.ctaText}</p>
            <Link href={href} className="mt-6 inline-flex rounded-full bg-accent-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-900 transition hover:-translate-y-0.5 hover:bg-accent-300">
              {t.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
