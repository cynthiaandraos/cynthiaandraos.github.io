
import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

// MACHEWE FIRAS - ORIGINAL CAMPAIGN
import firasCover from "../assets/firas-cover.jpg";
import firasGrill from "../assets/firas-grill-post.png";
import firasSandwich from "../assets/firas-sandwich-post.png";
import firasChicken from "../assets/firas-chicken-post.png";
import firasChristmas42 from "../assets/firas-christmas-42.png";
import firasChristmas36 from "../assets/firas-christmas-36.png";

// MACHEWE FIRAS - NEW MENU LAUNCH
import firasNewMenuCover from "../assets/firas-new-menu-cover.png";
import chickenRollSub from "../assets/firas-chicken-roll-sub.jpeg";
import kababDjej from "../assets/firas-kabab-djej.jpeg";
import hawaiiBurger from "../assets/firas-hawaii-burger.jpeg";
import steakSub from "../assets/firas-steak-sub.jpeg";

// ST. ABDA - JAJ EVENT CAMPAIGN
import stAbdaCover from "../assets/st-abda-event-cover.png";
import stAbdaSchedule from "../assets/st-abda-event-schedule.jpeg";
import stAbdaMyrna from "../assets/st-abda-myrna-concert.jpeg";
import stAbdaSpiritual from "../assets/st-abda-spiritual-day.jpeg";
import stAbdaUpdate from "../assets/st-abda-event-update.jpeg";
import stAbdaWalid from "../assets/st-abda-walid-kanaan.jpeg";
import stAbdaFares from "../assets/st-abda-fares-iskandar.jpeg";
import stAbdaKermesse from "../assets/st-abda-kermesse.jpeg";

type GalleryImage = {
  src: string;
  title: string;
};

type SocialProject = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  cover: string;
  coverZoom?: number;
  description: string;
  images: GalleryImage[];
};

const oliviaAsset = (filename: string) => `${import.meta.env.BASE_URL}olivia/${filename}`;

const projects: SocialProject[] = [
  {
    id: 4,
    title: "OLIV-IA",
    subtitle: "Social Media Campaign",
    category: "Food & Lifestyle",
    cover: oliviaAsset("olivia-instagram-mockup.png"),
    description: "OLIV-IA social media identity, Instagram presentation and Facebook advertising.",
    images: [
      { src: oliviaAsset("olivia-instagram-mockup.png"), title: "Instagram Mockup" },
      { src: oliviaAsset("oliv-ia-facebook-ad.png"), title: "Facebook Advertisement" },
    ],
  },

  {
    id: 1,
    title: "Machewe Firas",
    subtitle: "Social Media Campaign",
    category: "Restaurant & Food",
    cover: firasCover,
    coverZoom: 1.12,
    description:
      "A collection of promotional social media designs showcasing grilled specialties, restaurant offerings, and seasonal campaigns.",
    images: [
      { src: firasGrill, title: "Grill Promotion" },
      { src: firasSandwich, title: "Sandwich Promotion" },
      { src: firasChicken, title: "Chicken Promotion" },
      {
        src: firasChristmas42,
        title: "Christmas Campaign - 42",
      },
      {
        src: firasChristmas36,
        title: "Christmas Campaign - 36",
      },
    ],
  },
  {
    id: 2,
    title: "Machewe Firas",
    subtitle: "New Menu Launch Campaign",
    category: "Product Launch & Promotion",
    cover: firasNewMenuCover,
    coverZoom: 1.12,
    description:
      "A coordinated series of social media promotions introducing four new menu items, with bold typography, appetizing food imagery, and consistent brand styling.",
    images: [
      {
        src: chickenRollSub,
        title: "Chicken Roll SUB",
      },
      {
        src: kababDjej,
        title: "Kabab Djej with Pepsi",
      },
      {
        src: hawaiiBurger,
        title: "Hawaii Burger",
      },
      {
        src: steakSub,
        title: "Steak SUB",
      },
    ],
  },
  {
    id: 3,
    title: "Event Marketing & Visual Campaigns",
    subtitle: "St. Abda - Jaj | 2026",
    category: "Events & Entertainment",
    cover: stAbdaCover,
    description:
      "A coordinated promotional campaign for the St. Abda celebrations in Jaj, featuring concert announcements, event schedules, community activities, and festival communications.",
    images: [
      {
        src: stAbdaSchedule,
        title: "Festival Schedule",
      },
      {
        src: stAbdaMyrna,
        title: "Myrna Concert Announcement",
      },
      {
        src: stAbdaSpiritual,
        title: "Spiritual Day Announcement",
      },
      {
        src: stAbdaUpdate,
        title: "Event Update Announcement",
      },
      {
        src: stAbdaWalid,
        title: "Walid Kanaan Concert",
      },
      {
        src: stAbdaFares,
        title: "Fares Iskandar Dinner Event",
      },
      {
        src: stAbdaKermesse,
        title: "Kermesse & Inflatable Games",
      },
    ],
  },
];

// Cache preloaded images to avoid unnecessary duplicate work.
const preloadedImages = new Set<string>();

function preloadImage(src: string) {
  if (preloadedImages.has(src)) return;

  preloadedImages.add(src);

  const image = new Image();

  image.onerror = () => {
    preloadedImages.delete(src);
  };

  image.src = src;
}

export function SocialMedia() {
  const [selectedProject, setSelectedProject] =
    useState<SocialProject | null>(null);

  const [activeImage, setActiveImage] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const reduceMotion = useReducedMotion();

  const touchStart = useRef<{
    x: number;
    y: number;
  } | null>(null);

  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openProject = (project: SocialProject) => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    // Begin downloading the first image immediately.
    if (project.images.length > 0) {
      preloadImage(project.images[0].src);
    }

    touchStart.current = null;
    setActiveImage(0);
    setZoomed(false);
    setSelectedProject(project);
  };

  const closeProject = () => {
    touchStart.current = null;
    setSelectedProject(null);
    setActiveImage(0);
    setZoomed(false);

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

    setZoomed(false);
  };

  const previousImage = () => {
    if (!selectedProject) return;

    setActiveImage(
      (current) =>
        (current - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );

    setZoomed(false);
  };

  const selectImage = (index: number) => {
    setActiveImage(index);
    setZoomed(false);
  };

  // Prepare the next gallery image for smoother swiping.
  useEffect(() => {
    if (!selectedProject) return;

    const images = selectedProject.images;

    if (images.length <= 1) return;

    const nextIndex =
      (activeImage + 1) % images.length;

    preloadImage(images[nextIndex].src);
  }, [selectedProject, activeImage]);

  const handleTouchStart = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    // Swipe navigation is enabled on phones only.
    if (window.matchMedia("(min-width: 640px)").matches) {
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
    if (zoomed) {
      touchStart.current = null;
      return;
    }
    if (!touchStart.current || !selectedProject) return;

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

    if (selectedProject.images.length <= 1) return;

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
    if (!selectedProject) return;

    const previousOverflow =
      document.body.style.overflow;

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
        setZoomed(false);
      }

      if (event.key === "ArrowLeft") {
        setActiveImage(
          (current) =>
            (current - 1 + selectedProject.images.length) %
            selectedProject.images.length
        );
        setZoomed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const focusTimer = window.setTimeout(() => {
      mobileCloseRef.current?.focus();
    }, 0);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      window.clearTimeout(focusTimer);
    };
  }, [selectedProject]);

  return (
    <section
      id="social-media"
      className="scroll-mt-24 overflow-hidden bg-[#FFF7F2] px-4 py-16 text-[#681523] sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.7, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
            05 / Social Media Design
          </p>

          {/* Bold italic title */}
          <h2
            className="text-[clamp(2.35rem,9vw,3rem)] leading-tight italic text-[#850F25] md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 700,
            }}
          >
            Social Media Design
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            A collection of creative social media designs and digital
            campaigns, combining engaging visuals, brand storytelling,
            and strategic promotional content for restaurants,
            product launches, and events.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        {/* Campaign cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 45, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.6,
                delay: reduceMotion ? 0 : (index % 3) * 0.12,
                ease: "easeOut",
              }}
              whileHover={reduceMotion ? undefined : { y: -7, scale: 1.015 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8D2CF] bg-[#F7EDE8] shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <motion.button
                type="button"
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                onClick={() => openProject(project)}
                aria-label={`View ${project.title} - ${project.subtitle}`}
                className="flex h-full w-full cursor-pointer flex-col overflow-hidden bg-transparent p-0 text-left"
              >
                {/* Covers */}
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#F7EDE8]">
                  <img
                    src={project.cover}
                    alt={`${project.title} cover`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 block h-full w-full object-cover object-center transition-transform duration-700"
                    style={{
                      transform: `scale(${project.coverZoom ?? 1})`,
                    }}
                  />

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#681523] shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Card details */}
                <div className="flex-1 p-5 sm:p-6">
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
              </motion.button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Render the gallery outside the section stacking context. */}
      {createPortal(
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="social-media-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeProject}
            className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-[#210C12]/90 p-0 backdrop-blur-sm sm:p-5"
          >
            <motion.div
              initial={reduceMotion ? false : {
                opacity: 0,
                y: 25,
                scale: 0.93,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: reduceMotion ? 0 : 10,
                scale: reduceMotion ? 1 : 0.96,
              }}
              transition={{ duration: reduceMotion ? 0.01 : 0.35, ease: "easeOut" }}
              onClick={(event) =>
                event.stopPropagation()
              }
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} gallery`}
              className="relative flex h-[100dvh] max-h-[100dvh] w-full flex-col overflow-hidden bg-[#FFF7F2] shadow-2xl sm:h-[92dvh] sm:max-w-5xl sm:rounded-2xl"
            >
              {/* Desktop gallery header */}
              <div className="hidden shrink-0 items-center justify-between gap-3 border-b border-[#E8D2CF] px-6 py-4 sm:flex">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-[#A45D69]">
                    {selectedProject.subtitle}
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

                <div className="flex shrink-0 gap-2">

                  {/* Desktop zoom */}
                  <button
                    type="button"
                    onClick={() =>
                      setZoomed((current) => !current)
                    }
                    aria-label={
                      zoomed
                        ? "Fit image to screen"
                        : "Zoom into image"
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0DFD9] text-[#681523] transition hover:bg-[#E7CCC5]"
                  >
                    {zoomed ? (
                      <ZoomOut size={20} />
                    ) : (
                      <ZoomIn size={20} />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={closeProject}
                    aria-label="Close gallery"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#681523] text-white transition hover:bg-[#850F25]"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Mobile close button */}
              <button
                ref={mobileCloseRef}
                type="button"
                onClick={closeProject}
                aria-label="Close gallery"
                className="absolute right-4 top-[calc(env(safe-area-inset-top,0px)+16px)] z-30 flex h-11 w-11 items-center justify-center rounded-full bg-[#681523] text-white shadow-lg sm:hidden"
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
                className={`relative min-h-0 flex-1 bg-[#F7EDE8] ${
                  zoomed
                    ? "overflow-auto"
                    : "overflow-hidden"
                }`}
                style={{
                  touchAction: "pan-y",
                }}
              >
                {zoomed ? (
                  <div className="flex min-h-full min-w-full items-start justify-center p-3 sm:p-6">
                    <img
                      key={`${selectedProject.id}-${activeImage}-zoom`}
                      src={selectedProject.images[activeImage].src}
                      alt={selectedProject.images[activeImage].title}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      draggable={false}
                      className="block h-auto w-auto max-w-none"
                      style={{
                        minWidth: "min(100%, 600px)",
                        maxWidth: "1200px",
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center px-3 pb-28 pt-20 sm:p-4">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.img
                        key={`${selectedProject.id}-${activeImage}`}
                        src={selectedProject.images[activeImage].src}
                        alt={selectedProject.images[activeImage].title}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        draggable={false}
                        initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: reduceMotion ? 0 : -18 }}
                        transition={{ duration: reduceMotion ? 0.01 : 0.24, ease: "easeOut" }}
                        className="block h-full w-full select-none object-contain"
                      />
                    </AnimatePresence>
                  </div>
                )}

                {/* Desktop navigation arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous design"
                      className="absolute left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#681523] shadow-md hover:bg-white sm:flex"
                    >
                      <ArrowLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next design"
                      className="absolute right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#681523] shadow-md hover:bg-white sm:flex"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </>
                )}

                {/* Mobile gallery information */}
                <div className="pointer-events-none absolute inset-x-4 bottom-[calc(env(safe-area-inset-bottom,0px)+16px)] z-20 text-center sm:hidden">
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

              {/* Desktop image title and counter */}
              <div className="hidden shrink-0 border-t border-[#E8D2CF] px-4 py-2 text-center sm:block">
                <p className="text-sm font-medium text-[#681523]">
                  {selectedProject.images[activeImage].title}
                </p>

                <p className="mt-1 text-xs text-[#A45D69]">
                  {activeImage + 1} /{" "}
                  {selectedProject.images.length}
                </p>
              </div>

              {/* Desktop thumbnails */}
              <div className="hidden shrink-0 gap-2 overflow-x-auto border-t border-[#E8D2CF] bg-[#FFF7F2] p-3 sm:flex">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={`${selectedProject.id}-${index}`}
                    type="button"
                    onClick={() => selectImage(index)}
                    aria-label={`View ${image.title}`}
                    aria-pressed={activeImage === index}
                    className={`h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 transition md:h-20 md:w-20 ${
                      activeImage === index
                        ? "border-[#850F25]"
                        : "border-transparent opacity-60 hover:opacity-100"
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
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </section>
  );
}
