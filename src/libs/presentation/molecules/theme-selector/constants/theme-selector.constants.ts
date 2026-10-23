import { MAX_PANEL_HEIGHT, type ThemeSelectorPlacement } from "@presentation";

/**
 * @description Define el umbral minimo de temas para mostrar el campo de busqueda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SEARCH_THRESHOLD = 5;

/**
 * @description Define el tema seleccionado por fefauld
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DEFAULT_PLACEMENT: ThemeSelectorPlacement = {
  vertical: "bottom",
  horizontal: "right",
  maxHeight: MAX_PANEL_HEIGHT,
};
