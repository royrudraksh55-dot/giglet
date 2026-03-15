const DetailsCard = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold mb-4">📌 Details</h3>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Languages</span>
          <span className="font-bold">English, Spanish</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Response Rate</span>
          <span className="font-bold">100%</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Last Active</span>
          <span className="font-bold">2 hours ago</span>
        </div>
      </div>

      <button className="w-full mt-6 py-2.5 bg-gray-100 font-bold rounded-lg hover:bg-gray-200 transition">
        View Full Resume
      </button>
    </section>
  );
};

export default DetailsCard;