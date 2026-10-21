// A new choice is required because the earlier notice covered Google Analytics only.
export const analyticsConsentKey = 'inaya.analytics-consent.v2';

type ClarityCommand = ['consentv2', {
  ad_Storage: 'denied';
  analytics_Storage: 'granted' | 'denied';
}] | ['start'] | ['stop'];

interface ClarityApi {
  (...args: ClarityCommand): void;
  q?: ClarityCommand[];
}

declare global {
  interface Window {
    clarity?: ClarityApi;
  }
}

export function syncClarityConsent(allowed: boolean) {
  if (allowed && !window.clarity) {
    const queuedClarity: ClarityApi = (...args) => {
      (queuedClarity.q ??= []).push(args);
    };
    window.clarity = queuedClarity;
  }
  // Declining before the first grant must not load or initialize a vendor.
  if (!window.clarity) return;
  try {
    window.clarity('consentv2', {
      ad_Storage: 'denied',
      analytics_Storage: allowed ? 'granted' : 'denied',
    });
    // Denied storage alone permits cookieless recording. Stop the recorder too.
    window.clarity(allowed ? 'start' : 'stop');
  } catch { /* A blocked analytics vendor must never interrupt the website. */ }
}
