import React from "react";
import "./TogglePage.scss";
import CloseBtn from "../../components/CloseBtn";
import Toggle from "../../components/uiitems/Toggle";

const TogglePage = ({ backgroundColor }) => {
  return (
    <div
      className="contents-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <Toggle></Toggle>
      <CloseBtn linkTo="sticker"></CloseBtn>
    </div>
  );
};

export default TogglePage;
