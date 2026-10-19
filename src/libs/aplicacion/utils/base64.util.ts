/**
 * @description Encodes bytes into Base64.
 * @param bytes Bytes to encode.
 * @returns Base64 string.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function encodeBase64(bytes: Uint8Array): string {
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary);
}

/**
 * @description Decodes Base64 into bytes.
 * @param value Base64 string.
 * @returns Decoded bytes.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function decodeBase64(value: string): Uint8Array<ArrayBuffer> {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}
