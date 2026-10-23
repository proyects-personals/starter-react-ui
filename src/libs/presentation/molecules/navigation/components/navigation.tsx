import type { FC, JSX } from "react";
import { NavigationLink } from "./navigation-link";
import type { NavigationProps } from "../types/navigation.types";

/**
 * @description Barra de navegacion configurable con enlaces traducidos.
 * Se renderiza en horizontal en escritorio y en vertical en menus moviles.
 * @example
 * <Navigation
 *   items={[
 *     { label: t("navigation.home"), href: "/" },
 *     { label: t("navigation.about"), href: "/about" },
 *   ]}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Navigation: FC<NavigationProps> = ({
  items,
  ariaLabel = "Main navigation",
  orientation = "horizontal",
  className = "",
}): JSX.Element => {
  if (items.length === 0) {
    return <nav aria-label={ariaLabel} className={className} />;
  }

  return (
    <nav aria-label={ariaLabel} className={className}>
      <ul
        className={
          orientation === "horizontal"
            ? "flex flex-row items-center gap-1"
            : "flex flex-col items-stretch gap-1"
        }
      >
        {items.map((item) => (
          <li key={`${item.label}-${item.href}`}>
            <NavigationLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
