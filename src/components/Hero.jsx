
function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-24 pt-20 md:px-12 md:pb-32 md:pt-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-300/5 blur-3xl md:left-3/4"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Introduction */}
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-lime-300/20 bg-lime-300/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-lime-300"></span>
            <p className="text-xs font-medium tracking-widest text-lime-300 uppercase">
              Aspiring Developer
            </p>
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Building useful
            <span className="mt-2 block text-lime-300">
              things for people.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-gray-300 md:text-lg">
            Hi, I’m Husna. I’m learning web development and creating
            thoughtful, user-friendly experiences with React. I enjoy
            turning ideas into clean and practical designs.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#skills"
              className="rounded-full bg-lime-300 px-7 py-3.5 font-semibold text-gray-950 transition duration-300 hover:-translate-y-1 hover:bg-lime-200 hover:shadow-lg hover:shadow-lime-300/20"
            >
              Explore my skills <span className="ml-2">↗</span>
            </a>

            <a
              href="mailto:husnaqadeer1@gmail.com"
              className="rounded-full border border-white/20 px-7 py-3.5 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-lime-300 hover:text-lime-300"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400">
            <span>
              <span className="mr-2 text-lime-300">✳</span>
              Always learning
            </span>
            <span>
              <span className="mr-2 text-lime-300">✳</span>
              Building with React
            </span>
          </div>
        </div>

        {/* Decorative portfolio graphic */}
        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          <div className="absolute inset-3 rounded-full border border-lime-300/10"></div>
          <div className="absolute inset-10 rounded-full border border-lime-300/20"></div>
          <div className="absolute inset-20 rounded-full border border-white/10"></div>

          <div className="absolute h-64 w-64 rounded-full bg-lime-300/10 blur-3xl"></div>

          <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-lime-300/40 bg-[#192820] shadow-2xl shadow-lime-300/10 transition duration-500 hover:scale-105 md:h-56 md:w-56">
            <div className="absolute inset-3 rounded-full border border-dashed border-lime-300/20"></div>
            <span className="text-7xl font-semibold tracking-tighter text-lime-300 md:text-8xl">
              H.
            </span>
          </div>

          <div className="absolute right-0 top-12 rounded-2xl border border-white/10 bg-[#192820]/95 px-4 py-3 text-sm text-gray-200 shadow-xl backdrop-blur-sm sm:right-2">
            <span className="mr-2 text-lime-300">✳</span>
            React learner
          </div>

          <div className="absolute bottom-8 left-0 rounded-2xl border border-white/10 bg-[#192820]/95 px-4 py-3 text-sm text-gray-200 shadow-xl backdrop-blur-sm sm:left-2">
            <span className="mr-2 text-lime-300">↗</span>
            Always learning
          </div>

          <div className="absolute bottom-1/4 right-2 h-3 w-3 rounded-full bg-lime-300 shadow-lg shadow-lime-300/50"></div>
          <div className="absolute left-8 top-1/4 h-2 w-2 rounded-full bg-lime-300/60"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
