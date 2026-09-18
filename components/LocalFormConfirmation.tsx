'use client';

import { useEffect, useRef } from 'react';

// Mounted only after local validation. Never submits or transmits form data.
export default function LocalFormConfirmation({ message, symbol }: { message: string; symbol: string }) {
  const confirmation = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = confirmation.current;
    if (!node) return;
    // Replacing the tall form changes the document's scroll range. Let that
    // layout commit and its scroll anchoring settle before centering the status.
    // Frame scheduling is lifecycle coordination, not a timed delay or retry.
    const frame = window.requestAnimationFrame(() => {
      node.focus({ preventScroll: true });
      node.scrollIntoView({
        block: 'center',
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={confirmation} tabIndex={-1} role="status" aria-live="polite" aria-atomic="true"
      className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center text-green-800">
      <div className="mb-2 text-4xl" aria-hidden="true">{symbol}</div>
      <p className="font-medium">{message}</p>
    </div>
  );
}
