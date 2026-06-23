const authorityLogos = [
  { src: '/authority-logos/ministry-logo.png', alt: 'Ministry logo' },
  { src: '/authority-logos/ajman-gold-logo.png', alt: 'Ajman Gold logo' },
  { src: '/authority-logos/uae-pass-logo.png', alt: 'UAE Pass logo' },
  { src: '/authority-logos/tadbeer-logo.png', alt: 'Tadbeer logo' },
  { src: '/authority-logos/ajman-chamber-logo.png', alt: 'Ajman Chamber logo' },
  { src: '/authority-logos/ajman-logo.png', alt: 'Ajman logo' }
];

export default function AuthorityLogos({ locale }: { locale: string }) {
  const title = locale === 'ar'
    ? 'معترف بها وموثوقة من الجهات الحكومية في دولة الإمارات'
    : 'Recognized & Trusted by UAE Authorities';
  const subtitle = locale === 'ar'
    ? 'نعمل بثقة ووضوح لخدمة العائلات في عجمان من خلال قنوات ومنصات رسمية معروفة.'
    : 'Working with trusted UAE platforms and Ajman-based authorities to support families with confidence.';
  const logos = [...authorityLogos, ...authorityLogos];

  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">{subtitle}</p>
        </div>

        <div className="authority-marquee mt-10" dir="ltr">
          <div className="authority-track">
            {logos.map((logo, index) => (
              <div key={`${logo.src}-${index}`} className="authority-logo-card">
                <img src={logo.src} alt={logo.alt} className="h-14 max-w-[170px] object-contain sm:h-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
