import LocationMap from './LocationMap';

// Reuse the existing business Place-ID embed already published on Contact.
// Its viewport centre is not represented as a verified office-pin coordinate.
const officeEmbed = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.365890608938!2d55.43878240000001!3d25.3925602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5942014634c7%3A0xf39f2fefc97933f3!2sINAYA%20Domestic%20Workers%20Ajman!5e0!3m2!1sen!2sae!4v1782223058219!5m2!1sen!2sae';

export default function OfficeLocationMap({ locale }: { locale: string }) {
  const ar = locale === 'ar';
  return (
    <div className="mt-7 overflow-hidden rounded-[24px] border border-primary-900/10" data-office-location-map>
      <LocationMap
        src={ar ? officeEmbed.replaceAll('!1sen', '!1sar') : officeEmbed}
        title={ar ? 'موقع مكتب عناية في جراند مول، عجمان' : 'INAYA office at Grand Mall, Ajman'}
      />
    </div>
  );
}
