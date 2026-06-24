import Link from 'next/link';

type IconName = 'service' | 'price' | 'booking' | 'support' | 'shield' | 'office' | 'arrow' | 'message';

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    service: <><path {...common} d="M4 19h16" /><path {...common} d="M6 19V9l6-4 6 4v10" /><path {...common} d="M10 19v-6h4v6" /></>,
    price: <><path {...common} d="M12 3v18" /><path {...common} d="M17 7.5c-.9-1.1-2.5-1.8-4.6-1.8-2.5 0-4.2 1-4.2 2.7 0 4.1 8.8 1.9 8.8 6.4 0 1.9-1.8 3.2-4.8 3.2-2.1 0-3.8-.7-5-1.8" /></>,
    booking: <><path {...common} d="M5 5h14v15H5V5Z" /><path {...common} d="M8 3v4M16 3v4M5 9h14" /><path {...common} d="m8.5 14 2 2 4-4" /></>,
    support: <><path {...common} d="M4 12a8 8 0 1 1 16 0" /><path {...common} d="M4 12v3a2 2 0 0 0 2 2h1v-5H4ZM20 12v3a2 2 0 0 1-2 2h-1v-5h3Z" /><path {...common} d="M9 20h3a4 4 0 0 0 4-4" /></>,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    office: <><path {...common} d="M4 21h16" /><path {...common} d="M6 21V4h12v17" /><path {...common} d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" /></>,
    arrow: <><path {...common} d="M5 12h14" /><path {...common} d="m13 6 6 6-6 6" /></>,
    message: <path {...common} d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v3.8a3.8 3.8 0 0 1-3.8 3.8H10l-4.5 3.2.9-4A3.8 3.8 0 0 1 5 10.6V6.8Z" />
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

export default function FaqPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const copy = {
    badge: isArabic ? 'أسئلة شائعة' : 'Frequently Asked Questions',
    title: isArabic ? 'إجابات واضحة قبل أن تبدأ.' : 'Clear answers before you begin.',
    subtitle: isArabic
      ? 'دليل سريع للعائلات في الإمارات حول خدمات عناية للعمالة المنزلية، الأسعار، الحجز، التوفر، والمتابعة.'
      : 'A practical guide for UAE families about INAYA Domestic Workers services, pricing, booking, availability and follow-up.',
    navLabel: isArabic ? 'الأقسام' : 'Categories',
    ctaTitle: isArabic ? 'لم تجد إجابتك؟' : 'Still have a question?',
    ctaText: isArabic
      ? 'أرسل لنا سؤالك عبر واتساب وسيتواصل معك فريق عناية لتوضيح التفاصيل والخطوة المناسبة.'
      : 'Send your question on WhatsApp and the INAYA team will clarify the details and the right next step.',
    ctaWhatsapp: isArabic ? 'اسأل عبر واتساب' : 'Ask on WhatsApp',
    ctaBooking: isArabic ? 'ابدأ طلبك' : 'Start a Request',
    sections: isArabic ? [
      {
        id: 'services', icon: 'service' as IconName, title: 'الخدمات والتوفر', summary: 'ما الذي تقدمه عناية وأين تتوفر الخدمة؟', items: [
          ['ما الخدمات التي تقدمها عناية للعمالة المنزلية؟', 'نقدم خدمات الخادمات المنزلية، المربيات، جليسات الأطفال، الرعاية المنزلية، الطهاة، والمساعدة بدوام جزئي حسب التوفر ونوع الطلب.'],
          ['هل تقدمون الخدمة في جميع الإمارات؟', 'نعم، نخدم جميع إمارات الدولة. يتم تأكيد التوفر حسب الإمارة والمنطقة ونوع الخدمة والمدة المطلوبة.'],
          ['هل يمكن طلب خادمة أو مربية حسب الجنسية أو الخبرة؟', 'يمكنك توضيح التفضيلات المطلوبة، وسيقوم الفريق بمراجعة الخيارات المتاحة ومشاركة ما يناسب احتياج الأسرة.']
        ]
      },
      {
        id: 'pricing', icon: 'price' as IconName, title: 'الأسعار والباقات', summary: 'كيف يتم تحديد السعر وما الذي يشمله؟', items: [
          ['هل الأسعار ثابتة؟', 'الأسعار إرشادية وتختلف حسب نوع الخدمة، الإمارة، المدة، والتوفر. يتم تأكيد السعر النهائي قبل الحجز.'],
          ['هل تشمل الأسعار الرسوم الحكومية؟', 'أي رسوم حكومية أو إجراءات رسمية يتم توضيحها بشكل منفصل حسب نوع الخدمة والحالة.'],
          ['ما معنى عرض خاص أو Custom Quote؟', 'يعني أن الطلب يحتاج ترتيباً مخصصاً، مثل أكثر من خدمة أو متطلبات طويلة المدى أو متابعة خاصة.']
        ]
      },
      {
        id: 'booking', icon: 'booking' as IconName, title: 'الحجز والخطوات', summary: 'كيف تبدأ الطلب وما المعلومات المطلوبة؟', items: [
          ['كيف أبدأ طلب خدمة؟', 'يمكنك تعبئة نموذج الحجز أو التواصل عبر واتساب مع نوع الخدمة المطلوبة، الإمارة، المنطقة، والوقت المناسب.'],
          ['ما المعلومات التي أحتاج لإرسالها؟', 'نحتاج اسمك، رقم التواصل، نوع الخدمة، الإمارة أو المنطقة، مدة الخدمة، وأي ملاحظات مهمة عن احتياج الأسرة.'],
          ['متى يتم تأكيد الحجز؟', 'يتم التأكيد بعد مراجعة التفاصيل، التوفر، نوع الخدمة، والسعر أو الخطوات المطلوبة.']
        ]
      },
      {
        id: 'replacement', icon: 'support' as IconName, title: 'الاستبدال والمتابعة', summary: 'ماذا يحدث بعد الحجز أو عند الحاجة للدعم؟', items: [
          ['هل يوجد ضمان استبدال؟', 'يعتمد ضمان الاستبدال على نوع الباقة والاتفاق وفترة الخدمة والتوفر، ويتم توضيحه قبل الحجز.'],
          ['هل توجد متابعة بعد بدء الخدمة؟', 'نعم، يتابع فريق عناية معك لتوضيح أي خطوة لاحقة ودعمك عند الحاجة.'],
          ['ماذا أفعل إذا كان لدي ملاحظة أو شكوى؟', 'يمكنك التواصل مع الفريق عبر واتساب أو الهاتف، وسيتم مراجعة الملاحظة ومتابعتها حسب الحالة.']
        ]
      },
      {
        id: 'compliance', icon: 'shield' as IconName, title: 'الإجراءات والالتزام', summary: 'معلومات عامة عن المستندات والالتزام داخل الإمارات.', items: [
          ['هل تقدمون إرشاداً بخصوص المستندات؟', 'نعم، نوضح المستندات والخطوات المطلوبة حسب نوع الخدمة والترتيب المناسب.'],
          ['هل الخدمات متوافقة مع متطلبات الإمارات؟', 'نحرص على توضيح الخطوات بطريقة منظمة وشفافة بما يتوافق مع متطلبات خدمات العمالة المنزلية في الدولة.'],
          ['هل يمكنكم شرح العقد أو خطوات الخدمة؟', 'نعم، يتم شرح الخطوات والالتزامات الأساسية قبل تأكيد أي حجز أو ترتيب.']
        ]
      },
      {
        id: 'office', icon: 'office' as IconName, title: 'المكتب والتواصل', summary: 'طرق التواصل وموقع المكتب.', items: [
          ['أين يقع مكتب عناية؟', 'مكتبنا في Grand Mall - Ground Floor - Sheikh Khalifa Bin Zayed St - Al Rashidiya 3 - Ajman.'],
          ['ما أسرع طريقة للتواصل؟', 'واتساب هو الأسرع لمشاركة التفاصيل ومتابعة التوفر والخطوات. يمكنك أيضاً الاتصال أو إرسال بريد إلكتروني.'],
          ['هل يمكن زيارة المكتب؟', 'نعم، يمكن زيارة المكتب بعد تأكيد الموعد أو التوقيت المناسب مع الفريق.']
        ]
      }
    ] : [
      {
        id: 'services', icon: 'service' as IconName, title: 'Services & Availability', summary: 'What INAYA provides and where service is available.', items: [
          ['What services does INAYA Domestic Workers provide?', 'We provide house maid, nanny, babysitter, caregiver, cook and part-time help services, subject to availability and service type.'],
          ['Do you serve all UAE emirates?', 'Yes. We serve all UAE emirates, with availability confirmed by emirate, area, service type and requested duration.'],
          ['Can I request a maid or nanny by nationality or experience?', 'You can share your preferences, and our team will review available options that suit your household requirement.']
        ]
      },
      {
        id: 'pricing', icon: 'price' as IconName, title: 'Pricing & Packages', summary: 'How pricing is confirmed and what may be included.', items: [
          ['Are your prices fixed?', 'Prices are indicative and vary by service type, emirate, duration and availability. Final pricing is confirmed before booking.'],
          ['Are government fees included in the packages?', 'Any government or official processing fees are clarified separately depending on the service type and case.'],
          ['What does a custom quote mean?', 'A custom quote is used when the requirement needs a tailored arrangement, such as multiple services, long-term support or private follow-up.']
        ]
      },
      {
        id: 'booking', icon: 'booking' as IconName, title: 'Booking Process', summary: 'How to start a request and what details are needed.', items: [
          ['How do I start a service request?', 'You can submit the booking form or contact us on WhatsApp with the required service, emirate, area and preferred timing.'],
          ['What information should I send first?', 'Please share your name, contact number, service type, emirate or area, service duration and any important household notes.'],
          ['When is the booking confirmed?', 'Booking is confirmed after the details, availability, service type and price or required steps are reviewed.']
        ]
      },
      {
        id: 'replacement', icon: 'support' as IconName, title: 'Replacement & Support', summary: 'What happens after booking or when support is needed.', items: [
          ['Do you offer replacement support?', 'Replacement support depends on package type, agreement, service period and availability, and is explained before booking.'],
          ['Do you provide follow-up after service starts?', 'Yes. The INAYA team follows up to clarify next steps and support you when needed.'],
          ['What if I have a concern or complaint?', 'You can contact the team on WhatsApp or by phone. The concern will be reviewed and followed up according to the case.']
        ]
      },
      {
        id: 'compliance', icon: 'shield' as IconName, title: 'Process & Compliance', summary: 'General guidance about documents and UAE service requirements.', items: [
          ['Do you guide clients about required documents?', 'Yes. We explain the documents and steps required according to the service type and suitable arrangement.'],
          ['Are your services aligned with UAE requirements?', 'We focus on clear and organized steps aligned with domestic worker service requirements in the UAE.'],
          ['Can you explain the contract or service steps?', 'Yes. The main steps and responsibilities are explained before any booking or arrangement is confirmed.']
        ]
      },
      {
        id: 'office', icon: 'office' as IconName, title: 'Office & Contact', summary: 'Contact options and office location.', items: [
          ['Where is the INAYA office located?', 'Our office is at Grand Mall - Ground Floor - Sheikh Khalifa Bin Zayed St - Al Rashidiya 3 - Ajman.'],
          ['What is the fastest way to contact you?', 'WhatsApp is fastest for sharing details and following up on availability and next steps. You can also call or email us.'],
          ['Can I visit the office?', 'Yes. Office visits are possible after confirming the suitable timing with the team.']
        ]
      }
    ]
  };

  return (
    <div className="overflow-hidden bg-[#fbfaf7] text-ink">
      <section className="container-x pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/24 bg-white/70 px-4 py-2 text-xs font-bold text-primary-900 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            {copy.badge}
          </span>
          <h1 className={`${isArabic ? 'font-arabic' : 'font-heading'} mx-auto mt-7 max-w-4xl text-[2.15rem] font-bold leading-[1.08] tracking-[-0.02em] text-primary-900 sm:text-[2.85rem] lg:text-[3.2rem]`}>
            {copy.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ink/62 sm:text-base">
            {copy.subtitle}
          </p>
        </div>
      </section>

      <section className="container-x pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[270px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[16px] border border-accent-500/18 bg-white/72 p-5 shadow-[0_20px_60px_rgba(7,22,74,0.06)] backdrop-blur-xl">
              <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent-700">{copy.navLabel}</p>
              <nav className="space-y-2">
                {copy.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold text-primary-900 transition hover:bg-accent-50">
                    <LineIcon name={section.icon} className="h-4 w-4 text-accent-700" />
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-8">
            {copy.sections.map((section, sectionIndex) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 rounded-[18px] border border-accent-500/16 bg-white/76 p-6 shadow-[0_18px_60px_rgba(7,22,74,0.045)] backdrop-blur-xl sm:p-8">
                <div className="grid gap-6 xl:grid-cols-[260px_1fr] xl:items-start">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-500/30 bg-accent-50 text-accent-700">
                        <LineIcon name={section.icon} className="h-5 w-5" />
                      </div>
                      <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink/38">0{sectionIndex + 1}</span>
                    </div>
                    <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-5 text-2xl font-bold leading-tight text-primary-900`}>{section.title}</h2>
                    <div className="mt-4 h-px w-14 bg-accent-500/55" />
                    <p className="mt-4 text-sm leading-7 text-ink/58">{section.summary}</p>
                  </div>

                  <div className="space-y-3">
                    {section.items.map(([question, answer], index) => (
                      <details key={question} open={index === 0} className="group rounded-[14px] border border-primary-900/8 bg-[#fffdf9] shadow-sm transition hover:border-accent-500/28">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-start font-semibold text-primary-900 sm:px-6">
                          <span>{question}</span>
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f2efe6] text-accent-700 transition group-open:rotate-180">⌄</span>
                        </summary>
                        <p className="border-t border-primary-900/8 px-5 pb-5 pt-4 text-sm leading-7 text-ink/62 sm:px-6">{answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl rounded-[18px] border border-accent-500/20 bg-[radial-gradient(circle_at_70%_20%,rgba(191,164,106,0.18),transparent_22rem),#f2eff1] px-6 py-16 text-center shadow-[0_18px_60px_rgba(7,22,74,0.04)] sm:px-10">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-3xl font-bold text-primary-900`}>{copy.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink/58">{copy.ctaText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/971502036767" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-400 bg-primary-900 px-7 py-3 text-sm font-bold text-accent-100 shadow-[0_12px_30px_rgba(7,22,74,0.20)] transition hover:-translate-y-0.5 hover:bg-accent-500 hover:text-primary-900">
              <LineIcon name="message" className="h-4 w-4" />
              {copy.ctaWhatsapp}
            </a>
            <Link href={`/${locale}/booking`} className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-500/55 bg-white px-7 py-3 text-sm font-bold text-primary-900 transition hover:-translate-y-0.5 hover:bg-accent-50">
              {copy.ctaBooking}
              <LineIcon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
