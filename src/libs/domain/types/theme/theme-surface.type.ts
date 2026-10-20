import type { ThemeCssVariables } from "@domain";

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
