import type { ThemeAnimation } from "@domain";

/**
 * @description Define las animaciones disponibles.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeAnimations {
  readonly fadeIn: ThemeAnimation;
  readonly fadeOut: ThemeAnimation;
  readonly slideIn: ThemeAnimation;
  readonly slideOut: ThemeAnimation;
  readonly scaleIn: ThemeAnimation;
  readonly scaleOut: ThemeAnimation;
  readonly pulse: ThemeAnimation;
  readonly shimmer: ThemeAnimation;
  readonly gradient: ThemeAnimation;
  readonly glow: ThemeAnimation;
  readonly float: ThemeAnimation;
  readonly spin: ThemeAnimation;
}
