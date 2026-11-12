
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import caLogo from "../assets/CA-logo.png";
import cynthiaPhoto from "../assets/cynthia.png";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#portfolio" },
  { label: "Reels", href: "#reels" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

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
    const media = window.matchMedia("(min-width: 1024px)");

    const handleDesktop = () => {
      if (media.matches) {
        setMenuOpen(false);
      }
    };

    media.addEventListener("change", handleDesktop);

    return () => {
      media.removeEventListener("change", handleDesktop);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handleOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;

      if (
        !mobileNavRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
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
        {/* CA LOGO ONLY */}
        <a
          href="#home"
          aria-label="Cynthia Andraos home"
          onClick={closeMenu}
          className="flex min-w-0 shrink-0 items-center"
        >
          <img
            src={caLogo}
            alt="Cynthia Andraos CA Logo"
            loading="eager"
            decoding="async"
            className="block w-24 max-w-full object-contain sm:w-28 md:w-36"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center justify-center gap-4 text-sm font-medium text-[#681523] lg:flex xl:gap-7"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="transition-colors hover:text-[#A45D69] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#850F25]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* AVAILABLE FOR PROJECTS */}
        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-2 text-xs font-medium text-[#681523] lg:flex xl:text-sm"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#C72B43]" />
          Available for Projects
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#850F25]/30 bg-[#FFF7F2] text-[#850F25] transition hover:bg-[#F3D9D9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#850F25] lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            ref={mobileNavRef}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mb-3 max-h-[calc(100dvh-110px-env(safe-area-inset-top,0px))] overflow-y-auto overscroll-contain rounded-2xl border border-[#E8D2CF] bg-[#FFF7F2] p-3 shadow-xl sm:mx-4 sm:mb-4 sm:p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-[#681523] transition hover:bg-[#F3D9D9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#850F25]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#850F25] px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-[#65101E]"
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
      {/* CUSTOM FONTS */}
      <style>{`
        @font-face {
          font-family: "Gabriola Portfolio";
          src: url("${import.meta.env.BASE_URL}fonts/Gabriola.ttf") format("truetype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Amsterdam Signature";
          src: url("${import.meta.env.BASE_URL}fonts/amsterdam-signature-italic.woff2") format("woff2");
          font-weight: 400;
          font-style: italic;
          font-display: swap;
        }

        html {
          scroll-padding-top: calc(
            90px + env(safe-area-inset-top, 0px)
          );
        }

        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }
      `}</style>

      {createPortal(header, document.body)}

      {/* MAIN HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#FFF7F2] pt-[calc(96px+env(safe-area-inset-top,0px))] text-[#681523] md:pt-[calc(112px+env(safe-area-inset-top,0px))]"
      >
        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-[#F4C9C9]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-[#F2B9BC]/40 blur-3xl" />

        <div className="relative mx-auto flex min-h-[min(600px,calc(100svh-96px))] max-w-7xl flex-col justify-center px-5 pb-12 pt-8 sm:min-h-[600px] sm:px-6 sm:pb-20 md:min-h-[730px] md:pb-24 md:pt-12">
          {/* MAIN NAME AND SIGNATURE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 w-full md:w-[65%]"
          >
            <div className="relative w-full max-w-[650px]">
              <div className="relative h-[255px] min-[400px]:h-[310px] sm:h-[390px] md:h-[420px]">
                {/* CYNTHIA */}
                <h1
                  style={{
                    fontFamily:
                      "'Gabriola Portfolio', Gabriola, Georgia, serif",
                    fontWeight: 400,
                    letterSpacing: "-0.035em",
                  }}
                  className="absolute left-0 top-0 z-10 whitespace-nowrap text-[clamp(5.5rem,17vw,11rem)] leading-none text-[#850F25]"
                >
                  Cynthia
                </h1>

                {/* ANDRAOS */}
                <span
                  style={{
                    fontFamily:
                      "'Gabriola Portfolio', Gabriola, Georgia, serif",
                    fontWeight: 400,
                    letterSpacing: "-0.035em",
                  }}
                  className="absolute left-0 top-[26%] z-10 whitespace-nowrap text-[clamp(5.5rem,17vw,11rem)] leading-none text-[#850F25]"
                >
                  Andraos
                </span>

                {/* GRAPHIC DESIGNER SIGNATURE */}
                <span
                  style={{
                    fontFamily: "'Amsterdam Signature', cursive",
                    fontWeight: 400,
                    fontStyle: "italic",
                    letterSpacing: "-0.025em",
                  }}
                  className="absolute left-[2%] top-[47%] z-20 whitespace-nowrap text-[clamp(4rem,13vw,8rem)] leading-none text-[#2D020B] md:top-[49%]"
                >
                  Graphic Designer
                </span>
              </div>
            </div>
          </motion.div>

          {/* PROFILE PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 mt-10 w-full sm:mt-12 md:absolute md:bottom-0 md:right-6 md:mt-0 md:w-[46%]"
          >
            <div className="pointer-events-none absolute inset-8 rounded-full bg-[#E9B7B7]/50 blur-3xl" />

            <img
              src={cynthiaPhoto}
              alt="Cynthia Andraos, Graphic Designer"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative mx-auto h-[min(320px,85vw)] w-full max-w-[340px] rounded-t-full object-cover object-top shadow-2xl sm:h-[380px] sm:max-w-md md:h-[550px]"
            />
          </motion.div>
        </div>

        {/* DESIGN SPECIALTIES */}
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
