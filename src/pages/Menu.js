import React from "react";
import MenuTab from "../components/MenuTab";
import "./Menu.scss";
import { useEffect } from "react";

const Menu = ({ colors, home, setHome, menu, setMenu }) => {
  useEffect(() => {
    setMenu(true);
    setHome(false);
  }, []);
  return (
    <div className="menu-container">
      <MenuTab menu={menu} home={home} colors={colors} title="Bbopgi"></MenuTab>
      <MenuTab
        menu={menu}
        home={home}
        colors={colors}
        title="Stationery"
      ></MenuTab>
      <MenuTab
        menu={menu}
        home={home}
        colors={colors}
        title="Sticker"
      ></MenuTab>
    </div>
  );
};

export default Menu;
