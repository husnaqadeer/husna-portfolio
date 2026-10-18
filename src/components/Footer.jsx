
function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Husna Qadeer. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="mailto:husnaqadeer1@gmail.com"
            className="text-gray-300 transition hover:text-lime-300"
          >
            Email
          </a>

          <a
            href="https://github.com/husnaqadeer"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 transition hover:text-lime-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
