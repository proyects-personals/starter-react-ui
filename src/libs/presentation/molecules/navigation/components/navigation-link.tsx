import type { FC, JSX } from "react";
import { isExternalLink } from "../utils/is-external-link.util";
import type { NavigationLinkProps } from "../types/navigation.types";

/**
 * @description Renderiza un enlace individual de navegacion con soporte
 * para enlaces externos y atributos de seguridad.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const NavigationLink: FC<NavigationLinkProps> = ({
  item,
}): JSX.Element => {
  const external = isExternalLink(item);

  return (
    <a
      className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      href={item.href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {item.label}
    </a>
  );
};

export default NavigationLink;
