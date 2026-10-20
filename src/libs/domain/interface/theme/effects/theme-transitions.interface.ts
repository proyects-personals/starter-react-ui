/**
 * @description Define las duraciones y curvas de las transiciones.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeTransitions {
  readonly instant: string;
  readonly fast: string;
  readonly normal: string;
  readonly slow: string;
  readonly easing: {
    readonly standard: string;
    readonly emphasized: string;
    readonly decelerate: string;
    readonly accelerate: string;
    readonly spring: string;
  };
}
