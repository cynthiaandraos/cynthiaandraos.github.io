
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF7F2] text-[#2B1717]">
      <Hero />
      <About />
      <Skills />

      {/* ONE FEATURED PROJECTS HEADING */}
      <section
        id="featured-projects"
        className="scroll-mt-24 bg-[#FFF7F2] px-5 pb-0 pt-20 text-center sm:pt-24"
      >
        <div className="mx-auto max-w-4xl">
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

      {/* FEATURED BRANDS */}
      <OliviaProject />
      <FiveBeansProject />
      <GoldenMarkProject />
      <AurelleProject />
      <LittleBloomProject />
      <HouseOfBeautyProject />
      <MyFitnessProject />

      {/* PORTFOLIO CATEGORIES */}
      <SocialMedia />
      <BusinessCards />
      <PrintDesign />
      <Projects />
      <Reels />

      <Contact />
      <Footer />
    </div>
  );
}
