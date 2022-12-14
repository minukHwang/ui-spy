import React, { useState, useEffect } from "react";
import "./ButtonPage.scss";
import CloseBtn from "../../components/CloseBtn";
import Button from "../../components/uiitems/Button";
import { ReactComponent as Arrow } from "../../static/svg/arrow.svg";

const ButtonPage = ({ colors, setMenuHidden }) => {
  const [clickedNum, setClickedNum] = useState(0);
  const contents = [
    "Don't Click This Button.",
    "Stop It!",
    "Okay, two click is fine.",
    "Stop!!",
    "Whatever, I don’t care",
    "I warned you",
    "Don't Click This Button.",
  ];

  useEffect(() => {
    setMenuHidden(true);
  }, []);

  return (
    <div
      className="contents-container"
      style={{ backgroundColor: colors.yellow }}
    >
      <div className="contents-area">
        <div className="title">{contents[clickedNum]}</div>
        <Arrow className="arrow"></Arrow>
        <Button clickedNum={clickedNum} setClickedNum={setClickedNum}></Button>
      </div>
      <CloseBtn
        linkTo="bbopgi"
        color={colors.green}
        hoverColor={colors.pink}
      ></CloseBtn>
    </div>
  );
};

export default ButtonPage;
