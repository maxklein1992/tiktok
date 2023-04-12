import React from "react";

import styles from "./Icon.module.scss";

const Icon = ({ icon, alt, className, size }) => {
  // defensive
  if (!icon) return null;

  const classNames = [styles.icon, , styles[size], className].join(" ").trim();

  return <img src={icon} alt={alt} className={classNames} />;
};

export default Icon;
