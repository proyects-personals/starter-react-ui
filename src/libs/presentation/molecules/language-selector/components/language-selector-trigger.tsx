import {
  getLanguageName,
  type LanguageSelectorTriggerProps,
} from "@presentation";
import type { FC, JSX } from "react";

/**
 * @description Renderiza el activador del selector de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LanguageSelectorTrigger: FC<LanguageSelectorTriggerProps> = ({
  language,
  isOpen,
  onClick,
}): JSX.Element => {
  return (
    <button
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-label="Seleccionar idioma"
      className="btn btn-ghost flex w-full items-center justify-between gap-3"
      onClick={onClick}
      type="button"
    >
      <span className="flex min-w-0 items-center gap-3">
        <svg
          aria-hidden="true"
          className="h-5 w-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"
          />
        </svg>

        <span className="truncate">{getLanguageName(language)}</span>
      </span>

      <svg
        aria-hidden="true"
        className={`h-4 w-4 shrink-0 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
};

export default LanguageSelectorTrigger;
