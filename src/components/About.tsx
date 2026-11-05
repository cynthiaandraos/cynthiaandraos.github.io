
import { motion, useReducedMotion } from "motion/react";
import { Download } from "lucide-react";

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
      className="scroll-mt-24 bg-[#FFF7F2] px-5 py-20 text-[#681523] sm:px-6 md:py-24"
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
          className="mb-10 text-4xl leading-tight sm:text-5xl md:text-7xl"
          style={{
            fontFamily: "'Bodoni Moda', Georgia, serif",
            fontWeight: 400,
          }}
        >
          A little about me.
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">

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

            {/* Specialties */}
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

            {/* About Me buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              {/* Explore My Work */}
              <motion.a
                href="#portfolio"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -3, scale: 1.03 }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : { scale: 0.98 }
                }
                className="inline-flex w-full items-center justify-center gap-3 bg-[#850F25] px-6 py-4 text-center text-sm font-medium text-white transition-colors hover:bg-[#65101E] sm:w-auto"
              >
                EXPLORE MY WORK
                <span aria-hidden="true">→</span>
              </motion.a>

              {/* Download CV */}
              <motion.a
                href={`${import.meta.env.BASE_URL}Cynthia-Andraos-CV.pdf`}
                download="Cynthia-Andraos-CV.pdf"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -3, scale: 1.03 }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : { scale: 0.98 }
                }
                className="inline-flex w-full items-center justify-center gap-3 border border-[#850F25] bg-[#FFF7F2] px-6 py-4 text-center text-sm font-medium text-[#850F25] transition-colors hover:bg-[#F3D9D9] sm:w-auto"
              >
                <Download size={18} />
                DOWNLOAD MY CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
