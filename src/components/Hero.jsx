
function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-24 pt-20 md:px-12 md:pb-32 md:pt-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div>
          <p className="mb-6 flex items-center gap-3 text-sm font-medium tracking-widest text-lime-300 uppercase">
            <span className="h-px w-10 bg-lime-300"></span>
            Aspiring Developer · Portfolio
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Building useful
            <span className="block text-lime-300">
              things for people.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-300 md:text-lg">
            Hi, I’m Husna. I’m learning web development and creating
            thoughtful, user-friendly experiences with React.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-lime-300 px-7 py-3 font-semibold text-gray-950 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              Explore my work ↗
            </a>
            
            <a
            href="mailto:husnaqadeer1@gmail.com"
            className="rounded-full border border-white/20 px-7 py-3 font-medium transition duration-200 hover:border-lime-300 hover:text-lime-300"
            >
              Get in touch
            </a>

          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          <div className="absolute inset-5 rounded-full border border-lime-300/20"></div>
          <div className="absolute inset-12 rounded-full border border-lime-300/30"></div>
          <div className="absolute inset-20 rounded-full border border-white/10"></div>

          <div className="absolute h-64 w-64 rounded-full bg-lime-300/10 blur-3xl"></div>

          <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-lime-300/40 bg-[#192820] shadow-2xl shadow-lime-300/10 md:h-56 md:w-56">
            <span className="text-7xl font-semibold tracking-tighter text-lime-300 md:text-8xl">
              H.
            </span>
          </div>

          <div className="absolute right-4 top-12 rounded-full border border-white/10 bg-[#192820] px-4 py-3 text-sm text-gray-200 shadow-xl">
            React learner <span className="ml-2 text-lime-300">✳</span>
          </div>

          <div className="absolute bottom-10 left-0 rounded-full border border-white/10 bg-[#192820] px-4 py-3 text-sm text-gray-200 shadow-xl">
            Always learning <span className="ml-2 text-lime-300">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
