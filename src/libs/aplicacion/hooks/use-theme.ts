import { ThemeContext } from "@aplicacion";
import type { IThemeContextValue } from "@domain";
import { useContext } from "react";

/**
 * @description Obtiene el tema activo, los temas disponibles y
 * la funcion para cambiar de tema.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useTheme(): IThemeContextValue {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
}
