
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Packaging } from "./components/Packaging";
import { Flyers } from "./components/Flyers";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF7F2] text-[#2B1717]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Packaging />
      <Flyers />
      <Contact />
      <Footer />
    </div>
  );
}
