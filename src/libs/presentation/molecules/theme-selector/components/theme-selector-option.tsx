import type { FC, JSX } from "react";

import { useLanguage } from "@aplicacion";
import { type ThemeSelectorOptionProps } from "@presentation";

/**
 * @description Representa una opcion individual del selector de temas.
 * @author Steveen Cues
 * @version 1.2.0
 */
export const ThemeSelectorOption: FC<ThemeSelectorOptionProps> = ({
  theme,
  isSelected,
  showDescription,
  onSelect,
}): JSX.Element => {
  const { t } = useLanguage();

  const themeName = t(theme.manifest.name);
  const themeDescription = t(theme.manifest.description);

  return (
    <button
      type="button"
      role="option"
      aria-selected={isSelected}
      onClick={() => onSelect(theme.name)}
      className={`flex w-full items-center gap-3 rounded-xl p-2.5 text-left transition sm:p-3 ${
        isSelected
          ? "bg-primary/10 text-primary"
          : "text-base-content hover:bg-base-200"
      }`}
    >
      <span
        data-theme={theme.name}
        className="flex h-9 w-9 shrink-0 items-center justify-center gap-1 overflow-hidden rounded-xl border border-base-300 bg-base-100 p-1 sm:h-10 sm:w-10"
      >
        <span className="h-full w-2 rounded-full bg-primary" />
        <span className="h-full w-2 rounded-full bg-secondary" />
        <span className="h-full w-2 rounded-full bg-accent" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold">
          {themeName}
        </span>

        {showDescription && (
          <span className="mt-0.5 line-clamp-1 text-xs text-base-content/60">
            {themeDescription}
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
  );
};

export default ThemeSelectorOption;
