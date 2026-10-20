import type { ThemeFontWeight, ThemeInteractiveColors } from "@domain";

/**
 * @description Define los tokens de un boton.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeButton {
  readonly primary: ThemeInteractiveColors;
  readonly secondary: ThemeInteractiveColors;
  readonly outline: ThemeInteractiveColors;
  readonly ghost: ThemeInteractiveColors;
  readonly danger: ThemeInteractiveColors;
  readonly radius: string;
  readonly fontWeight: ThemeFontWeight;
  readonly height: string;
  readonly paddingInline: string;
  readonly transition: string;
}
