
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

function isProtectedImage(
  target: EventTarget | null
): boolean {
  return (
    target instanceof HTMLImageElement &&
    Boolean(target.closest(PROTECTED_SECTIONS))
  );
}

export function PortfolioProtection() {
  useEffect(() => {
    const handleContextMenu = (
      event: MouseEvent
    ) => {
      if (isProtectedImage(event.target)) {
        event.preventDefault();
      }
    };

    const handleDragStart = (
      event: DragEvent
    ) => {
      if (isProtectedImage(event.target)) {
        event.preventDefault();
      }
    };

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
    };
  }, []);

  return null;
}
