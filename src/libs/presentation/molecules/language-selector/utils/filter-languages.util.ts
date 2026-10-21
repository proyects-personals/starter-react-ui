/**
 * @description Filtra idiomas mediante su codigo o nombre legible.
 * @author Steveen Cues
 * @version 1.0.0
 */

const LANGUAGE_NAMES = new Intl.DisplayNames(["es"], {
  type: "language",
});

/**
 * @description Obtiene el nombre legible de un idioma.
 * @param language - Codigo del idioma.
 * @returns Nombre legible del idioma.
 */
export function getLanguageName(language: string): string {
  try {
    return LANGUAGE_NAMES.of(language) ?? language;
  } catch {
    return language;
  }
}

/**
 * @description Filtra idiomas por codigo o nombre.
 * @param languages - Idiomas disponibles.
 * @param query - Texto de busqueda.
 * @returns Lista de idiomas coincidentes.
 */
export function filterLanguages(
  languages: readonly string[],
  query: string,
): readonly string[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (normalizedQuery.length === 0) {
    return languages;
  }

  return languages.filter((language: string): boolean => {
    const normalizedLanguage = language.toLocaleLowerCase();
    const normalizedName = getLanguageName(language).toLocaleLowerCase();

    return (
      normalizedLanguage.includes(normalizedQuery) ||
      normalizedName.includes(normalizedQuery)
    );
  });
}
