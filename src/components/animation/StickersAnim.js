import React from "react";
import Lottie from "lottie-web";
import animationData from "../../static/animation/sticker.json";
import { useEffect, useLayoutEffect, useRef } from "react";
import "./StickersAnim.scss";

const StickersAnim = ({ menu }) => {
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
    stickerAnim.play();
    stickerAnim.setDirection(1);
  };

  const handleMouseLeave = () => {
    stickerAnim.play();
    stickerAnim.setDirection(-1);
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

export default StickersAnim;
