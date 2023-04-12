import React, { ReactElement } from "react";

import styles from "./Button.module.scss";

interface StyleProps {
  opacity?: string;
}

export type Props = {
  /**
   * Add additional className for edge-cases
   */
  className?: string;
  /**
   * Add style
   */
  style: StyleProps;
  /**
   * If true, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Onclick event of the component.
   */
  onClick?: () => void;
  /**
   * should have at least 2 DsListItem children
   */
  children: ReactElement;
};

const Button = ({ onClick, children, className, disabled, style }: Props) => {
  const classNames = [className, styles.button].join(" ").trim();

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      style={{ ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
