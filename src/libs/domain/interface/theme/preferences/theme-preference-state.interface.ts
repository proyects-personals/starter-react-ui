import type { ThemeName, ThemePreferenceConfiguration } from "@domain";

/**
 * @description Define el estado de las preferencias de temas.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemePreferenceState extends ThemePreferenceConfiguration {
  readonly themeName: ThemeName;
  readonly isLoaded: boolean;
}
