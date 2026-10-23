import type { FC, JSX } from "react";
import { getContainerClasses } from "../utils/get-container-classes.util";
import type { ContainerProps } from "../types/container.types";

/**
 * @description Contenedor que controla el ancho, la distribucion y el
 * espaciado del contenido con enfoque mobile-first.
 * @example
 * <Container maxWidth="lg" align="between" padding="md">
 *   <Logo src="/logo.svg" alt={t("common.brandAlt")} />
 *   <Navigation items={items} />
 * </Container>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Container: FC<ContainerProps> = ({
  children,
  maxWidth = "xl",
  align = "between",
  direction = "row",
  gap = "md",
  padding = "md",
  className = "",
  as = "div",
}): JSX.Element => {
  const classes = getContainerClasses({
    maxWidth,
    align,
    direction,
    gap,
    padding,
  });

  const Tag = as;

  return <Tag className={`${classes} ${className}`.trim()}>{children}</Tag>;
};

export default Container;
