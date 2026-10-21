import type { FC, ButtonHTMLAttributes } from "react";
import { useLanguage } from "@aplicacion";

/**
 * @description Boton de prueba con DaisyUI y traduccion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface TestButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly label?: string;
}

/**
 * @description Renderiza un boton adaptable al tema activo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Button: FC<TestButtonProps> = ({
  label,
  className = "",
  ...props
}) => {
  const { t } = useLanguage();

  return (
    <button
      {...props}
      type={props.type ?? "button"}
      className={`btn btn-primary ${className}`}
    >
      {label ?? t("common.button")}
    </button>
  );
};

export default Button;
