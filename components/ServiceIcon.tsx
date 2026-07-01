type ServiceIconProps = {
  slug: string;
  className?: string;
};

const childcare = new Set(['nanny', 'executive-nannies', 'babysitting', 'newborn-care']);
const cooking = new Set(['home-cooking', 'private-chefs', 'personal-chef', 'kitchen-helper']);
const management = new Set(['house-managers', 'bespoke-household-management']);
const care = new Set(['elder-care', 'patient-care', 'companion-care']);
const documents = new Set(['recruitment', 'maid-visa', 'maid-replacement', 'sponsorship-transfer']);
const verification = new Set(['experienced-maid', 'background-verification']);

function IconFrame({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {children}
    </svg>
  );
}

export default function ServiceIcon({ slug, className = 'h-6 w-6' }: ServiceIconProps) {
  const strokeProps = {
    stroke: 'currentColor',
    strokeWidth: 1.65,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
  };

  if (childcare.has(slug)) {
    return (
      <IconFrame className={className}>
        <circle cx="10" cy="8" r="3" {...strokeProps} />
        <path d="M4.5 19c.6-4 2.4-6 5.5-6 2.3 0 3.9 1.1 4.8 3.3" {...strokeProps} />
        <path d="M18.2 11.8c2-1.9 4.7 1.2 0 4.7-4.7-3.5-2-6.6 0-4.7Z" {...strokeProps} />
      </IconFrame>
    );
  }

  if (cooking.has(slug)) {
    return (
      <IconFrame className={className}>
        <path d="M5 10h14v2.5a7 7 0 0 1-14 0V10Z" {...strokeProps} />
        <path d="M8 7.5c-1.3-1.3.9-2.2 0-3.5M12 7.5c-1.3-1.3.9-2.2 0-3.5M16 7.5c-1.3-1.3.9-2.2 0-3.5" {...strokeProps} />
        <path d="M8 20h8" {...strokeProps} />
      </IconFrame>
    );
  }

  if (management.has(slug)) {
    return (
      <IconFrame className={className}>
        <rect x="5" y="4" width="14" height="17" rx="2" {...strokeProps} />
        <path d="M9 4.5V3h6v1.5M8.5 10h7M8.5 14h7M8.5 18h4" {...strokeProps} />
      </IconFrame>
    );
  }

  if (care.has(slug)) {
    return (
      <IconFrame className={className}>
        <path d="M12 8.4c2.6-3.6 7-1.6 7 2.1 0 3.4-4.2 6.6-7 8.5-2.8-1.9-7-5.1-7-8.5 0-3.7 4.4-5.7 7-2.1Z" {...strokeProps} />
        <path d="M2.5 20c1.8-3 4.3-4.6 7.2-4.8M21.5 20c-1.8-3-4.3-4.6-7.2-4.8" {...strokeProps} />
      </IconFrame>
    );
  }

  if (documents.has(slug)) {
    return (
      <IconFrame className={className}>
        <path d="M7 3.5h7l4 4V21H7V3.5Z" {...strokeProps} />
        <path d="M14 3.5v4h4M9.5 12h6M9.5 15.5h6" {...strokeProps} />
        <path d="m9.5 19 1.3 1.3 2.2-2.6" {...strokeProps} />
      </IconFrame>
    );
  }

  if (verification.has(slug)) {
    return (
      <IconFrame className={className}>
        <path d="M12 3 19 6v5.2c0 4.4-2.9 7.8-7 9.8-4.1-2-7-5.4-7-9.8V6l7-3Z" {...strokeProps} />
        <path d="m8.7 12 2.1 2.1 4.5-5" {...strokeProps} />
      </IconFrame>
    );
  }

  if (slug === 'floral-styling') {
    return (
      <IconFrame className={className}>
        <circle cx="12" cy="11" r="2" {...strokeProps} />
        <path d="M12 9c-1.5-5 4-5 3 0 5-1 5 4 0 4 1 5-4 5-3 0-5 1-5-4 0-4-1-5 4-5 4 0Z" {...strokeProps} />
        <path d="M12 15v6M12 18c-2-2-4-2-5-1M12 19c2-2 4-2 5-1" {...strokeProps} />
      </IconFrame>
    );
  }

  if (slug === 'relocation-support') {
    return (
      <IconFrame className={className}>
        <path d="M3 7h11v10H3V7ZM14 10h4l3 3v4h-7v-7Z" {...strokeProps} />
        <circle cx="7" cy="18.5" r="1.5" {...strokeProps} />
        <circle cx="18" cy="18.5" r="1.5" {...strokeProps} />
      </IconFrame>
    );
  }

  if (slug === 'pet-care-specialists') {
    return (
      <IconFrame className={className}>
        <circle cx="7" cy="8" r="2" {...strokeProps} />
        <circle cx="17" cy="8" r="2" {...strokeProps} />
        <circle cx="4.5" cy="13" r="1.8" {...strokeProps} />
        <circle cx="19.5" cy="13" r="1.8" {...strokeProps} />
        <path d="M12 11c-3.2 0-6 3-6 5.8 0 2.4 2.1 3.4 4 2.2 1.3-.8 2.7-.8 4 0 1.9 1.2 4 .2 4-2.2 0-2.8-2.8-5.8-6-5.8Z" {...strokeProps} />
      </IconFrame>
    );
  }

  if (slug === 'event-staffing') {
    return (
      <IconFrame className={className}>
        <path d="m12 3 2.2 5 5.3.5-4 3.5 1.2 5.2L12 14.5l-4.7 2.7L8.5 12l-4-3.5L9.8 8 12 3Z" {...strokeProps} />
        <path d="M5 21h14" {...strokeProps} />
      </IconFrame>
    );
  }

  if (slug === 'countries-we-source-from') {
    return (
      <IconFrame className={className}>
        <circle cx="12" cy="12" r="9" {...strokeProps} />
        <path d="M3.5 12h17M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" {...strokeProps} />
      </IconFrame>
    );
  }

  return (
    <IconFrame className={className}>
      <path d="m3 11 9-7 9 7" {...strokeProps} />
      <path d="M5.5 10v10h13V10M9 20v-6h6v6" {...strokeProps} />
      <path d="M15.5 7.3V4.5h2.5v4.8" {...strokeProps} />
    </IconFrame>
  );
}
