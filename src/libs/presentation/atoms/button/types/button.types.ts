/**
 * @description Define las variantes visuales disponibles para el boton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ButtonVariant =
  "primary" | "secondary" | "accent" | "neutral" | "ghost" | "link";

/**
 * @description Define los tamanos disponibles para el boton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ButtonSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define las propiedades del boton reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ButtonProps {
  readonly children: React.ReactNode;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly type?: "button" | "submit" | "reset";
  readonly disabled?: boolean;
  readonly isLoading?: boolean;
  readonly isFullWidth?: boolean;
  readonly isOutlined?: boolean;
  readonly ariaLabel?: string;
  readonly className?: string;
  readonly onClick?: () => void;
}

/**
 * @description Define las opciones para resolver las clases del boton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ButtonClassOptions {
  readonly variant: ButtonVariant;
  readonly size: ButtonSize;
  readonly isOutlined: boolean;
  readonly isFullWidth: boolean;
  readonly isLoading: boolean;
}
