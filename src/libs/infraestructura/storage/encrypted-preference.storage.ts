import { decryptText, encryptText, getLocalStorage } from "@aplicacion";

/**
 * @description Encrypts and saves a preference in localStorage.
 * @param storageKey Storage key.
 * @param value Value to store.
 * @param encryptionKey Encryption secret.
 * @returns Promise resolved after the save attempt.
 * @author Steveen Cues
 * @version 3.0.0
 */
export async function saveEncryptedPreference(
  storageKey: string,
  value: string,
  encryptionKey: string,
): Promise<void> {
  if (value.length === 0 || encryptionKey.length === 0) {
    return;
  }

  try {
    const storage = getLocalStorage();

    if (storage === undefined) {
      return;
    }

    const encryptedValue = await encryptText(value, encryptionKey);

    if (encryptedValue === undefined) {
      return;
    }

    storage.setItem(storageKey, encryptedValue);
  } catch {
    // Preference persistence must not interrupt application usage.
  }
}

/**
 * @description Loads and decrypts a preference from localStorage.
 * @param storageKey Storage key.
 * @param encryptionKey Encryption secret.
 * @returns Decrypted preference or undefined when unavailable.
 * @author Steveen Cues
 * @version 3.0.0
 */
export async function loadEncryptedPreference(
  storageKey: string,
  encryptionKey: string,
): Promise<string | undefined> {
  if (encryptionKey.length === 0) {
    return undefined;
  }

  try {
    const storage = getLocalStorage();

    if (storage === undefined) {
      return undefined;
    }

    const encryptedValue = storage.getItem(storageKey);

    if (encryptedValue === null) {
      return undefined;
    }

    return await decryptText(encryptedValue, encryptionKey);
  } catch {
    return undefined;
  }
}
