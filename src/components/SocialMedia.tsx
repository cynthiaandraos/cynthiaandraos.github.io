
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
} from "lucide-react";

import firasCover from "../assets/firas-cover.jpg";

import firasGrill from "../assets/firas-grill-post.png";
import firasSandwich from "../assets/firas-sandwich-post.png";
import firasChicken from "../assets/firas-chicken-post.png";
import firasChristmas42 from "../assets/firas-christmas-42.png";
import firasChristmas36 from "../assets/firas-christmas-36.png";

// New menu-item designs
import chickenRollSub from "../assets/firas-chicken-roll-sub.jpeg";
import kababDjej from "../assets/firas-kabab-djej.jpeg";
import hawaiiBurger from "../assets/firas-hawaii-burger.jpeg";
import steakSub from "../assets/firas-steak-sub.jpeg";

const projects = [
  {
    id: 1,
    title: "Machewe Firas",
    subtitle: "Restaurant Social Media Campaign",
    category: "Food & Beverage",
    cover: firasCover,
    description:
      "Social media designs showcasing grilled specialties, seasonal promotions, and new menu-item launches for Machewe Firas.",
    images: [
      {
        src: firasGrill,
        title: "Grill Promotion",
      },
      {
        src: firasSandwich,
        title: "Sandwich Promotion",
      },
      {
        src: firasChicken,
        title: "Chicken Promotion",
      },
      {
        src: firasChristmas42,
        title: "Christmas Campaign — 42",
      },
      {
        src: firasChristmas36,
        title: "Christmas Campaign — 36",
      },
      {
        src: chickenRollSub,
        title: "New Chicken Roll SUB",
      },
      {
        src: kababDjej,
        title: "New Kabab Djej",
      },
      {
        src: hawaiiBurger,
        title: "New Hawaii Burger",
      },
      {
        src: steakSub,
        title: "New Steak SUB",
      },
    ],
  },
];

export function SocialMedia() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  const [activeImage, setActiveImage] = useState(0);

  const openProject = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImage(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;

    setActiveImage((current) =>
      (current + 1) % selectedProject.images.length
    );
  };

  const previousImage = () => {
    if (!selectedProject) return;

    setActiveImage((current) =>
      (current - 1 + selectedProject.images.length) %
      selectedProject.images.length
    );
  };

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProject();
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) =>
          (current + 1) % selectedProject.images.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          (current - 1 + selectedProject.images.length) %
          selectedProject.images.length
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="social-media"
      className="scroll-mt-28 bg-[#FFF7F2] px-6 py-24 text-[#681523]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A45D69]">
            SOCIAL MEDIA PORTFOLIO
          </p>

          <h2
            className="text-5xl text-[#850F25] md:text-7xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
              fontWeight: 400,
            }}
          >
            Social Media{" "}
            <span className="italic">Design</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            Creative social media campaigns, promotional
            artwork, and engaging visual content designed
            to bring brands and their products to life.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              className="group overflow-hidden rounded-2xl border border-[#E8D2CF] bg-[#F7EDE8] shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => openProject(project)}
                className="block h-full w-full cursor-pointer text-left"
                aria-label={`View ${project.title} designs`}
              >
                {/* Cover photo */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.cover}
                    alt={`${project.title} cover`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#681523] shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Card text */}
                <div className="p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#A45D69]">
                    {project.category}
                  </p>

                  <h3
                    className="text-2xl text-[#681523]"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#A45D69]">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#704B50]">
                    {project.description}
                  </p>

                  <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#850F25]">
                    View Campaign
                    <ArrowUpRight size={16} />
                  </p>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Gallery popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="social-media-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            className="fixed inset-0 z-[10010] flex items-center justify-center bg-[#210C12]/90 p-3 backdrop-blur-sm md:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} gallery`}
              className="flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#FFF7F2] shadow-2xl"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between gap-4 border-b border-[#E8D2CF] px-4 py-4 sm:px-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#A45D69]">
                    {selectedProject.subtitle}
                  </p>

                  <h3
                    className="mt-1 text-xl text-[#681523] sm:text-2xl"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeProject}
                  aria-label="Close gallery"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#681523] text-white hover:bg-[#850F25]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main image */}
              <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#F7EDE8] p-4 sm:p-6">
                <img
                  key={activeImage}
                  src={selectedProject.images[activeImage].src}
                  alt={selectedProject.images[activeImage].title}
                  className="max-h-full max-w-full object-contain"
                />

                {/* Previous */}
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous design"
                  className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#681523] shadow-md hover:bg-white sm:left-4"
                >
                  <ArrowLeft size={20} />
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next design"
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#681523] shadow-md hover:bg-white sm:right-4"
                >
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Image name and counter */}
              <div className="border-t border-[#E8D2CF] px-4 py-3 text-center">
                <p className="text-sm font-medium text-[#681523]">
                  {selectedProject.images[activeImage].title}
                </p>

                <p className="mt-1 text-xs text-[#A45D69]">
                  {activeImage + 1} /{" "}
                  {selectedProject.images.length}
                </p>
              </div>

              {/* Gallery thumbnails */}
              <div className="flex shrink-0 gap-3 overflow-x-auto border-t border-[#E8D2CF] bg-[#FFF7F2] p-3 sm:p-4">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={`${image.title}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`View ${image.title}`}
                    className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-20 sm:w-20 ${
                      activeImage === index
                        ? "border-[#850F25]"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
