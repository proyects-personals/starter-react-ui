import type { FC, JSX } from "react";
import { getButtonClasses } from "../utils/get-button-classes.util";
import type { ButtonProps } from "../types/button.types";

/**
 * @description Define las propiedades visuales resueltas del boton.
 * @author Steveen Cues
 * @version 1.0.2
 */
interface ButtonViewProps {
  readonly children: React.ReactNode;
  readonly variant: ButtonProps["variant"];
  readonly size: ButtonProps["size"];
  readonly type: ButtonProps["type"];
  readonly disabled: boolean;
  readonly isLoading: boolean;
  readonly isFullWidth: boolean;
  readonly isOutlined: boolean;
  readonly ariaLabel: string | undefined;
  readonly className: string;
  readonly onClick: (() => void) | undefined;
}

/**
 * @description Renderiza el boton con las propiedades ya resueltas.
 * @param props Propiedades del boton.
 * @param props.children Contenido del boton.
 * @param props.variant Variante visual del boton.
 * @param props.size Tamano del boton.
 * @param props.type Tipo del elemento button.
 * @param props.disabled Indica si el boton esta deshabilitado.
 * @param props.isLoading Indica si muestra el indicador de carga.
 * @param props.isFullWidth Indica si ocupa todo el ancho disponible.
 * @param props.isOutlined Indica si usa el estilo con borde.
 * @param props.ariaLabel Etiqueta accesible del boton.
 * @param props.className Clases adicionales configuradas.
 * @param props.onClick Callback ejecutado al hacer clic.
 * @returns Boton listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.2
 */
function ButtonView({
  children,
  variant,
  size,
  type,
  disabled,
  isLoading,
  isFullWidth,
  isOutlined,
  ariaLabel,
  className,
  onClick,
}: ButtonViewProps): JSX.Element {
  const classes = getButtonClasses({
    variant: variant ?? "primary",
    size: size ?? "md",
    isOutlined: isOutlined,
    isFullWidth: isFullWidth,
    isLoading: isLoading,
  });

  const isDisabled = disabled || isLoading;

  return (
    <button
      aria-busy={isLoading}
      aria-label={ariaLabel}
      className={`${classes} ${className}`.trim()}
      disabled={isDisabled}
      onClick={onClick}
      type={type ?? "button"}
    >
      {isLoading ? <span className="sr-only">{children}</span> : children}
    </button>
  );
}

/**
 * @description Boton reutilizable con variantes visuales, tamanos, estado
 * de carga y accesibilidad integrada mediante DaisyUI.
 * @param props Propiedades del boton.
 * @param props.children Contenido del boton.
 * @param props.variant Variante visual del boton.
 * @param props.size Tamano del boton.
 * @param props.type Tipo del elemento button.
 * @param props.disabled Indica si el boton esta deshabilitado.
 * @param props.isLoading Indica si muestra el indicador de carga.
 * @param props.isFullWidth Indica si ocupa todo el ancho disponible.
 * @param props.isOutlined Indica si usa el estilo con borde.
 * @param props.ariaLabel Etiqueta accesible del boton.
 * @param props.className Clases adicionales configuradas.
 * @param props.onClick Callback ejecutado al hacer clic.
 * @returns Boton listo para renderizar.
 * @example
 * <Button variant="primary" size="md" onClick={handleSave}>
 *   {t("common.save")}
 * </Button>
 * @author Steveen Cues
 * @version 1.0.2
 */
export const Button: FC<ButtonProps> = (props): JSX.Element => {
  return (
    <ButtonView
      ariaLabel={props.ariaLabel}
      className={props.className ?? ""}
      disabled={props.disabled ?? false}
      isLoading={props.isLoading ?? false}
      isFullWidth={props.isFullWidth ?? false}
      isOutlined={props.isOutlined ?? false}
      onClick={props.onClick}
      size={props.size}
      type={props.type}
      variant={props.variant}
    >
      {props.children}
    </ButtonView>
  );
};

export default Button;
