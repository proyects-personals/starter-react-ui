/**
 * @description Define los nombres de iconos disponibles en el sprite del
 * proyecto. Los nombres corresponden a los simbolos de public/icons.svg.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type IconName = string;

/**
 * @description Define las propiedades del icono reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IconProps {
  readonly name: IconName;
  readonly size?: number;
  readonly className?: string;
  readonly title?: string;
}

/**
 * @description Define las opciones para resolver las clases del icono.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IconClassOptions {
  readonly className: string;
}
