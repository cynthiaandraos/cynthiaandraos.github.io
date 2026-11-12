
import { Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";
import caLogo from "../assets/CA-logo.png";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Reels", href: "#reels" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#FFF7F2] text-[#2B1717]">
      <div className="mx-auto w-full max-w-7xl px-5 pb-8 pt-12 sm:px-6 sm:pb-10 sm:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          <div className="min-w-0">
            <a href="#home" aria-label="Back to home" className="inline-block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#751728]">
              <img src={caLogo} alt="CA Graphic Designer Logo" className="mb-5 h-16 w-auto max-w-full object-contain sm:h-20" />
            </a>
            <h3 className="text-2xl text-[#751728] sm:text-3xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 400 }}>
              Cynthia Andraos
            </h3>
            <p className="mt-2 text-sm text-[#765A59]">Graphic Designer</p>
          </div>

          <nav className="min-w-0 md:mx-auto" aria-label="Footer navigation">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#751728] sm:mb-5">Explore</h4>
            <div className="flex flex-col gap-1 text-sm sm:gap-2">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="flex min-h-11 items-center rounded-md transition-colors hover:text-[#A13A4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#751728]">
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="min-w-0 sm:col-span-2 md:col-span-1">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#751728]">Let's Connect</h4>
            <p className="mb-5 text-3xl italic text-[#751728]" style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}>Have an idea?</p>
            <div className="flex min-w-0 flex-col gap-2 text-sm">
              <a href="mailto:designer.rc@outlook.com" className="flex min-h-11 min-w-0 items-center gap-3 rounded-md transition-colors hover:text-[#A13A4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#751728]">
                <Mail size={18} className="shrink-0" aria-hidden="true" />
                <span className="min-w-0 break-all">designer.rc@outlook.com</span>
              </a>
              <a href="mailto:cynthiamelky49@gmail.com" className="flex min-h-11 min-w-0 items-center gap-3 rounded-md transition-colors hover:text-[#A13A4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#751728]">
                <Mail size={18} className="shrink-0" aria-hidden="true" />
                <span className="min-w-0 break-all">cynthiamelky49@gmail.com</span>
              </a>
            </div>
            <div className="mt-7 flex items-center justify-center gap-3">
              <a href="https://www.instagram.com/rcd.esign/" target="_blank" rel="noopener noreferrer" aria-label="RC Designer Instagram" title="Instagram - @rcd.esign" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#751728] text-white transition hover:-translate-y-1 hover:bg-[#A13A4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#751728]">
                <Instagram size={21} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/cynthia-melky-3206ab3a5/" target="_blank" rel="noopener noreferrer" aria-label="Cynthia Andraos LinkedIn" title="LinkedIn" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#751728] text-white transition hover:-translate-y-1 hover:bg-[#A13A4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#751728]">
                <Linkedin size={21} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#E5CFC8] pt-6 text-center md:mt-14 md:flex-row md:text-left">
          <p className="text-xs leading-relaxed text-[#765A59]">© {new Date().getFullYear()} Cynthia Andraos. All rights reserved.</p>
          <p className="text-sm italic text-[#751728]">Design • Create • Inspire</p>
          <a href="#home" className="inline-flex min-h-11 items-center gap-2 rounded-md text-xs text-[#751728] transition-colors hover:text-[#A13A4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#751728]">
            Back to Top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
