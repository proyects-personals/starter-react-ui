import type { CSS_THEME_TOKENS } from "@domain";

/**
 * @description Define los colores que DaisyUI utiliza en un tema.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface DaisyUIThemeColors {
  readonly colorScheme: "light" | "dark";
  readonly primary: string;
  readonly primaryContent: string;
  readonly secondary: string;
  readonly secondaryContent: string;
  readonly accent: string;
  readonly accentContent: string;
  readonly neutral: string;
  readonly neutralContent: string;
  readonly base100: string;
  readonly base200: string;
  readonly base300: string;
  readonly baseContent: string;
  readonly info: string;
  readonly infoContent: string;
  readonly success: string;
  readonly successContent: string;
  readonly warning: string;
  readonly warningContent: string;
  readonly error: string;
  readonly errorContent: string;
}

/**
 * @description Define los nombres de los temas disponibles en la aplicacion.
 * Permite utilizar temas integrados y nombres personalizados.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ThemeName =
  "light" | "dark" | "magenta" | "semi-dark" | (string & {});

/**
 * @description Define las claves disponibles para los colores de DaisyUI.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ThemeColorToken = keyof typeof CSS_THEME_TOKENS;
