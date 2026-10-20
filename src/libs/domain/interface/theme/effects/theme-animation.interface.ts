import type { ThemeDuration, ThemeEasing } from "@domain";

/**
 * @description Define la configuracion de una animacion.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeAnimation {
  readonly name: string;
  readonly duration: ThemeDuration;
  readonly delay: ThemeDuration;
  readonly easing: ThemeEasing;
  readonly iterationCount: number | "infinite";
  readonly direction: "normal" | "reverse" | "alternate" | "alternate-reverse";
  readonly fillMode: "none" | "forwards" | "backwards" | "both";
  readonly playState: "running" | "paused";
  readonly reducedMotionAlternative?: string;
}
