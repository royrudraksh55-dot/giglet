const ProgressSection = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-end mb-2">
        <h1 className="text-2xl font-bold">
          Set up your profile
        </h1>
        <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
          60% Complete
        </span>
      </div>

      <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
        <div className="bg-primary h-full w-[60%]"></div>
      </div>

      <p className="text-gray-500 text-sm mt-3">
        Step 2: Professional Details & Bio
      </p>
    </div>
  );
};

export default ProgressSection;