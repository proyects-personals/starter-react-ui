import type { AppTheme, CustomThemeDefinition } from "@domain";

/**
 * @description Busca un tema por su nombre dentro de una coleccion.
 * @param themes Coleccion de temas disponibles.
 * @param themeName Nombre del tema que se desea encontrar.
 * @returns El tema encontrado o undefined si no existe.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const findThemeByName = (
  themes: readonly AppTheme[],
  themeName: string,
): AppTheme | undefined => themes.find((theme) => theme.name === themeName);

/**
 * @description Comprueba si un tema contiene la configuracion de DaisyUI.
 * @param theme Tema que se desea comprobar.
 * @returns true si el tema es una definicion personalizada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const isCustomThemeDefinition = (
  theme: AppTheme,
): theme is CustomThemeDefinition => "daisyUI" in theme;

/**
 * @description Resuelve el tema inicial segun la preferencia almacenada,
 * el tema configurado y el primer tema disponible.
 * @param themes Coleccion de temas disponibles.
 * @param initialTheme Nombre del tema inicial configurado.
 * @returns Nombre del tema inicial resuelto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const resolveInitialTheme = (
  themes: readonly AppTheme[],
  initialTheme: string,
): string => {
  if (typeof window !== "undefined") {
    const savedTheme = window.localStorage.getItem("app_theme");

    if (
      savedTheme !== null &&
      savedTheme.length > 0 &&
      findThemeByName(themes, savedTheme) !== undefined
    ) {
      return savedTheme;
    }
  }

  const configuredTheme = findThemeByName(themes, initialTheme);

  if (configuredTheme !== undefined) {
    return configuredTheme.name;
  }

  if (themes.length === 0) {
    return initialTheme;
  }

  return themes[0].name;
};

/**
 * @description Actualiza el atributo data-theme del documento.
 * @param themeName Nombre del tema que se aplicara.
 * @returns void.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const applyThemeToDocument = (themeName: string): void => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.setAttribute("data-theme", themeName);
};

/**
 * @description Persiste el nombre del tema seleccionado en el navegador.
 * @param themeName Nombre del tema que se almacenara.
 * @returns void.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const persistTheme = (themeName: string): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem("app_theme", themeName);
};
