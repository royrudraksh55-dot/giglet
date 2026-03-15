import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // VERY IMPORTANT (prevents refresh)

    // Simple validation (optional but good practice)
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

   const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    console.log("Logged in:", user);

    navigate("/complete-profile");

  } catch (error) {

    alert(error.message);

  }
};
  };

  return (
    <main className="flex-grow flex items-center justify-center px-4 pt-28 pb-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8 md:p-10">

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back
            </h1>
            <p className="text-gray-500 text-sm">
              Login to your Giglet account to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="name@company.com"
                className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-xs font-semibold text-blue-700 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-300 rounded-lg pr-12 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  👁
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-700 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                Keep me logged in
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-4 rounded-lg font-bold text-base hover:bg-blue-800 transition-all shadow-lg"
            >
              Login to Account
            </button>

          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;