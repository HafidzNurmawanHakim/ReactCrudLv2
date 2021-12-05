import React from "react";
import "./button.css";

const Button = ({ title, ...res }) => {
  return <button {...res}>{title}</button>;
};

export default Button;
