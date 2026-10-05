'use client';

import { useEffect, useRef } from 'react';

export default function LocationMap({ src, title }: { src: string; title: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const loadMap = () => { frame.src = src; };
    if (typeof IntersectionObserver === 'undefined') {
      loadMap();
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        loadMap();
        observer.disconnect();
      }
    }, { rootMargin: '200px 0px' });
    observer.observe(frame);
    return () => observer.disconnect();
  }, [src]);

  const attributes = {
    title,
    width: '100%',
    height: '100%',
    style: { border: 0 },
    allowFullScreen: true,
    loading: 'lazy' as const,
    referrerPolicy: 'no-referrer-when-downgrade' as const,
    className: 'h-[320px] w-full sm:h-[420px]'
  };

  return (
    <>
      <iframe ref={frameRef} data-inaya-location-map {...attributes} />
      <noscript>
        <style>{'[data-inaya-location-map]{display:none}'}</style>
        <iframe src={src} {...attributes} />
      </noscript>
    </>
  );
}
