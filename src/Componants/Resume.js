import React from "react";
import Resumeimg from "../Assets/1.jpg";

function Resume() {
  const handleDownload = () => {
    window.open("/BhargavResume.pdf", "_blank");
  };

  return (
    <section
      id="resume"
      className="py-20 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - IMAGE + STATS */}
        <div className="flex flex-col items-center gap-6">
          
          {/* IMAGE */}
          <img
            src={Resumeimg}
            alt="Resume Preview"
            className="w-[220px] h-[300px] object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-400">10+</h3>
              <p className="text-sm text-gray-300">Projects</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-400">2+</h3>
              <p className="text-sm text-gray-300">Years Learning</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-400">5+</h3>
              <p className="text-sm text-gray-300">Technologies</p>
            </div>
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div className="text-center md:text-left">
          
          {/* TITLE */}
          <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-500 inline-block">
            Resume
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            Explore my professional journey, technical expertise, and the projects
            I have built as a Full-Stack Developer and Front-End Designer.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
            
            <button
              onClick={handleDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              Download Resume
            </button>

            <a
              href="#contact"
              className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Contact Me
            </a>

          </div>

          {/* SKILLS */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["React", "JavaScript", "Node.js", "Express", "Tailwind", "MongoDB"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Highlights
            </h3>

            <ul className="text-gray-300 space-y-2">
              <li>• Built scalable full-stack applications</li>
              <li>• Designed responsive and user-friendly interfaces</li>
              <li>• Integrated APIs and CMS (Directus)</li>
              <li>• Focused on performance and clean UI/UX</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;