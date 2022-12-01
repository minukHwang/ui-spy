import React from "react";
import "./Button.scss";

const Button = ({ clickedNum, setClickedNum }) => {
  const handleClick = () => {
    setClickedNum(clickedNum + 1);
    console.log(clickedNum);
  };
  return (
    <div className="button" onClick={handleClick}>
      <div className="button-container">
        <div className="button-text">Button</div>
      </div>
    </div>
  );
};

export default Button;
