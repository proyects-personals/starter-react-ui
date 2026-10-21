import type { FC, JSX } from "react";
import { ThemeSelectorOption } from "./theme-selector-option";
import type { ThemeSelectorListProps } from "./theme-selector.types";

/**
 * @description Renderiza las opciones disponibles y el estado vacio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeSelectorList: FC<ThemeSelectorListProps> = ({
  themes,
  selectedTheme,
  showDescriptions,
  label,
  onSelect,
}): JSX.Element => {
  return (
    <ul
      role="listbox"
      aria-label={label}
      className="max-h-72 space-y-1 overflow-y-auto p-2"
    >
      {themes.map((availableTheme) => (
        <ThemeSelectorOption
          key={availableTheme.name}
          theme={availableTheme}
          isSelected={availableTheme.name === selectedTheme}
          showDescription={showDescriptions}
          onSelect={onSelect}
        />
      ))}

      {themes.length === 0 && (
        <li className="px-3 py-8 text-center text-sm text-base-content/60">
          No se encontraron temas.
        </li>
      )}
    </ul>
  );
};
