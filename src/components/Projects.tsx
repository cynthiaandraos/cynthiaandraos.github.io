
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

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
    category: "Real Estate Branding",
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
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  // Close the preview when Escape is pressed
  useEffect(() => {
    if (!selectedProject) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

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
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="block w-full cursor-pointer text-left"
                aria-label={`View ${project.title} project`}
              >
                {/* Original logo image */}
                <div
                  className={`relative aspect-square overflow-hidden ${
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

                  {/* View project icon */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#681523] shadow-sm transition-transform group-hover:scale-110">
                    <ArrowUpRight size={20} />
                  </div>
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

                  <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[#A45D69]">
                    Click to view project
                  </p>
                </div>
              </button>
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
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

      {/* Full project preview */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="project-preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#210C12]/85 p-4 backdrop-blur-sm md:p-8"
            onClick={() => setSelectedProject(null)}
            role="presentation"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} project preview`}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-[#FFF7F2] p-5 shadow-2xl md:p-8"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project preview"
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#681523] text-white transition hover:bg-[#A13A4B]"
              >
                <X size={22} />
              </button>

              {/* Original image enlarged */}
              <div
                className={`flex min-h-[250px] items-center justify-center overflow-hidden rounded-2xl ${
                  selectedProject.id === 2
                    ? "bg-white"
                    : "bg-[#F8F0EC]"
                }`}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-h-[60vh] w-full object-contain"
                />
              </div>

              {/* Project details */}
              <div className="pt-7 text-center">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#A45D69]">
                  {selectedProject.category}
                </p>

                <h3
                  className="text-3xl text-[#681523] md:text-5xl"
                  style={{
                    fontFamily: "'Bodoni Moda', Georgia, serif",
                    fontWeight: 400,
                  }}
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-4 text-sm text-[#704B50]">
                  Logo Design &amp; Creative Portfolio
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="mt-7 rounded-full border border-[#681523] px-7 py-3 text-sm text-[#681523] transition hover:bg-[#681523] hover:text-white"
                >
                  Back to Portfolio
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
