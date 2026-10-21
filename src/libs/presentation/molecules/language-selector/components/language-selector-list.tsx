import { LANGUAGE_EMPTY_MESSAGE, LanguageSelectorItem, LanguageSelectorListProps } from "@presentation";
import type { FC, JSX } from "react";

/**
 * @description Renderiza la lista de idiomas disponibles.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LanguageSelectorList: FC<LanguageSelectorListProps> = ({
  languages,
  selectedLanguage,
  onSelect,
}): JSX.Element => {
  if (languages.length === 0) {
    return (
      <p
        className="px-4 py-6 text-center text-sm text-base-content/60"
        role="status"
      >
        {LANGUAGE_EMPTY_MESSAGE}
      </p>
    );
  }

  return (
    <ul
      aria-label="Idiomas disponibles"
      className="flex max-h-72 flex-col gap-1 overflow-y-auto p-1"
      role="listbox"
    >
      {languages.map((availableLanguage: string) => (
        <li key={availableLanguage} role="presentation">
          <LanguageSelectorItem
            isSelected={availableLanguage === selectedLanguage}
            language={availableLanguage}
            onSelect={onSelect}
          />
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelectorList;