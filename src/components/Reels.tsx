
import { useState } from "react";
import { motion } from "motion/react";
import { Film, Play, X } from "lucide-react";

type Reel = {
  id: string;
  title: string;
  category: string;
  videoSrc?: string;
  landscape?: boolean;
};

const reels: Reel[] = [];

export function Reels() {
  const [selected, setSelected] = useState<Reel | null>(null);

  return (
    <section
      id="reels"
      className="scroll-mt-24 bg-[#FFF7F2] px-4 py-20 text-[#2B1717]"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#842E3D]">
            Creative Portfolio
          </p>

          <h2
            className="text-4xl sm:text-5xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
            }}
          >
            Reels <span className="italic text-[#842E3D]">& Motion Design</span>
          </h2>

          <p className="mt-5 text-[#765A59]">
            Creative storytelling through video, motion, and social media.
          </p>
        </motion.div>

        {reels.length === 0 ? (
          <div className="rounded-2xl border border-[#EAD9D5] p-12 text-center">
            <Film className="mx-auto mb-4 text-[#842E3D]" size={36} />
            <p className="text-[#765A59]">
              Video projects coming soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {reels.map((reel) => (
              <button
                key={reel.id}
                type="button"
                onClick={() => setSelected(reel)}
                className={
                  "group relative overflow-hidden rounded-2xl bg-[#EAD9D5] " +
                  (reel.landscape ? "aspect-video" : "aspect-[9/16]")
                }
              >
                <div className="flex h-full items-center justify-center">
                  <Play size={34} className="text-[#681523]" />
                </div>
                <div className="absolute bottom-0 w-full bg-black/60 p-3 text-left text-white">
                  <p className="text-sm font-medium">{reel.title}</p>
                  <p className="text-xs opacity-80">{reel.category}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[11000] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 text-white"
            aria-label="Close video"
          >
            <X size={30} />
          </button>

          <video
            key={selected.id}
            src={selected.videoSrc}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] max-w-full object-contain"
          />
        </div>
      )}
    </section>
  );
}

