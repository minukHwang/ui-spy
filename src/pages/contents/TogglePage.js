import React from "react";
import "./TogglePage.scss";
import CloseBtn from "../../components/CloseBtn";
import Toggle from "../../components/uiitems/Toggle";
import { useEffect } from "react";

const TogglePage = ({ colors, setMenuHidden }) => {
  useEffect(() => {
    setMenuHidden(true);
  }, []);
  return (
    <div
      className="contents-container"
      style={{ backgroundColor: colors.green }}
    >
      <Toggle></Toggle>
      <CloseBtn
        linkTo="sticker"
        color={colors.green}
        hoverColor={colors.orange}
      ></CloseBtn>
    </div>
  );
};

export default TogglePage;
