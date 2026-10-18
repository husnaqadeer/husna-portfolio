
function About() {
  return (
    <section id="about" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-lime-300">
          About Me
        </p>

        <h2 className="mb-6 text-3xl font-semibold md:text-5xl">
          A little about who I am.
        </h2>

        <div className="max-w-3xl">
          <p className="text-base leading-8 text-gray-300 md:text-lg">
            Hi, I'm Husna, an aspiring web developer with an interest
            in creating useful and user-friendly websites and applications.
            I enjoy learning new technologies, solving problems, and
            turning ideas into working projects.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-300 md:text-lg">
            Through my projects, I'm developing my skills in programming
            and web development, with a focus on building clean layouts
            and meaningful digital experiences.
          </p>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-lime-300 hover:bg-lime-300/10 hover:text-lime-300 hover:shadow-lg hover:shadow-lime-300/10">
            Always learning
            </span>
            
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-lime-300 hover:bg-lime-300/10 hover:text-lime-300 hover:shadow-lg hover:shadow-lime-300/10">
            Problem solving
            </span>
            
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-lime-300 hover:bg-lime-300/10 hover:text-lime-300 hover:shadow-lg hover:shadow-lime-300/10">
            Web development
            </span>
            
            </div>
        </div>
    </section>
  );
}

export default About;
