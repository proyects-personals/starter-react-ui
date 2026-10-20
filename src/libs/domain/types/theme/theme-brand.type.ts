import type { ThemeCssVariables } from "@domain";

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
