/**
 * @description Define las claves de traduccion por defecto del menu.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RESPONSIVE_MENU_DEFAULT_KEYS = {
  open: "menu.open",
  close: "menu.close",
} as const;

/**
 * @description Define el prefijo de los identificadores del panel movil.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RESPONSIVE_MENU_PANEL_ID_PREFIX = "responsive-menu-panel";

/**
 * @description Define un contador incremental para generar identificadores
 * unicos de panel en cada instancia del menu.
 * @author Steveen Cues
 * @version 1.0.0
 */
let responsiveMenuInstanceCount = 0;

/**
 * @description Genera un identificador unico para el panel del menu.
 * @returns Identificador basado en el contador de instancias.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function createResponsiveMenuPanelId(): string {
  responsiveMenuInstanceCount += 1;

  return `${RESPONSIVE_MENU_PANEL_ID_PREFIX}-${responsiveMenuInstanceCount}`;
}
