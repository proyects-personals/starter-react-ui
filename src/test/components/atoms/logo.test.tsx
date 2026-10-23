import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Logo } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Logo.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Logo", (): void => {
  it("renderiza la imagen con el texto alternativo", (): void => {
    renderWithProviders(<Logo alt="Marca" src="/logo.svg" />);

    expect(screen.getByAltText("Marca")).toHaveAttribute("src", "/logo.svg");
  });

  it("aplica las dimensiones configuradas", (): void => {
    renderWithProviders(
      <Logo alt="Marca" height={32} src="/logo.svg" width={48} />,
    );

    const image = screen.getByAltText("Marca");

    expect(image).toHaveAttribute("width", "48");
    expect(image).toHaveAttribute("height", "32");
  });

  it("renderiza un enlace cuando se configura href", (): void => {
    renderWithProviders(<Logo alt="Marca" href="/" src="/logo.svg" />);

    const link = screen.getByRole("link", { name: "Marca" });

    expect(link).toHaveAttribute("href", "/");
  });

  it("no renderiza un enlace cuando falta href", (): void => {
    renderWithProviders(<Logo alt="Marca" src="/logo.svg" />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
