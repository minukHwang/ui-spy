import React from "react";
import "./MenuPage.scss";
import CloseBtn from "../../components/CloseBtn";
import Menu from "../../components/uiitems/Menu";
import { useEffect } from "react";

const MenuPage = ({ backgroundColor, setMenuHidden }) => {
  useEffect(() => {
    setMenuHidden(true);
  }, []);
  return (
    <div
      className="contents-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <Menu></Menu>
      <CloseBtn linkTo="stationery"></CloseBtn>
    </div>
  );
};

export default MenuPage;
