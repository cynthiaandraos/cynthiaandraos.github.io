
import { motion } from "motion/react";
import caLogo from "../assets/CA-logo.png";
import cynthiaPhoto from "../assets/cynthia.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FFF7F2] text-[#681523]"
    >
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-[#F4C9C9]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-[#F2B9BC]/40 blur-3xl" />

      {/* Navigation */}
      <header className="relative z-30 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <a href="#home" aria-label="Cynthia Andraos home">
          <img
            src={caLogo}
            alt="Cynthia Andraos CA Logo"
            className="w-36 object-contain md:w-44"
          />
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium md:gap-8">
          <a href="#home" className="hover:text-[#B13B4A]">
            Home
          </a>
          <a href="#projects" className="hover:text-[#B13B4A]">
            Portfolio
          </a>
          <a href="#about" className="hover:text-[#B13B4A]">
            About
          </a>
          <a href="#skills" className="hover:text-[#B13B4A]">
            Skills
          </a>
          <a href="#contact" className="hover:text-[#B13B4A]">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="flex items-center gap-2 text-xs font-medium md:text-sm"
        >
          <span className="h-2 w-2 rounded-full bg-[#C72B43]" />
          Available for Projects
        </a>
      </header>

      {/* Main hero */}
      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 pb-24 pt-12 md:min-h-[730px]">
        {/* Headline and text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full md:w-[65%]"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em]">
            Creative Portfolio / Graphic Design
          </p>

          <h1 className="text-[clamp(3.3rem,8vw,8.5rem)] font-black uppercase leading-[0.88] tracking-[-0.065em] text-[#850F25]">
            CYNTHIA
            <span className="block">ANDRAOS</span>
          </h1>

          <p className="mt-7 text-xl font-medium uppercase tracking-[0.35em] md:text-2xl">
            Graphic Designer
          </p>

          <p className="mt-8 max-w-sm text-base leading-relaxed text-[#633A3E]">
            I create thoughtful visual identities, memorable
            branding, and creative designs that bring ideas
            to life.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-4 bg-[#850F25] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#65101E]"
            >
              VIEW PORTFOLIO <span>→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center border border-[#850F25] px-7 py-4 text-sm font-semibold transition hover:bg-[#F3D9D9]"
            >
              CONTACT ME
            </a>
          </div>
        </motion.div>

        {/* Cynthia portrait */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 mt-12 w-full md:absolute md:bottom-0 md:right-6 md:mt-0 md:w-[46%]"
        >
          <div className="absolute inset-8 rounded-full bg-[#E9B7B7]/50 blur-3xl" />
          <img
            src={cynthiaPhoto}
            alt="Cynthia Andraos, Graphic Designer"
            className="relative mx-auto h-[380px] w-full max-w-md rounded-t-full object-cover object-top shadow-2xl md:h-[550px]"
          />
        </motion.div>
      </div>

      {/* Specialties strip */}
      <div className="relative z-20 border-t border-[#850F25]/15 bg-[#FFF7F2]/95">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-7 text-sm font-medium md:text-base">
          <span>✦ Branding</span>
          <span>✦ Packaging</span>
          <span>✦ Social Media</span>
          <span>✦ Print Design</span>
          <span>✦ Visual Identity</span>
        </div>
      </div>
    </section>
  );
}
