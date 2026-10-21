import type { Dispatch, SetStateAction } from "react";

/**
 * @description Cierra el selector y limpia el texto de busqueda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const closeThemeSelector = (
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  setSearch: Dispatch<SetStateAction<string>>,
): void => {
  setIsOpen(false);
  setSearch("");
};
