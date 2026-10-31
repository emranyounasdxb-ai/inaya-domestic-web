import { siteConfig } from '@/lib/site-config';

const numberPattern = new RegExp(`(${[siteConfig.phone, siteConfig.whatsappDisplay]
  .map(number => number.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  .join('|')})`);

// Preserve the authored answer and its FAQ schema text; only the two official
// contact numbers become links. No supplied user data is sent or prefilled.
export default function InlineContactAnswer({ answer, locale }: { answer: string; locale: string }) {
  const ar = locale === 'ar';
  return answer.split(numberPattern).map((part, index) => {
    if (part === siteConfig.phone) return <a
      key={index}
      data-faq-contact="call"
      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
      aria-label={ar ? `اتصل بمكتب عناية على ${part}` : `Call INAYA’s office on ${part}`}
      dir="ltr"
      className="whitespace-nowrap font-semibold underline decoration-accent-500/70 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-900"
    >{part}</a>;
    if (part === siteConfig.whatsappDisplay) return <a
      key={index}
      data-faq-contact="whatsapp"
      href={`https://wa.me/${siteConfig.whatsapp}`}
      aria-label={ar ? `راسل عناية عبر واتساب ${part}` : `Message INAYA on WhatsApp ${part}`}
      target="_blank"
      rel="noopener noreferrer"
      dir="ltr"
      className="whitespace-nowrap font-semibold underline decoration-accent-500/70 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-900"
    >{part}</a>;
    return part;
  });
}
