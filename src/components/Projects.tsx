
import { motion } from "motion/react";

import houseOfBeauty from "figma:asset/dff9deed159c10ff39a7986d339e36135ec2a8dc.png";
import jouyLogo from "figma:asset/6107f87a0c932a3ae898809e94b332eb6ca45fe5.png";
import myFitness from "figma:asset/14c3aa15315c95a218e92e58a564a27862051855.png";

const projects = [
  {
    id: 1,
    title: "House of Beauty",
    category: "Logo Design & Branding",
    image: houseOfBeauty,
  },
  {
    id: 2,
    title: "مونة إم جوي",
    category: "Logo Design & Branding",
    image: jouyLogo,
  },
  {
    id: 3,
    title: "MY Fitness by Myriam",
    category: "Logo Design & Brand Identity",
    image: myFitness,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FFF7F2] px-6 py-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#EBC5C5]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#A45D69]">
            02 / SELECTED WORK
          </p>

          <h2
            className="text-5xl text-[#850F25] md:text-7xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
              fontWeight: 400,
            }}
          >
            My <span className="italic">Portfolio</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[#704B50]">
            A collection of creative projects exploring
            visual identity, branding, and design.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F8F0EC] p-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#A45D69]">
                    {project.category}
                  </p>

                  <h3
                    className="text-2xl text-[#681523]"
                    style={{
                      fontFamily: "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#850F25] text-xl text-[#850F25] transition-colors group-hover:bg-[#850F25] group-hover:text-white">
                  ↗
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-16 text-center">
          <p
            className="text-2xl italic text-[#850F25] md:text-3xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
            }}
          >
            Every design tells a story.
          </p>
        </div>
      </div>
    </section>
  );
}
