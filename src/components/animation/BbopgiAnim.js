import React from "react";
import Lottie from "lottie-web";
import animationData from "../../static/animation/bbopgi.json";
import { useEffect, useLayoutEffect, useRef } from "react";
import "./BbopgiAnim.scss";

const BbopgiAnim = ({ menu }) => {
  const animationRef = useRef();
  const container = animationRef.current;
  let stickerAnim;
  useLayoutEffect(() => {
    stickerAnim = Lottie.loadAnimation({
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
    stickerAnim.goToAndPlay(0);
  };

  const handleMouseLeave = () => {};
  return (
    <div
      ref={animationRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bbopgi-animation"
    ></div>
  );
};

export default BbopgiAnim;
