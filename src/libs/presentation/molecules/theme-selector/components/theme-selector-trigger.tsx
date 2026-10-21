import { ThemeSelectorTriggerProps } from "@presentation";
import type { FC, JSX } from "react";

/**
 * @description Muestra el tema activo y controla la apertura del selector.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeSelectorTrigger: FC<ThemeSelectorTriggerProps> = ({
  theme,
  isOpen,
  onToggle,
}): JSX.Element => {
  return (
    <button
      type="button"
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      onClick={onToggle}
      className="flex w-full items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-3 text-left shadow-sm transition hover:border-primary/50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span
        data-theme={theme.name}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-content shadow-sm"
      >
        <span className="text-lg font-bold">
          {theme.manifest.name.charAt(0).toUpperCase()}
        </span>
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate font-semibold text-base-content">
          {theme.manifest.name}
        </span>
        <span className="block text-xs text-base-content/60">
          Tema seleccionado
        </span>
      </span>

      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={`h-5 w-5 shrink-0 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

export default ThemeSelectorTrigger