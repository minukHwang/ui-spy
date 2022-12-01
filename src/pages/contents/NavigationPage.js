import React from "react";
import "./NavigationPage.scss";
import CloseBtn from "../../components/CloseBtn";
import Navigation from "../../components/uiitems/Navigation";

const NavigationPage = ({ backgroundColor }) => {
  return (
    <div
      className="contents-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <Navigation
        className="navigation"
        text0="Pink"
        text1="Red"
        text2="Blue"
        text3="Yellow"
        text4="Green"
        icon0={true}
        icon1={true}
        icon2={true}
        icon3={true}
        icon4={true}
      ></Navigation>
      <CloseBtn linkTo="sticker"></CloseBtn>
    </div>
  );
};

export default NavigationPage;
