import type { IThemeProviderProps } from "@domain";

/**
 * @description Define la configuracion de las preferencias de temas.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemePreferenceConfiguration {
  readonly themes: IThemeProviderProps["themes"];
  readonly initialTheme: IThemeProviderProps["initialTheme"];
  readonly themeEncryptionKey: IThemeProviderProps["themeEncryptionKey"];
}
