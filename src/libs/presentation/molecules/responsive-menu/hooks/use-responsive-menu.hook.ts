import { useCallback, useMemo, useState } from "react";
import { createResponsiveMenuPanelId } from "../constants/responsive-menu.constants";
import type { UseResponsiveMenuResult } from "../types/responsive-menu.types";

/**
 * @description Administra el estado abierto/cerrado del menu responsive
 * y el identificador del panel asociado.
 * @returns Estado y acciones del menu.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useResponsiveMenu(): UseResponsiveMenuResult {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const panelId = useMemo((): string => createResponsiveMenuPanelId(), []);

  const toggleMenu = useCallback((): void => {
    setIsOpen((previousState: boolean): boolean => !previousState);
  }, []);

  const closeMenu = useCallback((): void => {
    setIsOpen(false);
  }, []);

  return { isOpen, panelId, toggleMenu, closeMenu };
}
