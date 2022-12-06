import React from "react";
import Lottie from "lottie-web";
import animationData from "../../static/animation/eyeballs.json";
import { useEffect, useLayoutEffect, useRef } from "react";
import "./EyeBalls2.scss";

const EyeBall2 = ({ home }) => {
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
  return <div ref={animationRef} className="eyeballs-animation right"></div>;
};

export default EyeBall2;
