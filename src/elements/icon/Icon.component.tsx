import React from "react";

import styles from "./Icon.module.scss";

export type Props = {
  /**
   * Type of icon to render.
   */
  icon: string;
  /**
   * Alt
   */
  alt?: string;
  /**
   * Add additional className for edge-cases
   */
  className?: string;
  /**
   * The size of the component.
   * @default small
   */
  size?: "small" | "medium" | "big";
};

const Icon = ({ icon, alt, className, size }: Props) => {
  // defensive
  if (!icon) return null;

  const classNames = [styles.icon, size && styles[size], className]
    .join(" ")
    .trim();

  return <img src={icon} alt={alt} className={classNames} />;
};

export default Icon;
