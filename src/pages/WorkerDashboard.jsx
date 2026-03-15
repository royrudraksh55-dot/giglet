import WorkerSidebar from "../components/worker/WorkerSidebar";
import WorkerHeader from "../components/worker/WorkerHeader";
import WorkerWelcome from "../components/worker/WorkerWelcome";
import WorkerStats from "../components/worker/WorkerStats";
import AvailableTasks from "../components/worker/AvailableTasks";
import ActiveGigs from "../components/worker/ActiveGigs";

const WorkerDashboard = () => {
  return (
    <div className="flex h-screen bg-background-light">

      <WorkerSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <WorkerHeader />

        <main className="flex-1 overflow-y-auto p-8 space-y-8">

          <WorkerWelcome />
          <WorkerStats />
          <AvailableTasks />
          <ActiveGigs />

        </main>

      </div>
    </div>
  );
};

export default WorkerDashboard;