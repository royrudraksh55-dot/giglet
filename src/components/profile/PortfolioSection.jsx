const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "SaaS Analytics Dashboard",
      image: "https://picsum.photos/600/400?1",
    },
    {
      id: 2,
      title: "Luxury E-commerce Platform",
      image: "https://picsum.photos/600/400?2",
    },
  ];

  return (
    <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">📂 Portfolio Highlights</h3>
        <button className="text-primary font-semibold text-sm hover:underline">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-lg overflow-hidden aspect-video bg-gray-100 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white text-sm font-semibold">
                {project.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;