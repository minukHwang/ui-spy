import React, { forwardRef } from "react";
import "./Input.scss";

const Input = forwardRef((props, ref) => {
  return (
    <div className="input" ref={ref}>
      <input className="input-container" type="text" placeholder="Input" />
    </div>
  );
});

export default Input;
