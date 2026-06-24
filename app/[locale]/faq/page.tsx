export default function FaqPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl';
  const copy = {
    badge: isArabic ? 'أسئلة شائعة' : 'Frequently Asked Questions',
    title: isArabic ? 'إجابات واضحة قبل أن تبدأ' : 'Clear answers before you start',
    subtitle: isArabic ? 'كل ما تحتاج معرفته عن طريقة التواصل، التوفر، الخدمات، والمتابعة.' : 'Everything you need to know about contact, availability, services and follow-up.',
    sections: isArabic ? [
      { title: 'الخدمات والتوفر', items: [
        ['هل تقدمون الخدمة في جميع الإمارات؟', 'نعم، نخدم جميع إمارات الدولة ويتم تأكيد التوفر حسب الإمارة والمنطقة ونوع الخدمة.'],
        ['ما أنواع الخدمات المتاحة؟', 'تشمل الخدمات خادمات منزلية، مربيات، رعاية منزلية، طهاة، ومساعدة بدوام جزئي حسب التوفر.']
      ] },
      { title: 'الحجز والتواصل', items: [
        ['ما أسرع طريقة للتواصل؟', 'واتساب هو الأسرع لإرسال التفاصيل ومتابعة التوفر والخطوات.'],
        ['هل يمكن زيارة المكتب؟', 'نعم، يمكن زيارة مكتبنا في عجمان بعد تأكيد الموعد مع الفريق.']
      ] },
      { title: 'الأسعار والمتابعة', items: [
        ['هل الأسعار ثابتة؟', 'تختلف الأسعار حسب نوع الخدمة، المدة، الإمارة، والتوفر ويتم تأكيدها قبل الحجز.'],
        ['هل توجد متابعة بعد الحجز؟', 'نعم، يتابع الفريق معك لتوضيح أي خطوة لاحقة ودعمك عند الحاجة.']
      ] }
    ] : [
      { title: 'Services & Availability', items: [
        ['Do you serve all UAE emirates?', 'Yes, we serve all UAE emirates, with availability confirmed by emirate, area and service type.'],
        ['What services are available?', 'Services include house maids, nannies, caregivers, cooks and part-time help, subject to availability.']
      ] },
      { title: 'Booking & Contact', items: [
        ['What is the fastest way to contact you?', 'WhatsApp is the fastest way to share details and follow up on availability and next steps.'],
        ['Can I visit the office?', 'Yes, you can visit our Ajman office after confirming the timing with the team.']
      ] },
      { title: 'Pricing & Follow-up', items: [
        ['Are prices fixed?', 'Pricing depends on service type, duration, emirate and availability, and is confirmed before booking.'],
        ['Do you provide follow-up after booking?', 'Yes, the team follows up to clarify next steps and support you when needed.']
      ] }
    ]
  };

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_10%_48%,rgba(7,22,74,0.10),transparent_26rem)]" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:text-sm"><span className="h-2 w-2 rounded-full bg-accent-500" />{copy.badge}</span>
            <h1 className={`mx-auto mt-6 max-w-4xl ${headingClass}`}>{copy.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">{copy.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="glass-panel sticky top-28 rounded-[22px] p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-ink/50">FAQ</p>
              <nav className="space-y-2">
                {copy.sections.map((section) => <a key={section.title} href={`#${section.title}`} className="block rounded-full px-4 py-3 text-sm font-semibold text-primary-900 transition hover:bg-accent-50">{section.title}</a>)}
              </nav>
            </div>
          </aside>
          <div className="space-y-10">
            {copy.sections.map((section) => (
              <section key={section.title} id={section.title} className="scroll-mt-28">
                <h2 className={`${isArabic ? 'font-arabic text-3xl leading-snug' : 'font-heading text-3xl'} mb-5 font-bold text-primary-900`}>{section.title}</h2>
                <div className="space-y-3">
                  {section.items.map(([q, a], index) => (
                    <details key={q} open={index === 0} className="group glass-panel rounded-[20px] p-0 transition hover:border-accent-500/35">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-start sm:px-6">
                        <span className="font-semibold text-primary-900 sm:text-lg">{q}</span>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ivory-100 text-accent-700 transition group-open:rotate-180">⌄</span>
                      </summary>
                      <div className="border-t border-primary-700/10 px-5 pb-5 pt-4 sm:px-6"><p className="leading-7 text-ink/70">{a}</p></div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
