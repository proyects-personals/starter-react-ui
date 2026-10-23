import {
  ICON_BASE_CLASS,
  ICON_DEFAULT_SIZE,
  ICON_SPRITE_PATH,
} from "../constants/icon.constants";
import type { IconName } from "../types/icon.types";

/**
 * @description Obtiene la ruta del simbolo dentro del sprite de iconos.
 * @param name Nombre del icono.
 * @returns Ruta del fragmento del sprite.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getIconHref(name: IconName): string {
  return `${ICON_SPRITE_PATH}#${name}`;
}

/**
 * @description Compone las clases del icono con la clase base.
 * @param className Clases adicionales configuradas por el consumidor.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getIconClasses(className: string): string {
  return `${ICON_BASE_CLASS} ${className}`.trim();
}

/**
 * @description Resuelve el tamano efectivo del icono.
 * @param size Tamano configurado o undefined.
 * @returns Tamano en pixeles.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function resolveIconSize(size: number | undefined): number {
  return size ?? ICON_DEFAULT_SIZE;
}
