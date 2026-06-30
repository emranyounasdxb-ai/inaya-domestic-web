import { NextResponse } from 'next/server';

type GoogleReview = {
  author_name?: string;
  author_url?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
};

const fallbackReviews = [
  { name: 'Frasha Zlwa', time: '19 hours ago', text: 'تعامل الموظفات جيد راقي خصوصاً فراولة ومهري', rating: 5, source: 'Google Review' },
  { name: 'Ekram Abdu Ekuti', time: '20 hours ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5, source: 'Google Review' },
  { name: 'Wine su Chit', time: '21 hours ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5, source: 'Google Review' },
  { name: 'Yehya Shawky', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5, source: 'Google Review' },
  { name: 'Sara El alaoui', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5, source: 'Google Review' }
];

export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID || 'ChIJxzRGAUJZXz4R8zN5ye8vn_M';
  const reviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

  if (!apiKey) {
    return NextResponse.json(
      {
        live: false,
        placeName: 'INAYA Domestic Workers Ajman',
        rating: 5,
        totalReviews: null,
        reviewUrl,
        reviews: fallbackReviews
      },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  }

  try {
    const params = new URLSearchParams({
      place_id: placeId,
      fields: 'name,rating,user_ratings_total,reviews,url',
      key: apiKey
    });
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`, { cache: 'no-store' });
    const data = await response.json();

    if (!response.ok || data.status !== 'OK') {
      throw new Error(data.status || 'Google Places request failed');
    }

    const result = data.result || {};
    const googleReviews = Array.isArray(result.reviews) ? result.reviews : [];
    const reviews = googleReviews
      .filter((review: GoogleReview) => (review.rating || 0) >= 5)
      .map((review: GoogleReview) => ({
        name: review.author_name || 'Google reviewer',
        time: review.relative_time_description || '',
        text: review.text || 'Rated INAYA Domestic Workers Ajman 5 stars on Google.',
        rating: review.rating || 5,
        authorUrl: review.author_url || '',
        profilePhoto: review.profile_photo_url || '',
        source: 'Google Review'
      }));

    return NextResponse.json(
      {
        live: true,
        placeName: result.name || 'INAYA Domestic Workers Ajman',
        rating: result.rating || 5,
        totalReviews: result.user_ratings_total || null,
        reviewUrl: result.url || reviewUrl,
        reviews: reviews.length ? reviews : fallbackReviews
      },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch {
    return NextResponse.json(
      {
        live: false,
        placeName: 'INAYA Domestic Workers Ajman',
        rating: 5,
        totalReviews: null,
        reviewUrl,
        reviews: fallbackReviews
      },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
