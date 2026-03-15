const WorkerWelcome = () => {
  return (
    <div className="flex justify-between items-center">

      <div>
        <h3 className="text-2xl font-bold">
          Welcome back, Alex 👋
        </h3>
        <p className="text-gray-500">
          Ready to earn today?
        </p>
      </div>

      <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-primary/90 transition">
        Browse New Tasks
      </button>

    </div>
  );
};

export default WorkerWelcome;