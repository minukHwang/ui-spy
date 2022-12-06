import React from "react";
import "./NavigationPage.scss";
import CloseBtn from "../../components/CloseBtn";
import Navigation from "../../components/uiitems/Navigation";
import { useEffect } from "react";

const NavigationPage = ({ colors, setMenuHidden }) => {
  useEffect(() => {
    setMenuHidden(true);
  }, []);
  return (
    <div
      className="contents-container"
      style={{ backgroundColor: colors.pink }}
    >
      <Navigation
        className="navigation"
        text0="Pink"
        text1="Red"
        text2="Blue"
        text3="Yellow"
        text4="Green"
        color0={colors.pink}
        color1={colors.red}
        color2={colors.blue}
        color3={colors.yellow}
        color4={colors.green}
        icon0="icon0"
        icon1="icon1"
        icon2="icon2"
        icon3="icon3"
        icon4="icon4"
      ></Navigation>
      <CloseBtn
        linkTo="sticker"
        color={colors.orange}
        hoverColor={colors.red}
      ></CloseBtn>
    </div>
  );
};

export default NavigationPage;
