import type { FC, JSX } from "react";
import {
  type ThemeSelectorListProps,
  ThemeSelectorOption,
} from "@presentation";

/**
 * @description Renderiza la lista desplazable de temas disponibles.
 * @author Steveen Cues
 * @version 1.4.0
 */
export const ThemeSelectorList: FC<ThemeSelectorListProps> = ({
  themes,
  selectedTheme,
  showDescriptions,
  label,
  emptyMessage,
  onSelect,
}): JSX.Element => {
  if (themes.length === 0) {
    return (
      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        <p className="py-8 text-center text-sm text-base-content/60">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <ul
      role="listbox"
      aria-label={label}
      className="
        min-h-0 flex-1 space-y-1
        overflow-x-hidden overflow-y-auto overscroll-contain p-2
      "
    >
      {themes.map((availableTheme) => (
        <li key={availableTheme.name}>
          <ThemeSelectorOption
            theme={availableTheme}
            isSelected={availableTheme.name === selectedTheme}
            showDescription={showDescriptions}
            onSelect={onSelect}
          />
        </li>
      ))}
    </ul>
  );
};

export default ThemeSelectorList;
