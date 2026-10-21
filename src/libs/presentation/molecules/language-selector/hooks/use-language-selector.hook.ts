import { useMemo, useState } from "react";
import { useLanguage } from "@aplicacion";
import {
  filterLanguages,
  LANGUAGE_SEARCH_THRESHOLD,
  type UseLanguageSelectorResult,
} from "@presentation";

/**
 * @description Administra el estado del selector de idiomas.
 * @author Steveen Cues
 * @version 1.1.0
 */
export function useLanguageSelector(): UseLanguageSelectorResult {
  const { language, languages, setLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const hasSearch: boolean = languages.length > LANGUAGE_SEARCH_THRESHOLD;

  const filteredLanguages = useMemo(
    (): readonly string[] => filterLanguages(languages, searchQuery),
    [languages, searchQuery],
  );

  /**
   * @description Alterna la visibilidad del selector.
   */
  function toggleSelector(): void {
    setIsOpen((previousValue: boolean): boolean => !previousValue);
  }

  /**
   * @description Cierra el selector y limpia la busqueda.
   */
  function closeSelector(): void {
    setIsOpen(false);
    setSearchQuery("");
  }

  /**
   * @description Selecciona un idioma y cierra el selector.   * @param selectedLanguage - Codigo del idioma seleccionado.
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
