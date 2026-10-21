import type { DaisyUIThemeColors, ThemeManifest, ThemeName } from "@/libs";
import type { ReactNode } from "react";

/**
 * @description Define una configuracion visual completa de un tema.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface AppTheme {
  readonly manifest: ThemeManifest;
  readonly name: ThemeName;
}

/**
 * @description Define un tema completo personalizado por una aplicacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface CustomThemeDefinition extends AppTheme {
  readonly daisyUI: DaisyUIThemeColors;
}

/**
 * @description Define el contrato publico del contexto de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeContextValue {
  readonly theme: AppTheme;
  readonly themeName: string;
  readonly themes: readonly AppTheme[];
  readonly setTheme: (name: string) => void;
  readonly registerTheme: (theme: CustomThemeDefinition) => void;
}

/**
 * @description Propiedades del proveedor de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeProviderProps {
  readonly themes: readonly AppTheme[];
  readonly initialTheme: string;
  readonly children: ReactNode;
}
