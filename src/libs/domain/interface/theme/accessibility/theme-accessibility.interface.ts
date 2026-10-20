import type { ThemeMotionPreference } from "@domain";

/**
 * @description Define las propiedades de accesibilidad.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeAccessibility {
  readonly reducedMotion: ThemeMotionPreference;
  readonly highContrast: boolean;
  readonly focusRingWidth: string;
  readonly focusRingOffset: string;
  readonly focusRingStyle: string;
  readonly minimumTargetSize: string;
  readonly enforceReadableText: boolean;
}
