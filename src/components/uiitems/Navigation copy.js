import React, { useRef } from "react";
import "./Navigation.scss";
import { ReactComponent as Icon0 } from "../../static/svg/icons/nav-icon0.svg";
import { ReactComponent as Icon1 } from "../../static/svg/icons/nav-icon1.svg";
import { ReactComponent as Icon2 } from "../../static/svg/icons/nav-icon2.svg";
import { ReactComponent as Icon3 } from "../../static/svg/icons/nav-icon3.svg";
import { ReactComponent as Icon4 } from "../../static/svg/icons/nav-icon4.svg";
import NavigationBtn from "./NavigationBtn";

const Navigation = ({
  text0,
  text1,
  text2,
  text3,
  text4,
  color0,
  color1,
  color2,
  color3,
  color4,
  icon0,
  icon1,
  icon2,
  icon3,
  icon4,
}) => {
  let clicked = true;

  const handleClick = (e, text, button, color) => {
    if (clicked) {
      button.current.style.width = "auto";
    }
    button.current.style.backgroundColor = color;
  };

  const textRef0 = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();
  const textRef4 = useRef();

  const buttonRef0 = useRef();
  const buttonRef1 = useRef();
  const buttonRef2 = useRef();
  const buttonRef3 = useRef();
  const buttonRef4 = useRef();

  return (
    <div className="navigation">
      <div className="navigation-container">
        <NavigationBtn text={text0} icon={icon0} color={color0}></NavigationBtn>
        {/* <div
          className="navigation-btn 0"
          onClick={(e) => handleClick(e, textRef0, buttonRef0, pink)}
          ref={buttonRef0}
        >
          {icon0 ? <Icon0 className="icon 0"></Icon0> : ""}
          <div
            className="nav-text"
            style={{
              padding: icon0 ? "9.25px 14px 9.25px 5px" : "9.25px 14px",
            }}
            ref={textRef0}
          >
            {text0}
          </div>
        </div>
        <div
          className="navigation-btn 1"
          onClick={(e) => handleClick(e, textRef1, buttonRef1, red)}
          ref={buttonRef1}
        >
          {icon1 ? <Icon1 className="icon 1"></Icon1> : ""}
          <div
            className="nav-text"
            style={{
              padding: icon1 ? "9.25px 14px 9.25px 5px" : "9.25px 14px",
            }}
            ref={textRef1}
          >
            {text1}
          </div>
        </div>
        <div
          className="navigation-btn 2"
          onClick={(e) => handleClick(e, textRef2, buttonRef2, blue)}
          ref={buttonRef2}
        >
          {icon2 ? <Icon2 className="icon 2"></Icon2> : ""}
          <div
            className="nav-text"
            style={{
              padding: icon2 ? "9.25px 14px 9.25px 5px" : "9.25px 14px",
            }}
            ref={textRef2}
          >
            {text2}
          </div>
        </div>
        <div
          className="navigation-btn 3"
          onClick={(e) => handleClick(e, textRef3, buttonRef3, yellow)}
          ref={buttonRef3}
        >
          {icon3 ? <Icon3 className="icon 3"></Icon3> : ""}
          <div
            className="nav-text"
            style={{
              padding: icon3 ? "9.25px 14px 9.25px 5px" : "9.25px 14px",
            }}
            ref={textRef3}
          >
            {text3}
          </div>
        </div>
        <div
          className="navigation-btn 4"
          onClick={(e) => handleClick(e, textRef4, buttonRef4, green)}
          ref={buttonRef4}
        >
          {icon4 ? <Icon4 className="icon"></Icon4> : ""}
          <div
            className="nav-text"
            style={{
              padding: icon4 ? "9.25px 14px 9.25px 5px" : "9.25px 14px",
            }}
            ref={textRef4}
          >
            {text4}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navigation;
