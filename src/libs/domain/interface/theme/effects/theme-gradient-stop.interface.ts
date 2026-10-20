import type { ThemeOpacity } from "@domain";

/**
 * @description Define una parada de color de un gradiente.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeGradientStop {
  readonly color: string;
  readonly position?: string;
  readonly opacity?: ThemeOpacity;
}
