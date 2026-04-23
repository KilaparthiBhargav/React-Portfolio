import React from "react";
import aboutimg from "../Assets/img2.jpeg";

function About() {
  const skills = [
    "Java",
    "Spring Boot",
    "React JS",
    "JavaScript",    
    "Alpine js",
    "J-Query",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "MySQL", 
    "Git"
  ];

  return (
    <section id="about" className="py-20 bg-gray-950 text-gray-200 relative ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutimg}
            alt="Bhargav"
            className="w-[280px] h-[320px] object-cover rounded-xl shadow-xl border border-gray-700"
          />
        </div>

        {/* CONTENT */}
        <div className="md:w-1/2">

          {/* TITLE */}
          <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-500 inline-block">
            About Me
          </h2>

          {/* TEXT */}
          <p className="mb-4 text-gray-300 leading-relaxed">
            Hi, I'm <span className="font-semibold text-white">Kilaparthi Bhargav</span>, 
            a passionate Full-Stack Developer. I build modern and scalable web 
            applications with clean UI and strong backend systems.
          </p>

          <p className="mb-6 text-gray-400 leading-relaxed">
            I specialize in React.js, JavaScript, HTML, CSS and Tailwind CSS.
            On the backend, I work with Java, Spring Boot and SQL databases.
            I am looking for opportunities to grow and contribute to impactful projects.
          </p>

        </div>
      </div>

      {/* 🔥 INFINITE SCROLL SKILLS */}
      <div className="overflow-hidden mt-16 relative">

        {/* Fade edges (premium effect) */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>

        <div className="flex gap-6 animate-scroll whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-full text-sm font-medium text-gray-200 hover:bg-blue-600 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;   