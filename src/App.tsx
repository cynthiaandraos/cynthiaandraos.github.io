
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
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
      <Skills />

      {/* 01 - Packaging Design */}
      <Packaging />

      {/* 02 - Label Design */}
      <LabelDesign />

      {/* 03 - Advertising Design */}
      <AurelleAdvertising />

      {/* 04 - Promotional Design */}
      <Flyers />

      {/* 05 - Social Media Design */}
      <SocialMedia />

      {/* 06 - Business Cards Design */}
      <BusinessCards />

      {/* 07 - Print & Stationery Design */}
      <PrintDesign />

      {/* 08 - Logo Design */}
      <Projects />

      {/* 09 - Brand Identity */}
      <Branding />

      {/* 10 - Signage Design */}
      <Signage />

      {/* 11 - Reels & Video Editing */}
      <Reels />

      <Contact />
      <Footer />
    </div>
  );
}
