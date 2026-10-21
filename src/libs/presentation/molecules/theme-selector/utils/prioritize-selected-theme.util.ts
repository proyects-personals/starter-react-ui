import type { AppTheme } from "@domain";

/**
 * @description Coloca el tema seleccionado primero sin eliminar ni duplicar temas.
 * @author Steveen Cues
 * @version 1.4.0
 */
export const prioritizeSelectedTheme = (
  themes: readonly AppTheme[],
  selectedTheme: AppTheme,
): readonly AppTheme[] => {
  const matchingTheme = themes.find(
    (availableTheme) => availableTheme.name === selectedTheme.name,
  );

  const remainingThemes = themes.filter(
    (availableTheme) => availableTheme.name !== selectedTheme.name,
  );

  return matchingTheme
    ? [matchingTheme, ...remainingThemes]
    : [selectedTheme, ...remainingThemes];
};
