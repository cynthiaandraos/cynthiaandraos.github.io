
import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
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
  description: string;
  images: GalleryImage[];
};

const projects: SocialProject[] = [
  {
    id: 1,
    title: "Machewe Firas",
    subtitle: "Social Media Campaign",
    category: "Restaurant & Food",
    cover: firasCover,
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

const COPYRIGHT = "© Cynthia Andraos";

const watermarkClass =
  "pointer-events-none absolute bottom-2 right-2 z-10 rounded bg-[#210C12]/45 px-2 py-1 text-[10px] font-medium tracking-wide text-white/90 sm:bottom-3 sm:right-3";

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
  const reduceMotion = useReducedMotion();

  const [selectedProject, setSelectedProject] =
    useState<SocialProject | null>(null);

  const [activeImage, setActiveImage] = useState(0);

  const touchStart = useRef<{
    x: number;
    y: number;
  } | null>(null);

  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  const previousFocusRef =
    useRef<HTMLElement | null>(null);

  const openProject = (project: SocialProject) => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    setActiveImage(0);
    setSelectedProject(project);

    if (project.images.length > 0) {
      preloadImage(project.images[0].src);
    }
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImage(0);
    touchStart.current = null;

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

  useEffect(() => {
    if (!selectedProject) return;

    const nextIndex =
      (activeImage + 1) % selectedProject.images.length;

    preloadImage(
      selectedProject.images[nextIndex].src
    );
  }, [selectedProject, activeImage]);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setActiveImage(0);
      }

      if (event.key === "ArrowRight") {
        setActiveImage(
          (current) =>
            (current + 1) %
            selectedProject.images.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImage(
          (current) =>
            (current - 1 +
              selectedProject.images.length) %
            selectedProject.images.length
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      cancelAnimationFrame(focusFrame);
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

    if (!touch) return;

    const differenceX =
      touch.clientX - touchStart.current.x;

    const differenceY =
      touch.clientY - touchStart.current.y;

    touchStart.current = null;

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

  const currentImage =
    selectedProject?.images[activeImage];

  return (
    <>
      <section
        id="social-media"
        className="scroll-mt-24 overflow-hidden bg-[#FFF7F2] px-4 py-16 text-[#681523] sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADING */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 35 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: reduceMotion ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
              03 /
            </p>

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
              A collection of creative social media
              designs and digital campaigns, combining
              engaging visuals, brand storytelling,
              and strategic promotional content for
              restaurants, product launches, and events.
            </p>

            <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
          </motion.div>

          {/* CAMPAIGN CARDS */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 35,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion ? 0 : (index % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8D2CF] bg-[#F7EDE8] shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() =>
                    openProject(project)
                  }
                  className="flex h-full w-full flex-col text-left"
                  aria-label={`View ${project.title} campaign`}
                >
                  {/* COVER IMAGE */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7EDE8]">
                    <motion.img
                      src={project.cover}
                      alt={`${project.title} cover`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      initial={
                        reduceMotion
                          ? false
                          : { opacity: 0, scale: 1.04 }
                      }
                      whileInView={{
                        opacity: 1,
                        scale: 1.12,
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { scale: 1.2 }
                      }
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.8,
                        delay: reduceMotion ? 0 : index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0 h-full w-full select-none object-cover object-center"
                    />

                    <span
                      data-portfolio-watermark="true"
                      aria-hidden="true"
                      className={watermarkClass}
                    >
                      {COPYRIGHT}
                    </span>

                    <span className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#681523] shadow-sm">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>

                  {/* CAMPAIGN INFORMATION */}
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 p-5 sm:p-6"
                  >
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
                  </motion.div>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN CAMPAIGN GALLERY */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedProject && currentImage && (
              <motion.div
                key="social-gallery"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeProject}
                className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-[#210C12]/90 p-0 backdrop-blur-sm sm:p-5"
              >
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 20,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                  role="dialog"
                  aria-modal="true"
                  aria-label={`${selectedProject.title} gallery`}
                  className="relative flex h-[100dvh] w-full max-w-5xl flex-col overflow-hidden bg-[#FFF7F2] shadow-2xl sm:h-[92dvh] sm:rounded-2xl"
                >
                  {/* GALLERY HEADER */}
                  <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#E8D2CF] px-4 py-3 sm:px-6 sm:py-4">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-[#A45D69] sm:text-xs">
                        {selectedProject.subtitle}
                      </p>

                      <h3
                        className="mt-1 truncate text-lg text-[#681523] sm:text-2xl"
                        style={{
                          fontFamily:
                            "'Bodoni Moda', Georgia, serif",
                        }}
                      >
                        {selectedProject.title}
                      </h3>
                    </div>

                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={closeProject}
                      aria-label="Close gallery"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#681523] text-white"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* IMAGE VIEWER */}
                  <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={() => {
                      touchStart.current = null;
                    }}
                    className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#F7EDE8] px-3 py-4 sm:px-16 sm:py-6"
                    style={{
                      touchAction: "pan-y",
                    }}
                  >
                    <AnimatePresence
                      mode="wait"
                      initial={false}
                    >
                      <motion.div
                        key={`${selectedProject.id}-${activeImage}`}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: 15,
                              }
                        }
                        animate={{
                          opacity: 1,
                          x: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          x: -15,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="flex h-full w-full items-center justify-center"
                      >
                        <div className="relative flex h-full w-full items-center justify-center">
                          <img
                            src={currentImage.src}
                            alt={currentImage.title}
                            loading="eager"
                            draggable={false}
                            className="block h-full w-full select-none object-contain object-center"
                          />

                          <span
                            data-portfolio-watermark="true"
                            aria-hidden="true"
                            className={watermarkClass}
                          >
                            {COPYRIGHT}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* DESKTOP NAVIGATION */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={previousImage}
                          aria-label="Previous design"
                          className="absolute left-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#681523] shadow-md sm:flex"
                        >
                          <ArrowLeft size={20} />
                        </button>

                        <button
                          type="button"
                          onClick={nextImage}
                          aria-label="Next design"
                          className="absolute right-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#681523] shadow-md sm:flex"
                        >
                          <ArrowRight size={20} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* IMAGE COUNTER */}
                  <div className="shrink-0 border-t border-[#E8D2CF] bg-[#FFF7F2] px-4 py-3 text-center">
                    <p className="text-xs font-medium tracking-widest text-[#A45D69]">
                      {activeImage + 1} /{" "}
                      {selectedProject.images.length}
                    </p>

                    <p className="mt-1 text-[10px] text-[#A45D69] sm:hidden">
                      Swipe left or right to explore
                    </p>
                  </div>

                  {/* DESKTOP THUMBNAILS */}
                  {selectedProject.images.length > 1 && (
                    <div className="hidden shrink-0 justify-center gap-2 overflow-x-auto border-t border-[#E8D2CF] bg-[#FFF7F2] p-3 sm:flex">
                      {selectedProject.images.map(
                        (image, index) => (
                          <button
                            key={`${selectedProject.id}-${index}`}
                            type="button"
                            onClick={() =>
                              setActiveImage(index)
                            }
                            aria-label={`View ${image.title}`}
                            aria-pressed={
                              activeImage === index
                            }
                            className={`h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 bg-white transition md:h-16 md:w-16 ${
                              activeImage === index
                                ? "border-[#850F25]"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={image.src}
                              alt={image.title}
                              loading="lazy"
                              draggable={false}
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
