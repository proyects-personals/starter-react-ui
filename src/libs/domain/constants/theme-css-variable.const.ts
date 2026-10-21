import type { ThemeColorToken } from "@domain";

/**
 * @description Define los nombres de las variables CSS de DaisyUI.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CSS_THEME_TOKENS = {
  primary: "--color-primary",
  primaryContent: "--color-primary-content",
  secondary: "--color-secondary",
  secondaryContent: "--color-secondary-content",
  accent: "--color-accent",
  accentContent: "--color-accent-content",
  neutral: "--color-neutral",
  neutralContent: "--color-neutral-content",
  base100: "--color-base-100",
  base200: "--color-base-200",
  base300: "--color-base-300",
  baseContent: "--color-base-content",
  info: "--color-info",
  infoContent: "--color-info-content",
  success: "--color-success",
  successContent: "--color-success-content",
  warning: "--color-warning",
  warningContent: "--color-warning-content",
  error: "--color-error",
  errorContent: "--color-error-content",
} as const;

/**
 * @description Define la coleccion de claves y variables CSS de DaisyUI.
 * Cada entrada relaciona una clave de color con su variable CSS.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CSS_THEME_TOKEN_ENTRIES: readonly [
  ThemeColorToken,
  (typeof CSS_THEME_TOKENS)[ThemeColorToken],
][] = [
  ["primary", CSS_THEME_TOKENS.primary],
  ["primaryContent", CSS_THEME_TOKENS.primaryContent],
  ["secondary", CSS_THEME_TOKENS.secondary],
  ["secondaryContent", CSS_THEME_TOKENS.secondaryContent],
  ["accent", CSS_THEME_TOKENS.accent],
  ["accentContent", CSS_THEME_TOKENS.accentContent],
  ["neutral", CSS_THEME_TOKENS.neutral],
  ["neutralContent", CSS_THEME_TOKENS.neutralContent],
  ["base100", CSS_THEME_TOKENS.base100],
  ["base200", CSS_THEME_TOKENS.base200],
  ["base300", CSS_THEME_TOKENS.base300],
  ["baseContent", CSS_THEME_TOKENS.baseContent],
  ["info", CSS_THEME_TOKENS.info],
  ["infoContent", CSS_THEME_TOKENS.infoContent],
  ["success", CSS_THEME_TOKENS.success],
  ["successContent", CSS_THEME_TOKENS.successContent],
  ["warning", CSS_THEME_TOKENS.warning],
  ["warningContent", CSS_THEME_TOKENS.warningContent],
  ["error", CSS_THEME_TOKENS.error],
  ["errorContent", CSS_THEME_TOKENS.errorContent],
];
