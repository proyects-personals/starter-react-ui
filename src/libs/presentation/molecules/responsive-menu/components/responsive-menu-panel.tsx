import type { FC, JSX } from "react";
import type { ResponsiveMenuPanelProps } from "../types/responsive-menu.types";

/**
 * @description Panel colapsable que muestra el contenido del menu en
 * pantallas pequenas. Se oculta por completo en escritorio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ResponsiveMenuPanel: FC<ResponsiveMenuPanelProps> = ({
  isOpen,
  children,
  id,
}): JSX.Element => {
  if (!isOpen) {
    return <></>;
  }

  return (
    <div
      className="w-full border-t border-base-300 bg-base-100 md:hidden"
      id={id}
    >
      <div className="flex flex-col gap-2 p-4">{children}</div>
    </div>
  );
};

export default ResponsiveMenuPanel;
