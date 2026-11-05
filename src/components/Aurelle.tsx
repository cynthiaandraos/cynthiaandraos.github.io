
import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import serum from "../assets/aurelle-radiance-serum.png";
import serumBox from "../assets/aurelle-radiance-serum-box.png";
import serumSet from "../assets/aurelle-radiance-serum-set.png";
import faceCream from "../assets/aurelle-face-cream.png";
import faceCreamBox from "../assets/aurelle-face-cream-box.png";
import faceCreamSet from "../assets/aurelle-face-cream-set.png";
import cleanser from "../assets/aurelle-gentle-cleanser.png";
import shoppingBag from "../assets/aurelle-luxury-shopping-bag.png";

import serumCover from "../assets/aurelle-serum-cover.png";
import faceCreamCover from "../assets/aurelle-face-cream-cover.png";
import cleanserCover from "../assets/aurelle-cleanser-cover.png";
import shoppingBagCover from "../assets/aurelle-shopping-bag-cover.png";

type GalleryImage = {
  src: string;
  label: string;
};

type AurelleProject = {
  id: number;
  title: string;
  category: string;
  description: string;
  cover: string;
  images: GalleryImage[];
};

const projects: AurelleProject[] = [
  {
    id: 1,
    title: "Radiance Serum",
    category: "Skincare Packaging · 30 ml",
    description:
      "Luxury serum bottle, matching carton, and complete packaging presentation.",
    cover: serumCover,
    images: [
      {
        src: serum,
        label: "Radiance Serum Bottle · 30 ml",
      },
      {
        src: serumBox,
        label: "Radiance Serum Packaging Box",
      },
      {
        src: serumSet,
        label: "Radiance Serum Packaging Set",
      },
    ],
  },
  {
    id: 2,
    title: "Hydrating Face Cream",
    category: "Skincare Packaging · 50 ml",
    description:
      "Elegant face cream jar with coordinating box and product packaging mockup.",
    cover: faceCreamCover,
    images: [
      {
        src: faceCream,
        label: "Hydrating Face Cream Jar · 50 ml",
      },
      {
        src: faceCreamBox,
        label: "Hydrating Face Cream Packaging Box",
      },
      {
        src: faceCreamSet,
        label: "Hydrating Face Cream Packaging Set",
      },
    ],
  },
  {
    id: 3,
    title: "Gentle Cleanser",
    category: "Skincare Packaging · 150 ml",
    description:
      "Minimal, refined cleanser tube with ivory, burgundy, and gold packaging details.",
    cover: cleanserCover,
    images: [
      {
        src: cleanser,
        label: "Gentle Cleanser Tube · 150 ml",
      },
    ],
  },
  {
    id: 4,
    title: "Luxury Shopping Bag",
    category: "Brand Identity · Packaging Design",
    description:
      "A luxury shopping bag concept featuring AURELLE's signature burgundy, champagne-gold detailing, and elegant brand presentation.",
    cover: shoppingBagCover,
    images: [
      {
        src: shoppingBag,
        label: "AURELLE Luxury Shopping Bag Design",
      },
    ],
  },
];

export function Aurelle() {
  const [selected, setSelected] =
    useState<AurelleProject | null>(null);

  const [activeImage, setActiveImage] = useState(0);

  const reduceMotion = useReducedMotion();

  const touchStart = useRef<{
    x: number;
    y: number;
  } | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const previousFocusRef = useRef<HTMLElement | null>(
    null
  );

  const openProject = (project: AurelleProject) => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    touchStart.current = null;
    setActiveImage(0);
    setSelected(project);
  };

  const closeProject = () => {
    touchStart.current = null;
    setSelected(null);
    setActiveImage(0);

    requestAnimationFrame(() => {
      previousFocusRef.current?.focus();
    });
  };

  const nextImage = () => {
    if (!selected || selected.images.length <= 1) {
      return;
    }

    setActiveImage(
      (current) =>
        (current + 1) % selected.images.length
    );
  };

  const previousImage = () => {
    if (!selected || selected.images.length <= 1) {
      return;
    }

    setActiveImage(
      (current) =>
        (current - 1 + selected.images.length) %
        selected.images.length
    );
  };

  const handleTouchStart = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    if (
      window.matchMedia("(min-width: 640px)").matches
    ) {
      return;
    }

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
    if (!touchStart.current || !selected) {
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

    if (selected.images.length <= 1) {
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

  useEffect(() => {
    if (!selected) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
        setActiveImage(0);
      }

      if (
        event.key === "ArrowRight" &&
        selected.images.length > 1
      ) {
        setActiveImage(
          (current) =>
            (current + 1) % selected.images.length
        );
      }

      if (
        event.key === "ArrowLeft" &&
        selected.images.length > 1
      ) {
        setActiveImage(
          (current) =>
            (current - 1 + selected.images.length) %
            selected.images.length
        );
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);

  return (
    <section
      id="aurelle"
      className="scroll-mt-28 bg-[#FFF7F2] px-6 py-24 text-[#681523]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A45D69]">
            02 / PACKAGING & LABELS
          </p>

          {/* Bold italic heading matching 5 Beans */}
          <h2
            className="text-5xl italic text-[#850F25] md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 700,
            }}
          >
            Aurelle SkinCare
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            Explore AURELLE skincare packaging, from the
            Radiance Serum and Hydrating Face Cream to the
            Gentle Cleanser. Select a product to see its
            packaging designs.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.65,
                delay: reduceMotion
                  ? 0
                  : index * 0.12,
                ease: "easeOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -7 }
              }
              className="group h-full overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => openProject(project)}
                className="flex h-full w-full cursor-pointer flex-col text-left"
                aria-label={`Open ${project.title} gallery`}
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#F8F0EC]">
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#681523] shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="flex w-full flex-1 flex-col p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#A45D69]">
                    {project.category}
                  </p>

                  <h3
                    className="text-2xl text-[#681523]"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                      fontWeight: 400,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#704B50]">
                    {project.description}
                  </p>

                  <p className="mt-auto flex items-center gap-2 pt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#850F25]">
                    View Project
                    <ArrowUpRight size={16} />
                  </p>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* AURELLE gallery */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="aurelle-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[10010] flex items-center justify-center bg-[#210C12]/85 p-0 backdrop-blur-sm sm:p-3 md:p-8"
            onClick={closeProject}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 25,
                scale: reduceMotion ? 1 : 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.97,
              }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} gallery`}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-[#FFF7F2] shadow-2xl sm:h-auto sm:max-h-[92vh] sm:max-w-4xl sm:overflow-y-auto sm:rounded-3xl sm:p-4 md:p-8"
            >
              {/* Desktop gallery header */}
              <div className="mb-6 hidden shrink-0 pr-12 sm:block">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#A45D69]">
                  AURELLE Skincare
                </p>

                <h3
                  className="text-3xl text-[#850F25] md:text-4xl"
                  style={{
                    fontFamily:
                      "'Bodoni Moda', Georgia, serif",
                    fontWeight: 400,
                  }}
                >
                  {selected.title}
                </h3>
              </div>

              {/* Close button */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeProject}
                aria-label="Close gallery"
                className="absolute right-4 top-[calc(env(safe-area-inset-top)+16px)] z-30 flex h-11 w-11 items-center justify-center rounded-full bg-[#681523] text-white shadow-lg transition hover:bg-[#A13A4B] sm:top-4"
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
                style={{
                  touchAction: "pan-y",
                }}
                className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#F8F0EC] px-4 pb-24 pt-20 sm:min-h-[260px] sm:flex-none sm:rounded-2xl sm:p-0"
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  <motion.img
                    key={`${selected.id}-${activeImage}`}
                    src={
                      selected.images[activeImage].src
                    }
                    alt={
                      selected.images[activeImage].label
                    }
                    draggable={false}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: reduceMotion ? 0 : -20,
                    }}
                    transition={{
                      duration: reduceMotion
                        ? 0
                        : 0.25,
                    }}
                    className="h-full w-full select-none object-contain sm:h-auto sm:max-h-[60vh]"
                  />
                </AnimatePresence>

                {/* Desktop navigation arrows */}
                {selected.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#681523]/90 text-white hover:bg-[#850F25] sm:flex"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#681523]/90 text-white hover:bg-[#850F25] sm:flex"
                    >
                      <ChevronRight size={24} />
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
                    {selected.title}
                  </p>

                  <p className="text-xs text-[#A45D69]">
                    {activeImage + 1} /{" "}
                    {selected.images.length}
                  </p>

                  {selected.images.length > 1 && (
                    <p className="mt-2 text-[11px] uppercase tracking-widest text-[#A45D69]">
                      Swipe to explore
                    </p>
                  )}
                </div>
              </div>

              {/* Desktop image information */}
              <div className="mt-5 hidden shrink-0 text-center sm:block">
                <p className="text-sm font-medium text-[#681523]">
                  {selected.images[activeImage].label}
                </p>

                <p className="mt-1 text-xs text-[#A45D69]">
                  {activeImage + 1} of{" "}
                  {selected.images.length}
                </p>
              </div>

              {/* Desktop thumbnails */}
              {selected.images.length > 1 && (
                <div className="mt-5 hidden flex-wrap justify-center gap-3 sm:flex">
                  {selected.images.map(
                    (image, index) => (
                      <button
                        key={image.label}
                        type="button"
                        onClick={() =>
                          setActiveImage(index)
                        }
                        aria-label={`View ${image.label}`}
                        aria-pressed={
                          activeImage === index
                        }
                        className={`h-20 w-20 overflow-hidden rounded-xl border-2 bg-white p-1 transition ${
                          activeImage === index
                            ? "border-[#850F25]"
                            : "border-[#E8D2CF]"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt=""
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
