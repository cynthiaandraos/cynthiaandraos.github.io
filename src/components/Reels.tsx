
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { Play, X } from "lucide-react";

type Reel = {
  id: string;
  title: string;
  category: string;
  videoSrc: string;
  coverSrc: string;
};

const reels: Reel[] = [
  {
    id: "construction-progress",
    title: "Under Construction",
    category: "Construction & Interior",
    videoSrc: `${import.meta.env.BASE_URL}reels/construction-progress.mp4`,
    coverSrc: `${import.meta.env.BASE_URL}reels/covers/under-construction.png`,
  },
  {
    id: "firas-cauliflower",
    title: "Cauliflower & Tahini",
    category: "Food & Restaurants",
    videoSrc: `${import.meta.env.BASE_URL}reels/firas-cauliflower.mp4`,
    coverSrc: `${import.meta.env.BASE_URL}reels/covers/cauliflower-sandwich.png`,
  },
  {
    id: "firas-delivery",
    title: "Machewe Firas Delivery",
    category: "Food & Restaurants",
    videoSrc: `${import.meta.env.BASE_URL}reels/firas-delivery.mp4`,
    coverSrc: `${import.meta.env.BASE_URL}reels/covers/machewe-firas-delivery.png`,
  },
  {
    id: "firas-farrouj",
    title: "Farrouj Combo",
    category: "Food & Restaurants",
    videoSrc: `${import.meta.env.BASE_URL}reels/firas-farrouj.mp4`,
    coverSrc: `${import.meta.env.BASE_URL}reels/covers/farouj-combo.png`,
  },
  {
    id: "firas-feta-salad",
    title: "Fresh Feta Salad",
    category: "Food & Restaurants",
    videoSrc: `${import.meta.env.BASE_URL}reels/firas-feta-salad.mp4`,
    coverSrc: `${import.meta.env.BASE_URL}reels/covers/fresh-feta-salad.png`,
  },
  {
    id: "firas-grill",
    title: "From Grill to Table",
    category: "Food & Restaurants",
    videoSrc: `${import.meta.env.BASE_URL}reels/firas-grill.mp4`,
    coverSrc: `${import.meta.env.BASE_URL}reels/covers/from-grill-to-table.png`,
  },
  {
    id: "firas-hawaii-burger",
    title: "Hawaii Burger Launch",
    category: "Food & Restaurants",
    videoSrc: `${import.meta.env.BASE_URL}reels/firas-hawaii-burger.mp4`,
    coverSrc: `${import.meta.env.BASE_URL}reels/covers/hawaii-burger-launch.png`,
  },
  {
    id: "fitness-training",
    title: "Personal Training",
    category: "Fitness & Lifestyle",
    videoSrc: `${import.meta.env.BASE_URL}reels/fitness-training.mp4`,
    coverSrc: `${import.meta.env.BASE_URL}reels/covers/personal-training.png`,
  },
  {
    id: "omarket-kafta",
    title: "O-Market Kafta",
    category: "Food & Branding",
    videoSrc: `${import.meta.env.BASE_URL}reels/omarket-kafta.mp4`,
    coverSrc: `${import.meta.env.BASE_URL}reels/covers/omarket-kafta.png`,
  },
  {
    id: "video-22",
    title: "Creative Video Project",
    category: "Video & Motion",
    videoSrc: `${import.meta.env.BASE_URL}reels/video-22.mp4`,
    coverSrc: `${import.meta.env.BASE_URL}reels/covers/creative-video-motion.png`,
  },
];

const categories = [
  "All",
  "Construction & Interior",
  "Food & Restaurants",
  "Food & Branding",
  "Fitness & Lifestyle",
  "Video & Motion",
];

export function Reels() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Reel | null>(null);
  const reduceMotion = useReducedMotion();

  const filtered =
    activeCategory === "All"
      ? reels
      : reels.filter((reel) => reel.category === activeCategory);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  return (
    <section
      id="reels"
      className="scroll-mt-24 overflow-hidden bg-[#FFF7F2] px-4 py-16 text-[#2B1717] sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Animated heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
            11 / Reels &amp; Video Editing
          </p>
          <h2
            className="text-4xl italic text-[#850F25] sm:text-5xl md:text-7xl"
            style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 700 }}
          >
            Reels &amp; Video Editing
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#765A59] sm:text-base">
            Creative storytelling through video, motion, branding,
            and social media content.
          </p>
        </motion.div>

        {/* Animated category filters */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                className={`relative min-h-10 overflow-hidden rounded-full border px-4 py-2 text-xs transition-colors sm:text-sm ${
                  isActive
                    ? "border-[#681523] text-white"
                    : "border-[#D9BFC1] bg-white text-[#681523] hover:bg-[#F0E3E3]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-reel-category"
                    className="absolute inset-0 rounded-full bg-[#681523]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{category}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Animated reel grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-6 sm:gap-y-9 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((reel, index) => (
              <motion.div
                key={reel.id}
                layout
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 45, scale: 0.94 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.1 }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -15, scale: 0.95 }
                }
                transition={{
                  duration: reduceMotion ? 0.01 : 0.55,
                  delay: reduceMotion ? 0 : Math.min(index % 4, 3) * 0.08,
                  ease: "easeOut",
                  layout: { duration: 0.35 },
                }}
                className="min-w-0"
              >
                <motion.button
                  type="button"
                  onClick={() => setSelected(reel)}
                  aria-label={`Play ${reel.title}`}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -7, scale: 1.025 }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : { scale: 0.98 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  }}
                  className="group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl bg-[#EAD9D5] shadow-md transition-shadow duration-300 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#842E3D]"
                >
                  {/* Cover image */}
                  <img
                    src={reel.coverSrc}
                    alt={`${reel.title} cover`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5 transition-colors duration-300 group-hover:from-black/50" />

                  {/* Animated play button */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="relative flex items-center justify-center">
                      <motion.span
                        className="absolute h-12 w-12 rounded-full border border-white/60 sm:h-14 sm:w-14"
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                scale: [1, 1.45, 1.75],
                                opacity: [0.6, 0.25, 0],
                              }
                        }
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />

                      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#681523] shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                        <Play
                          size={22}
                          fill="currentColor"
                          className="ml-0.5"
                        />
                      </span>
                    </span>
                  </span>
                </motion.button>

                <h3 className="mt-3 text-sm font-medium leading-snug sm:text-base">
                  {reel.title}
                </h3>

                <p className="mt-1 text-xs text-[#765A59] sm:text-sm">
                  {reel.category}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mt-12 text-center text-xl italic text-[#850F25] sm:mt-16 sm:text-2xl"
          style={{
            fontFamily:
              "'Bodoni Moda', Georgia, serif",
          }}
        >
          Every design tells a story.
        </motion.p>
      </div>

      {/* Animated video popup */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selected && (
              <motion.div
                key="reel-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[11000] flex items-center justify-center bg-black/95 p-4"
                role="presentation"
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) {
                    setSelected(null);
                  }
                }}
              >
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label={`${selected.title} video`}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, scale: 0.88, y: 30 }
                  }
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 15 }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.35,
                    ease: "easeOut",
                  }}
                  className="relative flex max-h-[95dvh] w-full max-w-5xl flex-col items-center justify-center"
                >
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="absolute right-0 -top-12 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
                    aria-label="Close video"
                  >
                    <X size={24} />
                  </button>

                  <video
                    key={selected.id}
                    src={selected.videoSrc}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="max-h-[80dvh] w-full rounded-xl bg-black object-contain"
                  >
                    Your browser does not support video playback.
                  </video>

                  <p className="mt-4 text-center text-sm text-white">
                    {selected.title}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
