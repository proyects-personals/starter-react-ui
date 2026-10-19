import type { TranslationCatalog, TranslationParams } from "@/libs";
import type { ReactNode } from "react";

/**
 * @description Estado publico del contexto de traducciones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ILanguageContextValue {
  readonly language: string;
  readonly languages: readonly string[];
  readonly setLanguage: (language: string) => void;
  readonly t: (key: string, params?: TranslationParams) => string;
}

/**
 * @description Propiedades del proveedor de traducciones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ITranslateProviderProps {
  readonly translations: TranslationCatalog;
  readonly initialLanguage: string;
  readonly fallbackLanguage?: string;
  readonly children: ReactNode;
  readonly languageEncryptionKey: string;
}

/**
 * @description Defines the configuration required to manage language preferences.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface LanguagePreferenceConfiguration {
  readonly translations: ITranslateProviderProps["translations"];
  readonly initialLanguage: ITranslateProviderProps["initialLanguage"];
  readonly fallbackLanguage: string;
  readonly languageEncryptionKey: ITranslateProviderProps["languageEncryptionKey"];
  readonly languages: readonly string[];
}

/**
 * @description Represents the current language preference state and configuration.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface LanguagePreferenceState extends LanguagePreferenceConfiguration {
  readonly selectedLanguage: string;
  readonly isLoaded: boolean;
}

/**
 * @description Defines the result returned by the language preference hook.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface LanguagePreferenceResult {
  readonly language: string;
  readonly isLoaded: boolean;
  readonly setLanguage: (language: string) => void;
}
