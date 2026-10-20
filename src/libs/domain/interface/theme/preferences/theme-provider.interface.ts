import type { ReactNode } from "react";
import type { AppTheme, ThemeName } from "@domain";

/**
 * @description Define las propiedades del proveedor de temas.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface IThemeProviderProps {
  readonly themes: readonly AppTheme[];
  readonly initialTheme: ThemeName;
  readonly themeEncryptionKey: string;
  readonly children: ReactNode;
}
