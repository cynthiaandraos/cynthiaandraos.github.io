
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";

import coffeeLabel from "../assets/5beans-coffee-label.png";
import coffeePackaging from "../assets/5beans-coffee-packaging.png";
import peanutLabel from "../assets/5beans-peanut-butter-label.png";
import peanutJars from "../assets/5beans-peanut-butter-jars.png";
import cupDesign from "../assets/5beans-cup-design.png";
import snackStickers from "../assets/5beans-snack-stickers.png";
import snackJars from "../assets/5beans-snack-jars.png";
import proteinPhoto from "../assets/5beans-protein-balls-photo.png";
import christmasLabel from "../assets/5beans-christmas-label.png";
import christmasPackaging from "../assets/5beans-christmas-packaging.png";

const designs = [
  {
    title: "Coffee Bag Packaging",
    category: "Packaging Design",
    image: coffeePackaging,
  },
  {
    title: "Coffee Label Design",
    category: "Product Label",
    image: coffeeLabel,
  },
  {
    title: "Peanut Butter Packaging",
    category: "Product Packaging",
    image: peanutJars,
  },
  {
    title: "Peanut Butter Label",
    category: "Label Design",
    image: peanutLabel,
  },
  {
    title: "Branded Takeaway Cups",
    category: "Brand Application",
    image: cupDesign,
  },
  {
    title: "Snack Jar Packaging",
    category: "Sticker Design",
    image: snackJars,
  },
  {
    title: "Snack Stickers",
    category: "Product Labels",
    image: snackStickers,
  },
  {
    title: "Protein Energy Balls",
    category: "Product Photography",
    image: proteinPhoto,
  },
  {
    title: "Christmas Cookie Packaging",
    category: "Seasonal Packaging",
    image: christmasPackaging,
  },
  {
    title: "Christmas Cookie Label",
    category: "Seasonal Label Design",
    image: christmasLabel,
  },
];

type Design = (typeof designs)[number];

export function Packaging() {
  const [selected, setSelected] = useState<Design | null>(null);

  useEffect(() => {
    if (!selected) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    const previousOverflow = document.body.style.overflow;
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
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A45D69]">
            03 / PACKAGING & LABELS
          </p>

          <h2
            className="text-5xl text-[#850F25] md:text-7xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
              fontWeight: 400,
            }}
          >
            5 Beans <span className="italic">Coffee Shop</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            A collection of coffee packaging, product labels,
            branded cups, snack stickers, and seasonal designs.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((design, index) => (
            <motion.article
              key={design.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.12,
              }}
              className="group overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => setSelected(design)}
                className="w-full cursor-pointer text-left"
                aria-label={`View ${design.title}`}
              >
                <div className="relative aspect-square overflow-hidden bg-[#F8F0EC]">
                  <img
                    src={design.image}
                    alt={design.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#681523] shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#A45D69]">
                    {design.category}
                  </p>
                  <h3
                    className="text-2xl text-[#681523]"
                    style={{
                      fontFamily: "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {design.title}
                  </h3>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="packaging-preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#210C12]/85 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            role="presentation"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-[#FFF7F2] p-5 shadow-2xl md:p-8"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close preview"
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#681523] text-white hover:bg-[#A13A4B]"
              >
                <X size={22} />
              </button>

              <div className="flex min-h-[250px] items-center justify-center rounded-2xl bg-[#F8F0EC]">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="max-h-[65vh] w-full object-contain"
                />
              </div>

              <div className="pt-6 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[#A45D69]">
                  {selected.category}
                </p>
                <h3
                  className="mt-3 text-3xl text-[#681523]"
                  style={{
                    fontFamily: "'Bodoni Moda', Georgia, serif",
                  }}
                >
                  {selected.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

