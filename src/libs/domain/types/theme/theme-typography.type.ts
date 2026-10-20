import type { ThemeCssVariables } from "@domain";

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
