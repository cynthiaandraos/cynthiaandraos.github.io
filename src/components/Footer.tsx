
import { Instagram, Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import caLogo from "../assets/CA-logo.png";

export function Footer() {
  return (
    <footer className="bg-[#FFF7F2] text-[#2B1717]">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">

          {/* Logo and introduction */}
          <div>
            <a href="#home" className="inline-block">
              <img
                src={caLogo}
                alt="CA Logo"
                className="mb-5 h-20 w-auto object-contain"
              />
            </a>

            <h3 className="font-serif text-3xl text-[#751728]">
              Cynthia Andraos
            </h3>

            <p className="mt-2 text-sm text-[#765A59]">
              Graphic Designer
            </p>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[#765A59]">
              Creating meaningful visual identities and
              bringing creative ideas to life.
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
              <a href="#contact" className="hover:text-[#A13A4B]">
                Contact
              </a>
            </div>
          </div>

          {/* Contact and social */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#751728]">
              Let's Connect
            </h4>

            <p className="mb-5 font-serif text-3xl italic text-[#751728]">
              Have an idea?
            </p>

            <a
              href="mailto:designer.rc@outlook.com"
              className="inline-flex items-center gap-2 text-sm hover:text-[#A13A4B]"
            >
              <Mail size={18} />
              designer.rc@outlook.com
            </a>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#751728] text-white transition hover:bg-[#A13A4B]"
              >
                <Instagram size={20} />
              </a>

              <a
                href="mailto:designer.rc@outlook.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DABDB6] text-[#751728] transition hover:bg-[#F3E2DC]"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-[#E5CFC8] pt-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-[#765A59]">
            © 2026 Cynthia Andraos. All rights reserved.
          </p>

          <p className="font-serif text-sm italic text-[#751728]">
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
