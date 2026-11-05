
import { lazy, Suspense } from "react";

// MAIN SECTIONS — LOAD IMMEDIATELY
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

// PROJECT SECTIONS — LOAD SEPARATELY
const Packaging = lazy(() =>
  import("./components/Packaging").then((module) => ({
    default: module.Packaging,
  }))
);

const Aurelle = lazy(() =>
  import("./components/Aurelle").then((module) => ({
    default: module.Aurelle,
  }))
);

const AurelleAdvertising = lazy(() =>
  import("./components/AurelleAdvertising").then(
    (module) => ({
      default: module.AurelleAdvertising,
    })
  )
);

const Flyers = lazy(() =>
  import("./components/Flyers").then((module) => ({
    default: module.Flyers,
  }))
);

const SocialMedia = lazy(() =>
  import("./components/SocialMedia").then((module) => ({
    default: module.SocialMedia,
  }))
);

const PrintDesign = lazy(() =>
  import("./components/PrintDesign").then((module) => ({
    default: module.PrintDesign,
  }))
);

const Projects = lazy(() =>
  import("./components/Projects").then((module) => ({
    default: module.Projects,
  }))
);

// FINAL SECTIONS
const Contact = lazy(() =>
  import("./components/Contact").then((module) => ({
    default: module.Contact,
  }))
);

const Footer = lazy(() =>
  import("./components/Footer").then((module) => ({
    default: module.Footer,
  }))
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF7F2] text-[#2B1717]">

      {/* MAIN SECTIONS */}
      <Hero />
      <About />
      <Skills />

      {/* PORTFOLIO SECTIONS */}
      <Suspense fallback={null}>

        {/* PACKAGING & LABELS — FIRST PROJECTS */}
        <Packaging />
        <Aurelle />

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

      </Suspense>
    </div>
  );
}
