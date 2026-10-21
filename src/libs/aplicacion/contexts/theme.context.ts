import { createContext } from "react";
import type { ThemeContextValue } from "@domain";

/**
 * @description Contexto compartido para gestionar los temas de la aplicacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeContext = createContext<ThemeContextValue | null>(null);
