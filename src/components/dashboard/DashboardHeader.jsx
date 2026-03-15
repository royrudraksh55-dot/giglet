const DashboardHeader = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-8">

      {/* Left Side */}
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-bold">
          Client Dashboard
        </h2>

        <input
          type="text"
          placeholder="Search your tasks..."
          className="hidden sm:block px-4 py-1.5 bg-gray-100 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        <button className="relative p-2 rounded-full hover:bg-orange-100 transition">
          🔔
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 rounded-full hover:bg-orange-100 transition">
          ⚙️
        </button>

      </div>

    </header>
  );
};

export default DashboardHeader;