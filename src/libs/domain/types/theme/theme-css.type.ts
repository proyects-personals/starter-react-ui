import type { CSSProperties } from "react";

/**
 * @description Defines custom CSS variables supported by the library.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ThemeCssVariables = CSSProperties & {
  [property: `--rui-${string}`]: string;
};

/**
 * @description Represents a CSS value compatible with the theme system.
 * @author Steveen Cues
 * @version 2.0.0
 */
export type ThemeCssValue = string;
