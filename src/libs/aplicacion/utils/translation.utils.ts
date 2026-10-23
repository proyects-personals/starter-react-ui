import {
  type TranslationCatalog,
  type TranslationDictionary,
  type TranslationParams,
  type TranslationValue,
  GLOBAL_REGEX_FLAG,
  TranslationRegex,
} from "@domain";

/**
 * @description Comprueba si un idioma existe en el catalogo.
 * @param translations Catalogo disponible.
 * @param language Codigo del idioma.
 * @returns Indica si el idioma esta registrado.
 * @author Steveen Cues
 * @version 2.1.0
 */
function isLanguageAvailable(
  translations: TranslationCatalog,
  language: string,
): boolean {
  return Object.hasOwn(translations, language);
}

/**
 * @description Obtiene el primer idioma registrado en el catalogo.
 * @param translations Catalogo de traducciones.
 * @returns Codigo del primer idioma o undefined si esta vacio.
 * @author Steveen Cues
 * @version 2.1.0
 */
function findFirstLanguage(
  translations: TranslationCatalog,
): string | undefined {
  const [firstLanguage] = Object.keys(translations);

  return firstLanguage;
}

/**
 * @description Obtiene el idioma inicial disponible, priorizando el
 * idioma solicitado, el idioma de respaldo y el primer idioma registrado.
 * @param translations Catalogo de traducciones.
 * @param initialLanguage Idioma solicitado inicialmente.
 * @param fallbackLanguage Idioma de respaldo.
 * @returns Codigo del idioma inicial disponible.
 * @throws Error cuando el catalogo esta vacio.
 * @author Steveen Cues
 * @version 2.1.0
 */
export function resolveInitialLanguage(
  translations: TranslationCatalog,
  initialLanguage: string,
  fallbackLanguage: string,
): string {
  if (isLanguageAvailable(translations, initialLanguage)) {
    return initialLanguage;
  }

  if (isLanguageAvailable(translations, fallbackLanguage)) {
    return fallbackLanguage;
  }

  const firstLanguage = findFirstLanguage(translations);

  if (firstLanguage === undefined) {
    throw new Error(
      "TranslateProvider requires at least one translation catalog.",
    );
  }

  return firstLanguage;
}

/**
 * @description Resuelve el idioma seleccionado y utiliza el idioma
 * inicial, el respaldo o el primer idioma disponible si es necesario.
 * @param translations Catalogo de traducciones.
 * @param selectedLanguage Idioma seleccionado actualmente.
 * @param initialLanguage Idioma inicial configurado.
 * @param fallbackLanguage Idioma de respaldo.
 * @returns Codigo del idioma activo.
 * @author Steveen Cues
 * @version 2.1.0
 */
export function resolveActiveLanguage(
  translations: TranslationCatalog,
  selectedLanguage: string,
  initialLanguage: string,
  fallbackLanguage: string,
): string {
  if (isLanguageAvailable(translations, selectedLanguage)) {
    return selectedLanguage;
  }

  return resolveInitialLanguage(
    translations,
    initialLanguage,
    fallbackLanguage,
  );
}

/**
 * @description Valida que un idioma este registrado en el catalogo.
 * @param translations Catalogo de traducciones.
 * @param language Codigo del idioma que se desea validar.
 * @returns No devuelve ningun valor.
 * @throws Error cuando el idioma no esta disponible.
 * @author Steveen Cues
 * @version 2.1.0
 */
export function assertLanguageExists(
  translations: TranslationCatalog,
  language: string,
): void {
  if (isLanguageAvailable(translations, language)) {
    return;
  }

  throw new Error(
    `Language "${language}" is not available in the translation catalog.`,
  );
}

/**
 * @description Obtiene el valor anidado de una clave usando notacion
 * de puntos, por ejemplo "navigation.contact".
 * @param dictionary Diccionario donde se realiza la busqueda.
 * @param key Clave de traduccion.
 * @returns Valor encontrado o undefined si no existe.
 * @author Steveen Cues
 * @version 2.1.0
 */
function findTranslationValue(
  dictionary: TranslationDictionary,
  key: string,
): TranslationValue | undefined {
  let current: TranslationValue = dictionary;

  for (const segment of key.split(".")) {
    if (typeof current === "string") {
      return undefined;
    }

    if (!Object.hasOwn(current, segment)) {
      return undefined;
    }

    current = current[segment];
  }

  return current;
}

/**
 * @description Busca una traduccion dentro de un diccionario.
 * @param dictionary Diccionario del idioma.
 * @param key Clave con notacion de puntos.
 * @returns Traduccion encontrada o undefined.
 * @author Steveen Cues
 * @version 2.1.0
 */
export function findTranslation(
  dictionary: TranslationDictionary | undefined,
  key: string,
): string | undefined {
  if (dictionary === undefined || key === "") {
    return undefined;
  }

  const value = findTranslationValue(dictionary, key);

  return typeof value === "string" ? value : undefined;
}

/**
 * @description Resuelve el texto correspondiente a un marcador de
 * interpolacion sin eliminarlo cuando falta su parametro.
 * @param placeholder Marcador original, por ejemplo {{name}}.
 * @param key Nombre del parametro.
 * @param params Parametros disponibles.
 * @returns Valor interpolado o marcador original.
 * @author Steveen Cues
 * @version 2.1.0
 */
function resolveInterpolationValue(
  placeholder: string,
  key: string,
  params: TranslationParams | undefined,
): string {
  const value = params?.[key];

  return value === undefined ? placeholder : String(value);
}

/**
 * @description Sustituye los marcadores {{name}} usando los parametros.
 * @param message Mensaje que se desea interpolar.
 * @param params Valores disponibles para la interpolacion.
 * @returns Mensaje con los parametros sustituidos.
 * @author Steveen Cues
 * @version 2.1.0
 */
export function interpolateTranslation(
  message: string,
  params?: TranslationParams,
): string {
  const placeholderRegex = new RegExp(
    TranslationRegex.INTERPOLATION_PLACEHOLDER,
    GLOBAL_REGEX_FLAG,
  );

  return message.replace(
    placeholderRegex,
    (placeholder: string, key: string): string =>
      resolveInterpolationValue(placeholder, key, params),
  );
}

/**
 * @description Busca una traduccion en el idioma activo y utiliza el
 * idioma de respaldo cuando la clave no esta disponible.
 * @param currentDictionary Diccionario del idioma activo.
 * @param fallbackDictionary Diccionario del idioma de respaldo.
 * @param key Clave de traduccion.
 * @returns Traduccion encontrada o clave original.
 * @author Steveen Cues
 * @version 2.1.0
 */
function resolveTranslationMessage(
  currentDictionary: TranslationDictionary | undefined,
  fallbackDictionary: TranslationDictionary | undefined,
  key: string,
): string {
  const currentTranslation = findTranslation(currentDictionary, key);

  if (currentTranslation !== undefined) {
    return currentTranslation;
  }

  const fallbackTranslation = findTranslation(fallbackDictionary, key);

  return fallbackTranslation ?? key;
}

/**
 * @description Traduce un mensaje aplicando respaldo e interpolacion.
 * @param currentDictionary Diccionario del idioma activo.
 * @param fallbackDictionary Diccionario del idioma de respaldo.
 * @param key Clave de traduccion.
 * @param params Parametros de interpolacion.
 * @returns Mensaje final traducido e interpolado.
 * @author Steveen Cues
 * @version 2.1.0
 */
export function translateMessage(
  currentDictionary: TranslationDictionary | undefined,
  fallbackDictionary: TranslationDictionary | undefined,
  key: string,
  params?: TranslationParams,
): string {
  const message = resolveTranslationMessage(
    currentDictionary,
    fallbackDictionary,
    key,
  );

  return interpolateTranslation(message, params);
}
