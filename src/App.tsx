
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Packaging } from "./components/Packaging";
import { AurelleAdvertising } from "./components/AurelleAdvertising";
import { Flyers } from "./components/Flyers";
import { SocialMedia } from "./components/SocialMedia";
import { PrintDesign } from "./components/PrintDesign";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF7F2] text-[#2B1717]">
      <Hero />
      <About />
      <Skills />

      {/* PACKAGING & LABELS — ALL BRANDS */}
      <Packaging />

      {/* ADVERTISING */}
      <AurelleAdvertising />

      {/* OTHER DESIGN PROJECTS */}
      <Flyers />
      <SocialMedia />
      <PrintDesign />

      {/* LOGOS & BRAND IDENTITY — LAST PROJECT SECTION */}
      <Projects />

      {/* CONTACT */}
      <Contact />
      <Footer />
    </div>
  );
}
