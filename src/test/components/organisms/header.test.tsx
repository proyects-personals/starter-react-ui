import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";
import { Header } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";
import { TEST_TRANSLATIONS } from "../../utils/test-fixtures";

const HEADER_TRANSLATIONS = {
  ...TEST_TRANSLATIONS,
  es: {
    ...TEST_TRANSLATIONS.es,
    menu: { open: "Abrir menu", close: "Cerrar menu" },
    navigation: { ariaLabel: "Navegacion principal" },
  },
} as const;

const NAVIGATION_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Acerca de", href: "/about" },
];

/**
 * @description Pruebas unitarias del organismo Header generico.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Header (generico)", (): void => {
  it("se renderiza con la configuracion por defecto", (): void => {
    renderWithProviders(
      <Header
        logo={{ alt: "Marca", src: "/logo.svg" }}
        navigationItems={NAVIGATION_ITEMS}
      />,
      { translations: HEADER_TRANSLATIONS },
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByAltText("Marca")).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Navegacion principal" }),
    ).toBeInTheDocument();
  });

  it("oculta el logo cuando showLogo es falso", (): void => {
    renderWithProviders(
      <Header
        logo={{ alt: "Marca", src: "/logo.svg" }}
        navigationItems={NAVIGATION_ITEMS}
        showLogo={false}
      />,
      { translations: HEADER_TRANSLATIONS },
    );

    expect(screen.queryByAltText("Marca")).not.toBeInTheDocument();
  });

  it("oculta la navegacion cuando showNavigation es falso", (): void => {
    renderWithProviders(
      <Header
        logo={{ alt: "Marca", src: "/logo.svg" }}
        navigationItems={NAVIGATION_ITEMS}
        showNavigation={false}
      />,
      { translations: HEADER_TRANSLATIONS },
    );

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("oculta el selector de tema cuando showThemeSelector es falso", (): void => {
    renderWithProviders(
      <Header navigationItems={NAVIGATION_ITEMS} showThemeSelector={false} />,
      { translations: HEADER_TRANSLATIONS },
    );

    expect(screen.queryByText("Temas")).not.toBeInTheDocument();
  });

  it("oculta el selector de idioma cuando showLanguageSelector es falso", (): void => {
    renderWithProviders(
      <Header
        navigationItems={NAVIGATION_ITEMS}
        showLanguageSelector={false}
      />,
      { translations: HEADER_TRANSLATIONS },
    );

    expect(screen.queryByText("Idioma")).not.toBeInTheDocument();
  });

  it("muestra los selectores por defecto", (): void => {
    renderWithProviders(<Header navigationItems={NAVIGATION_ITEMS} />, {
      translations: HEADER_TRANSLATIONS,
    });

    expect(screen.getByText("Idioma")).toBeInTheDocument();
  });

  it("renderiza acciones adicionales personalizadas", (): void => {
    renderWithProviders(
      <Header
        additionalActions={<button type="button">Accion extra</button>}
        navigationItems={NAVIGATION_ITEMS}
      />,
      { translations: HEADER_TRANSLATIONS },
    );

    expect(screen.getByText("Accion extra")).toBeInTheDocument();
  });

  it("abre el menu movil con la navegacion", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<Header navigationItems={NAVIGATION_ITEMS} />, {
      translations: HEADER_TRANSLATIONS,
    });

    const toggle = screen.getByRole("button", { name: "Abrir menu" });
    await user.click(toggle);

    await waitFor((): void => {
      expect(toggle).toHaveAttribute("aria-expanded", "true");
    });

    expect(
      screen.getAllByRole("link", { name: "Inicio" }).length,
    ).toBeGreaterThan(0);
  });

  it("cierra el menu movil al pulsar nuevamente", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<Header navigationItems={NAVIGATION_ITEMS} />, {
      translations: HEADER_TRANSLATIONS,
    });

    const toggle = screen.getByRole("button", { name: "Abrir menu" });
    await user.click(toggle);
    await user.click(toggle);

    await waitFor((): void => {
      expect(toggle).toHaveAttribute("aria-expanded", "false");
    });
  });

  it("actualiza los textos al cambiar el idioma", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<Header navigationItems={NAVIGATION_ITEMS} />, {
      translations: HEADER_TRANSLATIONS,
    });

    await user.click(screen.getByText("Idioma"));
    await user.click(
      screen.getByRole("button", { name: "Seleccionar idioma" }),
    );
    await user.click(screen.getByRole("option", { name: /inglés/ }));

    await waitFor((): void => {
      expect(screen.getByText("inglés")).toBeInTheDocument();
    });
  });

  it("permite alternar el menu movil mediante teclado", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<Header navigationItems={NAVIGATION_ITEMS} />, {
      translations: HEADER_TRANSLATIONS,
    });

    const toggle = screen.getByRole("button", { name: "Abrir menu" });
    toggle.focus();
    await user.keyboard("{Enter}");

    await waitFor((): void => {
      expect(
        screen.getByRole("button", { name: "Cerrar menu" }),
      ).toBeInTheDocument();
    });
  });
});
