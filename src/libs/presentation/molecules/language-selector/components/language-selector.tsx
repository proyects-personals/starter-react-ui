import { useEffect, useRef, type FC, type JSX } from "react";
import { LANGUAGE_SELECTOR_LABEL, LanguageSelectorList, LanguageSelectorProps, LanguageSelectorSearch, LanguageSelectorTrigger, useLanguageSelector } from "@presentation";


/**
 * @description Permite buscar y seleccionar idiomas disponibles.
 * @author Steveen Cues
 * @version 1.0.0
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

  useEffect((): (() => void) => {
    /**
     * @description Cierra el selector al hacer clic fuera.
     * @param event - Evento del documento.
     */
    function handleOutsideClick(event: MouseEvent): void {
      const target = event.target;

      if (
        target instanceof Node &&
        !containerRef.current?.contains(target)
      ) {
        closeSelector();
      }
    }

    /**
     * @description Cierra el selector con Escape.
     * @param event - Evento de teclado.
     */
    function handleEscape(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        closeSelector();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return (): void => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeSelector]);

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