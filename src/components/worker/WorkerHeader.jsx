const WorkerHeader = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">

      <h2 className="text-lg font-bold">
        Worker Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          🔔
        </button>
        <div className="w-8 h-8 rounded-full bg-primary"></div>
      </div>

    </header>
  );
};

export default WorkerHeader;