'use client';

import { useEffect, useRef, useState } from 'react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Link from 'next/link';
import { analyticsConsentKey as consentKey, syncClarityConsent } from '@/lib/analytics-consent';

const measurementId = 'G-986STCSR37';
const settingsEvent = 'inaya:analytics-settings';

const labels = {
  en: {
    title: 'Your cookie preferences',
    description: 'With your permission, we use Google Analytics and Microsoft Clarity to understand page visits and masked interactions, including heatmaps and session recordings. You can reject analytics and still use the site.',
    privacy: 'Privacy policy',
    accept: 'Accept analytics',
    reject: 'Reject analytics',
    settings: 'Cookie settings',
    close: 'Keep my current choice',
  },
  ar: {
    title: 'تفضيلات ملفات تعريف الارتباط',
    description: 'بموافقتك، نستخدم Google Analytics وMicrosoft Clarity لفهم زيارات الصفحات والتفاعلات مع إخفاء البيانات، بما يشمل الخرائط الحرارية وتسجيلات الجلسات. يمكنك رفض التحليلات ومواصلة استخدام الموقع.',
    privacy: 'سياسة الخصوصية',
    accept: 'السماح بالتحليلات',
    reject: 'رفض التحليلات',
    settings: 'إعدادات ملفات تعريف الارتباط',
    close: 'الاحتفاظ بخياري الحالي',
  },
};

declare global {
  interface Window {
    inayaMeasurementConsent?: (granted: boolean) => void;
    'ga-disable-G-986STCSR37'?: boolean;
  }
}

export function CookieSettingsButton({ locale }: { locale: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(settingsEvent))} className="rounded-sm transition hover:text-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700">
      {labels[locale === 'ar' ? 'ar' : 'en'].settings}
    </button>
  );
}

export default function GoogleAnalyticsConsent({ locale }: { locale: string }) {
  const [granted, setGranted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hasChoice, setHasChoice] = useState(false);
  const returnFocus = useRef<HTMLElement | null>(null);
  const acceptButton = useRef<HTMLButtonElement>(null);
  const copy = labels[locale === 'ar' ? 'ar' : 'en'];

  const dismiss = () => {
    setVisible(false);
    returnFocus.current?.focus({ preventScroll: true });
    returnFocus.current = null;
  };

  useEffect(() => {
    const restore = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem(consentKey); } catch { /* Ask again when storage is unavailable. */ }
      const known = saved === 'granted' || saved === 'denied';
      window['ga-disable-G-986STCSR37'] = saved !== 'granted';
      syncClarityConsent(saved === 'granted');
      setGranted(saved === 'granted');
      setHasChoice(known);
      setVisible(!known);
    };
    const consent = (allowed: boolean) => {
      const next = allowed === true;
      window['ga-disable-G-986STCSR37'] = !next;
      syncClarityConsent(next);
      try { localStorage.setItem(consentKey, next ? 'granted' : 'denied'); } catch { /* The choice still applies to this document. */ }
      setGranted(next);
      setHasChoice(true);
      setVisible(false);
      returnFocus.current?.focus({ preventScroll: true });
      returnFocus.current = null;
    };
    const openSettings = () => {
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setVisible(true);
    };
    const syncChoice = (event: StorageEvent) => {
      if (event.key === consentKey || event.key === null) restore();
    };
    window.inayaMeasurementConsent = consent;
    restore();
    window.addEventListener(settingsEvent, openSettings);
    window.addEventListener('storage', syncChoice);
    return () => {
      if (window.inayaMeasurementConsent === consent) delete window.inayaMeasurementConsent;
      window.removeEventListener(settingsEvent, openSettings);
      window.removeEventListener('storage', syncChoice);
    };
  }, []);

  useEffect(() => {
    if (visible && returnFocus.current) acceptButton.current?.focus({ preventScroll: true });
  }, [visible]);

  return (
    <>
      {granted ? <>
        <GoogleAnalytics gaId={measurementId} />
        <GoogleTagManager gtmId="GTM-MDBQLVGJ" dataLayerName="inayaClarityDataLayer" />
      </> : null}
      {visible ? (
        <section role="region" aria-labelledby="analytics-consent-title" aria-describedby="analytics-consent-description" dir={locale === 'ar' ? 'rtl' : 'ltr'} className="fixed inset-x-0 bottom-0 z-[110] max-h-[70dvh] overflow-y-auto border-t border-accent-500/40 bg-[#fbfaf7] px-4 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-primary-900 shadow-[0_-8px_40px_rgba(7,22,74,0.12)] sm:px-6" onKeyDown={(event) => { if (event.key === 'Escape' && hasChoice) dismiss(); }}>
          <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            <div className="min-w-0 flex-1">
              <h2 id="analytics-consent-title" className="text-base font-bold sm:text-lg">{copy.title}</h2>
              <p id="analytics-consent-description" className="mt-2 text-sm leading-6 text-primary-900/80">
                {copy.description}{' '}
                <Link href={`/${locale}/privacy-policy/`} className="font-semibold text-primary-900 underline decoration-accent-700 underline-offset-4">{copy.privacy}</Link>
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 lg:w-[340px]">
              <div className="grid grid-cols-2 gap-3">
                <button ref={acceptButton} type="button" onClick={() => window.inayaMeasurementConsent?.(true)} className="min-h-12 rounded-full border border-primary-900 bg-primary-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700">{copy.accept}</button>
                <button type="button" onClick={() => window.inayaMeasurementConsent?.(false)} className="min-h-12 rounded-full border border-primary-900/40 bg-white px-4 py-3 text-sm font-semibold text-primary-900 transition hover:bg-accent-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700">{copy.reject}</button>
              </div>
              {hasChoice ? <button type="button" onClick={dismiss} className="self-center rounded-sm text-sm underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700">{copy.close}</button> : null}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
