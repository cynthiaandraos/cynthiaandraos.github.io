
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

import goldenMarkCarRear from "../assets/golden-mark-car-rear.png";
import goldenMarkCarFront from "../assets/golden-mark-car-front.png";
import myFitnessDoor from "../assets/my-fitness-door-branding.jpeg";
import manymodaBag from "../assets/manymoda-shopping-bag.jpeg";

const oliviaAsset = (filename: string) => `/olivia/${filename}`;

type GalleryImage = { src: string; title: string };
type BrandProject = {
  title: string;
  subtitle: string;
  cover: string;
  images?: GalleryImage[];
  isOlivia?: boolean;
};

const oliviaSections = [
  {
    id: "identity",
    title: "Logo & Brand Identity",
    description: "The visual language behind the brand.",
    images: [
      ["oliv-ia-logo.png", "OLIV-IA Logo"],
      ["oliv-ia-brand-presentation.png", "Brand Presentation"],
    ],
  },
  {
    id: "packaging",
    title: "Product Labels & Packaging",
    description: "Bottle designs, labels, and finishing details.",
    images: [
      ["oliv-ia-product-mockup.png", "Product Mockup"],
      ["olivia-large-bottle.png", "Large Olive Oil Bottle"],
      ["olivia-front-back-labels.png", "Front & Back Labels"],
      ["olivia-label-collection.png", "Label Collection"],
      ["olivia-round-label.png", "Round Label"],
      ["olivia-hang-tag.png", "Hang Tag"],
    ],
  },
  {
    id: "shopping",
    title: "Shopping Bags & Gift Boxes",
    description: "Branded packaging for gifting and shopping.",
    images: [
      ["oliv-ia-shopping-bag.png", "Shopping Bag"],
      ["oliv-ia-gift-box.png", "Gift Box"],
    ],
  },
  {
    id: "advertising",
    title: "Advertising & Campaigns",
    description: "Print, outdoor, and product advertising.",
    images: [
      ["oliv-ia-billboard.png", "Billboard"],
      ["olivia-led-billboard.png", "LED Billboard"],
      ["oliv-ia-roadside-ad.png", "Roadside Advertisement"],
      ["oliv-ia-magazine-ad.png", "Magazine Advertisement"],
      ["oliv-ia-magazine-harvest.png", "Harvest Magazine Campaign"],
      ["olivia-pouring-ad.png", "Olive Oil Pouring Advertisement"],
      ["oliv-ia-signage.png", "Brand Signage"],
      ["oliv-ia-storefront.png", "Storefront Branding"],
    ],
  },
  {
    id: "social",
    title: "Instagram & Facebook",
    description: "Social media identity and campaign designs.",
    images: [
      ["olivia-instagram-mockup.png", "Instagram Mockup"],
      ["oliv-ia-facebook-ad.png", "Facebook Advertisement"],
    ],
  },
] as const;

const brandProjects: BrandProject[] = [
  {
    title: "OLIV-IA",
    subtitle: "Brand Identity & Packaging Design",
    cover: oliviaAsset("oliv-ia-cover.png"),
    isOlivia: true,
  },
  {
    title: "Golden Mark",
    subtitle: "Vehicle Branding",
    cover: goldenMarkCarFront,
    images: [
      { src: goldenMarkCarFront, title: "Vehicle Branding — Front View" },
      { src: goldenMarkCarRear, title: "Vehicle Branding — Rear View" },
    ],
  },
  {
    title: "MY Fitness by Myriam",
    subtitle: "Brand Application",
    cover: myFitnessDoor,
    images: [{ src: myFitnessDoor, title: "Glass Door Branding" }],
  },
  {
    title: "Manymoda",
    subtitle: "Shopping Bag Branding",
    cover: manymodaBag,
    images: [{ src: manymodaBag, title: "Shopping Bag Branding" }],
  },
];

export function Branding() {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<BrandProject | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!selected) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (!selected.isOlivia && selected.images?.length) {
        if (event.key === "ArrowRight") setActiveImage((i) => (i + 1) % selected.images!.length);
        if (event.key === "ArrowLeft") setActiveImage((i) => (i - 1 + selected.images!.length) % selected.images!.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <section id="branding" className="scroll-mt-28 bg-[#FFF7F2] px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-sm tracking-wide text-[#A45D69]">09 / BRAND IDENTITY</p>
            <h2 className="text-4xl italic text-[#850F25] sm:text-5xl md:text-7xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 700 }}>
              Brand Identity
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
              Complete visual identities and creative brand applications across different platforms and materials.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {brandProjects.map((project, index) => (
              <motion.button
                key={project.title}
                type="button"
                initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                onClick={() => { setActiveImage(0); setSelected(project); }}
                className="group overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white text-left shadow-sm transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#850F25]"
              >
                <div className="relative aspect-[4/3] bg-[#F7EDE8] p-4">
                  <img src={project.cover} alt={project.title} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute right-4 top-4 rounded-full bg-white p-2 text-[#681523] shadow-sm"><ArrowUpRight size={20} /></span>
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs uppercase tracking-widest text-[#A45D69]">{project.subtitle}</p>
                  <h3 className="text-2xl text-[#681523]" style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}>{project.title}</h3>
                  <p className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#850F25]">View Project <ArrowUpRight size={16} /></p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selected && (
            <motion.div
              key={selected.title}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10010] flex items-center justify-center bg-[#210C12]/90 p-0 backdrop-blur-sm sm:p-6"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                role="dialog" aria-modal="true" aria-label={`${selected.title} gallery`}
                onClick={(event) => event.stopPropagation()}
                className="relative flex h-[100dvh] w-full max-w-5xl flex-col overflow-hidden bg-[#FFF9F0] shadow-2xl sm:h-[90dvh] sm:rounded-2xl"
              >
                <button type="button" aria-label="Close gallery" onClick={() => setSelected(null)} className="absolute right-4 top-4 z-30 rounded-full bg-[#681523] p-3 text-white shadow-lg"><X size={20} /></button>
                {selected.isOlivia ? (
                  <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain" id="olivia-gallery">
                    <div className="mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-8">
                      <header className="mb-10 text-center">
                        <p className="text-xs uppercase tracking-[0.3em] text-[#7D8650]">A Complete Brand Story</p>
                        <h2 className="mt-3 text-5xl text-[#35452B] sm:text-7xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}>OLIV-IA</h2>
                        <p className="mt-2 text-sm text-[#626E4A]">Brand Identity & Packaging Design</p>
                        <img src={selected.cover} alt="OLIV-IA project cover" className="mx-auto mt-8 max-h-[440px] w-full rounded-xl object-contain" />
                      </header>
                      <nav aria-label="OLIV-IA gallery sections" className="mb-12 flex flex-wrap justify-center gap-2">
                        {oliviaSections.map((section) => (
                          <a key={section.id} href={`#olivia-${section.id}`} className="rounded-full border border-[#C5C8AE] px-3 py-2 text-xs text-[#35452B] hover:bg-[#E7E9D7]">{section.title}</a>
                        ))}
                      </nav>
                      {oliviaSections.map((section, index) => (
                        <section key={section.id} id={`olivia-${section.id}`} className="mb-16 scroll-mt-5">
                          <div className="mb-6 border-b border-[#D8DCC5] pb-5">
                            <p className="mb-2 text-xs tracking-widest text-[#7D8650]">0{index + 1} / OLIV-IA</p>
                            <h3 className="text-3xl text-[#35452B] sm:text-4xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}>{section.title}</h3>
                            <p className="mt-2 text-sm text-[#667154]">{section.description}</p>
                          </div>
                          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {section.images.map(([filename, title]) => (
                              <figure key={filename} className="overflow-hidden rounded-xl border border-[#E3E3D4] bg-white shadow-sm">
                                <div className="flex min-h-[240px] items-center justify-center bg-[#F7F5ED] p-3 sm:p-5">
                                  <img src={oliviaAsset(filename)} alt={title} loading="lazy" className="max-h-[480px] w-full object-contain" />
                                </div>
                                <figcaption className="px-4 py-3 text-center text-sm text-[#35452B]">{title}</figcaption>
                              </figure>
                            ))}
                          </div>
                        </section>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 pb-8 pt-20 sm:p-8">
                    <h2 className="mb-3 text-3xl text-[#681523]" style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}>{selected.title}</h2>
                    <p className="mb-5 text-sm text-[#704B50]">{selected.images?.[activeImage]?.title}</p>
                    <img src={selected.images?.[activeImage]?.src} alt={selected.images?.[activeImage]?.title || selected.title} className="min-h-0 max-h-[65vh] w-full flex-1 object-contain" />
                    {(selected.images?.length || 0) > 1 && (
                      <div className="mt-5 flex items-center gap-5 text-sm text-[#681523]">
                        <button type="button" className="rounded-full border border-[#E8D2CF] px-4 py-2" onClick={() => setActiveImage((i) => (i - 1 + selected.images!.length) % selected.images!.length)}>Previous</button>
                        <span>{activeImage + 1} / {selected.images!.length}</span>
                        <button type="button" className="rounded-full border border-[#E8D2CF] px-4 py-2" onClick={() => setActiveImage((i) => (i + 1) % selected.images!.length)}>Next</button>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>, document.body
      )}
    </>
  );
}
