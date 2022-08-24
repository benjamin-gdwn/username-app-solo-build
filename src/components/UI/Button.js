import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="button-control"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
