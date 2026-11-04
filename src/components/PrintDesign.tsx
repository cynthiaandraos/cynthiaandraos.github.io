
import { useEffect, useState } from "react";
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

import charityTicket from "../assets/5beans-charity-ticket.png";
import giftVoucher from "../assets/5beans-gift-voucher.png";
import loyaltyCard from "../assets/5beans-loyalty-card.png";
import tuksiCard from "../assets/tuksi-business-card.png";
import cynthiaCard from "../assets/cynthia-business-card.png";

const designs = [
  {
    id: 1,
    title: "Tuksi Services",
    category: "Business Card Design",
    client: "Tuksi Services",
    image: tuksiCard,
    description:
      "A bold black-and-yellow business card featuring the Tuksi Services identity and contact information.",
  },
  {
    id: 2,
    title: "Cynthia Melki",
    category: "Personal Business Card",
    client: "Personal Branding",
    image: cynthiaCard,
    description:
      "A modern graphic designer business card featuring a geometric monogram and turquoise-and-charcoal color palette.",
  },
  {
    id: 3,
    title: "Charity Event Ticket",
    category: "Event Ticket Design",
    client: "5 Beans Coffee Shop",
    image: charityTicket,
    description:
      "A double-sided ticket for a charity high tea event supporting the Children's Cancer Center of Lebanon.",
  },
  {
    id: 4,
    title: "$10 Gift Voucher",
    category: "Gift Voucher Design",
    client: "5 Beans Coffee Shop",
    image: giftVoucher,
    description:
      "A double-sided coffee voucher designed in collaboration with Once Upon a Time Nursery.",
  },
  {
    id: 5,
    title: "Coffee Loyalty Card",
    category: "Loyalty Card Design",
    client: "5 Beans Coffee Shop",
    image: loyaltyCard,
    description:
      "A coffee loyalty card encouraging repeat visits with a buy-nine, get-the-tenth-free reward.",
  },
];

type PrintProject = (typeof designs)[number];

export function PrintDesign() {
  const [selected, setSelected] =
    useState<PrintProject | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const reduceMotion = useReducedMotion();

  const openDesign = (design: PrintProject) => {
    setSelected(design);
    setZoomed(false);
  };

  const closeDesign = () => {
    setSelected(null);
    setZoomed(false);
  };

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
        setZoomed(false);
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";
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
      id="print-design"
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
            06 / PRINT & STATIONERY
          </p>

          <h2
            className="text-5xl text-[#850F25] md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 400,
            }}
          >
            Business Cards{" "}
            <span className="italic">& Vouchers</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            A selection of business cards, gift
            vouchers, event tickets, and loyalty
            cards designed for different brands
            and promotional purposes.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        {/* Five project cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((design, index) => (
            <motion.article
              key={design.id}
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
                onClick={() => openDesign(design)}
                aria-label={`Open ${design.title}`}
                className="block h-full w-full cursor-pointer text-left"
              >
                {/* Card image */}
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#F7EDE8] p-4">
                  <img
                    src={design.image}
                    alt={design.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#681523] shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Card details */}
                <div className="p-6">
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

                  <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#850F25]">
                    View Full Design
                    <ArrowUpRight size={16} />
                  </p>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Full-size design popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="print-design-popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeDesign}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-[#210C12]/90 p-3 backdrop-blur-sm md:p-6"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 20,
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
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} full design`}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#FFF7F2] shadow-2xl"
            >
              {/* Popup header */}
              <div className="flex items-center justify-between gap-3 border-b border-[#E8D2CF] px-4 py-4 sm:px-6">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-[#A45D69]">
                    {selected.category}
                  </p>

                  <h3
                    className="mt-1 text-lg text-[#681523] sm:text-2xl"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {selected.title}
                  </h3>
                </div>

                <div className="flex shrink-0 gap-2">
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
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0DFD9] text-[#681523] transition hover:bg-[#E7CCC5]"
                  >
                    {zoomed ? (
                      <ZoomOut size={20} />
                    ) : (
                      <ZoomIn size={20} />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={closeDesign}
                    aria-label="Close design"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#681523] text-white transition hover:bg-[#850F25]"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Scrollable original image */}
              <div className="min-h-0 flex-1 overflow-auto bg-[#F7EDE8] p-3 sm:p-6">
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
                        ? "h-auto w-[1100px] max-w-none"
                        : "max-h-[70vh] max-w-full object-contain"
                    }
                  />
                </div>
              </div>

              {/* Popup footer */}
              <div className="border-t border-[#E8D2CF] px-4 py-3 text-center text-xs text-[#704B50]">
                View the original design. Use the zoom
                button for details, or press Esc to close.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

