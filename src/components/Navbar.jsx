function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1712]/80 px-6 py-5 backdrop-blur-md md:px-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <a
          href="#home"
          className="text-xl font-semibold tracking-tight transition duration-200 hover:opacity-80"
        >
          Husna Qadeer<span className="text-lime-300">.</span>
        </a>

        <div className="flex flex-wrap items-center gap-4 text-sm md:gap-8 md:text-base">
          <a
            href="#home"
            className="transition duration-200 hover:text-lime-300"
          >
            Home
          </a>

          <a
            href="#projects"
            className="transition duration-200 hover:text-lime-300"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="transition duration-200 hover:text-lime-300"
          >
            Skills
          </a>

          <a
            href="#about"
            className="transition duration-200 hover:text-lime-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="rounded-full border border-lime-300/50 px-4 py-2 transition duration-200 hover:bg-lime-300 hover:text-gray-950"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;