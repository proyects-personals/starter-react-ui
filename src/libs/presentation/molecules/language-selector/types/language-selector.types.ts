/**
 * @description Define las propiedades del selector de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface LanguageSelectorProps {
  readonly className?: string;
}

/**
 * @description Define las propiedades del activador del selector.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface LanguageSelectorTriggerProps {
  readonly language: string;
  readonly isOpen: boolean;
  readonly onClick: () => void;
}

/**
 * @description Define las propiedades del buscador de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface LanguageSelectorSearchProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

/**
 * @description Define las propiedades de la lista de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface LanguageSelectorListProps {
  readonly languages: readonly string[];
  readonly selectedLanguage: string;
  readonly onSelect: (language: string) => void;
}

/**
 * @description Define las propiedades de una opcion de idioma.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface LanguageSelectorItemProps {
  readonly language: string;
  readonly isSelected: boolean;
  readonly onSelect: (language: string) => void;
}

/**
 * @description Define el estado y las acciones del selector de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface UseLanguageSelectorResult {
  readonly language: string;
  readonly languages: readonly string[];
  readonly hasSearch: boolean;
  readonly isOpen: boolean;
  readonly searchQuery: string;
  readonly setSearchQuery: (value: string) => void;
  readonly toggleSelector: () => void;
  readonly closeSelector: () => void;
  readonly selectLanguage: (selectedLanguage: string) => void;
}
