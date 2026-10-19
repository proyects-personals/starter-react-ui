import {
  loadEncryptedPreference,
  saveEncryptedPreference,
} from "./encrypted-preference.storage";

const LANGUAGE_PREFERENCE_STORAGE_KEY =
  "starter-react-ui:language-preference:v1";

/**
 * @description Guarda el idioma activo de forma cifrada.
 * @param language Codigo del idioma activo.
 * @param encryptionKey Clave de cifrado proporcionada por el consumidor.
 * @returns Promesa completada al finalizar el intento de guardado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function saveLanguagePreference(
  language: string,
  encryptionKey: string,
): Promise<void> {
  return saveEncryptedPreference(
    LANGUAGE_PREFERENCE_STORAGE_KEY,
    language,
    encryptionKey,
  );
}

/**
 * @description Recupera el idioma guardado y verifica que siga disponible.
 * @param availableLanguages Idiomas admitidos por el proyecto.
 * @param encryptionKey Clave de cifrado proporcionada por el consumidor.
 * @returns Idioma recuperado o undefined si no existe o no es valido.
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function loadLanguagePreference(
  availableLanguages: readonly string[],
  encryptionKey: string,
): Promise<string | undefined> {
  const savedLanguage = await loadEncryptedPreference(
    LANGUAGE_PREFERENCE_STORAGE_KEY,
    encryptionKey,
  );

  if (
    savedLanguage === undefined ||
    !availableLanguages.includes(savedLanguage)
  ) {
    return undefined;
  }

  return savedLanguage;
}
