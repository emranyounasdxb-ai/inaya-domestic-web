export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl';
  const copy = {
    badge: isArabic ? 'عن عناية للعمالة المنزلية' : 'About INAYA Domestic Workers',
    title: isArabic ? 'دعم منزلي موثوق للعائلات في الإمارات' : 'Trusted home support for families across the UAE',
    subtitle: isArabic ? 'عناية للعمالة المنزلية تساعد العائلات على اختيار خدمات منزلية واضحة ومنظمة مع متابعة محترفة.' : 'INAYA Domestic Workers helps families choose clear, organized domestic worker services with professional follow-up.',
    p1: isArabic ? 'نركز على تجربة بسيطة وموثوقة تبدأ بفهم احتياج الأسرة وتنتهي بخطوات واضحة قبل الحجز.' : 'We focus on a simple, trusted experience that starts by understanding each household requirement and ends with clear steps before booking.',
    p2: isArabic ? 'فريقنا يتابع مع العملاء عبر الهاتف وواتساب والبريد الإلكتروني لتأكيد الخدمة، التوفر، والمعلومات المهمة.' : 'Our team follows up with customers by phone, WhatsApp and email to confirm service type, availability and important details.',
    cards: isArabic ? [
      ['رسالتنا', 'تقديم خدمات عمالة منزلية واضحة ومنظمة للعائلات في الإمارات.'],
      ['رؤيتنا', 'أن تكون عناية اسماً موثوقاً عند البحث عن الدعم المنزلي في الدولة.'],
      ['أسلوبنا', 'تواصل واضح، متابعة ودية، وتأكيد التفاصيل قبل أي خطوة.']
    ] : [
      ['Our Mission', 'To provide clear and organized domestic worker services for UAE families.'],
      ['Our Vision', 'To become a trusted name for families looking for home support across the UAE.'],
      ['Our Approach', 'Clear communication, friendly follow-up and confirmed details before each step.']
    ]
  };

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_10%_48%,rgba(7,22,74,0.10),transparent_26rem)]" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500" />
              {copy.badge}
            </span>
            <h1 className={`mx-auto mt-6 max-w-4xl ${headingClass}`}>{copy.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">{copy.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="glass-panel rounded-[28px] p-7 sm:p-9">
            <h2 className={`${isArabic ? 'font-arabic text-3xl leading-snug' : 'font-heading text-4xl'} font-bold text-primary-900`}>INAYA</h2>
            <div className="mt-5 space-y-4 leading-8 text-ink/72">
              <p>{copy.p1}</p>
              <p>{copy.p2}</p>
            </div>
          </div>
          <div className="grid gap-5">
            {copy.cards.map(([title, text]) => (
              <div key={title} className="glass-panel rounded-[22px] p-6">
                <h3 className={`${isArabic ? 'font-arabic text-2xl leading-snug' : 'font-heading text-2xl'} font-bold text-primary-900`}>{title}</h3>
                <p className="mt-2 leading-7 text-ink/68">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
