import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Navigation } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

const ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Acerca de", href: "/about" },
  {
    label: "Documentacion",
    href: "https://docs.example.com",
    isExternal: true,
  },
];

/**
 * @description Pruebas unitarias de la molecula Navigation.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Navigation", (): void => {
  it("renderiza los elementos configurados", (): void => {
    renderWithProviders(<Navigation items={ITEMS} />);

    expect(screen.getByRole("link", { name: "Inicio" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "Acerca de" })).toBeInTheDocument();
  });

  it("renderiza horizontal por defecto", (): void => {
    renderWithProviders(<Navigation items={ITEMS} />);

    expect(screen.getByRole("list")).toHaveClass("flex-row");
  });

  it("renderiza vertical cuando se configura", (): void => {
    renderWithProviders(<Navigation items={ITEMS} orientation="vertical" />);

    expect(screen.getByRole("list")).toHaveClass("flex-col");
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(
      <Navigation ariaLabel="Menu principal" items={ITEMS} />,
    );

    expect(
      screen.getByRole("navigation", { name: "Menu principal" }),
    ).toBeInTheDocument();
  });

  it("abre enlaces externos en pestaña nueva", (): void => {
    renderWithProviders(<Navigation items={ITEMS} />);

    const externalLink = screen.getByRole("link", {
      name: "Documentacion",
    });

    expect(externalLink).toHaveAttribute("target", "_blank");
    expect(externalLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("no renderiza enlaces externos para rutas internas", (): void => {
    renderWithProviders(<Navigation items={ITEMS} />);

    expect(screen.getByRole("link", { name: "Inicio" })).not.toHaveAttribute(
      "target",
    );
  });

  it("renderiza un nav vacio cuando no hay elementos", (): void => {
    renderWithProviders(<Navigation items={[]} />);

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("permite navegar mediante teclado", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<Navigation items={ITEMS} />);

    await user.tab();

    expect(screen.getByRole("link", { name: "Inicio" })).toHaveFocus();
  });
});
