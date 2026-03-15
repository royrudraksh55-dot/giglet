import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import WelcomeSection from "../components/dashboard/WelcomeSection";
import StatsOverview from "../components/dashboard/StatsOverview";
import TaskList from "../components/dashboard/TaskList";
import PromotionCard from "../components/dashboard/PromotionCard";
import DashboardFooter from "../components/dashboard/DashboardFooter";

const ClientDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-y-auto">
        <DashboardHeader />

        <div className="p-8 max-w-6xl w-full mx-auto">
          <WelcomeSection />
          <StatsOverview />
          <TaskList />
          <PromotionCard />
        </div>

        <DashboardFooter />
      </main>
    </div>
  );
};

export default ClientDashboard;