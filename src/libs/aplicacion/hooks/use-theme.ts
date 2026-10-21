import { ThemeContext } from "@aplicacion";
import { useContext } from "react";
import type { ThemeContextValue } from "@domain";

/**
 * @description Permite consultar y modificar el tema activo.
 * @returns El contexto con el estado y las acciones del tema.
 * @throws Error si se utiliza fuera de ThemeProvider.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
};
