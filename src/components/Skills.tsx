
import { motion } from "motion/react";
import {
  Image,
  PenTool,
  Layers,
  Video,
  BookOpen,
  Scissors,
  Gem,
  Palette,
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
  return (
    <>
      {/* MY SKILLS */}
      <section
        id="skills"
        className="bg-[#FFF7F2] px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group flex flex-col items-center rounded-2xl border border-[#E8D2CF] bg-white px-3 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
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
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#E8C9C6]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

            <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-[#E8D2CF] bg-[#FFF9F6] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F0DAD5] text-[#850F25] transition-colors group-hover:bg-[#850F25] group-hover:text-white">
                    <Icon size={30} strokeWidth={1.5} />
                  </div>

                  <h3
                    className="mb-3 text-3xl text-[#681523]"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
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

          <div className="mt-14 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#850F25] px-8 py-4 text-white transition-colors hover:bg-[#681523]"
            >
              Let's Work Together
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
