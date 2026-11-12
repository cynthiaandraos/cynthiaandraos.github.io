
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

// Uses existing images in src/assets. No file moves or renaming needed.
const assetModules = import.meta.glob("../assets/5beans*.png", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const asset = (filename: string): string | undefined =>
  Object.entries(assetModules).find(([path]) => path.endsWith(`/${filename}`))?.[1];

type Section = { title: string; description: string; files: string[] };
const sections: Section[] = [
  {
    title: "Packaging & Labels",
    description: "Coffee, seasonal packaging, labels, and product designs.",
    files: [
      "5beans-coffee-cover.png", "5beans-coffee-label.png", "5beans-coffee-packaging.png",
      "5beans-christmas-cover.png", "5beans-christmas-label.png", "5beans-christmas-packaging.png",
      "5beans-peanut-cover.png", "5beans-peanut-butter-label.png", "5beans-peanut-butter-jars.png",
      "5beans-blank-cups.png", "5beans-cup-design.png", "5beans-protein-balls-photo.png",
      "5beans-snack-cover.png",
    ],
  },
  {
    title: "Promotional",
    description: "Flyers, vouchers, loyalty cards, and event materials.",
    files: [
      "5beans-branch-flyer-cover.png", "5beans-branch-flyer.png",
      "5beans-delivery-cover.png", "5beans-delivery-flyer.png",
      "5beans-charity-ticket.png", "5beans-gift-voucher.png", "5beans-loyalty-card.png",
    ],
  },
];

const images = sections.flatMap((section) => section.files);
const firstImage = asset("5beans-coffee-packaging.png") ?? Object.values(assetModules)[0];

export function FiveBeansProject() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (zoomedImage) setZoomedImage(null);
        else setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, zoomedImage]);

  const availableSections = sections
    .map((section) => ({ ...section, files: section.files.filter((file) => Boolean(asset(file))) }))
    .filter((section) => section.files.length > 0);
  const current = availableSections[Math.min(activeTab, availableSections.length - 1)];

  if (!firstImage || images.every((filename) => !asset(filename))) {
    return (
      <section id="five-beans" className="bg-[#FFF7F2] px-6 py-12 text-center text-[#704B50]">
        5 Beans images were not found. Check that the filenames in src/assets begin with 5beans.
      </section>
    );
  }

  return (
    <>
      <section id="five-beans" className="scroll-mt-28 bg-[#FFF7F2] px-4 py-12 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.button
            type="button"
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => { setActiveTab(0); setOpen(true); }}
            className="group mx-auto block w-full max-w-3xl overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white text-left shadow-sm transition-shadow hover:shadow-xl"
          >
            <div className="relative flex aspect-[16/9] items-center justify-center bg-[#F7EDE8] p-6">
              <img src={firstImage} alt="5 Beans packaging design" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <span className="absolute right-5 top-5 rounded-full bg-white p-3 text-[#681523] shadow"><ArrowUpRight size={20} /></span>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#A45D69]">Featured Project</p>
              <h2 className="mt-2 text-3xl text-[#681523] sm:text-4xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}>5 Beans</h2>
              <p className="mt-2 text-sm text-[#704B50]">Complete Brand Presentation</p>
              <p className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#850F25]">View Project <ArrowUpRight size={16} /></p>
            </div>
          </motion.button>
        </div>
      </section>

      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[10010] flex items-center justify-center bg-[#210C12]/90 p-0 backdrop-blur-sm sm:p-6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => { setZoomedImage(null); setOpen(false); }}
            >
              <motion.div
                role="dialog" aria-modal="true" aria-label="5 Beans brand presentation"
                onClick={(event) => event.stopPropagation()}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="relative flex h-[100dvh] w-full max-w-5xl flex-col overflow-hidden bg-[#FFF9F0] sm:h-[90dvh] sm:rounded-2xl"
              >
                <button type="button" onClick={() => { setZoomedImage(null); setOpen(false); }} aria-label="Close project" className="absolute right-4 top-4 z-30 rounded-full bg-[#681523] p-3 text-white"><X size={20} /></button>
                <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-14 pt-16 sm:px-8">
                  <header className="mb-8 text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#A45D69]">Featured Project</p>
                    <h2 className="mt-2 text-4xl italic text-[#850F25] sm:text-6xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}>5 Beans</h2>
                    <p className="mt-2 text-sm text-[#704B50]">Complete Brand Presentation</p>
                    <img src={firstImage} alt="5 Beans project cover" className="mx-auto mt-6 max-h-[360px] w-full object-contain" />
                  </header>
                  <nav aria-label="5 Beans categories" className="mb-10 flex flex-wrap justify-center gap-2">
                    {availableSections.map((section, index) => (
                      <button key={section.title} type="button" onClick={() => setActiveTab(index)}
                        aria-pressed={activeTab === index}
                        className={`rounded-full border px-4 py-2 text-sm transition-colors ${activeTab === index ? "border-[#681523] bg-[#681523] text-white" : "border-[#D8C8C6] bg-white text-[#681523] hover:bg-[#F5E9E7]"}`}
                      >{section.title}</button>
                    ))}
                  </nav>
                  {current && (
                    <section>
                      <h3 className="text-center text-2xl text-[#681523]" style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}>{current.title}</h3>
                      <p className="mb-8 mt-2 text-center text-sm text-[#704B50]">{current.description}</p>
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {current.files.map((filename) => (
                          <button type="button" key={filename} onClick={() => setZoomedImage(asset(filename)!)} className="overflow-hidden rounded-xl border border-[#E8D2CF] bg-white text-left shadow-sm hover:shadow-md">
                            <div className="flex aspect-[4/3] items-center justify-center bg-[#F7EDE8] p-4">
                              <img src={asset(filename)} alt={filename.replace(/5beans-|\.png/g, "").replace(/-/g, " ")} loading="lazy" className="h-full w-full object-contain" />
                            </div>
                            <p className="px-4 py-3 text-center text-sm capitalize text-[#681523]">{filename.replace(/5beans-|\.png/g, "").replace(/-/g, " ")}</p>
                          </button>
                        ))}
                      </div>
                    </section>
                  )}
                </div>
              </motion.div>
              {zoomedImage && (
                <div className="fixed inset-0 z-[10020] flex items-center justify-center bg-black/95 p-5" onClick={(event) => { event.stopPropagation(); setZoomedImage(null); }} role="presentation">
                  <button type="button" aria-label="Close image preview" onClick={() => setZoomedImage(null)} className="absolute right-5 top-5 rounded-full bg-white p-3 text-[#681523]"><X size={20} /></button>
                  <img src={zoomedImage} alt="5 Beans design enlarged" className="max-h-full max-w-full object-contain" />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>, document.body
      )}
    </>
  );
}
