/**
 * @description Define las propiedades del logo reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface LogoProps {
  readonly src: string;
  readonly alt: string;
  readonly href?: string;
  readonly width?: number;
  readonly height?: number;
  readonly className?: string;
  readonly imageClassName?: string;
}
