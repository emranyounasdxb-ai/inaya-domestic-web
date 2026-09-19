import CountrySourcePage from '@/components/CountrySourcePage';


export default async function CountriesWeSourceFromRoute({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <CountrySourcePage locale={locale} />;
}
