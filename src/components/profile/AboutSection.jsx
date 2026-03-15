const AboutSection = () => {
  return (
    <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        👤 About Me
      </h3>

      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>
          I am a passionate Full Stack Developer with over 8 years of
          experience building scalable web applications and intuitive
          user interfaces.
        </p>

        <p>
          I specialize in React, Node.js, and TypeScript. I believe in
          clear communication, timely delivery, and exceeding client
          expectations on every project.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;