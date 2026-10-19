import {
  ThemeCssVariable,
  type AppTheme,
  type BorderVariables,
  type BrandVariables,
  type EffectVariables,
  type ShadowVariables,
  type StateVariables,
  type SurfaceVariables,
  type TextVariables,
  type ThemeCssVariables,
  type ThemeName,
  type TypographyVariables,
} from "@domain";

/**
 * @description Busca un tema por su nombre.
 * @author Steveen Cues
 * @version 1.0.0
 */
function findTheme(
  themes: readonly AppTheme[],
  themeName: ThemeName,
): AppTheme | undefined {
  return themes.find((theme) => theme.name === themeName);
}

/**
 * @description Obtiene el primer tema registrado.
 * @throws {Error} Cuando no hay temas registrados.
 * @author Steveen Cues
 * @version 1.0.0
 */
function getFirstTheme(themes: readonly AppTheme[]): AppTheme {
  if (themes.length === 0) {
    throw new Error("ThemeProvider requires at least one registered theme.");
  }

  return themes[0];
}

/**
 * @description Resuelve el tema inicial solicitado o utiliza el primero registrado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function resolveInitialTheme(
  themes: readonly AppTheme[],
  initialTheme: ThemeName,
): AppTheme {
  return findTheme(themes, initialTheme) ?? getFirstTheme(themes);
}

/**
 * @description Resuelve el tema activo o recupera uno disponible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function resolveActiveTheme(
  themes: readonly AppTheme[],
  selectedTheme: ThemeName,
  initialTheme: ThemeName,
): AppTheme {
  return (
    findTheme(themes, selectedTheme) ??
    resolveInitialTheme(themes, initialTheme)
  );
}

/**
 * @description Valida que el tema solicitado este registrado.
 * @throws {Error} Cuando el tema no esta registrado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function assertThemeExists(
  themes: readonly AppTheme[],
  themeName: ThemeName,
): void {
  if (findTheme(themes, themeName) === undefined) {
    throw new Error(`Theme "${themeName}" is not registered in ThemeProvider.`);
  }
}

/**
 * @description Crea variables CSS para los colores de superficie.
 * @author Steveen Cues
 * @version 1.3.0
 */
function createSurfaceVariables(colors: AppTheme["colors"]): SurfaceVariables {
  return {
    [ThemeCssVariable.SURFACE_BACKGROUND]: colors.surface.background,
    [ThemeCssVariable.SURFACE_SURFACE]: colors.surface.surface,
    [ThemeCssVariable.SURFACE_SURFACE_ELEVATED]: colors.surface.surfaceElevated,
    [ThemeCssVariable.SURFACE_SURFACE_HOVER]: colors.surface.surfaceHover,
    [ThemeCssVariable.SURFACE_SURFACE_ACTIVE]: colors.surface.surfaceActive,
    [ThemeCssVariable.SURFACE_SURFACE_DISABLED]: colors.surface.surfaceDisabled,
  };
}

/**
 * @description Crea variables CSS para los colores de texto.
 * @author Steveen Cues
 * @version 1.3.0
 */
function createTextVariables(colors: AppTheme["colors"]): TextVariables {
  return {
    [ThemeCssVariable.TEXT_PRIMARY]: colors.text.primary,
    [ThemeCssVariable.TEXT_SECONDARY]: colors.text.secondary,
    [ThemeCssVariable.TEXT_MUTED]: colors.text.muted,
    [ThemeCssVariable.TEXT_DISABLED]: colors.text.disabled,
    [ThemeCssVariable.TEXT_INVERSE]: colors.text.inverse,
    [ThemeCssVariable.TEXT_LINK]: colors.text.link,
    [ThemeCssVariable.TEXT_LINK_HOVER]: colors.text.linkHover,
  };
}

/**
 * @description Crea variables CSS para los colores de marca.
 * @author Steveen Cues
 * @version 1.3.0
 */
function createBrandVariables(colors: AppTheme["colors"]): BrandVariables {
  return {
    [ThemeCssVariable.BRAND_PRIMARY]: colors.brand.primary,
    [ThemeCssVariable.BRAND_PRIMARY_HOVER]: colors.brand.primaryHover,
    [ThemeCssVariable.BRAND_PRIMARY_ACTIVE]: colors.brand.primaryActive,
    [ThemeCssVariable.BRAND_PRIMARY_CONTRAST]: colors.brand.primaryContrast,
    [ThemeCssVariable.BRAND_SECONDARY]: colors.brand.secondary,
    [ThemeCssVariable.BRAND_SECONDARY_HOVER]: colors.brand.secondaryHover,
    [ThemeCssVariable.BRAND_SECONDARY_ACTIVE]: colors.brand.secondaryActive,
    [ThemeCssVariable.BRAND_SECONDARY_CONTRAST]: colors.brand.secondaryContrast,
    [ThemeCssVariable.BRAND_ACCENT]: colors.brand.accent,
    [ThemeCssVariable.BRAND_ACCENT_HOVER]: colors.brand.accentHover,
    [ThemeCssVariable.BRAND_ACCENT_CONTRAST]: colors.brand.accentContrast,
  };
}

/**
 * @description Crea variables CSS para los estados.
 * @author Steveen Cues
 * @version 1.3.0
 */
function createStateVariables(colors: AppTheme["colors"]): StateVariables {
  return {
    [ThemeCssVariable.STATE_SUCCESS]: colors.state.success,
    [ThemeCssVariable.STATE_SUCCESS_BACKGROUND]: colors.state.successBackground,
    [ThemeCssVariable.STATE_WARNING]: colors.state.warning,
    [ThemeCssVariable.STATE_WARNING_BACKGROUND]: colors.state.warningBackground,
    [ThemeCssVariable.STATE_ERROR]: colors.state.error,
    [ThemeCssVariable.STATE_ERROR_BACKGROUND]: colors.state.errorBackground,
    [ThemeCssVariable.STATE_INFO]: colors.state.info,
    [ThemeCssVariable.STATE_INFO_BACKGROUND]: colors.state.infoBackground,
  };
}

/**
 * @description Crea variables CSS para los bordes.
 * @author Steveen Cues
 * @version 1.3.0
 */
function createBorderVariables(colors: AppTheme["colors"]): BorderVariables {
  return {
    [ThemeCssVariable.BORDER_DEFAULT]: colors.border.default,
    [ThemeCssVariable.BORDER_SUBTLE]: colors.border.subtle,
    [ThemeCssVariable.BORDER_STRONG]: colors.border.strong,
    [ThemeCssVariable.BORDER_FOCUS]: colors.border.focus,
    [ThemeCssVariable.BORDER_HOVER]: colors.border.hover,
    [ThemeCssVariable.BORDER_ACTIVE]: colors.border.active,
    [ThemeCssVariable.BORDER_DISABLED]: colors.border.disabled,
  };
}

/**
 * @description Crea variables CSS para las sombras.
 * @author Steveen Cues
 * @version 1.3.0
 */
function createShadowVariables(colors: AppTheme["colors"]): ShadowVariables {
  return {
    [ThemeCssVariable.SHADOW_COLOR]: colors.shadow.color,
    [ThemeCssVariable.SHADOW_SUBTLE]: colors.shadow.subtle,
    [ThemeCssVariable.SHADOW_SMALL]: colors.shadow.small,
    [ThemeCssVariable.SHADOW_MEDIUM]: colors.shadow.medium,
    [ThemeCssVariable.SHADOW_LARGE]: colors.shadow.large,
    [ThemeCssVariable.SHADOW_GLOW]: colors.shadow.glow,
  };
}

/**
 * @description Crea variables CSS para los efectos visuales.
 * @author Steveen Cues
 * @version 1.3.0
 */
function createEffectVariables(colors: AppTheme["colors"]): EffectVariables {
  return {
    [ThemeCssVariable.EFFECTS_OVERLAY]: colors.effects.overlay,
    [ThemeCssVariable.EFFECTS_BACKDROP]: colors.effects.backdrop,
    [ThemeCssVariable.EFFECTS_BLUR]: colors.effects.blur,
    [ThemeCssVariable.EFFECTS_BLUR_STRONG]: colors.effects.blurStrong,
    [ThemeCssVariable.EFFECTS_GLASS_BACKGROUND]: colors.effects.glassBackground,
    [ThemeCssVariable.EFFECTS_GLASS_BORDER]: colors.effects.glassBorder,
  };
}

/**
 * @description Crea variables CSS para la tipografia.
 * @author Steveen Cues
 * @version 1.3.0
 */
function createTypographyVariables(
  colors: AppTheme["colors"],
): TypographyVariables {
  return {
    [ThemeCssVariable.TYPOGRAPHY_HEADING_PRIMARY]:
      colors.typography.heading.primary,
    [ThemeCssVariable.TYPOGRAPHY_HEADING_SECONDARY]:
      colors.typography.heading.secondary,
    [ThemeCssVariable.TYPOGRAPHY_HEADING_MUTED]:
      colors.typography.heading.muted,
    [ThemeCssVariable.TYPOGRAPHY_BODY_PRIMARY]: colors.typography.body.primary,
    [ThemeCssVariable.TYPOGRAPHY_BODY_SECONDARY]:
      colors.typography.body.secondary,
    [ThemeCssVariable.TYPOGRAPHY_BODY_MUTED]: colors.typography.body.muted,
    [ThemeCssVariable.TYPOGRAPHY_LABEL_PRIMARY]:
      colors.typography.label.primary,
    [ThemeCssVariable.TYPOGRAPHY_LABEL_SECONDARY]:
      colors.typography.label.secondary,
    [ThemeCssVariable.TYPOGRAPHY_LABEL_MUTED]: colors.typography.label.muted,
    [ThemeCssVariable.TYPOGRAPHY_BUTTON_PRIMARY]:
      colors.typography.button.primary,
    [ThemeCssVariable.TYPOGRAPHY_BUTTON_SECONDARY]:
      colors.typography.button.secondary,
  };
}

/**
 * @description Genera todas las variables CSS a partir de los tokens del tema.
 * @author Steveen Cues
 * @version 1.3.0
 */
export function createThemeVariables(theme: AppTheme): ThemeCssVariables {
  const { colors } = theme;

  return {
    ...createSurfaceVariables(colors),
    ...createTextVariables(colors),
    ...createBrandVariables(colors),
    ...createStateVariables(colors),
    ...createBorderVariables(colors),
    ...createShadowVariables(colors),
    ...createEffectVariables(colors),
    ...createTypographyVariables(colors),
  };
}
