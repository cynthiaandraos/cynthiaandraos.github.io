
import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  Image,
  PenTool,
  Layers,
  Video,
  BookOpen,
  Scissors,
} from "lucide-react";

const skills = [
  { name: "Adobe Photoshop", icon: Image },
  { name: "Adobe Illustrator", icon: PenTool },
  { name: "Figma", icon: Layers },
  { name: "Adobe Premiere Pro", icon: Video },
  { name: "Adobe InDesign", icon: BookOpen },
  { name: "CapCut", icon: Scissors },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Skills() {
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
      ease: easeOut,
    },
  });

  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-[#FFF7F2] px-5 py-14 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* SKILLS HEADING */}
        <motion.div
          {...reveal()}
          className="mb-9 text-center sm:mb-12"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
            CREATIVE TOOLKIT
          </p>

          <h2
            className="text-[clamp(2.8rem,11vw,3rem)] italic text-[#850F25] sm:text-5xl md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 700,
            }}
          >
            My Skills
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#704B50] sm:mt-5 sm:text-base">
            The creative tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  y: reduceMotion ? 0 : 40,
                  scale: reduceMotion ? 1 : 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion
                    ? 0
                    : (index % 3) * 0.12,
                  ease: easeOut,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -10,
                        scale: 1.04,
                        transition: {
                          duration: 0.3,
                        },
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : { scale: 0.97 }
                }
                className="group relative flex min-h-[150px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white px-2 py-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl sm:min-h-0 sm:px-3 sm:py-8"
              >

                {/* SOFT HOVER GLOW */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#F0C9CB]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#F0C9CB]/60" />

                {/* ICON */}
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: 8,
                          scale: 1.12,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 16,
                  }}
                  className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F6E6E1] text-[#850F25] transition-colors duration-300 group-hover:bg-[#850F25] group-hover:text-white sm:mb-5 sm:h-16 sm:w-16"
                >
                  <Icon
                    className="h-7 w-7 sm:h-[30px] sm:w-[30px]"
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* SKILL NAME */}
                <h3 className="relative max-w-full text-[13px] font-medium leading-5 text-[#681523] sm:text-sm">
                  {skill.name}
                </h3>

                {/* BOTTOM ACCENT LINE */}
                <div className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#850F25] transition-all duration-500 group-hover:w-3/4" />

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
