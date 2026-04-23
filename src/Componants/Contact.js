import React from "react";

function Contact() {
  const config = {
    email: "bhargav908716@gmail.com",
    phone: "9500186358",
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white relative z-99"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - CONTACT INFO */}
        <div className="text-center md:text-left">

          {/* TITLE */}
          <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-500 inline-block">
            Contact Me
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            If you have any project ideas or opportunities, feel free to reach out.
            I’m always open to discussing new work and collaborations.
          </p>

          {/* CONTACT DETAILS */}
          <div className="space-y-4">
            <p className="text-gray-300">
              <span className="font-semibold text-white">Email:</span> {config.email}
            </p>

            <p className="text-gray-300">
              <span className="font-semibold text-white">Phone:</span> {config.phone}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">

            <a
              href={`mailto:${config.email}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              Send Email
            </a>

            <a
              href={`tel:${config.phone}`}
              className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Call Now
            </a>

          </div>
        </div>

        {/* RIGHT - CONTACT FORM */}
        <div className="bg-gray-800 shadow-lg rounded-xl p-6">

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;