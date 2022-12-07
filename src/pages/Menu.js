import React from "react";
import MenuTab from "../components/MenuTab";
import "./Menu.scss";
import { useEffect } from "react";

const Menu = ({ colors, home, setHome, menu, setMenu }) => {
  useEffect(() => {
    setMenu(true);
    if (home === true) {
      alert("베타 버전이라 버그가 많을 수 있습니다! 즐거운 체험 되세요 :)");
    }
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
