
import { useEffect, useState } from "react";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

export function PortfolioEffects() {
  const reduceMotion = useReducedMotion();

  const [showLens, setShowLens] = useState(false);

  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 28,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 28,
  });

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // MOUSE-FOLLOWING BURGUNDY LENS
  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const handlePointerMove = (event: PointerEvent) => {
      if (!canHover.matches) {
        setShowLens(false);
        return;
      }

      mouseX.set(event.clientX - 110);
      mouseY.set(event.clientY - 110);

      setShowLens(true);
    };

    const handlePointerLeave = () => {
      setShowLens(false);
    };

    const handleWindowBlur = () => {
      setShowLens(false);
    };

    const handlePointerCancel = () => {
      setShowLens(false);
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    window.addEventListener(
      "pointercancel",
      handlePointerCancel
    );

    document.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    window.addEventListener(
      "blur",
      handleWindowBlur
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointercancel",
        handlePointerCancel
      );

      document.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      window.removeEventListener(
        "blur",
        handleWindowBlur
      );
    };
  }, [reduceMotion, mouseX, mouseY]);

  return (
    <>
      <style>{`
        .portfolio-page {
          overflow-x: clip;
        }

        /* Preserve the existing image hover styling */
        .portfolio-page img {
          transition:
            filter 450ms ease,
            box-shadow 450ms ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .portfolio-page img:hover {
            filter: saturate(1.07);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-page img {
            transition: none !important;
          }
        }
      `}</style>

      {/* VERTICAL BURGUNDY SCROLL PROGRESS */}
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 right-0 top-0 z-[9998] w-[3px] origin-top bg-[#850F25] sm:w-[4px]"
          style={{
            scaleY: smoothProgress,
          }}
        />
      )}

      {/* MOUSE-FOLLOWING BURGUNDY LENS */}
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[220px] w-[220px] rounded-full border border-[#850F25]/30 shadow-[0_0_55px_rgba(133,15,37,0.12)] md:block"
          style={{
            x: smoothX,
            y: smoothY,
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.65), rgba(240,201,203,0.38) 45%, rgba(133,15,37,0.14) 80%, rgba(133,15,37,0.06))",
            backdropFilter: "blur(1.5px)",
          }}
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: showLens ? 1 : 0,
            scale: showLens ? 1 : 0.85,
          }}
          transition={{
            opacity: { duration: 0.25 },
            scale: { duration: 0.35 },
          }}
        />
      )}
    </>
  );
}
