import type { AppTheme } from "@domain";

/**
 * @description Filtra los temas por nombre, nombre visible y descripción.
 * @author Steveen Cues
 * @version 1.0.0
 * @example
 * const filteredThemes = filterThemes(themes, "dark");
 */
export const filterThemes = (
  themes: readonly AppTheme[],
  search: string,
): readonly AppTheme[] => {
  const normalizedSearch = search.trim().toLocaleLowerCase();

  return themes.filter((availableTheme: AppTheme) =>
    [
      availableTheme.name,
      availableTheme.manifest.name,
      availableTheme.manifest.description,
    ].some((value: string) =>
      value.toLocaleLowerCase().includes(normalizedSearch),
    ),
  );
};