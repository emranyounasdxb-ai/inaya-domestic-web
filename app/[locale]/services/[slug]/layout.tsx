import ServiceSeoBlock from '@/components/ServiceSeoBlock';

export default function ServiceSlugLayout({ children, params: { locale, slug } }: { children: React.ReactNode; params: { locale: string; slug: string } }) {
  return (
    <>
      {children}
      <ServiceSeoBlock locale={locale} slug={slug} />
    </>
  );
}
