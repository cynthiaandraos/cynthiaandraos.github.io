
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
 return <div className="min-h-screen bg-[#FFF7F2] text-[#2B1717]">
  <Hero /><About /><Skills />
  <OliviaProject /><FiveBeansProject /><GoldenMarkProject />
  <AurelleProject /><LittleBloomProject /><HouseOfBeautyProject /><MyFitnessProject />
  <SocialMedia /><BusinessCards /><PrintDesign /><Projects /><Reels />
  <Contact /><Footer />
 </div>;
}
