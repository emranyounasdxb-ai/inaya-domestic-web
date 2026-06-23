import { useTranslations } from 'next-intl';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site-config';

const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.365890608938!2d55.43878240000001!3d25.3925602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5942014634c7%3A0xf39f2fefc97933f3!2sINAYA%20Domestic%20Workers%20Ajman!5e0!3m2!1sen!2sae!4v1782223058219!5m2!1sen!2sae';
const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=INAYA%20Domestic%20Workers%20Ajman';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('contact');
  const isArabic = locale === 'ar';
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, '')}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}`;
  const mailHref = `mailto:${siteConfig.email}`;
  const logoSrc = isArabic ? '/brand/inaya-arabic-logo.png' : '/brand/inaya-domestic-workers-logo.png';
  const address = isArabic
    ? 'جراند مول - الطابق الأرضي - شارع الشيخ خليفة بن زايد - الراشدية 3 - عجمان'
    : siteConfig.address;
  const phoneDisplay = isArabic ? (
    <span className="inline-flex flex-row items-center gap-1" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
      <span>+</span><span>٩٧١٦</span><span>٧٤٠</span><span>٠١٢٨</span>
    </span>
  ) : siteConfig.phone;
  const whatsappDisplay = isArabic ? (
    <span className="inline-flex flex-row items-center gap-1" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
      <span>+</span><span>٩٧١</span><span>٥٠</span><span>٢٠٣</span><span>٦٧٦٧</span>
    </span>
  ) : '+971 50 203 6767';

  const copy = {
    badge: isArabic ? 'نخدم إمارة عجمان فقط' : 'Ajman Only Service Area',
    heroTitle: isArabic ? 'تواصل مع عناية للخدمات المنزلية' : 'Get in Touch with INAYA Domestic Workers',
    heroText: isArabic
      ? 'تحدث مع فريقنا لاختيار خدمة العمالة المنزلية المناسبة لعائلتك داخل عجمان.'
      : 'Speak with our team for trusted domestic worker services in Ajman.',
    whatsapp: isArabic ? 'راسلنا عبر واتساب' : 'WhatsApp Us',
    call: isArabic ? 'اتصل الآن' : 'Call Now',
    callback: isArabic ? 'اطلب اتصالاً' : 'Request Callback',
    quickTitle: isArabic ? 'طرق التواصل السريعة' : 'Quick Contact Options',
    formTitle: isArabic ? 'أرسل لنا متطلباتك' : 'Send us a Message',
    formText: isArabic
      ? 'شاركنا تفاصيل الخدمة المطلوبة وسيتواصل معك فريقنا لتأكيد الخطوات التالية.'
      : 'Share your requirement and our team will contact you to confirm the next steps.',
    visualTitle: isArabic ? 'فريقنا جاهز لمساعدتك' : 'Our team is ready to help',
    visualText: isArabic
      ? 'نساعدك في اختيار الخدمة المناسبة، توضيح الخيارات، وترتيب التواصل بطريقة واضحة وسهلة.'
      : 'We help you choose the right service, understand the options, and arrange the next step clearly.',
    coverageTitle: isArabic ? 'خدمة مخصصة لعائلات عجمان' : 'Serving Ajman Families Only',
    coverageText: isArabic
      ? 'نركز على إمارة عجمان حتى نقدم متابعة أسرع وخدمة أوضح للعائلات داخل المنطقة.'
      : 'We focus on Ajman so families receive clearer support, faster follow-up, and service that understands the local area.',
    trustTitle: isArabic ? 'لماذا التواصل معنا واضح وسهل؟' : 'Why contacting us is simple',
    ctaTitle: isArabic ? 'هل تحتاج إلى مساعدة منزلية بشكل عاجل؟' : 'Need urgent domestic help?',
    ctaText: isArabic
      ? 'راسل فريقنا عبر واتساب لمعرفة التوفر والخطوات التالية.'
      : 'Chat with our team on WhatsApp for availability and next steps.',
    faqTitle: isArabic ? 'أسئلة سريعة قبل التواصل' : 'Quick questions before you contact us',
    locationTitle: isArabic ? 'موقع مكتبنا' : 'Visit Our Office',
    hoursTitle: isArabic ? 'ساعات العمل' : 'Working Hours',
    hoursText: isArabic ? 'يرجى التواصل معنا لتأكيد مواعيد اليوم.' : "Contact us to confirm today's timings.",
    directions: isArabic ? 'افتح الاتجاهات' : 'Get Directions',
    mapTitle: isArabic ? 'موقع عناية للخدمات المنزلية في عجمان' : 'INAYA Domestic Workers Ajman location map'
  };

  const quickContacts = [
    {
      title: isArabic ? 'الهاتف' : 'Phone',
      value: phoneDisplay,
      note: isArabic ? 'للتواصل المباشر مع الفريق' : 'Speak directly with our team',
      href: phoneHref,
      icon: '☎',
      color: 'bg-primary-700 text-white'
    },
    {
      title: isArabic ? 'واتساب' : 'WhatsApp',
      value: whatsappDisplay,
      note: isArabic ? 'للمتابعة السريعة وتأكيد المتطلبات' : 'Quick chat for availability and next steps',
      href: whatsappHref,
      icon: '💬',
      color: 'bg-green-600 text-white',
      external: true
    },
    {
      title: isArabic ? 'البريد الإلكتروني' : 'Email',
      value: siteConfig.email,
      note: isArabic ? 'لإرسال التفاصيل والمستندات' : 'Send details and requirements',
      href: mailHref,
      icon: '✉',
      color: 'bg-blue-600 text-white'
    },
    {
      title: isArabic ? 'المكتب' : 'Office',
      value: isArabic ? 'جراند مول، عجمان' : 'Grand Mall, Ajman',
      note: isArabic ? 'زيارة المكتب بعد تأكيد الموعد' : 'Visit after confirming the timing',
      href: directionsUrl,
      icon: '⌖',
      color: 'bg-amber-500 text-white',
      external: true
    }
  ];

  const trustItems = [
    {
      title: isArabic ? 'إرشاد واضح' : 'Clear Guidance',
      text: isArabic ? 'نشرح لك الخيارات والخطوات قبل بدء الطلب.' : 'We explain service options and next steps before you proceed.',
      icon: '✓'
    },
    {
      title: isArabic ? 'عمالة موثوقة' : 'Verified Workers',
      text: isArabic ? 'نعتمد على عملية تحقق ومراجعة مناسبة للمرشحين.' : 'Candidates go through a careful review and verification process.',
      icon: '◈'
    },
    {
      title: isArabic ? 'متابعة ودية' : 'Friendly Follow-up',
      text: isArabic ? 'يتابع فريقنا معك قبل وبعد تأكيد الخدمة.' : 'Our team supports you before and after confirming the service.',
      icon: '↗'
    },
    {
      title: isArabic ? 'تركيز على عجمان' : 'Ajman Focused',
      text: isArabic ? 'نخدم داخل عجمان فقط لضمان وضوح أفضل في المتابعة.' : 'We serve Ajman only for better local coordination and support.',
      icon: '⌖'
    }
  ];

  const faqs = [
    {
      question: isArabic ? 'هل تقدمون الخدمة خارج عجمان؟' : 'Do you serve outside Ajman?',
      answer: isArabic ? 'حالياً نركز على خدمة العملاء داخل إمارة عجمان فقط.' : 'At the moment, our service area is focused on Ajman only.'
    },
    {
      question: isArabic ? 'ما أسرع طريقة للتواصل؟' : 'What is the fastest way to contact you?',
      answer: isArabic ? 'واتساب هو الأسرع لإرسال المتطلبات والحصول على متابعة من الفريق.' : 'WhatsApp is the fastest option for sharing your requirement and getting follow-up.'
    },
    {
      question: isArabic ? 'هل يمكن زيارة المكتب؟' : 'Can I visit the office?',
      answer: isArabic ? 'نعم، يمكن زيارة المكتب في جراند مول بعجمان، ويفضل التواصل معنا قبل الزيارة لتأكيد الموعد.' : 'Yes, you can visit our office at Grand Mall in Ajman. Please contact us first to confirm timing.'
    }
  ];

  return (
    <div className="bg-[#f6fbf5] text-gray-950">
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(4,120,87,0.18),transparent_36%),linear-gradient(135deg,#f6fbf5_0%,#ffffff_45%,#edf7f0_100%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-primary-900/5" />
        <div className="container-x relative py-14 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-primary-700" />
              {copy.badge}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-6xl">{copy.heroTitle}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">{copy.heroText}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-3 font-semibold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-green-700">💬 {copy.whatsapp}</a>
              <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-800 px-7 py-3 font-semibold text-white shadow-lg shadow-primary-900/15 transition hover:-translate-y-0.5 hover:bg-primary-900">☎ {copy.call}</a>
              <a href="#contact-form" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/75 px-7 py-3 font-semibold text-primary-900 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white">↗ {copy.callback}</a>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-primary-900/10 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {quickContacts.map((item) => (
              <a key={item.title} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} className="group rounded-2xl border border-gray-100 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl ${item.color}`}>{item.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-gray-500">{item.title}</span>
                    <span className="mt-1 block break-words text-sm font-bold text-gray-950" dir={item.title === 'Email' || item.title === 'البريد الإلكتروني' ? 'ltr' : undefined}>{item.value}</span>
                    <span className="mt-1 block text-xs leading-5 text-gray-500">{item.note}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-12 sm:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-sm">
            <div className="flex min-h-[440px] flex-col justify-between bg-gradient-to-br from-primary-900 via-primary-800 to-emerald-700 p-8 text-white">
              <div>
                <div className="inline-flex rounded-2xl bg-white p-3 shadow-lg">
                  <img src={logoSrc} alt="INAYA Domestic Workers" className="h-14 w-auto max-w-[220px] object-contain" />
                </div>
                <h2 className="mt-8 text-3xl font-bold">{copy.visualTitle}</h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/80">{copy.visualText}</p>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                  <div className="text-2xl">⌖</div>
                  <p className="mt-2 text-sm font-semibold">{copy.badge}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                  <div className="text-2xl">💬</div>
                  <p className="mt-2 text-sm font-semibold">{copy.whatsapp}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-gray-100 bg-white p-5 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-gray-950">{copy.formTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{copy.formText}</p>
            <div className="mt-6">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-x grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm">
            <div className="grid gap-6 p-6 sm:grid-cols-[0.9fr_1.1fr] sm:p-8">
              <div>
                <h2 className="text-2xl font-bold text-primary-900">{copy.coverageTitle}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">{copy.coverageText}</p>
                <div className="mt-6 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-800">{copy.badge}</div>
              </div>
              <div className="relative min-h-[210px] overflow-hidden rounded-3xl bg-[#eaf4ed]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,93,66,0.14)_1px,transparent_1px),linear-gradient(45deg,rgba(0,93,66,0.1)_1px,transparent_1px)] bg-[length:32px_32px]" />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-800 text-3xl text-white shadow-xl">⌖</span>
                  <span className="mt-3 rounded-full bg-white px-5 py-2 text-sm font-bold text-primary-900 shadow-sm">Ajman</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-gray-950">{copy.trustTitle}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-bold text-primary-800 shadow-sm">{item.icon}</div>
                  <h3 className="mt-3 font-semibold text-gray-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-x grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[28px] bg-primary-900 p-7 text-white shadow-xl shadow-primary-900/15 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-4xl">💬</div>
                <h2 className="mt-3 text-2xl font-bold">{copy.ctaTitle}</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">{copy.ctaText}</p>
              </div>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">{copy.whatsapp}</a>
            </div>
          </div>

          <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-gray-950">{copy.faqTitle}</h2>
            <div className="mt-4 divide-y divide-gray-100">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-gray-950">
                    {faq.question}
                    <span className="transition group-open:rotate-180">⌄</span>
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 pt-8 sm:pb-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">{copy.locationTitle}</h2>
                <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600">
                  <div className="flex gap-4">
                    <span className="mt-1 text-primary-800">⌖</span>
                    <div>
                      <div className="font-semibold text-gray-950">{isArabic ? 'العنوان' : 'Address'}</div>
                      <p>{address}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="mt-1 text-primary-800">◷</span>
                    <div>
                      <div className="font-semibold text-gray-950">{copy.hoursTitle}</div>
                      <p>{copy.hoursText}</p>
                    </div>
                  </div>
                </div>
                <a href={directionsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-primary-800 px-5 py-3 font-semibold text-white transition hover:bg-primary-900 sm:w-auto">
                  {copy.directions}
                </a>
              </div>
              <div className="min-h-[360px] border-t border-gray-100 lg:border-l lg:border-t-0">
                <iframe
                  src={mapEmbedUrl}
                  title={copy.mapTitle}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[360px] w-full lg:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
