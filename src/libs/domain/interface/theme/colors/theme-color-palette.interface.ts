import type { ThemeColorScale } from "@domain";

/**
 * @description Define una coleccion de escalas cromaticas.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeColorPalette {
  readonly slate: ThemeColorScale;
  readonly gray: ThemeColorScale;
  readonly zinc: ThemeColorScale;
  readonly neutral: ThemeColorScale;
  readonly stone: ThemeColorScale;
  readonly red: ThemeColorScale;
  readonly orange: ThemeColorScale;
  readonly amber: ThemeColorScale;
  readonly yellow: ThemeColorScale;
  readonly lime: ThemeColorScale;
  readonly green: ThemeColorScale;
  readonly emerald: ThemeColorScale;
  readonly teal: ThemeColorScale;
  readonly cyan: ThemeColorScale;
  readonly sky: ThemeColorScale;
  readonly blue: ThemeColorScale;
  readonly indigo: ThemeColorScale;
  readonly violet: ThemeColorScale;
  readonly purple: ThemeColorScale;
  readonly fuchsia: ThemeColorScale;
  readonly pink: ThemeColorScale;
  readonly rose: ThemeColorScale;
}
