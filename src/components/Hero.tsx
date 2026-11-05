
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import caLogo from "../assets/CA-logo.png";
import cynthiaPhoto from "../assets/cynthia.png";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const header = (
    <header
      className={`fixed inset-x-0 top-0 z-[9999] w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-[#850F25]/15 bg-[#FFF7F2]/95 shadow-md backdrop-blur-xl"
          : "border-transparent bg-[#FFF7F2]/95 backdrop-blur-md"
      }`}
      style={{
        paddingTop: "env(safe-area-inset-top, 0px)",
      }}
    >
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-3 px-5 py-3 md:px-6">

        {/* CA Logo */}
        <a
          href="#home"
          aria-label="Cynthia Andraos home"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src={caLogo}
            alt="Cynthia Andraos CA Logo"
            className="w-28 object-contain sm:w-32 md:w-36"
          />
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center justify-center gap-5 text-sm font-medium text-[#681523] lg:flex xl:gap-8"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="transition-colors hover:text-[#A45D69]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop availability */}
        <a
          href="#contact"
          className="hidden items-center gap-2 text-xs font-medium text-[#681523] lg:flex xl:text-sm"
        >
          <span className="h-2 w-2 rounded-full bg-[#C72B43]" />
          Available for Projects
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#850F25]/30 bg-[#FFF7F2] text-[#850F25] transition hover:bg-[#F3D9D9] lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mb-4 max-h-[calc(100dvh-110px)] overflow-y-auto overscroll-contain rounded-2xl border border-[#E8D2CF] bg-[#FFF7F2] p-4 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-[#681523] transition hover:bg-[#F3D9D9]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#850F25] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#65101E]"
            >
              <span className="h-2 w-2 rounded-full bg-[#F0C9CB]" />
              Available for Projects
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );

  return (
    <>
      {/* Elegant font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500&display=swap');`}
      </style>

      {/* Fixed navigation outside animated sections */}
      {createPortal(header, document.body)}

      {/* HOME SECTION */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#FFF7F2] pt-24 text-[#681523] md:pt-28"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-[#F4C9C9]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-[#F2B9BC]/40 blur-3xl" />

        {/* Homepage layout */}
        <div className="relative mx-auto flex min-h-[600px] max-w-7xl flex-col justify-center px-5 pb-12 pt-8 sm:px-6 sm:pb-20 md:min-h-[730px] md:pb-24 md:pt-12">

          {/* Main text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 w-full md:w-[65%]"
          >
            {/* Main name */}
            <h1
              style={{
                fontFamily: "'Bodoni Moda', Georgia, serif",
                fontWeight: 400,
                letterSpacing: "-0.045em",
              }}
              className="text-[clamp(2.65rem,11vw,5rem)] leading-[1.02] text-[#850F25] md:text-[clamp(3.2rem,7vw,7.5rem)] md:leading-[0.98]"
            >
              Cynthia
              <span className="block">Andraos</span>
            </h1>

            {/* Job title */}
            <p className="mt-7 text-base font-medium uppercase tracking-[0.2em] sm:text-xl sm:tracking-[0.35em] md:text-2xl">
              Graphic Designer
            </p>

            {/* Introduction */}
            <p className="mt-6 max-w-sm text-base leading-relaxed text-[#633A3E] sm:mt-8">
              I create thoughtful visual identities,
              memorable branding, and creative designs
              that bring ideas to life.
            </p>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 mt-10 w-full sm:mt-12 md:absolute md:bottom-0 md:right-6 md:mt-0 md:w-[46%]"
          >
            <div className="absolute inset-8 rounded-full bg-[#E9B7B7]/50 blur-3xl" />

            <img
              src={cynthiaPhoto}
              alt="Cynthia Andraos, Graphic Designer"
              className="relative mx-auto h-[320px] w-full max-w-[340px] rounded-t-full object-cover object-top shadow-2xl sm:h-[380px] sm:max-w-md md:h-[550px]"
            />
          </motion.div>
        </div>

        {/* Specialties */}
        <div className="relative z-20 border-t border-[#850F25]/15 bg-[#FFF7F2]/95">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-4 px-5 py-7 text-sm font-medium sm:justify-between sm:px-6 md:text-base">
            <span>✦ Branding</span>
            <span>✦ Packaging</span>
            <span>✦ Social Media</span>
            <span>✦ Print Design</span>
            <span>✦ Visual Identity</span>
          </div>
        </div>
      </section>
    </>
  );
}
