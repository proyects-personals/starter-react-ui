import {
  BUTTON_BASE_CLASS,
  BUTTON_FULL_WIDTH_CLASS,
  BUTTON_LOADING_CLASS,
  BUTTON_OUTLINED_CLASS,
  BUTTON_SIZE_CLASSES,
  BUTTON_VARIANT_CLASSES,
} from "../constants/button.constants";
import type { ButtonClassOptions } from "../types/button.types";

/**
 * @description Compone las clases del boton segun su configuracion.
 * @param options Opciones visuales del boton.
 * @param options.variant Variante visual.
 * @param options.size Tamano del boton.
 * @param options.isOutlined Indica si usa el estilo con borde.
 * @param options.isFullWidth Indica si ocupa todo el ancho disponible.
 * @param options.isLoading Indica si muestra el indicador de carga.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getButtonClasses(options: ButtonClassOptions): string {
  const classes: readonly string[] = [
    BUTTON_BASE_CLASS,
    BUTTON_VARIANT_CLASSES[options.variant],
    BUTTON_SIZE_CLASSES[options.size],
    options.isOutlined ? BUTTON_OUTLINED_CLASS : "",
    options.isFullWidth ? BUTTON_FULL_WIDTH_CLASS : "",
    options.isLoading ? BUTTON_LOADING_CLASS : "",
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
