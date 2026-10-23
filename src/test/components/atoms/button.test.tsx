import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Button } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Button.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Button", (): void => {
  it("renderiza su contenido", (): void => {
    renderWithProviders(<Button>Guardar</Button>);

    expect(screen.getByRole("button", { name: "Guardar" })).toBeInTheDocument();
  });

  it("usa la variante primaria por defecto", (): void => {
    renderWithProviders(<Button>Accion</Button>);

    expect(screen.getByRole("button")).toHaveClass("btn", "btn-primary");
  });

  it("aplica la variante configurada", (): void => {
    renderWithProviders(<Button variant="ghost">Accion</Button>);

    expect(screen.getByRole("button")).toHaveClass("btn-ghost");
  });

  it("aplica el tamano configurado", (): void => {
    renderWithProviders(<Button size="lg">Accion</Button>);

    expect(screen.getByRole("button")).toHaveClass("btn-lg");
  });

  it("aplica el estilo con borde cuando isOutlined es verdadero", (): void => {
    renderWithProviders(<Button isOutlined={true}>Accion</Button>);

    expect(screen.getByRole("button")).toHaveClass("btn-outline");
  });

  it("ocupa todo el ancho cuando isFullWidth es verdadero", (): void => {
    renderWithProviders(<Button isFullWidth={true}>Accion</Button>);

    expect(screen.getByRole("button")).toHaveClass("w-full");
  });

  it("queda deshabilitado cuando disabled es verdadero", (): void => {
    renderWithProviders(<Button disabled={true}>Accion</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("muestra el estado de carga y deshabilita el boton", (): void => {
    renderWithProviders(<Button isLoading={true}>Accion</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("loading");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("ejecuta el callback al hacer clic", async (): Promise<void> => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    renderWithProviders(<Button onClick={handleClick}>Accion</Button>);

    await user.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("no ejecuta el callback cuando esta deshabilitado", async (): Promise<void> => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    renderWithProviders(
      <Button disabled={true} onClick={handleClick}>
        Accion
      </Button>,
    );

    await user.click(screen.getByRole("button"));

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(<Button ariaLabel="Cerrar dialogo">X</Button>);

    expect(
      screen.getByRole("button", { name: "Cerrar dialogo" }),
    ).toBeInTheDocument();
  });
});
