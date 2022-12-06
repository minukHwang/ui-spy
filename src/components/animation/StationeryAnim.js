import React from "react";
import Lottie from "lottie-web";
import animationData from "../../static/animation/stationery.json";
import { useEffect, useLayoutEffect, useRef } from "react";
import "./StickersAnim.scss";

const StationeryAnim = ({ menu }) => {
  const animationRef = useRef();
  const container = animationRef.current;
  let stationeryAnim;
  useLayoutEffect(() => {
    stationeryAnim = Lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMax slice",
      },
    });
  }, [menu]);

  const handleMouseEnter = () => {
    stationeryAnim.play();
    stationeryAnim.setDirection(1);
  };

  const handleMouseLeave = () => {
    stationeryAnim.play();
    stationeryAnim.setDirection(-1);
  };
  return (
    <div
      ref={animationRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="stickers-animation"
    ></div>
  );
};

export default StationeryAnim;
