import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

import { closeThemeSelector } from "../utils/close-theme-selector.util";

/**
 * @description Define las propiedades del hook de interaccion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface UseThemeSelectorInteractionProps {
  readonly onSelectTheme: (themeName: string) => void;
}

/**
 * @description Define el estado y las acciones del selector de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface UseThemeSelectorInteractionReturn {
  readonly isOpen: boolean;
  readonly search: string;
  readonly containerRef: RefObject<HTMLDivElement | null>;
  readonly handleToggle: () => void;
  readonly handleSearchChange: (value: string) => void;
  readonly handleSelectTheme: (themeName: string) => void;
}

/**
 * @description Gestiona las interacciones y el ciclo de vida del selector.
 * @param props Configuracion de las interacciones.
 * @param props.onSelectTheme Callback que se ejecuta al seleccionar un tema.
 * @returns Estado, referencia y acciones del selector.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const useThemeSelectorInteraction = ({
  onSelectTheme,
}: UseThemeSelectorInteractionProps): UseThemeSelectorInteractionReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback((): void => {
    closeThemeSelector(setIsOpen, setSearch);
  }, []);

  const handleToggle = useCallback((): void => {
    setIsOpen((previousState) => !previousState);
    setSearch("");
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

    document.addEventListener("pointerdown", handleOutsidePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return (): void => {
      document.removeEventListener("pointerdown", handleOutsidePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, isOpen]);

  return {
    isOpen,
    search,
    containerRef,
    handleToggle,
    handleSearchChange,
    handleSelectTheme,
  };
};
