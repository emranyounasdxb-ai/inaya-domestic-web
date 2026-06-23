import Link from 'next/link';
import type { Service } from '@/lib/services';

export default function ServiceCard({
  service,
  locale,
  cta
}: {
  service: Service;
  locale: string;
  cta: string;
}) {
  const lang = locale === 'ar' ? 'ar' : 'en';
  return (
    <Link
      href={`/${locale}/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-3xl">
        {service.icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-primary-700">
        {service.name[lang]}
      </h3>
      <p className="flex-1 text-sm text-gray-600">{service.short[lang]}</p>
      <span className="mt-4 text-sm font-semibold text-primary-700">{cta} →</span>
    </Link>
  );
}
