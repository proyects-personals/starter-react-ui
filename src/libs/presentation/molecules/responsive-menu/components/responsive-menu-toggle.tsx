import type { FC, JSX } from "react";
import type { ResponsiveMenuToggleProps } from "../types/responsive-menu.types";

/**
 * @description Boton que alterna la visibilidad del menu movil con
 * atributos accesibles y icono animado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ResponsiveMenuToggle: FC<ResponsiveMenuToggleProps> = ({
  isOpen,
  openLabel,
  closeLabel,
  onToggle,
}): JSX.Element => {
  const label = isOpen ? closeLabel : openLabel;

  return (
    <button
      aria-controls="responsive-menu-panel"
      aria-expanded={isOpen}
      aria-label={label}
      className="btn btn-ghost btn-sm md:hidden"
      onClick={onToggle}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            d="M18 6 6 18M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
};

export default ResponsiveMenuToggle;
