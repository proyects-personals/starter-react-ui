import { useEffect, type RefObject } from "react";

/**
 * @description Gestiona los eventos externos del selector de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const useLanguageSelectorEvents = (
  containerRef: RefObject<HTMLDivElement | null>,
  closeSelector: () => void,
): void => {
  useEffect((): (() => void) => {
    /**
     * @description Cierra el selector al hacer clic fuera.
     * @param event - Evento del documento.
     */
    function handleOutsideClick(event: MouseEvent): void {
      const target = event.target;
      const container = containerRef.current;

      if (
        target instanceof Node &&
        container !== null &&
        !container.contains(target)
      ) {
        closeSelector();
      }
    }

    /**
     * @description Cierra el selector con Escape.
     * @param event - Evento de teclado.
     */
    function handleEscape(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        closeSelector();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return (): void => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [containerRef, closeSelector]);
};
