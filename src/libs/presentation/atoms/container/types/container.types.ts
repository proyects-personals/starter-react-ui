/**
 * @description Define las propiedades del contenedor de contenido.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ContainerProps {
  readonly children: React.ReactNode;
  readonly maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  readonly align?: "start" | "center" | "end" | "between";
  readonly direction?: "row" | "column";
  readonly gap?: "none" | "xs" | "sm" | "md" | "lg";
  readonly padding?: "none" | "sm" | "md" | "lg";
  readonly className?: string;
  readonly as?: "div" | "section" | "nav" | "header" | "footer";
}

/**
 * @description Define las opciones para resolver las clases del contenedor.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ContainerClassOptions {
  readonly maxWidth: ContainerProps["maxWidth"];
  readonly align: NonNullable<ContainerProps["align"]>;
  readonly direction: NonNullable<ContainerProps["direction"]>;
  readonly gap: NonNullable<ContainerProps["gap"]>;
  readonly padding: NonNullable<ContainerProps["padding"]>;
}
