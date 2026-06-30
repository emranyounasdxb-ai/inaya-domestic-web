'use client';

import { useEffect, useMemo, useState } from 'react';

const fallbackReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJxzRGAUJZXz4R8zN5ye8vn_M';

type ReviewItem = {
  name: string;
  time?: string;
  text?: string;
  rating?: number;
  profilePhoto?: string;
};

type ReviewPayload = {
  live?: boolean;
  placeName?: string;
  rating?: number;
  totalReviews?: number | null;
  reviewUrl?: string;
  reviews?: ReviewItem[];
};

const fallbackReviews: ReviewItem[] = [
  { name: 'Frasha Zlwa', time: '19 hours ago', text: 'تعامل الموظفات جيد راقي خصوصاً فراولة ومهري', rating: 5 },
  { name: 'Ekram Abdu Ekuti', time: '20 hours ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 },
  { name: 'Wine su Chit', time: '21 hours ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 },
  { name: 'Yehya Shawky', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 },
  { name: 'Sara El alaoui', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 },
  { name: 'Chrizanne', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 },
  { name: 'Olive raj Singh', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 }
];

const fallbackPayload: Required<Pick<ReviewPayload, 'live' | 'placeName' | 'rating' | 'reviewUrl' | 'reviews'>> & {
  totalReviews: number | null;
} = {
  live: false,
  placeName: 'INAYA Domestic Workers Ajman',
  rating: 5,
  totalReviews: null,
  reviewUrl: fallbackReviewUrl,
  reviews: fallbackReviews
};

const copy = {
  en: {
    eyebrow: 'CLIENT PERSPECTIVES',
    titleA: 'Google Reviews',
    titleB: 'from Clients',
    intro: 'Real feedback from families and clients who trust INAYA Domestic Workers Ajman for professional service and peace of mind.',
    badge: 'Google Business Profile',
    live: 'Live Updates',
    ready: 'Live Sync Ready',
    rating: 'Google Business Profile highlights',
    write: 'Write a Google Review',
    view: 'View on Google',
    connected: 'Connected to Google Business Profile',
    verified: 'Verified Google Review',
    previous: 'Previous review',
    next: 'Next review'
  },
  ar: {
    eyebrow: 'آراء العملاء',
    titleA: 'تقييمات Google',
    titleB: 'من العملاء',
    intro: 'آراء حقيقية من العملاء الذين يثقون بعناية للعمالة المنزلية عجمان للحصول على خدمة مهنية وراحة بال.',
    badge: 'ملف Google التجاري',
    live: 'تحديثات مباشرة',
    ready: 'جاهز للمزامنة',
    rating: 'مختارات من ملف Google التجاري',
    write: 'اكتب تقييماً على Google',
    view: 'عرض على Google',
    connected: 'متصل بملف Google التجاري',
    verified: 'تقييم موثق على Google',
    previous: 'التقييم السابق',
    next: 'التقييم التالي'
  }
};

function initials(name: string) {
  return (
    name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'G'
  );
}

function normalizeReviews(reviews?: ReviewItem[]) {
  const fiveStarReviews = (reviews || []).filter((review) => (review.rating || 0) >= 5);
  return fiveStarReviews.length ? fiveStarReviews : fallbackReviews;
}

function GoogleIcon({ className = '' }: { className?: string }) {
  return (
    <span className={`google-icon ${className}`} aria-hidden="true">
      G
    </span>
  );
}

function RatingStars({ rating = 5, className = '' }: { rating?: number; className?: string }) {
  const roundedRating = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <span className={`google-review-stars ${className}`} aria-label={`${roundedRating} out of 5 stars`}>
      {'★'.repeat(roundedRating)}
      {'☆'.repeat(5 - roundedRating)}
    </span>
  );
}

function ReviewAvatar({ review, compact = false }: { review: ReviewItem; compact?: boolean }) {
  return (
    <div className={compact ? 'google-mini-avatar' : 'google-review-avatar'}>
      {review.profilePhoto ? <img src={review.profilePhoto} alt={review.name} loading="lazy" /> : <span>{initials(review.name)}</span>}
      {!compact ? <span className="google-review-check" aria-hidden="true">✓</span> : null}
    </div>
  );
}

export default function HomeGoogleReviews({ locale }: { locale: string }) {
  const lang = locale === 'ar' ? 'ar' : 'en';
  const t = copy[lang];
  const [payload, setPayload] = useState<ReviewPayload>(fallbackPayload);
  const reviews = useMemo(() => normalizeReviews(payload.reviews), [payload.reviews]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex % reviews.length];
  const reviewUrl = payload.reviewUrl || fallbackReviewUrl;
  const rating = Number(payload.rating || fallbackPayload.rating);
  const ratingText = payload.totalReviews ? `${t.rating} • ${payload.totalReviews}+ reviews` : t.rating;
  const liveText = payload.live ? t.live : t.ready;
  const miniReviews = [1, 2, 3].map((offset) => reviews[(activeIndex + offset) % reviews.length]);

  useEffect(() => {
    let isMounted = true;

    fetch('/api/google-reviews', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error('Google reviews request failed');
        return response.json() as Promise<ReviewPayload>;
      })
      .then((nextPayload) => {
        if (isMounted) setPayload(nextPayload);
      })
      .catch(() => {
        if (isMounted) setPayload(fallbackPayload);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [reviews.length]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [reviews.length]);

  const goToReview = (index: number) => {
    setActiveIndex((index + reviews.length) % reviews.length);
  };

  return (
    <section className="google-reviews-section" aria-labelledby="google-reviews-title">
      <div className="google-reviews-shell">
        <div className="google-reviews-left">
          <p className="google-reviews-eyebrow">{t.eyebrow}</p>
          <h2 id="google-reviews-title" className="google-reviews-title">
            <span>{t.titleA}</span>
            <em>{t.titleB}</em>
          </h2>
          <p className="google-reviews-intro">{t.intro}</p>

          <div className="google-rating-summary">
            <div className="google-rating-score">{rating.toFixed(1)}</div>
            <div className="google-rating-divider" aria-hidden="true" />
            <div>
              <RatingStars rating={rating} />
              <p>{ratingText}</p>
            </div>
          </div>

          <a className="google-review-cta" href={reviewUrl} target="_blank" rel="noopener noreferrer">
            <GoogleIcon />
            <span>{t.write}</span>
            <span aria-hidden="true">→</span>
          </a>

          <div className="google-reviews-sync">
            <span>◇ {t.connected}</span>
            <span>
              <i className="google-live-dot" aria-hidden="true" />
              {liveText}
            </span>
          </div>
        </div>

        <div className="google-reviews-panel">
          <div className="google-reviews-panel-header">
            <div className="google-business-title">
              <GoogleIcon />
              <span>{t.badge}</span>
            </div>
            <div className="google-live-pill">
              <i className="google-live-dot" aria-hidden="true" />
              {liveText}
            </div>
          </div>

          <article className="google-feature-card" key={`${activeReview.name}-${activeIndex}`} aria-live="polite">
            <div className="google-feature-head">
              <ReviewAvatar review={activeReview} />
              <div className="google-reviewer-meta">
                <h3>{activeReview.name}</h3>
                <p>{activeReview.time || 'Google review'}</p>
              </div>
              <RatingStars rating={activeReview.rating || 5} className="google-feature-stars" />
            </div>
            <p className="google-feature-text">{activeReview.text || 'Rated INAYA Domestic Workers Ajman 5 stars on Google.'}</p>
            <div className="google-verified-row">
              <GoogleIcon />
              <span>{t.verified}</span>
            </div>
          </article>

          <div className="google-mini-grid">
            {miniReviews.map((review, index) => (
              <article className="google-mini-card" key={`${review.name}-${index}`}>
                <div className="google-mini-top">
                  <ReviewAvatar review={review} compact />
                  <div>
                    <h4>{review.name}</h4>
                    <small>{review.time || 'Google review'}</small>
                  </div>
                </div>
                <RatingStars rating={review.rating || 5} className="google-mini-stars" />
                <p>{review.text || 'Rated INAYA Domestic Workers Ajman 5 stars on Google.'}</p>
              </article>
            ))}
          </div>

          <div className="google-carousel-footer">
            <div className="google-carousel-nav">
              <button type="button" className="google-nav-button" onClick={() => goToReview(activeIndex - 1)} aria-label={t.previous}>
                ‹
              </button>
              <div className="google-review-dots" aria-label="Google review carousel">
                {reviews.map((review, index) => (
                  <button
                    type="button"
                    key={`${review.name}-${index}`}
                    className={`google-review-dot ${index === activeIndex ? 'is-active' : ''}`}
                    onClick={() => goToReview(index)}
                    aria-label={`Show review ${index + 1}`}
                    aria-current={index === activeIndex}
                  />
                ))}
              </div>
              <button type="button" className="google-nav-button" onClick={() => goToReview(activeIndex + 1)} aria-label={t.next}>
                ›
              </button>
            </div>

            <a className="google-view-button" href={reviewUrl} target="_blank" rel="noopener noreferrer">
              {t.view}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="google-progress-line" aria-hidden="true">
            <span style={{ width: `${((activeIndex + 1) / reviews.length) * 100}%` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
