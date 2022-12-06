import React from "react";
import Lottie from "lottie-web";
import animationData from "../../static/animation/topdeco.json";
import { useEffect, useRef, useLayoutEffect } from "react";
import "./TopDecoRight.scss";

const TopDecoRight = ({ home }) => {
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
  return <div ref={animationRef} className="topdeco-animation right"></div>;
};

export default TopDecoRight;
