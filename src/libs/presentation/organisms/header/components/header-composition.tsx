import type { FC, JSX } from "react";
import { Container } from "@presentation";
import type {
  HeaderActionsProps,
  HeaderBrandProps,
  HeaderCompositionProps,
} from "../types/header.types";

/**
 * @description Seccion principal del Header por composicion. Agrupa el
 * logo, la navegacion y otros elementos de marca.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const HeaderBrand: FC<HeaderBrandProps> = ({
  children,
  className = "",
}): JSX.Element => {
  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      {children}
    </div>
  );
};

/**
 * @description Seccion de acciones del Header por composicion. Agrupa los
 * selectores y acciones personalizadas alineados a la derecha.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const HeaderActions: FC<HeaderActionsProps> = ({
  children,
  className = "",
}): JSX.Element => {
  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      {children}
    </div>
  );
};

/**
 * @description Encabezado alternativo basado en composicion. Permite
 * combinar libremente el logo, la navegacion, los selectores y otros
 * componentes sin duplicar la logica del Header generico.
 * @example
 * <HeaderComposition>
 *   <HeaderBrand>
 *     <Logo src="/logo.svg" alt={t("common.brandAlt")} href="/" />
 *     <Navigation items={items} />
 *   </HeaderBrand>
 *   <HeaderActions>
 *     <ThemeSelector />
 *     <LanguageSelector />
 *   </HeaderActions>
 * </HeaderComposition>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const HeaderComposition: FC<HeaderCompositionProps> = ({
  children,
  className = "",
}): JSX.Element => {
  return (
    <header
      className={`border-b border-base-300 bg-base-100 ${className}`.trim()}
    >
      <Container maxWidth="xl" align="between" padding="md" gap="sm">
        {children}
      </Container>
    </header>
  );
};
