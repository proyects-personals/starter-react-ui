import { useMemo, useState } from "react";
import { useLanguage } from "@aplicacion";
import { filterLanguages, LANGUAGE_SEARCH_THRESHOLD } from "@presentation";

/**
 * @description Administra el estado del selector de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useLanguageSelector() {
  const { language, languages, setLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const hasSearch: boolean = languages.length > LANGUAGE_SEARCH_THRESHOLD;

  const filteredLanguages = useMemo(
    () => filterLanguages(languages, searchQuery),
    [languages, searchQuery],
  );

  /**
   * @description Alterna la visibilidad del selector.
   */
  function toggleSelector(): void {
    setIsOpen((previousValue: boolean): boolean => !previousValue);
  }

  /**
   * @description Cierra el selector y limpia la búsqueda.
   */
  function closeSelector(): void {
    setIsOpen(false);
    setSearchQuery("");
  }

  /**
   * @description Selecciona un idioma y cierra el selector.
   * @param selectedLanguage - Código del idioma seleccionado.
   */
  function selectLanguage(selectedLanguage: string): void {
    if (selectedLanguage === language) {
      closeSelector();
      return;
    }

    setLanguage(selectedLanguage);
    closeSelector();
  }

  return {
    language,
    languages: filteredLanguages,
    hasSearch,
    isOpen,
    searchQuery,
    setSearchQuery,
    toggleSelector,
    closeSelector,
    selectLanguage,
  };
}