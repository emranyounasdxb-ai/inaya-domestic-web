export default function Page({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  return (
    <main className="bg-[#fbfaf7] px-6 py-16 text-primary-900 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{isArabic ? 'سياسة الخدمة' : 'Service Policy'}</p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-[-0.05em] sm:text-5xl">{isArabic ? 'سياسة خدمات عناية للعمالة المنزلية' : 'INAYA Domestic Worker Service Policy'}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-primary-900/72">{isArabic ? 'تشرح هذه الصفحة طريقة استقبال طلبات الخدمة ومراجعة المتطلبات وتأكيد التوفر والمتابعة قبل الحجز.' : 'This page explains how INAYA receives service requests, reviews requirements, confirms availability and supports families before booking.'}</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {(isArabic ? ['مراجعة احتياج المنزل والأسرة قبل الترشيح', 'تأكيد التوفر حسب الإمارة ونوع الخدمة', 'توضيح السعر والنطاق قبل الحجز', 'متابعة الطلبات والملاحظات بوضوح'] : ['Review family and home requirements before recommendation', 'Confirm availability by emirate and service type', 'Clarify price and scope before booking', 'Follow up on requests and concerns clearly']).map((item) => <div key={item} className="rounded-2xl bg-white p-5 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">✓ {item}</div>)}
        </div>
      </div>
    </main>
  );
}
