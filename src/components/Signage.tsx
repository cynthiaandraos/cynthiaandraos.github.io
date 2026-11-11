
import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";

import goldenMarkGlassStorefront from "../assets/golden-mark-glass-storefront.png";
import goldenMarkOfficeFacade from "../assets/golden-mark-office-facade.png";
import houseOfBeautyStorefront from "../assets/house-of-beauty-storefront.png";
import myFitnessDoor from "../assets/my-fitness-door-branding.jpeg";
import snackSignage from "../assets/snack-el-khal-signage.jpeg";

type SignageImage = { src: string; title: string };
type SignageProject = { title: string; category: string; cover: string; images: SignageImage[] };

const projects: SignageProject[] = [
  {
    title: "Golden Mark",
    category: "Storefront & Office Signage",
    cover: goldenMarkGlassStorefront,
    images: [
      { src: goldenMarkGlassStorefront, title: "Golden Mark Glass Storefront" },
      { src: goldenMarkOfficeFacade, title: "Golden Mark Office Facade" },
    ],
  },
  {
    title: "House of Beauty",
    category: "Storefront Branding",
    cover: houseOfBeautyStorefront,
    images: [{ src: houseOfBeautyStorefront, title: "House of Beauty Storefront" }],
  },
  {
    title: "MY Fitness by Myriam",
    category: "Glass Door Branding",
    cover: myFitnessDoor,
    images: [{ src: myFitnessDoor, title: "MY Fitness Glass Door Branding" }],
  },
  {
    title: "Snack الخال",
    category: "Outdoor Signage",
    cover: snackSignage,
    images: [{ src: snackSignage, title: "Snack الخال Outdoor Signage" }],
  },
  {
    title: "OLIV-IA",
    category: "Storefront & Brand Signage",
    cover: "/olivia/oliv-ia-storefront.png",
    images: [
      { src: "/olivia/oliv-ia-storefront.png", title: "OLIV-IA Storefront Branding" },
      { src: "/olivia/oliv-ia-signage.png", title: "OLIV-IA Brand Signage" },
    ],
  },
];

export function Signage() {
  const reduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<SignageProject | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const openProject = (project: SignageProject) => {
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setActiveImage(0);
    setSelectedProject(project);
  };
  const closeProject = () => {
    setSelectedProject(null);
    setActiveImage(0);
    requestAnimationFrame(() => previousFocusRef.current?.focus());
  };
  const nextImage = () => setActiveImage((index) => selectedProject ? (index + 1) % selectedProject.images.length : 0);
  const previousImage = () => setActiveImage((index) => selectedProject ? (index - 1 + selectedProject.images.length) % selectedProject.images.length : 0);

  useEffect(() => {
    if (!selectedProject) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeProject();
      if (event.key === "ArrowRight") setActiveImage((index) => (index + 1) % selectedProject.images.length);
      if (event.key === "ArrowLeft") setActiveImage((index) => (index - 1 + selectedProject.images.length) % selectedProject.images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
  };
  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    const touch = event.changedTouches[0];
    if (!start || !touch || !selectedProject || selectedProject.images.length < 2) return;
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) nextImage();
      else previousImage();
    }
  };

  return (
    <>
      <section id="signage" className="scroll-mt-28 bg-[#FFF7F2] px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-xs tracking-[0.3em] text-[#A45D69]">09 / Signage &amp; Environmental Branding</p>
            <h2 className="text-4xl italic text-[#850F25] sm:text-5xl md:text-7xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 700 }}>
              Signage &amp; Environmental Branding
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
              Creative signage and environmental branding designs that bring visual identities into physical spaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.button
                key={project.title}
                type="button"
                initial={reduceMotion ? false : { opacity: 0, y: 48, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : (index % 3) * 0.09, ease: "easeOut" }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                onClick={() => openProject(project)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white p-0 text-left shadow-sm transition-shadow duration-300 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#850F25]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7EDE8]">
                  <img src={project.cover} alt={project.title} loading="lazy" decoding="async" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#681523] shadow-sm"><ArrowUpRight size={20} /></div>
                </div>
                <div className="flex w-full flex-1 flex-col p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#A45D69]">{project.category}</p>
                  <h3 className="text-2xl text-[#681523]" style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}>{project.title}</h3>
                  <p className="mt-auto flex items-center gap-2 pt-5 text-xs font-semibold uppercase tracking-widest text-[#850F25]">View Project <ArrowUpRight size={16} /></p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={closeProject}
              className="fixed inset-0 z-[10010] flex items-center justify-center bg-[#210C12]/90 p-0 backdrop-blur-sm sm:p-6"
            >
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: reduceMotion ? 0 : 0.3 }}
                onClick={(event) => event.stopPropagation()}
                role="dialog" aria-modal="true" aria-label={`${selectedProject.title} signage gallery`}
                className="relative flex h-[100dvh] min-h-0 w-full flex-col overflow-hidden bg-[#FFF7F2] shadow-2xl sm:h-[90dvh] sm:max-w-5xl sm:rounded-2xl"
              >
                <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[#E8D2CF] px-6 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#A45D69]">{selectedProject.category}</p>
                    <h3 className="mt-1 text-2xl text-[#681523]" style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}>{selectedProject.title}</h3>
                  </div>
                  <button ref={closeButtonRef} type="button" onClick={closeProject} aria-label="Close gallery" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#681523] text-white"><X size={20} /></button>
                </div>
                <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onTouchCancel={() => { touchStart.current = null; }} className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#F7EDE8] p-4 sm:p-6" style={{ touchAction: "pan-y" }}>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={`${selectedProject.title}-${activeImage}`}
                      src={selectedProject.images[activeImage].src}
                      alt={selectedProject.images[activeImage].title}
                      initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25 }}
                      className="h-full w-full select-none object-contain" draggable={false}
                    />
                  </AnimatePresence>
                  {selectedProject.images.length > 1 && (
                    <>
                      <button type="button" onClick={previousImage} aria-label="Previous image" className="absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#681523] shadow-md sm:flex"><ArrowLeft size={20} /></button>
                      <button type="button" onClick={nextImage} aria-label="Next image" className="absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#681523] shadow-md sm:flex"><ArrowRight size={20} /></button>
                    </>
                  )}
                </div>
                <div className="shrink-0 border-t border-[#E8D2CF] px-4 py-3 text-center">
                  <p className="text-sm font-medium text-[#681523]">{selectedProject.images[activeImage].title}</p>
                  <p className="mt-1 text-xs text-[#A45D69]">{activeImage + 1} / {selectedProject.images.length}</p>
                </div>
                {selectedProject.images.length > 1 && (
                  <div className="flex shrink-0 justify-center gap-3 overflow-x-auto border-t border-[#E8D2CF] p-3">
                    {selectedProject.images.map((image, index) => (
                      <button key={image.title} type="button" onClick={() => setActiveImage(index)} aria-label={`View ${image.title}`} className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 sm:h-20 sm:w-20 ${activeImage === index ? "border-[#850F25]" : "border-transparent opacity-60"}`}>
                        <img src={image.src} alt={image.title} loading="lazy" className="h-full w-full object-contain" />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

