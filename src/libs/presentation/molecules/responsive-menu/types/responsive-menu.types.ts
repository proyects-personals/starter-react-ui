/**
 * @description Define las propiedades del boton que alterna el menu movil.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ResponsiveMenuToggleProps {
  readonly isOpen: boolean;
  readonly openLabel: string;
  readonly closeLabel: string;
  readonly onToggle: () => void;
}

/**
 * @description Define las propiedades del panel colapsable del menu.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ResponsiveMenuPanelProps {
  readonly isOpen: boolean;
  readonly children: React.ReactNode;
  readonly id: string;
}

/**
 * @description Define las propiedades del menu responsive.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ResponsiveMenuProps {
  readonly toggle?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly labels?: ResponsiveMenuLabels;
  readonly className?: string;
}

/**
 * @description Define las claves de traduccion configurables del menu.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ResponsiveMenuTranslations {
  readonly open?: string;
  readonly close?: string;
}

/**
 * @description Define los textos resueltos del menu responsive.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ResponsiveMenuLabels {
  readonly open: string;
  readonly close: string;
}

/**
 * @description Define el estado y las acciones del menu responsive.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface UseResponsiveMenuResult {
  readonly isOpen: boolean;
  readonly panelId: string;
  readonly toggleMenu: () => void;
  readonly closeMenu: () => void;
}
