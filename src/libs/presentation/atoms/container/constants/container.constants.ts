import type { ContainerClassOptions } from "../types/container.types";

/**
 * @description Define las clases de ancho maximo por breakpoint.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CONTAINER_MAX_WIDTH_CLASSES: Record<
  NonNullable<ContainerClassOptions["maxWidth"]>,
  string
> = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  full: "max-w-full",
};

/**
 * @description Define las clases de alineacion del contenido.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CONTAINER_ALIGN_CLASSES: Record<
  ContainerClassOptions["align"],
  string
> = {
  start: "items-start justify-start",
  center: "items-center justify-center",
  end: "items-end justify-end",
  between: "items-center justify-between",
};

/**
 * @description Define las clases de direccion del contenido.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CONTAINER_DIRECTION_CLASSES: Record<
  ContainerClassOptions["direction"],
  string
> = {
  row: "flex-row",
  column: "flex-col",
};

/**
 * @description Define las clases de espaciado entre elementos.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CONTAINER_GAP_CLASSES: Record<
  ContainerClassOptions["gap"],
  string
> = {
  none: "",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-8",
};

/**
 * @description Define las clases de relleno interior del contenedor.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CONTAINER_PADDING_CLASSES: Record<
  ContainerClassOptions["padding"],
  string
> = {
  none: "",
  sm: "p-2",
  md: "p-4",
  lg: "p-8",
};

/**
 * @description Define la clase base compartida por todos los contenedores.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CONTAINER_BASE_CLASS = "mx-auto flex w-full";
