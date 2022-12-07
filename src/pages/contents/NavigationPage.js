import React from "react";
import "./NavigationPage.scss";
import CloseBtn from "../../components/CloseBtn";
import Navigation from "../../components/uiitems/Navigation";
import { useEffect } from "react";
import { useRef } from "react";

const NavigationPage = ({ colors, setMenuHidden }) => {
  const navigationRef = useRef();
  const pageRef = useRef();
  console.log(pageRef);

  const moveToPink = () => {
    let width = pageRef.current.offsetWidth;
    pageRef.current.style.left = `-${0}px`;
  };

  const moveToRed = () => {
    let width = pageRef.current.offsetWidth;
    pageRef.current.style.left = `-${width / 5}px`;
  };

  const moveToBlue = () => {
    let width = pageRef.current.offsetWidth;
    pageRef.current.style.left = `-${(width * 2) / 5}px`;
  };

  const moveToYellow = () => {
    let width = pageRef.current.offsetWidth;
    pageRef.current.style.left = `-${(width * 3) / 5}px`;
  };

  const moveToGreen = () => {
    let width = pageRef.current.offsetWidth;
    pageRef.current.style.left = `-${(width * 4) / 5}px`;
  };
  console.log(navigationRef);

  useEffect(() => {
    setMenuHidden(true);
    navigationRef.current.childNodes[0].onclick = moveToPink;
    navigationRef.current.childNodes[1].onclick = moveToRed;
    navigationRef.current.childNodes[2].onclick = moveToBlue;
    navigationRef.current.childNodes[3].onclick = moveToYellow;
    navigationRef.current.childNodes[4].onclick = moveToGreen;
    moveToPink();
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
        ref={navigationRef}
      ></Navigation>
      <CloseBtn
        linkTo="sticker"
        color={colors.orange}
        hoverColor={colors.red}
      ></CloseBtn>
      <div className="page-holder" ref={pageRef}>
        <div className="page pink"></div>
        <div className="page red"></div>
        <div className="page blue"></div>
        <div className="page yellow"></div>
        <div className="page green"></div>
      </div>
    </div>
  );
};

export default NavigationPage;
