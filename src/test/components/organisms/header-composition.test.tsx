import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import {
  HeaderActions,
  HeaderBrand,
  HeaderComposition,
  LanguageSelector,
  Logo,
  Navigation,
  ThemeSelector,
} from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

const NAVIGATION_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Acerca de", href: "/about" },
];

/**
 * @description Pruebas unitarias del organismo Header por composicion.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("HeaderComposition", (): void => {
  it("permite combinar logo, navegacion y selectores", (): void => {
    renderWithProviders(
      <HeaderComposition>
        <HeaderBrand>
          <Logo alt="Marca" src="/logo.svg" />
          <Navigation items={NAVIGATION_ITEMS} />
        </HeaderBrand>
        <HeaderActions>
          <ThemeSelector />
          <LanguageSelector />
        </HeaderActions>
      </HeaderComposition>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByAltText("Marca")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Inicio" })).toBeInTheDocument();
    expect(screen.getByText("Idioma")).toBeInTheDocument();
  });

  it("permite omitir cualquiera de las secciones", (): void => {
    renderWithProviders(
      <HeaderComposition>
        <HeaderActions>
          <ThemeSelector />
        </HeaderActions>
      </HeaderComposition>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Marca")).not.toBeInTheDocument();
  });

  it("permite incluir acciones personalizadas", async (): Promise<void> => {
    const user = userEvent.setup();
    const handleAction = vi.fn();
    renderWithProviders(
      <HeaderComposition>
        <HeaderActions>
          <button onClick={handleAction} type="button">
            Accion
          </button>
        </HeaderActions>
      </HeaderComposition>,
    );

    await user.click(screen.getByText("Accion"));

    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  it("aplica las clases adicionales configuradas", (): void => {
    renderWithProviders(
      <HeaderComposition className="personalizado">
        <HeaderBrand className="marca">Contenido</HeaderBrand>
      </HeaderComposition>,
    );

    expect(screen.getByRole("banner")).toHaveClass("personalizado");
    expect(screen.getByText("Contenido")).toHaveClass("marca");
  });
});
