
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const selected =
    selectedIndex === null
      ? null
      : campaigns[selectedIndex];

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedIndex]);

  return (
    <section
      id="aurelle-advertising"
      className="bg-[#FFF7F2] px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-14 text-center">
          <h2
            className="mb-5 text-5xl italic text-[#850F25] md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 700,
            }}
          >
            Aurelle Advertising Campaign
          </h2>

          <p className="mx-auto max-w-2xl text-[#76565B]">
            A collection of luxury skincare advertisements
            and elegant beauty campaigns.
          </p>
        </div>

        {/* Advertising project cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {campaigns.map((campaign, index) => (
            <motion.button
              key={campaign.title}
              type="button"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              onClick={() =>
                setSelectedIndex(index)
              }
              className="group overflow-hidden rounded-xl bg-white text-left shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F2E8E4]">
                <img
                  src={campaign.cover}
                  alt={`${campaign.title} cover`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="mb-2 text-xs uppercase tracking-widest text-[#A45D69]">
                  {campaign.category}
                </p>

                <h3
                  className="text-2xl text-[#681523]"
                  style={{
                    fontFamily:
                      "'Bodoni Moda', serif",
                  }}
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

      {/* Full-screen advertisement viewer */}
      <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setSelectedIndex(null)
            }
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10"
          >
            <button
              type="button"
              aria-label="Close advertisement"
              onClick={() =>
                setSelectedIndex(null)
              }
              className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <X size={28} />
            </button>

            <div
              className="flex max-h-full w-full max-w-6xl flex-col items-center"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="max-h-[80vh] max-w-full rounded-md object-contain"
              />

              <h3
                className="mt-5 text-center text-xl text-white"
                style={{
                  fontFamily:
                    "'Bodoni Moda', serif",
                }}
              >
                {selected.title}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
