import type { FC, JSX } from "react";
import type { LogoProps } from "../types/logo.types";

/**
 * @description Logo reutilizable que permite configurar la imagen, el texto
 * alternativo, las dimensiones y el enlace de destino.
 * @example
 * <Logo src="/logo.svg" alt={t("common.brandAlt")} href="/" width={48} />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Logo: FC<LogoProps> = ({
  src,
  alt,
  href,
  width,
  height,
  className = "",
  imageClassName = "",
}): JSX.Element => {
  const image = (
    <img
      alt={alt}
      className={imageClassName}
      height={height}
      src={src}
      width={width}
    />
  );

  if (href === undefined) {
    return <span className={className}>{image}</span>;
  }

  return (
    <a aria-label={alt} className={className} href={href}>
      {image}
    </a>
  );
};

export default Logo;
