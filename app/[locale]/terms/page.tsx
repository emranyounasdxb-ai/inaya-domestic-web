export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl'
    : 'font-heading text-4xl font-bold leading-[1.08] text-primary-900 sm:text-5xl';
  const copy = isArabic ? {
    title: 'الشروط والأحكام',
    subtitle: 'توضح هذه الشروط طريقة استخدام الموقع وطلب خدمات عناية للعمالة المنزلية.',
    updated: 'آخر تحديث: 2026',
    sections: [
      ['دقة المعلومات', 'عند إرسال طلب خدمة، يجب تقديم معلومات صحيحة عن نوع الخدمة، المنطقة، وبيانات التواصل.'],
      ['تأكيد الخدمة', 'الخدمات والأسعار والمواعيد يتم تأكيدها من فريق عناية قبل الحجز النهائي.'],
      ['الاستخدام المناسب', 'يجب استخدام الموقع وخدمات التواصل بطريقة نظامية ومحترمة، ويحق لعناية رفض الطلبات غير المناسبة.'],
      ['التغييرات', 'قد يتم تحديث هذه الشروط عند الحاجة، ويعتبر استمرار استخدام الموقع موافقة على الشروط المحدثة.']
    ]
  } : {
    title: 'Terms & Conditions',
    subtitle: 'These terms explain how to use the website and request INAYA Domestic Workers services.',
    updated: 'Last updated: 2026',
    sections: [
      ['Accurate information', 'When submitting a service request, you should provide accurate details about service type, area and contact information.'],
      ['Service confirmation', 'Services, prices and timings are confirmed by the INAYA team before final booking.'],
      ['Proper use', 'The website and contact channels must be used lawfully and respectfully. INAYA may refuse unsuitable requests.'],
      ['Changes', 'These terms may be updated when needed. Continued website use means acceptance of the updated terms.']
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
