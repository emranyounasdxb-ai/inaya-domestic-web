'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { createMeasurement } from '@/lib/measurement';

// A future owner-approved consent manager must call this API after a real choice.
// No storage-based assumed consent, external provider, script or cookie is added.
declare global {
  interface Window { inayaMeasurementConsent?: (granted: boolean) => void; }
}

let measurement: ReturnType<typeof createMeasurement> | undefined;

export default function Measurement({ enabled, paths, origin }: { enabled: boolean; paths: string[]; origin: string }) {
  const pathname = usePathname();
  useEffect(() => {
    if (!enabled) return;
    measurement ??= createMeasurement({ enabled, paths, origin, sink: (payload) => {
      window.dispatchEvent(new CustomEvent('inaya:measurement', { detail: payload }));
    } });
    const controller = measurement;
    const consent = (granted: boolean) => {
      controller.setConsent(granted);
      if (granted === true) controller.emit('page_view', window.location.pathname);
    };
    window.inayaMeasurementConsent = consent;
    controller.emit('page_view', pathname);

    const click = (event: MouseEvent) => {
      if (!event.isTrusted || !(event.target instanceof Element)) return;
      const link = event.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('tel:')) controller.emit('phone_click', pathname, event);
      else if (/^https:\/\/(?:wa\.me|api\.whatsapp\.com)\//.test(href)) controller.emit('whatsapp_click', pathname, event);
      else {
        // URL is inspected locally only. Never emit the href or its query/message.
        let url: URL;
        try { url = new URL(href, window.location.origin); } catch { return; }
        if (url.origin !== window.location.origin) return;
        const destination = controller.route(url.pathname);
        if (!destination) return;
        const targetLanguage = destination.split('/')[1];
        if (targetLanguage !== pathname.split('/')[1] && (targetLanguage === 'en' || targetLanguage === 'ar')) controller.emit('language_switch', pathname, event, undefined, targetLanguage);
        else if (/\/(contact|booking)\/$/.test(destination) && destination !== controller.route(pathname)) controller.emit(pathname.includes('/services/') && !pathname.includes('/countries-we-source-from') ? 'service_enquiry' : 'contact_cta', pathname, event);
      }
    };
    const input = (event: Event) => {
      if (!event.isTrusted || !(event.target instanceof Element)) return;
      const form = event.target.closest('form');
      const route = controller.route(pathname);
      const formId = route?.split('/')[2];
      if (form && (formId === 'contact' || formId === 'booking' || formId === 'careers')) controller.emit('form_start', pathname, form, formId);
    };
    document.addEventListener('click', click, true);
    document.addEventListener('input', input, true);
    document.addEventListener('change', input, true);
    return () => {
      document.removeEventListener('click', click, true);
      document.removeEventListener('input', input, true);
      document.removeEventListener('change', input, true);
      if (window.inayaMeasurementConsent === consent) delete window.inayaMeasurementConsent;
    };
  }, [enabled, paths, origin, pathname]);
  return null;
}
