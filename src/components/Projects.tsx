
import { motion } from "motion/react";

import domina from "../assets/domina.jpeg";
import goldenMark from "../assets/golden-mark.png";
import houseOfBeauty from "../assets/house-of-beauty.jpg";
import jouy from "../assets/jouy.jpg";
import myFitness from "../assets/my-fitness.jpg";
import manymoda from "../assets/manymoda.jpg";

const projects = [
  {
    id: 1,
    title: "Domina Real Estate",
    category: "Real Estate Branding",
    image: domina,
  },
  {
    id: 2,
    title: "Golden Mark",
    category: "Logo Design & Branding",
    image: goldenMark,
  },
  {
    id: 3,
    title: "House of Beauty",
    category: "Beauty Brand Identity",
    image: houseOfBeauty,
  },
  {
    id: 4,
    title: "مونة إم جوي",
    category: "Food Branding & Logo Design",
    image: jouy,
  },
  {
    id: 5,
    title: "MY Fitness by Myriam",
    category: "Fitness Brand Identity",
    image: myFitness,
  },
  {
    id: 6,
    title: "Manymoda",
    category: "Fashion Logo Design",
    image: manymoda,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FFF7F2] px-6 py-24"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Portfolio heading */}
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
            Explore my creative work in logo design,
            brand identity, and visual storytelling.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        {/* Six logo projects */}
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
              {/* Golden Mark gets a white card background */}
              <div
                className={`aspect-square overflow-hidden ${
                  project.id === 2
                    ? "bg-white"
                    : "bg-[#F8F0EC]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project information */}
              <div className="p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#A45D69]">
                  {project.category}
                </p>

                <h3
                  className="text-2xl text-[#681523]"
                  style={{
                    fontFamily: "'Bodoni Moda', Georgia, serif",
                    fontWeight: 400,
                  }}
                >
                  {project.title}
                </h3>
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
