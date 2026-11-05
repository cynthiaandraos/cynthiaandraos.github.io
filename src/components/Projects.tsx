
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";

import domina from "../assets/domina-transparent.png";
import goldenMark from "../assets/golden-mark-transparent.png";
import houseOfBeauty from "../assets/house-of-beauty-transparent.png";
import jouy from "../assets/jouy-transparent.png";
import myFitness from "../assets/my-fitness-transparent.png";
import myFitnessDoor from "../assets/my-fitness-door-branding.jpeg";
import manymoda from "../assets/manymoda-transparent.png";
import oMarket from "../assets/o-market-transparent.png";
import manymodaBag from "../assets/manymoda-shopping-bag.jpeg";
import jouyPackagingJars from "../assets/jouy-packaging-jars.jpeg";
import jouyProductLabel from "../assets/jouy-product-label.jpeg";
import houseOfBeautyStorefront from "../assets/house-of-beauty-storefront.png";
import goldenMarkCarBranding from "../assets/golden-mark-car-branding.jpeg";
import aurelleLogo from "../assets/aurelle-logo-transparent.png";
import snackElKhal from "../assets/snack-el-khal-logo.png";
import snackMenuAppetizers from "../assets/snack-el-khal-menu-appetizers.jpeg";
import snackMenuSandwiches from "../assets/snack-el-khal-menu-sandwiches.jpeg";
import snackMenuBurgers from "../assets/snack-el-khal-menu-burgers.jpeg";
import snackPackaging from "../assets/snack-el-khal-packaging.jpeg";
import snackSignage from "../assets/snack-el-khal-signage.jpeg";

type ProjectImage = {
  src: string;
  title: string;
};

type Project = {
  title: string;
  category: string;
  cover: string;
  images: ProjectImage[];
};

const projects: Project[] = [
  {
    title: "Golden Mark",
    category: "Logo Design & Brand Identity",
    cover: goldenMark,
    images: [
      { src: goldenMark, title: "Golden Mark Logo" },
      { src: goldenMarkCarBranding, title: "Golden Mark Vehicle Branding" },
    ],
  },
  {
    title: "AURELLE Skincare",
    category: "Concept Brand Identity & Logo Design",
    cover: aurelleLogo,
    images: [{ src: aurelleLogo, title: "AURELLE Skincare Logo" }],
  },
  {
    title: "MY Fitness by Myriam",
    category: "Logo Design & Brand Identity",
    cover: myFitness,
    images: [
      { src: myFitness, title: "MY Fitness by Myriam Logo" },
      { src: myFitnessDoor, title: "MY Fitness Glass Door Branding" },
    ],
  },
  {
    title: "House of Beauty",
    category: "Logo Design & Brand Identity",
    cover: houseOfBeauty,
    images: [
      { src: houseOfBeauty, title: "House of Beauty Logo" },
      { src: houseOfBeautyStorefront, title: "House of Beauty Storefront Branding" },
    ],
  },
  {
    title: "Snack الخال",
    category: "Logo Design & Brand Identity",
    cover: snackElKhal,
    images: [
      { src: snackMenuAppetizers, title: "Restaurant Menu – Appetizers" },
      { src: snackMenuSandwiches, title: "Restaurant Menu – Sandwiches" },
      { src: snackMenuBurgers, title: "Restaurant Menu – Burgers" },
      { src: snackPackaging, title: "Branded Food Packaging" },
      { src: snackSignage, title: "Outdoor Signage" },
    ],
  },
  {
    title: "Domina Real Estate",
    category: "Logo Design & Brand Identity",
    cover: domina,
    images: [{ src: domina, title: "Domina Real Estate Logo" }],
  },
  {
    title: "مونة إم جوي",
    category: "Logo Design & Brand Identity",
    cover: jouy,
    images: [
      { src: jouy, title: "مونة إم جوي Logo" },
      { src: jouyPackagingJars, title: "Jouy Product Packaging - Jars in Box" },
      { src: jouyProductLabel, title: "Jouy Product Label - Jar Close-Up" },
    ],
  },
  {
    title: "Manymoda",
    category: "Logo Design & Brand Application",
    cover: manymoda,
    images: [
      { src: manymoda, title: "Manymoda Original Logo" },
      { src: manymodaBag, title: "Manymoda Shopping Bag Branding" },
    ],
  },
  {
    title: "O-Market",
    category: "Logo Design & Brand Identity",
    cover: oMarket,
    images: [{ src: oMarket, title: "O-Market Logo" }],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImage(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;

    setActiveImage(
      (current) =>
        (current + 1) % selectedProject.images.length
    );
  };

  const previousImage = () => {
    if (!selectedProject) return;

    setActiveImage(
      (current) =>
        (current - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProject();
      }

      if (event.key === "ArrowRight") {
        setActiveImage(
          (current) =>
            (current + 1) % selectedProject.images.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImage(
          (current) =>
            (current - 1 + selectedProject.images.length) %
            selectedProject.images.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedProject]);

  return (
    <section
      id="portfolio"
      className="scroll-mt-28 bg-[#FFF7F2] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
            02 / SELECTED WORK
          </p>

          <h2
            className="text-5xl text-[#681523] md:text-7xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
            }}
          >
            My <span className="italic">Portfolio</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            Explore my creative work in logo design,
            brand identity, and visual storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              onClick={() => openProject(project)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white p-0 text-left shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#F7EDE8]">
                <div className="absolute inset-0 flex items-center justify-center bg-[#F7EDE8] p-6 sm:p-8">
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    className="block h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#681523] shadow-sm">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="flex w-full flex-1 flex-col bg-white p-6">
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

                <p className="mt-auto flex items-center gap-2 pt-5 text-xs font-semibold uppercase tracking-widest text-[#850F25]">
                  View Project
                  <ArrowUpRight size={16} />
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <p
          className="mt-16 text-center text-2xl italic text-[#850F25]"
          style={{
            fontFamily: "'Bodoni Moda', Georgia, serif",
          }}
        >
          Every design tells a story.
        </p>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            className="fixed inset-0 z-[10010] flex items-center justify-center bg-[#210C12]/90 p-3 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} gallery`}
              className="flex h-[90dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#FFF7F2] shadow-2xl"
            >
              <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[#E8D2CF] px-4 py-4 sm:px-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#A45D69]">
                    {selectedProject.category}
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
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#681523] text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[#F7EDE8] p-3 sm:p-6">
                <img
                  key={`${selectedProject.title}-${activeImage}`}
                  src={
                    selectedProject.images[activeImage].src
                  }
                  alt={
                    selectedProject.images[activeImage].title
                  }
                  className="h-full w-full object-contain"
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous image"
                      className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#681523] shadow-md sm:left-4"
                    >
                      <ArrowLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#681523] shadow-md sm:right-4"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </>
                )}
              </div>

              <div className="shrink-0 border-t border-[#E8D2CF] px-4 py-3 text-center">
                <p className="text-sm font-medium text-[#681523]">
                  {
                    selectedProject.images[activeImage]
                      .title
                  }
                </p>

                <p className="mt-1 text-xs text-[#A45D69]">
                  {activeImage + 1} /{" "}
                  {selectedProject.images.length}
                </p>
              </div>

              {selectedProject.images.length > 1 && (
                <div className="flex shrink-0 justify-center gap-3 overflow-x-auto border-t border-[#E8D2CF] p-3">
                  {selectedProject.images.map(
                    (image, index) => (
                      <button
                        key={image.title}
                        type="button"
                        onClick={() =>
                          setActiveImage(index)
                        }
                        aria-label={`View ${image.title}`}
                        className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 sm:h-20 sm:w-20 ${
                          activeImage === index
                            ? "border-[#850F25]"
                            : "border-transparent opacity-60"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.title}
                          className="h-full w-full object-contain"
                        />
                      </button>
                    )
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
