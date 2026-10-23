import type { ThemeSelectorPlacement } from "@presentation";

/**
 * @description Define el umbral minimo de temas para mostrar el campo de busqueda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SEARCH_THRESHOLD = 5;

/**
 * @description Define la altura maxima por defecto del panel desplegado.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const MAX_PANEL_HEIGHT = 448;

/**
 * @description Define la colocacion por defecto del panel desplegable.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const DEFAULT_PLACEMENT: ThemeSelectorPlacement = {
  vertical: "bottom",
  horizontal: "right",
  maxHeight: MAX_PANEL_HEIGHT,
};
