import type { HeaderTranslations } from "../types/header.types";
import { HEADER_DEFAULT_KEYS } from "../constants/header.constants";
import type { ResponsiveMenuLabels } from "../../../molecules/responsive-menu/types/responsive-menu.types";

/**
 * @description Resuelve una clave de traduccion configurable del Header.
 * @param key Clave configurada por el consumidor.
 * @param fallbackKey Clave por defecto.
 * @param translate Funcion de traduccion del contexto.
 * @returns Texto traducido.
 * @author Steveen Cues
 * @version 1.0.0
 */
function resolveHeaderLabel(
  key: string | undefined,
  fallbackKey: string,
  translate: (translationKey: string) => string,
): string {
  return translate(key ?? fallbackKey);
}

/**
 * @description Traduce los textos configurables del Header.
 * @param translations Claves configuradas por el consumidor.
 * @param translate Funcion de traduccion del contexto.
 * @returns Textos resueltos para el menu y la navegacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function translateHeaderLabels(
  translations: HeaderTranslations | undefined,
  translate: (translationKey: string) => string,
): ResponsiveMenuLabels & { readonly navigationLabel: string } {
  return {
    open: resolveHeaderLabel(
      translations?.menuOpen,
      HEADER_DEFAULT_KEYS.menuOpen,
      translate,
    ),
    close: resolveHeaderLabel(
      translations?.menuClose,
      HEADER_DEFAULT_KEYS.menuClose,
      translate,
    ),
    navigationLabel: resolveHeaderLabel(
      translations?.navigationLabel,
      HEADER_DEFAULT_KEYS.navigationLabel,
      translate,
    ),
  };
}
