import { useCallback, useEffect, useMemo, useState, type FC } from "react";
import type {
  AppTheme,
  CustomThemeDefinition,
  ThemeContextValue,
  ThemeProviderProps,
} from "@domain";
import {
  applyThemeToDocument,
  customThemeService,
  findThemeByName,
  isCustomThemeDefinition,
  persistTheme,
  resolveInitialTheme,
  ThemeContext,
} from "@aplicacion";

/**
 * @description Resuelve el tema activo o selecciona el primer tema disponible.
 * @param themes Coleccion de temas disponibles.
 * @param themeName Nombre del tema seleccionado.
 * @returns Tema activo resuelto.
 * @author Steveen Cues
 * @version 1.0.0
 */
const resolveActiveTheme = (
  themes: readonly AppTheme[],
  themeName: string,
): AppTheme => {
  const activeTheme = findThemeByName(themes, themeName);

  if (activeTheme !== undefined) {
    return activeTheme;
  }

  if (themes.length === 0) {
    throw new Error("ThemeProvider requires at least one theme.");
  }

  return themes[0];
};

/**
 * @description Anade o actualiza un tema personalizado en la coleccion.
 * @param currentThemes Coleccion actual de temas personalizados.
 * @param customTheme Tema que se registrara.
 * @returns Nueva coleccion de temas personalizados.
 * @author Steveen Cues
 * @version 1.0.0
 */
const updateCustomThemes = (
  currentThemes: readonly CustomThemeDefinition[],
  customTheme: CustomThemeDefinition,
): readonly CustomThemeDefinition[] => {
  const existingTheme = currentThemes.some(
    (item) => item.name === customTheme.name,
  );

  if (existingTheme) {
    return currentThemes.map((item) =>
      item.name === customTheme.name ? customTheme : item,
    );
  }

  return [...currentThemes, customTheme];
};

/**
 * @description Construye el valor compartido del contexto de temas.
 * @param theme Tema activo.
 * @param themes Coleccion de temas disponibles.
 * @param setTheme Funcion para cambiar el tema.
 * @param registerTheme Funcion para registrar un tema personalizado.
 * @returns Valor del contexto de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const createThemeContextValue = (
  theme: AppTheme,
  themes: readonly AppTheme[],
  setTheme: (name: string) => void,
  registerTheme: (customTheme: CustomThemeDefinition) => void,
): ThemeContextValue => ({
  theme,
  themeName: theme.name,
  themes,
  setTheme,
  registerTheme,
});

/**
 * @description Proporciona los temas base y personalizados a los componentes.
 * Gestiona la seleccion, el registro y la persistencia del tema activo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeProvider: FC<ThemeProviderProps> = ({
  themes: baseThemes,
  initialTheme,
  children,
}) => {
  const [customThemes, setCustomThemes] = useState<
    readonly CustomThemeDefinition[]
  >([]);

  const themes = useMemo<readonly AppTheme[]>(
    () => [...baseThemes, ...customThemes],
    [baseThemes, customThemes],
  );

  const [themeName, setThemeName] = useState<string>(() =>
    resolveInitialTheme(baseThemes, initialTheme),
  );

  const theme = useMemo<AppTheme>(
    () => resolveActiveTheme(themes, themeName),
    [themes, themeName],
  );

  const registerTheme = useCallback(
    (customTheme: CustomThemeDefinition): void => {
      customThemeService.register(customTheme);
      setCustomThemes((currentThemes) =>
        updateCustomThemes(currentThemes, customTheme),
      );
    },
    [],
  );

  const setTheme = useCallback(
    (name: string): void => {
      const selectedTheme = findThemeByName(themes, name);

      if (selectedTheme === undefined) {
        return;
      }

      if (isCustomThemeDefinition(selectedTheme)) {
        customThemeService.register(selectedTheme);
      }

      setThemeName(selectedTheme.name);
    },
    [themes],
  );

  useEffect((): void => {
    applyThemeToDocument(theme.name);
    persistTheme(theme.name);
  }, [theme.name]);

  const contextValue = useMemo(
    () => createThemeContextValue(theme, themes, setTheme, registerTheme),
    [theme, themes, setTheme, registerTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
