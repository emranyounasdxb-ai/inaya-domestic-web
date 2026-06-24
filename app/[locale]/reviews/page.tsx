export default function ReviewsPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl';
  const copy = {
    badge: isArabic ? 'تجارب العملاء' : 'Client feedback',
    title: isArabic ? 'ثقة العائلات تبدأ من تجربة واضحة' : 'Trusted by families through clear service',
    subtitle: isArabic ? 'آراء مختصرة تعكس أهمية التواصل الواضح والمتابعة قبل وبعد الحجز.' : 'Short feedback that reflects the value of clear communication and follow-up before and after booking.',
    reviews: isArabic ? [
      ['فاطمة', 'تواصل واضح وخدمة منظمة. الفريق شرح لي الخيارات قبل الحجز وكانت المتابعة ممتازة.'],
      ['أحمد', 'الرد سريع عبر واتساب، والتفاصيل كانت واضحة من البداية. تجربة موثوقة.'],
      ['سارة', 'أعجبني أسلوب المتابعة وتأكيد كل خطوة قبل الإجراء.']
    ] : [
      ['Fatima', 'Clear communication and organized service. The team explained the options before booking and follow-up was excellent.'],
      ['Ahmed', 'Fast response on WhatsApp, and the details were clear from the beginning. A trusted experience.'],
      ['Sara', 'I liked the follow-up style and the way each step was confirmed before proceeding.']
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
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {copy.reviews.map(([name, text]) => (
            <div key={name} className="glass-panel rounded-[24px] p-6">
              <div className="mb-5 flex gap-1 text-accent-600">★★★★★</div>
              <p className="leading-7 text-ink/72">“{text}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-900 text-sm font-bold text-white">{name[0]}</div>
                <div className="font-bold text-primary-900">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
