import type { AppTheme, ThemeManifest } from "@domain";

/**
 * @description Crea un manifiesto de tema para las pruebas.
 * @param name Nombre visible del tema.
 * @param overrides Propiedades opcionales del manifiesto.
 * @returns Manifiesto completo de prueba.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const createThemeManifest = (
  name: string,
  overrides: Partial<ThemeManifest> = {},
): ThemeManifest => ({
  id: name,
  name: `theme.${name}`,
  description: `theme.${name}.description`,
  version: "1.0.0",
  author: "Test",
  tags: [],
  supportedFeatures: [],
  isDefault: false,
  isExperimental: false,
  ...overrides,
});

/**
 * @description Crea un tema de aplicacion para las pruebas.
 * @param name Nombre del tema.
 * @param overrides Propiedades opcionales del tema.
 * @returns Tema de prueba.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const createAppTheme = (
  name: string,
  overrides: Partial<AppTheme> = {},
): AppTheme => ({
  manifest: createThemeManifest(name),
  name,
  ...overrides,
});

/**
 * @description Temas base reutilizables en las pruebas.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const TEST_THEMES: readonly AppTheme[] = [
  createAppTheme("light"),
  createAppTheme("dark"),
  createAppTheme("emerald"),
];

/**
 * @description Temas extendidos para ejercitar el buscador del selector.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const EXTENDED_THEMES: readonly AppTheme[] = [
  ...TEST_THEMES,
  createAppTheme("cupcake"),
  createAppTheme("forest"),
  createAppTheme("ocean"),
  createAppTheme("sunset"),
  createAppTheme("nord"),
];

/**
 * @description Catalogo de traducciones reutilizable en las pruebas.
 * Usa la estructura anidada que espera el sistema de traducciones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TEST_TRANSLATIONS = {
  es: {
    theme: {
      title: "Temas",
      selected: "Seleccionado",
      searchPlaceholder: "Buscar temas...",
      empty: "No hay temas",
      of: "de",
      results: "resultados",
      close: "Cerrar",
      light: "Claro",
      dark: "Oscuro",
      emerald: "Esmeralda",
      cupcake: "Pastel",
      forest: "Bosque",
      ocean: "Oceano",
      sunset: "Atardecer",
      nord: "Nordico",
      "light.description": "Tema claro",
      "dark.description": "Tema oscuro",
      "emerald.description": "Tema esmeralda",
      "cupcake.description": "Tema pastel",
      "forest.description": "Tema bosque",
      "ocean.description": "Tema oceano",
      "sunset.description": "Tema atardecer",
      "nord.description": "Tema nordico",
    },
  },
  en: {
    theme: {
      title: "Themes",
      selected: "Selected",
      searchPlaceholder: "Search themes...",
      empty: "No themes",
      of: "of",
      results: "results",
      close: "Close",
      light: "Light",
      dark: "Dark",
      emerald: "Emerald",
      cupcake: "Cupcake",
      forest: "Forest",
      ocean: "Ocean",
      sunset: "Sunset",
      nord: "Nord",
      "light.description": "Light theme",
      "dark.description": "Dark theme",
      "emerald.description": "Emerald theme",
      "cupcake.description": "Cupcake theme",
      "forest.description": "Forest theme",
      "ocean.description": "Ocean theme",
      "sunset.description": "Sunset theme",
      "nord.description": "Nord theme",
    },
  },
} as const;
