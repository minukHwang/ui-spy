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
      <Carousel></Carousel>
      <CloseBtn linkTo="sticker"></CloseBtn>
    </div>
  );
};

export default CarouselPage;
