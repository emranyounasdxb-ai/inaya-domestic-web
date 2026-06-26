'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gsap?: any;
  }
}

function loadGsap() {
  return new Promise<any>((resolve, reject) => {
    if (window.gsap) {
      resolve(window.gsap);
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>('script[data-gsap-loader]');
    if (existing) {
      existing.addEventListener('load', () => resolve(window.gsap));
      existing.addEventListener('error', reject);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';
    script.async = true;
    script.dataset.gsapLoader = 'true';
    script.onload = () => resolve(window.gsap);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function splitText(label: HTMLElement) {
  const original = label.textContent || '';
  const words = original.trim().split(/\s+/);
  label.textContent = '';

  words.forEach((word, wordIndex) => {
    const wordWrap = document.createElement('span');
    wordWrap.className = 'trust-gsap-word';

    Array.from(word).forEach((letter) => {
      const letterSpan = document.createElement('span');
      letterSpan.className = 'trust-gsap-letter';
      letterSpan.textContent = letter;
      wordWrap.appendChild(letterSpan);
    });

    label.appendChild(wordWrap);
    if (wordIndex < words.length - 1) label.appendChild(document.createTextNode(' '));
  });

  return original;
}

export default function TrustTextGsap() {
  useEffect(() => {
    let timeline: any;
    let hoverTween: any;
    let active = true;
    let originalText = '';
    let cleanupHover: (() => void) | undefined;

    loadGsap().then((gsap) => {
      if (!active) return;
      const label = document.querySelector<HTMLElement>('main > div > section:nth-of-type(2) p:first-child');
      if (!label) return;

      const isArabic = document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';
      originalText = label.textContent || '';

      timeline = gsap.timeline({ defaults: { ease: 'power4.out' } });
      gsap.set(label, { opacity: 0, y: 10, '--trust-sheen-x': '-60%' });

      if (isArabic) {
        label.textContent = 'موثوق ومنظم مع جهات الإمارات';
        label.style.direction = 'rtl';
        label.style.unicodeBidi = 'isolate';

        timeline
          .to(label, { opacity: 1, y: 0, duration: 0.7 })
          .to(label, { '--trust-sheen-x': '155%', duration: 1.35, ease: 'power2.inOut' }, '-=0.25')
          .to(label, { y: -1, duration: 1.7, repeat: -1, yoyo: true, ease: 'sine.inOut' }, '-=0.1');

        const replayHover = () => {
          if (hoverTween) hoverTween.kill();
          hoverTween = gsap.fromTo(label, { '--trust-sheen-x': '-60%' }, { '--trust-sheen-x': '155%', duration: 1.05, ease: 'power2.inOut' });
        };
        label.addEventListener('mouseenter', replayHover);
        cleanupHover = () => label.removeEventListener('mouseenter', replayHover);
        return;
      }

      originalText = splitText(label);
      const letters = label.querySelectorAll<HTMLElement>('.trust-gsap-letter');
      const words = label.querySelectorAll<HTMLElement>('.trust-gsap-word');

      gsap.set(label, { opacity: 1, '--trust-line-scale': 0, '--trust-sheen-x': '-60%' });
      gsap.set(words, { perspective: 700 });
      gsap.set(letters, {
        yPercent: 135,
        opacity: 0,
        rotateX: -75,
        filter: 'blur(7px)',
        transformOrigin: '50% 100%'
      });

      timeline
        .to(letters, {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          filter: 'blur(0px)',
          duration: 1.18,
          stagger: { each: 0.032, from: 'start' }
        })
        .to(label, { '--trust-line-scale': 1, duration: 0.9, ease: 'power3.inOut' }, '-=0.45')
        .to(label, { '--trust-sheen-x': '155%', duration: 1.45, ease: 'power2.inOut' }, '-=0.55')
        .to(label, { y: -1, duration: 1.7, repeat: -1, yoyo: true, ease: 'sine.inOut' }, '-=0.15');

      const replayHover = () => {
        if (hoverTween) hoverTween.kill();
        hoverTween = gsap.fromTo(label, { '--trust-sheen-x': '-60%' }, { '--trust-sheen-x': '155%', duration: 1.05, ease: 'power2.inOut' });
        gsap.fromTo(letters, { y: 0 }, { y: -2, duration: 0.32, stagger: 0.006, yoyo: true, repeat: 1, ease: 'sine.inOut' });
      };

      label.addEventListener('mouseenter', replayHover);
      cleanupHover = () => label.removeEventListener('mouseenter', replayHover);
    });

    return () => {
      active = false;
      if (cleanupHover) cleanupHover();
      if (timeline) timeline.kill();
      if (hoverTween) hoverTween.kill();
      const label = document.querySelector<HTMLElement>('main > div > section:nth-of-type(2) p:first-child');
      if (label && originalText) label.textContent = originalText;
    };
  }, []);

  return null;
}
