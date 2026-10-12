'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

const measurementId = 'G-986STCSR37';
const consentKey = 'inaya.analytics-consent';

declare global {
  interface Window {
    inayaMeasurementConsent?: (granted: boolean) => void;
    'ga-disable-G-986STCSR37'?: boolean;
  }
}

export default function GoogleAnalyticsConsent() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    // Restore only a real choice recorded by this hook; absence stays denied.
    let saved = false;
    try { saved = localStorage.getItem(consentKey) === 'granted'; } catch { /* Storage may be unavailable. */ }
    window['ga-disable-G-986STCSR37'] = !saved;
    const consent = (allowed: boolean) => {
      const next = allowed === true;
      window['ga-disable-G-986STCSR37'] = !next;
      try { localStorage.setItem(consentKey, next ? 'granted' : 'denied'); } catch { /* The choice still applies to this document. */ }
      setGranted(next);
    };
    window.inayaMeasurementConsent = consent;
    // Updating state in a callback also lets the shared consent hook handle
    // later grants/revocations without manual navigation or page-view events.
    if (saved) consent(true);
    return () => {
      if (window.inayaMeasurementConsent === consent) delete window.inayaMeasurementConsent;
    };
  }, []);

  return granted ? <GoogleAnalytics gaId={measurementId} /> : null;
}
