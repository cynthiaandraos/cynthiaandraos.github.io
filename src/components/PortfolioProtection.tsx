
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

function isPortfolioImage(
  target: EventTarget | null
): target is HTMLImageElement {
  return (
    target instanceof HTMLImageElement &&
    Boolean(target.closest(PORTFOLIO_SELECTORS))
  );
}

export function PortfolioProtection() {
  useEffect(() => {
    const protectedImages = new WeakSet<
      HTMLImageElement
    >();

    const protectImage = (
      image: HTMLImageElement
    ) => {
      if (!image.closest(PORTFOLIO_SELECTORS)) {
        return;
      }

      if (protectedImages.has(image)) {
        return;
      }

      protectedImages.add(image);

      image.draggable = false;
      image.setAttribute("draggable", "false");

      image.style.userSelect = "none";
      image.style.webkitUserSelect = "none";
      image.style.webkitUserDrag = "none";

      const parent = image.parentElement;

      if (!parent) return;

      // Do not duplicate watermarks.
      if (
        parent.querySelector(
          ':scope > [data-portfolio-watermark]'
        )
      ) {
        return;
      }

      // A wrapper allows the watermark to sit over
      // the image without changing the image source.
      const wrapper = document.createElement("span");

      wrapper.setAttribute(
        "data-protected-image",
        "true"
      );

      const computed = window.getComputedStyle(image);

      const isAbsolute =
        computed.position === "absolute";

      if (isAbsolute) {
        // For cover images positioned absolutely,
        // use their existing image container.
        if (
          window.getComputedStyle(parent).position ===
          "static"
        ) {
          parent.style.position = "relative";
        }

        addWatermark(parent);
        return;
      }

      wrapper.style.position = "relative";
      wrapper.style.display =
        computed.display === "block"
          ? "block"
          : "inline-block";

      wrapper.style.width =
        computed.width === "auto"
          ? "auto"
          : "100%";

      wrapper.style.maxWidth = "100%";
      wrapper.style.verticalAlign = "middle";

      parent.insertBefore(wrapper, image);
      wrapper.appendChild(image);

      addWatermark(wrapper);
    };

    const addWatermark = (
      container: HTMLElement
    ) => {
      if (
        container.querySelector(
          ':scope > [data-portfolio-watermark]'
        )
      ) {
        return;
      }

      const mark = document.createElement("span");

      mark.setAttribute(
        "data-portfolio-watermark",
        "true"
      );

      mark.setAttribute("aria-hidden", "true");

      mark.textContent = COPYRIGHT;

      Object.assign(mark.style, {
        position: "absolute",
        bottom: "12px",
        right: "12px",
        zIndex: "15",
        padding: "5px 9px",
        borderRadius: "5px",
        background: "rgba(33, 12, 18, 0.42)",
        color: "rgba(255, 255, 255, 0.88)",
        fontSize: "10px",
        fontWeight: "500",
        letterSpacing: "0.06em",
        lineHeight: "1.5",
        pointerEvents: "none",
        userSelect: "none",
        whiteSpace: "nowrap",
        maxWidth: "85%",
      } as Partial<CSSStyleDeclaration>);

      container.appendChild(mark);
    };

    const scan = () => {
      document
        .querySelectorAll<HTMLImageElement>(
          `${PORTFOLIO_SELECTORS.split(", ")
            .map((selector) => `${selector} img`)
            .join(", ")}`
        )
        .forEach(protectImage);
    };

    const handleContextMenu = (
      event: MouseEvent
    ) => {
      if (isPortfolioImage(event.target)) {
        event.preventDefault();
      }
    };

    const handleDragStart = (
      event: DragEvent
    ) => {
      if (isPortfolioImage(event.target)) {
        event.preventDefault();
      }
    };

    const handleCopy = (
      event: ClipboardEvent
    ) => {
      const selection = window.getSelection();

      const node = selection?.anchorNode;

      const element =
        node instanceof Element
          ? node
          : node?.parentElement;

      if (
        element?.closest(PORTFOLIO_SELECTORS)
      ) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      const key = event.key.toLowerCase();

      const modifier =
        event.ctrlKey || event.metaKey;

      if (!modifier) return;

      const isCopyShortcut =
        key === "c" || key === "s";

      if (!isCopyShortcut) return;

      const active = document.activeElement;

      // Never interfere with form inputs.
      if (
        active instanceof HTMLInputElement ||
        active instanceof HTMLTextAreaElement ||
        active instanceof HTMLSelectElement ||
        active?.getAttribute("contenteditable") ===
          "true"
      ) {
        return;
      }

      const selection = window.getSelection();

      const selectedElement =
        selection?.anchorNode instanceof Element
          ? selection.anchorNode
          : selection?.anchorNode?.parentElement;

      if (
        selectedElement?.closest(
          PORTFOLIO_SELECTORS
        ) ||
        active?.closest(PORTFOLIO_SELECTORS)
      ) {
        event.preventDefault();
      }
    };

    scan();

    const observer = new MutationObserver(() => {
      scan();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

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

    document.addEventListener(
      "keydown",
      handleKeyDown,
      true
    );

    return () => {
      observer.disconnect();

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

      document.removeEventListener(
        "keydown",
        handleKeyDown,
        true
      );
    };
  }, []);

  return null;
}

