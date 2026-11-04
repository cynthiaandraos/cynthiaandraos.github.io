
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

import deliveryFlyer from "../assets/5beans-delivery-flyer.png";
import branchFlyer from "../assets/5beans-branch-flyer.png";
import myFitnessFlyer from "../assets/my-fitness-training-flyer.jpeg";

const flyers = [
  {
    id: 1,
    title: "Delivery Promotional Flyer",
    client: "5 Beans Coffee Shop",
    category: "Promotional Flyer Design",
    image: deliveryFlyer,
    description:
      "A promotional flyer highlighting the coffee shop's delivery service, menu platforms, and ordering information.",
  },
  {
    id: 2,
    title: "Branch Promotional Flyer",
    client: "5 Beans Coffee Shop",
    category: "Marketing Flyer Design",
    image: branchFlyer,
    description:
      "A promotional flyer featuring the FortyFour Tower location, product photography, and a scannable menu.",
  },
  {
    id: 3,
    title: "Personal Training Flyer",
    client: "MY Fitness by Myriam",
    category: "Fitness Promotional Flyer",
    image: myFitnessFlyer,
    description:
      "A promotional fitness flyer highlighting personal training services and the MY Fitness brand identity.",
  },
];

type Flyer = (typeof flyers)[number];

export function Flyers() {
  const [selected, setSelected] = useState<Flyer | null>(
    null
  );
  const [zoomed, setZoomed] = useState(false);
  const reduceMotion = useReducedMotion();

  const openFlyer = (flyer: Flyer) => {
    setSelected(flyer);
    setZoomed(false);
  };

  const closeFlyer = () => {
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
      id="flyers"
      className="bg-[#FFF7F2] px-6 py-24 text-[#681523]"
    >
      <div className="mx-auto max-w-6xl">
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
            04 / PRINT & PROMOTIONAL DESIGN
          </p>

          <h2
            className="text-5xl text-[#850F25] md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 400,
            }}
          >
            Flyer <span className="italic">Design</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            Promotional and marketing flyers created for
            different brands. Explore each design
            in full detail.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        {/* Flyer cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {flyers.map((flyer, index) => (
            <motion.article
              key={flyer.id}
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
                delay: reduceMotion ? 0 : index * 0.15,
              }}
              whileHover={
                reduceMotion ? undefined : { y: -7 }
              }
              className="group overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => openFlyer(flyer)}
                aria-label={`Open ${flyer.title}`}
                className="block w-full cursor-pointer text-left"
              >
                {/* Flyer preview */}
                <div className="relative flex h-[430px] items-center justify-center overflow-hidden bg-[#F7EDE8] p-6 sm:h-[500px]">
                  <img
                    src={flyer.image}
                    alt={flyer.title}
                    loading="lazy"
                    className="h-full w-full object-contain drop-shadow-lg transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#681523] shadow-sm">
                    <ArrowUpRight size={21} />
                  </div>
                </div>

                {/* Flyer information */}
                <div className="p-7">
                  <p className="mb-2 text-xs uppercase tracking-[0.17em] text-[#A45D69]">
                    {flyer.category}
                  </p>

                  <h3
                    className="text-2xl text-[#681523] sm:text-3xl"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {flyer.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#A45D69]">
                    {flyer.client}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#704B50]">
                    {flyer.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#850F25]">
                    View Full Design
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Full-size flyer viewer */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="flyer-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-[#210C12]/90 p-3 backdrop-blur-sm md:p-6"
            onClick={closeFlyer}
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
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-[#FFF7F2] shadow-2xl"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between gap-3 border-b border-[#E8D2CF] px-4 py-4 sm:px-6">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-[#A45D69]">
                    {selected.client}
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
                        ? "Fit flyer to screen"
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
                    onClick={closeFlyer}
                    aria-label="Close flyer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#681523] text-white transition hover:bg-[#850F25]"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Scrollable image viewer */}
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
                    alt={selected.title}
                    className={
                      zoomed
                        ? "h-auto w-[900px] max-w-none"
                        : "max-h-[70vh] max-w-full object-contain"
                    }
                  />
                </div>
              </div>

              <div className="border-t border-[#E8D2CF] px-4 py-3 text-center text-xs text-[#704B50]">
                Use the zoom button to view the flyer details.
                Press Esc to close.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
