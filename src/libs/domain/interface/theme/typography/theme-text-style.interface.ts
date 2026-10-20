import type {
  ThemeFontStyle,
  ThemeFontWeight,
  ThemeTextAlignment,
  ThemeTextTransform,
} from "@domain";

/**
 * @description Define los estilos tipograficos reutilizables.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeTextStyle {
  readonly fontFamily: string;
  readonly fontSize: string;
  readonly fontWeight: ThemeFontWeight;
  readonly lineHeight: string | number;
  readonly letterSpacing: string;
  readonly color: string;
  readonly fontStyle: ThemeFontStyle;
  readonly textAlign: ThemeTextAlignment;
  readonly textTransform: ThemeTextTransform;
  readonly textDecoration: string;
}
