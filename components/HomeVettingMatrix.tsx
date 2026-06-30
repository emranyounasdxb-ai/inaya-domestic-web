const items = [
  { key: 'identity', title: 'Identity', text: 'Documentation and eligibility review before service coordination.', icon: 'fingerprint' },
  { key: 'skill', title: 'Skill', text: 'Requirement matching based on household needs and service type.', icon: 'person' },
  { key: 'behaviour', title: 'Behaviour', text: 'Communication style and suitability are considered carefully.', icon: 'brain' },
  { key: 'reference', title: 'Reference', text: 'Past experience and available background details are reviewed.', icon: 'chat' },
  { key: 'matching', title: 'Matching', text: 'The service recommendation is aligned with family expectations.', icon: 'puzzle' }
];

function MatrixIcon({ type }: { type: string }) {
  if (type === 'fingerprint') {
    return (
      <>
        <svg className="matrix-svg matrix-fingerprint" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          <path d="M38 76c0-18 10-34 25-34 13 0 22 10 22 24 0 16-7 26-7 36" />
          <path d="M48 83c0-13 6-25 17-25 8 0 13 6 13 15 0 11-5 18-5 28" />
          <path d="M57 94c0-8 2-17 9-17 5 0 7 4 7 9 0 7-3 11-3 16" />
          <path d="M31 63c2-21 15-39 34-39 18 0 32 14 32 34 0 8-1 14-3 20" />
          <path d="M42 35c6-7 14-11 24-11" />
        </svg>
        <span className="matrix-check">✓</span>
      </>
    );
  }

  if (type === 'person') {
    return (
      <svg className="matrix-svg" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <circle cx="60" cy="39" r="17" />
        <path d="M27 91c8-20 24-30 33-30s25 10 33 30" />
        <path d="M34 96h52" />
        <path d="M37 76l8 8 10-14" />
      </svg>
    );
  }

  if (type === 'brain') {
    return (
      <svg className="matrix-svg" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <path d="M57 25c-12-9-32 0-29 18-14 8-10 29 4 33-3 14 14 25 25 14V25Z" />
        <path d="M63 25c12-9 32 0 29 18 14 8 10 29-4 33 3 14-14 25-25 14V25Z" />
        <path d="M43 48c8 1 12 5 14 12" />
        <path d="M77 48c-8 1-12 5-14 12" />
      </svg>
    );
  }

  if (type === 'chat') {
    return (
      <svg className="matrix-svg" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <path d="M28 35h64v37H58L42 86V72H28V35Z" />
        <circle cx="45" cy="54" r="2" />
        <circle cx="60" cy="54" r="2" />
        <circle cx="75" cy="54" r="2" />
        <path d="M30 96c7-14 18-21 30-21s23 7 30 21" />
      </svg>
    );
  }

  return (
    <svg className="matrix-svg" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path d="M37 31h24v18c8-7 21-1 21 10s-13 17-21 10v20H37V69c-8 7-21 1-21-10s13-17 21-10V31Z" />
      <path d="M67 31h18v21h18v37H67" />
      <path d="M84 69l9 9 15-20" />
    </svg>
  );
}

export default function HomeVettingMatrix() {
  return (
    <section data-vetting-matrix="dark">
      <div className="matrix-eyebrow">Our Process</div>
      <div className="matrix-title-line" />
      <h2>Our 5-Step Vetting Matrix</h2>
      <p className="matrix-subtitle">A comprehensive evaluation framework designed to keep every service recommendation clear, trusted and suitable for your home.</p>
      <div className="matrix-grid">
        {items.map((item, index) => (
          <article key={item.key} className={`matrix-card ${index === 0 ? 'is-active' : ''}`}>
            <div className="matrix-icon-scene">
              <div className="matrix-glow" />
              <div className="matrix-ring"><span /><span /></div>
              <div className="matrix-disc"><MatrixIcon type={item.icon} /></div>
            </div>
            <h3>{item.title}</h3>
            <div className="matrix-mini-line" />
            <p>{item.text}</p>
            <span className="matrix-arrow">›</span>
          </article>
        ))}
      </div>
    </section>
  );
}
