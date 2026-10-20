import type {
  ThemeFontFamily,
  ThemeFontSizes,
  ThemeFontWeights,
  ThemeTextStyle,
} from "@domain";

/**
 * @description Define los estilos para encabezados, cuerpo, etiquetas y botones.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeTypography {
  readonly fontFamily: ThemeFontFamily;
  readonly fontSize: ThemeFontSizes;
  readonly fontWeight: ThemeFontWeights;
  readonly lineHeight: Readonly<Record<string, string | number>>;
  readonly letterSpacing: Readonly<Record<string, string>>;
  readonly heading: {
    readonly h1: ThemeTextStyle;
    readonly h2: ThemeTextStyle;
    readonly h3: ThemeTextStyle;
    readonly h4: ThemeTextStyle;
    readonly h5: ThemeTextStyle;
    readonly h6: ThemeTextStyle;
  };
  readonly body: {
    readonly primary: ThemeTextStyle;
    readonly secondary: ThemeTextStyle;
    readonly muted: ThemeTextStyle;
    readonly small: ThemeTextStyle;
  };
  readonly label: {
    readonly primary: ThemeTextStyle;
    readonly secondary: ThemeTextStyle;
    readonly muted: ThemeTextStyle;
  };
  readonly button: {
    readonly primary: ThemeTextStyle;
    readonly secondary: ThemeTextStyle;
  };
  readonly code: ThemeTextStyle;
}
