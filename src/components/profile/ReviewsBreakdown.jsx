const ReviewsBreakdown = () => {
  const ratings = [
    { star: 5, percent: 90 },
    { star: 4, percent: 7 },
    { star: 3, percent: 2 },
    { star: 2, percent: 0 },
    { star: 1, percent: 1 },
  ];

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold mb-4">⭐ Reviews Breakdown</h3>

      <div className="space-y-3">
        {ratings.map((rating) => (
          <div
            key={rating.star}
            className="grid grid-cols-[20px_1fr_40px] items-center gap-3"
          >
            <p className="text-sm font-bold">{rating.star}</p>

            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="bg-primary h-full rounded-full"
                style={{ width: `${rating.percent}%` }}
              ></div>
            </div>

            <p className="text-xs text-gray-500 text-right">
              {rating.percent}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsBreakdown;