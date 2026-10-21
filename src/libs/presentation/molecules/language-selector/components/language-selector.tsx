import { useRef, type FC, type JSX } from "react";
import {
  LANGUAGE_SELECTOR_LABEL,
  LanguageSelectorList,
  type LanguageSelectorProps,
  LanguageSelectorSearch,
  LanguageSelectorTrigger,
  useLanguageSelector,
  useLanguageSelectorEvents,
} from "@presentation";

/**
 * @description Permite buscar y seleccionar idiomas disponibles.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const LanguageSelector: FC<LanguageSelectorProps> = ({
  className = "",
}): JSX.Element => {
  const {
    language,
    languages,
    hasSearch,
    isOpen,
    searchQuery,
    setSearchQuery,
    toggleSelector,
    closeSelector,
    selectLanguage,
  } = useLanguageSelector();

  const containerRef = useRef<HTMLDivElement>(null);

  useLanguageSelectorEvents(containerRef, closeSelector);

  return (
    <div
      className={`relative w-full min-w-0 ${className}`.trim()}
      ref={containerRef}
    >
      <span className="mb-2 block text-sm font-medium">
        {LANGUAGE_SELECTOR_LABEL}
      </span>

      <LanguageSelectorTrigger
        isOpen={isOpen}
        language={language}
        onClick={toggleSelector}
      />

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-full min-w-0 rounded-box border border-base-300 bg-base-100 p-2 text-base-content shadow-xl sm:min-w-64">
          {hasSearch && (
            <div className="p-1">
              <LanguageSelectorSearch
                onChange={setSearchQuery}
                value={searchQuery}
              />
            </div>
          )}

          <LanguageSelectorList
            languages={languages}
            onSelect={selectLanguage}
            selectedLanguage={language}
          />
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
