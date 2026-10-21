import type { AppTheme } from "@domain";

/**
 * @description Filtra los temas por nombre o descripcion traducidos.
 * @author Steveen Cues
 * @version 1.2.0
 */
export const filterThemes = (
  themes: readonly AppTheme[],
  search: string,
  translate: (key: string) => string,
): readonly AppTheme[] => {
  const normalizedSearch = search.trim().toLocaleLowerCase();

  if (normalizedSearch.length === 0) {
    return themes;
  }

  return themes.filter((availableTheme) => {
    const name = translate(availableTheme.manifest.name).toLocaleLowerCase();

    const description = translate(
      availableTheme.manifest.description,
    ).toLocaleLowerCase();

    return (
      name.includes(normalizedSearch) || description.includes(normalizedSearch)
    );
  });
};
