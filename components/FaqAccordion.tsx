'use client';

import { useState } from 'react';

type Item = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-100 bg-white">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start font-medium text-gray-900"
          >
            <span>{item.q}</span>
            <span className="text-primary-700">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <p className="px-6 pb-5 text-sm text-gray-600">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}
