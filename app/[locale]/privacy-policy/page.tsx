export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl'
    : 'font-heading text-4xl font-bold leading-[1.08] text-primary-900 sm:text-5xl';
  const copy = isArabic ? {
    title: 'سياسة الخصوصية',
    subtitle: 'نحترم خصوصيتك ونستخدم بياناتك فقط للتواصل معك بخصوص طلب الخدمة.',
    updated: 'آخر تحديث: 2026',
    sections: [
      ['المعلومات التي نجمعها', 'قد نجمع الاسم، رقم الهاتف، البريد الإلكتروني، نوع الخدمة المطلوبة، وأي تفاصيل ترسلها من خلال نماذج الموقع أو واتساب.'],
      ['كيفية استخدام المعلومات', 'نستخدم المعلومات للتواصل معك، تأكيد طلب الخدمة، شرح التوفر، وترتيب الخطوات المناسبة.'],
      ['مشاركة البيانات', 'لا نبيع بياناتك. قد نشارك المعلومات فقط عند الحاجة لتقديم الخدمة أو عند وجود متطلبات قانونية.'],
      ['التواصل', 'لأي سؤال عن الخصوصية، يمكنك التواصل معنا عبر info@inayadomestic.ae.']
    ]
  } : {
    title: 'Privacy Policy',
    subtitle: 'We respect your privacy and use your information only to contact you about your service request.',
    updated: 'Last updated: 2026',
    sections: [
      ['Information we collect', 'We may collect your name, phone number, email address, required service type and any details you submit through website forms or WhatsApp.'],
      ['How we use information', 'We use the information to contact you, confirm your service request, explain availability and arrange the right next steps.'],
      ['Data sharing', 'We do not sell your data. We may share information only when needed to deliver the service or where legally required.'],
      ['Contact', 'For privacy questions, contact us at info@inayadomestic.ae.']
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
