
import { motion, useReducedMotion } from "motion/react";
import {
  Instagram,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

import caLogo from "../assets/CA-logo.png";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#portfolio" },
  { label: "Reels", href: "#reels" },
  { label: "Contact", href: "#contact" },
];

const linkClass =
  "flex min-h-11 items-center rounded-md transition-colors " +
  "hover:text-[#A13A4B] focus-visible:outline " +
  "focus-visible:outline-2 focus-visible:outline-[#751728]";

const socialClass =
  "flex h-12 w-12 shrink-0 items-center justify-center " +
  "rounded-full bg-[#751728] text-white transition " +
  "hover:-translate-y-1 hover:bg-[#A13A4B] " +
  "focus-visible:outline focus-visible:outline-2 " +
  "focus-visible:outline-offset-4 focus-visible:outline-[#751728]";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function Footer() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 20 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.12,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: smoothEase,
    },
  });

  return (
    <footer className="overflow-hidden bg-[#FFF7F2] text-[#2B1717]">
      <div className="mx-auto w-full max-w-7xl px-5 pb-7 pt-10 sm:px-6 sm:pb-10 sm:pt-16">

        {/* FOOTER GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-10">

          {/* CA LOGO */}
          <motion.div
            {...reveal()}
            className="flex min-w-0 items-center justify-center py-3 sm:py-8 md:justify-start md:py-0"
          >
            <a
              href="#home"
              aria-label="Back to home"
              className="inline-flex items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#751728]"
            >
              <img
                src={caLogo}
                alt="CA Graphic Designer Logo"
                decoding="async"
                className="block h-auto w-44 max-w-full object-contain sm:w-64 lg:w-72"
              />
            </a>
          </motion.div>

          {/* EXPLORE NAVIGATION */}
          <motion.nav
            {...reveal(0.08)}
            className="min-w-0 md:mx-auto"
            aria-label="Footer navigation"
          >
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#751728] sm:mb-5">
              Explore
            </h4>

            {/* TWO COLUMNS ON MOBILE */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-0 text-sm sm:flex sm:flex-col sm:gap-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={linkClass}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>

          {/* LET'S CONNECT */}
          <motion.div
            {...reveal(0.16)}
            className="min-w-0 sm:col-span-2 md:col-span-1"
          >
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#751728] sm:mb-5">
              Let's Connect
            </h4>

            <p
              className="mb-4 text-[28px] italic text-[#751728] sm:mb-5 sm:text-3xl"
              style={{
                fontFamily:
                  "'Bodoni Moda', Georgia, serif",
              }}
            >
              Have an idea?
            </p>

            {/* EMAILS */}
            <div className="w-fit max-w-full">
              <div className="flex min-w-0 flex-col gap-1 text-sm sm:gap-2">

                <a
                  href="mailto:designer.rc@outlook.com"
                  className="flex min-h-11 min-w-0 items-center gap-3 rounded-md transition-colors hover:text-[#A13A4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#751728]"
                >
                  <Mail
                    size={18}
                    className="shrink-0"
                    aria-hidden="true"
                  />

                  <span className="min-w-0 break-all">
                    designer.rc@outlook.com
                  </span>
                </a>

                <a
                  href="mailto:cynthiamelky49@gmail.com"
                  className="flex min-h-11 min-w-0 items-center gap-3 rounded-md transition-colors hover:text-[#A13A4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#751728]"
                >
                  <Mail
                    size={18}
                    className="shrink-0"
                    aria-hidden="true"
                  />

                  <span className="min-w-0 break-all">
                    cynthiamelky49@gmail.com
                  </span>
                </a>
              </div>

              {/* SOCIAL ICONS */}
              <div className="mt-6 flex items-center justify-center gap-3 sm:mt-7">

                <motion.a
                  href="https://www.instagram.com/rcd.esign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RC Designer Instagram"
                  title="Instagram - @rcd.esign"
                  whileTap={
                    reduceMotion
                      ? undefined
                      : { scale: 0.94 }
                  }
                  className={socialClass}
                >
                  <Instagram
                    size={21}
                    aria-hidden="true"
                  />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/cynthia-melky-3206ab3a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Cynthia Andraos LinkedIn"
                  title="LinkedIn"
                  whileTap={
                    reduceMotion
                      ? undefined
                      : { scale: 0.94 }
                  }
                  className={socialClass}
                >
                  <Linkedin
                    size={21}
                    aria-hidden="true"
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* COPYRIGHT AND BACK TO TOP */}
        <motion.div
          {...reveal(0.1)}
          className="mt-9 flex flex-col items-center justify-between gap-4 border-t border-[#E5CFC8] pt-6 text-center sm:mt-12 md:mt-14 md:flex-row md:gap-5 md:text-left"
        >
          <p className="text-xs leading-relaxed text-[#765A59]">
            © {new Date().getFullYear()} Cynthia Andraos.
            All rights reserved.
          </p>

          <p className="text-sm italic text-[#751728]">
            Design • Create • Inspire
          </p>

          <a
            href="#home"
            className="inline-flex min-h-11 items-center gap-2 rounded-md text-xs text-[#751728] transition-colors hover:text-[#A13A4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#751728]"
          >
            Back to Top
            <ArrowUp
              size={15}
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
