import type { AppTheme, ThemeName } from "@domain";

import {
  loadEncryptedPreference,
  saveEncryptedPreference,
} from "./encrypted-preference.storage";

const THEME_PREFERENCE_STORAGE_KEY = "starter-react-ui:theme-preference:v1";

/**
 * @description Guarda el nombre del tema activo de forma cifrada.
 * @param themeName Nombre del tema.
 * @param encryptionKey Clave de cifrado proporcionada por el consumidor.
 * @returns Promesa completada al finalizar el intento de guardado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function saveThemePreference(
  themeName: ThemeName,
  encryptionKey: string,
): Promise<void> {
  return saveEncryptedPreference(
    THEME_PREFERENCE_STORAGE_KEY,
    themeName,
    encryptionKey,
  );
}

/**
 * @description Recupera el tema guardado si existe entre los temas admitidos.
 * @param themes Temas definidos por el proyecto consumidor.
 * @param encryptionKey Clave de cifrado proporcionada por el consumidor.
 * @returns Nombre del tema recuperado o undefined.
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function loadThemePreference(
  themes: readonly AppTheme[],
  encryptionKey: string,
): Promise<ThemeName | undefined> {
  const savedTheme = await loadEncryptedPreference(
    THEME_PREFERENCE_STORAGE_KEY,
    encryptionKey,
  );

  if (savedTheme === undefined) {
    return undefined;
  }

  const availableTheme = themes.find(
    (theme: AppTheme): boolean => theme.name === savedTheme,
  );

  return availableTheme?.name;
}
