function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#192820] transition duration-300 hover:-translate-y-2 hover:border-lime-300/50 hover:shadow-lg">

      <img
        src={project.image}
        alt={project.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-8">
        <p className="mb-3 text-sm text-lime-300">
          {project.tech.join(" · ")}
        </p>

        <h3 className="mb-4 text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mb-6 leading-7 text-gray-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-lime-300 transition hover:text-white"
            >
              Live Demo ↗
            </a>
          )}

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-lime-300 transition hover:text-white"
            >
              View on GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;