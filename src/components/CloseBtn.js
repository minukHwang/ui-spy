import React, { useEffect, useState } from "react";
import "./CloseBtn.scss";
import { ReactComponent as Check } from "../static/svg/icons/check.svg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const CloseBtn = ({ linkTo, color, hoverColor }) => {
  const [btnColor, setBtnColor] = useState(color);
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.style.scale = 0;
    setTimeout(() => {
      btnRef.current.style.scale = 1;
    }, 1000);
  }, []);

  const handleHover = () => {
    setBtnColor(hoverColor);
  };
  const handleHoverEnd = () => {
    setBtnColor(color);
  };

  const navigate = useNavigate();
  const goToPage = (link) => {
    setTimeout(() => {
      btnRef.current.style.scale = 0;
    }, 100);
    setTimeout(() => {
      const item = link.toLowerCase();
      navigate(`/${item}`);
    }, 500);
  };

  return (
    <div
      ref={btnRef}
      className="check-btn"
      onClick={() => goToPage(linkTo)}
      style={{ scale: 0 }}
    >
      <div
        className="check-btn-container"
        onMouseOver={handleHover}
        onMouseLeave={handleHoverEnd}
        style={{ backgroundColor: btnColor }}
      >
        <Check className="check-icon"></Check>
      </div>
    </div>
  );
};

export default CloseBtn;
