/**
 * @description Define una escala de colores con tonos progresivos.
 * @author Steveen Cues
 * @version 2.1.0
 */
export type ThemeColorScale = Readonly<
  Record<
    | "50"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "950",
    string
  >
>;
