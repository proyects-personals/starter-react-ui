import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import {
  ThemeSelectorList,
  ThemeSelectorTrigger,
  ThemeSelectorSearch,
} from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";
import { createAppTheme } from "../../utils/test-fixtures";

/**
 * @description Pruebas unitarias del atomo ThemeSelectorTrigger.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("ThemeSelectorTrigger (atomo)", (): void => {
  it("muestra el nombre del tema activo", (): void => {
    renderWithProviders(
      <ThemeSelectorTrigger
        theme={createAppTheme("light")}
        isOpen={false}
        selectedLabel="Seleccionado"
        onToggle={(): void => undefined}
      />,
    );

    expect(screen.getByText("Claro")).toBeInTheDocument();
  });

  it("muestra la etiqueta de seleccion en pantallas medianas", (): void => {
    renderWithProviders(
      <ThemeSelectorTrigger
        theme={createAppTheme("light")}
        isOpen={false}
        selectedLabel="Seleccionado"
        onToggle={(): void => undefined}
      />,
    );

    expect(screen.getByText("Seleccionado")).toBeInTheDocument();
  });

  it("refleja el estado abierto en aria-expanded", (): void => {
    renderWithProviders(
      <ThemeSelectorTrigger
        theme={createAppTheme("light")}
        isOpen={true}
        selectedLabel="Seleccionado"
        onToggle={(): void => undefined}
      />,
    );

    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  it("refleja el estado cerrado en aria-expanded", (): void => {
    renderWithProviders(
      <ThemeSelectorTrigger
        theme={createAppTheme("light")}
        isOpen={false}
        selectedLabel="Seleccionado"
        onToggle={(): void => undefined}
      />,
    );

    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("declara la relacion con el listbox", (): void => {
    renderWithProviders(
      <ThemeSelectorTrigger
        theme={createAppTheme("light")}
        isOpen={false}
        selectedLabel="Seleccionado"
        onToggle={(): void => undefined}
      />,
    );

    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-haspopup",
      "listbox",
    );
  });

  it("ejecuta el callback al hacer clic", async (): Promise<void> => {
    const onToggle = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(
      <ThemeSelectorTrigger
        theme={createAppTheme("light")}
        isOpen={false}
        selectedLabel="Seleccionado"
        onToggle={onToggle}
      />,
    );

    await user.click(screen.getByRole("button"));

    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("muestra la inicial del tema en mayuscula", (): void => {
    renderWithProviders(
      <ThemeSelectorTrigger
        theme={createAppTheme("dark")}
        isOpen={false}
        selectedLabel="Seleccionado"
        onToggle={(): void => undefined}
      />,
    );

    expect(screen.getByText("O")).toBeInTheDocument();
  });
});

/**
 * @description Pruebas unitarias del atomo ThemeSelectorSearch.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("ThemeSelectorSearch (atomo)", (): void => {
  it("renderiza el campo de busqueda", (): void => {
    renderWithProviders(
      <ThemeSelectorSearch
        value=""
        placeholder="Buscar temas..."
        onChange={(): void => undefined}
      />,
    );

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  it("muestra el valor actual", (): void => {
    renderWithProviders(
      <ThemeSelectorSearch
        value="oscuro"
        placeholder="Buscar temas..."
        onChange={(): void => undefined}
      />,
    );

    expect(screen.getByRole("searchbox")).toHaveValue("oscuro");
  });

  it("muestra el placeholder", (): void => {
    renderWithProviders(
      <ThemeSelectorSearch
        value=""
        placeholder="Buscar temas..."
        onChange={(): void => undefined}
      />,
    );

    expect(screen.getByRole("searchbox")).toHaveAttribute(
      "placeholder",
      "Buscar temas...",
    );
  });

  it("propaga los cambios al escribir", async (): Promise<void> => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(
      <ThemeSelectorSearch value="" placeholder="Buscar" onChange={onChange} />,
    );

    await user.type(screen.getByRole("searchbox"), "o");

    expect(onChange).toHaveBeenCalledWith("o");
  });
});

/**
 * @description Pruebas unitarias del atomo ThemeSelectorList.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("ThemeSelectorList (atomo)", (): void => {
  it("muestra el mensaje vacio cuando no hay temas", (): void => {
    renderWithProviders(
      <ThemeSelectorList
        themes={[]}
        selectedTheme="light"
        showDescriptions={false}
        label="Temas"
        emptyMessage="No hay temas"
        onSelect={(): void => undefined}
      />,
    );

    expect(screen.getByText("No hay temas")).toBeInTheDocument();
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("renderiza el listbox con las opciones", (): void => {
    renderWithProviders(
      <ThemeSelectorList
        themes={[createAppTheme("light"), createAppTheme("dark")]}
        selectedTheme="light"
        showDescriptions={false}
        label="Temas"
        emptyMessage="No hay temas"
        onSelect={(): void => undefined}
      />,
    );

    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  it("marca como seleccionado el tema activo", (): void => {
    renderWithProviders(
      <ThemeSelectorList
        themes={[createAppTheme("light"), createAppTheme("dark")]}
        selectedTheme="dark"
        showDescriptions={false}
        label="Temas"
        emptyMessage="No hay temas"
        onSelect={(): void => undefined}
      />,
    );

    expect(screen.getByRole("option", { name: /Oscuro/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("option", { name: /Claro/ })).toHaveAttribute(
      "aria-selected",
      "false",
    );
  });

  it("ejecuta el callback al seleccionar una opcion", async (): Promise<void> => {
    const onSelect = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(
      <ThemeSelectorList
        themes={[createAppTheme("light")]}
        selectedTheme="light"
        showDescriptions={false}
        label="Temas"
        emptyMessage="No hay temas"
        onSelect={onSelect}
      />,
    );

    await user.click(screen.getByRole("option", { name: /Claro/ }));

    expect(onSelect).toHaveBeenCalledWith("light");
  });

  it("oculta las descripciones cuando esta deshabilitado", (): void => {
    renderWithProviders(
      <ThemeSelectorList
        themes={[createAppTheme("light")]}
        selectedTheme="light"
        showDescriptions={false}
        label="Temas"
        emptyMessage="No hay temas"
        onSelect={(): void => undefined}
      />,
    );

    expect(screen.queryByText(/description/)).not.toBeInTheDocument();
  });
});
