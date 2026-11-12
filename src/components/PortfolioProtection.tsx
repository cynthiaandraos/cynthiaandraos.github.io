
import { useEffect } from "react";

const COPYRIGHT = "© Cynthia Andraos";

const PROTECTED_SECTIONS = [
  "#portfolio",
  "#olivia-project",
  "#five-beans-project",
  "#golden-mark-project",
  "#aurelle-project",
  "#little-bloom-project",
  "#house-of-beauty-project",
  "#my-fitness-project",
  "#social-media",
  "#business-cards",
  "#print-design",
  "#logo-design",
  "#reels",
  '[role="dialog"][aria-modal="true"]',
].join(", ");

export function PortfolioProtection() {
  useEffect(() => {
    const overlays = new Map<
      HTMLImageElement,
      HTMLSpanElement
    >();

    let frame = 0;

    const hasExistingWatermark = (
      image: HTMLImageElement
    ) => {
      const parent = image.parentElement;

      if (!parent) return false;

      return Boolean(
        parent.querySelector(
          '[data-portfolio-watermark="true"]'
        )
      );
    };

    const scan = () => {
      document
        .querySelectorAll<HTMLImageElement>("img")
        .forEach((image) => {
          if (!image.closest(PROTECTED_SECTIONS)) {
            return;
          }

          if (hasExistingWatermark(image)) {
            const existing = overlays.get(image);

            if (existing) {
              existing.remove();
              overlays.delete(image);
            }

            return;
          }

          if (overlays.has(image)) return;

          const label =
            document.createElement("span");

          label.textContent = COPYRIGHT;
          label.setAttribute(
            "aria-hidden",
            "true"
          );

          label.setAttribute(
            "data-auto-portfolio-watermark",
            "true"
          );

          Object.assign(label.style, {
            position: "fixed",
            zIndex: "10050",
            pointerEvents: "none",
            userSelect: "none",
            background: "rgba(33,12,18,0.48)",
            color: "white",
            padding: "5px 9px",
            borderRadius: "5px",
            fontSize: "10px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "500",
            whiteSpace: "nowrap",
            display: "none",
          });

          document.body.appendChild(label);
          overlays.set(image, label);

          image.draggable = false;
        });
    };

    const update = () => {
      overlays.forEach((label, image) => {
        if (
          !image.isConnected ||
          !image.closest(PROTECTED_SECTIONS)
        ) {
          label.remove();
          overlays.delete(image);
          return;
        }

        if (hasExistingWatermark(image)) {
          label.remove();
          overlays.delete(image);
          return;
        }

        const rect =
          image.getBoundingClientRect();

        if (
          rect.width < 30 ||
          rect.height < 30 ||
          rect.bottom <= 0 ||
          rect.top >= window.innerHeight ||
          rect.right <= 0 ||
          rect.left >= window.innerWidth
        ) {
          label.style.display = "none";
          return;
        }

        label.style.display = "block";

        label.style.left = `${Math.max(
          4,
          rect.right - label.offsetWidth - 10
        )}px`;

        label.style.top = `${Math.max(
          4,
          rect.bottom - label.offsetHeight - 10
        )}px`;
      });
    };

    const refresh = () => {
      scan();
      update();
    };

    const schedule = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(refresh);
    };

    const observer = new MutationObserver(
      (mutations) => {
        const relevant = mutations.some(
          (mutation) => {
            const target =
              mutation.target instanceof Element
                ? mutation.target
                : mutation.target.parentElement;

            return !target?.closest(
              '[data-auto-portfolio-watermark="true"]'
            );
          }
        );

        if (relevant) schedule();
      }
    );

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [
        "src",
        "class",
        "hidden",
      ],
    });

    const handleContextMenu = (
      event: MouseEvent
    ) => {
      const target = event.target;

      if (
        target instanceof HTMLImageElement &&
        target.closest(PROTECTED_SECTIONS)
      ) {
        event.preventDefault();
      }
    };

    const handleDragStart = (
      event: DragEvent
    ) => {
      const target = event.target;

      if (
        target instanceof HTMLImageElement &&
        target.closest(PROTECTED_SECTIONS)
      ) {
        event.preventDefault();
      }
    };

    refresh();

    window.addEventListener("resize", schedule);

    document.addEventListener(
      "scroll",
      schedule,
      true
    );

    document.addEventListener(
      "contextmenu",
      handleContextMenu,
      true
    );

    document.addEventListener(
      "dragstart",
      handleDragStart,
      true
    );

    return () => {
      observer.disconnect();

      cancelAnimationFrame(frame);

      window.removeEventListener(
        "resize",
        schedule
      );

      document.removeEventListener(
        "scroll",
        schedule,
        true
      );

      document.removeEventListener(
        "contextmenu",
        handleContextMenu,
        true
      );

      document.removeEventListener(
        "dragstart",
        handleDragStart,
        true
      );

      overlays.forEach((label) =>
        label.remove()
      );

      overlays.clear();
    };
  }, []);

  return null;
}
