import React, { useState } from "react";
import "./Popup.scss";
import { ReactComponent as Closebtn } from "../../static/svg/icons/close.svg";

const Popup = ({
  index,
  zIndex,
  left,
  top,
  color,
  colorSet,
  popups,
  setPopups,
  colorNum,
  setColorNum,
  zIndexNum,
  setZIndexNum,
  popupRef,
  setPopupRef,
}) => {
  const createPopups = () => {
    if (popups.length > 20) {
      alert("Too Many Popups");
    }
    let xCoord = Math.floor(Math.random() * 100);
    let yCoord = Math.floor(Math.random() * 100);
    setColorNum(colorNum + 1);
    let randomNum = colorNum % 3;
    //let randomNum = Math.floor(Math.random() * 3);
    setPopups([
      ...popups,
      [0, `${xCoord}%`, `${yCoord}%`, colorSet[randomNum]],
    ]);
  };

  const updatePopups = () => {
    setZIndexNum(zIndexNum + 1);
    popups[index][0] = zIndexNum;
    setPopups([...popups]);
  };

  return (
    <div
      className="pop-up"
      style={{ zIndex: zIndex, left: left, top: top, backgroundColor: color }}
    >
      <div className="pop-up-top">
        <div className="pop-up-text">Popup</div>
        <Closebtn className="close-btn"></Closebtn>
      </div>
      <div className="pop-up-btns">
        <div className="pop-up-btn" onClick={createPopups}>
          Pop
        </div>
        <div className="pop-up-btn" onClick={updatePopups}>
          Up
        </div>
      </div>
    </div>
  );
};

export default Popup;
