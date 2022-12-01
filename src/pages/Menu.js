import React from "react";
import MenuTab from "../components/MenuTab";
import "./Menu.scss";

const Menu = ({ colors }) => {
  return (
    <div className="menu-container">
      <MenuTab colors={colors} title="Bbopgi"></MenuTab>
      <MenuTab colors={colors} title="Stationery"></MenuTab>
      <MenuTab colors={colors} title="Sticker"></MenuTab>
    </div>
  );
};

export default Menu;
