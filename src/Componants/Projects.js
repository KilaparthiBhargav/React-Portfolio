import React from "react";
import { motion } from "framer-motion";

import begetpng from "../Assets/beget.png";
import youtube from "../Assets/Youtube.png";
import shoekart1 from "../Assets/Shoekart1.png";

function Projects() {
  const projects = [
    {
      title: "Ecommerce Website",
      image: shoekart1,
      description: "Built with SpringBoot",
      link: "https://github.com/KilaparthiBhargav/Shoe-Kart-Ecommerce-Website.git",
    },
    {
      title: "Restaurant Website",
      image: begetpng,
      description: "Built with Java SpringBoot",
      link: "https://github.com/KilaparthiBhargav/Beget-Restaurant-with-spring-boot.git",
    },
    {
      title: "YouTube Clone",
      image: youtube,
      description: "Built with HTML, CSS & JavaScript",
      link: "https://github.com/KilaparthiBhargav/YoutubeReplicate.git",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white relative z-99"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold tracking-wide">
            My Projects
          </h2>
          <p className="text-gray-400 mt-3">
            Some things I’ve built recently
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative rounded-2xl overflow-hidden bg-gray-900/60 backdrop-blur-md border border-gray-800 shadow-lg"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-blue-600/20 to-transparent"></div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-5">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;