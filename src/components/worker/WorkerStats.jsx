const WorkerStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <p className="text-sm text-gray-500 mb-1">
          Active Gigs
        </p>
        <p className="text-3xl font-bold">
          4
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <p className="text-sm text-gray-500 mb-1">
          Total Earnings
        </p>
        <p className="text-3xl font-bold">
          $3,240
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <p className="text-sm text-gray-500 mb-1">
          Pending Reviews
        </p>
        <p className="text-3xl font-bold">
          2
        </p>
      </div>

    </div>
  );
};

export default WorkerStats;