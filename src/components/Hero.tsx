
import { motion } from "motion/react";
import cmLogo from "../assets/Burgundy CM Graphic Designer Logo.png";
import cynthiaPhoto from "../assets/cynthia.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FFF7F2] text-[#251616]"
    >
      {/* Navigation */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-5">
        <a href="#home" className="flex items-center">
          <img
            src={cmLogo}
            alt="CM Graphic Designer Logo"
            className="h-16 w-auto max-w-[220px] object-contain"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#home" className="text-[#842E3D]">Home</a>
          <a href="#about" className="hover:text-[#842E3D]">About</a>
          <a href="#projects" className="hover:text-[#842E3D]">Portfolio</a>
          <a href="#skills" className="hover:text-[#842E3D]">Skills</a>
          <a href="#contact" className="hover:text-[#842E3D]">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#842E3D] px-6 py-3 text-sm text-white transition hover:bg-[#68212F]"
        >
          Let's Talk →
        </a>
      </header>

      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-36 h-72 w-72 rounded-full bg-[#842E3D]/10" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#EACFC2]/50" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid min-h-[75vh] max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-2 font-serif text-5xl italic text-[#842E3D] md:text-7xl">
            Hello,
          </p>

          <h1 className="font-serif text-6xl leading-tight md:text-7xl">
            I'm Cynthia
          </h1>

          <h2 className="mb-6 font-serif text-4xl italic text-[#842E3D] md:text-5xl">
            Graphic Designer
          </h2>

          <p className="mb-8 max-w-lg text-lg leading-relaxed">
            I turn ideas into visual stories.
            Through creative design, I bring brands to life.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center gap-3 rounded-full bg-[#842E3D] px-7 py-4 text-white transition hover:bg-[#68212F]"
          >
            Explore My Work ↓
          </a>
        </motion.div>

        {/* Cynthia portrait */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-t-full bg-[#EACFC2]/70" />
          <img
            src={cynthiaPhoto}
            alt="Cynthia Melki Andraos"
            className="relative h-[480px] w-full rounded-t-full object-cover object-top shadow-xl md:h-[560px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
