const ActiveGigCard = ({ title, status }) => {
  return (
    <div className="bg-white p-5 rounded-xl border flex justify-between items-center">

      <div>
        <h5 className="font-bold">
          {title}
        </h5>
        <p className="text-sm text-gray-500">
          Status: {status}
        </p>
      </div>

      <button className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-bold hover:bg-primary/10">
        View
      </button>

    </div>
  );
};

export default ActiveGigCard;