import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";
import { Navigation, ResponsiveMenu } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";
import { TEST_TRANSLATIONS } from "../../utils/test-fixtures";

const MENU_TRANSLATIONS = {
  ...TEST_TRANSLATIONS,
  es: {
    ...TEST_TRANSLATIONS.es,
    menu: { open: "Abrir menu", close: "Cerrar menu" },
  },
} as const;

/**
 * @description Pruebas unitarias de la molecula ResponsiveMenu.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("ResponsiveMenu", (): void => {
  it("muestra el boton de alternancia en el estado cerrado", (): void => {
    renderWithProviders(
      <ResponsiveMenu>
        <Navigation items={[{ label: "Inicio", href: "/" }]} />
      </ResponsiveMenu>,
      { translations: MENU_TRANSLATIONS },
    );

    const toggle = screen.getByRole("button");

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-label", "Abrir menu");
  });

  it("abre el panel al pulsar el boton", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(
      <ResponsiveMenu>
        <Navigation items={[{ label: "Inicio", href: "/" }]} />
      </ResponsiveMenu>,
      { translations: MENU_TRANSLATIONS },
    );

    await user.click(screen.getByRole("button"));

    await waitFor((): void => {
      expect(screen.getByText("Inicio")).toBeInTheDocument();
    });
  });

  it("actualiza aria-expanded al abrir y cerrar", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(
      <ResponsiveMenu>
        <Navigation items={[{ label: "Inicio", href: "/" }]} />
      </ResponsiveMenu>,
      { translations: MENU_TRANSLATIONS },
    );

    const toggle = screen.getByRole("button");
    await user.click(toggle);

    await waitFor((): void => {
      expect(toggle).toHaveAttribute("aria-expanded", "true");
    });

    await user.click(toggle);

    await waitFor((): void => {
      expect(toggle).toHaveAttribute("aria-expanded", "false");
    });
  });

  it("muestra el contenido en el panel abierto", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(
      <ResponsiveMenu>
        <Navigation items={[{ label: "Acerca de", href: "/about" }]} />
      </ResponsiveMenu>,
      { translations: MENU_TRANSLATIONS },
    );

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("link", { name: "Acerca de" })).toHaveAttribute(
      "href",
      "/about",
    );
  });

  it("actualiza la etiqueta accesible al abrir el menu", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(
      <ResponsiveMenu>
        <Navigation items={[{ label: "Inicio", href: "/" }]} />
      </ResponsiveMenu>,
      { translations: MENU_TRANSLATIONS },
    );

    const toggle = screen.getByRole("button");
    await user.click(toggle);

    await waitFor((): void => {
      expect(toggle).toHaveAttribute("aria-label", "Cerrar menu");
    });
  });

  it("permite alternar el menu mediante teclado", async (): Promise<void> => {
    const user = userEvent.setup();
    renderWithProviders(
      <ResponsiveMenu>
        <Navigation items={[{ label: "Inicio", href: "/" }]} />
      </ResponsiveMenu>,
      { translations: MENU_TRANSLATIONS },
    );

    await user.tab();
    await user.keyboard("{Enter}");

    await waitFor((): void => {
      expect(screen.getByText("Inicio")).toBeInTheDocument();
    });
  });

  it("no muestra el panel cuando esta cerrado", (): void => {
    renderWithProviders(
      <ResponsiveMenu>
        <Navigation items={[{ label: "Inicio", href: "/" }]} />
      </ResponsiveMenu>,
      { translations: MENU_TRANSLATIONS },
    );

    expect(screen.queryByText("Inicio")).not.toBeInTheDocument();
  });
});
