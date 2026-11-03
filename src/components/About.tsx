
import { motion, useReducedMotion } from "motion/react";

export function About() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const viewportSettings = {
    once: true,
    amount: 0.2,
  };

  return (
    <section
      id="about"
      className="bg-[#FFF7F2] px-6 py-24 text-[#681523]"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-5 text-sm uppercase tracking-[0.3em] text-[#A45D69]"
        >
          01 / ABOUT ME
        </motion.p>

        {/* Main heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mb-10 text-5xl leading-tight md:text-7xl"
          style={{
            fontFamily: "'Bodoni Moda', Georgia, serif",
            fontWeight: 400,
          }}
        >
          A little about me.
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">

          {/* Left paragraph */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <p className="text-xl leading-relaxed md:text-2xl">
              I'm Cynthia Andraos, a graphic designer
              passionate about turning creative ideas
              into meaningful visual experiences.
            </p>
          </motion.div>

          {/* Right paragraph and specialties */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="mb-8 leading-8 text-[#704B50]"
            >
              I enjoy creating distinctive visual identities,
              memorable branding, thoughtful packaging,
              and engaging social media designs.
              My goal is to combine creativity and
              clear communication in every project.
            </motion.p>

            {/* Specialties appear one by one */}
            <div className="flex flex-wrap gap-3">
              {[
                "Brand Identity",
                "Packaging",
                "Social Media",
                "Print Design",
                "Visual Storytelling",
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 20,
                    scale: reduceMotion ? 1 : 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -4, scale: 1.04 }
                  }
                  className="rounded-full border border-[#D9B4B9] px-5 py-3 text-sm"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Explore button */}
            <motion.a
              href="#projects"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: "easeOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -3, scale: 1.03 }
              }
              whileTap={
                reduceMotion ? undefined : { scale: 0.98 }
              }
              className="mt-10 inline-block bg-[#850F25] px-7 py-4 text-sm font-medium text-white hover:bg-[#65101E]"
            >
              EXPLORE MY WORK →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
