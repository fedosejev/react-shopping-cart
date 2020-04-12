import React from "react";
import { concatenateClassNames } from "../../utils";

const BASE_CLASS_NAME = "btn btn-outline-secondary btn-sm";

function Button(props) {
  return (
    <button
      type="button"
      className={concatenateClassNames({
        baseClassName: BASE_CLASS_NAME,
        customClassName: props.className,
      })}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.label}
    </button>
  );
}

export default Button;
