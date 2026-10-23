import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Container } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Container.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Container", (): void => {
  it("renderiza sus hijos dentro de un div por defecto", (): void => {
    renderWithProviders(<Container>Contenido</Container>);

    expect(screen.getByText("Contenido")).toBeInTheDocument();
  });

  it("usa el ancho maximo xl por defecto", (): void => {
    renderWithProviders(<Container>Contenido</Container>);

    expect(screen.getByText("Contenido")).toHaveClass("max-w-screen-xl");
  });

  it("aplica el ancho maximo configurado", (): void => {
    renderWithProviders(<Container maxWidth="sm">Contenido</Container>);

    expect(screen.getByText("Contenido")).toHaveClass("max-w-screen-sm");
  });

  it("aplica la direccion vertical configurada", (): void => {
    renderWithProviders(<Container direction="column">Contenido</Container>);

    expect(screen.getByText("Contenido")).toHaveClass("flex-col");
  });

  it("aplica el espaciado configurado", (): void => {
    renderWithProviders(<Container gap="lg">Contenido</Container>);

    expect(screen.getByText("Contenido")).toHaveClass("gap-8");
  });

  it("renderiza con la etiqueta semantica configurada", (): void => {
    renderWithProviders(
      <Container as="section" align="center">
        Contenido
      </Container>,
    );

    expect(screen.getByText("Contenido").tagName).toBe("SECTION");
  });

  it("combina las clases adicionales configuradas", (): void => {
    renderWithProviders(<Container className="extra">Contenido</Container>);

    expect(screen.getByText("Contenido")).toHaveClass("extra");
  });
});
