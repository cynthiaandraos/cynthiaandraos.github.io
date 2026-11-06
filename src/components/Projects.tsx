
import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
} from "lucide-react";

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
import goldenMarkCarRear from "../assets/golden-mark-car-rear.png";
import goldenMarkGlassStorefront from "../assets/golden-mark-glass-storefront.png";
import goldenMarkCarFront from "../assets/golden-mark-car-front.png";
import goldenMarkOfficeFacade from "../assets/golden-mark-office-facade.png";
import aurelleLogo from "../assets/aurelle-logo-transparent.png";
import snackElKhal from "../assets/snack-el-khal-logo.png";
import snackMenuAppetizers from "../assets/snack-el-khal-menu-appetizers.jpeg";
import snackMenuSandwiches from "../assets/snack-el-khal-menu-sandwiches.jpeg";
import snackMenuBurgers from "../assets/snack-el-khal-menu-burgers.jpeg";
import snackPackaging from "../assets/snack-el-khal-packaging.jpeg";
import snackSignage from "../assets/snack-el-khal-signage.jpeg";

import littleBloomLogo from "../assets/little-bloom-logo-transparent-background.png";

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
      { src: goldenMarkCarRear, title: "Golden Mark Vehicle Branding – Rear View" },
      { src: goldenMarkGlassStorefront, title: "Golden Mark Glass Storefront" },
      { src: goldenMarkCarFront, title: "Golden Mark Vehicle Branding – Front View" },
      { src: goldenMarkOfficeFacade, title: "Golden Mark Office Facade" },
    ],
  },
  {
    title: "MY Fitness by Myriam",
    category: "Logo Design & Brand Identity",
    cover: myFitness,
    images: [
      {
        src: myFitness,
        title: "MY Fitness by Myriam Logo",
      },
      {
        src: myFitnessDoor,
        title: "MY Fitness Glass Door Branding",
      },
    ],
  },
  {
    title: "House of Beauty",
    category: "Logo Design & Brand Identity",
    cover: houseOfBeauty,
    images: [
      {
        src: houseOfBeauty,
        title: "House of Beauty Logo",
      },
      {
        src: houseOfBeautyStorefront,
        title: "House of Beauty Storefront Branding",
      },
    ],
  },
  {
    title: "Little Bloom – Baby Collection",
    category: "Logo Design & Brand Identity",
    cover: littleBloomLogo,
    images: [
      { src: littleBloomLogo, title: "Little Bloom Logo" },
    ],
  },
  {
    title: "AURELLE Skincare",
    category: "Concept Brand Identity & Logo Design",
    cover: aurelleLogo,
    images: [
      {
        src: aurelleLogo,
        title: "AURELLE Skincare Logo",
      },
    ],
  },
  {
    title: "Snack الخال",
    category: "Logo Design & Brand Identity",
    cover: snackElKhal,
    images: [
      {
        src: snackMenuAppetizers,
        title: "Restaurant Menu – Appetizers",
      },
      {
        src: snackMenuSandwiches,
        title: "Restaurant Menu – Sandwiches",
      },
      {
        src: snackMenuBurgers,
        title: "Restaurant Menu – Burgers",
      },
      {
        src: snackPackaging,
        title: "Branded Food Packaging",
      },
      {
        src: snackSignage,
        title: "Outdoor Signage",
      },
    ],
  },
  {
    title: "Domina Real Estate",
    category: "Logo Design & Brand Identity",
    cover: domina,
    images: [
      {
        src: domina,
        title: "Domina Real Estate Logo",
      },
    ],
  },
  {
    title: "مونة إم جوي",
    category: "Logo Design & Brand Identity",
    cover: jouy,
    images: [
      {
        src: jouy,
        title: "مونة إم جوي Logo",
      },
      {
        src: jouyPackagingJars,
        title: "Jouy Product Packaging - Jars in Box",
      },
      {
        src: jouyProductLabel,
        title: "Jouy Product Label - Jar Close-Up",
      },
    ],
  },
  {
    title: "Manymoda",
    category: "Logo Design & Brand Application",
    cover: manymoda,
    images: [
      {
        src: manymoda,
        title: "Manymoda Original Logo",
      },
      {
        src: manymodaBag,
        title: "Manymoda Shopping Bag Branding",
      },
    ],
  },
  {
    title: "O-Market",
    category: "Logo Design & Brand Identity",
    cover: oMarket,
    images: [
      {
        src: oMarket,
        title: "O-Market Logo",
      },
    ],
  },
];

// Cache image preloads to avoid duplicate requests.
const preloadedImages = new Set<string>();

function preloadImage(src: string) {
  if (preloadedImages.has(src)) return;

  preloadedImages.add(src);

  const image = new Image();
  image.src = src;

  image.onerror = () => {
    preloadedImages.delete(src);
  };
}

export function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [activeImage, setActiveImage] = useState(0);

  const touchStart = useRef<{
    x: number;
    y: number;
  } | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openProject = (project: Project) => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    // Start downloading the first gallery image.
    preloadImage(project.images[0].src);

    touchStart.current = null;
    setActiveImage(0);
    setSelectedProject(project);
  };

  const closeProject = () => {
    touchStart.current = null;
    setSelectedProject(null);
    setActiveImage(0);

    requestAnimationFrame(() => {
      previousFocusRef.current?.focus();
    });
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

  // Preload the next image for smoother swiping.
  useEffect(() => {
    if (!selectedProject) return;

    const images = selectedProject.images;

    if (images.length <= 1) return;

    const nextIndex =
      (activeImage + 1) % images.length;

    preloadImage(images[nextIndex].src);
  }, [selectedProject, activeImage]);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setActiveImage(0);
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
            (current -
              1 +
              selectedProject.images.length) %
            selectedProject.images.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedProject]);

  const handleTouchStart = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    const touch = event.touches[0];

    if (!touch) return;

    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleTouchEnd = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    if (!touchStart.current || !selectedProject) {
      return;
    }

    const touch = event.changedTouches[0];

    if (!touch) {
      touchStart.current = null;
      return;
    }

    const differenceX =
      touch.clientX - touchStart.current.x;

    const differenceY =
      touch.clientY - touchStart.current.y;

    touchStart.current = null;

    if (selectedProject.images.length <= 1) {
      return;
    }

    if (
      Math.abs(differenceX) > 45 &&
      Math.abs(differenceX) >
        Math.abs(differenceY) * 1.2
    ) {
      if (differenceX < 0) {
        nextImage();
      } else {
        previousImage();
      }
    }
  };

  return (
    <section
      id="portfolio"
      className="scroll-mt-28 bg-[#FFF7F2] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Logo Design heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
            02 / LOGO DESIGN & BRANDING
          </p>

          {/* Bold italic title */}
          <h2
            className="text-5xl italic text-[#850F25] md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 700,
            }}
          >
            Logo Design
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            Explore my creative work in logo design,
            brand identity, and visual storytelling.
          </p>
        </motion.div>

        {/* Project cards */}
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
              {/* Cover */}
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#F7EDE8]">
                <div className={`absolute inset-0 flex items-center justify-center bg-[#F7EDE8] ${["Golden Mark", "MY Fitness by Myriam", "House of Beauty"].includes(project.title) ? "p-0" : "p-6 sm:p-8"}`}>
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className={`block h-full w-full object-contain transition-transform duration-500 ${["Golden Mark", "MY Fitness by Myriam", "House of Beauty"].includes(project.title) ? "scale-[1.18] group-hover:scale-[1.24]" : "group-hover:scale-105"}`}
                  />
                </div>

                <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#681523] shadow-sm">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Card details */}
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
            fontFamily:
              "'Bodoni Moda', Georgia, serif",
          }}
        >
          Every design tells a story.
        </p>
      </div>

      {/* Project gallery modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            className="fixed inset-0 z-[10010] flex items-center justify-center bg-[#210C12]/90 p-0 backdrop-blur-sm sm:p-6"
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
              className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-[#FFF7F2] shadow-2xl sm:h-[90dvh] sm:max-w-5xl sm:rounded-2xl"
            >
              {/* Desktop gallery header */}
              <div className="hidden shrink-0 items-center justify-between gap-4 border-b border-[#E8D2CF] px-6 py-4 sm:flex">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#A45D69]">
                    {selectedProject.category}
                  </p>

                  <h3
                    className="mt-1 text-2xl text-[#681523]"
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

              {/* Mobile close button */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeProject}
                aria-label="Close gallery"
                className="absolute right-4 top-[calc(env(safe-area-inset-top)+16px)] z-30 flex h-11 w-11 items-center justify-center rounded-full bg-[#681523] text-white shadow-lg sm:hidden"
              >
                <X size={22} />
              </button>

              {/* Gallery image */}
              <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={() => {
                  touchStart.current = null;
                }}
                className="relative flex min-h-0 flex-1 items-center justify-center bg-[#F7EDE8] p-4 pb-20 pt-20 sm:p-6"
                style={{
                  touchAction: "pan-y",
                }}
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  <motion.img
                    key={`${selectedProject.title}-${activeImage}`}
                    src={
                      selectedProject.images[activeImage].src
                    }
                    alt={
                      selectedProject.images[activeImage].title
                    }
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    draggable={false}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-full w-full select-none object-contain"
                  />
                </AnimatePresence>

                {/* Desktop navigation arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#681523] shadow-md sm:flex"
                    >
                      <ArrowLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#681523] shadow-md sm:flex"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </>
                )}

                {/* Mobile gallery information */}
                <div className="absolute inset-x-4 bottom-[calc(env(safe-area-inset-bottom)+16px)] z-20 text-center sm:hidden">
                  <p
                    className="mb-2 text-lg text-[#681523]"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {selectedProject.title}
                  </p>

                  <p className="text-xs text-[#A45D69]">
                    {activeImage + 1} /{" "}
                    {selectedProject.images.length}
                  </p>

                  {selectedProject.images.length > 1 && (
                    <p className="mt-2 text-[11px] uppercase tracking-widest text-[#A45D69]">
                      Swipe to explore
                    </p>
                  )}
                </div>
              </div>

              {/* Desktop image title */}
              <div className="hidden shrink-0 border-t border-[#E8D2CF] px-4 py-3 text-center sm:block">
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

              {/* Desktop gallery thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="hidden shrink-0 justify-center gap-3 overflow-x-auto border-t border-[#E8D2CF] p-3 sm:flex">
                  {selectedProject.images.map(
                    (image, index) => (
                      <button
                        key={image.title}
                        type="button"
                        onClick={() =>
                          setActiveImage(index)
                        }
                        aria-label={`View ${image.title}`}
                        className={`h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 ${
                          activeImage === index
                            ? "border-[#850F25]"
                            : "border-transparent opacity-60"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.title}
                          loading="lazy"
                          decoding="async"
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
