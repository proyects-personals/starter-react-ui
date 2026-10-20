import type { ThemeCssVariables } from "@domain";

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
