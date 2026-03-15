const ProfileHeader = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

      {/* Cover */}
      <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5"></div>

      <div className="px-8 pb-8">
        <div className="relative flex flex-col md:flex-row items-end -mt-12 gap-6">

          {/* Avatar */}
          <div className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg overflow-hidden bg-gray-200">
            <img
              src="https://i.pravatar.cc/300"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 pb-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

              <div>
                <h2 className="text-3xl font-extrabold">
                  Alex Rivera
                </h2>
                <p className="text-lg font-medium text-primary mt-1">
                  Full Stack Developer
                </p>

                <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
                  <span>📍 San Francisco</span>
                  <span>📅 Joined 2022</span>
                </div>
              </div>

              <button className="px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition shadow-md">
                Edit Profile
              </button>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default ProfileHeader;