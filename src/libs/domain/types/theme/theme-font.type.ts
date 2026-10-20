import type { THEME_FONT_WEIGHT } from "@domain";

/**
 * @description Defines the available typography sizes.
 * @author Steveen Cues
 * @version 2.0.0
 */
export type ThemeFontSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

/**
 * @description Defines the available typography weights.
 * @author Steveen Cues
 * @version 2.0.0
 */
export type ThemeFontWeight =
  (typeof THEME_FONT_WEIGHT)[keyof typeof THEME_FONT_WEIGHT];

/**
 * @description Defines conventional typography styles.
 * @author Steveen Cues
 * @version 2.0.0
 */
export type ThemeFontStyle = "normal" | "italic" | "oblique";
