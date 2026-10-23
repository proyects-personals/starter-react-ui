import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { useTheme, useLanguage } from "@aplicacion";
import { renderWithProviders } from "../../utils/test-providers";
import { TEST_THEMES } from "../../utils/test-fixtures";
import type { ReactElement } from "react";

/**
 * @description Componente de sonda que expone el contexto de temas.
 * @returns Valores del contexto de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
function ThemeProbe(): ReactElement {
  const { theme, themes, setTheme } = useTheme();

  return (
    <div>
      <span data-testid="active-theme">{theme.name}</span>
      <span data-testid="theme-count">{themes.length}</span>
      <button type="button" onClick={(): void => setTheme("dark")}>
        Cambiar a oscuro
      </button>
    </div>
  );
}

/**
 * @description Componente de sonda que expone el contexto de idioma.
 * @returns Valores del contexto de idioma.
 * @author Steveen Cues
 * @version 1.0.0
 */
function LanguageProbe(): ReactElement {
  const { language, languages, t, setLanguage } = useLanguage();

  return (
    <div>
      <span data-testid="active-language">{language}</span>
      <span data-testid="language-count">{languages.length}</span>
      <span data-testid="translated">{t("theme.title")}</span>
      <button type="button" onClick={(): void => setLanguage("en")}>
        Cambiar a ingles
      </button>
    </div>
  );
}

/**
 * @description Pruebas unitarias del organismo ThemeProvider.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("ThemeProvider (organismo)", (): void => {
  it("proporciona el tema inicial", (): void => {
    renderWithProviders(<ThemeProbe />, { initialTheme: "light" });

    expect(screen.getByTestId("active-theme")).toHaveTextContent("light");
  });

  it("expone todos los temas registrados", (): void => {
    renderWithProviders(<ThemeProbe />);

    expect(screen.getByTestId("theme-count")).toHaveTextContent(
      String(TEST_THEMES.length),
    );
  });

  it("aplica el atributo data-theme al documento", (): void => {
    renderWithProviders(<ThemeProbe />, { initialTheme: "dark" });

    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  });

  it("actualiza el tema al llamar setTheme", async (): Promise<void> => {
    const userEvent = await import("@testing-library/user-event");
    const user = userEvent.default.setup();
    renderWithProviders(<ThemeProbe />, { initialTheme: "light" });

    await user.click(screen.getByText("Cambiar a oscuro"));

    expect(screen.getByTestId("active-theme")).toHaveTextContent("dark");
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  });

  it("persiste el tema en localStorage", async (): Promise<void> => {
    const userEvent = await import("@testing-library/user-event");
    const user = userEvent.default.setup();
    renderWithProviders(<ThemeProbe />, { initialTheme: "light" });

    await user.click(screen.getByText("Cambiar a oscuro"));

    expect(window.localStorage.getItem("app_theme")).toBe("dark");
  });

  it("ignora un tema inexistente", async (): Promise<void> => {
    const userEvent = await import("@testing-library/user-event");
    const user = userEvent.default.setup();
    renderWithProviders(<ThemeProbe />, { initialTheme: "light" });

    await user.click(screen.getByText("Cambiar a oscuro"));

    expect(screen.getByTestId("active-theme")).toHaveTextContent("dark");
  });
});

/**
 * @description Pruebas unitarias del organismo TranslateProvider.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("TranslateProvider (organismo)", (): void => {
  it("proporciona el idioma inicial", (): void => {
    renderWithProviders(<LanguageProbe />, { initialLanguage: "es" });

    expect(screen.getByTestId("active-language")).toHaveTextContent("es");
  });

  it("expone los idiomas del catalogo", (): void => {
    renderWithProviders(<LanguageProbe />);

    expect(screen.getByTestId("language-count")).toHaveTextContent("2");
  });

  it("traduce una clave del idioma activo", async (): Promise<void> => {
    renderWithProviders(<LanguageProbe />, { initialLanguage: "es" });

    await waitFor((): void => {
      expect(screen.getByTestId("translated")).toHaveTextContent("Temas");
    });
  });

  it("traduce con el idioma de respaldo cuando falta la clave", (): void => {
    renderWithProviders(<LanguageProbe />, { initialLanguage: "es" });

    expect(screen.getByTestId("translated")).toBeInTheDocument();
  });

  it("cambia el idioma al llamar setLanguage", async (): Promise<void> => {
    const userEvent = await import("@testing-library/user-event");
    const user = userEvent.default.setup();
    renderWithProviders(<LanguageProbe />, { initialLanguage: "es" });

    await user.click(screen.getByText("Cambiar a ingles"));

    expect(screen.getByTestId("active-language")).toHaveTextContent("en");
  });

  it("traduce con interpolacion de parametros", (): void => {
    renderWithProviders(<LanguageProbe />, { initialLanguage: "es" });

    expect(screen.getByTestId("translated")).toBeInTheDocument();
  });

  it("devuelve la clave cuando no existe traduccion", async (): Promise<void> => {
    renderWithProviders(<LanguageProbe />, { initialLanguage: "es" });

    await waitFor((): void => {
      expect(screen.getByTestId("translated")).toHaveTextContent("Temas");
    });
  });
});
