import { useTranslations } from 'next-intl';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site-config';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('contact');
  const isArabic = locale === 'ar';
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, '')}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}`;
  const address = isArabic
    ? 'جراند مول - الطابق الأرضي - شارع الشيخ خليفة بن زايد - الراشدية 3 - عجمان'
    : siteConfig.address;
  const serviceArea = isArabic ? 'نخدم العملاء داخل إمارة عجمان فقط.' : 'We currently serve customers in Ajman only.';
  const mapTitle = isArabic ? 'موقع عناية للخدمات المنزلية في عجمان' : 'INAYA Domestic Workers Ajman location map';
  const whatsappLabel = isArabic ? 'واتساب' : 'WhatsApp';
  const callLabel = isArabic ? 'اتصال' : 'Call';
  const emailLabel = isArabic ? 'البريد الإلكتروني' : 'Email';
  const formTitle = isArabic ? 'أرسل لنا رسالة' : 'Send us a message';
  const mapHeading = isArabic ? 'موقع المكتب' : 'Office Location';
  const phoneDisplay = isArabic ? (
    <span className="inline-flex flex-row items-center gap-1" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
      <span>+</span>
      <span>٩٧١٦</span>
      <span>٧٤٠</span>
      <span>٠١٢٨</span>
    </span>
  ) : siteConfig.phone;
  const whatsappDisplay = isArabic ? (
    <span className="inline-flex flex-row items-center gap-1" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
      <span>+</span>
      <span>٩٧١</span>
      <span>٥٠</span>
      <span>٢٠٣</span>
      <span>٦٧٦٧</span>
    </span>
  ) : '+971 50 203 6767';

  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
            {serviceArea}
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">{t('title')}</h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">{t('subtitle')}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <a href={phoneHref} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">{callLabel}</span>
                <span className="mt-2 block text-sm font-semibold text-gray-950" dir="ltr">{phoneDisplay}</span>
              </a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600">{whatsappLabel}</span>
                <span className="mt-2 block text-sm font-semibold text-gray-950" dir="ltr">{whatsappDisplay}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">{emailLabel}</span>
                <span className="mt-2 block break-all text-sm font-semibold text-gray-950" dir="ltr">{siteConfig.email}</span>
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5 sm:p-6">
                <h2 className="text-xl font-bold text-gray-950">{mapHeading}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">{address}</p>
              </div>
              <div className="aspect-[4/3] w-full sm:aspect-[16/10]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.365890608938!2d55.43878240000001!3d25.3925602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5942014634c7%3A0xf39f2fefc97933f3!2sINAYA%20Domestic%20Workers%20Ajman!5e0!3m2!1sen!2sae!4v1782223058219!5m2!1sen!2sae"
                  title={mapTitle}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="mb-5 text-xl font-bold text-gray-950">{formTitle}</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
