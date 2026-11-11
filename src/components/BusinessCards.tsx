
import { createPortal } from "react-dom";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import {
  X,
  ArrowUpRight,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

// ORIGINAL DESIGNS
// These images open when someone clicks a cover.
import tuksiCard from "../assets/tuksi-business-card.png";
import cynthiaCard from "../assets/cynthia-business-card.png";

// NEW PORTFOLIO COVERS
import tuksiCover from "../assets/tuksi-services-business-card-cover.png";
import designerCover from "../assets/graphic-designer-business-card-cover.png";

// LITTLE BLOOM BIRTHDAY INVITATION

const designs = [
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

type PrintProject = (typeof designs)[number];

export function BusinessCards() {
  const [selected, setSelected] =
    useState<PrintProject | null>(null);

  const [zoomed, setZoomed] = useState(false);
  const reduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openDesign = (design: PrintProject) => {
    previousFocusRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement : null;
    setSelected(design);
    setZoomed(false);
  };

  const closeDesign = () => {
    setSelected(null);
    setZoomed(false);
    requestAnimationFrame(() => previousFocusRef.current?.focus());
  };

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDesign();
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selected]);

  return (
    <section
      id="business-cards"
      className="scroll-mt-28 bg-[#FFF7F2] px-4 py-16 text-[#681523] sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
          className="mb-10 text-center sm:mb-14"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A45D69]">
            06 / BUSINESS CARDS DESIGN
          </p>

          {/* BOLD ITALIC TITLE */}
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
            A selection of professional and personal business card designs, showcasing distinctive identities, typography, and considered layouts.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        {/* MATCHING PORTFOLIO COVER CARDS */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">

          {designs.map((design, index) => (
            <motion.article
              key={design.id}
              initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : (index % 3) * 0.1,
                ease: "easeOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -7 }
              }
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group h-full overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => openDesign(design)}
                aria-label={`Open ${design.title}`}
                className="flex h-full w-full cursor-pointer flex-col text-left"
              >

                {/* SAME 4:3 SIZE FOR EVERY COVER */}
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#F7EDE8]">

                  <img
                    src={design.cover}
                    alt={`${design.title} portfolio cover`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#681523] shadow-sm">
                    <ArrowUpRight size={21} />
                  </div>

                </div>

                {/* PROJECT INFORMATION */}
                <div className="flex w-full flex-1 flex-col bg-white p-5 sm:p-6">

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

                </div>

              </button>
            </motion.article>
          ))}

        </div>
      </div>

      {/* ORIGINAL DESIGN POPUP */}
      {typeof document !== "undefined" ? createPortal(
      <AnimatePresence>
        {selected && (
          <motion.div
            key="print-design-popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            onClick={closeDesign}
            className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-[#210C12]/90 p-0 backdrop-blur-sm sm:p-3 md:p-6"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 25,
                scale: reduceMotion ? 1 : 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.97,
                y: reduceMotion ? 0 : 10,
              }}
              transition={{ duration: reduceMotion ? 0 : 0.32, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} full design`}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="flex h-[100dvh] max-h-[100dvh] w-full max-w-5xl flex-col overflow-hidden bg-[#FFF7F2] shadow-2xl sm:h-auto sm:max-h-[94dvh] sm:rounded-2xl"
            >

              {/* POPUP HEADER */}
              <div className="flex shrink-0 items-center justify-between gap-2 border-b border-[#E8D2CF] px-3 pb-3 pt-[calc(env(safe-area-inset-top)+12px)] sm:gap-3 sm:px-6 sm:py-4">

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-[#A45D69]">
                    {selected.category}
                  </p>

                  <h3
                    className="mt-1 text-base leading-snug text-[#681523] sm:text-2xl"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {selected.title}
                  </h3>
                </div>

                <div className="flex shrink-0 gap-1.5 sm:gap-2">

                  {/* ZOOM BUTTON */}
                  <button
                    type="button"
                    onClick={() =>
                      setZoomed((current) => !current)
                    }
                    aria-label={
                      zoomed
                        ? "Fit design to screen"
                        : "Zoom in"
                    }
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0DFD9] text-[#681523] transition hover:bg-[#E7CCC5]"
                  >
                    {zoomed ? (
                      <ZoomOut size={20} />
                    ) : (
                      <ZoomIn size={20} />
                    )}
                  </button>

                  {/* CLOSE BUTTON */}
                  <button
                    type="button"
                    ref={closeButtonRef}
                    onClick={closeDesign}
                    aria-label="Close design"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#681523] text-white transition hover:bg-[#850F25]"
                  >
                    <X size={20} />
                  </button>

                </div>
              </div>

              {/* ORIGINAL IMAGE */}
              <div className="min-h-0 flex-1 overflow-auto overscroll-contain bg-[#F7EDE8] p-3 sm:p-6">

                <div
                  className={
                    zoomed
                      ? "flex min-w-max justify-center"
                      : "flex h-full items-center justify-center"
                  }
                >
                  <img
                    src={selected.image}
                    alt={`${selected.title} original design`}
                    className={
                      zoomed
                        ? "h-auto w-[900px] max-w-none sm:w-[1100px]"
                        : "max-h-full max-w-full object-contain"
                    }
                  />
                </div>

              </div>

              {/* POPUP FOOTER */}
              <div className="shrink-0 border-t border-[#E8D2CF] px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 text-center text-[11px] text-[#704B50] sm:py-3 sm:text-xs">
                View the original design. Use the zoom
                button for details, or press Esc to close.
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      ) : null}

    </section>
  );
}
