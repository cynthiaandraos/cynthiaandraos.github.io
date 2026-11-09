
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X } from "lucide-react";

import collectionAd from "../assets/aurelle-full-skincare-collection-ad.png";
import radianceAd from "../assets/aurelle-natural-radiance-beauty-ad.png";
import collectionCover from "../assets/aurelle-collection-cover.png";
import radianceCover from "../assets/aurelle-natural-radiance-cover.png";

const campaigns = [
  {
    title: "Full Skincare Collection",
    category: "Luxury Product Advertising",
    cover: collectionCover,
    image: collectionAd,
  },
  {
    title: "Natural Radiance",
    category: "Beauty Advertising Campaign",
    cover: radianceCover,
    image: radianceAd,
  },
];

export function AurelleAdvertising() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const selected = selectedIndex === null ? null : campaigns[selectedIndex];

  const openAdvertisement = (index: number) => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setSelectedIndex(index);
  };

  const closeAdvertisement = () => setSelectedIndex(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAdvertisement();
      }
      // Keep keyboard focus within the open advertisement viewer.
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      requestAnimationFrame(() => previousFocusRef.current?.focus());
    };
  }, [selectedIndex]);

  const viewer = (
    <AnimatePresence>
      {selected && (
        <motion.div
          key="aurelle-advertising-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} advertisement`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          onClick={closeAdvertisement}
          className="fixed inset-0 z-[10050] flex items-center justify-center overflow-hidden bg-black/90 p-3 backdrop-blur-sm sm:p-6 md:p-10"
          style={{ paddingTop: "max(12px, env(safe-area-inset-top))", paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close advertisement"
            onClick={(event) => {
              event.stopPropagation();
              closeAdvertisement();
            }}
            className="absolute right-4 top-[calc(env(safe-area-inset-top)+12px)] z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white shadow-lg transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:top-6"
          >
            <X size={24} />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="flex h-full min-h-0 w-full max-w-6xl flex-col items-center justify-center gap-3 pt-12 pb-2 sm:gap-5 sm:pt-8"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              loading="eager"
              decoding="async"
              draggable={false}
              className="min-h-0 w-full flex-1 select-none rounded-md object-contain"
            />
            <h3
              className="shrink-0 px-4 text-center text-lg text-white sm:text-xl"
              style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}
            >
              {selected.title}
            </h3>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section
      id="aurelle-advertising"
      className="scroll-mt-28 bg-[#FFF7F2] px-4 py-16 text-[#681523] sm:px-6 sm:py-20 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-14">
          <h2
            className="mb-5 text-[clamp(2.3rem,9vw,3rem)] leading-tight italic text-[#850F25] md:text-7xl"
            style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 700 }}
          >
            Aurelle Advertising Campaign
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#76565B] sm:text-base">
            A collection of luxury skincare advertisements and elegant beauty campaigns.
          </p>
        </div>

        {/* Advertising project cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {campaigns.map((campaign, index) => (
            <motion.button
              key={campaign.title}
              type="button"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ duration: reduceMotion ? 0 : 0.4 }}
              onClick={() => openAdvertisement(index)}
              aria-label={`View ${campaign.title} advertisement`}
              className="group w-full overflow-hidden rounded-xl bg-white text-left shadow-sm transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#850F25]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F2E8E4]">
                <img
                  src={campaign.cover}
                  alt={`${campaign.title} cover`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="mb-2 text-xs uppercase tracking-widest text-[#A45D69]">
                  {campaign.category}
                </p>
                <h3
                  className="text-2xl text-[#681523]"
                  style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}
                >
                  {campaign.title}
                </h3>
                <p className="mt-3 text-sm text-[#76565B]">
                  Click to view advertisement
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Portal prevents the fixed site header from covering the viewer. */}
      {typeof document !== "undefined" ? createPortal(viewer, document.body) : null}
    </section>
  );
}
