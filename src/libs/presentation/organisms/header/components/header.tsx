import type { FC, JSX } from "react";
import {
  Container,
  Logo,
  ResponsiveMenuToggle,
  ResponsiveMenuPanel,
  type HeaderLogoConfig,
} from "@presentation";
import { HeaderSelectors } from "./header-selectors";
import { useResponsiveMenu } from "../../../molecules/responsive-menu/hooks/use-responsive-menu.hook";
import { useHeaderNavigation } from "../hooks/use-header-navigation.hook";
import type { HeaderProps } from "../types/header.types";

/**
 * @description Define la configuracion resuelta del Header.
 * @author Steveen Cues
 * @version 1.1.0
 */
interface ResolvedHeaderConfig {
  readonly logo: HeaderLogoConfig | undefined;
  readonly showLogo: boolean;
  readonly showThemeSelector: boolean;
  readonly showLanguageSelector: boolean;
  readonly className: string;
}

/**
 * @description Renderiza la marca del Header cuando esta configurada.
 * @param logo Configuracion del logo.
 * @returns Logo listo para renderizar o null.
 * @author Steveen Cues
 * @version 1.1.0
 */
function renderBrand(logo: HeaderLogoConfig | undefined): JSX.Element | null {
  if (logo === undefined) {
    return null;
  }

  return (
    <Logo
      alt={logo.alt}
      height={logo.height}
      href={logo.href}
      src={logo.src}
      width={logo.width}
    />
  );
}

/**
 * @description Renderiza la marca visible del Header.
 * @param config Configuracion resuelta del Header.
 * @returns Marca lista para renderizar o null.
 * @author Steveen Cues
 * @version 1.1.0
 */
function renderVisibleBrand(config: ResolvedHeaderConfig): JSX.Element | null {
  if (!config.showLogo) {
    return null;
  }

  return renderBrand(config.logo);
}

/**
 * @description Encabezado generico configurable. Permite mostrar u ocultar
 * el logo, la navegacion, el selector de tema y el selector de idioma de
 * forma independiente, con menu responsive e integracion de traduccion.
 * @example
 * <Header
 *   logo={{ src: "/logo.svg", alt: t("common.brandAlt"), href: "/" }}
 *   navigationItems={[
 *     { label: t("navigation.home"), href: "/" },
 *     { label: t("navigation.about"), href: "/about" },
 *   ]}
 *   showThemeSelector={true}
 *   showLanguageSelector={true}
 * />
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Header: FC<HeaderProps> = (props): JSX.Element => {
  const config: ResolvedHeaderConfig = {
    logo: props.logo,
    showLogo: props.showLogo ?? true,
    showThemeSelector: props.showThemeSelector ?? true,
    showLanguageSelector: props.showLanguageSelector ?? true,
    className: props.className ?? "",
  };

  const { isOpen, panelId, toggleMenu, closeMenu } = useResponsiveMenu();
  const { desktop, mobile, labels } = useHeaderNavigation({
    items: props.navigationItems ?? [],
    showNavigation: props.showNavigation ?? true,
    translations: props.translations,
  });

  const selectors = (
    <HeaderSelectors
      additionalActions={props.additionalActions}
      showLanguageSelector={config.showLanguageSelector}
      showThemeSelector={config.showThemeSelector}
    />
  );

  const brand = renderVisibleBrand(config);

  return (
    <header
      className={`border-b border-base-300 bg-base-100 ${config.className}`.trim()}
    >
      <Container maxWidth="xl" align="between" padding="md" gap="sm">
        <div className="flex items-center gap-2">
          {brand}

          {desktop}
        </div>

        <div className="hidden md:block">{selectors}</div>

        <ResponsiveMenuToggle
          closeLabel={labels.close}
          isOpen={isOpen}
          onToggle={toggleMenu}
          openLabel={labels.open}
        />
      </Container>

      <ResponsiveMenuPanel id={panelId} isOpen={isOpen}>
        {mobile !== null && (
          <div onClick={closeMenu} role="presentation">
            {mobile}
          </div>
        )}

        <div
          className="flex flex-col gap-2"
          onClick={closeMenu}
          role="presentation"
        >
          {selectors}
        </div>
      </ResponsiveMenuPanel>
    </header>
  );
};

export default Header;
