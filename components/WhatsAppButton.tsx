'use client';

import { siteConfig } from '@/lib/site-config';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg transition hover:scale-110"
    >
      💬
    </a>
  );
}
