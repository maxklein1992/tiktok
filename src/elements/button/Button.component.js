import React from "react";

import styles from "./Button.module.scss";

const Button = ({ onClick, children, className, disabled, style }) => {
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
