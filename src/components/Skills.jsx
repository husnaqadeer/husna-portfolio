
function Skills() {
  const skills = [
    {
      title: "Programming",
      items: "JavaScript, Java",
      icon: "💻",
    },
    {
      title: "Web Development",
      items: "HTML, CSS, React",
      icon: "🌐",
    },
    {
      title: "Tools",
      items: "Git, GitHub, VS Code",
      icon: "🛠️",
    },
  ];

  return (
    <section id="skills" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-lime-300">
          My Skills
        </p>

        <h2 className="mb-4 text-3xl font-semibold md:text-5xl">
          Technologies I work with.
        </h2>

        <p className="mb-12 max-w-2xl leading-7 text-gray-300">
          These are some of the programming languages and tools
          I have been learning and using in my projects.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-lime-300/50 hover:bg-lime-300/5 hover:shadow-lg hover:shadow-lime-300/5"
            >
              <span className="text-3xl">{skill.icon}</span>

              <h3 className="mb-3 mt-5 text-xl font-semibold">
                {skill.title}
              </h3>

              <p className="leading-7 text-gray-300">
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
