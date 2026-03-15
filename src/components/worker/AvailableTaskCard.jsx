const AvailableTaskCard = ({ title, budget }) => {
  return (
    <div className="bg-white p-5 rounded-xl border hover:shadow-md transition flex justify-between items-center">

      <div>
        <h5 className="font-bold">
          {title}
        </h5>
        <p className="text-sm text-gray-500">
          Budget: ${budget}
        </p>
      </div>

      <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90">
        Apply
      </button>

    </div>
  );
};

export default AvailableTaskCard;