
import {
  Instagram,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

import caLogo from "../assets/CA-logo.png";

export function Footer() {
  return (
    <footer className="bg-[#FFF7F2] text-[#2B1717]">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo and introduction */}
          <div>
            <a href="#home" className="inline-block">
              <img
                src={caLogo}
                alt="CA Graphic Designer Logo"
                className="mb-5 h-20 w-auto object-contain"
              />
            </a>

            <h3
              className="text-3xl text-[#751728]"
              style={{
                fontFamily: "'Bodoni Moda', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Cynthia Andraos
            </h3>

            <p className="mt-2 text-sm text-[#765A59]">
              Graphic Designer
            </p>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[#765A59]">
              Creating meaningful visual identities
              and bringing creative ideas to life.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:mx-auto">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#751728]">
              Explore
            </h4>

            <div className="flex flex-col gap-4 text-sm">
              <a href="#home" className="hover:text-[#A13A4B]">
                Home
              </a>
              <a href="#about" className="hover:text-[#A13A4B]">
                About Me
              </a>
              <a href="#projects" className="hover:text-[#A13A4B]">
                My Portfolio
              </a>
              <a href="#skills" className="hover:text-[#A13A4B]">
                My Skills
              </a>
              <a href="#services" className="hover:text-[#A13A4B]">
                My Services
              </a>
              <a href="#contact" className="hover:text-[#A13A4B]">
                Contact
              </a>
            </div>
          </div>

          {/* Contact and social links */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#751728]">
              Let's Connect
            </h4>

            <p
              className="mb-5 text-3xl italic text-[#751728]"
              style={{
                fontFamily: "'Bodoni Moda', Georgia, serif",
              }}
            >
              Have an idea?
            </p>

            <div className="flex flex-col gap-4 text-sm">
              <a
                href="mailto:designer.rc@outlook.com"
                className="flex items-center gap-3 break-all hover:text-[#A13A4B]"
              >
                <Mail size={18} className="shrink-0" />
                designer.rc@outlook.com
              </a>

              <a
                href="mailto:cynthiamelky49@gmail.com"
                className="flex items-center gap-3 break-all hover:text-[#A13A4B]"
              >
                <Mail size={18} className="shrink-0" />
                cynthiamelky49@gmail.com
              </a>
            </div>

            {/* Social media icons */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.instagram.com/rcd.esign/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RC Designer Instagram"
                title="Instagram - @rcd.esign"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#751728] text-white transition hover:-translate-y-1 hover:bg-[#A13A4B]"
              >
                <Instagram size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/cynthia-melky-3206ab3a5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cynthia Andraos LinkedIn"
                title="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#751728] text-white transition hover:-translate-y-1 hover:bg-[#A13A4B]"
              >
                <Linkedin size={21} />
              </a>
            </div>

            <p className="mt-3 text-xs text-[#765A59]">
              Instagram: @rcd.esign | RC Designer
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-[#E5CFC8] pt-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-[#765A59]">
            © {new Date().getFullYear()} Cynthia Andraos.
            All rights reserved.
          </p>

          <p className="text-sm italic text-[#751728]">
            Design • Create • Inspire
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-[#751728] hover:text-[#A13A4B]"
          >
            Back to Top
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
