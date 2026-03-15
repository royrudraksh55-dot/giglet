import ProfileHeader from "../components/profile/ProfileHeader";
import ReputationBar from "../components/profile/ReputationBar";
import AboutSection from "../components/profile/AboutSection";
import PortfolioSection from "../components/profile/PortfolioSection";
import SkillsCard from "../components/profile/SkillsCard";
import DetailsCard from "../components/profile/DetailsCard";
import ReviewsBreakdown from "../components/profile/ReviewsBreakdown";

const Profile = () => {
  return (
    <div className="bg-background-light min-h-screen">

      <main className="max-w-5xl mx-auto px-4 py-8">

        <ProfileHeader />
        <ReputationBar />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <AboutSection />
            <PortfolioSection />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <SkillsCard />
            <DetailsCard />
            <ReviewsBreakdown />
          </div>

        </div>

      </main>

    </div>
  );
};

export default Profile;
