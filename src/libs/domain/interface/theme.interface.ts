import type { ThemeName } from "@domain";
import type { ReactNode } from "react";

/**
 * @description Contrato publico del contexto de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IThemeContextValue {
  readonly theme: AppTheme;
  readonly themeName: ThemeName;
  readonly themes: readonly AppTheme[];
  readonly setTheme: (theme: ThemeName) => void;
}

/**
 * @description Propiedades del proveedor de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IThemeProviderProps {
  readonly themes: readonly AppTheme[];
  readonly initialTheme: ThemeName;
  readonly themeEncryptionKey: string;
  readonly children: ReactNode;
}

/**
 * @description Colores del contenido textual.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeTextColors {
  readonly primary: string;
  readonly secondary: string;
  readonly muted: string;
  readonly disabled: string;
  readonly inverse: string;
  readonly link: string;
  readonly linkHover: string;
}

/**
 * @description Colores utilizados por las superficies.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSurfaceColors {
  readonly background: string;
  readonly surface: string;
  readonly surfaceElevated: string;
  readonly surfaceHover: string;
  readonly surfaceActive: string;
  readonly surfaceDisabled: string;
}

/**
 * @description Colores de los estados semanticos.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeStateColors {
  readonly success: string;
  readonly successBackground: string;
  readonly warning: string;
  readonly warningBackground: string;
  readonly error: string;
  readonly errorBackground: string;
  readonly info: string;
  readonly infoBackground: string;
}

/**
 * @description Colores de identidad visual de la aplicacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeBrandColors {
  readonly primary: string;
  readonly primaryHover: string;
  readonly primaryActive: string;
  readonly primaryContrast: string;
  readonly secondary: string;
  readonly secondaryHover: string;
  readonly secondaryActive: string;
  readonly secondaryContrast: string;
  readonly accent: string;
  readonly accentHover: string;
  readonly accentContrast: string;
}

/**
 * @description Colores para bordes e indicadores de interaccion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeBorderColors {
  readonly default: string;
  readonly subtle: string;
  readonly strong: string;
  readonly focus: string;
  readonly hover: string;
  readonly active: string;
  readonly disabled: string;
}

/**
 * @description Configuracion de las sombras.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeShadowColors {
  readonly color: string;
  readonly subtle: string;
  readonly small: string;
  readonly medium: string;
  readonly large: string;
  readonly glow: string;
}

/**
 * @description Configuracion de efectos visuales.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeEffects {
  readonly overlay: string;
  readonly backdrop: string;
  readonly blur: string;
  readonly blurStrong: string;
  readonly glassBackground: string;
  readonly glassBorder: string;
}

/**
 * @description Configuracion tipografica del tema.
 * Sus valores pueden representar colores o tokens CSS.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeTypography {
  readonly heading: {
    readonly primary: string;
    readonly secondary: string;
    readonly muted: string;
  };
  readonly body: {
    readonly primary: string;
    readonly secondary: string;
    readonly muted: string;
  };
  readonly label: {
    readonly primary: string;
    readonly secondary: string;
    readonly muted: string;
  };
  readonly button: {
    readonly primary: string;
    readonly secondary: string;
  };
}

/**
 * @description Paleta completa de tokens visuales del tema.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeColors {
  readonly surface: ThemeSurfaceColors;
  readonly text: ThemeTextColors;
  readonly brand: ThemeBrandColors;
  readonly state: ThemeStateColors;
  readonly border: ThemeBorderColors;
  readonly shadow: ThemeShadowColors;
  readonly effects: ThemeEffects;
  readonly typography: ThemeTypography;
}

/**
 * @description Configuracion visual completa de un tema.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AppTheme {
  readonly name: ThemeName;
  readonly colors: ThemeColors;
}

/**
 * @description Defines the configuration required to manage theme preferences.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemePreferenceConfiguration {
  readonly themes: IThemeProviderProps["themes"];
  readonly initialTheme: IThemeProviderProps["initialTheme"];
  readonly themeEncryptionKey: IThemeProviderProps["themeEncryptionKey"];
}

/**
 * @description Represents the current theme preference state and its configuration.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemePreferenceState extends ThemePreferenceConfiguration {
  readonly themeName: ThemeName;
  readonly isLoaded: boolean;
}

/**
 * @description Defines the result returned by the theme preference hook.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemePreferenceResult {
  readonly themeName: ThemeName;
  readonly isPreferenceLoaded: boolean;
  readonly setThemeName: (nextTheme: ThemeName) => void;
}
