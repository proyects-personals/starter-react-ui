/**
 * @description Determina si un enlace de navegacion abre en una pestana nueva.
 * @param item Elemento de navegacion.
 * @returns Indica si el enlace es externo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function isExternalLink(
  item: Readonly<{ href: string; isExternal?: boolean }>,
): boolean {
  return item.isExternal === true || /^https?:\/\//.test(item.href);
}
