export type CuratedGoogleReview = {
  id: string;
  name: string;
  text: string;
  rating: 5;
  profilePhotoUrl?: string;
};

export const GOOGLE_REVIEWS_VIEW_URL = 'https://www.google.com/maps/search/?api=1&query=INAYA%20Domestic%20Workers%20Ajman&query_place_id=ChIJxzRGAUJZXz4R8zN5ye8vn_M';
export const GOOGLE_REVIEWS_WRITE_URL = 'https://search.google.com/local/writereview?placeid=ChIJxzRGAUJZXz4R8zN5ye8vn_M';

// Keep reviewer names and comments exactly as written on Google. Reorder this
// array to change the featured review and carousel order.
export const CURATED_GOOGLE_REVIEWS = [
  {
    id: 'hanan',
    name: 'Hanan',
    text: 'Amazing service from INAYA Domestic Workers! I hired a nanny through them, and she is caring, trustworthy, and very professional. My kids absolutely love her. The agency made the whole process easy and stress-free. Highly recommended!',
    rating: 5,
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ_oqfwppRUvQP7llv2kjHNYH-qcp8itVwIZDxWwZAfSSvl=w36-h36-p-rp-mo-br100'
  },
  {
    id: 'shadi-el-aker',
    name: 'shadi el-aker',
    text: 'A great service with Inaya, the management, staff are exceptional, starting from front desk all the way to top management.',
    rating: 5,
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWveaa1ql1SyryTIN0Sb61bUnLdwMdAsW0rp14EGqob-TvB_CO5=w36-h36-p-rp-mo-ba12-br100'
  },
  {
    id: 'jamic-jamic',
    name: 'Jamic Jamic',
    text: 'INAYA Domestic Workers is very professional and reliable. They provided me with a housemaid who is efficient, polite, and trustworthy. My home has never felt so organized!',
    rating: 5,
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKtCptQQ0HR-i1nxD2a4Ie5jHUeoh2EN_L5Del37qVHMC_8dQ=w36-h36-p-rp-mo-br100'
  },
  {
    id: 'clarisa-delfin',
    name: 'clarisa Delfin',
    text: "I'm applicant of riaza she is very good madam and she assist the applicante good and give them proper bed to sleep I like her how her heart ❤️ good",
    rating: 5,
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ6zVuqMeS-i27NrB_PGNHV1kRpJ2mabEPqSARtGwwoyHZ-wg=w36-h36-p-rp-mo-br100'
  },
  {
    id: 'hayfa-ebrahim',
    name: 'Hayfa Ebrahim',
    text: 'Professional maids and am greatly happy with service i get. Keep it up',
    rating: 5,
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWDvYH64Wa6jABBHwOkKPYnfULZrEVxuz3EC2SdNiCZpffWWtc5fQ=w36-h36-p-rp-mo-br100'
  },
  {
    id: 'md-trend',
    name: 'Md Trend',
    text: 'One of the best Center in UAE',
    rating: 5,
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUaRAY3fS-nOC_SiBx6Ol9QBTTD0rRlpjNvf04OTPeH7zqh96jgrg=w36-h36-p-rp-mo-ba12-br100'
  }
] as const satisfies readonly CuratedGoogleReview[];
