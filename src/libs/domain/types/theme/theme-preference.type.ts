import type { ThemePreferenceState } from "@domain";
import type { Dispatch, SetStateAction } from "react";

/**
 * @description Defines the React state dispatcher for theme preference updates.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SetThemePreferenceState = Dispatch<
  SetStateAction<ThemePreferenceState>
>;
