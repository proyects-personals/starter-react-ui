import type { FC, JSX } from "react";
import type { ThemeSelectorOptionProps } from "./theme-selector.types";

/**
 * @description Representa una opcion individual del selector de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeSelectorOption: FC<ThemeSelectorOptionProps> = ({
  theme,
  isSelected,
  showDescription,
  onSelect,
}): JSX.Element => {
  return (
    <li>
      <button
        type="button"
        role="option"
        aria-selected={isSelected}
        onClick={() => onSelect(theme.name)}
        className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
          isSelected
            ? "bg-primary/10 text-primary"
            : "text-base-content hover:bg-base-200"
        }`}
      >
        <span
          data-theme={theme.name}
          className="flex h-10 w-10 shrink-0 items-center justify-center gap-1 overflow-hidden rounded-xl border border-base-300 bg-base-100 p-1"
        >
          <span className="h-full w-2 rounded-full bg-primary" />
          <span className="h-full w-2 rounded-full bg-secondary" />
          <span className="h-full w-2 rounded-full bg-accent" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold">
            {theme.manifest.name}
          </span>

          {showDescription && (
            <span className="mt-0.5 block truncate text-xs text-base-content/60">
              {theme.manifest.description}
            </span>
          )}
        </span>

        {isSelected && (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="h-5 w-5 shrink-0"
          >
            <path
              d="m5 12 4 4L19 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </li>
  );
};
