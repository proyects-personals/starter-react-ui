import type { FC, JSX } from "react";
import { getLanguageName, type LanguageSelectorItemProps } from "@presentation";

/**
 * @description Renderiza una opcion individual de idioma.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LanguageSelectorItem: FC<LanguageSelectorItemProps> = ({
  language,
  isSelected,
  onSelect,
}): JSX.Element => {
  return (
    <button
      aria-selected={isSelected}
      className={`flex w-full items-center justify-between gap-3 rounded-lg p-3 text-left transition-colors hover:bg-base-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
        isSelected ? "bg-primary/10 text-primary" : ""
      }`}
      onClick={(): void => onSelect(language)}
      role="option"
      type="button"
    >
      <span className="flex min-w-0 flex-col">
        <span className="truncate font-medium">
          {getLanguageName(language)}
        </span>

        <span className="text-xs text-base-content/60">{language}</span>
      </span>

      {isSelected && (
        <svg
          aria-label="Idioma seleccionado"
          className="h-4 w-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5 12 4 4L19 6"
          />
        </svg>
      )}
    </button>
  );
};

export default LanguageSelectorItem;
