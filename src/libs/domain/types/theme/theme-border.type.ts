import type { ThemeCssVariables } from "@domain";

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
