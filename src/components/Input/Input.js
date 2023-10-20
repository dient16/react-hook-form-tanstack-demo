import React from "react";
import "./Input.css";

const Input = ({
  label,
  disabled,
  type,
  register,
  errors,
  id,
  validate,
  defaultValue,
}) => {
  return (
    <div className="container">
      <input
        className="input-text"
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, validate)}
        value={defaultValue}
        placeholder=" "
      />
      <label className="input-label">
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      {errors[id] && (
        <small className="input-message">{errors[id]?.message}</small>
      )}
    </div>
  );
};

export default Input;
