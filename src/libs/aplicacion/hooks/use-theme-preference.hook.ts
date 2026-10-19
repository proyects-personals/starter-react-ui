import { useCallback, useEffect, useMemo, useState } from "react";

import type {
  SetThemePreferenceState,
  ThemeName,
  ThemePreferenceConfiguration,
  ThemePreferenceResult,
  ThemePreferenceState,
} from "@domain";

import { loadThemePreference } from "@infraestructura";

import { assertThemeExists, resolveInitialTheme } from "@aplicacion";

/**
 * @description Creates a preference state for the given configuration.
 * @author Steveen Cues
 * @version 3.0.0
 */
function createPreferenceState(
  configuration: ThemePreferenceConfiguration,
  themeName: ThemeName,
  isLoaded: boolean,
): ThemePreferenceState {
  return {
    ...configuration,
    themeName,
    isLoaded,
  };
}

/**
 * @description Checks whether a state belongs to the active configuration.
 * @author Steveen Cues
 * @version 3.0.0
 */
function matchesConfiguration(
  state: ThemePreferenceState,
  configuration: ThemePreferenceConfiguration,
): boolean {
  return (
    state.themes === configuration.themes &&
    state.initialTheme === configuration.initialTheme &&
    state.themeEncryptionKey === configuration.themeEncryptionKey
  );
}

/**
 * @description Loads the stored theme and safely handles restoration failures.
 * @author Steveen Cues
 * @version 3.0.0
 */
async function restoreSavedTheme(
  configuration: ThemePreferenceConfiguration,
): Promise<ThemeName | undefined> {
  try {
    return await loadThemePreference(
      configuration.themes,
      configuration.themeEncryptionKey,
    );
  } catch {
    return undefined;
  }
}

/**
 * @description Restores the saved preference without overriding a user selection.
 * @author Steveen Cues
 * @version 3.0.0
 */
function useRestoreThemePreference(
  configuration: ThemePreferenceConfiguration,
  setPreferenceState: SetThemePreferenceState,
): void {
  useEffect((): (() => void) => {
    let isActive = true;

    const restorePreference = async (): Promise<void> => {
      const savedTheme = await restoreSavedTheme(configuration);

      if (!isActive) {
        return;
      }

      const defaultTheme = resolveInitialTheme(
        configuration.themes,
        configuration.initialTheme,
      );

      setPreferenceState(
        (currentState: ThemePreferenceState): ThemePreferenceState => {
          if (
            matchesConfiguration(currentState, configuration) &&
            currentState.isLoaded
          ) {
            return currentState;
          }

          return createPreferenceState(
            configuration,
            savedTheme ?? defaultTheme.name,
            true,
          );
        },
      );
    };

    void restorePreference();

    return (): void => {
      isActive = false;
    };
  }, [configuration, setPreferenceState]);
}

/**
 * @description Creates a validated theme selection handler.
 * @author Steveen Cues
 * @version 3.0.0
 */
function useSetThemePreference(
  configuration: ThemePreferenceConfiguration,
  setPreferenceState: SetThemePreferenceState,
): (nextTheme: ThemeName) => void {
  return useCallback(
    (nextTheme: ThemeName): void => {
      assertThemeExists(configuration.themes, nextTheme);

      setPreferenceState(createPreferenceState(configuration, nextTheme, true));
    },
    [configuration, setPreferenceState],
  );
}

/**
 * @description Manages the selected theme and its encrypted persistence lifecycle.
 * @author Steveen Cues
 * @version 3.0.0
 */
export function useThemePreference(
  inputConfiguration: ThemePreferenceConfiguration,
): ThemePreferenceResult {
  const { themes, initialTheme, themeEncryptionKey } = inputConfiguration;

  const configuration = useMemo(
    (): ThemePreferenceConfiguration => ({
      themes,
      initialTheme,
      themeEncryptionKey,
    }),
    [themes, initialTheme, themeEncryptionKey],
  );

  const [preferenceState, setPreferenceState] = useState<ThemePreferenceState>(
    (): ThemePreferenceState =>
      createPreferenceState(
        configuration,
        resolveInitialTheme(themes, initialTheme).name,
        false,
      ),
  );

  useRestoreThemePreference(configuration, setPreferenceState);

  const isCurrentConfiguration = matchesConfiguration(
    preferenceState,
    configuration,
  );

  const themeName = isCurrentConfiguration
    ? preferenceState.themeName
    : resolveInitialTheme(themes, initialTheme).name;

  const isPreferenceLoaded = isCurrentConfiguration && preferenceState.isLoaded;

  const setThemeName = useSetThemePreference(configuration, setPreferenceState);

  return {
    themeName,
    isPreferenceLoaded,
    setThemeName,
  };
}
