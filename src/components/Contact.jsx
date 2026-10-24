
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:husnaqadeer1@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-lime-300">
          Contact
        </p>

        <h2 className="mb-6 text-3xl font-semibold md:text-5xl">
          Let's get in touch.
        </h2>

        <p className="mb-10 max-w-3xl leading-7 text-gray-300">
          Have a question or want to connect? Feel free to send me a message.
        </p>

        <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-white/20 bg-[#203329] px-5 py-4 text-white outline-none focus:border-lime-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/20 bg-[#203329] px-5 py-4 text-white outline-none focus:border-lime-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm">
              Your Message
            </label>
            <textarea
              id="message"
              required
              rows="5"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Write your message..."
              className="w-full rounded-xl border border-white/20 bg-[#203329] px-5 py-4 text-white outline-none focus:border-lime-300"
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-lime-300 px-8 py-3 font-semibold text-gray-950 transition duration-200 hover:-translate-y-1 hover:bg-lime-200"
          >
            Send Message ↗
          </button>
        </form>

        <p className="mt-5 max-w-3xl text-sm text-gray-400">
          Clicking Send Message opens your email application with the message prepared.
        </p>
      </div>
    </section>
  );
}

export default Contact;
