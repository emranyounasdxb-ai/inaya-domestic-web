export default function RefundPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl'
    : 'font-heading text-4xl font-bold leading-[1.08] text-primary-900 sm:text-5xl';
  const copy = isArabic ? {
    title: 'سياسة الاسترداد والاستبدال',
    subtitle: 'نوضح للعميل الخيارات المتاحة بخصوص الاستبدال أو الاسترداد حسب اتفاق الخدمة.',
    updated: 'آخر تحديث: 2026',
    sections: [
      ['طلبات الاستبدال', 'يمكن مناقشة طلبات الاستبدال خلال الفترة المتفق عليها، وتخضع للتوفر وشروط اتفاق الخدمة.'],
      ['الاسترداد', 'أي استرداد، عند انطباقه، يتم مراجعته حسب الاتفاق والخدمة المقدمة والمرحلة التي وصل إليها الطلب.'],
      ['طريقة الطلب', 'يرجى التواصل مع فريق الدعم عبر الهاتف أو واتساب أو البريد الإلكتروني وشرح سبب الطلب بوضوح.'],
      ['ملاحظة', 'تختلف الشروط حسب نوع الخدمة، لذلك يتم توضيح التفاصيل قبل تأكيد الحجز.']
    ]
  } : {
    title: 'Refund & Replacement Policy',
    subtitle: 'We explain available replacement or refund options according to the service agreement.',
    updated: 'Last updated: 2026',
    sections: [
      ['Replacement requests', 'Replacement requests can be discussed within the agreed period and are subject to availability and service agreement terms.'],
      ['Refunds', 'Any refund, where applicable, is reviewed according to the agreement, service provided and request stage.'],
      ['How to request', 'Contact our support team by phone, WhatsApp or email and clearly explain the reason for your request.'],
      ['Note', 'Terms vary by service type, so details are clarified before booking confirmation.']
    ]
  };

  return (
    <div className="bg-ivory text-ink">
      <section className="container-x py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-700">INAYA</p>
            <h1 className={`mt-4 ${headingClass}`}>{copy.title}</h1>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/70">{copy.subtitle}</p>
            <p className="mt-3 text-sm text-ink/50">{copy.updated}</p>
          </div>
          <div className="glass-panel rounded-[26px] p-6 sm:p-8">
            <div className="space-y-7">
              {copy.sections.map(([title, text]) => (
                <section key={title}>
                  <h2 className={`${isArabic ? 'font-arabic text-2xl leading-snug' : 'font-heading text-2xl'} font-bold text-primary-900`}>{title}</h2>
                  <p className="mt-2 leading-8 text-ink/72">{text}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
