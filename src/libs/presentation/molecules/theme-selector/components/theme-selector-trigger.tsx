import type { FC, JSX } from "react";

import { useLanguage } from "@aplicacion";
import { type ThemeSelectorTriggerProps } from "@presentation";

/**
 * @description Muestra el tema activo y controla la apertura del selector.
 * Renderiza una pastilla compacta que se adapta a headers y ajusta su
 * tamano en cada breakpoint.
 * @author Steveen Cues
 * @version 1.4.0
 */
export const ThemeSelectorTrigger: FC<ThemeSelectorTriggerProps> = ({
  theme,
  isOpen,
  selectedLabel,
  onToggle,
}): JSX.Element => {
  const { t } = useLanguage();
  const themeName = t(theme.manifest.name);

  return (
    <button
      type="button"
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      onClick={onToggle}
      className="flex w-full items-center gap-2 rounded-full border border-base-300 bg-base-100 py-1.5 pl-1.5 pr-2.5 text-left shadow-sm transition hover:border-primary/50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:gap-3 sm:py-2 sm:pl-2 sm:pr-3.5"
    >
      <span
        data-theme={theme.name}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-content shadow-sm sm:h-10 sm:w-10"
      >
        <span className="text-sm font-bold sm:text-lg">
          {themeName.charAt(0).toUpperCase()}
        </span>
      </span>

      <span className="min-w-0 flex-1">
        <span className="block max-w-[7rem] truncate font-semibold text-base-content sm:max-w-[12rem]">
          {themeName}
        </span>

        <span className="hidden text-xs text-base-content/60 md:block">
          {selectedLabel}
        </span>
      </span>

      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={`h-4 w-4 shrink-0 transition-transform sm:h-5 sm:w-5 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

export default ThemeSelectorTrigger;
