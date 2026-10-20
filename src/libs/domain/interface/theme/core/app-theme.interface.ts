import type { Theme, ThemeManifest, ThemeName } from "@domain";
/**
 * @description Define una configuracion visual completa de un tema.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface AppTheme {
  readonly manifest: ThemeManifest;
  readonly name: ThemeName;
  readonly themes: Theme;
}
