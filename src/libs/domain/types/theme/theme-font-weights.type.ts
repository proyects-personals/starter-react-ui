import type { THEME_FONT_WEIGHT } from "@domain";

/**
 * @description Define los valores numericos permitidos para los pesos tipograficos.
 * @author Steveen Cues
 * @version 2.2.0
 */
export type ThemeFontWeightValue =
  (typeof THEME_FONT_WEIGHT)[keyof typeof THEME_FONT_WEIGHT];
