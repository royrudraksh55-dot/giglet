const ReputationBar = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 bg-white border border-gray-200 rounded-xl mt-6">

      <div className="p-6 text-center border-r">
        <p className="text-2xl font-black">4.9 ⭐</p>
        <p className="text-xs text-gray-500">Rating</p>
      </div>

      <div className="p-6 text-center border-r">
        <p className="text-2xl font-black">154</p>
        <p className="text-xs text-gray-500">Jobs Completed</p>
      </div>

      <div className="p-6 text-center border-r">
        <p className="text-2xl font-black">98%</p>
        <p className="text-xs text-gray-500">Success Rate</p>
      </div>

      <div className="p-6 text-center">
        <p className="text-2xl font-black">&lt;2h</p>
        <p className="text-xs text-gray-500">Avg Response</p>
      </div>

    </div>
  );
};

export default ReputationBar;