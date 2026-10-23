import type { JSX } from "react";
import { useLanguage } from "@aplicacion";
import { Navigation, type NavigationItem } from "@presentation";
import { translateHeaderLabels } from "../utils/translate-header-labels.util";
import type { HeaderTranslations } from "../types/header.types";

/**
 * @description Define las propiedades de la vista de navegacion del Header.
 * @author Steveen Cues
 * @version 1.1.0
 */
interface HeaderNavigationProps {
  readonly items: readonly NavigationItem[];
  readonly showNavigation: boolean;
  readonly translations: HeaderTranslations | undefined;
}

/**
 * @description Define la navegacion resuelta del Header.
 * @author Steveen Cues
 * @version 1.1.0
 */
export interface HeaderNavigationResult {
  readonly desktop: JSX.Element | null;
  readonly mobile: JSX.Element | null;
  readonly labels: ReturnType<typeof translateHeaderLabels>;
}

/**
 * @description Resuelve la navegacion de escritorio y movil del Header.
 * Devuelve null en cada vista cuando la navegacion esta oculta.
 * @param props Configuracion de la navegacion.
 * @param props.items Elementos de navegacion configurados.
 * @param props.showNavigation Indica si la navegacion esta visible.
 * @param props.translations Claves de traduccion configuradas.
 * @returns Navegacion de escritorio y movil o null.
 * @author Steveen Cues
 * @version 1.1.0
 */
export function useHeaderNavigation({
  items,
  showNavigation,
  translations,
}: HeaderNavigationProps): HeaderNavigationResult {
  const { t } = useLanguage();
  const labels = translateHeaderLabels(translations, t);

  if (!showNavigation || items.length === 0) {
    return { desktop: null, mobile: null, labels };
  }

  const desktop: JSX.Element = (
    <div className="hidden md:flex">
      <Navigation items={items} ariaLabel={labels.navigationLabel} />
    </div>
  );

  const mobile: JSX.Element = (
    <Navigation
      items={items}
      ariaLabel={labels.navigationLabel}
      orientation="vertical"
    />
  );

  return { desktop, mobile, labels };
}
