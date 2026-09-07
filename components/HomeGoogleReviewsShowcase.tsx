'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  CURATED_GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_VIEW_URL,
  GOOGLE_REVIEWS_WRITE_URL,
  type CuratedGoogleReview
} from '@/lib/curated-google-reviews';

const AUTOPLAY_DELAY_MS = 5500;
const CLONED_REVIEW_COUNT = 3;

const copy = {
  en: {
    eyebrow: 'CUSTOMER STORIES',
    title: 'Google Reviews',
    intro: 'A curated selection of genuine written 5-star reviews shared on INAYA’s Google listing.',
    businessProfile: 'INAYA on Google',
    latest: 'Selected customer reviews',
    googleReview: 'Google review',
    curated: 'Curated written 5-star reviews',
    fiveStars: '5 out of 5 stars',
    carousel: 'carousel',
    previous: 'Previous review',
    next: 'Next review',
    select: 'Show review from',
    view: 'View on Google',
    write: 'Write a Google Review'
  },
  ar: {
    eyebrow: 'قصص العملاء',
    title: 'تقييمات Google',
    intro: 'مجموعة مختارة من تقييمات العملاء الحقيقية المكتوبة من فئة خمس نجوم على ملف عناية في Google.',
    businessProfile: 'عناية على Google',
    latest: 'تقييمات مختارة من العملاء',
    googleReview: 'تقييم على Google',
    curated: 'تقييمات مكتوبة مختارة من فئة خمس نجوم',
    fiveStars: '5 من 5 نجوم',
    carousel: 'عارض شرائح',
    previous: 'التقييم السابق',
    next: 'التقييم التالي',
    select: 'عرض تقييم من',
    view: 'عرض على Google',
    write: 'اكتب تقييماً على Google'
  }
};

function GoogleG({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" role="img" aria-label="Google">
      <path fill="#4285F4" d="M21.35 12.2c0-.71-.06-1.23-.19-1.78H12v3.37h5.38a4.6 4.6 0 0 1-2 3.02v2.35h3.23c1.89-1.74 2.74-4.3 2.74-6.96Z" />
      <path fill="#34A853" d="M12 21.7c2.7 0 4.96-.89 6.61-2.54l-3.23-2.35c-.9.6-2.04.95-3.38.95-2.6 0-4.81-1.76-5.6-4.12H3.07v2.43A9.99 9.99 0 0 0 12 21.7Z" />
      <path fill="#FBBC05" d="M6.4 13.64A6 6 0 0 1 6.08 12c0-.57.1-1.12.31-1.64V7.93H3.07A9.99 9.99 0 0 0 2 12c0 1.46.38 2.84 1.07 4.07l3.33-2.43Z" />
      <path fill="#EA4335" d="M12 6.24c1.47 0 2.78.5 3.82 1.49l2.86-2.87A9.6 9.6 0 0 0 12 2.3a9.99 9.99 0 0 0-8.93 5.63l3.32 2.43C7.19 8 9.4 6.24 12 6.24Z" />
    </svg>
  );
}

function Stars({ label }: { label: string }) {
  return (
    <span className="google-review-stars" aria-label={label}>
      <span aria-hidden="true">★★★★★</span>
    </span>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function ReviewAvatar({ name, photoUrl = '' }: { name: string; photoUrl?: string }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(photoUrl) && !photoFailed;

  return (
    <div className="google-review-avatar">
      {showPhoto ? (
        // Google supplies reviewer photos dynamically; raw images keep static export compatible without broad remote-host configuration.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photoUrl} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setPhotoFailed(true)} />
      ) : (
        <span aria-hidden="true">{initials(name) || 'G'}</span>
      )}
    </div>
  );
}

function ReviewCard({ review, locale, sourceLabel, starLabel, clone = false }: {
  review: CuratedGoogleReview;
  locale: 'en' | 'ar';
  sourceLabel: string;
  starLabel: string;
  clone?: boolean;
}) {
  return (
    <article
      className="google-review-card"
      data-review-card
      data-review-id={review.id}
      data-carousel-clone={clone ? 'true' : 'false'}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      aria-hidden={clone || undefined}
    >
      <div className="google-review-card-head">
        <ReviewAvatar name={review.name} photoUrl={review.profilePhotoUrl} />
        <h4>{review.name}</h4>
        <GoogleG className="google-card-source" />
      </div>
      <Stars label={starLabel} />
      <blockquote dir="auto">{review.text}</blockquote>
      <p className="google-source-label"><GoogleG /> {sourceLabel}</p>
    </article>
  );
}

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function HomeGoogleReviewsShowcase({ locale }: { locale: string }) {
  const lang = locale === 'ar' ? 'ar' : 'en';
  const t = copy[lang];
  const reviews = CURATED_GOOGLE_REVIEWS;
  const carouselItems = [...reviews, ...reviews.slice(0, CLONED_REVIEW_COUNT)];
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const activeIndexRef = useRef(0);
  const transitionLockRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1200px)');
    const tablet = window.matchMedia('(min-width: 720px)');
    const updateVisibleCount = () => setVisibleCount(desktop.matches ? 3 : tablet.matches ? 2 : 1);

    updateVisibleCount();
    desktop.addEventListener('change', updateVisibleCount);
    tablet.addEventListener('change', updateVisibleCount);
    return () => {
      desktop.removeEventListener('change', updateVisibleCount);
      tablet.removeEventListener('change', updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => {
      setReducedMotion(media.matches);
      if (media.matches) {
        transitionLockRef.current = false;
        setIsAnimating(false);
        setTrackIndex(activeIndexRef.current);
      }
    };

    updateMotionPreference();
    media.addEventListener('change', updateMotionPreference);
    return () => media.removeEventListener('change', updateMotionPreference);
  }, []);

  const setCurrentReview = useCallback((index: number) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  const move = useCallback((direction: -1 | 1) => {
    if (transitionLockRef.current || reviews.length <= 1) return;

    const current = activeIndexRef.current;
    const next = (current + direction + reviews.length) % reviews.length;

    if (reducedMotion) {
      setCurrentReview(next);
      setTrackIndex(next);
      return;
    }

    transitionLockRef.current = true;

    if (direction === -1 && current === 0) {
      setIsAnimating(false);
      setTrackIndex(reviews.length);
      requestAnimationFrame(() => {
        trackRef.current?.getBoundingClientRect();
        requestAnimationFrame(() => {
          setCurrentReview(next);
          setIsAnimating(true);
          setTrackIndex(reviews.length - 1);
        });
      });
      return;
    }

    setCurrentReview(next);
    setIsAnimating(true);
    setTrackIndex(direction === 1 ? current + 1 : current - 1);
  }, [reducedMotion, reviews.length, setCurrentReview]);

  const selectReview = (index: number) => {
    if (index === activeIndexRef.current || transitionLockRef.current) return;
    if (index === 0 && activeIndexRef.current === reviews.length - 1) {
      move(1);
      return;
    }
    if (index === reviews.length - 1 && activeIndexRef.current === 0) {
      move(-1);
      return;
    }

    if (reducedMotion) {
      setCurrentReview(index);
      setTrackIndex(index);
      return;
    }

    transitionLockRef.current = true;
    setCurrentReview(index);
    setIsAnimating(true);
    setTrackIndex(index);
  };

  const paused = isHovering || isFocusWithin;

  useEffect(() => {
    if (paused || reducedMotion || isAnimating || reviews.length <= 1) return;
    const timeout = window.setTimeout(() => move(1), AUTOPLAY_DELAY_MS);
    return () => window.clearTimeout(timeout);
  }, [activeIndex, isAnimating, move, paused, reducedMotion, reviews.length]);

  const offsetPercent = (trackIndex * 100) / visibleCount;
  const offsetGapRem = (trackIndex * 0.75) / visibleCount;

  return (
    <section className="google-reviews-section" aria-labelledby="google-reviews-title">
      <div className="google-reviews-shell">
        <header className="google-reviews-intro-block">
          <div className="google-reviews-brandline">
            <span className="google-g-badge"><GoogleG /></span>
            <div>
              <p className="google-reviews-eyebrow">{t.eyebrow}</p>
              <p className="google-reviews-profile">{t.businessProfile}</p>
            </div>
          </div>

          <h2 id="google-reviews-title" className="google-reviews-title">{t.title}</h2>
          <p className="google-reviews-intro">{t.intro}</p>

          <div className="google-curated-note">
            <GoogleG />
            <div>
              <strong>{t.curated}</strong>
              <span>{t.businessProfile}</span>
            </div>
          </div>

          <div className="google-review-actions">
            <a className="google-review-primary" href={GOOGLE_REVIEWS_WRITE_URL} target="_blank" rel="noopener noreferrer">
              <GoogleG />
              <span>{t.write}</span>
              <ExternalArrow />
            </a>
            <a className="google-review-secondary" href={GOOGLE_REVIEWS_VIEW_URL} target="_blank" rel="noopener noreferrer">
              <span>{t.view}</span>
              <ExternalArrow />
            </a>
          </div>
        </header>

        <div className="google-reviews-showcase">
          <div className="google-reviews-panel-header">
            <div>
              <span className="google-panel-kicker">{t.googleReview}</span>
              <h3>{t.latest}</h3>
            </div>
            <GoogleG className="google-panel-mark" />
          </div>

          <div
            className="google-review-carousel"
            role="region"
            aria-roledescription={t.carousel}
            aria-label={t.latest}
            tabIndex={0}
            data-active-index={activeIndex}
            data-visible-count={visibleCount}
            data-autoplay-paused={paused || reducedMotion ? 'true' : 'false'}
            data-reduced-motion={reducedMotion ? 'true' : 'false'}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onFocusCapture={() => setIsFocusWithin(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocusWithin(false);
            }}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') event.preventDefault();
              if (event.key === 'ArrowLeft') move(lang === 'ar' ? 1 : -1);
              if (event.key === 'ArrowRight') move(lang === 'ar' ? -1 : 1);
            }}
            onTouchStart={(event) => {
              const touch = event.touches[0];
              touchStartRef.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
            }}
            onTouchEnd={(event) => {
              const start = touchStartRef.current;
              const touch = event.changedTouches[0];
              touchStartRef.current = null;
              if (!start || !touch) return;
              const deltaX = touch.clientX - start.x;
              const deltaY = touch.clientY - start.y;
              if (Math.abs(deltaX) >= 48 && Math.abs(deltaX) > Math.abs(deltaY)) move(deltaX < 0 ? 1 : -1);
            }}
            onTouchCancel={() => { touchStartRef.current = null; }}
          >
            <div className="google-review-viewport">
              <div
                ref={trackRef}
                className={`google-review-track ${isAnimating ? 'is-animating' : ''}`}
                data-track-index={trackIndex}
                onTransitionEnd={(event) => {
                  if (event.target !== event.currentTarget || event.propertyName !== 'transform') return;
                  setIsAnimating(false);
                  transitionLockRef.current = false;
                  if (trackIndex >= reviews.length) setTrackIndex(0);
                }}
                style={{ transform: `translate3d(calc(-${offsetPercent}% - ${offsetGapRem}rem), 0, 0)` }}
              >
                {carouselItems.map((review, index) => (
                  <ReviewCard
                    key={`${review.id}-${index}`}
                    review={review}
                    locale={lang}
                    sourceLabel={t.googleReview}
                    starLabel={t.fiveStars}
                    clone={index >= reviews.length}
                  />
                ))}
              </div>
            </div>

            <div className="google-carousel-controls">
              <button type="button" onClick={() => move(-1)} aria-label={t.previous}>{lang === 'ar' ? '→' : '←'}</button>
              <div className="google-review-dots" aria-label={`${activeIndex + 1} / ${reviews.length}`}>
                {reviews.map((review, index) => (
                  <button
                    key={review.id}
                    type="button"
                    className={index === activeIndex ? 'is-active' : ''}
                    onClick={() => selectReview(index)}
                    aria-label={`${t.select} ${review.name}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  />
                ))}
              </div>
              <button type="button" onClick={() => move(1)} aria-label={t.next}>{lang === 'ar' ? '←' : '→'}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
