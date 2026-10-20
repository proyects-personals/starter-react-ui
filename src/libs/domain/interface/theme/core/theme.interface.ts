import type {
  ThemeBrandColors,
  ThemeBorderColors,
  ThemeColorPalette,
  ThemeDataColors,
  ThemeOverlayColors,
  ThemeStateColors,
  ThemeSurfaceColors,
  ThemeTextColors,
  ThemeAccessibility,
  ThemeComponents,
  ThemeAnimations,
  ThemeEffects,
  ThemeGradients,
  ThemeTransitions,
  ThemeLayout,
  ThemeShadowColors,
  ThemeShadows,
  ThemeTypography,
} from "@domain";

/**
 * @description Define la configuracion completa de tokens visuales.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface Theme {
  readonly palette: ThemeColorPalette;
  readonly surface: ThemeSurfaceColors;
  readonly text: ThemeTextColors;
  readonly brand: ThemeBrandColors;
  readonly state: ThemeStateColors;
  readonly border: ThemeBorderColors;
  readonly overlay: ThemeOverlayColors;
  readonly data: ThemeDataColors;
  readonly typography: ThemeTypography;
  readonly gradients: ThemeGradients;
  readonly shadows: ThemeShadows;
  readonly shadowColors: ThemeShadowColors;
  readonly effects: ThemeEffects;
  readonly transitions: ThemeTransitions;
  readonly animations: ThemeAnimations;
  readonly layout: ThemeLayout;
  readonly components: ThemeComponents;
  readonly accessibility: ThemeAccessibility;
}
