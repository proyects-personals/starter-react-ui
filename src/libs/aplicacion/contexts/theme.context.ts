import type { IThemeContextValue } from "@domain";
import { createContext } from "react";

/**
 * @description Contexto interno del sistema de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeContext = createContext<IThemeContextValue | null>(null);
