import { Link } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          <Link to="/" className="text-xl font-bold text-blue-700">
            Giglet
          </Link>

          <nav className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-sm font-medium text-gray-600 hover:text-blue-700"
            >
              Find Tasks
            </Link>

            <Link
              to="/post-task"
              className="text-sm font-medium text-gray-600 hover:text-blue-700"
            >
              Post a Gig
            </Link>

            <Link
              to="/signup"
              className="bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition"
            >
              Sign Up
            </Link>

          </nav>

        </div>
      </div>
    </header>
  );
};

export default AuthNavbar;