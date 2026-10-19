import type { LanguagePreferenceState } from "@domain";

/**
 * @description Valores admitidos en un catalogo de traducciones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type TranslationValue = string | TranslationDictionary;

/**
 * @description Diccionario de traducciones que admite claves anidadas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface TranslationDictionary {
  readonly [key: string]: TranslationValue;
}

/**
 * @description Catalogo de traducciones identificado por idioma.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type TranslationCatalog = Readonly<
  Record<string, TranslationDictionary>
>;

/**
 * @description Parametros para interpolar variables en una traduccion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type TranslationParams = Readonly<Record<string, string | number>>;

/**
 * @description Defines the React state dispatcher for language preference updates.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SetLanguagePreferenceState = React.Dispatch<
  React.SetStateAction<LanguagePreferenceState>
>;
