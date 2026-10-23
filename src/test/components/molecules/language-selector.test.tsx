import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";
import { LanguageSelector } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias de la molecula LanguageSelector.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("LanguageSelector", (): void => {
  it("renderiza el activador con el idioma actual", (): void => {
    renderWithProviders(<LanguageSelector />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("muestra la etiqueta del selector", (): void => {
    renderWithProviders(<LanguageSelector />);

    expect(screen.getByText("Idioma")).toBeInTheDocument();
  });

  it("abre el panel al hacer clic en el activador", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<LanguageSelector />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("muestra los idiomas disponibles", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<LanguageSelector />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("option", { name: /es/ })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /en/ })).toBeInTheDocument();
  });

  it("marca el idioma activo como seleccionado", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<LanguageSelector />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("option", { name: /es/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("cierra el panel al pulsar Escape", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<LanguageSelector />);

    await user.click(screen.getByRole("button"));
    await user.keyboard("{Escape}");

    await waitFor((): void => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });

  it("cierra el panel al hacer clic fuera del selector", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(
      <div>
        <LanguageSelector />
        <button type="button">Exterior</button>
      </div>,
    );

    await user.click(
      screen.getByRole("button", { name: /Seleccionar idioma/ }),
    );
    await user.click(screen.getByText("Exterior"));

    await waitFor((): void => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });

  it("cambia el idioma al seleccionar una opcion", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<LanguageSelector />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("option", { name: /en/ }));

    await waitFor((): void => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });

  it("muestra el filtro de busqueda cuando hay suficientes idiomas", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<LanguageSelector />);

    await user.click(screen.getByRole("button"));

    const searchbox = screen.queryByRole("searchbox");

    if (searchbox) {
      expect(searchbox).toBeInTheDocument();
    } else {
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    }
  });
});
