import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-lime-300">
          What I have been building
        </p>

        <h2 className="mb-4 text-4xl font-semibold text-white md:text-5xl">
          My Projects
          <span className="text-lime-300">.</span>
        </h2>

        <p className="mb-12 max-w-2xl leading-7 text-gray-400">
          Here are some projects I have created while learning
          web development and improving my programming skills.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;