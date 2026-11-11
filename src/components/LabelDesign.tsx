
import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import { createPortal } from "react-dom";
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

// Creative portfolio cover images
import coffeeCover from "../assets/5beans-coffee-cover.png";
import peanutCover from "../assets/5beans-peanut-cover.png";
import takeawayCover from "../assets/5beans-takeaway-cover.png";
import snackCover from "../assets/5beans-snack-cover.png";
import christmasCover from "../assets/5beans-christmas-cover.png";

// Little Bloom baby collection packaging
import littleBloomCover from "../assets/little-bloom-packaging-cover.png";
import littleBloomGiftBag from "../assets/Little-Bloom-Gift-Bag.png";
import littleBloomShoppingBag from "../assets/little-bloom-shopping-bag.png";
import littleBloomBoxGift from "../assets/little-bloom-box-gift.png";
import littleBloomGiftBoxPackaging from "../assets/Little-Bloom-Gift-Box-Packaging.png";

// AURELLE skincare packaging
import aurelleSerum from "../assets/aurelle-radiance-serum.png";
import aurelleSerumBox from "../assets/aurelle-radiance-serum-box.png";
import aurelleSerumSet from "../assets/aurelle-radiance-serum-set.png";
import aurelleFaceCream from "../assets/aurelle-face-cream.png";
import aurelleFaceCreamBox from "../assets/aurelle-face-cream-box.png";
import aurelleFaceCreamSet from "../assets/aurelle-face-cream-set.png";
import aurelleCleanser from "../assets/aurelle-gentle-cleanser.png";
import aurelleSerumCover from "../assets/aurelle-serum-cover.png";
import aurelleFaceCreamCover from "../assets/aurelle-face-cream-cover.png";
import aurelleCleanserCover from "../assets/aurelle-cleanser-cover.png";
import aurelleLuxuryShoppingBag from "../assets/aurelle-luxury-shopping-bag.png";

const collections = [
  {
    id: 10,
    title: "AURELLE – Luxury Shopping Bag",
    category: "Brand Identity · Packaging Design",
    cover: aurelleLuxuryShoppingBag,
    description:
      "A luxury shopping bag concept featuring AURELLE's signature burgundy, champagne-gold detailing, and elegant brand presentation.",
    images: [
      { src: aurelleLuxuryShoppingBag, label: "AURELLE Luxury Shopping Bag" },
    ],
  },
  {
    id: 7,
    title: "AURELLE – Radiance Serum",
    category: "Skincare Packaging · 30 ml",
    cover: aurelleSerumCover,
    description: "Luxury serum bottle, matching carton, and complete packaging presentation.",
    images: [
      { src: aurelleSerum, label: "Radiance Serum Bottle · 30 ml" },
      { src: aurelleSerumBox, label: "Radiance Serum Packaging Box" },
      { src: aurelleSerumSet, label: "Radiance Serum Packaging Set" },
    ],
  },
  {
    id: 8,
    title: "AURELLE – Hydrating Face Cream",
    category: "Skincare Packaging · 50 ml",
    cover: aurelleFaceCreamCover,
    description: "Elegant face cream jar with coordinating box and product packaging mockup.",
    images: [
      { src: aurelleFaceCream, label: "Hydrating Face Cream Jar · 50 ml" },
      { src: aurelleFaceCreamBox, label: "Hydrating Face Cream Packaging Box" },
      { src: aurelleFaceCreamSet, label: "Hydrating Face Cream Packaging Set" },
    ],
  },
  {
    id: 9,
    title: "AURELLE – Gentle Cleanser",
    category: "Skincare Packaging · 150 ml",
    cover: aurelleCleanserCover,
    description: "Minimal, refined cleanser tube with ivory, burgundy, and gold packaging details.",
    images: [
      { src: aurelleCleanser, label: "Gentle Cleanser Tube · 150 ml" },
    ],
  },
  {
    id: 6,
    title: "Little Bloom – Baby Collection",
    category: "Luxury Gift Packaging & Brand Identity",
    cover: littleBloomCover,
    description:
      "Luxury blush pink and cream baby gift packaging, including shopping bags, gift boxes, and multiple packaging views.",
    images: [
      { src: littleBloomGiftBag, label: "Little Bloom Gift Bag" },
      { src: littleBloomShoppingBag, label: "Shopping Bag – Multiple Views" },
      { src: littleBloomBoxGift, label: "Little Bloom Gift Box" },
      { src: littleBloomGiftBoxPackaging, label: "Gift Box – Inside, Back & Side Views" },
    ],
  },
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

export function LabelDesign() {
  const [selected, setSelected] =
    useState<Collection | null>(null);

  const [activeImage, setActiveImage] = useState(0);
  const reduceMotion = useReducedMotion();

  const touchStart = useRef<{
    x: number;
    y: number;
  } | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openCollection = (collection: Collection) => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    touchStart.current = null;
    setActiveImage(0);
    setSelected(collection);
  };

  const closeCollection = () => {
    touchStart.current = null;
    setSelected(null);
    setActiveImage(0);

    requestAnimationFrame(() => {
      previousFocusRef.current?.focus();
    });
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

  const handleTouchStart = (
    event: TouchEvent<HTMLDivElement>
  ) => {
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
    if (!touchStart.current || !selected) return;

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

    if (selected.images.length <= 1) return;

    if (
      Math.abs(differenceX) > 45 &&
      Math.abs(differenceX) > Math.abs(differenceY) * 1.2
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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCollection();
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
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);

  return (
    <section
      id="label-design"
      className="scroll-mt-28 bg-[#FFF7F2] px-4 py-16 text-[#681523] sm:px-6 sm:py-24"
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
          className="mb-10 text-center sm:mb-14"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A45D69]">
            02 / Label Design
          </p>

          {/* Bold italic section title */}
          <h2
            className="text-[clamp(2.35rem,9vw,3rem)] leading-tight italic text-[#850F25] md:text-7xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
              fontWeight: 700,
            }}
          >
            Label Design
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            A selection of product labels and stickers, combining thoughtful typography, visual identity, and practical packaging details.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        {/* Packaging cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {collections.filter((collection) => [1,2,4,5].includes(collection.id)).map((collection, index) => (
            <motion.article
              key={collection.id}
              initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.55,
                delay: reduceMotion ? 0 : (index % 2) * 0.09,
                ease: "easeOut",
              }}
              whileHover={reduceMotion ? undefined : { y: -7 }}
              whileTap={reduceMotion ? undefined : { scale: 0.975 }}
              className="group h-full overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl active:shadow-lg"
            >
              <button
                type="button"
                onClick={() => openCollection(collection)}
                className="flex h-full w-full cursor-pointer flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#850F25]"
                aria-label={`Open ${collection.title} gallery`}
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#F8F0EC]">
                  <img
                    src={collection.cover}
                    alt={collection.title}
                    loading="lazy"
                    className={`h-full w-full object-cover object-center transition-transform duration-700 motion-reduce:transition-none ${
                      collection.id === 3
                        ? "scale-[1.08] motion-safe:group-hover:scale-[1.13]"
                        : "motion-safe:group-hover:scale-105"
                    }`}
                  />

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#681523] shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="flex w-full flex-1 flex-col p-5 sm:p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#A45D69]">
                    {collection.category}
                  </p>

                  <h3
                    className="text-2xl text-[#681523]"
                    style={{
                      fontFamily: "'Bodoni Moda', Georgia, serif",
                      fontWeight: 400,
                    }}
                  >
                    {collection.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#704B50]">
                    {collection.description}
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

      {/* Render outside the animated section so the modal is always above the fixed header. */}
      {createPortal(
        <AnimatePresence>
        {selected && (
          <motion.div
            key="collection-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.25 }}
            className="fixed inset-0 z-[10010] flex items-center justify-center bg-[#210C12]/85 p-0 backdrop-blur-sm sm:p-3 md:p-8"
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
              transition={{ duration: reduceMotion ? 0.01 : 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} gallery`}
              onClick={(event) => event.stopPropagation()}
              className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-[#FFF7F2] shadow-2xl sm:h-auto sm:max-h-[92dvh] sm:max-w-4xl sm:overflow-y-auto sm:rounded-3xl sm:p-4 md:p-8"
            >
              {/* Desktop header */}
              <div className="mb-6 hidden shrink-0 pr-12 sm:block">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#A45D69]">
                  {selected.id === 6 ? "Little Bloom – Baby Collection" : selected.id >= 7 ? "AURELLE Skincare" : "5 Beans Coffee Shop"}
                </p>

                <h3
                  className="text-3xl text-[#850F25] md:text-4xl"
                  style={{
                    fontFamily: "'Bodoni Moda', Georgia, serif",
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
                onClick={closeCollection}
                aria-label="Close gallery"
                className="absolute right-4 top-[calc(env(safe-area-inset-top,0px)+16px)] z-30 flex h-11 w-11 items-center justify-center rounded-full bg-[#681523] text-white shadow-lg transition hover:bg-[#A13A4B] sm:top-4"
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
                style={{ touchAction: "pan-y" }}
                className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#F8F0EC] px-3 pb-28 pt-20 sm:min-h-[260px] sm:flex-none sm:rounded-2xl sm:p-0"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={`${selected.id}-${activeImage}`}
                    src={selected.images[activeImage].src}
                    alt={selected.images[activeImage].label}
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
                      duration: reduceMotion ? 0 : 0.25,
                    }}
                    className="h-full w-full select-none object-contain sm:h-auto sm:max-h-[52dvh]"
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
                <div className="absolute inset-x-4 bottom-[calc(env(safe-area-inset-bottom,0px)+16px)] text-center sm:hidden">
                  <p
                    className="mb-2 text-lg text-[#681523]"
                    style={{
                      fontFamily: "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {selected.title}
                  </p>

                  <p className="text-xs text-[#A45D69]">
                    {activeImage + 1} / {selected.images.length}
                  </p>

                  {selected.images.length > 1 && (
                    <p className="mt-2 text-[11px] uppercase tracking-widest text-[#A45D69]">
                      Swipe to explore
                    </p>
                  )}
                </div>
              </div>

              {/* Desktop image title and counter */}
              <div className="mt-5 hidden shrink-0 text-center sm:block">
                <p className="text-sm font-medium text-[#681523]">
                  {selected.images[activeImage].label}
                </p>

                <p className="mt-1 text-xs text-[#A45D69]">
                  {activeImage + 1} of {selected.images.length}
                </p>
              </div>

              {/* Desktop thumbnails */}
              <div className="mt-5 hidden flex-wrap justify-center gap-3 sm:flex">
                {selected.images.map((image, index) => (
                  <button
                    key={image.label}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`View ${image.label}`}
                    aria-pressed={activeImage === index}
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
