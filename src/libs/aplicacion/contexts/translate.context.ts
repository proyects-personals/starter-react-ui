import type { ILanguageContextValue } from "@domain";
import { createContext } from "react";

/**
 * @description Contexto interno de traducciones de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TranslateContext = createContext<ILanguageContextValue | null>(
  null,
);
