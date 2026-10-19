import {
  AES_GCM_ALGORITHM,
  AES_GCM_IV_LENGTH,
  ENCRYPTED_VALUE_PART_COUNT,
  KEY_USAGES,
  RAW_KEY_FORMAT,
  SHA_256_ALGORITHM,
  STORAGE_VALUE_SEPARATOR,
} from "@domain";

import {
  decodeBase64,
  encodeBase64,
  getCryptoApi,
  decodeText,
  encodeText,
} from "@aplicacion";

/**
 * @description Represents validated encrypted data.
 * @author Steveen Cues
 * @version 2.0.0
 */
interface EncryptedPayload {
  iv: Uint8Array<ArrayBuffer>;
  ciphertext: Uint8Array<ArrayBuffer>;
}

/**
 * @description Derives an AES-GCM key from a configured secret.
 * @param secret Encryption secret.
 * @returns Crypto key or undefined when unavailable.
 * @author Steveen Cues
 * @version 2.0.0
 */
async function deriveAesKey(secret: string): Promise<CryptoKey | undefined> {
  const cryptoApi = getCryptoApi();

  if (cryptoApi === undefined || secret.length === 0) {
    return undefined;
  }

  const digest = await cryptoApi.subtle.digest(
    SHA_256_ALGORITHM,
    encodeText(secret),
  );

  return cryptoApi.subtle.importKey(
    RAW_KEY_FORMAT,
    digest,
    { name: AES_GCM_ALGORITHM },
    false,
    KEY_USAGES,
  );
}

/**
 * @description Creates a cryptographically random initialization vector.
 * @returns Initialization vector.
 * @author Steveen Cues
 * @version 2.0.0
 */
function createInitializationVector(): Uint8Array<ArrayBuffer> {
  const cryptoApi = getCryptoApi();

  if (cryptoApi === undefined) {
    throw new Error("Cryptographic API is unavailable.");
  }

  return cryptoApi.getRandomValues(new Uint8Array(AES_GCM_IV_LENGTH));
}

/**
 * @description Validates and decodes an initialization vector.
 * @param value Base64-encoded initialization vector.
 * @returns Valid vector or undefined.
 * @author Steveen Cues
 * @version 2.0.0
 */
function decodeInitializationVector(
  value: string,
): Uint8Array<ArrayBuffer> | undefined {
  try {
    const iv = decodeBase64(value);

    return iv.length === AES_GCM_IV_LENGTH ? iv : undefined;
  } catch {
    return undefined;
  }
}

/**
 * @description Checks whether the encrypted value has the expected segments.
 * @param parts Encrypted value segments.
 * @returns Whether the segments contain an IV and ciphertext.
 * @author Steveen Cues
 * @version 2.2.0
 */
function hasExpectedEncryptedParts(parts: string[]): parts is [string, string] {
  return parts.length === ENCRYPTED_VALUE_PART_COUNT;
}

/**
 * @description Validates the encrypted value segments.
 * @param parts Encrypted value segments.
 * @returns Validated segments or undefined.
 * @author Steveen Cues
 * @version 2.2.0
 */
function validateEncryptedParts(parts: string[]): [string, string] | undefined {
  if (!hasExpectedEncryptedParts(parts)) {
    return undefined;
  }

  return [parts[0], parts[1]];
}

/**
 * @description Splits and validates an encrypted value.
 * @param value Encoded initialization vector and ciphertext.
 * @returns Validated payload or undefined.
 * @author Steveen Cues
 * @version 2.1.0
 */
function parseEncryptedPayload(value: string): EncryptedPayload | undefined {
  const parts = validateEncryptedParts(value.split(STORAGE_VALUE_SEPARATOR));

  if (parts === undefined) {
    return undefined;
  }

  const [encodedIv, encodedCiphertext] = parts;
  const iv = decodeInitializationVector(encodedIv);

  if (iv === undefined) {
    return undefined;
  }

  try {
    return {
      iv,
      ciphertext: decodeBase64(encodedCiphertext),
    };
  } catch {
    return undefined;
  }
}

/**
 * @description Encrypts bytes using AES-GCM.
 * @param plaintext Plaintext bytes.
 * @param key Encryption key.
 * @param iv Initialization vector.
 * @returns Encrypted bytes.
 * @author Steveen Cues
 * @version 2.1.0
 */
async function encryptPayload(
  plaintext: Uint8Array<ArrayBuffer>,
  key: CryptoKey,
  iv: Uint8Array<ArrayBuffer>,
): Promise<ArrayBuffer> {
  const cryptoApi = requireCryptoApi();

  return cryptoApi.subtle.encrypt(
    { name: AES_GCM_ALGORITHM, iv },
    key,
    plaintext,
  );
}

/**
 * @description Decrypts bytes using AES-GCM.
 * @param payload Validated encrypted payload.
 * @param key Decryption key.
 * @returns Decrypted bytes.
 * @author Steveen Cues
 * @version 2.1.0
 */
async function decryptPayload(
  payload: EncryptedPayload,
  key: CryptoKey,
): Promise<ArrayBuffer> {
  const cryptoApi = requireCryptoApi();

  return cryptoApi.subtle.decrypt(
    {
      name: AES_GCM_ALGORITHM,
      iv: payload.iv,
    },
    key,
    payload.ciphertext,
  );
}

/**
 * @description Obtains the cryptographic API or throws when unavailable.
 * @returns Available cryptographic API.
 * @author Steveen Cues
 * @version 2.2.0
 */
function requireCryptoApi(): Crypto {
  const cryptoApi = getCryptoApi();

  if (cryptoApi === undefined) {
    throw new Error("Cryptographic API is unavailable.");
  }

  return cryptoApi;
}

/**
 * @description Encrypts text using AES-GCM.
 * @param value Text to encrypt.
 * @param secret Encryption secret.
 * @returns Encoded encrypted value or undefined when unavailable.
 * @author Steveen Cues
 * @version 2.0.0
 */
export async function encryptText(
  value: string,
  secret: string,
): Promise<string | undefined> {
  try {
    const key = await deriveAesKey(secret);

    if (key === undefined) {
      return undefined;
    }

    const iv = createInitializationVector();
    const ciphertext = await encryptPayload(encodeText(value), key, iv);

    return [encodeBase64(iv), encodeBase64(new Uint8Array(ciphertext))].join(
      STORAGE_VALUE_SEPARATOR,
    );
  } catch {
    return undefined;
  }
}

/**
 * @description Decrypts an AES-GCM encrypted value.
 * @param value Encoded initialization vector and ciphertext.
 * @param secret Encryption secret.
 * @returns Original text or undefined if decryption fails.
 * @author Steveen Cues
 * @version 2.0.0
 */
export async function decryptText(
  value: string,
  secret: string,
): Promise<string | undefined> {
  try {
    const payload = parseEncryptedPayload(value);

    if (payload === undefined) {
      return undefined;
    }

    const key = await deriveAesKey(secret);

    if (key === undefined) {
      return undefined;
    }

    const plaintext = await decryptPayload(payload, key);

    return decodeText(plaintext);
  } catch {
    return undefined;
  }
}
