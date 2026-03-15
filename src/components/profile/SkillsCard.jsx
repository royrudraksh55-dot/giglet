const SkillsCard = () => {
  const skills = [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "UI/UX Design",
    "Figma",
    "Project Management",
  ];

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold mb-4">✅ Verified Skills</h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-lg border border-primary/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsCard;