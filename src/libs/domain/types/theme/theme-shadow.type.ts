import type { ThemeCssVariables } from "@domain";

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
