
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { OliviaProject } from "./components/OliviaProject";
import { FiveBeansProject } from "./components/FiveBeansProject";
import { Packaging } from "./components/Packaging";
import { LabelDesign } from "./components/LabelDesign";
import { AurelleAdvertising } from "./components/AurelleAdvertising";
import { Flyers } from "./components/Flyers";
import { SocialMedia } from "./components/SocialMedia";
import { BusinessCards } from "./components/BusinessCards";
import { PrintDesign } from "./components/PrintDesign";
import { Branding } from "./components/Branding";
import { Signage } from "./components/Signage";
import { Reels } from "./components/Reels";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF7F2] text-[#2B1717]">
      <Hero />
      <About />

      {/* My Skills and My Services */}
      <Skills />

      {/* Featured Brand Projects */}
      <OliviaProject />
      <FiveBeansProject />

      {/* Existing sections - temporary */}
      <Packaging />
      <LabelDesign />
      <AurelleAdvertising />
      <Flyers />
      <SocialMedia />
      <BusinessCards />
      <PrintDesign />
      <Projects />
      <Branding />
      <Signage />

      {/* Reels and Video Editing */}
      <Reels />

      {/* Contact and Footer */}
      <Contact />
      <Footer />
    </div>
  );
}
