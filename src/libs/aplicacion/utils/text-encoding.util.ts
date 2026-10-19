/**
 * @description Encodes text into UTF-8 bytes.
 * @param value Text to encode.
 * @returns Encoded bytes.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function encodeText(value: string): Uint8Array<ArrayBuffer> {
  return new TextEncoder().encode(value);
}

/**
 * @description Decodes UTF-8 bytes into text.
 * @param value Encoded bytes.
 * @returns Decoded text.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function decodeText(value: ArrayBuffer): string {
  return new TextDecoder().decode(value);
}
