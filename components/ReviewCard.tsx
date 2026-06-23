type Review = { name: string; text: string; rating: number };

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-3 text-accent-500">{'★'.repeat(review.rating)}</div>
      <p className="mb-4 text-sm text-gray-600">“{review.text}”</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 font-semibold text-primary-700">
          {review.name.charAt(0)}
        </div>
        <span className="font-medium text-gray-900">{review.name}</span>
      </div>
    </div>
  );
}
