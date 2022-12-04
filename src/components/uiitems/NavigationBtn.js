import React from "react";
import { ReactComponent as Icon0 } from "../../static/svg/icons/nav-icon0.svg";
import { ReactComponent as Icon1 } from "../../static/svg/icons/nav-icon1.svg";
import { ReactComponent as Icon2 } from "../../static/svg/icons/nav-icon2.svg";
import { ReactComponent as Icon3 } from "../../static/svg/icons/nav-icon3.svg";
import { ReactComponent as Icon4 } from "../../static/svg/icons/nav-icon4.svg";
import { forwardRef, useRef } from "react";
import "./NavigationBtn.scss";

const NavigationBtn = forwardRef(({ text, icon, color }, ref) => {
  const btnRef = useRef();
  const iconRef = useRef();
  const textRef = useRef();
  console.log(btnRef);
  console.log(iconRef);
  console.log(textRef);
  return (
    <div className="navigation-btn-container" ref={ref}>
      <div className="navigation-btn" ref={btnRef}>
        {icon === "icon0" ? (
          <Icon0 className="icon 0" ref={iconRef}></Icon0>
        ) : (
          ""
        )}
        {icon === "icon1" ? (
          <Icon1 className="icon 1" ref={iconRef}></Icon1>
        ) : (
          ""
        )}
        {icon === "icon2" ? (
          <Icon2 className="icon 2" ref={iconRef}></Icon2>
        ) : (
          ""
        )}
        {icon === "icon3" ? (
          <Icon3 className="icon 3" ref={iconRef}></Icon3>
        ) : (
          ""
        )}
        {icon === "icon4" ? (
          <Icon4 className="icon 4" ref={iconRef}></Icon4>
        ) : (
          ""
        )}
        <div className="nav-text" ref={textRef}>
          {text}
        </div>
      </div>
    </div>
  );
});

export default NavigationBtn;
