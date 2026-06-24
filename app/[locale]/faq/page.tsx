'use client';

import { useState } from 'react';
import Link from 'next/link';

type IconName = 'service' | 'price' | 'booking' | 'support' | 'shield' | 'arrow' | 'message';
type FaqItem = { question: string; answer: string };
type FaqCategory = { id: string; title: string; eyebrow: string; icon: IconName; items: FaqItem[] };

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    service: <><path {...common} d="M4 19h16" /><path {...common} d="M6 19V9l6-4 6 4v10" /><path {...common} d="M10 19v-6h4v6" /></>,
    price: <><path {...common} d="M12 3v18" /><path {...common} d="M17 7.5c-.9-1.1-2.5-1.8-4.6-1.8-2.5 0-4.2 1-4.2 2.7 0 4.1 8.8 1.9 8.8 6.4 0 1.9-1.8 3.2-4.8 3.2-2.1 0-3.8-.7-5-1.8" /></>,
    booking: <><path {...common} d="M5 5h14v15H5V5Z" /><path {...common} d="M8 3v4M16 3v4M5 9h14" /><path {...common} d="m8.5 14 2 2 4-4" /></>,
    support: <><path {...common} d="M4 12a8 8 0 1 1 16 0" /><path {...common} d="M4 12v3a2 2 0 0 0 2 2h1v-5H4ZM20 12v3a2 2 0 0 1-2 2h-1v-5h3Z" /><path {...common} d="M9 20h3a4 4 0 0 0 4-4" /></>,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    arrow: <><path {...common} d="M5 12h14" /><path {...common} d="m13 6 6 6-6 6" /></>,
    message: <path {...common} d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v3.8a3.8 3.8 0 0 1-3.8 3.8H10l-4.5 3.2.9-4A3.8 3.8 0 0 1 5 10.6V6.8Z" />
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

export default function FaqPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const categories: FaqCategory[] = isArabic ? [
    {
      id: 'services',
      title: 'الخدمات والتوفر',
      eyebrow: 'خدمات العمالة المنزلية في الإمارات',
      icon: 'service',
      items: [
        { question: 'ما الخدمات التي تقدمها عناية للعمالة المنزلية؟', answer: 'تقدم عناية خدمات الخادمات المنزليات، المربيات، جليسات الأطفال، مقدمي الرعاية، الطهاة، والمساعدة بدوام جزئي حسب نوع الطلب والتوفر.' },
        { question: 'هل تخدمون جميع إمارات الدولة؟', answer: 'نعم، نقدم خدماتنا في جميع إمارات الدولة، ويتم تأكيد التوفر حسب الإمارة والمنطقة ونوع الخدمة والمدة المطلوبة.' },
        { question: 'هل يمكن طلب خادمة أو مربية حسب الخبرة أو الجنسية؟', answer: 'يمكنك مشاركة تفضيلاتك بوضوح، وسيقوم الفريق بمراجعة الخيارات المتاحة التي تناسب احتياج الأسرة.' },
        { question: 'هل التوفر مضمون فوراً؟', answer: 'التوفر لا يكون مضموناً إلا بعد مراجعة الطلب. نؤكد لك الخيارات المناسبة قبل أي حجز أو التزام.' }
      ]
    },
    {
      id: 'pricing',
      title: 'الأسعار والباقات',
      eyebrow: 'وضوح في التكلفة قبل القرار',
      icon: 'price',
      items: [
        { question: 'هل الأسعار ثابتة؟', answer: 'الأسعار تختلف حسب نوع الخدمة، الإمارة، مدة الخدمة، والتوفر. يتم تأكيد السعر النهائي قبل الحجز.' },
        { question: 'ماذا تشمل الباقة؟', answer: 'تعتمد التفاصيل على نوع الخدمة أو الباقة. نوضح لك ما هو مشمول وما يحتاج إلى تأكيد إضافي قبل المتابعة.' },
        { question: 'هل الرسوم الحكومية مشمولة؟', answer: 'أي رسوم حكومية أو إجراءات رسمية يتم توضيحها بشكل منفصل حسب نوع الخدمة والحالة.' },
        { question: 'ما المقصود بعرض السعر المخصص؟', answer: 'عرض السعر المخصص يستخدم عندما يكون الطلب خاصاً، مثل ترتيب طويل المدى، أكثر من خدمة، أو متابعة إضافية للأسرة.' }
      ]
    },
    {
      id: 'booking',
      title: 'الحجز والخطوات',
      eyebrow: 'خطوات واضحة من أول تواصل',
      icon: 'booking',
      items: [
        { question: 'كيف أبدأ طلب الخدمة؟', answer: 'يمكنك تعبئة نموذج الطلب أو التواصل عبر واتساب مع نوع الخدمة المطلوبة، الإمارة، المنطقة، والوقت المناسب.' },
        { question: 'ما التفاصيل التي يجب إرسالها أولاً؟', answer: 'نحتاج الاسم، رقم التواصل، نوع الخدمة، الإمارة أو المنطقة، مدة الخدمة، وأي ملاحظات مهمة عن احتياج الأسرة.' },
        { question: 'متى يتواصل معي الفريق؟', answer: 'بعد استلام الطلب، يتواصل الفريق لمراجعة التفاصيل وتأكيد التوفر والخطوة التالية.' },
        { question: 'متى يتم تأكيد الحجز؟', answer: 'يتم تأكيد الحجز بعد مراجعة التفاصيل، التوفر، نوع الخدمة، والسعر أو الخطوات المطلوبة.' }
      ]
    },
    {
      id: 'support',
      title: 'الاستبدال والمتابعة',
      eyebrow: 'دعم بعد الحجز',
      icon: 'support',
      items: [
        { question: 'هل توفرون دعم الاستبدال؟', answer: 'دعم الاستبدال يعتمد على نوع الباقة والاتفاق وفترة الخدمة والتوفر، ويتم توضيحه قبل الحجز.' },
        { question: 'ماذا إذا لم تكن الخدمة مناسبة؟', answer: 'يمكنك التواصل مع الفريق، وسيتم مراجعة الملاحظة وتوضيح الخيارات المتاحة حسب الحالة والاتفاق.' },
        { question: 'هل توجد متابعة بعد بدء الخدمة؟', answer: 'نعم، يتابع فريق عناية معك لتوضيح أي خطوة لاحقة ودعمك عند الحاجة.' },
        { question: 'ما أسرع طريقة للحصول على الدعم؟', answer: 'واتساب هو الأسرع لمشاركة التفاصيل ومتابعة التوفر والدعم. يمكنك أيضاً الاتصال أو إرسال بريد إلكتروني.' }
      ]
    },
    {
      id: 'compliance',
      title: 'الإجراءات والالتزام',
      eyebrow: 'شفافية في المستندات والخطوات',
      icon: 'shield',
      items: [
        { question: 'هل تقدمون إرشاداً بخصوص المستندات؟', answer: 'نعم، نوضح المستندات والخطوات المطلوبة حسب نوع الخدمة والترتيب المناسب.' },
        { question: 'هل الخدمات متوافقة مع متطلبات الإمارات؟', answer: 'نحرص على تنظيم الخطوات وشرحها بوضوح بما يتوافق مع متطلبات خدمات العمالة المنزلية في الدولة.' },
        { question: 'هل تشرحون خطوات العقد أو الخدمة؟', answer: 'نعم، يتم شرح الخطوات والالتزامات الأساسية قبل تأكيد أي حجز أو ترتيب.' },
        { question: 'هل يمكن زيارة مكتب عجمان؟', answer: 'نعم، يمكن زيارة مكتبنا في جراند مول عجمان بعد تأكيد التوقيت المناسب مع الفريق.' }
      ]
    }
  ] : [
    {
      id: 'services',
      title: 'Services & Availability',
      eyebrow: 'UAE domestic worker services',
      icon: 'service',
      items: [
        { question: 'What services does INAYA Domestic Workers provide?', answer: 'INAYA provides house maid, nanny, babysitter, caregiver, cook and part-time help services, subject to availability and service type.' },
        { question: 'Do you serve all UAE emirates?', answer: 'Yes. We serve all UAE emirates, with availability confirmed by emirate, area, service type and requested duration.' },
        { question: 'Can I request a maid or nanny by experience or nationality?', answer: 'You can share your preferences clearly, and our team will review suitable available options for your household requirement.' },
        { question: 'Is availability guaranteed immediately?', answer: 'Availability is confirmed only after we review the request. We share suitable options before any booking or commitment.' }
      ]
    },
    {
      id: 'pricing',
      title: 'Pricing & Packages',
      eyebrow: 'Clear cost guidance before you decide',
      icon: 'price',
      items: [
        { question: 'Are your prices fixed?', answer: 'Pricing varies by service type, emirate, service duration and availability. Final pricing is confirmed before booking.' },
        { question: 'What is included in the package?', answer: 'Package details depend on the selected service. We explain what is included and what needs separate confirmation before you proceed.' },
        { question: 'Are government fees included?', answer: 'Any government or official processing fees are clarified separately depending on the service type and case.' },
        { question: 'What is a custom quote?', answer: 'A custom quote is used when the requirement needs a tailored arrangement, such as long-term support, multiple services or extra household follow-up.' }
      ]
    },
    {
      id: 'booking',
      title: 'Booking Process',
      eyebrow: 'Clear steps from first contact',
      icon: 'booking',
      items: [
        { question: 'How do I start a service request?', answer: 'You can submit the request form or contact us on WhatsApp with the service type, emirate, area and preferred timing.' },
        { question: 'What details should I send first?', answer: 'Please share your name, contact number, service type, emirate or area, service duration and any important household notes.' },
        { question: 'How quickly will your team respond?', answer: 'After receiving your request, our team will review the details and contact you to confirm availability and next steps.' },
        { question: 'When is the booking confirmed?', answer: 'Booking is confirmed after the details, availability, service type and price or required steps are reviewed.' }
      ]
    },
    {
      id: 'support',
      title: 'Replacement & Support',
      eyebrow: 'Support after booking',
      icon: 'support',
      items: [
        { question: 'Do you offer replacement support?', answer: 'Replacement support depends on package type, agreement, service period and availability, and is explained before booking.' },
        { question: 'What if the service is not suitable?', answer: 'You can contact the team, and we will review the concern and explain available options based on the case and agreement.' },
        { question: 'Do you follow up after service starts?', answer: 'Yes. The INAYA team follows up to clarify next steps and support you when needed.' },
        { question: 'What is the fastest way to get support?', answer: 'WhatsApp is fastest for sharing details and following up on availability or support. You can also call or email us.' }
      ]
    },
    {
      id: 'compliance',
      title: 'Process & Compliance',
      eyebrow: 'Transparent documents and service steps',
      icon: 'shield',
      items: [
        { question: 'Do you guide clients about documents?', answer: 'Yes. We explain the documents and steps required according to the service type and suitable arrangement.' },
        { question: 'Are your services aligned with UAE requirements?', answer: 'We focus on organized and transparent steps aligned with domestic worker service requirements in the UAE.' },
        { question: 'Do you explain contract or service steps?', answer: 'Yes. The main steps and responsibilities are explained before any booking or arrangement is confirmed.' },
        { question: 'Can I visit the Ajman office?', answer: 'Yes. You can visit our office at Grand Mall, Ajman after confirming the suitable timing with the team.' }
      ]
    }
  ];

  const [activeId, setActiveId] = useState(categories[0].id);
  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];
  const copy = {
    badge: isArabic ? 'مركز المساعدة' : 'Help Center',
    title: isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
    subtitle: isArabic
      ? 'كل ما تحتاج معرفته عن خدمات عناية للعمالة المنزلية، الحجز، الأسعار، الدعم، والإجراءات داخل الإمارات.'
      : 'Everything you need to know about INAYA Domestic Workers services, booking, pricing, support and UAE service steps.',
    ctaTitle: isArabic ? 'هل لديك سؤال آخر؟' : 'Still have questions?',
    ctaText: isArabic
      ? 'فريق عناية جاهز لتوضيح التفاصيل ومساعدتك في اختيار الخدمة المناسبة لأسرتك.'
      : 'Our team is available to clarify the details and help you choose the right service for your household.',
    ctaWhatsapp: isArabic ? 'تواصل عبر واتساب' : 'WhatsApp Us',
    ctaBooking: isArabic ? 'ابدأ طلبك' : 'Start a Request',
    showing: isArabic ? 'يعرض' : 'Showing'
  };

  return (
    <div className="overflow-hidden bg-[#fbf8f5] text-ink">
      <section className="border-b border-primary-900/5 bg-[linear-gradient(180deg,#f3f6fb_0%,#edf1f8_100%)]">
        <div className="container-x py-20 text-center sm:py-24 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/22 bg-white/72 px-4 py-2 text-xs font-bold text-primary-900 shadow-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            {copy.badge}
          </span>
          <h1 className={`${isArabic ? 'font-arabic' : 'font-heading'} mx-auto mt-7 max-w-4xl text-[2.35rem] font-bold leading-[1.04] tracking-[-0.025em] text-primary-900 sm:text-[3.1rem] lg:text-[3.55rem]`}>
            {copy.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ink/62 sm:text-base">
            {copy.subtitle}
          </p>
        </div>
      </section>

      <section className="container-x -mt-7 pb-24 sm:pb-28 lg:pb-36">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[18px] border border-primary-900/8 bg-white/82 p-2 shadow-[0_18px_55px_rgba(7,22,74,0.08)] backdrop-blur-xl">
            <div className="grid gap-2 md:grid-cols-5">
              {categories.map((category) => {
                const isActive = category.id === activeId;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveId(category.id)}
                    className={`flex items-center justify-center gap-2 rounded-[13px] px-4 py-3 text-sm font-bold transition ${isActive ? 'bg-primary-900 text-white shadow-[0_12px_26px_rgba(7,22,74,0.2)]' : 'text-ink/58 hover:bg-accent-50 hover:text-primary-900'}`}
                  >
                    <LineIcon name={category.icon} className={`h-4 w-4 ${isActive ? 'text-accent-200' : 'text-accent-700'}`} />
                    <span>{category.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent-700">{activeCategory.eyebrow}</p>
                <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-2xl font-bold tracking-[-0.015em] text-primary-900 sm:text-[2rem]`}>
                  {activeCategory.title}
                </h2>
              </div>
              <span className="w-fit rounded-full border border-accent-500/24 bg-white/74 px-4 py-2 text-xs font-bold text-primary-900 shadow-sm">
                {copy.showing} 4 / 20
              </span>
            </div>

            <div className="space-y-4">
              {activeCategory.items.map((item, index) => (
                <details
                  key={item.question}
                  open={index === 0}
                  className="group rounded-[16px] border border-primary-900/8 bg-white/86 shadow-[0_14px_42px_rgba(7,22,74,0.05)] backdrop-blur-xl transition hover:border-accent-500/28"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-start text-lg font-bold leading-snug text-primary-900 sm:px-8 sm:py-6 sm:text-xl">
                    <span>{item.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1eee7] text-accent-700 transition group-open:rotate-180">⌄</span>
                  </summary>
                  <p className="border-t border-primary-900/8 px-6 pb-6 pt-4 text-sm leading-7 text-ink/62 sm:px-8 sm:text-[0.95rem]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-28 max-w-5xl rounded-[18px] border border-accent-500/18 bg-[radial-gradient(circle_at_70%_15%,rgba(191,164,106,0.16),transparent_22rem),rgba(255,255,255,0.78)] px-6 py-14 text-center shadow-[0_18px_60px_rgba(7,22,74,0.05)] backdrop-blur-xl sm:mt-36 sm:px-10 sm:py-16">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold leading-tight tracking-[-0.02em] text-primary-900 sm:text-[2.45rem]`}>
            {copy.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink/60 sm:text-base">
            {copy.ctaText}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/971502036767" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-400 bg-primary-900 px-7 py-3 text-sm font-bold text-accent-100 shadow-[0_14px_30px_rgba(7,22,74,0.20)] transition hover:-translate-y-0.5 hover:bg-accent-500 hover:text-primary-900">
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
