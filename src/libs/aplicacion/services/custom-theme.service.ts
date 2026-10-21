import {
  CSS_THEME_TOKEN_ENTRIES,
  type CustomThemeDefinition,
  type ThemeColorToken,
} from "@domain";

/**
 * @description Gestiona el registro de temas personalizados de DaisyUI.
 * @author Steveen Cues
 * @version 1.0.0
 */
export class CustomThemeService {
  private static readonly STYLE_ID_PREFIX = "daisyui-custom-theme-";

  /**
   * @description Registra o actualiza las variables CSS de un tema.
   * @param theme Definicion del tema personalizado.
   */
  public register(theme: CustomThemeDefinition): void {
    this.validateThemeName(theme.name);

    const styleElement = this.getOrCreateStyleElement(theme.name);
    const declarations = this.createColorDeclarations(theme);

    styleElement.textContent = this.createThemeStylesheet(theme, declarations);
  }

  /**
   * @description Elimina el registro CSS de un tema personalizado.
   * @param themeName Nombre del tema.
   */
  public unregister(themeName: string): void {
    this.validateThemeName(themeName);

    const styleElement = document.getElementById(
      this.getStyleElementId(themeName),
    );

    styleElement?.remove();
  }

  /**
   * @description Comprueba si un tema tiene estilos registrados.
   * @param themeName Nombre del tema.
   * @returns Indica si el tema esta registrado.
   */
  public isRegistered(themeName: string): boolean {
    this.validateThemeName(themeName);

    return document.getElementById(this.getStyleElementId(themeName)) !== null;
  }

  /**
   * @description Valida el nombre del tema.
   * @param themeName Nombre del tema.
   */
  private validateThemeName(themeName: string): void {
    const validThemeName = /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(themeName);

    if (!validThemeName) {
      throw new Error(`Invalid theme name: ${themeName}`);
    }
  }

  /**
   * @description Genera las declaraciones CSS de los colores del tema.
   * @param theme Definicion del tema.
   * @returns Declaraciones CSS.
   * @author Steveen Cues
   * @version 1.0.0
   */
  private createColorDeclarations(theme: CustomThemeDefinition): string {
    return CSS_THEME_TOKEN_ENTRIES.map(([token, variable]) => {
      const color = theme.daisyUI[token];

      this.validateCssColor(token, color);

      return `${variable}: ${color};`;
    }).join("\n");
  }

  /**
   * @description Valida un color CSS.
   * @param token Nombre del token.
   * @param color Valor CSS.
   */
  private validateCssColor(token: ThemeColorToken, color: string): void {
    if (typeof CSS === "undefined" || !CSS.supports("color", color)) {
      throw new Error(`Invalid CSS color for theme token: ${token}`);
    }
  }

  /**
   * @description Genera las reglas CSS del tema.
   * @param theme Definicion del tema.
   * @param declarations Declaraciones CSS de los colores.
   * @returns Hoja de estilos CSS.
   */
  private createThemeStylesheet(
    theme: CustomThemeDefinition,
    declarations: string,
  ): string {
    return `
      [data-theme="${theme.name}"] {
        color-scheme: ${theme.daisyUI.colorScheme};
        ${declarations}
      }
    `;
  }

  /**
   * @description Obtiene el elemento de estilos o lo crea si no existe.
   * @param themeName Nombre del tema.
   * @returns Elemento de estilos CSS.
   */
  private getOrCreateStyleElement(themeName: string): HTMLStyleElement {
    const styleId = this.getStyleElementId(themeName);
    const existingElement = document.getElementById(styleId);

    if (existingElement instanceof HTMLStyleElement) {
      return existingElement;
    }

    existingElement?.remove();

    const styleElement = document.createElement("style");
    styleElement.id = styleId;

    document.head.appendChild(styleElement);

    return styleElement;
  }

  /**
   * @description Construye el identificador del elemento de estilos.
   * @param themeName Nombre del tema.
   * @returns Identificador HTML.
   */
  private getStyleElementId(themeName: string): string {
    return `${CustomThemeService.STYLE_ID_PREFIX}${themeName}`;
  }
}

/**
 * @description Instancia compartida del servicio de temas personalizados.
 */
export const customThemeService = new CustomThemeService();
