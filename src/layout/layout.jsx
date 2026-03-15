import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold text-blue-600">
            Giglet
          </h1>

          <nav className="flex gap-6 items-center">

            <Link
              to="/post-task"
              className="text-gray-700 hover:text-blue-600"
            >
              Post Task
            </Link>

            <Link
              to="/client-dashboard"
              className="text-gray-700 hover:text-blue-600"
            >
              Client Dashboard
            </Link>

            <Link
              to="/worker-dashboard"
              className="text-gray-700 hover:text-blue-600"
            >
              Worker Dashboard
            </Link>

            <Link
              to="/profile"
              className="text-gray-700 hover:text-blue-600"
            >
              Profile
            </Link>

            <button
              onClick={() => navigate("/login")}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>

          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="p-6">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;