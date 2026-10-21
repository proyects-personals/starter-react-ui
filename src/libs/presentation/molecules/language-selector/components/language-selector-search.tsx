import { LANGUAGE_SEARCH_PLACEHOLDER, LanguageSelectorSearchProps } from "@presentation";
import type { ChangeEvent, FC, JSX } from "react";

/**
 * @description Renderiza el campo de búsqueda de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LanguageSelectorSearch: FC<LanguageSelectorSearchProps> = ({
  value,
  onChange,
}): JSX.Element => {
  /**
   * @description Propaga el texto introducido.
   * @param event - Evento de cambio del campo.
   */
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    onChange(event.currentTarget.value);
  }

  return (
    <label className="input input-bordered flex w-full items-center gap-2">
      <svg
        aria-hidden="true"
        className="h-4 w-4 shrink-0 opacity-60"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="11" cy="11" r="7" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16 16 4 4"
        />
      </svg>

      <input
        aria-label="Buscar idioma"
        autoComplete="off"
        className="grow"
        onChange={handleChange}
        placeholder={LANGUAGE_SEARCH_PLACEHOLDER}
        type="search"
        value={value}
      />
    </label>
  );
};

export default LanguageSelectorSearch;