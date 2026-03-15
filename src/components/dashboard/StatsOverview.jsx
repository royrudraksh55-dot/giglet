import StatsCard from "./StatsCard";

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

      <StatsCard
        title="Active Tasks"
        value="12"
        subtext="+2 from last week"
      />

      <StatsCard
        title="Total Spent"
        value="$2,450"
      />

      <StatsCard
        title="Pending Proposals"
        value="8"
        subtext="Requires review"
      />

    </div>
  );
};

export default StatsOverview;
