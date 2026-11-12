
import { useEffect } from "react";

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
    // Remove old automatically generated watermark
    // elements if any remain in the page.
    const removeOldWatermarks = () => {
      document
        .querySelectorAll(
          '[data-auto-portfolio-watermark="true"]'
        )
        .forEach((element) => {
          element.remove();
        });
    };

    // Disable image dragging within portfolio sections.
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

    // Disable the browser's default right-click
    // menu on portfolio images and videos.
    const handleContextMenu = (
      event: MouseEvent
    ) => {
      const target = event.target;

      if (
        (target instanceof HTMLImageElement ||
          target instanceof HTMLVideoElement) &&
        target.closest(PROTECTED_SECTIONS)
      ) {
        event.preventDefault();
      }
    };

    // Remove any old watermark overlays.
    removeOldWatermarks();

    // Keep the protection limited to the media.
    document.addEventListener(
      "dragstart",
      handleDragStart,
      true
    );

    document.addEventListener(
      "contextmenu",
      handleContextMenu,
      true
    );

    return () => {
      document.removeEventListener(
        "dragstart",
        handleDragStart,
        true
      );

      document.removeEventListener(
        "contextmenu",
        handleContextMenu,
        true
      );
    };
  }, []);

  return null;
}
