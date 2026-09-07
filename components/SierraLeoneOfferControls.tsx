'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { siteConfig } from '@/lib/site-config';
import styles from './SierraLeoneOfferControls.module.css';

const dismissedSessionKey = 'inaya-sierra-leone-offer-dismissed';

const copy = {
  en: {
    eyebrow: 'SPECIAL OFFER',
    heading: 'Sierra Leone Maid Offer',
    body: 'Professional domestic support from Sierra Leone at a special new price.',
    oldLabel: 'Was',
    oldPrice: 'AED 6,500',
    newLabel: 'Now',
    newPrice: 'AED 4,500',
    cta: 'Enquire on WhatsApp',
    close: 'Close Sierra Leone offer',
    backToTop: 'Back to top',
    trustItems: ['Trusted Service', 'Professional Support', 'Available Profiles'],
    message: "Hello INAYA, I’m interested in the Sierra Leone maid offer for AED 4,500. Please share the available profiles and details."
  },
  ar: {
    eyebrow: 'عرض خاص',
    heading: 'عرض العمالة المنزلية من سيراليون',
    body: 'استفد من العرض الخاص على العمالة المنزلية من سيراليون بالسعر الجديد.',
    oldLabel: 'السعر السابق',
    oldPrice: '6,500 درهم',
    newLabel: 'الآن',
    newPrice: '4,500 درهم',
    cta: 'استفسر عبر واتساب',
    close: 'إغلاق عرض سيراليون',
    backToTop: 'العودة إلى الأعلى',
    trustItems: ['خدمة موثوقة', 'دعم احترافي', 'ملفات متاحة'],
    message: 'مرحباً عناية، أرغب في الاستفسار عن عرض العمالة المنزلية من سيراليون بسعر 4,500 درهم. يرجى إرسال الملفات المتاحة والتفاصيل.'
  }
} as const;

type IconName = 'shield' | 'headset' | 'profiles';

export default function SierraLeoneOfferControls({ locale }: { locale: string }) {
  const isArabic = locale === 'ar';
  const content = copy[isArabic ? 'ar' : 'en'];
  const [offerVisible, setOfferVisible] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const whatsappHref = useMemo(
    () => `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(content.message)}`,
    [content.message]
  );

  useEffect(() => {
    const wasDismissed = window.sessionStorage.getItem(dismissedSessionKey) === 'true';

    let frame = 0;
    const updateScrollControls = () => {
      frame = 0;
      const scrollableDistance = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const popupThreshold = Math.min(Math.max(window.innerHeight * 0.75, 480), scrollableDistance * 0.5);
      const backToTopThreshold = Math.min(Math.max(window.innerHeight * 1.25, 900), scrollableDistance * 0.72);

      setOfferVisible(!wasDismissed && scrollableDistance > 120 && window.scrollY >= popupThreshold);
      setBackToTopVisible(scrollableDistance > 120 && window.scrollY >= backToTopThreshold);
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollControls);
    };

    frame = window.requestAnimationFrame(updateScrollControls);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const dismissOffer = () => {
    window.sessionStorage.setItem(dismissedSessionKey, 'true');
    setDismissed(true);
    setOfferVisible(false);
  };

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <>
      {offerVisible && !dismissed ? (
        <aside
          className={styles.offerShell}
          dir={isArabic ? 'rtl' : 'ltr'}
          aria-labelledby="sierra-leone-offer-title"
          data-testid="sierra-leone-offer"
        >
          <div className={styles.offerCard}>
            <button type="button" className={styles.closeButton} onClick={dismissOffer} aria-label={content.close}>
              <CloseIcon />
            </button>

            <div className={styles.brandRow} dir="ltr">
              <Image
                src={isArabic ? '/brand/inaya-arabic-logo.webp' : '/brand/inaya-domestic-workers-logo.webp'}
                alt={isArabic ? 'INAYA Arabic logo' : 'INAYA Domestic Workers'}
                width={isArabic ? 140 : 150}
                height={isArabic ? 60 : 43}
                className={styles.logo}
              />
              <span className={styles.flag} aria-label={isArabic ? 'علم سيراليون' : 'Sierra Leone flag'} role="img">
                <span className={styles.flagGreen} />
                <span className={styles.flagWhite} />
                <span className={styles.flagBlue} />
              </span>
            </div>

            <div className={styles.offerBody}>
              <p className={styles.eyebrow}>{content.eyebrow}</p>
              <h2 id="sierra-leone-offer-title" className={styles.heading}>{content.heading}</h2>
              <p className={styles.description}>{content.body}</p>

              <div className={styles.pricing} aria-label={`${content.oldLabel} ${content.oldPrice}; ${content.newLabel} ${content.newPrice}`}>
                <div className={styles.oldPrice}>
                  <span>{content.oldLabel}</span>
                  <strong dir={isArabic ? 'rtl' : 'ltr'}>{content.oldPrice}</strong>
                </div>
                <div className={styles.newPrice}>
                  <span>{content.newLabel}</span>
                  <strong dir={isArabic ? 'rtl' : 'ltr'}>{content.newPrice}</strong>
                </div>
              </div>

              <a
                className={styles.whatsappButton}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="sierra-leone-whatsapp"
              >
                <WhatsAppIcon />
                <span>{content.cta}</span>
              </a>

              <ul className={styles.trustList} aria-label={isArabic ? 'مزايا العرض' : 'Offer support'}>
                {content.trustItems.map((item, index) => (
                  <li key={item}>
                    <span className={styles.trustIcon}><TrustIcon name={(['shield', 'headset', 'profiles'] as const)[index]} /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      ) : null}

      <button
        type="button"
        className={`${styles.backToTop} ${backToTopVisible ? styles.backToTopVisible : ''} ${offerVisible && !dismissed ? styles.backToTopBesideOffer : ''}`}
        onClick={scrollToTop}
        aria-label={content.backToTop}
        title={content.backToTop}
        aria-hidden={!backToTopVisible}
        tabIndex={backToTopVisible ? 0 : -1}
        data-testid="back-to-top"
      >
        <ArrowUpIcon />
      </button>
    </>
  );
}

function CloseIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17" /></svg>;
}

function ArrowUpIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 11 6-6 6 6M12 5v14" /></svg>;
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.4l1.3-4.7a8.5 8.5 0 1 1 16.2-4Z" />
      <path d="M8.2 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.8 1.9c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.8 1.4 1.9 2.5 3.4 3.2.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.5 0 .3-.2 1.5-1 2.1-.7.6-1.7.8-2.6.6-1.1-.3-2.6-.8-4.4-2.4-1.5-1.3-2.5-3-2.8-4.1-.4-1.2 0-2.6.4-3.1l.8-.3Z" />
    </svg>
  );
}

function TrustIcon({ name }: { name: IconName }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (name === 'shield') return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M12 21s7-3.6 7-9V5.5L12 3 5 5.5V12c0 5.4 7 9 7 9Z" /><path d="m9 12 2 2 4-5" /></svg>;
  if (name === 'headset') return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M6.5 18H6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.5v6ZM17.5 18h.5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-.5v6Z" /><path d="M18 18c-.4 2-2 3-4 3h-2" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="9" cy="8" r="3" /><path d="M3.5 19v-1.5A4.5 4.5 0 0 1 8 13h2a4.5 4.5 0 0 1 4.5 4.5V19" /><path d="M15 5.5a3 3 0 0 1 0 5.5M16 13.5a4 4 0 0 1 4.5 4V19" /></svg>;
}
