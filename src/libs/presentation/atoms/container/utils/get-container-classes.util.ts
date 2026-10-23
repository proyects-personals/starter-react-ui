import {
  CONTAINER_ALIGN_CLASSES,
  CONTAINER_BASE_CLASS,
  CONTAINER_DIRECTION_CLASSES,
  CONTAINER_GAP_CLASSES,
  CONTAINER_MAX_WIDTH_CLASSES,
  CONTAINER_PADDING_CLASSES,
} from "../constants/container.constants";
import type { ContainerClassOptions } from "../types/container.types";

/**
 * @description Compone las clases del contenedor segun su configuracion.
 * @param options Opciones de distribucion del contenedor.
 * @param options.maxWidth Ancho maximo del contenido.
 * @param options.align Alineacion de los elementos.
 * @param options.direction Direccion del flujo.
 * @param options.gap Espaciado entre elementos.
 * @param options.padding Relleno interior.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getContainerClasses(
  options: ContainerClassOptions & {
    readonly maxWidth: NonNullable<ContainerClassOptions["maxWidth"]>;
  },
): string {
  const classes: readonly string[] = [
    CONTAINER_BASE_CLASS,
    CONTAINER_MAX_WIDTH_CLASSES[options.maxWidth],
    CONTAINER_ALIGN_CLASSES[options.align],
    CONTAINER_DIRECTION_CLASSES[options.direction],
    CONTAINER_GAP_CLASSES[options.gap],
    CONTAINER_PADDING_CLASSES[options.padding],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
