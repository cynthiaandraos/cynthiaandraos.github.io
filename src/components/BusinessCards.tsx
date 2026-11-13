
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { X, ArrowUpRight } from "lucide-react";

// ORIGINAL BUSINESS CARD DESIGNS
import tuksiCard from "../assets/tuksi-business-card.png";
import cynthiaCard from "../assets/cynthia-business-card.png";

// ORIGINAL PORTFOLIO COVERS
import tuksiCover from "../assets/tuksi-services-business-card-cover.png";
import designerCover from "../assets/graphic-designer-business-card-cover.png";

type BusinessCardDesign = {
  id: number;
  title: string;
  category: string;
  client: string;
  cover: string;
  image: string;
  description: string;
};

const designs: BusinessCardDesign[] = [
  {
    id: 1,
    title: "Tuksi Services",
    category: "Business Card Design",
    client: "Tuksi Services",
    cover: tuksiCover,
    image: tuksiCard,
    description:
      "A bold black-and-yellow business card featuring the Tuksi Services identity and contact information.",
  },
  {
    id: 2,
    title: "Cynthia Melki",
    category: "Personal Business Card",
    client: "Personal Branding",
    cover: designerCover,
    image: cynthiaCard,
    description:
      "A modern graphic designer business card featuring a geometric monogram and turquoise-and-charcoal color palette.",
  },
];

const COPYRIGHT = "© Cynthia Andraos";

const watermarkClass =
  "pointer-events-none absolute bottom-3 right-3 z-20 rounded-md bg-[#210C12]/50 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/90";

export function BusinessCards() {
  const reduceMotion = useReducedMotion();

  const [selected, setSelected] =
    useState<BusinessCardDesign | null>(null);

  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  const previousFocusRef =
    useRef<HTMLElement | null>(null);

  const openDesign = (design: BusinessCardDesign) => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    setSelected(design);
  };

  const closeDesign = () => {
    setSelected(null);

    requestAnimationFrame(() => {
      previousFocusRef.current?.focus();
    });
  };

  useEffect(() => {
    if (!selected) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
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
  }, [selected]);

  return (
    <>
      <section
        id="business-cards"
        className="scroll-mt-28 bg-[#FFF7F2] px-4 py-16 text-[#681523] sm:px-6 sm:py-20 md:py-24"
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
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: "easeOut",
            }}
            className="mb-10 text-center sm:mb-14"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A45D69]">
              04 /
            </p>

            <h2
              className="text-[clamp(2.35rem,9vw,3rem)] leading-tight italic text-[#850F25] md:text-7xl"
              style={{
                fontFamily:
                  "'Bodoni Moda', Georgia, serif",
                fontWeight: 700,
              }}
            >
              Business Cards Design
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
              A selection of professional and personal
              business card designs, showcasing
              distinctive identities, typography,
              and considered layouts.
            </p>

            <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
          </motion.div>

          {/* BUSINESS CARD GRID */}
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {designs.map((design, index) => (
              <motion.article
                key={design.id}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 40,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion ? 0 : index * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -5 }
                }
                className="group h-full overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() =>
                    openDesign(design)
                  }
                  aria-label={`Open ${design.title}`}
                  className="flex h-full w-full flex-col text-left"
                >
                  {/* ORIGINAL COVER */}
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#F7EDE8]">
                    <motion.img
                      initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.9, delay: index * 0.14, ease: "easeOut" }}
                      src={design.cover}
                      alt={`${design.title} portfolio cover`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="absolute inset-0 h-full w-full select-none object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* SINGLE COPYRIGHT */}
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

                  {/* PROJECT INFORMATION */}
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.65, delay: 0.15 + index * 0.14, ease: "easeOut" }}
                    className="flex w-full flex-1 flex-col bg-white p-5 sm:p-6"
                  >
                    <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#A45D69]">
                      {design.category}
                    </p>

                    <h3
                      className="text-2xl text-[#681523]"
                      style={{
                        fontFamily:
                          "'Bodoni Moda', Georgia, serif",
                        fontWeight: 400,
                      }}
                    >
                      {design.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#A45D69]">
                      {design.client}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-[#704B50]">
                      {design.description}
                    </p>

                    <p className="mt-auto flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#850F25]">
                      View Full Design
                      <ArrowUpRight size={16} />
                    </p>
                  </motion.div>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FULL DESIGN VIEWER */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selected && (
              <motion.div
                key="business-card-popup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.2,
                }}
                onClick={closeDesign}
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
                  transition={{
                    duration: reduceMotion ? 0 : 0.25,
                  }}
                  role="dialog"
                  aria-modal="true"
                  aria-label={`${selected.title} full design`}
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                  className="flex h-[100dvh] w-full max-w-5xl flex-col overflow-hidden bg-[#FFF7F2] shadow-2xl sm:h-[90dvh] sm:rounded-2xl"
                >
                  {/* VIEWER HEADER */}
                  <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#E8D2CF] px-4 py-3 sm:px-6 sm:py-4">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-[#A45D69] sm:text-xs">
                        {selected.category}
                      </p>

                      <h3
                        className="mt-1 truncate text-lg text-[#681523] sm:text-2xl"
                        style={{
                          fontFamily:
                            "'Bodoni Moda', Georgia, serif",
                        }}
                      >
                        {selected.title}
                      </h3>
                    </div>

                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={closeDesign}
                      aria-label="Close design"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#681523] text-white"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* ORIGINAL DESIGN - FULLY VISIBLE */}
                  <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#F7EDE8] p-4 sm:p-8">
                    <motion.div
                      key={selected.id}
                      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeOut" }}
                      className="relative flex h-full w-full items-center justify-center"
                    >
                      <img
                        src={selected.image}
                        alt={`${selected.title} original business card`}
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
                    </motion.div>
                  </div>

                  {/* VIEWER FOOTER */}
                  <div className="shrink-0 border-t border-[#E8D2CF] bg-[#FFF7F2] px-4 py-3 text-center">
                    <p className="text-xs text-[#A45D69]">
                      Original Business Card Design
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
