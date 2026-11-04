
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

// Original packaging and label images
import coffeeLabel from "../assets/5beans-coffee-label.png";
import coffeePackaging from "../assets/5beans-coffee-packaging.png";
import peanutLabel from "../assets/5beans-peanut-butter-label.png";
import peanutJars from "../assets/5beans-peanut-butter-jars.png";
import cupDesign from "../assets/5beans-cup-design.png";
import blankCups from "../assets/5beans-blank-cups.png";
import snackStickers from "../assets/5beans-snack-stickers.png";
import snackJars from "../assets/5beans-snack-jars.png";
import proteinPhoto from "../assets/5beans-protein-balls-photo.png";
import christmasLabel from "../assets/5beans-christmas-label.png";
import christmasPackaging from "../assets/5beans-christmas-packaging.png";

// New creative portfolio cover images
import coffeeCover from "../assets/5beans-coffee-cover.png";
import peanutCover from "../assets/5beans-peanut-cover.png";
import takeawayCover from "../assets/5beans-takeaway-cover.png";
import snackCover from "../assets/5beans-snack-cover.png";
import christmasCover from "../assets/5beans-christmas-cover.png";

const collections = [
  {
    id: 1,
    title: "Coffee Packaging",
    category: "Coffee Bag & Label Design",
    cover: coffeeCover,
    description:
      "Coffee bag packaging and original front-and-back label artwork.",
    images: [
      {
        src: coffeePackaging,
        label: "Finished Coffee Packaging",
      },
      {
        src: coffeeLabel,
        label: "Coffee Label Artwork",
      },
    ],
  },
  {
    id: 2,
    title: "Nut Butter Collection",
    category: "Food Packaging & Labels",
    cover: peanutCover,
    description:
      "Product packaging and label design for the nut butter collection.",
    images: [
      {
        src: peanutJars,
        label: "Finished Nut Butter Jars",
      },
      {
        src: peanutLabel,
        label: "Peanut Butter Label Artwork",
      },
    ],
  },
  {
    id: 3,
    title: "Branded Takeaway Cups",
    category: "Cup Branding & Design",
    cover: takeawayCover,
    description:
      "Transparent takeaway cup designs featuring the 5 Beans logo and SIP • SMILE • REPEAT artwork.",
    images: [
      {
        src: cupDesign,
        label: "5 Beans Branded Cup Design",
      },
      {
        src: blankCups,
        label: "Transparent Cup Mockup",
      },
    ],
  },
  {
    id: 4,
    title: "Snack Stickers",
    category: "Sticker & Product Label Design",
    cover: snackCover,
    description:
      "Sticker artwork and product photography for the snack collection.",
    images: [
      {
        src: snackJars,
        label: "Snack Jars with Stickers",
      },
      {
        src: snackStickers,
        label: "Original Snack Sticker Designs",
      },
      {
        src: proteinPhoto,
        label: "Protein Energy Balls Photography",
      },
    ],
  },
  {
    id: 5,
    title: "Christmas Cookie Packaging",
    category: "Seasonal Packaging Design",
    cover: christmasCover,
    description:
      "Festive Christmas cookie packaging and original seasonal label artwork.",
    images: [
      {
        src: christmasPackaging,
        label: "Finished Christmas Cookie Boxes",
      },
      {
        src: christmasLabel,
        label: "Christmas Label Artwork",
      },
    ],
  },
];

type Collection = (typeof collections)[number];

export function Packaging() {
  const [selected, setSelected] =
    useState<Collection | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const reduceMotion = useReducedMotion();

  const openCollection = (collection: Collection) => {
    setSelected(collection);
    setActiveImage(0);
  };

  const closeCollection = () => {
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

    const handleKey = (event: KeyboardEvent) => {
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

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);

  return (
    <section
      id="packaging"
      className="bg-[#FFF7F2] px-6 py-24 text-[#681523]"
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
            03 / PACKAGING & LABELS
          </p>

          <h2
            className="text-5xl text-[#850F25] md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 400,
            }}
          >
            5 Beans{" "}
            <span className="italic">
              Coffee Shop
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            Explore my packaging, product labels,
            stickers, and branded merchandise.
            Select a project to see the original
            designs and finished products.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        {/* Five clickable project cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <motion.article
              key={collection.id}
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
                  : (index % 3) * 0.12,
                ease: "easeOut",
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
                onClick={() =>
                  openCollection(collection)
                }
                className="block w-full cursor-pointer text-left"
                aria-label={`Open ${collection.title} gallery`}
              >
                {/* New creative cover */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F0EC]">
                  <img
                    src={collection.cover}
                    alt={collection.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#681523] shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Project information */}
                <div className="p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#A45D69]">
                    {collection.category}
                  </p>

                  <h3
                    className="text-2xl text-[#681523]"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                      fontWeight: 400,
                    }}
                  >
                    {collection.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#704B50]">
                    {collection.description}
                  </p>

                  <p className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#850F25]">
                    View Project
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
        {selected && (
          <motion.div
            key="collection-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#210C12]/85 p-3 backdrop-blur-sm md:p-8"
            onClick={closeCollection}
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
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-[#FFF7F2] p-4 shadow-2xl md:p-8"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={closeCollection}
                aria-label="Close gallery"
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#681523] text-white transition hover:bg-[#A13A4B]"
              >
                <X size={22} />
              </button>

              {/* Gallery title */}
              <div className="mb-6 pr-12">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#A45D69]">
                  5 Beans Coffee Shop
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

              {/* Original packaging images */}
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

                {/* Image navigation */}
                {selected.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#681523]/90 text-white hover:bg-[#850F25]"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#681523]/90 text-white hover:bg-[#850F25]"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Image label and counter */}
              <div className="mt-5 text-center">
                <p className="text-sm font-medium text-[#681523]">
                  {selected.images[activeImage].label}
                </p>

                <p className="mt-1 text-xs text-[#A45D69]">
                  {activeImage + 1} of{" "}
                  {selected.images.length}
                </p>
              </div>

              {/* Gallery thumbnails */}
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
