import { useCallback, useEffect, useMemo } from "react";

import type {
  IThemeContextValue,
  IThemeProviderProps,
  ThemeName,
} from "@domain";
import type { JSX } from "react";

import { saveThemePreference } from "@infraestructura";

import {
  ThemeContext,
  createThemeVariables,
  resolveActiveTheme,
  useThemePreference,
} from "@aplicacion";

/**
 * @description Provides the active theme and allows theme changes.
 * Restores and persists the encrypted theme preference.
 * @author Steveen Cues
 * @version 4.0.0
 */
export function ThemeProvider({
  themes,
  initialTheme,
  themeEncryptionKey,
  children,
}: IThemeProviderProps): JSX.Element {
  const { themeName, isPreferenceLoaded, setThemeName } = useThemePreference({
    themes,
    initialTheme,
    themeEncryptionKey,
  });

  const theme = resolveActiveTheme(themes, themeName, initialTheme);

  useEffect((): void => {
    if (!isPreferenceLoaded) {
      return;
    }

    void saveThemePreference(theme.name, themeEncryptionKey);
  }, [isPreferenceLoaded, theme.name, themeEncryptionKey]);

  const setTheme = useCallback(
    (nextTheme: ThemeName): void => setThemeName(nextTheme),
    [setThemeName],
  );

  const themeVariables = useMemo(() => createThemeVariables(theme), [theme]);

  const contextValue = useMemo<IThemeContextValue>(
    () => ({
      theme,
      themeName: theme.name,
      themes,
      setTheme,
    }),
    [theme, themes, setTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <div
        data-rui-theme={theme.name}
        style={{
          ...themeVariables,
          display: "contents",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
