import { describe, expect, it } from "vitest";
import { Icon } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Icon.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Icon", (): void => {
  it("renderiza un svg con la referencia al sprite", (): void => {
    const { container } = renderWithProviders(<Icon name="menu" />);

    const svg = container.querySelector("svg");

    expect(svg).not.toBeNull();
    expect(svg?.querySelector("use")?.getAttribute("href")).toBe(
      "/icons.svg#menu",
    );
  });

  it("aplica el tamano configurado", (): void => {
    const { container } = renderWithProviders(<Icon name="menu" size={32} />);

    const svg = container.querySelector("svg");

    expect(svg?.getAttribute("width")).toBe("32");
    expect(svg?.getAttribute("height")).toBe("32");
  });

  it("oculta el svg a los lectores de pantalla sin titulo", (): void => {
    const { container } = renderWithProviders(<Icon name="menu" />);

    expect(container.querySelector("svg")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("expone el titulo como imagen accesible", (): void => {
    const { container } = renderWithProviders(
      <Icon name="menu" title="Abrir menu" />,
    );

    const svg = container.querySelector("svg");

    expect(svg).toHaveAttribute("role", "img");
    expect(svg?.querySelector("title")?.textContent).toBe("Abrir menu");
  });

  it("combina las clases adicionales configuradas", (): void => {
    const { container } = renderWithProviders(
      <Icon className="text-primary" name="menu" />,
    );

    expect(container.querySelector("svg")).toHaveClass("text-primary");
  });
});
