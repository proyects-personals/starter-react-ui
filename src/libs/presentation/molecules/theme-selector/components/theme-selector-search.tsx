import { ThemeSelectorSearchProps } from "@presentation";
import type { FC, JSX } from "react";

/**
 * @description Permite buscar temas por nombre o descripcion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeSelectorSearch: FC<ThemeSelectorSearchProps> = ({
  value,
  placeholder,
  onChange,
}): JSX.Element => {
  return (
    <label className="input input-bordered flex w-full items-center gap-2 rounded-xl">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4 opacity-60"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m16 16 4 4" strokeLinecap="round" />
      </svg>

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="grow"
      />
    </label>
  );
};

export default ThemeSelectorSearch;