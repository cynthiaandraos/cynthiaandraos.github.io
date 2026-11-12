
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

import { OliviaProject } from "./components/OliviaProject";
import { FiveBeansProject } from "./components/FiveBeansProject";
import { GoldenMarkProject } from "./components/GoldenMarkProject";
import { AurelleProject } from "./components/AurelleProject";
import { LittleBloomProject } from "./components/LittleBloomProject";
import { HouseOfBeautyProject } from "./components/HouseOfBeautyProject";
import { MyFitnessProject } from "./components/MyFitnessProject";

import { SocialMedia } from "./components/SocialMedia";
import { BusinessCards } from "./components/BusinessCards";
import { PrintDesign } from "./components/PrintDesign";
import { Projects } from "./components/Projects";
import { Reels } from "./components/Reels";

import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PortfolioProtection } from "./components/PortfolioProtection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF7F2] text-[#2B1717]">
      {/* IMAGE PROTECTION */}
      <PortfolioProtection />

      {/* HOME */}
      <Hero />

      {/* ABOUT ME */}
      <About />

      {/* MY SKILLS */}
      <Skills />

      {/* FEATURED PROJECTS */}
      <section
        id="portfolio"
        className="scroll-mt-24 bg-[#FFF7F2] px-5 pb-2 pt-20 text-center sm:pt-24"
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
            02 /
          </p>

          <h2
            className="text-5xl italic text-[#850F25] sm:text-6xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
              fontWeight: 700,
            }}
          >
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#704B50] sm:text-base">
            A curated collection of brand identity,
            packaging, advertising, and creative
            design projects.
          </p>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <OliviaProject />
      <FiveBeansProject />
      <GoldenMarkProject />
      <AurelleProject />
      <LittleBloomProject />
      <HouseOfBeautyProject />
      <MyFitnessProject />

      {/* SOCIAL MEDIA DESIGN */}
      <SocialMedia />

      {/* BUSINESS CARDS */}
      <BusinessCards />

      {/* PRINT DESIGN */}
      <PrintDesign />

      {/* LOGO DESIGN */}
      <Projects />

      {/* REELS */}
      <Reels />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
