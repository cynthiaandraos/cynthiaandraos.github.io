
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

export function Skills() {
  const reduceMotion = useReducedMotion();

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-[#FFF7F2] px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* ANIMATED SKILLS HEADING */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 text-center"
        >
          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 15 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A45D69]"
          >
            CREATIVE TOOLKIT
          </motion.p>

          <h2
            className="text-5xl italic text-[#850F25] md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 700,
            }}
          >
            My Skills
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[#704B50]">
            The creative tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* ANIMATED SKILLS CARDS */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 55,
                        scale: 0.9,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: reduceMotion
                    ? 0
                    : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -10,
                        scale: 1.04,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.97,
                      }
                }
                className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white px-3 py-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >

                {/* SOFT HOVER GLOW */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#F0C9CB]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#F0C9CB]/60" />

                {/* ANIMATED ICON */}
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
                  className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F6E6E1] text-[#850F25] transition-colors duration-300 group-hover:bg-[#850F25] group-hover:text-white"
                >
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* SKILL NAME */}
                <h3 className="relative text-sm font-medium text-[#681523]">
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
