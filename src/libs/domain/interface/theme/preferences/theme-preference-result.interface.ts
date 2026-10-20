import type { ThemeName } from "@domain";

/**
 * @description Define el resultado del hook de preferencias de temas.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemePreferenceResult {
  readonly themeName: ThemeName;
  readonly isPreferenceLoaded: boolean;
  readonly setThemeName: (nextTheme: ThemeName) => void;
}
