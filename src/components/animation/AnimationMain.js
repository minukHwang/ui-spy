import React from "react";
import Lottie from "lottie-web";
import animationData from "../../static/animation/house.json";
import { useEffect, useLayoutEffect, useRef } from "react";
import "./AnimationMain.scss";

const AnimationMain = ({ home }) => {
  const animationRef = useRef();
  const container = animationRef.current;
  useLayoutEffect(() => {
    Lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [home]);
  return <div ref={animationRef} className="main-animation"></div>;
};

export default AnimationMain;
