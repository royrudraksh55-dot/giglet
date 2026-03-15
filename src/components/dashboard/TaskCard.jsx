import { useNavigate } from "react-router-dom";

const TaskCard = ({ id, title, budget, status, posted }) => {
  const navigate = useNavigate();

  const statusColor = {
    open: "bg-blue-100 text-blue-600",
    progress: "bg-orange-100 text-orange-600",
    completed: "bg-green-100 text-green-600",
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition">

      {/* Left Content */}
      <div>
        <h5 className="font-bold text-lg">
          {title}
        </h5>

        <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
          <span>💰 ${budget}</span>
          <span>•</span>
          <span>📅 {posted}</span>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${statusColor[status]}`}>
          {status}
        </span>

        <button
          onClick={() => navigate(`/task/${id}`)}
          className="px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-50 rounded-lg text-sm font-bold transition"
        >
          View Details
        </button>
      </div>

    </div>
  );
};

export default TaskCard;