import PhaseOneSeoSection from '@/components/PhaseOneSeoSection';

export default function CountriesSourceLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      {children}
      <PhaseOneSeoSection page="countries" locale={locale} />
    </>
  );
}
