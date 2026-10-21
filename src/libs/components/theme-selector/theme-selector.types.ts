import type { AppTheme } from "@domain";

/**
 * @description Define las propiedades del selector de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorProps {
  readonly label?: string;
  readonly placeholder?: string;
  readonly className?: string;
  readonly showDescriptions?: boolean;
}

/**
 * @description Define las propiedades del boton desplegable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorTriggerProps {
  readonly theme: AppTheme;
  readonly isOpen: boolean;
  readonly onToggle: () => void;
}

/**
 * @description Define las propiedades del buscador de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorSearchProps {
  readonly value: string;
  readonly placeholder: string;
  readonly onChange: (value: string) => void;
}

/**
 * @description Define las propiedades de una opcion de tema.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorOptionProps {
  readonly theme: AppTheme;
  readonly isSelected: boolean;
  readonly showDescription: boolean;
  readonly onSelect: (themeName: string) => void;
}

/**
 * @description Define las propiedades de la lista de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorListProps {
  readonly themes: readonly AppTheme[];
  readonly selectedTheme: string;
  readonly showDescriptions: boolean;
  readonly label: string;
  readonly onSelect: (themeName: string) => void;
}
