import { pageStructuredData } from '@/lib/structured-data';
import { serializeJsonLd } from '@/lib/json-ld';

export default function RouteSeo({ locale, route }: { locale: string; route: string }) {
  const data = pageStructuredData(locale, route);
  if (!data) return null;
  return <script type="application/ld+json" data-seo="route" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}
