
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { createPortal } from "react-dom";



export type FeaturedWork = { src: string; title: string };
type Work = FeaturedWork;
export type FeaturedCategory = { id: string; title: string; description: string; works: Work[] };
type Category = FeaturedCategory;

export type FeaturedProjectProps = {
  number: number;
  id: string;
  name: string;
  description: string;
  cover: string;
  subtitle: string;
  categories: FeaturedCategory[];
  accentColor?: string;
  accentMuted?: string;
};

export function FeaturedProject({ id, name, description, cover, subtitle, categories, accentColor = "#35452B", accentMuted = "#7D8650" }: FeaturedProjectProps) {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const [zoomed, setZoomed] = useState<Work | null>(null);
  const category = categories.find((item) => item.id === active) ?? categories[0];

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (zoomed) setZoomed(null);
        else setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, zoomed]);

  return (
    <>
      <section id={id} className="scroll-mt-28 bg-[#FFF7F2] px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-5xl italic text-[#850F25] sm:text-7xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 700 }}>{name}</h2>
            <p className="mx-auto mt-5 max-w-xl text-[#704B50]">{description}</p>
          </div>
          <motion.button type="button" onClick={() => { setActive(categories[0]?.id ?? ""); setOpen(true); }}
            initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group mx-auto block w-full max-w-4xl overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white text-left shadow-sm transition-shadow hover:shadow-xl">
            <div className="relative aspect-[16/9] bg-[#F7EDE8] p-4 sm:p-8">
              <img src={cover} alt={`${name} brand cover`} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
              <span className="absolute right-5 top-5 rounded-full bg-white p-3 text-[#681523] shadow"><ArrowUpRight size={22} /></span>
            </div>
            <div className="flex items-center justify-between gap-4 p-6">
              <div><p className="text-xs uppercase tracking-widest text-[#A45D69]">Complete Brand Project</p><h3 className="mt-2 text-2xl text-[#681523]" style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}>Explore {name}</h3></div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#850F25]">View Project</span>
            </div>
          </motion.button>
        </div>
      </section>
      {typeof document !== "undefined" && open && createPortal(
        <div className="fixed inset-0 z-[10020] flex items-center justify-center bg-[#210C12]/90 p-0 sm:p-5" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div role="dialog" aria-modal="true" aria-label={`${name} project`} className="relative flex h-[100dvh] w-full max-w-6xl flex-col overflow-hidden bg-[#FFF9F0] sm:h-[94dvh] sm:rounded-2xl">
            <button type="button" onClick={() => { setZoomed(null); setOpen(false); }} aria-label="Close project" className="absolute right-4 top-4 z-30 rounded-full bg-[#681523] p-3 text-white"><X size={20} /></button>
            <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-12 pt-16 sm:px-10">
              <header className="mx-auto mb-10 max-w-4xl text-center">
                <p className="text-xs uppercase tracking-[0.3em]" style={{ color: accentMuted }}>Complete Brand Presentation</p>
                <h2 className="mt-3 text-5xl sm:text-7xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif", color: accentColor }}>{name}</h2>
                <p className="mt-3 text-sm" style={{ color: accentMuted }}>{subtitle}</p>
                <img src={cover} alt={`${name} cover`} className="mx-auto mt-7 max-h-[330px] w-full object-contain" />
              </header>
              <nav aria-label="Project categories" className="mb-10 flex flex-wrap justify-center gap-2">
                {categories.map((item) => <button key={item.id} type="button" onClick={() => setActive(item.id)} aria-pressed={active === item.id}
                  className={`rounded-full border px-4 py-2 text-xs transition-colors ${active === item.id ? "border-[#35452B] bg-[#35452B] text-white" : "border-[#C5C8AE] text-[#35452B] hover:bg-[#E7E9D7]"}`}>{item.title}</button>)}
              </nav>
              <div className="mx-auto max-w-5xl">
                <div className="mb-7 border-b border-[#D8DCC5] pb-5">
                  <h3 className="text-3xl sm:text-4xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif", color: accentColor }}>{category.title}</h3>
                  <p className="mt-2 text-sm text-[#667154]">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {category.works.map((work) => <button key={work.src} type="button" onClick={() => setZoomed(work)} className="overflow-hidden rounded-xl border border-[#E3E3D4] bg-white text-left shadow-sm hover:shadow-md">
                    <div className="flex h-[250px] items-center justify-center bg-[#F7F5ED] p-3 sm:h-[330px] sm:p-5"><img src={work.src} alt={work.title} loading="lazy" className="h-full w-full object-contain" /></div>
                    <p className="px-4 py-3 text-center text-sm text-[#35452B]">{work.title}</p>
                  </button>)}
                </div>
              </div>
            </div>
          </div>
          {zoomed && <div role="dialog" aria-modal="true" aria-label={zoomed.title} className="absolute inset-0 z-40 flex items-center justify-center bg-[#210C12]/95 p-5" onClick={() => setZoomed(null)}>
            <button type="button" aria-label="Close image" onClick={() => setZoomed(null)} className="absolute right-5 top-5 rounded-full bg-white p-3 text-[#681523]"><X size={20} /></button>
            <img src={zoomed.src} alt={zoomed.title} className="max-h-[88vh] max-w-full object-contain" />
          </div>}
        </div>, document.body)}
    </>
  );
}
