import type { NavigationItem } from "../../../molecules/navigation/types/navigation.types";

/**
 * @description Define las propiedades del logo dentro del Header generico.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface HeaderLogoConfig {
  readonly src: string;
  readonly alt: string;
  readonly href?: string;
  readonly width?: number;
  readonly height?: number;
}

/**
 * @description Define los textos traducibles configurables del Header.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface HeaderTranslations {
  readonly menuOpen?: string;
  readonly menuClose?: string;
  readonly navigationLabel?: string;
}

/**
 * @description Define las propiedades del Header generico configurables.
 * Permite mostrar u ocultar logo, navegacion, selector de tema y selector
 * de idioma de forma independiente.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface HeaderProps {
  readonly logo?: HeaderLogoConfig;
  readonly navigationItems?: readonly NavigationItem[];
  readonly showLogo?: boolean;
  readonly showNavigation?: boolean;
  readonly showThemeSelector?: boolean;
  readonly showLanguageSelector?: boolean;
  readonly translations?: HeaderTranslations;
  readonly additionalActions?: React.ReactNode;
  readonly className?: string;
}

/**
 * @description Define las propiedades del Header por composicion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface HeaderCompositionProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

/**
 * @description Define las propiedades de la seccion de acciones del Header.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface HeaderActionsProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

/**
 * @description Define las propiedades de la seccion principal del Header.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface HeaderBrandProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}
