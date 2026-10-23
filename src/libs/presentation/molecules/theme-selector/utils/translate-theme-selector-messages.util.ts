import type {
  ThemeSelectorMessages,
  ThemeSelectorTranslations,
} from "@presentation";

/**
 * @description Resuelve una clave de traduccion configurable.
 * @author Steveen Cues
 * @version 1.1.0
 */
const resolveTranslation = (
  key: string | undefined,
  fallback: string,
  translate: (key: string) => string,
): string => translate(key ?? fallback);

/**
 * @description Traduce los mensajes configurables del selector de temas.
 * @author Steveen Cues
 * @version 1.1.0
 * @example
 * translateThemeSelectorMessages(translations, label, placeholder, t);
 */
export const translateThemeSelectorMessages = (
  translations: ThemeSelectorTranslations | undefined,
  label: string,
  placeholder: string,
  translate: (key: string) => string,
): ThemeSelectorMessages => ({
  title: resolveTranslation(translations?.title, label, translate),
  selected: resolveTranslation(
    translations?.selected,
    "theme.selected",
    translate,
  ),
  searchPlaceholder: resolveTranslation(
    translations?.searchPlaceholder,
    placeholder,
    translate,
  ),
  empty: resolveTranslation(translations?.empty, "theme.empty", translate),
  of: resolveTranslation(translations?.of, "theme.of", translate),
  results: resolveTranslation(
    translations?.results,
    "theme.results",
    translate,
  ),
  close: resolveTranslation(translations?.close, "theme.close", translate),
});
