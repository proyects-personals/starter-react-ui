import type { ThemeButton, ThemeCard, ThemeInput, ThemeModal } from "@domain";

/**
 * @description Define las propiedades visuales de los componentes.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeComponents {
  readonly button: ThemeButton;
  readonly input: ThemeInput;
  readonly card: ThemeCard;
  readonly modal: ThemeModal;
}
