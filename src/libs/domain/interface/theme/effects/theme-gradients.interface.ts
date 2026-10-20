import type { ThemeGradient } from "@domain";

/**
 * @description Define los gradientes disponibles del tema.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeGradients {
  readonly primary: ThemeGradient;
  readonly secondary: ThemeGradient;
  readonly accent: ThemeGradient;
  readonly background: ThemeGradient;
  readonly surface: ThemeGradient;
  readonly sunset: ThemeGradient;
  readonly ocean: ThemeGradient;
  readonly aurora: ThemeGradient;
  readonly rainbow: ThemeGradient;
}
