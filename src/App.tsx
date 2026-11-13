
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

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
import { PortfolioEffects } from "./components/PortfolioEffects";

const smoothEase = [0.22, 1, 0.36, 1] as const;

// SCROLL REVEAL ANIMATION
function ScrollReveal({
  children,
}: {
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 55,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.05,
        margin: "0px 0px -40px 0px",
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.85,
        ease: smoothEase,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="portfolio-page min-h-screen bg-[#FFF7F2] text-[#2B1717]">

      {/* IMAGE PROTECTION */}
      <PortfolioProtection />

      {/* INTERACTIVE ANIMATIONS */}
      <PortfolioEffects />

      {/* HOME */}
      <Hero />

      {/* ABOUT ME */}
      <ScrollReveal>
        <About />
      </ScrollReveal>

      {/* MY SKILLS */}
      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      {/* FEATURED PROJECTS HEADING */}
      <section
        id="portfolio"
        className="scroll-mt-24 bg-[#FFF7F2] px-5 pb-2 pt-20 text-center sm:pt-24"
      >
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease: smoothEase,
          }}
          className="mx-auto max-w-4xl"
        >
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
        </motion.div>
      </section>

      {/* FEATURED PROJECT 01 - OLIV-IA */}
      <ScrollReveal>
        <OliviaProject />
      </ScrollReveal>

      {/* FEATURED PROJECT 02 - 5 BEANS */}
      <ScrollReveal>
        <FiveBeansProject />
      </ScrollReveal>

      {/* FEATURED PROJECT 03 - GOLDEN MARK */}
      <ScrollReveal>
        <GoldenMarkProject />
      </ScrollReveal>

      {/* FEATURED PROJECT 04 - AURELLE */}
      <ScrollReveal>
        <AurelleProject />
      </ScrollReveal>

      {/* FEATURED PROJECT 05 - LITTLE BLOOM */}
      <ScrollReveal>
        <LittleBloomProject />
      </ScrollReveal>

      {/* FEATURED PROJECT 06 - HOUSE OF BEAUTY */}
      <ScrollReveal>
        <HouseOfBeautyProject />
      </ScrollReveal>

      {/* FEATURED PROJECT 07 - MY FITNESS */}
      <ScrollReveal>
        <MyFitnessProject />
      </ScrollReveal>

      {/* SOCIAL MEDIA DESIGN */}
      <ScrollReveal>
        <SocialMedia />
      </ScrollReveal>

      {/* BUSINESS CARDS DESIGN */}
      <ScrollReveal>
        <BusinessCards />
      </ScrollReveal>

      {/* PRINT & STATIONERY DESIGN */}
      <ScrollReveal>
        <PrintDesign />
      </ScrollReveal>

      {/* LOGO DESIGN */}
      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      {/* REELS & VIDEO EDITING */}
      <ScrollReveal>
        <Reels />
      </ScrollReveal>

      {/* CONTACT */}
      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
