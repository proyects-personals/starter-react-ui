import type { ReactElement, ReactNode } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { ThemeProvider, TranslateProvider } from "@aplicacion";
import { TEST_THEMES, TEST_TRANSLATIONS } from "./test-fixtures";

/**
 * @description Define las propiedades del envoltorio de pruebas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface TestProvidersOptions {
  readonly initialTheme?: string;
  readonly themes?: readonly unknown[];
  readonly translations?: unknown;
  readonly initialLanguage?: string;
}

/**
 * @description Propiedades internas del envoltorio de proveedores.
 * @author Steveen Cues
 * @version 1.0.0
 */
interface ProvidersWrapperProps {
  readonly children: ReactNode;
  readonly initialTheme: string;
  readonly themes: readonly unknown[];
  readonly translations: unknown;
  readonly initialLanguage: string;
}

/**
 * @description Envuelve un arbol con los proveedores reales de la libreria.
 * @param props Configuracion de temas e idioma.
 * @param props.children Componentes hijos.
 * @param props.initialTheme Tema inicial.
 * @param props.themes Coleccion de temas.
 * @param props.translations Catalogo de traducciones.
 * @param props.initialLanguage Idioma inicial.
 * @returns Arbol envuelto con ThemeProvider y TranslateProvider.
 * @author Steveen Cues
 * @version 1.0.0
 */
function ProvidersWrapper({
  children,
  initialTheme,
  themes,
  translations,
  initialLanguage,
}: ProvidersWrapperProps): ReactElement {
  return (
    <ThemeProvider themes={themes as never} initialTheme={initialTheme}>
      <TranslateProvider
        translations={translations as never}
        initialLanguage={initialLanguage}
        fallbackLanguage="en"
        languageEncryptionKey="test-encryption-key"
      >
        {children}
      </TranslateProvider>
    </ThemeProvider>
  );
}

/**
 * @description Renderiza un componente con los proveedores de la libreria.
 * @param ui Componente a renderizar.
 * @param options Configuracion de temas, idioma y render.
 * @returns Resultado de render de Testing Library.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const renderWithProviders = (
  ui: ReactElement,
  options: TestProvidersOptions & Omit<RenderOptions, "wrapper"> = {},
): ReturnType<typeof render> => {
  const {
    initialTheme = "light",
    themes = TEST_THEMES,
    translations = TEST_TRANSLATIONS,
    initialLanguage = "es",
    ...renderOptions
  } = options;

  return render(
    <ProvidersWrapper
      initialTheme={initialTheme}
      themes={themes}
      translations={translations}
      initialLanguage={initialLanguage}
    >
      {ui}
    </ProvidersWrapper>,
    renderOptions,
  );
};
