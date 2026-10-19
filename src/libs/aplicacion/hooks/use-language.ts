import { TranslateContext } from "@aplicacion";
import type { ILanguageContextValue } from "@domain";
import { useContext } from "react";

/**
 * @description Obtiene el idioma actual y la funcion de traduccion.
 * Requiere que el componente este dentro de TranslateProvider.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useLanguage(): ILanguageContextValue {
  const context = useContext(TranslateContext);

  if (context === null) {
    throw new Error("useLanguage must be used inside TranslateProvider.");
  }

  return context;
}
