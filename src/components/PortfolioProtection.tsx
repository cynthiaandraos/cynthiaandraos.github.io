
import { useEffect } from "react";

const COPYRIGHT = "© Cynthia Andraos";

const PORTFOLIO_SELECTORS = [
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

const OVERLAY_ATTRIBUTE =
  "data-portfolio-copyright-overlay";

function isProtectedImage(
  target: EventTarget | null
): target is HTMLImageElement {
  return (
    target instanceof HTMLImageElement &&
    Boolean(
      target.closest(PORTFOLIO_SELECTORS)
    )
  );
}

export function PortfolioProtection() {
  useEffect(() => {
    const overlays = new Map<
      HTMLImageElement,
      HTMLSpanElement
    >();

    let animationFrame = 0;

    const createOverlay = (
      image: HTMLImageElement
    ) => {
      if (overlays.has(image)) return;

      const overlay =
        document.createElement("span");

      overlay.setAttribute(
        OVERLAY_ATTRIBUTE,
        "true"
      );

      overlay.setAttribute(
        "aria-hidden",
        "true"
      );

      overlay.textContent = COPYRIGHT;

      Object.assign(overlay.style, {
        position: "fixed",
        zIndex: "10050",
        display: "none",
        padding: "5px 9px",
        borderRadius: "5px",
        background:
          "rgba(33, 12, 18, 0.48)",
        color:
          "rgba(255, 255, 255, 0.92)",
        fontSize: "10px",
        fontFamily:
          "Arial, sans-serif",
        fontWeight: "500",
        letterSpacing: "0.04em",
        lineHeight: "1.4",
        pointerEvents: "none",
        userSelect: "none",
        whiteSpace: "nowrap",
        boxSizing: "border-box",
      } as Partial<CSSStyleDeclaration>);

      document.body.appendChild(overlay);

      overlays.set(image, overlay);

      image.draggable = false;

      image.setAttribute(
        "draggable",
        "false"
      );

      image.style.userSelect = "none";

      image.style.webkitUserSelect = "none";

      image.style.webkitUserDrag = "none";
    };

    const scanImages = () => {
      document
        .querySelectorAll<HTMLImageElement>(
          "img"
        )
        .forEach((image) => {
          if (
            image.closest(
              PORTFOLIO_SELECTORS
            )
          ) {
            createOverlay(image);
          }
        });

      overlays.forEach(
        (overlay, image) => {
          if (
            !image.isConnected ||
            !image.closest(
              PORTFOLIO_SELECTORS
            )
          ) {
            overlay.remove();
            overlays.delete(image);
          }
        }
      );
    };

    const updateOverlays = () => {
      overlays.forEach(
        (overlay, image) => {
          const rect =
            image.getBoundingClientRect();

          const style =
            window.getComputedStyle(image);

          const hidden =
            rect.width < 30 ||
            rect.height < 30 ||
            style.display === "none" ||
            style.visibility === "hidden" ||
            style.opacity === "0";

          if (hidden) {
            overlay.style.display =
              "none";
            return;
          }

          // Position watermark relative to
          // the actual displayed image.
          const padding = 10;

          const overlayWidth = 125;
          const overlayHeight = 25;

          const right =
            rect.right - padding;

          const bottom =
            rect.bottom - padding;

          // Hide when the image is outside
          // the visible viewport.
          if (
            rect.bottom <= 0 ||
            rect.top >=
              window.innerHeight ||
            rect.right <= 0 ||
            rect.left >=
              window.innerWidth
          ) {
            overlay.style.display =
              "none";
            return;
          }

          const left = Math.max(
            rect.left + 5,
            right - overlayWidth
          );

          const top = Math.max(
            rect.top + 5,
            bottom - overlayHeight
          );

          overlay.style.left =
            `${left}px`;

          overlay.style.top =
            `${top}px`;

          overlay.style.display =
            "block";
        }
      );
    };

    const refresh = () => {
      scanImages();
      updateOverlays();
    };

    const scheduleRefresh = () => {
      cancelAnimationFrame(
        animationFrame
      );

      animationFrame =
        requestAnimationFrame(
          refresh
        );
    };

    const observer =
      new MutationObserver(
        scheduleRefresh
      );

    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
          "class",
          "style",
          "src",
          "hidden",
        ],
      }
    );

    const handleContextMenu = (
      event: MouseEvent
    ) => {
      if (
        isProtectedImage(
          event.target
        )
      ) {
        event.preventDefault();
      }
    };

    const handleDragStart = (
      event: DragEvent
    ) => {
      if (
        isProtectedImage(
          event.target
        )
      ) {
        event.preventDefault();
      }
    };

    const handleCopy = (
      event: ClipboardEvent
    ) => {
      const selection =
        window.getSelection();

      const node =
        selection?.anchorNode;

      const element =
        node instanceof Element
          ? node
          : node?.parentElement;

      if (
        element?.closest(
          PORTFOLIO_SELECTORS
        )
      ) {
        event.preventDefault();
      }
    };

    refresh();

    window.addEventListener(
      "resize",
      scheduleRefresh
    );

    // Capture scrolling inside project
    // modals and gallery containers.
    document.addEventListener(
      "scroll",
      scheduleRefresh,
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

    document.addEventListener(
      "copy",
      handleCopy,
      true
    );

    return () => {
      observer.disconnect();

      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        scheduleRefresh
      );

      document.removeEventListener(
        "scroll",
        scheduleRefresh,
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

      document.removeEventListener(
        "copy",
        handleCopy,
        true
      );

      overlays.forEach(
        (overlay) =>
          overlay.remove()
      );

      overlays.clear();
    };
  }, []);

  return null;
}
