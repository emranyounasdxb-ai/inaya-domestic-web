import Link from 'next/link';

type IconName = 'check' | 'x' | 'shield' | 'file' | 'refresh' | 'star' | 'arrow' | 'message';

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    check: <path {...common} d="m5 12 4 4L19 6" />,
    x: <><path {...common} d="M6 6l12 12" /><path {...common} d="M18 6 6 18" /></>,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    file: <><path {...common} d="M7 3h7l4 4v14H7V3Z" /><path {...common} d="M14 3v5h4" /><path {...common} d="M9.5 13h5M9.5 16h5" /></>,
    refresh: <><path {...common} d="M20 7v5h-5" /><path {...common} d="M4 17v-5h5" /><path {...common} d="M18.5 10A7 7 0 0 0 6.8 6.2L4 9" /><path {...common} d="M5.5 14a7 7 0 0 0 11.7 3.8L20 15" /></>,
    star: <path {...common} d="M12 3l1.5 5.1L19 10l-5.5 1.9L12 17l-1.5-5.1L5 10l5.5-1.9L12 3Z" />,
    arrow: <><path {...common} d="M5 12h14" /><path {...common} d="m13 6 6 6-6 6" /></>,
    message: <path {...common} d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v3.8a3.8 3.8 0 0 1-3.8 3.8H10l-4.5 3.2.9-4A3.8 3.8 0 0 1 5 10.6V6.8Z" />
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

function FeatureValue({ value }: { value: string | boolean }) {
  if (value === true) return <LineIcon name="check" className="mx-auto h-4 w-4 text-primary-900" />;
  if (value === false) return <LineIcon name="x" className="mx-auto h-4 w-4 text-ink/28" />;
  return <span>{value}</span>;
}

export default function PricingPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const copy = {
    hero: isArabic ? {
      title: 'الأسعار، بشكل واضح ومنظم.',
      subtitle: 'اختر باقة تناسب احتياج منزلك. يتم تأكيد السعر النهائي حسب نوع الخدمة، الإمارة، المدة، والتوفر.'
    } : {
      title: 'Exclusivity, transparently structured.',
      subtitle: 'Select a service package that aligns with your household requirements. Every option is explained clearly before booking confirmation.'
    },
    assurance: isArabic ? [
      ['ضمان الاستبدال', 'حماية أوضح للعميل خلال فترة الخدمة المتفق عليها، حسب نوع الباقة والتوفر.'],
      ['دعم التأشيرة والإجراءات', 'إرشاد واضح بخصوص المستندات والخطوات المطلوبة للعقود المناسبة.'],
      ['الالتزام بإجراءات الدولة', 'توضيح منظم للخطوات بما يتوافق مع متطلبات خدمات العمالة المنزلية في الإمارات.']
    ] : [
      ['Replacement Guarantee', 'Clearer client protection within the agreed service period, depending on package type and availability.'],
      ['Visa & Process Support', 'Structured guidance on documents and steps required for suitable long-term arrangements.'],
      ['UAE Compliance Guidance', 'Organized service guidance aligned with domestic worker service requirements in the UAE.']
    ],
    packages: isArabic ? [
      {
        eyebrow: 'أساسي',
        name: 'Essential',
        price: 'AED 1,500',
        period: 'يبدأ من',
        desc: 'خدمة مناسبة للاحتياجات المنزلية الأساسية والمتابعة الأولية.',
        cta: 'اختر الباقة الأساسية',
        features: ['الوصول إلى خيارات الخدمة المتاحة', 'تأكيد مبدئي حسب الإمارة', 'متابعة عبر واتساب', 'إرشاد قبل الحجز']
      },
      {
        eyebrow: 'مميز',
        name: 'Signature',
        price: 'AED 2,500',
        period: 'يبدأ من',
        desc: 'خدمة أشمل للعائلات التي تحتاج متابعة أوضح وخيارات أوسع.',
        cta: 'اختر الباقة المميزة',
        featured: true,
        features: ['أولوية في المتابعة', 'خيارات خادمة أو مربية أو رعاية منزلية', 'توضيح المستندات والخطوات', 'دعم استبدال حسب الاتفاق', 'مدير متابعة للحالة']
      },
      {
        eyebrow: 'عناية بلاك',
        name: 'Custom Quote',
        price: 'عرض خاص',
        period: 'حسب الطلب',
        desc: 'حل مخصص للعائلات أو الاحتياجات متعددة الخدمات.',
        cta: 'اطلب عرضاً خاصاً',
        badge: 'INAYA BLACK',
        features: ['متطلبات متعددة داخل المنزل', 'متابعة خاصة من الفريق', 'ترتيبات طويلة المدى', 'خيارات حسب الإمارة والتوفر', 'تدريب وتقييم حسب الحاجة']
      }
    ] : [
      {
        eyebrow: 'Essential',
        name: 'Essential',
        price: 'AED 1,500',
        period: 'starting from',
        desc: 'Core service support for standard household requirements.',
        cta: 'Select Essential',
        features: ['Access to available service options', 'Initial emirate availability check', 'WhatsApp follow-up', 'Guidance before booking']
      },
      {
        eyebrow: 'Signature',
        name: 'Signature',
        price: 'AED 2,500',
        period: 'starting from',
        desc: 'Comprehensive support for families needing clearer follow-up and wider service options.',
        cta: 'Select Signature',
        featured: true,
        features: ['Priority follow-up', 'Maid, nanny or caregiver options', 'Document and process guidance', 'Replacement support by agreement', 'Dedicated request follow-up']
      },
      {
        eyebrow: 'Bespoke',
        name: 'Custom Quote',
        price: 'Custom Quote',
        period: 'tailored',
        desc: 'Tailored arrangements for multi-service households or complex requirements.',
        cta: 'Inquire Now',
        badge: 'INAYA BLACK',
        features: ['Multiple household requirements', 'Private team follow-up', 'Long-term arrangements', 'Options by emirate and availability', 'Training and appraisal guidance']
      }
    ],
    comparisonTitle: isArabic ? 'مقارنة شاملة' : 'Comprehensive Comparison',
    tableHeaders: isArabic ? ['المزايا', 'أساسي', 'مميز', 'عناية بلاك'] : ['Features', 'Essential', 'Signature', 'INAYA Black'],
    rows: isArabic ? [
      ['تأكيد التوفر', 'مبدئي', 'أولوية', 'مخصص'],
      ['ضمان الاستبدال', 'حسب الاتفاق', 'موسع', 'مخصص'],
      ['دعم المستندات والإجراءات', false, true, true],
      ['صياغة متطلبات الخدمة', true, true, true],
      ['متابعة مخصصة', false, true, 'VIP']
    ] : [
      ['Availability Check', 'Standard', 'Priority', 'Bespoke'],
      ['Replacement Support', 'By agreement', 'Extended', 'Tailored'],
      ['Document & Process Guidance', false, true, true],
      ['Service Requirement Drafting', true, true, true],
      ['Dedicated Follow-up', false, true, 'VIP']
    ],
    faqTitle: isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
    faqSubtitle: isArabic ? 'توضيح سريع حول الأسعار والخدمات.' : 'Clarity regarding service fees and package structure.',
    faqs: isArabic ? [
      ['هل الأسعار نهائية؟', 'لا. الأسعار إرشادية ويتم تأكيد السعر النهائي بعد معرفة نوع الخدمة والإمارة والمدة والتوفر.'],
      ['هل تشمل الباقات الرسوم الحكومية؟', 'أي رسوم حكومية أو إجراءات رسمية يتم توضيحها بشكل منفصل حسب الحالة ونوع الخدمة.'],
      ['ما معنى ضمان الاستبدال؟', 'يعتمد على نوع الباقة والاتفاق وفترة الخدمة والتوفر، ويتم توضيحه قبل الحجز.']
    ] : [
      ['Are these final prices?', 'No. Prices are indicative and final pricing is confirmed after reviewing service type, emirate, duration and availability.'],
      ['Are government fees included?', 'Any government or official processing fees are clarified separately depending on the service and case.'],
      ['What does replacement support mean?', 'It depends on package type, agreement, service period and availability, and is explained before booking.']
    ],
    cta: isArabic ? {
      title: 'تحتاج ترتيباً مخصصاً؟',
      text: 'كل منزل له احتياج مختلف. أرسل لنا التفاصيل وسنوضح لك الخيار الأنسب.',
      button: 'تواصل مع الفريق'
    } : {
      title: 'Require a bespoke arrangement?',
      text: 'Every household is unique. If your requirements fall outside standard packages, our team can craft a tailored solution.',
      button: 'Consult Our Experts'
    },
    note: isArabic ? 'الأسعار إرشادية وتخضع للتأكيد النهائي حسب الخدمة والتوفر.' : 'Prices are indicative and subject to final confirmation based on service and availability.'
  };

  const assuranceIcons: IconName[] = ['refresh', 'file', 'shield'];

  return (
    <div className="overflow-hidden bg-[#fbfaf7] text-ink">
      <section className="container-x pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2.15rem] font-bold leading-[1.08] tracking-[-0.02em] text-primary-900 sm:text-[2.75rem] lg:text-[3.2rem]`}>
            {copy.hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink/62 sm:text-base">
            {copy.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="container-x pb-12 sm:pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {copy.assurance.map(([title, text], index) => (
            <div key={title} className="rounded-[14px] border border-primary-900/8 bg-[#f2eff1] p-7 shadow-[0_18px_50px_rgba(7,22,74,0.04)]">
              <div className="mb-7 flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary-900 shadow-sm">
                <LineIcon name={assuranceIcons[index]} className="h-4 w-4" />
              </div>
              <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} max-w-[13rem] text-2xl font-bold leading-[1.05] text-primary-900`}>
                {title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-ink/58">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-6xl items-end gap-6 lg:grid-cols-3">
          {copy.packages.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex min-h-[560px] flex-col rounded-[16px] border p-8 shadow-[0_24px_70px_rgba(7,22,74,0.07)] ${plan.featured ? 'bg-[#020202] text-white lg:min-h-[610px] lg:-translate-y-8' : 'bg-white text-primary-900'}`}
            >
              {plan.badge ? <span className="absolute right-7 top-7 rounded-full bg-accent-500 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary-900">{plan.badge}</span> : null}
              <p className={`text-[0.67rem] font-bold uppercase tracking-[0.22em] ${plan.featured ? 'text-white/55' : 'text-ink/45'}`}>{plan.eyebrow}</p>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold leading-none ${plan.featured ? 'text-white' : 'text-primary-900'}`}>{plan.price}</h2>
                  <p className={`mt-2 text-xs ${plan.featured ? 'text-white/62' : 'text-ink/55'}`}>{plan.period}</p>
                </div>
              </div>
              <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-5 text-xl font-bold ${plan.featured ? 'text-white' : 'text-primary-900'}`}>{plan.name}</h3>
              <p className={`mt-3 text-sm leading-6 ${plan.featured ? 'text-white/68' : 'text-ink/58'}`}>{plan.desc}</p>
              <div className={`my-7 h-px ${plan.featured ? 'bg-white/12' : 'bg-primary-900/8'}`} />
              <div className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={feature} className={`flex items-start gap-3 text-sm leading-6 ${plan.featured ? 'text-white/82' : 'text-ink/68'}`}>
                    <LineIcon name={plan.featured && index > 1 ? 'star' : 'check'} className={`mt-1 h-4 w-4 shrink-0 ${plan.featured && index > 1 ? 'text-accent-500' : plan.featured ? 'text-white' : 'text-primary-900'}`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href={`/${locale}/booking`}
                className={`mt-auto inline-flex w-full items-center justify-center rounded-full border px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${plan.featured ? 'border-white bg-white text-primary-900 hover:bg-accent-50' : 'border-primary-900/25 bg-white text-primary-900 hover:border-primary-900'}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-6 text-ink/45">{copy.note}</p>
      </section>

      <section className="container-x pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-3xl font-bold text-primary-900`}>{copy.comparisonTitle}</h2>
          <div className="mt-8 overflow-hidden rounded-[14px] border border-primary-900/8 bg-white shadow-[0_18px_60px_rgba(7,22,74,0.045)]">
            <div className="grid grid-cols-4 bg-[#f3f1f0] text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink/45">
              {copy.tableHeaders.map((header, index) => (
                <div key={header} className={`px-4 py-5 ${index === 2 ? 'bg-primary-900/5' : ''}`}>{header}</div>
              ))}
            </div>
            {copy.rows.map((row, index) => (
              <div key={String(row[0])} className={`grid grid-cols-4 border-t border-primary-900/6 text-sm ${index % 2 === 0 ? 'bg-white' : 'bg-[#fdfcf9]'}`}>
                <div className="px-4 py-5 text-start font-semibold text-primary-900">{row[0]}</div>
                <div className="px-4 py-5 text-center text-ink/62"><FeatureValue value={row[1]} /></div>
                <div className="bg-primary-900/[0.035] px-4 py-5 text-center font-semibold text-primary-900"><FeatureValue value={row[2]} /></div>
                <div className="px-4 py-5 text-center text-ink/62"><FeatureValue value={row[3]} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-3xl font-bold text-primary-900`}>{copy.faqTitle}</h2>
          <p className="mt-3 text-sm text-ink/55">{copy.faqSubtitle}</p>
          <div className="mt-8 space-y-3 text-start">
            {copy.faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-[12px] border border-primary-900/8 bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-primary-900">
                  <span>{question}</span>
                  <span className="text-ink/50 transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="border-t border-primary-900/8 px-5 pb-5 pt-4 text-sm leading-7 text-ink/62">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl rounded-[18px] bg-[#f2eff1] px-6 py-14 text-center shadow-[0_18px_60px_rgba(7,22,74,0.04)] sm:px-10">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-3xl font-bold text-primary-900`}>{copy.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ink/58">{copy.cta.text}</p>
          <Link href={`/${locale}/contact`} className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-primary-900">
            {copy.cta.button}
            <LineIcon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
