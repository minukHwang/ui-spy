import React from "react";
import "./CarouselPage.scss";
import CloseBtn from "../../components/CloseBtn";
import Carousel from "../../components/uiitems/Carousel";
import { useEffect } from "react";

const CarouselPage = ({ backgroundColor, setMenuHidden }) => {
  useEffect(() => {
    setMenuHidden(true);
  }, []);

  return (
    <div
      className="contents-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="scene">
        <div className="cube">
          <div className="cube__face cube__face--front"></div>
          <div className="cube__face cube__face--back"></div>
          <div className="cube__face cube__face--right"></div>
          <div className="cube__face cube__face--left"></div>
          <div className="cube__face cube__face--top"></div>
          <div className="cube__face cube__face--bottom"></div>
        </div>
      </div>

      <Carousel></Carousel>
      <CloseBtn linkTo="sticker"></CloseBtn>
    </div>
  );
};

export default CarouselPage;
