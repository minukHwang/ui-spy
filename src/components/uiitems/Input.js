import React, { forwardRef } from "react";
import "./Input.scss";

const Input = forwardRef(({ textInput, setTextInput }, ref) => {
  const typeText = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      setTextInput([...textInput, keyword]);
    }
  };
  return (
    <div className="input" ref={ref}>
      <input
        className="input-container"
        type="text"
        placeholder="Input"
        onKeyPress={(e) => typeText(e)}
      />
    </div>
  );
});

export default Input;
