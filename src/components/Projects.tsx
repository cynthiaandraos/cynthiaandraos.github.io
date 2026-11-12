
import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
} from "lucide-react";

import domina from "../assets/domina-transparent.png";
import jouy from "../assets/jouy-transparent.png";
import manymoda from "../assets/manymoda-transparent.png";
import oMarket from "../assets/o-market-transparent.png";
import snackElKhal from "../assets/snack-el-khal-logo.png";


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
  { title: "Snack الخال", category: "Logo Design", cover: snackElKhal, images: [{ src: snackElKhal, title: "Snack الخال Logo" }] },
  { title: "Manymoda", category: "Logo Design", cover: manymoda, images: [{ src: manymoda, title: "Manymoda Logo" }] },
  { title: "مونة إم جوي", category: "Logo Design", cover: jouy, images: [{ src: jouy, title: "مونة إم جوي Logo" }] },
  { title: "Domina Real Estate", category: "Logo Design", cover: domina, images: [{ src: domina, title: "Domina Real Estate Logo" }] },
  { title: "O-Market", category: "Logo Design", cover: oMarket, images: [{ src: oMarket, title: "O-Market Logo" }] },
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
  const reduceMotion = useReducedMotion();
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
    <>
    <section
      id="portfolio"
      className="scroll-mt-28 bg-[#FFF7F2] px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Logo Design heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
            LOGO DESIGN
          </p>

          {/* Bold italic title */}
          <h2
            className="text-4xl italic text-[#850F25] sm:text-5xl md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 700,
            }}
          >
            Logo Design
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            A collection of distinctive logos and visual concepts for independent brands and businesses.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              initial={reduceMotion ? false : { opacity: 0, y: 48, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : (index % 3) * 0.09,
                ease: "easeOut",
              }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              onClick={() => openProject(project)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white p-0 text-left shadow-sm transition-shadow duration-300 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#850F25]"
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

                <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#681523] shadow-sm transition-transform duration-300 motion-safe:group-hover:rotate-12">
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
      </div>

    </section>

      {/* Portal keeps gallery above the fixed header and animated sections. */}
      {createPortal(
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
              initial={reduceMotion ? false : {
                opacity: 0,
                scale: 0.94,
                y: 24,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 12,
              }}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
              onClick={(event) =>
                event.stopPropagation()
              }
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} gallery`}
              className="relative flex h-[100dvh] min-h-0 w-full flex-col overflow-hidden bg-[#FFF7F2] shadow-2xl sm:h-[90dvh] sm:max-w-5xl sm:rounded-2xl"
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
                className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#F7EDE8] px-3 pb-24 pt-16 sm:p-6"
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
                    initial={reduceMotion ? false : { opacity: 0, x: 12, scale: 0.985 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -12, scale: 0.985 }}
                    transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
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
                <div className="absolute inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+12px)] z-20 rounded-xl bg-[#F7EDE8]/95 px-2 py-2 text-center backdrop-blur-sm sm:hidden">
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
      </AnimatePresence>,
      document.body
      )}
    </>
  );
}
