import { useNavigate } from "react-router-dom";

const WelcomeSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      
      <div>
        <h3 className="text-2xl font-bold">
          Welcome back, Alex!
        </h3>
        <p className="text-gray-500">
          Manage your active projects and post new opportunities.
        </p>
      </div>

      <button
        onClick={() => navigate("/post-task")}
        className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg"
      >
        ➕ Post New Task
      </button>

    </div>
  );
};

export default WelcomeSection;