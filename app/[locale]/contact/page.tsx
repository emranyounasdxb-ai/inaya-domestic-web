import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site-config';

const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.365890608938!2d55.43878240000001!3d25.3925602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5942014634c7%3A0xf39f2fefc97933f3!2sINAYA%20Domestic%20Workers%20Ajman!5e0!3m2!1sen!2sae!4v1782223058219!5m2!1sen!2sae';
const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=INAYA%20Domestic%20Workers%20Ajman';
const heroImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrLe1JhUsF_6aqI_XDnO3NpqF6EUzd8YI5ozMXmag_K2ggl8f1aJuw_0K4GM4SBB2dAgXUY2aZkXWntC5ePhWfOp9GfRRppXAOuEsDA7R9voLr7Uq1Kv2RMOM6xb5W_ecGUwAeeCgl_wL-yL2JBATSBg7OAbFXlRHF22Ilrl_u947fydR-20LjP8x5h_70nfrqFx449Q8_LMI6Qpre0nNnSY0afHnlCHnT6R5WVfklWN_V6S3AnRyj6sxrCwLI-H7MNevsDTfO6w';
const supportImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEUYoB1lhiKLUg4wfG1egF85IO5ShLHQmMkXTlOnjsGgGOqWDUkl5CZn6A83slXmxrZTsJE-Kszz1LosFyyxT2xp0u_a7teeEFevdLKrcCB2B7RNaLN0n7VuN8pa8NUocOv-E8wx51lrhhDz3TXYJW3L1xX9-FwNaE35OOK0e98IF7zCVDui56PZHvZNdMT971TnIqsfVkaEa2vsZoVu63AEyYUviL-W0LbYicB4IRRU0-vxMoXURrAPEswdq6SHCBMsp5_sjhlg';

function ArabicNumber({ type }: { type: 'phone' | 'whatsapp' }) {
  if (type === 'phone') {
    return (
      <span className="inline-flex flex-row items-center gap-1" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
        <span>+</span><span>٩٧١٦</span><span>٧٤٠</span><span>٠١٢٨</span>
      </span>
    );
  }

  return (
    <span className="inline-flex flex-row items-center gap-1" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
      <span>+</span><span>٩٧١</span><span>٥٠</span><span>٢٠٣</span><span>٦٧٦٧</span>
    </span>
  );
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, '')}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}`;
  const address = isArabic
    ? 'جراند مول - الطابق الأرضي - شارع الشيخ خليفة بن زايد - الراشدية 3 - عجمان'
    : siteConfig.address;
  const phoneDisplay = isArabic ? <ArabicNumber type="phone" /> : siteConfig.phone;
  const whatsappDisplay = isArabic ? <ArabicNumber type="whatsapp" /> : '+971 50 203 6767';

  const copy = {
    heroTitle: isArabic ? 'تواصل مع عناية للخدمات المنزلية' : 'Get in Touch with INAYA Domestic Workers',
    heroText: isArabic
      ? 'تحدث مع فريقنا لمعرفة خدمات العمالة المنزلية المتاحة داخل عجمان.'
      : 'Speak with our team for trusted domestic worker services in Ajman.',
    whatsapp: isArabic ? 'واتساب' : 'WhatsApp Us',
    call: isArabic ? 'اتصل الآن' : 'Call Now',
    callback: isArabic ? 'اطلب اتصالاً' : 'Request Callback',
    quick: {
      phone: isArabic ? 'الهاتف' : 'Phone',
      phoneNote: isArabic ? 'للتواصل المباشر' : 'Speak with our team',
      whatsapp: isArabic ? 'واتساب' : 'WhatsApp',
      whatsappNote: isArabic ? 'متابعة سريعة' : 'Quick response',
      email: isArabic ? 'البريد الإلكتروني' : 'Email',
      emailNote: isArabic ? 'أرسل متطلباتك' : 'Send requirements',
      office: isArabic ? 'المكتب' : 'Office',
      officeNote: isArabic ? 'جراند مول، عجمان' : 'Grand Mall, Ajman'
    },
    formTitle: isArabic ? 'أرسل لنا رسالة' : 'Send us a Message',
    formText: isArabic
      ? 'املأ النموذج وسيتواصل معك فريقنا لتأكيد التفاصيل والخطوات التالية.'
      : 'Fill out the form below and our team will contact you with the next steps.',
    coverageTitle: isArabic ? 'نخدم عائلات عجمان فقط' : 'Serving Ajman Families Only',
    coverageText: isArabic
      ? 'نركز على إمارة عجمان حتى نقدم خدمة أوضح ومتابعة أسرع للعائلات داخل المنطقة.'
      : 'We focus on Ajman so families receive clearer support, faster follow-up, and service that understands the local community.',
    coverageBadge: isArabic ? 'متوفر داخل عجمان' : 'Available in Ajman',
    trustTitle: isArabic ? 'لماذا تختار عناية؟' : 'Why families contact INAYA',
    ctaTitle: isArabic ? 'سرّع طلبك عبر واتساب' : 'Fast-Track Your Booking',
    ctaText: isArabic
      ? 'راسل فريقنا لمعرفة التوفر والخدمة المناسبة لعائلتك.'
      : 'Chat with our team on WhatsApp for service availability and next steps.',
    ctaButton: isArabic ? 'ابدأ المحادثة' : 'Start Chatting',
    faqTitle: isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
    locationTitle: isArabic ? 'موقع مكتبنا' : 'Visit Our Office',
    hoursTitle: isArabic ? 'ساعات العمل' : 'Working Hours',
    hoursText: isArabic ? 'يرجى التواصل معنا لتأكيد مواعيد اليوم.' : "Contact us to confirm today's timings.",
    directions: isArabic ? 'افتح الاتجاهات' : 'Get Directions',
    mapTitle: isArabic ? 'موقع عناية للخدمات المنزلية في عجمان' : 'INAYA Domestic Workers Ajman location map'
  };

  const quickCards = [
    { title: copy.quick.phone, value: phoneDisplay, note: copy.quick.phoneNote, href: phoneHref, icon: '☎', tone: 'bg-primary-50 text-primary-800' },
    { title: copy.quick.whatsapp, value: whatsappDisplay, note: copy.quick.whatsappNote, href: whatsappHref, icon: '◉', tone: 'bg-green-50 text-green-600', external: true },
    { title: copy.quick.email, value: siteConfig.email, note: copy.quick.emailNote, href: `mailto:${siteConfig.email}`, icon: '✉', tone: 'bg-slate-100 text-slate-700' },
    { title: copy.quick.office, value: copy.quick.officeNote, note: address, href: directionsUrl, icon: '⌖', tone: 'bg-primary-50 text-primary-800', external: true }
  ];

  const trustCards = [
    {
      metric: isArabic ? 'مرخّص' : 'Licensed',
      title: isArabic ? 'دعم رسمي' : 'Licensed Support',
      text: isArabic ? 'نعمل وفق الإجراءات والإرشادات الرسمية ذات الصلة.' : 'We operate with proper procedures and official service guidance.'
    },
    {
      metric: isArabic ? 'موثوق' : 'Verified',
      title: isArabic ? 'عمالة موثوقة' : 'Verified Workers',
      text: isArabic ? 'نراجع بيانات المرشحين بعناية قبل مشاركة الخيارات.' : 'Candidate details are reviewed carefully before sharing options.'
    },
    {
      metric: isArabic ? 'واضح' : 'Clear',
      title: isArabic ? 'تواصل واضح' : 'Clear Communication',
      text: isArabic ? 'نبقيك على اطلاع بالخطوات والمتطلبات من البداية.' : 'We keep you informed about next steps and requirements.'
    },
    {
      metric: isArabic ? 'متابعة' : 'Follow-up',
      title: isArabic ? 'متابعة ودية' : 'Friendly Follow-up',
      text: isArabic ? 'فريقنا معك قبل وبعد تأكيد الخدمة.' : 'Our team supports you before and after service confirmation.'
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
    <div className="bg-[#f6fbf5] text-[#181d1a]">
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-1000" style={{ backgroundImage: `url(${heroImageUrl})` }} />
        <div className="absolute inset-0 bg-[#003f2e]/65 backdrop-blur-[3px]" />
        <div className="container-x relative z-10 py-24 text-center">
          <h1 className="mx-auto max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">{copy.heroTitle}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">{copy.heroText}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">◉ {copy.whatsapp}</a>
            <a href={phoneHref} className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-primary-900 hover:shadow-xl">☎ {copy.call}</a>
            <a href="#contact-form" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/75 px-8 py-4 font-bold text-[#003f2e] shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white">↗ {copy.callback}</a>
          </div>
        </div>
      </section>

      <section className="container-x relative z-20 -mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {quickCards.map((card) => (
          <a key={card.title} href={card.href} target={card.external ? '_blank' : undefined} rel={card.external ? 'noreferrer' : undefined} className="group rounded-[20px] border border-white/60 bg-white/75 p-7 shadow-sm backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-xl">
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl transition group-hover:scale-110 ${card.tone}`}>{card.icon}</div>
            <h3 className="text-xl font-bold text-gray-950">{card.title}</h3>
            <p className="mt-2 break-words text-sm font-semibold text-gray-700" dir={card.title === copy.quick.email ? 'ltr' : undefined}>{card.value}</p>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-500">{card.note}</p>
          </a>
        ))}
      </section>

      <section id="contact-form" className="container-x grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <img src={supportImageUrl} alt="INAYA support desk" className="mx-auto w-full max-w-md drop-shadow-2xl" />
        </div>
        <div className="rounded-[20px] border border-white/70 bg-white/75 p-7 shadow-sm backdrop-blur-xl sm:p-10">
          <h2 className="text-3xl font-bold text-primary-900">{copy.formTitle}</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">{copy.formText}</p>
          <div className="mt-8">
            <ContactForm locale={locale} variant="floating" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#eef5f0] py-16">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-4xl font-bold text-primary-900">{copy.coverageTitle}</h2>
            <p className="mt-4 leading-7 text-gray-600">{copy.coverageText}</p>
          </div>
          <div className="relative overflow-hidden rounded-[20px] border border-white/70 bg-white/75 shadow-2xl backdrop-blur-xl">
            <div className="aspect-[21/9] min-h-[260px] bg-[radial-gradient(circle_at_50%_45%,rgba(0,93,66,0.26),transparent_18%),linear-gradient(135deg,rgba(0,93,66,0.16)_1px,transparent_1px),linear-gradient(45deg,rgba(0,93,66,0.10)_1px,transparent_1px)] bg-[length:100%_100%,34px_34px,34px_34px]" />
            <div className="absolute bottom-8 left-8 hidden rounded-xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl md:block">
              <div className="mb-2 flex items-center gap-4">
                <span className="h-3 w-3 rounded-full bg-primary-800" />
                <span className="font-bold text-gray-950">{copy.coverageBadge}</span>
              </div>
              <p className="text-sm text-gray-600">{copy.quick.officeNote}</p>
            </div>
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-800 text-3xl text-white shadow-xl">⌖</span>
              <span className="mt-3 rounded-full bg-white px-6 py-2 text-sm font-bold text-primary-900 shadow-sm">Ajman</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card) => (
            <div key={card.title} className="rounded-[20px] border border-white/70 bg-white/75 p-8 text-center shadow-sm backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-2 text-3xl font-extrabold text-primary-900">{card.metric}</div>
              <h3 className="mb-2 font-bold text-gray-950">{card.title}</h3>
              <p className="text-sm leading-6 text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="relative overflow-hidden rounded-[20px] bg-primary-900 p-10 text-white sm:p-12">
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-start">
            <div>
              <h2 className="text-3xl font-bold">{copy.ctaTitle}</h2>
              <p className="mt-3 max-w-xl text-white/80">{copy.ctaText}</p>
            </div>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-primary-900 transition hover:scale-105">◉ {copy.ctaButton}</a>
          </div>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </section>

      <section className="container-x max-w-4xl py-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-950">{copy.faqTitle}</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group overflow-hidden rounded-xl border border-white/70 bg-white/75 shadow-sm backdrop-blur-xl">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-bold text-gray-950 transition hover:bg-white/60">
                {faq.question}
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-6 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container-x pb-24 pt-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-950">{copy.locationTitle}</h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="text-primary-800">⌖</span>
                <div>
                  <h3 className="font-bold text-gray-950">{isArabic ? 'العنوان' : 'Address'}</h3>
                  <p className="text-sm leading-6 text-gray-600">{address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary-800">◷</span>
                <div>
                  <h3 className="font-bold text-gray-950">{copy.hoursTitle}</h3>
                  <p className="text-sm leading-6 text-gray-600">{copy.hoursText}</p>
                </div>
              </div>
            </div>
            <a href={directionsUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-4 font-bold text-primary-900 transition hover:bg-primary-50">⌖ {copy.directions}</a>
          </div>
          <div className="h-[400px] overflow-hidden rounded-[20px] shadow-sm lg:col-span-2">
            <iframe
              src={mapEmbedUrl}
              title={copy.mapTitle}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
