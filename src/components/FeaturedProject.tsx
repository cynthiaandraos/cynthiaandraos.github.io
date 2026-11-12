
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { createPortal } from "react-dom";

export type FeaturedWork = {
  src: string;
  title: string;
};

export type FeaturedCategory = {
  id: string;
  title: string;
  description: string;
  works: FeaturedWork[];
};

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

export function FeaturedProject({
  number,
  id,
  name,
  description,
  cover,
  subtitle,
  categories,
  accentColor = "#35452B",
  accentMuted = "#7D8650",
}: FeaturedProjectProps) {
  const reduceMotion = useReducedMotion();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(
    categories[0]?.id ?? ""
  );
  const [zoomed, setZoomed] =
    useState<FeaturedWork | null>(null);

  const previousFocus = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const category =
    categories.find((item) => item.id === active) ??
    categories[0];

  const openProject = () => {
    previousFocus.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    setActive(categories[0]?.id ?? "");
    setZoomed(null);
    setOpen(true);
  };

  const closeProject = () => {
    setZoomed(null);
    setOpen(false);

    requestAnimationFrame(() => {
      previousFocus.current?.focus();
    });
  };

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();

        if (zoomed) {
          setZoomed(null);
        } else {
          closeProject();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, zoomed]);

  const numberLabel = String(number).padStart(2, "0");

  return (
    <>
      {/* FEATURED PROJECT ON HOMEPAGE */}
      <section
        id={id}
        className="scroll-mt-28 bg-[#FFF7F2] px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease: "easeOut",
            }}
            className="mb-10 text-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
              {numberLabel} / FEATURED PROJECT
            </p>

            <h2
              className="text-5xl italic text-[#850F25] sm:text-7xl"
              style={{
                fontFamily:
                  "'Bodoni Moda', Georgia, serif",
                fontWeight: 700,
              }}
            >
              {name}
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[#704B50]">
              {description}
            </p>
          </motion.div>

          <motion.button
            type="button"
            onClick={openProject}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease: "easeOut",
            }}
            className="group mx-auto block w-full max-w-4xl overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white text-left shadow-sm transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#850F25]"
          >
            <div className="relative aspect-[16/9] bg-[#F7EDE8] p-4 sm:p-8">
              <img
                src={cover}
                alt={`${name} brand cover`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <span className="absolute right-5 top-5 rounded-full bg-white p-3 text-[#681523] shadow">
                <ArrowUpRight size={22} />
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 p-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#A45D69]">
                  Complete Brand Project
                </p>

                <h3
                  className="mt-2 text-2xl text-[#681523]"
                  style={{
                    fontFamily:
                      "'Bodoni Moda', Georgia, serif",
                  }}
                >
                  Explore {name}
                </h3>
              </div>

              <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-[#850F25]">
                View Project
              </span>
            </div>
          </motion.button>
        </div>
      </section>

      {/* FULL-SCREEN BRAND PRESENTATION */}
      {typeof document !== "undefined" &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[10020] flex items-center justify-center bg-[#210C12]/90 p-0 sm:p-5"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeProject();
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${name} project`}
              className="relative flex h-[100dvh] w-full max-w-6xl flex-col overflow-hidden bg-[#FFF9F0] sm:h-[94dvh] sm:rounded-2xl"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={closeProject}
                aria-label="Close project"
                className="absolute right-4 top-4 z-30 rounded-full bg-[#681523] p-3 text-white"
              >
                <X size={20} />
              </button>

              <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-12 pt-16 sm:px-10">
                {/* BRAND HEADER */}
                <header className="mx-auto mb-10 max-w-4xl text-center">
                  <p
                    className="text-xs uppercase tracking-[0.3em]"
                    style={{ color: accentMuted }}
                  >
                    Complete Brand Presentation
                  </p>

                  <h2
                    className="mt-3 text-5xl sm:text-7xl"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                      color: accentColor,
                    }}
                  >
                    {name}
                  </h2>

                  <p
                    className="mt-3 text-sm"
                    style={{ color: accentMuted }}
                  >
                    {subtitle}
                  </p>

                  <img
                    src={cover}
                    alt={`${name} cover`}
                    className="mx-auto mt-7 max-h-[330px] w-full object-contain"
                  />
                </header>

                {/* CATEGORY TABS */}
                {categories.length > 0 && (
                  <nav
                    aria-label={`${name} project categories`}
                    className="mb-10 flex flex-wrap justify-center gap-2"
                  >
                    {categories.map((item) => {
                      const isActive = active === item.id;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActive(item.id)}
                          aria-pressed={isActive}
                          className="rounded-full border px-4 py-2 text-xs transition-colors"
                          style={{
                            borderColor: accentColor,
                            backgroundColor: isActive
                              ? accentColor
                              : "transparent",
                            color: isActive
                              ? "#FFFFFF"
                              : accentColor,
                          }}
                        >
                          {item.title}
                        </button>
                      );
                    })}
                  </nav>
                )}

                {/* ACTIVE CATEGORY GALLERY */}
                {category && (
                  <div className="mx-auto max-w-5xl">
                    <div className="mb-7 border-b border-[#D8DCC5] pb-5">
                      <h3
                        className="text-3xl sm:text-4xl"
                        style={{
                          fontFamily:
                            "'Bodoni Moda', Georgia, serif",
                          color: accentColor,
                        }}
                      >
                        {category.title}
                      </h3>

                      <p
                        className="mt-2 text-sm"
                        style={{ color: accentMuted }}
                      >
                        {category.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {category.works.map((work, index) => (
                        <button
                          key={`${work.src}-${index}`}
                          type="button"
                          onClick={() => setZoomed(work)}
                          aria-label={`Enlarge ${work.title}`}
                          className="overflow-hidden rounded-xl border border-[#E3E3D4] bg-white text-left shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#850F25]"
                        >
                          <div className="flex h-[250px] items-center justify-center bg-[#F7F5ED] p-3 sm:h-[330px] sm:p-5">
                            <img
                              src={work.src}
                              alt={work.title}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-contain"
                            />
                          </div>

                          <p
                            className="px-4 py-3 text-center text-sm"
                            style={{ color: accentColor }}
                          >
                            {work.title}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* IMAGE ZOOM */}
            {zoomed && (
              <div
                role="dialog"
                aria-modal="true"
                aria-label={zoomed.title}
                className="absolute inset-0 z-40 flex items-center justify-center bg-[#210C12]/95 p-5"
                onClick={() => setZoomed(null)}
              >
                <button
                  type="button"
                  aria-label="Close image"
                  onClick={() => setZoomed(null)}
                  className="absolute right-5 top-5 rounded-full bg-white p-3 text-[#681523]"
                >
                  <X size={20} />
                </button>

                <img
                  src={zoomed.src}
                  alt={zoomed.title}
                  className="max-h-[88vh] max-w-full object-contain"
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                />
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}

