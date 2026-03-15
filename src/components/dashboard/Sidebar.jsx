import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white flex flex-col">

      {/* Logo Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="bg-orange-500 rounded-lg p-2 text-white">
          🚀
        </div>
        <div>
          <h1 className="text-xl font-bold">Giglet</h1>
          <p className="text-xs text-orange-500 font-medium uppercase">
            Client Portal
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2">

        <Link
          to="/client-dashboard"
          className="block px-3 py-2 rounded-lg bg-orange-100 text-orange-600 font-semibold"
        >
          Dashboard
        </Link>

        <Link
          to="/post-task"
          className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition"
        >
          Post Task
        </Link>

        <Link
          to="/profile"
          className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition"
        >
          Profile
        </Link>

        <Link
          to="/login"
          className="block px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition"
        >
          Logout
        </Link>

      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
          <div>
            <p className="text-sm font-semibold">Alex Thompson</p>
            <p className="text-xs text-gray-500">alex@company.com</p>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;