import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

import collectionCover from "../assets/aurelle-full-skincare-collection-cover.png";
import collectionAd from "../assets/aurelle-full-skincare-collection-ad.png";
import radianceCover from "../assets/aurelle-natural-radiance-cover.png";
import radianceAd from "../assets/aurelle-natural-radiance-beauty-ad.png";
import magazine from "../assets/aurelle-magazine-campaign.png";

type GalleryImage = { src: string; label: string };
type AurelleProject = {
  id: number;
  title: string;
  category: string;
  description: string;
  cover: string;
  images: GalleryImage[];
};

const projects: AurelleProject[] = [
  {
    id: 1,
    title: "Full Skincare Collection",
    category: "Advertising Campaign · Product Collection",
    description: "A luxury campaign introducing the complete AURELLE skincare collection.",
    cover: collectionCover,
    images: [{ src: collectionAd, label: "Full Skincare Collection · Advertisement" }],
  },
  {
    id: 2,
    title: "Natural Radiance Beauty Campaign",
    category: "Beauty Advertising · Editorial",
    description: "An editorial beauty campaign celebrating natural radiance and skincare rituals.",
    cover: radianceCover,
    images: [{ src: radianceAd, label: "Natural Radiance · Beauty Advertisement" }],
  },
  {
    id: 3,
    title: "AURELLE Magazine Campaign",
    category: "Print Advertising · Magazine Design",
    description: "A multi-page editorial presentation featuring AURELLE skincare and its product stories.",
    cover: magazine,
    images: [{ src: magazine, label: "AURELLE · Magazine Campaign" }],
  },
];

export function AurelleAdvertising() {
  const [selected, setSelected] = useState<AurelleProject | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const reduceMotion = useReducedMotion();

  const openProject = (project: AurelleProject) => {
    setSelected(project);
    setActiveImage(0);
  };
  const closeProject = () => {
    setSelected(null);
    setActiveImage(0);
  };
  const nextImage = () => {
    if (selected) setActiveImage((current) => (current + 1) % selected.images.length);
  };
  const previousImage = () => {
    if (selected) setActiveImage((current) => (current - 1 + selected.images.length) % selected.images.length);
  };

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setActiveImage((current) => (current + 1) % selected.images.length);
      if (event.key === "ArrowLeft") setActiveImage((current) => (current - 1 + selected.images.length) % selected.images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);

  return (
    <section id="aurelle-advertising" className="scroll-mt-28 bg-[#FFF7F2] px-6 py-24 text-[#681523]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A45D69]">
            05 / ADVERTISING CAMPAIGN
          </p>
          <h2
            className="text-5xl text-[#850F25] md:text-7xl"
            style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 400 }}
          >
            AURELLE <span className="italic">Advertising Campaign</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            Explore the AURELLE advertising collection, from luxury product campaigns to
            beauty editorials and magazine design. Select a project to view the artwork.
          </p>
          <div className="mx-auto mt-8 h-px w-28 bg-[#850F25]/40" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.12, ease: "easeOut" }}
              whileHover={reduceMotion ? undefined : { y: -7 }}
              className="group h-full overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => openProject(project)}
                className="flex h-full w-full cursor-pointer flex-col text-left"
                aria-label={`Open ${project.title} gallery`}
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#F8F0EC]">
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#681523] shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <div className="flex w-full flex-1 flex-col p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#A45D69]">{project.category}</p>
                  <h3
                    className="text-2xl text-[#681523]"
                    style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 400 }}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#704B50]">{project.description}</p>
                  <p className="mt-auto flex items-center gap-2 pt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#850F25]">
                    View Project <ArrowUpRight size={16} />
                  </p>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="aurelle-advertising-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[10010] flex items-center justify-center bg-[#210C12]/85 p-3 backdrop-blur-sm md:p-8"
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 25, scale: reduceMotion ? 1 : 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} gallery`}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-[#FFF7F2] p-4 shadow-2xl md:p-8"
            >
              <button
                type="button"
                onClick={closeProject}
                aria-label="Close gallery"
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#681523] text-white transition hover:bg-[#A13A4B]"
              >
                <X size={22} />
              </button>
              <div className="mb-6 pr-12">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#A45D69]">AURELLE Advertising</p>
                <h3
                  className="text-3xl text-[#850F25] md:text-4xl"
                  style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 400 }}
                >
                  {selected.title}
                </h3>
              </div>
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl bg-[#F8F0EC]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${selected.id}-${activeImage}`}
                    src={selected.images[activeImage].src}
                    alt={selected.images[activeImage].label}
                    initial={{ opacity: 0, x: reduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: reduceMotion ? 0 : -20 }}
                    transition={{ duration: 0.25 }}
                    className="max-h-[60vh] w-full object-contain"
                  />
                </AnimatePresence>
                {selected.images.length > 1 && (
                  <>
                    <button type="button" onClick={previousImage} aria-label="Previous image" className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#681523]/90 text-white hover:bg-[#850F25]">
                      <ChevronLeft size={24} />
                    </button>
                    <button type="button" onClick={nextImage} aria-label="Next image" className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#681523]/90 text-white hover:bg-[#850F25]">
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
              <div className="mt-5 text-center">
                <p className="text-sm font-medium text-[#681523]">{selected.images[activeImage].label}</p>
                <p className="mt-1 text-xs text-[#A45D69]">{activeImage + 1} of {selected.images.length}</p>
              </div>
              {selected.images.length > 1 && (
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  {selected.images.map((image, index) => (
                    <button
                      key={image.label}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`View ${image.label}`}
                      aria-pressed={activeImage === index}
                      className={`h-20 w-20 overflow-hidden rounded-xl border-2 bg-white p-1 transition ${activeImage === index ? "border-[#850F25]" : "border-[#E8D2CF]"}`}
                    >
                      <img src={image.src} alt="" className="h-full w-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
