import { useCallback, useEffect, useRef, useState } from "react";

import { closeThemeSelector } from "../utils/close-theme-selector.util";
import {
  DEFAULT_PLACEMENT,
  resolveThemeSelectorPlacement,
  type UseThemeSelectorInteractionProps,
  type UseThemeSelectorInteractionReturn,
  type ThemeSelectorPlacement,
} from "@presentation";

/**
 * @description Gestiona las interacciones y el ciclo de vida del selector.
 * @param props Configuracion de las interacciones.
 * @param props.onSelectTheme Callback que se ejecuta al seleccionar un tema.
 * @returns Estado, referencia y acciones del selector.
 * @author Steveen Cues
 * @version 1.2.0
 */
export const useThemeSelectorInteraction = ({
  onSelectTheme,
}: UseThemeSelectorInteractionProps): UseThemeSelectorInteractionReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [placement, setPlacement] = useState<ThemeSelectorPlacement | null>(
    null,
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback((): void => {
    closeThemeSelector(setIsOpen, setSearch);
    setPlacement(null);
  }, []);

  const handleToggle = useCallback((): void => {
    setIsOpen((previousState) => {
      const nextState = !previousState;

      if (nextState) {
        setSearch("");
        const container = containerRef.current;

        if (container) {
          setPlacement(
            resolveThemeSelectorPlacement({
              container: container.getBoundingClientRect(),
              viewport: {
                width: window.innerWidth,
                height: window.innerHeight,
              },
            }),
          );
        }
      } else {
        setPlacement(null);
      }

      return nextState;
    });
  }, []);

  const handleSearchChange = useCallback((value: string): void => {
    setSearch(value);
  }, []);

  const handleSelectTheme = useCallback(
    (themeName: string): void => {
      onSelectTheme(themeName);
      handleClose();
    },
    [handleClose, onSelectTheme],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleOutsidePointerDown = (event: PointerEvent): void => {
      const container = containerRef.current;
      const target = event.target;

      if (container && target instanceof Node && !container.contains(target)) {
        handleClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const updatePlacement = (): void => {
      const container = containerRef.current;

      if (container) {
        setPlacement(
          resolveThemeSelectorPlacement({
            container: container.getBoundingClientRect(),
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
          }),
        );
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", updatePlacement);
    window.addEventListener("scroll", updatePlacement, true);

    return (): void => {
      document.removeEventListener("pointerdown", handleOutsidePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", updatePlacement);
      window.removeEventListener("scroll", updatePlacement, true);
    };
  }, [handleClose, isOpen]);

  return {
    isOpen,
    search,
    containerRef,
    placement: placement ?? DEFAULT_PLACEMENT,
    handleToggle,
    handleClose,
    handleSearchChange,
    handleSelectTheme,
  };
};
