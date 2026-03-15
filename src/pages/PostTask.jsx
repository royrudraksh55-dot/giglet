import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostTask = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    locationType: "remote",
    deadline: "",
    address: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      <main className="max-w-3xl mx-auto px-4 py-12">

        {/* Page Header */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-extrabold">
            Post a New Task
          </h2>
          <p className="mt-2 text-gray-600 max-w-lg">
            Clear details help you find the best freelancers.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200">
          <form onSubmit={handleSubmit} className="p-8 space-y-8">

            {/* General Info */}
            <div className="space-y-6">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Task Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Need a logo for a bakery"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Detailed Description
                </label>
                <textarea
                  name="description"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the task..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

            </div>

            {/* Logistics */}
            <div className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Location Type
                  </label>
                  <select
                    name="locationType"
                    value={formData.locationType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="remote">Remote (Online)</option>
                    <option value="local">Local (In-person)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Submission Deadline
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

              </div>

              {/* Show address only if local */}
              {formData.locationType === "local" && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Work Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              )}

            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Estimated Budget
              </label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full max-w-xs px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Actions */}
            <div className="pt-6 flex justify-end gap-4 border-t border-gray-200">

              <button
                type="button"
                className="px-6 py-3 text-sm font-semibold text-gray-600 hover:text-gray-900"
              >
                Save Draft
              </button>

              <button
                type="submit"
                className="px-10 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
              >
                Post Task Now
              </button>

            </div>

          </form>
        </div>

      </main>

    </div>
  );
};

export default PostTask;