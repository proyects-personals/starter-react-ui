import type { ResponsiveMenuTranslations } from "../types/responsive-menu.types";
import type { ResponsiveMenuLabels } from "../types/responsive-menu.types";
import { RESPONSIVE_MENU_DEFAULT_KEYS } from "../constants/responsive-menu.constants";

/**
 * @description Resuelve una clave de traduccion configurable del menu.
 * @param key Clave configurada por el consumidor.
 * @param fallbackKey Clave por defecto.
 * @param translate Funcion de traduccion del contexto.
 * @returns Texto traducido.
 * @author Steveen Cues
 * @version 1.0.0
 */
function resolveMenuLabel(
  key: string | undefined,
  fallbackKey: string,
  translate: (translationKey: string) => string,
): string {
  return translate(key ?? fallbackKey);
}

/**
 * @description Traduce los textos configurables del menu responsive.
 * @param translations Claves configuradas por el consumidor.
 * @param translate Funcion de traduccion del contexto.
 * @returns Textos resueltos para el boton y el panel.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function translateResponsiveMenuLabels(
  translations: ResponsiveMenuTranslations | undefined,
  translate: (translationKey: string) => string,
): ResponsiveMenuLabels {
  return {
    open: resolveMenuLabel(
      translations?.open,
      RESPONSIVE_MENU_DEFAULT_KEYS.open,
      translate,
    ),
    close: resolveMenuLabel(
      translations?.close,
      RESPONSIVE_MENU_DEFAULT_KEYS.close,
      translate,
    ),
  };
}
