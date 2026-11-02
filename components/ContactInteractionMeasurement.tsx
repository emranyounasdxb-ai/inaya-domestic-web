'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { sendGAEvent } from '@next/third-parties/google';

const measurementId = 'G-986STCSR37';

declare global {
  interface Window {
    'ga-disable-G-986STCSR37'?: boolean;
  }
}

type InteractionEvent = 'phone_click' | 'whatsapp_click' | 'language_switch' | 'contact_cta' | 'service_enquiry';

export default function ContactInteractionMeasurement({ locale }: { locale: string }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!event.isTrusted || !(event.target instanceof Element)) return;
      if (window['ga-disable-G-986STCSR37'] !== false || !Array.isArray(window.dataLayer)) return;

      const link = event.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      let eventName: InteractionEvent | null = null;

      if (href.startsWith('tel:')) eventName = 'phone_click';
      else if (/^https:\/\/(?:wa\.me|api\.whatsapp\.com)\//.test(href)) eventName = 'whatsapp_click';
      else {
        let destination: URL;
        try { destination = new URL(href, window.location.origin); } catch { return; }
        if (destination.origin !== window.location.origin) return;

        const targetLocale = destination.pathname.split('/')[1];
        if (targetLocale !== locale && (targetLocale === 'en' || targetLocale === 'ar')) eventName = 'language_switch';
        else {
          const targetPath = destination.pathname.replace(/\/+$/, '');
          const currentPath = pathname.replace(/\/+$/, '');
          if (targetPath !== currentPath && /\/(?:contact|booking)$/.test(targetPath)) {
            eventName = pathname.includes('/services/') && !pathname.includes('/countries-we-source-from')
              ? 'service_enquiry'
              : 'contact_cta';
          }
        }
      }

      if (eventName) {
        sendGAEvent('event', eventName, {
          page_path: pathname,
          page_language: locale,
        });
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [locale, pathname]);

  return null;
}
