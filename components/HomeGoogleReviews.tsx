const fallbackReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJxzRGAUJZXz4R8zN5ye8vn_M';

type ReviewItem = {
  name: string;
  time?: string;
  text?: string;
  rating?: number;
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

const copy = {
  en: {
    eyebrow: 'CLIENT PERSPECTIVES',
    titleA: 'Google Reviews',
    titleB: 'from Clients',
    intro: 'Real feedback from families and clients who trust INAYA Domestic Workers Ajman for professional service and peace of mind.',
    badge: 'Google Business Profile',
    ready: 'Review Highlights',
    rating: 'Google Business Profile highlights',
    write: 'Write a Google Review',
    view: 'View on Google',
    connected: 'Google Business Profile',
    verified: 'Verified Google Review'
  },
  ar: {
    eyebrow: 'آراء العملاء',
    titleA: 'تقييمات Google',
    titleB: 'من العملاء',
    intro: 'آراء حقيقية من العملاء الذين يثقون بعناية للعمالة المنزلية عجمان للحصول على خدمة مهنية وراحة بال.',
    badge: 'ملف Google التجاري',
    ready: 'مختارات التقييمات',
    rating: 'مختارات من ملف Google التجاري',
    write: 'اكتب تقييماً على Google',
    view: 'عرض على Google',
    connected: 'ملف Google التجاري',
    verified: 'تقييم موثق على Google'
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
      <span>{initials(review.name)}</span>
      {!compact ? <span className="google-review-check" aria-hidden="true">✓</span> : null}
    </div>
  );
}

export default function HomeGoogleReviews({ locale }: { locale: string }) {
  const lang = locale === 'ar' ? 'ar' : 'en';
  const t = copy[lang];
  const reviews = fallbackReviews;
  const activeReview = reviews[0];
  const miniReviews = reviews.slice(1, 4);
  const rating = 5;

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
              <p>{t.rating}</p>
            </div>
          </div>

          <a className="google-review-cta" href={fallbackReviewUrl} target="_blank" rel="noopener noreferrer">
            <GoogleIcon />
            <span>{t.write}</span>
            <span aria-hidden="true">→</span>
          </a>

          <div className="google-reviews-sync">
            <span>◇ {t.connected}</span>
            <span>
              <i className="google-live-dot" aria-hidden="true" />
              {t.ready}
            </span>
          </div>
        </div>

        <div className="google-reviews-panel">
          <div className="google-panel-stack">
            <div className="google-reviews-panel-header">
              <div className="google-business-title">
                <GoogleIcon />
                <span>{t.badge}</span>
              </div>
              <div className="google-live-pill">
                <i className="google-live-dot" aria-hidden="true" />
                {t.ready}
              </div>
            </div>

            <article className="google-feature-card">
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
              <div className="google-carousel-nav" aria-hidden="true">
                <span className="google-nav-button">‹</span>
                <div className="google-review-dots">
                  {reviews.map((review, index) => (
                    <span key={`${review.name}-${index}`} className={`google-review-dot ${index === 0 ? 'is-active' : ''}`} />
                  ))}
                </div>
                <span className="google-nav-button">›</span>
              </div>

              <a className="google-view-button" href={fallbackReviewUrl} target="_blank" rel="noopener noreferrer">
                {t.view}
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="google-progress-line" aria-hidden="true">
              <span style={{ width: `${(1 / reviews.length) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
