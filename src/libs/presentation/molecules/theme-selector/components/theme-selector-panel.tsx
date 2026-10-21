import { ThemeSelectorList, ThemeSelectorPanelProps, ThemeSelectorSearch } from "@presentation";
import type { FC, JSX } from "react";

/**
 * @description Renderiza el panel desplegable para seleccionar temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeSelectorPanel: FC<ThemeSelectorPanelProps> = ({
  themes,
  totalThemes,
  selectedTheme,
  search,
  showSearch,
  placeholder,
  label,
  showDescriptions,
  onSearchChange,
  onSelectTheme,
}): JSX.Element => (
  <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-xl">
    <div className="border-b border-base-300 p-3">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-base-content/60">
        Selecciona un tema
      </p>

      {showSearch && (
        <ThemeSelectorSearch
          value={search}
          placeholder={placeholder}
          onChange={onSearchChange}
        />
      )}
    </div>

    <ThemeSelectorList
      themes={themes}
      selectedTheme={selectedTheme}
      showDescriptions={showDescriptions}
      label={label}
      onSelect={onSelectTheme}
    />

    <div className="border-t border-base-300 px-3 py-2">
      <p className="text-xs text-base-content/50">
        {themes.length} de {totalThemes} temas
      </p>
    </div>
  </div>
);

export default ThemeSelectorPanel;