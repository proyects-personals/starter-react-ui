import type { AppTheme, ThemeName } from "@domain";

/**
 * @description Define el contrato publico del contexto de temas.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface IThemeContextValue {
  readonly theme: AppTheme;
  readonly themeName: ThemeName;
  readonly themes: readonly AppTheme[];
  readonly setTheme: (theme: ThemeName) => void;
}
