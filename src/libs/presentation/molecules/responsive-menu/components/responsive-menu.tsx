import type { FC, JSX } from "react";
import { useLanguage } from "@aplicacion";
import { ResponsiveMenuPanel } from "./responsive-menu-panel";
import { ResponsiveMenuToggle } from "./responsive-menu-toggle";
import { useResponsiveMenu } from "../hooks/use-responsive-menu.hook";
import { translateResponsiveMenuLabels } from "../utils/translate-responsive-menu-labels.util";
import type { ResponsiveMenuProps } from "../types/responsive-menu.types";

/**
 * @description Menu responsive que gestiona la navegacion en pantallas
 * pequenas y grandes. El contenido se muestra horizontal en escritorio
 * y dentro de un panel colapsable en movil.
 * @example
 * <ResponsiveMenu
 *   toggle={undefined}
 *   labels={{ open: "menu.open", close: "menu.close" }}
 * >
 *   <Navigation items={items} orientation="vertical" />
 * </ResponsiveMenu>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ResponsiveMenu: FC<ResponsiveMenuProps> = ({
  toggle,
  children,
  labels,
  className = "",
}): JSX.Element => {
  const { t } = useLanguage();
  const { isOpen, panelId, toggleMenu } = useResponsiveMenu();
  const menuLabels = translateResponsiveMenuLabels(labels, t);

  return (
    <div className={`w-full ${className}`.trim()}>
      {toggle ?? (
        <ResponsiveMenuToggle
          closeLabel={menuLabels.close}
          isOpen={isOpen}
          onToggle={toggleMenu}
          openLabel={menuLabels.open}
        />
      )}

      <ResponsiveMenuPanel id={panelId} isOpen={isOpen}>
        {children}
      </ResponsiveMenuPanel>
    </div>
  );
};

export default ResponsiveMenu;
