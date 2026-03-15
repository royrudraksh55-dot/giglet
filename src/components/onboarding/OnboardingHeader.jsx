import { useNavigate } from "react-router-dom";

const OnboardingHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center border-b border-gray-200 bg-white px-10 py-3 sticky top-0 z-50">
      <h2 className="text-xl font-bold text-primary">
        Giglet
      </h2>

      <button
        onClick={() => navigate("/client-dashboard")}
        className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-bold border border-primary/20"
      >
        Save & Exit
      </button>
    </header>
  );
};

export default OnboardingHeader;