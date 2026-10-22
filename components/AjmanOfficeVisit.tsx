import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

// Office access and transport arrangements confirmed by the business owner on 22 October 2026.
export default function AjmanOfficeVisit({ locale }: { locale: string }) {
  const ar = locale === 'ar';
  const copy = ar ? {
    title: 'زر مكتب عناية في عجمان أو ابدأ طلبك عبر الإنترنت',
    intro: 'مكتبنا في جراند مول، الطابق الأرضي، شارع الشيخ خليفة بن زايد، الراشدية 3، عجمان. اختر الزيارة المباشرة أو أرسل طلب موعد لمناقشة احتياج أسرتك.',
    items: [
      ['طلب موعد عبر الإنترنت', 'أرسل الموعد المفضل وتفاصيل احتياجك عبر نموذج التواصل. يؤكد الفريق الموعد معك؛ إرسال النموذج وحده لا يحجز موعداً مؤكداً.'],
      ['زيارة مباشرة ونظام تذاكر انتظار', 'يمكنك زيارة المكتب خلال ساعات العمل دون حجز مسبق. احصل على تذكرة انتظار من الكاونتر عند الوصول؛ ويعتمد وقت الانتظار على عدد المراجعين.'],
      ['النقل بواسطة سائقينا', 'توفر عناية ترتيبات نقل العمالة المنزلية بواسطة سائقيها. أكد موقع الاستلام والتوصيل والأوقات والتكلفة وما تشمله الباقة قبل الاتفاق.'],
      ['جهز طلب مقارنة الملفات', 'حدد الدور والمهام ومنطقة المنزل والأيام والساعات وتاريخ البدء المفضل. اطلب من الفريق الملفات المناسبة المتاحة للمراجعة؛ يتطلب التوفر وموعد البدء تأكيداً.']
    ],
    appointment: 'طلب موعد أو ملفات مناسبة',
    whatsapp: 'اطلب الخيارات عبر واتساب',
    directions: 'الاتجاهات إلى مكتب عجمان',
    caption: 'مشهد توضيحي مولّد بالذكاء الاصطناعي؛ لا يصوّر مكتب عناية أو موظفيها أو عملاءها الفعليين.',
    alt: 'مشهد توضيحي مولّد بالذكاء الاصطناعي لاستقبال زائرة وتسليم تذكرة انتظار في مكتب خدمات'
  } : {
    title: 'Visit INAYA in Ajman or start your enquiry online',
    intro: 'Our office is at Grand Mall, ground floor, Sheikh Khalifa Bin Zayed Street, Al Rashidiya 3, Ajman. Walk in or request an appointment to discuss your household needs.',
    items: [
      ['Request an appointment online', 'Send your preferred time and household requirements through the contact form. The team confirms the appointment with you; submitting the form alone does not reserve a confirmed slot.'],
      ['Walk in and take a counter token', 'You can visit during office hours without a prior appointment. Collect a queue token at the counter on arrival; waiting time depends on the visitors being served.'],
      ['Transport with our own drivers', 'INAYA arranges domestic-worker transport using its own drivers. Confirm the pickup and drop-off locations, timings, charges and package inclusions before agreeing the arrangement.'],
      ['Prepare a suitable-profile request', 'Share the role, duties, home area, days and hours, and preferred start date. Ask the team for suitable available profiles to review; availability and the start date require confirmation.']
    ],
    appointment: 'Request a visit or suitable profiles',
    whatsapp: 'Ask about profiles on WhatsApp',
    directions: 'Directions to the Ajman office',
    caption: 'AI-generated illustrative scene; not the actual INAYA office, employees or customers.',
    alt: 'AI-generated illustrative scene of a service coordinator handing a queue ticket to an office visitor'
  };
  const message = ar
    ? 'مرحباً عناية، أود مراجعة الملفات المناسبة لأسرتي. الدور: __. المنطقة: __. المهام: __. الأيام والساعات: __. تاريخ البدء المفضل: __. يرجى تأكيد التوفر والنقل والتكاليف.'
    : 'Hello INAYA, I would like to review suitable profiles for my household. Role: __. Area: __. Duties: __. Days and hours: __. Preferred start date: __. Please confirm availability, transport and costs.';

  return (
    <section aria-labelledby="ajman-office-heading" className="bg-white px-6 py-12 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <h2 id="ajman-office-heading" className={`${ar ? 'font-arabic' : 'font-heading'} text-3xl font-bold tracking-[-0.035em] text-primary-900`}>{copy.title}</h2>
          <p className="mt-4 text-sm leading-7 text-primary-900/80">{copy.intro}</p>
          <p className="mt-3 text-sm font-semibold leading-7 text-primary-900">{siteConfig.hours[ar ? 'ar' : 'en']}</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {copy.items.map(([title, text]) => <div key={title} className="rounded-2xl border border-accent-500/20 bg-[#fbfaf7] p-5">
              <dt className="text-sm font-bold text-primary-900">{title}</dt>
              <dd className="mt-2 text-sm leading-7 text-primary-900/80">{text}</dd>
            </div>)}
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/${locale}/contact/`} className="rounded-full bg-primary-900 px-5 py-3 text-sm font-bold text-white">{copy.appointment}</Link>
            <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`} className="rounded-full border border-accent-500/40 px-5 py-3 text-sm font-bold text-primary-900">{copy.whatsapp}</a>
          </div>
          <a href={siteConfig.directionsUrl} className="mt-5 inline-block text-sm font-semibold text-primary-900 underline underline-offset-4">{copy.directions}</a>
        </div>
        <figure>
          <Image src="/images/service-areas/ajman-walk-in-reception-ai.webp" alt={copy.alt} width={1536} height={1024} sizes="(max-width: 1024px) 100vw, 40vw" className="h-auto w-full rounded-[26px]" />
          <figcaption className="mt-3 text-xs leading-6 text-primary-900/70">{copy.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
