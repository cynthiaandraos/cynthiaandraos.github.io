
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import {
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Card cover only
import firasCover from "../assets/firas-cover.jpg";

// Original social media designs
import grillPost from "../assets/firas-grill-post.png";
import christmas42 from "../assets/firas-christmas-42.png";
import christmas36 from "../assets/firas-christmas-36.png";
import sandwichPost from "../assets/firas-sandwich-post.png";
import chickenPost from "../assets/firas-chicken-post.png";

// Social media clients
const projects = [
  {
    id: 1,
    title: "Machewe Firas",
    arabicName: "مشاوي فراس",
    category: "Restaurant Social Media Design",

    // This image appears ONLY outside the card
    cover: firasCover,

    description:
      "A collection of restaurant social media designs featuring food promotions, branded content, and seasonal Christmas offers.",

    // These five images appear ONLY when clicking the card
    images: [
      {
        src: grillPost,
        label: "Grilled Meat Promotional Post",
      },
      {
        src: sandwichPost,
        label: "Sandwich Promotional Post",
      },
      {
        src: chickenPost,
        label: "Chicken Grill Promotional Post",
      },
      {
        src: christmas42,
        label: "Christmas Offer — $42",
      },
      {
        src: christmas36,
        label: "Christmas Offer — $36",
      },
    ],
  },
];

type Project = (typeof projects)[number];

export function SocialMedia() {
  const [selected, setSelected] =
    useState<Project | null>(null);

  const [activeImage, setActiveImage] = useState(0);
  const reduceMotion = useReducedMotion();

  const openProject = (project: Project) => {
    setSelected(project);
    setActiveImage(0);
  };

  const closeProject = () => {
    setSelected(null);
    setActiveImage(0);
  };

  const nextImage = () => {
    if (!selected) return;

    setActiveImage(
      (current) =>
        (current + 1) % selected.images.length
    );
  };

  const previousImage = () => {
    if (!selected) return;

    setActiveImage(
      (current) =>
        (current - 1 + selected.images.length) %
        selected.images.length
    );
  };

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }

      if (event.key === "ArrowRight") {
        setActiveImage(
          (current) =>
            (current + 1) % selected.images.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImage(
          (current) =>
            (current - 1 + selected.images.length) %
            selected.images.length
        );
      }
    };

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selected]);

  return (
    <section
      id="social-media"
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
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A45D69]">
            05 / DIGITAL DESIGN
          </p>

          <h2
            className="text-5xl text-[#850F25] md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 400,
            }}
          >
            Social Media{" "}
            <span className="italic">Design</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            Creative social media content,
            promotional campaigns, and branded
            visuals designed to communicate
            with audiences.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        {/* Client project cards */}
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
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -7 }
              }
              className="group overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => openProject(project)}
                aria-label={`Open ${project.title} social media gallery`}
                className="block w-full cursor-pointer text-left"
              >
                {/* OUTSIDE CARD COVER */}
                <div className="relative aspect-square overflow-hidden bg-[#F8F0EC]">
                  <img
                    src={project.cover}
                    alt={`${project.title} project cover`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#681523] shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>

                  <div className="absolute bottom-4 left-4 rounded-full bg-[#681523]/90 px-4 py-2 text-xs font-medium text-white">
                    {project.images.length} Designs
                  </div>
                </div>

                {/* Card information */}
                <div className="p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#A45D69]">
                    {project.category}
                  </p>

                  <h3
                    className="text-3xl text-[#681523]"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    lang="ar"
                    dir="rtl"
                    className="mt-2 text-right text-lg text-[#850F25]"
                  >
                    {project.arabicName}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#704B50]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#850F25]">
                    View Designs
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* CLICKABLE GALLERY POPUP */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="social-gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeProject}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-[#210C12]/90 p-3 backdrop-blur-sm md:p-8"
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
                scale: 0.97,
              }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} gallery`}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-[#FFF7F2] p-4 shadow-2xl md:p-8"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={closeProject}
                aria-label="Close gallery"
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#681523] text-white transition hover:bg-[#850F25]"
              >
                <X size={22} />
              </button>

              {/* Gallery heading */}
              <div className="mb-6 pr-12">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#A45D69]">
                  Social Media Design
                </p>

                <h3
                  className="text-3xl text-[#850F25] md:text-4xl"
                  style={{
                    fontFamily:
                      "'Bodoni Moda', Georgia, serif",
                  }}
                >
                  {selected.title}
                </h3>

                <p className="mt-2 text-sm text-[#704B50]">
                  {selected.images.length} Original Designs
                </p>
              </div>

              {/* ORIGINAL DESIGN IMAGE */}
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl bg-[#F8F0EC]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${selected.id}-${activeImage}`}
                    src={
                      selected.images[activeImage].src
                    }
                    alt={
                      selected.images[activeImage].label
                    }
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
                    transition={{ duration: 0.25 }}
                    className="max-h-[60vh] w-full object-contain"
                  />
                </AnimatePresence>

                {/* Gallery arrows */}
                {selected.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous design"
                      className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#681523]/90 text-white transition hover:bg-[#850F25]"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next design"
                      className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#681523]/90 text-white transition hover:bg-[#850F25]"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Design title and counter */}
              <div className="mt-5 text-center">
                <p className="text-sm font-medium text-[#681523]">
                  {selected.images[activeImage].label}
                </p>

                <p className="mt-1 text-xs text-[#A45D69]">
                  {activeImage + 1} of{" "}
                  {selected.images.length}
                </p>
              </div>

              {/* Design thumbnails */}
              <div className="mt-5 flex flex-wrap justify-center gap-3">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
