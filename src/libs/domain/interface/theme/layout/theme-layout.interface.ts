import type {
  ThemeDensity,
  ThemeBreakpoints,
  ThemeDimensions,
  ThemeRadii,
  ThemeSpacing,
  ThemeZIndex,
} from "@domain";

/**
 * @description Define la configuracion de layout del tema.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeLayout {
  readonly density: ThemeDensity;
  readonly spacing: ThemeSpacing;
  readonly radii: ThemeRadii;
  readonly breakpoints: ThemeBreakpoints;
  readonly dimensions: ThemeDimensions;
  readonly zIndex: ThemeZIndex;
}
