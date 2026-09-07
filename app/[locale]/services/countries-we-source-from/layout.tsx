import PhaseOneSeoSection from '@/components/PhaseOneSeoSection';

export default async function CountriesSourceLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      {children}
      <PhaseOneSeoSection page="countries" locale={locale} />
    </>
  );
}
