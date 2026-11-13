
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

  // MAGNIFYING LENS ACROSS THE ENTIRE WEBSITE
  useEffect(() => {
    if (reduceMotion) return;

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

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
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

  // SCROLL REVEAL ANIMATIONS
  useEffect(() => {
    if (
      reduceMotion ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".portfolio-page section:not(#home)"
      )
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "portfolio-visible"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight) {
        section.classList.add(
          "portfolio-visible"
        );
      } else {
        section.classList.add(
          "portfolio-reveal"
        );

        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();

      sections.forEach((section) => {
        section.classList.remove(
          "portfolio-reveal",
          "portfolio-visible"
        );
      });
    };
  }, [reduceMotion]);

  return (
    <>
      <style>{`
        .portfolio-page {
          overflow-x: clip;
        }

        .portfolio-reveal {
          opacity: 0;
          transition: opacity 850ms ease;
        }

        .portfolio-reveal.portfolio-visible {
          opacity: 1;
        }

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
          .portfolio-reveal {
            opacity: 1 !important;
            transition: none !important;
          }

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

      {/* MAGNIFYING GLASS - ENTIRE PORTFOLIO */}
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
