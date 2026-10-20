import type { ThemeFontWeightValue } from "@domain";

/**
 * @description Define los pesos de fuente del sistema tipografico.
 * @author Steveen Cues
 * @version 2.1.0
 */
export interface ThemeFontWeights {
  readonly thin: ThemeFontWeightValue;
  readonly extraLight: ThemeFontWeightValue;
  readonly light: ThemeFontWeightValue;
  readonly regular: ThemeFontWeightValue;
  readonly medium: ThemeFontWeightValue;
  readonly semiBold: ThemeFontWeightValue;
  readonly bold: ThemeFontWeightValue;
  readonly extraBold: ThemeFontWeightValue;
  readonly black: ThemeFontWeightValue;
}
