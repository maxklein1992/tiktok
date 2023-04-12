import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

import styles from "./Input.module.scss";

const Input = ({
  className,
  name,
  value,
  placeholder,
  onChange,
  size,
  onKeyDown,
  loading,
}) => {
  // Defensive
  if (!name || !onChange) return null;

  const inputClassNames = [styles.input, styles[size], className]
    .join(" ")
    .trim();
  const spinnerClassNames = [styles.spinner, styles[size], className]
    .join(" ")
    .trim();

  return loading ? (
    <div className={spinnerClassNames}>
      <BeatLoader color="black" size={8} />
    </div>
  ) : (
    <input
      className={inputClassNames}
      onKeyDown={onKeyDown}
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
