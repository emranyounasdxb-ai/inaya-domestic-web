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
      className="glass-panel group flex h-full flex-col rounded-[22px] p-6 transition hover:-translate-y-1 hover:border-accent-500/40"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/75 text-3xl shadow-sm ring-1 ring-primary-700/10">
        {service.icon}
      </div>
      <h3 className="mb-2 text-xl font-bold leading-snug text-primary-900 group-hover:text-accent-700">
        {service.name[lang]}
      </h3>
      <p className="flex-1 text-sm leading-6 text-ink/65">{service.short[lang]}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-900">
        {cta}
        <span className="transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
      </span>
    </Link>
  );
}
