import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site-config';

const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.365890608938!2d55.43878240000001!3d25.3925602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5942014634c7%3A0xf39f2fefc97933f3!2sINAYA%20Domestic%20Workers%20Ajman!5e0!3m2!1sen!2sae!4v1782223058219!5m2!1sen!2sae';
const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=INAYA%20Domestic%20Workers%20Ajman';

type IconName = 'phone' | 'message' | 'mail' | 'pin' | 'shield' | 'user' | 'calendar' | 'spark';

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    phone: <><path {...common} d="M8.2 5.4 10 9.1l-2 1.2c.9 1.9 2.4 3.4 4.3 4.3l1.2-2 3.7 1.8-.6 3.4c-.2.8-.9 1.3-1.7 1.2C8.9 18.5 4.5 14.1 4 8.1c-.1-.8.4-1.5 1.2-1.7l3-.6Z" /></>,
    message: <><path {...common} d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v3.8a3.8 3.8 0 0 1-3.8 3.8H10l-4.5 3.2.9-4A3.8 3.8 0 0 1 5 10.6V6.8Z" /></>,
    mail: <><path {...common} d="M4 6h16v12H4V6Z" /><path {...common} d="m4 7 8 6 8-6" /></>,
    pin: <><path {...common} d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" /><path {...common} d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /></>,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    user: <><path {...common} d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path {...common} d="M4.5 20a7.5 7.5 0 0 1 15 0" /></>,
    calendar: <><path {...common} d="M5 5h14v15H5V5Z" /><path {...common} d="M8 3v4M16 3v4M5 9h14" /></>,
    spark: <><path {...common} d="M12 3l1.5 5.1L19 10l-5.5 1.9L12 17l-1.5-5.1L5 10l5.5-1.9L12 3Z" /></>
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

function ArabicNumber({ type }: { type: 'phone' | 'whatsapp' }) {
  if (type === 'phone') {
    return <span className="inline-flex flex-row items-center gap-1" dir="ltr" style={{ unicodeBidi: 'isolate' }}><span>+</span><span>٩٧١٦</span><span>٧٤٠</span><span>٠١٢٨</span></span>;
  }

  return <span className="inline-flex flex-row items-center gap-1" dir="ltr" style={{ unicodeBidi: 'isolate' }}><span>+</span><span>٩٧١</span><span>٥٠</span><span>٢٠٣</span><span>٦٧٦٧</span></span>;
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
    badge: isArabic ? 'نخدم عائلات عجمان' : 'Serving families in Ajman',
    heroTitle: isArabic ? 'تواصل مع عناية للخدمات المنزلية' : 'Premium domestic care, guided clearly.',
    heroText: isArabic
      ? 'فريقنا يساعدك في اختيار خدمة العمالة المنزلية المناسبة لعائلتك داخل عجمان بتواصل واضح وتجربة راقية.'
      : 'Speak with INAYA for trusted domestic worker services in Ajman, with clear guidance and friendly follow-up.',
    whatsapp: isArabic ? 'واتساب' : 'WhatsApp',
    call: isArabic ? 'اتصل الآن' : 'Call Now',
    callback: isArabic ? 'أرسل طلبك' : 'Send Request',
    formTitle: isArabic ? 'أرسل لنا متطلباتك' : 'Send your requirement',
    formText: isArabic ? 'شاركنا تفاصيل الخدمة المطلوبة وسنتواصل معك لتأكيد الخطوات التالية.' : 'Share your requirement and our team will contact you with the next steps.',
    locationTitle: isArabic ? 'موقع المكتب' : 'Office location',
    locationText: isArabic ? 'يمكنك زيارة مكتبنا في جراند مول، عجمان. يرجى التواصل معنا لتأكيد الموعد قبل الزيارة.' : 'Visit our office at Grand Mall, Ajman. Please contact us to confirm timing before your visit.',
    trustTitle: isArabic ? 'تجربة تواصل واضحة وموثوقة' : 'A clear and trusted contact experience',
    ctaTitle: isArabic ? 'هل تحتاج إلى متابعة سريعة؟' : 'Need a faster response?',
    ctaText: isArabic ? 'راسل فريقنا عبر واتساب لمعرفة التوفر والخطوات التالية.' : 'Chat with our team on WhatsApp for availability and next steps.',
    directions: isArabic ? 'افتح الاتجاهات' : 'Get Directions',
    hoursTitle: isArabic ? 'ساعات العمل' : 'Working Hours',
    hoursText: isArabic ? 'يرجى التواصل معنا لتأكيد مواعيد اليوم.' : "Contact us to confirm today's timings.",
    faqTitle: isArabic ? 'أسئلة سريعة' : 'Quick questions',
    mapTitle: isArabic ? 'موقع عناية للخدمات المنزلية في عجمان' : 'INAYA Domestic Workers Ajman location map'
  };

  const actions = [
    { title: isArabic ? 'الهاتف' : 'Phone', value: phoneDisplay, note: isArabic ? 'تواصل مباشر مع الفريق' : 'Speak directly with our team', href: phoneHref, icon: 'phone' as IconName },
    { title: isArabic ? 'واتساب' : 'WhatsApp', value: whatsappDisplay, note: isArabic ? 'الأسرع للمتابعة' : 'Fastest for follow-up', href: whatsappHref, icon: 'message' as IconName, external: true },
    { title: isArabic ? 'البريد الإلكتروني' : 'Email', value: siteConfig.email, note: isArabic ? 'لإرسال التفاصيل' : 'Send details and documents', href: `mailto:${siteConfig.email}`, icon: 'mail' as IconName },
    { title: isArabic ? 'المكتب' : 'Office', value: isArabic ? 'جراند مول، عجمان' : 'Grand Mall, Ajman', note: isArabic ? 'زيارة بعد تأكيد الموعد' : 'Visit after confirming timing', href: directionsUrl, icon: 'pin' as IconName, external: true }
  ];

  const trustItems = [
    { icon: 'shield' as IconName, title: isArabic ? 'إرشاد واضح' : 'Clear guidance', text: isArabic ? 'نشرح لك الخيارات والخطوات قبل بدء الطلب.' : 'We explain options and next steps before you proceed.' },
    { icon: 'user' as IconName, title: isArabic ? 'عمالة موثوقة' : 'Verified workers', text: isArabic ? 'نراجع بيانات المرشحين بعناية قبل مشاركة الخيارات.' : 'Candidate details are reviewed carefully before options are shared.' },
    { icon: 'message' as IconName, title: isArabic ? 'متابعة ودية' : 'Friendly follow-up', text: isArabic ? 'يتابع فريقنا معك قبل وبعد تأكيد الخدمة.' : 'Our team supports you before and after service confirmation.' }
  ];

  const faqs = [
    { question: isArabic ? 'هل تقدمون الخدمة خارج عجمان؟' : 'Do you serve outside Ajman?', answer: isArabic ? 'حالياً نركز على خدمة العملاء داخل عجمان. تواصل معنا لتأكيد الحالات الخاصة.' : 'At the moment, our service team is focused on Ajman. Please contact us to confirm special requests.' },
    { question: isArabic ? 'ما أسرع طريقة للتواصل؟' : 'What is the fastest way to contact you?', answer: isArabic ? 'واتساب هو الأسرع لإرسال المتطلبات والحصول على متابعة من الفريق.' : 'WhatsApp is the fastest option for sharing your requirement and getting follow-up.' },
    { question: isArabic ? 'هل يمكن زيارة المكتب؟' : 'Can I visit the office?', answer: isArabic ? 'نعم، يمكن زيارة المكتب في جراند مول بعجمان، ويفضل التواصل معنا قبل الزيارة لتأكيد الموعد.' : 'Yes, you can visit our office at Grand Mall in Ajman. Please contact us first to confirm timing.' }
  ];

  return (
    <div className="bg-ivory text-ink">
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,164,106,0.20),transparent_34rem),radial-gradient(circle_at_bottom_right,rgba(7,22,74,0.10),transparent_30rem)]" />
        <div className="container-x relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/60 px-4 py-2 text-sm font-semibold text-primary-900 shadow-sm backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                {copy.badge}
              </span>
              <h1 className="mt-6 max-w-3xl font-heading text-5xl font-bold leading-none text-primary-900 sm:text-7xl">
                {copy.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">{copy.heroText}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3 font-semibold text-white shadow-premium transition hover:-translate-y-0.5"><LineIcon name="message" className="h-5 w-5" />{copy.whatsapp}</a>
                <a href={phoneHref} className="inline-flex items-center gap-2 rounded-full bg-primary-900 px-7 py-3 font-semibold text-white shadow-premium transition hover:-translate-y-0.5"><LineIcon name="phone" className="h-5 w-5" />{copy.call}</a>
                <a href="#contact-form" className="inline-flex items-center gap-2 rounded-full border border-accent-500/60 bg-white/60 px-7 py-3 font-semibold text-primary-900 shadow-glass backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-accent-50"><LineIcon name="spark" className="h-5 w-5 text-accent-600" />{copy.callback}</a>
              </div>
            </div>

            <div className="glass-panel rounded-[28px] p-5 sm:p-6">
              <div className="rounded-[24px] bg-gradient-to-br from-white/80 to-ivory-100/80 p-6">
                <div className="flex items-center justify-between border-b border-primary-700/10 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-accent-600">INAYA Domestic Workers</p>
                    <h2 className="mt-1 font-heading text-3xl font-bold text-primary-900">{isArabic ? 'تواصل راقٍ وواضح' : 'Premium support desk'}</h2>
                  </div>
                  <LineIcon name="shield" className="h-11 w-11 text-accent-600" />
                </div>
                <div className="mt-5 grid gap-3">
                  {actions.slice(0, 3).map((item) => (
                    <a key={item.title} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} className="flex items-center gap-4 rounded-2xl border border-primary-700/10 bg-white/65 p-4 shadow-sm backdrop-blur-xl transition hover:border-accent-500/50 hover:bg-white/85">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory text-primary-900"><LineIcon name={item.icon} className="h-5 w-5" /></span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-primary-900">{item.title}</span>
                        <span className="block break-words text-sm text-ink/70" dir={item.title === 'Email' || item.title === 'البريد الإلكتروني' ? 'ltr' : undefined}>{item.value}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {actions.map((item) => (
              <a key={item.title} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} className="glass-panel group rounded-[20px] p-6 transition hover:-translate-y-1 hover:border-accent-500/40">
                <LineIcon name={item.icon} className="h-7 w-7 text-accent-600" />
                <h3 className="mt-4 font-semibold text-primary-900">{item.title}</h3>
                <p className="mt-1 break-words text-sm font-medium text-ink" dir={item.title === 'Email' || item.title === 'البريد الإلكتروني' ? 'ltr' : undefined}>{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-ink/60">{item.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="container-x grid gap-8 pb-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel rounded-[28px] p-7 sm:p-9">
          <h2 className="font-heading text-4xl font-bold text-primary-900">{copy.locationTitle}</h2>
          <p className="mt-4 leading-7 text-ink/70">{copy.locationText}</p>
          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <LineIcon name="pin" className="mt-1 h-6 w-6 shrink-0 text-accent-600" />
              <p className="text-sm leading-6 text-ink/75">{address}</p>
            </div>
            <div className="flex gap-4">
              <LineIcon name="calendar" className="mt-1 h-6 w-6 shrink-0 text-accent-600" />
              <div>
                <h3 className="font-semibold text-primary-900">{copy.hoursTitle}</h3>
                <p className="text-sm leading-6 text-ink/70">{copy.hoursText}</p>
              </div>
            </div>
          </div>
          <a href={directionsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent-500 bg-white/60 px-6 py-3 font-semibold text-primary-900 shadow-glass transition hover:-translate-y-0.5 hover:bg-accent-50"><LineIcon name="pin" className="h-5 w-5" />{copy.directions}</a>
        </div>

        <div className="glass-panel rounded-[28px] p-7 sm:p-9">
          <h2 className="font-heading text-4xl font-bold text-primary-900">{copy.formTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-ink/70">{copy.formText}</p>
          <div className="mt-7">
            <ContactForm locale={locale} variant="floating" />
          </div>
        </div>
      </section>

      <section className="container-x grid gap-8 pb-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-heading text-4xl font-bold text-primary-900">{copy.trustTitle}</h2>
          <p className="mt-4 max-w-xl leading-7 text-ink/70">{copy.heroText}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {trustItems.map((item) => (
            <div key={item.title} className="glass-panel rounded-[20px] p-5">
              <LineIcon name={item.icon} className="h-7 w-7 text-accent-600" />
              <h3 className="mt-4 font-semibold text-primary-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="overflow-hidden rounded-[28px] border border-primary-700/10 bg-primary-900 p-8 text-white shadow-premium sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-heading text-4xl font-bold">{copy.ctaTitle}</h2>
              <p className="mt-2 max-w-xl text-white/75">{copy.ctaText}</p>
            </div>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5"><LineIcon name="message" className="h-5 w-5" />{copy.whatsapp}</a>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-8 pb-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-panel rounded-[28px] p-7 sm:p-9">
          <h2 className="font-heading text-4xl font-bold text-primary-900">{copy.faqTitle}</h2>
          <div className="mt-6 divide-y divide-primary-700/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-primary-900">
                  {faq.question}
                  <span className="text-accent-600 transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-ink/65">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[28px] border border-primary-700/10 bg-white/70 shadow-glass backdrop-blur-xl">
          <iframe
            src={mapEmbedUrl}
            title={copy.mapTitle}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full"
          />
        </div>
      </section>
    </div>
  );
}
