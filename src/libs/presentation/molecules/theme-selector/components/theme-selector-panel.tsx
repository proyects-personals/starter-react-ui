import type { FC, JSX } from "react";
import {
  ThemeSelectorList,
  type ThemeSelectorPanelProps,
  ThemeSelectorSearch,
} from "@presentation";

/**
 * @description Renderiza el panel desplegable para seleccionar temas.
 * Mantiene el ancho del selector y permite desplazarse por los temas.
 * @author Steveen Cues
 * @version 1.6.0
 */
export const ThemeSelectorPanel: FC<ThemeSelectorPanelProps> = ({
  themes,
  totalThemes,
  selectedTheme,
  search,
  showSearch,
  label,
  showDescriptions,
  translations,
  onSearchChange,
  onSelectTheme,
}): JSX.Element => (
  <div
    className="
      absolute left-0 top-full z-50 mt-2
      flex w-full max-h-[min(28rem,calc(100dvh-8rem))]
      min-h-0 flex-col overflow-hidden
      rounded-2xl border border-base-300
      bg-base-100 text-base-content shadow-xl
    "
  >
    <div className="shrink-0 border-b border-base-300 p-3">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-base-content/60">
        {translations.title}
      </p>

      {showSearch && (
        <ThemeSelectorSearch
          value={search}
          placeholder={translations.searchPlaceholder}
          onChange={onSearchChange}
        />
      )}
    </div>

    <ThemeSelectorList
      themes={themes}
      selectedTheme={selectedTheme}
      showDescriptions={showDescriptions}
      label={label}
      emptyMessage={translations.empty}
      onSelect={onSelectTheme}
    />

    <div className="shrink-0 border-t border-base-300 px-3 py-2">
      <p className="text-xs text-base-content/50">
        {themes.length} {translations.of} {totalThemes} {translations.results}
      </p>
    </div>
  </div>
);

export default ThemeSelectorPanel;
