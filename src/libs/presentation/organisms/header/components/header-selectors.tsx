import type { FC, JSX } from "react";
import {
  LanguageSelector,
  ThemeSelector,
  type HeaderTranslations,
} from "@presentation";

/**
 * @description Define las propiedades de la seccion de selectores.
 * @author Steveen Cues
 * @version 1.1.0
 */
export interface HeaderSelectorsProps {
  readonly showThemeSelector: boolean;
  readonly showLanguageSelector: boolean;
  readonly translations?: HeaderTranslations;
  readonly additionalActions: React.ReactNode;
}

/**
 * @description Agrupa los selectores de tema e idioma con acciones extra.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const HeaderSelectors: FC<
  Omit<HeaderSelectorsProps, "translations">
> = ({
  showThemeSelector,
  showLanguageSelector,
  additionalActions,
}): JSX.Element => {
  return (
    <div className="flex items-center gap-2">
      {showThemeSelector && (
        <div className="w-40 sm:w-48">
          <ThemeSelector />
        </div>
      )}

      {showLanguageSelector && (
        <div className="w-36 sm:w-40">
          <LanguageSelector />
        </div>
      )}

      {additionalActions}
    </div>
  );
};

export default HeaderSelectors;
