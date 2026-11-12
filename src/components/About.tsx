
import { motion, useReducedMotion } from "motion/react";
import { Download, ArrowDown } from "lucide-react";
import type { MouseEvent } from "react";

export function About() {
  const reduceMotion = useReducedMotion();
  const words = ["A", "little", "about", "me."];
  const specialties = ["Brand Identity", "Packaging", "Social Media", "Visual Storytelling"];
  const viewportSettings = { once: true, amount: 0.1, margin: "0px 0px -30px 0px" };
  const fadeUp = { hidden: { opacity: 0, y: reduceMotion ? 0 : 24 }, visible: { opacity: 1, y: 0 } };
  const scrollToPortfolio = (event: MouseEvent<HTMLAnchorElement>) => {
    const portfolio = document.getElementById("featured-projects") || document.getElementById("portfolio");
    if (!portfolio) return;
    event.preventDefault();
    portfolio.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${portfolio.id}`);
  };
  return (
    <section id="about" className="scroll-mt-24 overflow-hidden bg-[#FFF7F2] px-5 py-20 text-[#681523] sm:px-6 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.p initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportSettings} transition={{ duration: reduceMotion ? 0.01 : 0.6, ease: "easeOut" }} className="mb-6 text-sm uppercase tracking-[0.3em] text-[#A45D69]">01 / ABOUT ME</motion.p>
        <motion.h2 aria-label="A little about me." initial="hidden" whileInView="visible" viewport={viewportSettings} className="mb-8 flex flex-wrap justify-center gap-x-[0.25em] gap-y-1 text-center text-4xl leading-[1.2] sm:text-5xl md:text-7xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 400 }}>
          {words.map((word, index) => <span key={word} className="inline-block overflow-hidden pb-[0.12em]"><motion.span aria-hidden="true" variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : "110%" }, visible: { opacity: 1, y: "0%" } }} transition={{ duration: reduceMotion ? 0.01 : 0.75, delay: reduceMotion ? 0 : index * 0.16, ease: [0.22, 1, 0.36, 1] }} className="inline-block">{word}</motion.span></span>)}
        </motion.h2>
        <motion.div initial={{ scaleX: reduceMotion ? 1 : 0 }} whileInView={{ scaleX: 1 }} viewport={viewportSettings} transition={{ duration: reduceMotion ? 0.01 : 1, delay: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }} style={{ transformOrigin: "center" }} className="mb-12 h-[1px] w-full max-w-4xl bg-[#850F25]" />
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} transition={{ duration: reduceMotion ? 0.01 : 0.75, delay: reduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mb-6 max-w-4xl text-center text-lg leading-relaxed sm:text-2xl">I'm Cynthia Andraos, a graphic designer with 5+ years of experience creating distinctive and meaningful visual experiences.</motion.p>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} transition={{ duration: reduceMotion ? 0.01 : 0.75, delay: reduceMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mb-10 max-w-3xl text-center text-base leading-8 text-[#704B50]">I specialize in brand identity, packaging, social media design, and visual storytelling. My approach combines creativity, attention to detail, and clear communication to bring every idea to life.</motion.p>
        <div className="mb-10 flex max-w-4xl flex-wrap justify-center gap-3">{specialties.map((item, index) => <motion.span key={item} initial={{ opacity: 0, y: reduceMotion ? 0 : 20, scale: reduceMotion ? 1 : 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={viewportSettings} transition={{ duration: reduceMotion ? 0.01 : 0.55, delay: reduceMotion ? 0 : index * 0.1, ease: "easeOut" }} whileHover={reduceMotion ? undefined : { y: -4, scale: 1.04, backgroundColor: "#850F25", color: "#FFFFFF", borderColor: "#850F25" }} className="cursor-default rounded-full border border-[#D9B4B9] px-5 py-3 text-sm">{item}</motion.span>)}</div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} transition={{ duration: reduceMotion ? 0.01 : 0.75, delay: reduceMotion ? 0 : 0.15, ease: "easeOut" }} className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <motion.a href="#featured-projects" onClick={scrollToPortfolio} whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} className="inline-flex w-full items-center justify-center gap-3 bg-[#850F25] px-6 py-4 text-center text-sm font-medium text-white transition-colors hover:bg-[#65101E] sm:w-auto">EXPLORE MY WORK <ArrowDown size={18} aria-hidden="true" /></motion.a>
          <motion.a href={`${import.meta.env.BASE_URL}CV-cynthia.pdf`} download="CV-cynthia.pdf" whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} className="inline-flex w-full items-center justify-center gap-3 border border-[#850F25] bg-[#FFF7F2] px-6 py-4 text-center text-sm font-medium text-[#850F25] transition-colors hover:bg-[#F3D9D9] sm:w-auto"><Download size={18} aria-hidden="true" /> DOWNLOAD MY CV</motion.a>
        </motion.div>
      </div>
    </section>
  );
}
