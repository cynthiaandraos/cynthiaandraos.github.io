
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

  // Prevent background scrolling while the project is open.
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
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 28 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.12,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  const copyrightClass =
    "pointer-events-none absolute bottom-3 right-3 z-10 rounded-md bg-[#210C12]/45 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/90";

  return (
    <>
      {/* FEATURED PROJECT */}
      <section
        id={id}
        className="scroll-mt-28 bg-[#FFF7F2] px-4 py-12 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <motion.div
            {...reveal()}
            className="mb-8 text-center sm:mb-10"
          >
            <h2
              className="break-words text-[clamp(2.5rem,10vw,3rem)] leading-tight italic text-[#850F25] sm:text-7xl"
              style={{
                fontFamily:
                  "'Bodoni Moda', Georgia, serif",
                fontWeight: 700,
              }}
            >
              {name}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#704B50] sm:mt-5 sm:text-base sm:leading-normal">
              {description}
            </p>
          </motion.div>

          {/* MAIN PROJECT COVER */}
          <motion.button
            type="button"
            onClick={openProject}
            {...reveal(0.12)}
            whileHover={reduceMotion ? undefined : { y: -7 }}
            whileTap={reduceMotion ? undefined : { scale: 0.99 }}
            aria-label={`Explore ${name} project`}
            className="group mx-auto block w-full max-w-4xl overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white text-left shadow-sm transition-shadow duration-300 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#850F25]"
          >
            {/* IMAGE: zoomed cover, clipped to the original card size */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7EDE8] sm:aspect-[16/9]">
              <img
                src={cover}
                alt={`${name} brand cover`}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="absolute inset-0 h-full w-full select-none object-cover object-center scale-[1.12] transition-transform duration-700 ease-out group-hover:scale-[1.2] motion-reduce:transition-none"
              />

              {/* OPEN PROJECT ICON */}
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#681523] shadow-md sm:right-5 sm:top-5 sm:h-12 sm:w-12"
              >
                <ArrowUpRight
                  size={20}
                  className="sm:h-[22px] sm:w-[22px]"
                />
              </span>

              {/* COPYRIGHT WATERMARK */}
              <span
                data-portfolio-watermark="true"
                aria-hidden="true"
                className={copyrightClass}
              >
                {COPYRIGHT}
              </span>
            </div>

            {/* PROJECT INFORMATION */}
            <div className="flex items-center justify-between gap-3 bg-white p-4 sm:gap-4 sm:p-6">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-widest text-[#A45D69] sm:text-xs">
                  Complete Brand Project
                </p>

                <h3
                  className="mt-2 break-words text-xl leading-snug text-[#681523] sm:text-2xl"
                  style={{
                    fontFamily:
                      "'Bodoni Moda', Georgia, serif",
                  }}
                >
                  Explore {name}
                </h3>
              </div>

              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-[#850F25] sm:text-xs sm:tracking-widest">
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
                event.target === event.currentTarget
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
              {/* CLOSE PROJECT BUTTON */}
              <button
                type="button"
                onClick={closeProject}
                aria-label="Close project"
                className="absolute right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-[#681523] text-white shadow-md transition-transform active:scale-95 sm:top-4 sm:h-11 sm:w-11"
                style={{
                  top: "calc(16px + env(safe-area-inset-top, 0px))",
                }}
              >
                <X size={20} />
              </button>

              {/* SCROLLABLE PROJECT CONTENT */}
              <div
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-12 pt-16 sm:px-10"
                style={{
                  paddingTop:
                    "calc(64px + env(safe-area-inset-top, 0px))",
                  paddingBottom:
                    "calc(48px + env(safe-area-inset-bottom, 0px))",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {/* MODAL HEADER */}
                <motion.header
                  {...reveal()}
                  className="mx-auto mb-7 max-w-4xl text-center sm:mb-10"
                >
                  <p
                    className="text-[10px] uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.3em]"
                    style={{
                      color: accentMuted,
                    }}
                  >
                    Complete Brand Presentation
                  </p>

                  <h2
                    className="mt-3 break-words text-[clamp(2.3rem,10vw,3rem)] leading-tight sm:text-7xl"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                      color: accentColor,
                    }}
                  >
                    {name}
                  </h2>

                  <p
                    className="mt-3 text-sm leading-6"
                    style={{
                      color: accentMuted,
                    }}
                  >
                    {subtitle}
                  </p>

                  {/* PROJECT COVER INSIDE MODAL */}
                  <div className="mx-auto mt-5 max-w-3xl sm:mt-7">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={cover}
                        alt={`${name} cover`}
                        draggable={false}
                        decoding="async"
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
                  className="mb-7 flex flex-wrap justify-center gap-2 sm:mb-10"
                >
                  {categories.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActive(item.id);
                        setZoomed(null);
                      }}
                      aria-pressed={active === item.id}
                      className={`min-h-11 rounded-full border px-4 py-2 text-xs transition-colors sm:min-h-0 ${
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

                    {/* CATEGORY HEADING */}
                    <motion.div
                      key={`${active}-heading`}
                      {...reveal()}
                      className="mb-5 border-b border-[#D8DCC5] pb-4 sm:mb-7 sm:pb-5"
                    >
                      <h3
                        className="break-words text-2xl leading-snug sm:text-4xl"
                        style={{
                          fontFamily:
                            "'Bodoni Moda', Georgia, serif",
                          color: accentColor,
                        }}
                      >
                        {category.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#667154]">
                        {category.description}
                      </p>
                    </motion.div>

                    {/* VERTICAL GALLERY ON MOBILE */}
                    <div
                      className={`grid grid-cols-1 gap-4 sm:gap-5 ${
                        category.works.length === 1
                          ? ""
                          : "sm:grid-cols-2"
                      }`}
                    >
                      {category.works.map((work) => {
                        const imageContent = (
                          <div className="relative flex min-h-[220px] w-full items-center justify-center overflow-hidden bg-[#F7F5ED] p-3 sm:h-[340px] sm:min-h-0 sm:p-6">

                            {/* MOBILE: SHOW COMPLETE IMAGE */}
                            <img
                              src={work.src}
                              alt={work.title}
                              loading="lazy"
                              decoding="async"
                              draggable={false}
                              className={`block h-auto max-h-[min(75svh,520px)] w-full select-none object-contain sm:h-full sm:max-h-none ${
                                allowFullscreen &&
                                !reduceMotion
                                  ? "transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                                  : ""
                              }`}
                            />

                            {/* COPYRIGHT WATERMARK */}
                            <span
                              data-portfolio-watermark="true"
                              aria-hidden="true"
                              className={copyrightClass}
                            >
                              {COPYRIGHT}
                            </span>
                          </div>
                        );

                        // One image: display without fullscreen.
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

                        // Multiple images: tap to enlarge.
                        return (
                          <motion.button
                            key={work.src}
                            {...reveal()}
                            type="button"
                            onClick={() =>
                              setZoomed(work)
                            }
                            aria-label={`View ${work.title}`}
                            whileTap={
                              reduceMotion
                                ? undefined
                                : { scale: 0.985 }
                            }
                            className="group w-full overflow-hidden rounded-xl border border-[#E3E3D4] bg-white text-left shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#850F25]"
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
                className="absolute inset-0 z-40 flex items-center justify-center bg-[#210C12]/95 p-3 sm:p-8"
                onClick={() =>
                  setZoomed(null)
                }
              >
                {/* CLOSE FULLSCREEN IMAGE */}
                <button
                  type="button"
                  aria-label="Close image"
                  onClick={() =>
                    setZoomed(null)
                  }
                  className="absolute right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#681523] shadow-lg transition-transform active:scale-95 sm:top-4"
                  style={{
                    top: "calc(16px + env(safe-area-inset-top, 0px))",
                  }}
                >
                  <X size={20} />
                </button>

                {/* FULLSCREEN IMAGE */}
                <div
                  className="relative flex max-h-[85dvh] max-w-[94vw] items-center justify-center sm:max-w-[90vw]"
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                >
                  <img
                    src={zoomed.src}
                    alt={zoomed.title}
                    draggable={false}
                    className="block max-h-[85dvh] max-w-[94vw] select-none object-contain sm:max-w-[90vw]"
                  />

                  {/* COPYRIGHT WATERMARK */}
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
