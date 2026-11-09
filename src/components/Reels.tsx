
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { Play, X } from "lucide-react";

type Reel = {
  id: string;
  title: string;
  category: string;
  videoSrc: string;
};

const reels: Reel[] = [
  {
    id: "construction-progress",
    title: "Under Construction",
    category: "Construction & Interior",
    videoSrc: "/reels/construction-progress.mp4",
  },
  {
    id: "firas-cauliflower",
    title: "Cauliflower & Tahini",
    category: "Food & Restaurants",
    videoSrc: "/reels/firas-cauliflower.mp4",
  },
  {
    id: "firas-delivery",
    title: "Machewe Firas Delivery",
    category: "Food & Restaurants",
    videoSrc: "/reels/firas-delivery.mp4",
  },
  {
    id: "firas-farrouj",
    title: "Farrouj Combo",
    category: "Food & Restaurants",
    videoSrc: "/reels/firas-farrouj.mp4",
  },
  {
    id: "firas-feta-salad",
    title: "Fresh Feta Salad",
    category: "Food & Restaurants",
    videoSrc: "/reels/firas-feta-salad.mp4",
  },
  {
    id: "firas-grill",
    title: "From Grill to Table",
    category: "Food & Restaurants",
    videoSrc: "/reels/firas-grill.mp4",
  },
  {
    id: "firas-hawaii-burger",
    title: "Hawaii Burger Launch",
    category: "Food & Restaurants",
    videoSrc: "/reels/firas-hawaii-burger.mp4",
  },
  {
    id: "fitness-training",
    title: "Personal Training",
    category: "Fitness & Lifestyle",
    videoSrc: "/reels/fitness-training.mp4",
  },
  {
    id: "omarket-kafta",
    title: "O-Market Kafta",
    category: "Food & Branding",
    videoSrc: "/reels/omarket-kafta.mp4",
  },
  {
    id: "video-22",
    title: "Creative Video Project",
    category: "Video & Motion",
    videoSrc: "/reels/video-22.mp4",
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

  const filtered =
    activeCategory === "All"
      ? reels
      : reels.filter((reel) => reel.category === activeCategory);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
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
      className="scroll-mt-24 bg-[#FFF7F2] px-4 py-20 text-[#2B1717] sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#842E3D]">
            Creative Portfolio
          </p>

          <h2
            className="text-4xl font-normal sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
            }}
          >
            Reels{" "}
            <span className="italic text-[#842E3D]">
              & Motion Design
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#765A59] sm:text-base">
            Creative storytelling through video, motion,
            branding, and social media content.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2 text-xs transition-colors sm:text-sm ${
                activeCategory === category
                  ? "border-[#681523] bg-[#681523] text-white"
                  : "border-[#D9BFC1] bg-white text-[#681523] hover:bg-[#F0E3E3]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: Math.min(index % 4, 3) * 0.06,
              }}
              className="min-w-0"
            >
              <button
                type="button"
                onClick={() => setSelected(reel)}
                aria-label={`Play ${reel.title}`}
                className="group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl bg-[#EAD9D5] shadow-sm transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#842E3D]"
              >
                <video
                  src={`${reel.videoSrc}#t=0.1`}
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-contain"
                />

                <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#681523] shadow-lg transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
                    <Play
                      size={22}
                      fill="currentColor"
                      className="ml-0.5"
                    />
                  </span>
                </span>
              </button>

              <h3 className="mt-3 truncate text-sm font-medium sm:text-base">
                {reel.title}
              </h3>

              <p className="mt-1 text-xs text-[#765A59] sm:text-sm">
                {reel.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {selected &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[11000] flex items-center justify-center bg-black/95 p-4"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelected(null);
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} video`}
              className="relative flex max-h-[95dvh] w-full max-w-5xl flex-col items-center justify-center"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-0 -top-12 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
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
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
