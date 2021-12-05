import React from "react";
import "./input.css";

const Input = ({ type, ...res }) => {
  return <input type={type} {...res} />;
};

export default Input;
