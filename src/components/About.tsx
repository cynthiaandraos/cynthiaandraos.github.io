
import {
  motion,
  useReducedMotion,
} from "motion/react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function About() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 35,
    },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.85,
      delay: reduceMotion ? 0 : delay,
      ease: smoothEase,
    },
  });

  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#FFF7F2] px-5 py-14 text-[#681523] sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl text-center">

        {/* SECTION NUMBER */}
        <motion.p
          {...reveal(0)}
          className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A45D69] sm:mb-4"
        >
          01 /
        </motion.p>

        {/* ABOUT ME TITLE */}
        <motion.h2
          {...reveal(0.12)}
          className="mb-7 text-[clamp(2.4rem,10vw,3rem)] leading-tight italic text-[#850F25] sm:mb-10 sm:text-6xl"
          style={{
            fontFamily:
              "'Bodoni Moda', Georgia, serif",
            fontWeight: 400,
          }}
        >
          A Little About Me
        </motion.h2>

        {/* INTRODUCTION */}
        <motion.p
          {...reveal(0.24)}
          className="mx-auto max-w-4xl text-lg leading-relaxed text-[#850F25] sm:text-2xl"
        >
          I'm Cynthia Andraos, a graphic designer with 5+ years
          of experience creating distinctive and meaningful
          visual experiences.
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          {...reveal(0.36)}
          className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-[#850F25]/85 sm:mt-7 sm:text-base sm:leading-8"
        >
          I specialize in brand identity, packaging, social media
          design, and visual storytelling. My approach combines
          creativity, attention to detail, and clear communication
          to bring every idea to life.
        </motion.p>

      </div>
    </section>
  );
}
