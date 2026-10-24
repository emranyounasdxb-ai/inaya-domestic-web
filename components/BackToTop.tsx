'use client';

import { useEffect, useState } from 'react';
import styles from './BackToTop.module.css';

export default function BackToTop({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const label = locale === 'ar' ? 'العودة إلى الأعلى' : 'Back to top';

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const threshold = Math.min(Math.max(window.innerHeight * 1.25, 900), distance * 0.72);
      setVisible(distance > 120 && window.scrollY >= threshold);
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    frame = window.requestAnimationFrame(update);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return <button type="button" className={`${styles.button} ${visible ? styles.visible : ''}`}
    onClick={scrollToTop} aria-label={label} title={label} aria-hidden={!visible}
    tabIndex={visible ? 0 : -1} data-testid="back-to-top">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 11 6-6 6 6M12 5v14" /></svg>
  </button>;
}
