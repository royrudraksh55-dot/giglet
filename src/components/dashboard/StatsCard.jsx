const StatsCard = ({ title, value, subtext }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <p className="text-sm text-gray-500 mb-1">
        {title}
      </p>

      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold">
          {value}
        </span>

        {subtext && (
          <span className="text-xs text-green-500">
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatsCard;