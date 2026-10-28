import type { Metadata } from 'next';
import Link from 'next/link';
import PageBreadcrumbs from '@/components/PageBreadcrumbs';
import RouteSeo from '@/components/RouteSeo';
import { companyInformation, companyInformationCopy } from '@/lib/company-information';
import { pageMetadata } from '@/lib/page-seo';
import { siteConfig } from '@/lib/site-config';
import BusinessIdentityLine from '@/components/BusinessIdentityLine';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, companyInformation.route);
}

export default async function CompanyInformationPage({ params }: Props) {
  const { locale } = await params;
  const lang = locale === 'ar' ? 'ar' : 'en';
  const ar = lang === 'ar';
  const copy = companyInformationCopy[lang];
  const heading = ar ? 'font-arabic' : 'font-heading';
  const dayNames: Record<string, string> = ar ? {
    Saturday: 'السبت', Sunday: 'الأحد', Monday: 'الاثنين', Tuesday: 'الثلاثاء',
    Wednesday: 'الأربعاء', Thursday: 'الخميس', Friday: 'الجمعة'
  } : {
    Saturday: 'Saturday', Sunday: 'Sunday', Monday: 'Monday', Tuesday: 'Tuesday',
    Wednesday: 'Wednesday', Thursday: 'Thursday', Friday: 'Friday'
  };
  const words = ar ? {
    badge: 'المرجع الرسمي لبيانات عناية',
    contact: 'تواصل مع عناية',
    directions: 'الاتجاهات إلى المكتب',
    updated: 'آخر تحديث',
    reviewed: 'آخر مراجعة للبيانات',
    identity: 'الاسم وبيانات التواصل',
    brand: 'الاسم التجاري المعلن',
    legal: 'الاسم القانوني',
    phone: 'هاتف المكتب',
    whatsapp: 'واتساب',
    email: 'البريد الإلكتروني',
    website: 'الموقع الرسمي',
    office: 'مكتب واحد في عجمان',
    officeNote: 'يقع مكتب عناية الوحيد في جراند مول، الطابق الأرضي، الراشدية 3، عجمان. لا تعني مناطق تقديم الخدمة وجود مكاتب إضافية.',
    hours: 'ساعات عمل المكتب',
    days: 'الأيام',
    time: 'ساعات العمل',
    closed: 'مغلق',
    timeZone: 'التوقيت المحلي: الإمارات العربية المتحدة',
    visit: 'الزيارة والاستفسار',
    visitNote: 'يمكن زيارة المكتب والحصول على رقم انتظار، أو إرسال طلب موعد عبر الإنترنت. تواصل مع الفريق لتأكيد تفاصيل طلبك.',
    booking: 'طلب موعد',
    services: 'الخدمات ونطاق المساعدة',
    serviceLink: 'تفاصيل الخدمة',
    allServices: 'جميع الخدمات',
    pricing: 'الباقات والأسعار',
    reference: 'بيانات واضحة يمكنك الرجوع إليها',
    referenceNote: 'استخدم بيانات التواصل والعنوان وساعات العمل الواردة في هذه الصفحة عند التواصل مع عناية أو الإشارة إلى الشركة. إذا وجدت معلومة مختلفة في موقع آخر، تواصل معنا للتحقق من البيانات الحالية.',
    about: 'عن عناية',
    linkedin: 'صفحة عناية على LinkedIn',
    download: 'تنزيل بيانات الشركة بصيغة JSON',
    downloadNote: 'نسخة منظمة من بيانات الشركة الواردة في هذه الصفحة.'
  } : {
    badge: 'Official INAYA company reference',
    contact: 'Contact INAYA',
    directions: 'Get office directions',
    updated: 'Last updated',
    reviewed: 'Information last reviewed',
    identity: 'Company identity and contacts',
    brand: 'Public business name',
    legal: 'Legal name',
    phone: 'Office telephone',
    whatsapp: 'WhatsApp',
    email: 'Email',
    website: 'Official website',
    office: 'One office in Ajman',
    officeNote: 'INAYA has one physical office at Grand Mall, ground floor, Al Rashidiya 3, Ajman. Service coverage in other areas does not mean there are additional offices.',
    hours: 'Office opening hours',
    days: 'Days',
    time: 'Opening hours',
    closed: 'Closed',
    timeZone: 'Local time: United Arab Emirates',
    visit: 'Visits and enquiries',
    visitNote: 'Walk-ins and the office token counter are available, alongside online appointment requests. Contact the team to confirm the details for your enquiry.',
    booking: 'Request an appointment',
    services: 'Services and assistance',
    serviceLink: 'View service',
    allServices: 'All services',
    pricing: 'Packages and pricing',
    reference: 'Company details you can refer to',
    referenceNote: 'Use the contacts, address and hours on this page when contacting INAYA or referring to the company. If another website shows different information, contact us to check the current details.',
    about: 'About INAYA',
    linkedin: 'INAYA on LinkedIn',
    download: 'Download company information as JSON',
    downloadNote: 'A structured copy of the company information shown on this page.'
  };

  return (
    <div className="bg-[#fbfaf7] text-primary-900">
      <RouteSeo locale={locale} route={companyInformation.route} />
      <section className="relative overflow-hidden border-b border-primary-900/10 bg-[#fffdf8] px-6 py-12 lg:px-10 lg:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(191,164,106,0.18),transparent_32rem)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-bold text-accent-700">{words.badge}</p>
          <h1 className={`${heading} mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl`}>{copy.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-primary-900/80">{copy.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={`/${locale}/contact/`} className="inline-flex min-h-12 items-center rounded-full bg-primary-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-800">{words.contact}</Link>
            <a href={siteConfig.directionsUrl} className="inline-flex min-h-12 items-center rounded-full border border-accent-500/50 bg-white px-6 py-3 text-sm font-bold transition hover:border-accent-600 hover:bg-accent-50">{words.directions}</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-primary-900/10 pt-5 text-sm leading-6 text-primary-900/75">
            <p>{words.updated}: <time dir="ltr" dateTime={companyInformation.updated}>{companyInformation.updated}</time></p>
            <p>{words.reviewed}: <time dir="ltr" dateTime={companyInformation.reviewed}>{companyInformation.reviewed}</time></p>
          </div>
        </div>
      </section>
      <PageBreadcrumbs locale={locale} route={companyInformation.route} />

      <section className="px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[26px] border border-primary-900/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className={`${heading} text-2xl font-bold`}>{words.identity}</h2>
            <BusinessIdentityLine locale={locale} className="mt-5 text-sm leading-7" showProfiles />
            <dl className="mt-5 divide-y divide-primary-900/10 text-sm leading-7">
              <div className="py-4 first:pt-0"><dt className="text-primary-900/65">{words.brand}</dt><dd className="mt-1 text-base font-bold">{ar ? siteConfig.nameAr : siteConfig.name}</dd></div>
              <div className="py-4"><dt className="text-primary-900/65">{words.legal}</dt><dd className="mt-1 break-words font-semibold"><bdi dir="ltr">{siteConfig.legalName}</bdi></dd></div>
              <div className="py-4"><dt className="text-primary-900/65">{words.phone}</dt><dd className="mt-1 font-semibold"><a className="underline decoration-accent-500/70 underline-offset-4 hover:decoration-primary-900" dir="ltr" href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a></dd></div>
              <div className="py-4"><dt className="text-primary-900/65">{words.whatsapp}</dt><dd className="mt-1 font-semibold"><a className="underline decoration-accent-500/70 underline-offset-4 hover:decoration-primary-900" dir="ltr" href={`https://wa.me/${siteConfig.whatsapp}`}>{siteConfig.whatsappDisplay}</a></dd></div>
              <div className="py-4"><dt className="text-primary-900/65">{words.email}</dt><dd className="mt-1 break-all font-semibold"><a className="underline decoration-accent-500/70 underline-offset-4 hover:decoration-primary-900" dir="ltr" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd></div>
              <div className="py-4 pb-0"><dt className="text-primary-900/65">{words.website}</dt><dd className="mt-1 break-all font-semibold"><a className="underline decoration-accent-500/70 underline-offset-4 hover:decoration-primary-900" dir="ltr" href={`${siteConfig.url}/`}>{siteConfig.url}/</a></dd></div>
            </dl>
          </div>

          <div className="space-y-6">
            <div className="rounded-[26px] border border-accent-500/30 bg-[#fffdf8] p-6 sm:p-8">
              <h2 className={`${heading} text-2xl font-bold`}>{words.office}</h2>
              <address className="mt-4 text-base not-italic leading-8">{ar ? siteConfig.addressAr : siteConfig.address}</address>
              <p className="mt-3 text-sm leading-7 text-primary-900/75">{words.officeNote}</p>
              <a href={siteConfig.directionsUrl} className="mt-4 inline-flex min-h-10 items-center text-sm font-bold underline decoration-accent-500 underline-offset-4">{words.directions}</a>
            </div>
            <div className="rounded-[26px] border border-primary-900/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className={`${heading} text-2xl font-bold`}>{words.hours}</h2>
              <table className="mt-5 w-full text-start text-sm leading-7">
                <thead><tr className="border-b border-primary-900/10"><th scope="col" className="pb-3 pe-4 text-start font-semibold text-primary-900/65">{words.days}</th><th scope="col" className="pb-3 text-start font-semibold text-primary-900/65">{words.time}</th></tr></thead>
                <tbody>
                  <tr className="border-b border-primary-900/10"><th scope="row" className="py-3 pe-4 text-start font-normal">{siteConfig.officeHours.openDays.map((day) => dayNames[day] ?? day).join(ar ? '، ' : ', ')}</th><td className="whitespace-nowrap py-3 font-semibold"><bdi dir="ltr">{siteConfig.officeHours.opens}–{siteConfig.officeHours.closes}</bdi></td></tr>
                  <tr><th scope="row" className="pt-3 pe-4 text-start font-normal">{siteConfig.officeHours.closedDays.map((day) => dayNames[day] ?? day).join(ar ? '، ' : ', ')}</th><td className="pt-3 font-semibold">{words.closed}</td></tr>
                </tbody>
              </table>
              <p className="mt-4 text-xs leading-6 text-primary-900/65">{words.timeZone} (<bdi dir="ltr">{siteConfig.officeHours.timeZone}</bdi>)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-primary-900/10 bg-white px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${heading} text-2xl font-bold sm:text-3xl`}>{words.services}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-primary-900/80">{copy.scope}</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {companyInformation.services.map((service) => (
              <article key={service.slug} className="flex flex-col rounded-2xl border border-primary-900/10 bg-[#fffdf8] p-6">
                <h3 className={`${heading} text-lg font-bold`}>{service.name[lang]}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-primary-900/80">{service.description[lang]}</p>
                <Link href={`/${locale}/services/${service.slug}/`} className="mt-4 inline-flex min-h-10 items-center self-start text-sm font-bold underline decoration-accent-500 underline-offset-4">{words.serviceLink}</Link>
              </article>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={`/${locale}/services/`} className="inline-flex min-h-11 items-center rounded-full bg-primary-900 px-5 py-3 text-sm font-bold text-white">{words.allServices}</Link>
            <Link href={`/${locale}/pricing/`} className="inline-flex min-h-11 items-center rounded-full border border-primary-900/20 px-5 py-3 text-sm font-bold">{words.pricing}</Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-[26px] bg-primary-900 p-6 text-white sm:p-8">
            <h2 className={`${heading} text-2xl font-bold`}>{words.visit}</h2>
            <p className="mt-4 text-sm leading-8 text-white/85">{words.visitNote}</p>
            <Link href={`/${locale}/booking/`} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-accent-500 px-5 py-3 text-sm font-bold text-primary-900 transition hover:bg-accent-400">{words.booking}</Link>
          </div>
          <div className="rounded-[26px] border border-primary-900/10 bg-white p-6 sm:p-8">
            <h2 className={`${heading} text-2xl font-bold`}>{words.reference}</h2>
            <p className="mt-4 text-sm leading-8 text-primary-900/80">{words.referenceNote}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
              <Link href={`/${locale}/about/`} className="inline-flex min-h-10 items-center underline decoration-accent-500 underline-offset-4">{words.about}</Link>
              <a href="https://www.linkedin.com/company/inaya-domestic-workers-ajman/" className="inline-flex min-h-10 items-center underline decoration-accent-500 underline-offset-4">{words.linkedin}</a>
            </div>
            <div className="mt-5 border-t border-primary-900/10 pt-5">
              <a href={companyInformation.dataPath} download className="inline-flex min-h-10 items-center text-sm font-bold underline decoration-accent-500 underline-offset-4">{words.download}</a>
              <p className="mt-1 text-xs leading-6 text-primary-900/65">{words.downloadNote}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
