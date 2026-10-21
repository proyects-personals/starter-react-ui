import type { ThemeName } from "@domain";

/**
 * @description Define las propiedades basicas de un manifiesto de tema.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface ThemeManifest {
  readonly id: ThemeName;
  readonly name: string;
  readonly description: string;
  readonly version: string;
  readonly author: string;
  readonly tags: readonly string[];
  readonly preview?: string;
  readonly homepage?: string;
  readonly license?: string;
  readonly minLibraryVersion?: string;
  readonly supportedFeatures: readonly string[];
  readonly isDefault: boolean;
  readonly isExperimental: boolean;
}
