import type { ThemeCssVariables } from "@domain";

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
