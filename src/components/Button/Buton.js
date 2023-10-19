import React from "react";
import "./Button.css";
const Button = ({ children, type = "button", onClick }) => {
  return (
    <button className="button-custom" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
