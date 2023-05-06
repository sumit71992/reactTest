import React from "react";
import "./button.css";

function Button(props) {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.button}
    </button>
  );
}

export default Button;
