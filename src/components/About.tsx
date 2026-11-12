
import { motion } from "motion/react";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#FFF7F2] px-5 py-20 text-[#681523] sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {/* SECTION NUMBER */}
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
            01 /
          </p>

          {/* ABOUT ME TITLE */}
          <h2
            className="mb-10 text-5xl italic text-[#850F25] sm:text-6xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
              fontWeight: 400,
            }}
          >
            A Little About Me
          </h2>

          {/* INTRODUCTION */}
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-[#850F25] sm:text-2xl">
            I'm Cynthia Andraos, a graphic designer with 5+ years
            of experience creating distinctive and meaningful
            visual experiences.
          </p>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-[#850F25]/85">
            I specialize in brand identity, packaging, social media
            design, and visual storytelling. My approach combines
            creativity, attention to detail, and clear communication
            to bring every idea to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
