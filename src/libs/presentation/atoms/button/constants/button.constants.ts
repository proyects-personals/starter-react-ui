import type { ButtonSize, ButtonVariant } from "../types/button.types";

/**
 * @description Define las clases de DaisyUI por variante del boton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  neutral: "btn-neutral",
  ghost: "btn-ghost",
  link: "btn-link",
};

/**
 * @description Define las clases de DaisyUI por tamano del boton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

/**
 * @description Define las clases base compartidas por todos los botones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_BASE_CLASS = "btn";

/**
 * @description Define la clase que activa el estilo con borde.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_OUTLINED_CLASS = "btn-outline";

/**
 * @description Define la clase que expande el boton al ancho disponible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_FULL_WIDTH_CLASS = "w-full";

/**
 * @description Define la clase que muestra el indicador de carga.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_LOADING_CLASS = "loading";
