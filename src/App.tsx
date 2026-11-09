
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Film, Play, Volume2, VolumeX, X } from "lucide-react";

/**
 * Add your MP4 files to public/reels/ and set videoSrc below.
 * Example: videoSrc: "/reels/manymoda.mp4"
 * Until then, cards are visible but cannot play (no broken video player).
 */
type Reel = {
  id: string;
  title: string;
  category: string;
  videoSrc?: string;
  posterSrc?: string;
};

const reels: Reel[] = [
  { id: "manymoda", title: "Manymoda", category: "Fashion Reel" },
  { id: "my-fitness", title: "MY Fitness by Myriam", category: "Fitness Reel" },
  { id: "house-of-beauty", title: "House of Beauty", category: "Beauty Reel" },
  { id: "snack-el-khal", title: "Snack الخال", category: "Food Reel" },
  { id: "rc-designer", title: "RC Designer", category: "Motion & Creative Reel" },
  { id: "o-market", title: "O-Market & O-Meat", category: "Brand Campaign" },
  { id: "la-playya", title: "La Playya", category: "Lifestyle Reel" },
  { id: "personal", title: "Personal Creative Work", category: "Video Editing" },
];

export function Reels() {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<Reel | null>(null);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "Tab") {
        const dialog = document.getElementById("reels-dialog");
        const focusable = dialog?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), video[controls], a[href]'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      videoRef.current?.pause();
      triggerRef.current?.focus();
    };
  }, [selected]);

  const openReel = (reel: Reel, trigger: HTMLButtonElement) => {
    if (!reel.videoSrc) return;
    triggerRef.current = trigger;
    setMuted(false);
    setSelected(reel);
  };

  return (
    <section id="reels" className="scroll-mt-24 bg-[#FFF7F2] px-4 py-16 text-[#2B1717] sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mb-10 text-center sm:mb-14"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#842E3D]">
            Creative Portfolio
          </p>
          <h2
            className="text-4xl font-normal leading-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}
          >
            Reels <span className="italic text-[#842E3D]">& Motion Design</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#765A59] sm:text-base">
            Creative storytelling through video, motion, and social media content.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : Math.min(index % 4, 3) * 0.08 }}
              className="min-w-0"
            >
              <button
                type="button"
                disabled={!reel.videoSrc}
                onClick={(event) => openReel(reel, event.currentTarget)}
                aria-label={reel.videoSrc ? `Play ${reel.title} reel` : `${reel.title} reel coming soon`}
                className="group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#EAD9D5] via-[#D7B7B6] to-[#9B5964] text-[#681523] shadow-sm transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#842E3D] disabled:cursor-default"
              >
                {reel.posterSrc ? (
                  <img src={reel.posterSrc} alt="" loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-3 text-center">
                    <Film className="h-9 w-9 opacity-60 sm:h-11 sm:w-11" strokeWidth={1.2} />
                    <span className="text-xs font-medium sm:text-sm">{reel.title}</span>
                  </span>
                )}
                {reel.videoSrc ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#681523] shadow-lg sm:h-14 sm:w-14">
                      <Play size={22} fill="currentColor" className="ml-0.5" />
                    </span>
                  </span>
                ) : (
                  <span className="absolute bottom-3 left-3 right-3 rounded-full bg-white/85 px-3 py-2 text-center text-[11px] font-medium sm:text-xs">
                    Video coming soon
                  </span>
                )}
              </button>
              <h3 className="mt-3 truncate text-sm font-medium sm:text-base">{reel.title}</h3>
              <p className="mt-1 text-xs text-[#765A59] sm:text-sm">{reel.category}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selected && selected.videoSrc && (
              <motion.div
                key={selected.id}
                className="fixed inset-0 z-[11000] flex items-center justify-center bg-black/95 px-3 py-4 sm:px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) setSelected(null);
                }}
              >
                <div
                  id="reels-dialog"
                  role="dialog"
                  aria-modal="true"
                  aria-label={`${selected.title} video`}
                  className="relative flex h-full max-h-[100dvh] w-full max-w-[480px] flex-col items-center justify-center py-12"
                >
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={() => setSelected(null)}
                    aria-label="Close video"
                    className="absolute right-0 top-1 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <X size={23} />
                  </button>
                  <video
                    ref={videoRef}
                    key={selected.videoSrc}
                    src={selected.videoSrc}
                    poster={selected.posterSrc}
                    controls
                    playsInline
                    autoPlay
                    muted={muted}
                    preload="metadata"
                    className="min-h-0 max-h-full w-full rounded-xl bg-black object-contain"
                  >
                    Your browser does not support video playback.
                  </video>
                  <div className="mt-3 flex w-full items-center justify-between gap-3 text-white">
                    <p className="min-w-0 truncate text-sm">{selected.title}</p>
                    <button
                      type="button"
                      onClick={() => setMuted((value) => !value)}
                      className="flex h-11 shrink-0 items-center gap-2 rounded-full bg-white/15 px-4 text-sm hover:bg-white/25"
                      aria-label={muted ? "Unmute video" : "Mute video"}
                    >
                      {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                      {muted ? "Unmute" : "Mute"}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
