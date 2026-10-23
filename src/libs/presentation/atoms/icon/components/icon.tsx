import type { FC, JSX } from "react";
import {
  getIconClasses,
  getIconHref,
  resolveIconSize,
} from "../utils/get-icon-href.util";
import type { IconProps } from "../types/icon.types";

/**
 * @description Icono adaptable al sprite de iconografia del proyecto.
 * Renderiza un SVG accesible que hereda el color del tema activo.
 * @example
 * <Icon name="menu" size={24} title={t("common.openMenu")} />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Icon: FC<IconProps> = ({
  name,
  size,
  className = "",
  title,
}): JSX.Element => {
  const classes = getIconClasses(className);
  const iconSize = resolveIconSize(size);

  return (
    <svg
      aria-hidden={title === undefined}
      className={classes}
      height={iconSize}
      role={title === undefined ? undefined : "img"}
      width={iconSize}
    >
      {title !== undefined && <title>{title}</title>}
      <use href={getIconHref(name)} />
    </svg>
  );
};

export default Icon;
