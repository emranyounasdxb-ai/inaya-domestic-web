import { siteConfig } from '@/lib/site-config';

export default function BusinessIdentityLine({ locale, className = '', showProfiles = false }: {
  locale: string;
  className?: string;
  showProfiles?: boolean;
}) {
  const ar = locale === 'ar';
  const facility = siteConfig.mohreFacility;

  return (
    <div className={className}>
      <p>
        {facility.listedDescription[ar ? 'ar' : 'en']} — {ar ? 'رقم المنشأة' : 'Facility No.'} <bdi dir="ltr">{facility.number}</bdi>.{' '}
        <a href={facility.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:decoration-accent-600">
          {ar ? 'السجل الرسمي لدى الوزارة' : 'Official MOHRE record'}
        </a>
      </p>
      {showProfiles && (
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2" aria-label={ar ? 'صفحات عناية الرسمية' : 'Official INAYA profiles'}>
          {siteConfig.socialProfiles.map(({ name, nameAr, url }) => (
            <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:decoration-accent-600">{ar ? nameAr : name}</a></li>
          ))}
        </ul>
      )}
    </div>
  );
}
