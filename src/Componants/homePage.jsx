import React, { useState } from "react";
import Projects from "./Projects";
import ContactUs from "./Contact";
import About from "./About";
import HeroParticles from "./HeroParticles";
import Resume from "./Resume";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-950 text-gray-200">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <a href="#home" className="text-xl font-bold text-white">
            Kilaparthi Bhargav
          </a>

          {/* DESKTOP MENU */}
          <nav className="space-x-8 hidden md:flex">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900 px-6 pb-4 flex flex-col gap-4">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      {/* HERO */}


      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800">

          <HeroParticles />
 
          <div className="relative z-10 text-white px-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-400">Bhargav</span>
            </h2>
            <p></p>

            <p className="text-xl mb-6">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              3000,
              "Front-End Designer",
              3000, 
            ]}
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </p>


            <div className="flex justify-center gap-4">
              <a href="#projects" className="bg-white text-gray-900  px-6 py-3 rounded-lg">
                View Projects
              </a>
              <a href="#contact" className="border border-white px-6 py-3 rounded-lg">
                Contact Me
              </a>
            </div>
          </div>
    </section>

    

      {/* ABOUT */}
      <About />
    <Resume />

      {/* PROJECTS */}
      <Projects />

      {/* CONTACT */}
      <ContactUs />

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
       
        © Bhargav 2025 . All Rights Reserved.
      </footer>
    </div>
  );
}