/**
 * @description Defines the supported animation styles.
 * @author Steveen Cues
 * @version 2.0.0
 */
export type ThemeAnimationStyle =
  | "fade"
  | "slide"
  | "scale"
  | "bounce"
  | "pulse"
  | "shimmer"
  | "gradient"
  | "glow"
  | "spin"
  | "float"
  | "none";

/**
 * @description Defines the available easing curves.
 * @author Steveen Cues
 * @version 2.0.0
 */
export type ThemeEasing =
  "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "spring";

/**
 * @description Defines the motion strategies supported by the system.
 * @author Steveen Cues
 * @version 2.0.0
 */
export type ThemeMotionPreference = "full" | "reduced" | "system";
