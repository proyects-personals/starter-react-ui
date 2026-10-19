/**
 * @description Obtains localStorage when available.
 * @returns Browser storage or undefined if unavailable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getLocalStorage(): Storage | undefined {
  try {
    return globalThis.localStorage;
  } catch {
    return undefined;
  }
}
