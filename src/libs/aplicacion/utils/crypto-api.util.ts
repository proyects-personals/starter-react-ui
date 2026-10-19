/**
 * @description Obtains the cryptographic API when available.
 * @returns Cryptographic API or undefined if unavailable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getCryptoApi(): Crypto | undefined {
  try {
    return globalThis.crypto;
  } catch {
    return undefined;
  }
}
