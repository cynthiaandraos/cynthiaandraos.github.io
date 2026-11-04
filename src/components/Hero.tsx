
import { motion, AnimatePresence } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import caLogo from "../assets/CA-logo.png";
import cynthiaPhoto from "../assets/cynthia.jpg";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#projects" },
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
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [menuOpen]);

  return (
    <>
      {/* Elegant font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500&display=swap');`}
      </style>

      {/* FIXED NAVIGATION BAR */}
      <header
        className={`fixed left-0 right-0 top-0 z-[100] border-b transition-all duration-300 ${
          scrolled
            ? "border-[#850F25]/15 bg-[#FFF7F2]/95 shadow-lg backdrop-blur-xl"
            : "border-transparent bg-[#FFF7F2]/90 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">

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
              className={`object-contain transition-all duration-300 ${
                scrolled
                  ? "w-28 md:w-36"
                  : "w-32 md:w-40"
              }`}
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
                className="transition-colors duration-300 hover:text-[#A45D69]"
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

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#850F25]/30 text-[#850F25] transition hover:bg-[#F3D9D9] lg:hidden"
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </div>

        {/* Mobile navigation dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mx-4 mb-4 max-h-[calc(100vh-110px)] overflow-y-auto rounded-2xl border border-[#E8D2CF] bg-[#FFF7F2] p-4 shadow-xl lg:hidden"
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

      {/* HOME SECTION */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#FFF7F2] pt-24 text-[#681523] md:pt-28"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-[#F4C9C9]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-[#F2B9BC]/40 blur-3xl" />

        {/* Homepage */}
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-6 pb-24 pt-12 md:min-h-[730px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 w-full md:w-[65%]"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em]">
              Creative Portfolio / Graphic Design
            </p>

            {/* Elegant headline */}
            <h1
              style={{
                fontFamily:
                  "'Bodoni Moda', Georgia, serif",
                fontWeight: 400,
                letterSpacing: "-0.045em",
              }}
              className="text-[clamp(3.2rem,7vw,7.5rem)] leading-[0.98] text-[#850F25]"
            >
              Cynthia
              <span className="block">
                Andraos
              </span>
            </h1>

            <p className="mt-7 text-xl font-medium uppercase tracking-[0.35em] md:text-2xl">
              Graphic Designer
            </p>

            <p className="mt-8 max-w-sm text-base leading-relaxed text-[#633A3E]">
              I create thoughtful visual identities,
              memorable branding, and creative designs
              that bring ideas to life.
            </p>

            {/* Homepage buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="inline-flex items-center gap-4 bg-[#850F25] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#65101E]"
              >
                VIEW PORTFOLIO
                <span>→</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center border border-[#850F25] px-7 py-4 text-sm font-semibold transition hover:bg-[#F3D9D9]"
              >
                CONTACT ME
              </a>

              {/* CV download */}
              <a
                href={`${import.meta.env.BASE_URL}Cynthia-Andraos-CV.pdf`}
                download="Cynthia-Andraos-CV.pdf"
                className="inline-flex items-center gap-3 border border-[#850F25] bg-[#FFF7F2] px-7 py-4 text-sm font-semibold text-[#850F25] transition hover:bg-[#F3D9D9]"
              >
                <Download size={18} />
                DOWNLOAD MY CV
              </a>
            </div>
          </motion.div>

          {/* Your portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
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

        {/* Specialties */}
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
    </>
  );
}
