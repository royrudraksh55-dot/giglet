const WorkerSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">

      <div className="p-6">
        <h1 className="text-xl font-bold text-primary">
          Giglet Worker
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">

        <a className="block px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold">
          Dashboard
        </a>

        <a className="block px-4 py-2 rounded-lg hover:bg-gray-100">
          My Gigs
        </a>

        <a className="block px-4 py-2 rounded-lg hover:bg-gray-100">
          Earnings
        </a>

        <a className="block px-4 py-2 rounded-lg hover:bg-gray-100">
          Messages
        </a>

        <a className="block px-4 py-2 rounded-lg hover:bg-gray-100">
          Profile
        </a>

      </nav>

    </aside>
  );
};

export default WorkerSidebar;