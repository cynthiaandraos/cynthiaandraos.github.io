
import { motion } from "motion/react";
import cmLogo from "../assets/cm-logo.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FFF7F2] text-[#2B1717]"
    >
      {/* Navigation */}
      <header className="relative z-20 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-6">
        <a href="#home" className="flex items-center">
          <img
            src={cmLogo}
            alt="Cynthia Melki Andraos logo"
            className="h-16 w-auto max-w-[220px] object-contain"
          />
        </a>

        <nav className="flex flex-wrap items-center gap-5 text-sm md:gap-8">
          <a href="#home" className="text-[#842E3D]">Home</a>
          <a href="#about" className="hover:text-[#842E3D]">About</a>
          <a href="#projects" className="hover:text-[#842E3D]">Portfolio</a>
          <a href="#skills" className="hover:text-[#842E3D]">Skills</a>
          <a href="#contact" className="hover:text-[#842E3D]">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#842E3D] px-6 py-3 text-sm text-white hover:bg-[#68212F]"
        >
          Let's Talk →
        </a>
      </header>

      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-28 top-40 h-72 w-72 rounded-full bg-[#842E3D]/10" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-[#842E3D]/10" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-2 font-serif text-5xl italic text-[#842E3D] md:text-7xl">
            Hello,
          </p>

          <h1 className="font-serif text-6xl leading-tight md:text-8xl">
            I'm Cynthia
          </h1>

          <h2 className="mb-6 font-serif text-4xl italic text-[#842E3D] md:text-6xl">
            Graphic Designer
          </h2>

          <p className="mb-8 max-w-lg text-lg leading-relaxed">
            I turn ideas into visual stories.
            Through creative design, I bring brands to life.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center gap-3 rounded-full bg-[#842E3D] px-7 py-4 text-white transition-colors hover:bg-[#68212F]"
          >
            Explore My Work
            <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
