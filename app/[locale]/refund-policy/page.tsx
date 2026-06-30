export default function RefundPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const cards = isArabic
    ? ['مراجعة الحالة حسب اتفاق الخدمة', 'توضيح الخيارات المتاحة قبل القرار', 'تسجيل الملاحظات وتفاصيل الحجز', 'المتابعة مع الأسرة بشكل واضح']
    : ['Review the case based on the service agreement', 'Explain available options before a decision', 'Record notes and booking details', 'Follow up with the family clearly'];

  return (
    <main className="bg-[#fbfaf7] px-6 py-16 text-primary-900 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{isArabic ? 'سياسة الدعم' : 'Customer Support Policy'}</p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-[-0.05em] sm:text-5xl">{isArabic ? 'سياسة مراجعة طلبات العملاء' : 'Customer Request Review Policy'}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-primary-900/72">{isArabic ? 'توضح هذه الصفحة كيفية مراجعة طلبات العملاء المتعلقة بالخدمة حسب الاتفاق والتوقيت والتوفر ومرحلة الطلب.' : 'This page explains how customer service requests are reviewed based on the agreement, timing, availability and request stage.'}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cards.map((card) => <div key={card} className="rounded-[24px] bg-white p-6 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">✓ {card}</div>)}
        </div>
      </div>
    </main>
  );
}
