import Link from 'next/link';

export default function LocalVisitPlanning({ locale, city }: { locale: string; city: string }) {
  const ar = locale === 'ar';
  const rows = ar ? [
    ['التوفر في منطقتك', `شارك العنوان الفعلي في ${city} ونوع الخدمة والأيام والساعات وتاريخ البدء المفضل. لا تعني صفحة التغطية توفر عاملة أو موعد مؤكد.`],
    ['تنسيق النقل والوصول', 'ترتب عناية نقل العمالة المنزلية بواسطة سائقيها. أكد مواقع الاستلام والتوصيل والتوقيت والتكلفة وما تشمله الباقة في العرض المكتوب.'],
    ['الدخول والتجهيز', 'وضح تعليمات دخول المبنى أو المنزل ومسؤول التواصل وأولويات العمل والمنتجات والمعدات المتفق عليها قبل الزيارة.'],
    ['زيارة المكتب', 'مكتب عناية الفعلي واحد في جراند مول، الطابق الأرضي، الراشدية 3، عجمان. دبي والشارقة منطقتان لاستفسارات الخدمة وليستا فرعين إضافيين.']
  ] : [
    ['Availability for your area', `Share the actual ${city} address, service, days, hours and preferred start. A coverage page does not confirm a worker or a reserved visit.`],
    ['Transport and arrival', 'INAYA arranges domestic-worker transport using its own drivers. Confirm pickup, drop-off, timing, charges and package inclusions in the written quotation.'],
    ['Access and preparation', 'Explain building or home entry, the household contact, work priorities and agreed products and equipment before the visit.'],
    ['Office visit', 'INAYA has one physical office at Grand Mall, ground floor, Al Rashidiya 3, Ajman. Dubai and Sharjah are service enquiry areas, not additional branches.']
  ];
  return <section className="bg-white px-6 py-10 lg:px-10"><div className="mx-auto max-w-6xl"><h2 className={`${ar ? 'font-arabic' : 'font-heading'} text-2xl font-bold text-primary-900`}>{ar ? 'رتب تفاصيل طلبك المحلي' : 'Plan your local service enquiry'}</h2><dl className="mt-6 grid gap-4 sm:grid-cols-2">{rows.map(([title, body]) => <div key={title} className="rounded-2xl border border-primary-900/10 bg-[#fbfaf7] p-5"><dt className="font-bold">{title}</dt><dd className="mt-3 text-sm leading-7 text-primary-900/80">{body}</dd></div>)}</dl><p className="mt-5 flex flex-wrap gap-5 text-sm font-semibold"><Link href={`/${locale}/pricing/`} className="underline decoration-accent-500 underline-offset-4">{ar ? 'مقارنة الأسعار والشروط' : 'Compare pricing and terms'}</Link><Link href={`/${locale}/maid-services-ajman/#ajman-office-heading`} className="underline decoration-accent-500 underline-offset-4">{ar ? 'عنوان المكتب وساعاته والاتجاهات والمواعيد' : 'Office address, hours, directions and appointments'}</Link></p></div></section>;
}
