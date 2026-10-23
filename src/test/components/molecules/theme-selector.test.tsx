import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";
import { ThemeSelector } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";
import { EXTENDED_THEMES } from "../../utils/test-fixtures";

/**
 * @description Pruebas unitarias de la molecula ThemeSelector.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("ThemeSelector", (): void => {
  it("renderiza el activador con el tema actual", (): void => {
    renderWithProviders(<ThemeSelector />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Claro")).toBeInTheDocument();
  });

  it("abre el panel al hacer clic en el activador", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeSelector />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getByText("Temas")).toBeInTheDocument();
  });

  it("cierra el panel al hacer clic nuevamente en el activador", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeSelector />);

    const trigger = screen.getByRole("button");
    await user.click(trigger);
    await user.click(trigger);

    await waitFor((): void => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });

  it("cierra el panel al pulsar Escape", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeSelector />);

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
        <ThemeSelector />
        <button type="button">Exterior</button>
      </div>,
    );

    await user.click(screen.getByRole("button", { name: /Claro/ }));
    await user.click(screen.getByText("Exterior"));

    await waitFor((): void => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });

  it("muestra la lista de temas disponibles", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeSelector />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("option", { name: /Claro/ })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /Oscuro/ })).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /Esmeralda/ }),
    ).toBeInTheDocument();
  });

  it("marca el tema activo como seleccionado", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeSelector />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("option", { name: /Claro/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("option", { name: /Oscuro/ })).toHaveAttribute(
      "aria-selected",
      "false",
    );
  });

  it("selecciona un tema al hacer clic en una opcion", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeSelector />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("option", { name: /Oscuro/ }));

    await waitFor((): void => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
    expect(screen.getByText("Oscuro")).toBeInTheDocument();
  });

  it("filtra los temas mediante el buscador", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeSelector />, { themes: EXTENDED_THEMES });

    await user.click(screen.getByRole("button", { name: /Claro/ }));

    const searchInput = screen.getByRole("searchbox");
    await user.type(searchInput, "oscuro");

    expect(screen.getByRole("option", { name: /Oscuro/ })).toBeInTheDocument();
    expect(
      screen.queryByRole("option", { name: /Esmeralda/ }),
    ).not.toBeInTheDocument();
  });

  it("muestra solo el tema seleccionado cuando la busqueda no coincide con otros temas", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeSelector />, { themes: EXTENDED_THEMES });

    await user.click(screen.getByRole("button", { name: /Claro/ }));

    const searchInput = screen.getByRole("searchbox");
    await user.type(searchInput, "inexistente");

    expect(screen.getByRole("option", { name: /Claro/ })).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(1);
  });

  it("muestra el contador de resultados", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeSelector />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByText(/3 de 3/)).toBeInTheDocument();
  });

  it("cierra el panel con el boton de cerrar", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeSelector />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("button", { name: "Cerrar" }));

    await waitFor((): void => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });

  it("aplica una clase personalizada al contenedor", (): void => {
    renderWithProviders(<ThemeSelector className="w-full" />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("respeta el tema inicial configurado", (): void => {
    renderWithProviders(<ThemeSelector />, { initialTheme: "dark" });

    expect(screen.getByText("Oscuro")).toBeInTheDocument();
  });

  it("usa traducciones personalizadas", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(
      <ThemeSelector translations={{ title: "custom.title" }} />,
      {
        translations: {
          ...{ es: {}, en: {} },
        } as never,
      },
    );

    await user.click(screen.getByRole("button"));

    expect(screen.getByText("custom.title")).toBeInTheDocument();
  });

  it("permite deshabilitar las descripciones", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeSelector showDescriptions={false} />);

    await user.click(screen.getByRole("button"));

    expect(screen.queryByText(/Tema claro/)).not.toBeInTheDocument();
  });

  it("registra la interaccion sin errores de consola", async (): Promise<void> => {
    const consoleError = vi.spyOn(console, "error");
    const user = userEvent.setup();
    renderWithProviders(<ThemeSelector />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("option", { name: /Esmeralda/ }));

    expect(consoleError).not.toHaveBeenCalled();
  });
});
