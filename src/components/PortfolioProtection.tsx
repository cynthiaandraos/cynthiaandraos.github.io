
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
    const style = document.createElement("style");

    style.setAttribute(
      "data-portfolio-protection",
      "true"
    );

    style.textContent = `
      ${PROTECTED_SECTIONS} img,
      ${PROTECTED_SECTIONS} video {
        -webkit-user-select: none !important;
        user-select: none !important;
        -webkit-user-drag: none !important;
        -webkit-touch-callout: none !important;
      }
    `;

    document.head.appendChild(style);

    const isProtectedMedia = (
      target: EventTarget | null
    ) => {
      return (
        target instanceof HTMLImageElement ||
        target instanceof HTMLVideoElement
      ) &&
        Boolean(target.closest(PROTECTED_SECTIONS));
    };

    const preventMediaAction = (
      event: Event
    ) => {
      if (isProtectedMedia(event.target)) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      const target = event.target;

      const isEditing =
        target instanceof HTMLElement &&
        Boolean(
          target.closest(
            "input, textarea, [contenteditable]"
          )
        );

      if (isEditing) return;

      // Discourage common browser save actions.
      // This does not block screenshots or
      // browser developer tools.
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "s"
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener(
      "contextmenu",
      preventMediaAction,
      true
    );

    document.addEventListener(
      "dragstart",
      preventMediaAction,
      true
    );

    document.addEventListener(
      "keydown",
      handleKeyDown,
      true
    );

    return () => {
      style.remove();

      document.removeEventListener(
        "contextmenu",
        preventMediaAction,
        true
      );

      document.removeEventListener(
        "dragstart",
        preventMediaAction,
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
