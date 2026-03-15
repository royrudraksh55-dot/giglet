import { useNavigate } from "react-router-dom";
import OnboardingLayout from "../components/onboarding/OnboardingLayout";
import OnboardingHeader from "../components/onboarding/OnboardingHeader";

const CompleteProfile = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // After completing profile → go to dashboard
    navigate("/client-dashboard");
  };

  return (
    <OnboardingLayout>
      <OnboardingHeader />

      <main className="flex-1 flex justify-center py-10 px-4">
        <div className="max-w-[640px] w-full bg-white rounded-xl shadow border p-8">

          <h1 className="text-2xl font-bold mb-6">
            Complete Your Profile
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="Professional Headline"
            />

            <textarea
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="Short Bio"
              rows="4"
            />

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-bold"
            >
              Complete Profile
            </button>

          </form>

        </div>
      </main>
    </OnboardingLayout>
  );
};

export default CompleteProfile;