import type { FC, JSX } from "react";
import {
  ThemeSelectorList,
  type ThemeSelectorPanelProps,
  ThemeSelectorSearch,
} from "@presentation";

/**
 * @description Renderiza el panel desplegable para seleccionar temas.
 * Se posiciona dinamicamente respecto al activador para permanecer
 * dentro del viewport en cualquier tamano de pantalla.
 * @author Steveen Cues
 * @version 1.8.0
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
  placement,
  onSearchChange,
  onSelectTheme,
  onClose,
}): JSX.Element => {
  const verticalClass =
    placement.vertical === "top" ? "bottom-full" : "top-full";
  const horizontalClass =
    placement.horizontal === "left" ? "left-0" : "right-0";
  const openUpwards = placement.vertical === "top";

  return (
    <div
      className={`
        absolute z-50 flex min-h-0 w-[min(20rem,calc(100vw-2rem))] flex-col
        overflow-hidden rounded-2xl border border-base-300
        bg-base-100 text-base-content shadow-xl
        ${verticalClass} ${horizontalClass}
        ${openUpwards ? "mb-2" : "mt-2"}
      `}
      style={{ maxHeight: placement.maxHeight }}
    >
      <div className="flex shrink-0 items-center justify-between gap-2 border-b border-base-300 p-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-base-content/60">
          {translations.title}
        </p>

        <button
          type="button"
          aria-label={translations.close}
          onClick={onClose}
          className="btn btn-circle btn-ghost btn-sm"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
          >
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {showSearch && (
        <div className="shrink-0 p-3 pt-1">
          <ThemeSelectorSearch
            value={search}
            placeholder={translations.searchPlaceholder}
            onChange={onSearchChange}
          />
        </div>
      )}

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
};

export default ThemeSelectorPanel;
