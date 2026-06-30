export default function Page({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const points = isArabic
    ? ['تقديم الملاحظة مع تفاصيل الحجز ونوع الخدمة', 'مراجعة الحالة وشروط الاتفاق والتوقيت', 'توضيح الخيارات المتاحة حسب التوفر', 'المتابعة لتحسين الخطوة التالية']
    : ['Submit the concern with booking and service details', 'Review the case, agreement terms and timing', 'Explain available options based on availability', 'Follow up to improve the next step'];
  return (
    <main className="bg-[#fbfaf7] px-6 py-16 text-primary-900 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{isArabic ? 'إجراءات الدعم' : 'Support Process'}</p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-[-0.05em] sm:text-5xl">{isArabic ? 'إجراءات الدعم لخدمات عناية' : 'Support Process for INAYA Services'}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-primary-900/72">{isArabic ? 'توضح هذه الصفحة كيف تتم مراجعة الملاحظات وطلبات الدعم حسب الخدمة والتوفر والاتفاق المؤكد.' : 'This page explains how concerns and support requests are reviewed based on service type, availability and confirmed agreement.'}</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {points.map((item) => <div key={item} className="rounded-2xl bg-white p-5 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">✓ {item}</div>)}
        </div>
      </div>
    </main>
  );
}
