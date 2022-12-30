import React from "react";

const Input = ({
  name,
  value,
  type,
  onChange,
  placeholder,
  className,
  autoComplete,
}) => {
  return (
    <input
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
