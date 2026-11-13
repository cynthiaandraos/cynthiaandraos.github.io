
import { useEffect, useState } from "react";
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

const COPYRIGHT = "© Cynthia Andraos";

export function FeaturedProject({
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

  const category =
    categories.find((item) => item.id === active) ??
    categories[0];

  const allowFullscreen =
    (category?.works.length ?? 0) > 1;

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (zoomed) {
          setZoomed(null);
        } else {
          setOpen(false);
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, zoomed]);

  const openProject = () => {
    setActive(categories[0]?.id ?? "");
    setZoomed(null);
    setOpen(true);
  };

  const closeProject = () => {
    setZoomed(null);
    setOpen(false);
  };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  const copyrightClass =
    "pointer-events-none absolute bottom-3 right-3 z-10 rounded-md bg-[#210C12]/45 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/90";

  return (
    <>
      {/* FEATURED PROJECT */}
      <section
        id={id}
        className="scroll-mt-28 bg-[#FFF7F2] px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal()} className="mb-10 text-center">
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

          {/* MAIN COVER */}
          <motion.button
            type="button"
            onClick={openProject}
            {...reveal(0.12)}
            className="group mx-auto block w-full max-w-4xl overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white text-left shadow-sm transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F7EDE8]">
              <img
                src={cover}
                alt={`${name} brand cover`}
                loading="lazy"
                draggable={false}
                className="absolute inset-0 h-full w-full select-none object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <span
                aria-hidden="true"
                className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#681523] shadow-md"
              >
                <ArrowUpRight size={22} />
              </span>

              <span
                data-portfolio-watermark="true"
                aria-hidden="true"
                className={copyrightClass}
              >
                {COPYRIGHT}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 bg-white p-6">
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

              <span className="text-xs font-semibold uppercase tracking-widest text-[#850F25]">
                View Project
              </span>
            </div>
          </motion.button>
        </div>
      </section>

      {/* PROJECT MODAL */}
      {typeof document !== "undefined" &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[10020] flex items-center justify-center bg-[#210C12]/90 p-0 sm:p-5"
            onMouseDown={(event) => {
              if (
                event.target ===
                event.currentTarget
              ) {
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
                type="button"
                onClick={closeProject}
                aria-label="Close project"
                className="absolute right-4 top-4 z-30 rounded-full bg-[#681523] p-3 text-white"
              >
                <X size={20} />
              </button>

              <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-12 pt-16 sm:px-10">
                <motion.header {...reveal()} className="mx-auto mb-10 max-w-4xl text-center">
                  <p
                    className="text-xs uppercase tracking-[0.3em]"
                    style={{
                      color: accentMuted,
                    }}
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
                    style={{
                      color: accentMuted,
                    }}
                  >
                    {subtitle}
                  </p>

                  {/* PROJECT COVER INSIDE MODAL */}
                  <div className="mx-auto mt-7 max-w-3xl">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={cover}
                        alt={`${name} cover`}
                        draggable={false}
                        className="mx-auto block h-auto max-h-[360px] max-w-full select-none object-contain"
                      />

                      <span
                        data-portfolio-watermark="true"
                        aria-hidden="true"
                        className={copyrightClass}
                      >
                        {COPYRIGHT}
                      </span>
                    </div>
                  </div>
                </motion.header>

                {/* CATEGORY BUTTONS */}
                <motion.nav
                  {...reveal(0.08)}
                  aria-label="Project categories"
                  className="mb-10 flex flex-wrap justify-center gap-2"
                >
                  {categories.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActive(item.id);
                        setZoomed(null);
                      }}
                      aria-pressed={
                        active === item.id
                      }
                      className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                        active === item.id
                          ? "border-[#35452B] bg-[#35452B] text-white"
                          : "border-[#C5C8AE] text-[#35452B] hover:bg-[#E7E9D7]"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </motion.nav>

                {/* CATEGORY CONTENT */}
                {category && (
                  <div className="mx-auto max-w-5xl">
                    <motion.div
                      key={`${active}-heading`}
                      {...reveal()}
                      className="mb-7 border-b border-[#D8DCC5] pb-5"
                    >
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

                      <p className="mt-2 text-sm text-[#667154]">
                        {category.description}
                      </p>
                    </motion.div>

                    <div
                      className={`grid gap-5 ${
                        category.works.length === 1
                          ? "grid-cols-1"
                          : "grid-cols-1 sm:grid-cols-2"
                      }`}
                    >
                      {category.works.map((work) => {
                        const imageContent = (
                          <div className="relative flex h-[260px] w-full items-center justify-center overflow-hidden bg-[#F7F5ED] p-4 sm:h-[340px] sm:p-6">
                            <img
                              src={work.src}
                              alt={work.title}
                              loading="lazy"
                              draggable={false}
                              className={`block h-full w-full select-none object-contain ${
                                allowFullscreen &&
                                !reduceMotion
                                  ? "transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                                  : ""
                              }`}
                            />

                            <span
                              data-portfolio-watermark="true"
                              aria-hidden="true"
                              className={copyrightClass}
                            >
                              {COPYRIGHT}
                            </span>
                          </div>
                        );

                        if (!allowFullscreen) {
                          return (
                            <motion.div
                              key={work.src}
                              {...reveal()}
                              className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-[#E3E3D4] bg-white shadow-sm"
                            >
                              {imageContent}
                            </motion.div>
                          );
                        }

                        return (
                          <motion.button
                            key={work.src}
                            {...reveal()}
                            type="button"
                            onClick={() =>
                              setZoomed(work)
                            }
                            aria-label={`View ${work.title}`}
                            className="group overflow-hidden rounded-xl border border-[#E3E3D4] bg-white text-left shadow-sm transition-shadow hover:shadow-md"
                          >
                            {imageContent}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CENTERED FULLSCREEN VIEWER */}
            {zoomed && (
              <div
                role="dialog"
                aria-modal="true"
                aria-label={zoomed.title}
                className="absolute inset-0 z-40 flex items-center justify-center bg-[#210C12]/95 p-4 sm:p-8"
                onClick={() =>
                  setZoomed(null)
                }
              >
                <button
                  type="button"
                  aria-label="Close image"
                  onClick={() =>
                    setZoomed(null)
                  }
                  className="absolute right-4 top-4 z-50 rounded-full bg-white p-3 text-[#681523] shadow-lg"
                >
                  <X size={20} />
                </button>

                <div
                  className="relative flex max-h-[85dvh] max-w-[90vw] items-center justify-center"
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                >
                  <img
                    src={zoomed.src}
                    alt={zoomed.title}
                    draggable={false}
                    className="block max-h-[85dvh] max-w-[90vw] select-none object-contain"
                  />

                  <span
                    data-portfolio-watermark="true"
                    aria-hidden="true"
                    className={copyrightClass}
                  >
                    {COPYRIGHT}
                  </span>
                </div>
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}
