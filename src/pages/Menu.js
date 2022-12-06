import React from "react";
import MenuTab from "../components/MenuTab";
import "./Menu.scss";
import { useEffect } from "react";

const Menu = ({ colors, setHome }) => {
  useEffect(() => {
    setHome(false);
  }, []);
  return (
    <div className="menu-container">
      <MenuTab colors={colors} title="Bbopgi"></MenuTab>
      <MenuTab colors={colors} title="Stationery"></MenuTab>
      <MenuTab colors={colors} title="Sticker"></MenuTab>
    </div>
  );
};

export default Menu;
