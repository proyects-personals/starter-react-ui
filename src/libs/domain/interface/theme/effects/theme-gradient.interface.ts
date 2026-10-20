import type {
  ThemeDuration,
  ThemeGradientDirection,
  ThemeGradientStop,
  ThemeGradientType,
} from "@domain";

/**
 * @description Define un gradiente reutilizable.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeGradient {
  readonly type: ThemeGradientType;
  readonly direction?: ThemeGradientDirection;
  readonly angle?: string;
  readonly stops: readonly ThemeGradientStop[];
  readonly css: string;
  readonly animated: boolean;
  readonly animationName?: string;
  readonly animationDuration?: ThemeDuration;
}
