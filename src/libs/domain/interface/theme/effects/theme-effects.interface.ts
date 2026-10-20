import type { ThemeOpacity } from "@domain";

/**
 * @description Define los efectos visuales del tema.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeEffects {
  readonly overlay: string;
  readonly backdrop: string;
  readonly blur: string;
  readonly blurStrong: string;
  readonly glassBackground: string;
  readonly glassBorder: string;
  readonly glassShadow: string;
  readonly opacityDisabled: ThemeOpacity;
  readonly opacityHover: ThemeOpacity;
  readonly opacityOverlay: ThemeOpacity;
  readonly saturation: string;
  readonly contrast: string;
  readonly brightness: string;
  readonly grayscale: string;
}
