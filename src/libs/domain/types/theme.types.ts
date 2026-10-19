import type { ThemePreferenceState } from "@domain";
import type { CSSProperties, Dispatch, SetStateAction } from "react";

/**
 * @description Defines custom CSS variables supported by the library.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ThemeCssVariables = CSSProperties & {
  [property: `--rui-${string}`]: string;
};

/**
 * @description Defines CSS variables for surface colors.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SurfaceVariables = Pick<
  ThemeCssVariables,
  | "--rui-surface-background"
  | "--rui-surface-surface"
  | "--rui-surface-surface-elevated"
  | "--rui-surface-surface-hover"
  | "--rui-surface-surface-active"
  | "--rui-surface-surface-disabled"
>;

/**
 * @description Defines CSS variables for text colors.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type TextVariables = Pick<
  ThemeCssVariables,
  | "--rui-text-primary"
  | "--rui-text-secondary"
  | "--rui-text-muted"
  | "--rui-text-disabled"
  | "--rui-text-inverse"
  | "--rui-text-link"
  | "--rui-text-link-hover"
>;

/**
 * @description Defines CSS variables for brand colors.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type BrandVariables = Pick<
  ThemeCssVariables,
  | "--rui-brand-primary"
  | "--rui-brand-primary-hover"
  | "--rui-brand-primary-active"
  | "--rui-brand-primary-contrast"
  | "--rui-brand-secondary"
  | "--rui-brand-secondary-hover"
  | "--rui-brand-secondary-active"
  | "--rui-brand-secondary-contrast"
  | "--rui-brand-accent"
  | "--rui-brand-accent-hover"
  | "--rui-brand-accent-contrast"
>;

/**
 * @description Defines CSS variables for status colors.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type StateVariables = Pick<
  ThemeCssVariables,
  | "--rui-state-success"
  | "--rui-state-success-background"
  | "--rui-state-warning"
  | "--rui-state-warning-background"
  | "--rui-state-error"
  | "--rui-state-error-background"
  | "--rui-state-info"
  | "--rui-state-info-background"
>;

/**
 * @description Defines CSS variables for border styles and colors.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type BorderVariables = Pick<
  ThemeCssVariables,
  | "--rui-border-default"
  | "--rui-border-subtle"
  | "--rui-border-strong"
  | "--rui-border-focus"
  | "--rui-border-hover"
  | "--rui-border-active"
  | "--rui-border-disabled"
>;

/**
 * @description Defines CSS variables for shadows.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ShadowVariables = Pick<
  ThemeCssVariables,
  | "--rui-shadow-color"
  | "--rui-shadow-subtle"
  | "--rui-shadow-small"
  | "--rui-shadow-medium"
  | "--rui-shadow-large"
  | "--rui-shadow-glow"
>;

/**
 * @description Defines CSS variables for visual effects.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type EffectVariables = Pick<
  ThemeCssVariables,
  | "--rui-effects-overlay"
  | "--rui-effects-backdrop"
  | "--rui-effects-blur"
  | "--rui-effects-blur-strong"
  | "--rui-effects-glass-background"
  | "--rui-effects-glass-border"
>;

/**
 * @description Defines CSS variables for typography colors.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type TypographyVariables = Pick<
  ThemeCssVariables,
  | "--rui-typography-heading-primary"
  | "--rui-typography-heading-secondary"
  | "--rui-typography-heading-muted"
  | "--rui-typography-body-primary"
  | "--rui-typography-body-secondary"
  | "--rui-typography-body-muted"
  | "--rui-typography-label-primary"
  | "--rui-typography-label-secondary"
  | "--rui-typography-label-muted"
  | "--rui-typography-button-primary"
  | "--rui-typography-button-secondary"
>;

/**
 * @description Defines the React state dispatcher for theme preference updates.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SetThemePreferenceState = Dispatch<
  SetStateAction<ThemePreferenceState>
>;
