
import { motion, useReducedMotion } from "motion/react";
import {
  Image,
  PenTool,
  Layers,
  Video,
  BookOpen,
  Scissors,
  Gem,
  Instagram,
  Package,
  Printer,
  Sparkles,
} from "lucide-react";

const skills = [
  { name: "Adobe Photoshop", icon: Image },
  { name: "Adobe Illustrator", icon: PenTool },
  { name: "Figma", icon: Layers },
  { name: "Adobe Premiere Pro", icon: Video },
  { name: "Adobe InDesign", icon: BookOpen },
  { name: "CapCut", icon: Scissors },
];

const services = [
  {
    title: "Brand Identity",
    description:
      "Creating cohesive visual identities that give brands a distinctive personality.",
    icon: Gem,
  },
  {
    title: "Logo Design",
    description:
      "Designing memorable logos that communicate a brand's character.",
    icon: PenTool,
  },
  {
    title: "Social Media Design",
    description:
      "Creating engaging visual content for digital platforms.",
    icon: Instagram,
  },
  {
    title: "Packaging Design",
    description:
      "Developing packaging visuals that make products stand out.",
    icon: Package,
  },
  {
    title: "Print Design",
    description:
      "Designing posters, brochures, and other printed materials.",
    icon: Printer,
  },
  {
    title: "Creative Design",
    description:
      "Turning creative concepts into meaningful visual experiences.",
    icon: Sparkles,
  },
];

export function Skills() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      {/* MY SKILLS */}
      <section
        id="skills"
        className="bg-[#FFF7F2] px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          {/* Skills heading */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
              CREATIVE TOOLKIT
            </p>

            <h2
              className="text-5xl text-[#850F25] md:text-6xl"
              style={{
                fontFamily: "'Bodoni Moda', Georgia, serif",
                fontWeight: 400,
              }}
            >
              My <span className="italic">Skills</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[#704B50]">
              The creative tools I use to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills cards */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 35,
                    scale: reduceMotion ? 1 : 0.96,
                  }}
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
                    duration: 0.65,
                    delay: reduceMotion ? 0 : index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -8, scale: 1.03 }
                  }
                  className="group flex flex-col items-center rounded-2xl border border-[#E8D2CF] bg-white px-3 py-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F6E6E1] text-[#850F25] transition-colors group-hover:bg-[#850F25] group-hover:text-white">
                    <Icon size={30} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-sm font-medium text-[#681523]">
                    {skill.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MY SERVICES */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#F7EAE5] px-6 py-24"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#E8C9C6]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Services heading */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
              WHAT I DO
            </p>

            <h2
              className="text-5xl text-[#850F25] md:text-7xl"
              style={{
                fontFamily: "'Bodoni Moda', Georgia, serif",
                fontWeight: 400,
              }}
            >
              My <span className="italic">Services</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[#704B50]">
              Thoughtful design solutions that bring creative
              ideas and brands to life.
            </p>

            {/* Animated decorative line */}
            <motion.div
              initial={{
                scaleX: reduceMotion ? 1 : 0,
              }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40"
            />
          </motion.div>

          {/* Services cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 40,
                    scale: reduceMotion ? 1 : 0.97,
                  }}
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
                    duration: 0.7,
                    delay: reduceMotion ? 0 : (index % 3) * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -8, scale: 1.02 }
                  }
                  className="group rounded-2xl border border-[#E8D2CF] bg-[#FFF9F6] p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F0DAD5] text-[#850F25] transition-colors group-hover:bg-[#850F25] group-hover:text-white">
                    <Icon size={30} strokeWidth={1.5} />
                  </div>

                  <h3
                    className="mb-3 text-3xl text-[#681523]"
                    style={{
                      fontFamily: "'Bodoni Moda', Georgia, serif",
                      fontWeight: 400,
                    }}
                  >
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-[#704B50]">
                    {service.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          {/* Contact button */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mt-14 text-center"
          >
            <motion.a
              href="#contact"
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -4, scale: 1.04 }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : { scale: 0.98 }
              }
              className="inline-flex items-center gap-3 rounded-full bg-[#850F25] px-8 py-4 text-white transition-colors hover:bg-[#681523]"
            >
              Let's Work Together
              <span aria-hidden="true">↗</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
