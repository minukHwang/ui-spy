import React, { useEffect, useState } from "react";
import "./Home.scss";
import { ReactComponent as Building } from "../static/svg/house.svg";
import { ReactComponent as EyeLeft } from "../static/svg/eye-left.svg";
import { ReactComponent as EyeRight } from "../static/svg/eye-right.svg";
import { ReactComponent as DecoLeft } from "../static/svg/deco-left.svg";
import { ReactComponent as DecoRight } from "../static/svg/deco-right.svg";
import testleft from "../static/img/left.png";
import testright from "../static/img/right.png";
import { useNavigate } from "react-router-dom";

const Home = ({ colors }) => {
  const [scrollNum, setScrollNum] = useState(0);
  const [zoomScale, setZoomScale] = useState(0);
  const navigate = useNavigate();

  //zoom event
  const test = (event) => {
    setScrollNum(scrollNum + event.deltaY);
    if (scrollNum < 0) {
      setZoomScale(0);
      setScrollNum(0);
    } else {
      setZoomScale(scrollNum);
    }
    console.log(zoomScale);
  };
  useEffect(() => {
    if (zoomScale > 10000) {
      navigate("/menu");
    }
  }, [zoomScale]);

  return (
    <div
      className="main-container"
      onWheel={(event) => test(event)}
      style={{ backgroundColor: colors.pink }}
    >
      <div className="building-wrapper">
        <Building className="building" />
      </div>
      <EyeLeft className="eye-left" />
      <EyeRight className="eye-right" />
      {/* <DecoLeft className="deco-left" /> */}
      {/* <DecoRight className="deco-right" /> */}
      <img className="deco-img-left" src={testleft} alt="" />
      <img className="deco-img-right" src={testright} alt="" />
    </div>
  );
};

export default Home;
