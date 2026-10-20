import type { ThemeCssVariables } from "@domain";

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
