import React, { useEffect, useRef } from "react";
import "./Navigation.scss";
import { ReactComponent as Icon0 } from "../../static/svg/icons/nav-icon0.svg";
import { ReactComponent as Icon1 } from "../../static/svg/icons/nav-icon1.svg";
import { ReactComponent as Icon2 } from "../../static/svg/icons/nav-icon2.svg";
import { ReactComponent as Icon3 } from "../../static/svg/icons/nav-icon3.svg";
import { ReactComponent as Icon4 } from "../../static/svg/icons/nav-icon4.svg";

const Navigation = ({
  text0,
  text1,
  text2,
  text3,
  text4,
  icon0,
  icon1,
  icon2,
  icon3,
  icon4,
}) => {
  const red = "#FF0400";
  const pink = "#FF85D5";
  const orange = "#FF5C00";
  const yellow = "#FFD600";
  const green = "#00B026";
  const blue = "#0066FF";
  let clicked = true;

  const handleClick = (e, text, button, color) => {
    switch (button) {
      case buttonRef0:
        buttonRef0.current.style.maxWidth = "167.5px";
        buttonRef1.current.style.maxWidth = "";
        buttonRef2.current.style.maxWidth = "";
        buttonRef3.current.style.maxWidth = "";
        buttonRef4.current.style.maxWidth = "";
        buttonRef0.current.style.backgroundColor = color;
        buttonRef1.current.style.backgroundColor = "";
        buttonRef2.current.style.backgroundColor = "";
        buttonRef3.current.style.backgroundColor = "";
        buttonRef4.current.style.backgroundColor = "";
        break;
      case buttonRef1:
        buttonRef0.current.style.maxWidth = "";
        buttonRef1.current.style.maxWidth = "167.5px";
        buttonRef2.current.style.maxWidth = "";
        buttonRef3.current.style.maxWidth = "";
        buttonRef4.current.style.maxWidth = "";
        buttonRef0.current.style.backgroundColor = "";
        buttonRef1.current.style.backgroundColor = color;
        buttonRef2.current.style.backgroundColor = "";
        buttonRef3.current.style.backgroundColor = "";
        buttonRef4.current.style.backgroundColor = "";
        break;
      case buttonRef2:
        buttonRef0.current.style.maxWidth = "";
        buttonRef1.current.style.maxWidth = "";
        buttonRef2.current.style.maxWidth = "167.5px";
        buttonRef3.current.style.maxWidth = "";
        buttonRef4.current.style.maxWidth = "";
        buttonRef0.current.style.backgroundColor = "";
        buttonRef1.current.style.backgroundColor = "";
        buttonRef2.current.style.backgroundColor = color;
        buttonRef3.current.style.backgroundColor = "";
        buttonRef4.current.style.backgroundColor = "";
        break;
      case buttonRef3:
        buttonRef0.current.style.maxWidth = "";
        buttonRef1.current.style.maxWidth = "";
        buttonRef2.current.style.maxWidth = "";
        buttonRef3.current.style.maxWidth = "167.5px";
        buttonRef4.current.style.maxWidth = "";
        buttonRef0.current.style.backgroundColor = "";
        buttonRef1.current.style.backgroundColor = "";
        buttonRef2.current.style.backgroundColor = "";
        buttonRef3.current.style.backgroundColor = color;
        buttonRef4.current.style.backgroundColor = "";
        break;
      case buttonRef4:
        buttonRef0.current.style.maxWidth = "";
        buttonRef1.current.style.maxWidth = "";
        buttonRef2.current.style.maxWidth = "";
        buttonRef3.current.style.maxWidth = "";
        buttonRef4.current.style.maxWidth = "167.5px";
        buttonRef0.current.style.backgroundColor = "";
        buttonRef1.current.style.backgroundColor = "";
        buttonRef2.current.style.backgroundColor = "";
        buttonRef3.current.style.backgroundColor = "";
        buttonRef4.current.style.backgroundColor = color;
        break;
      default:
    }
  };

  // const handleHover = (e, button, color) => {
  //   button.current.style.backgroundColor = color;
  // };

  // const handleLeave = (e, button) => {
  //   button.current.style.backgroundColor = "";
  // };

  useEffect(() => {
    buttonRef0.current.style.maxWidth = "167.5px";
    buttonRef1.current.style.maxWidth = "";
    buttonRef2.current.style.maxWidth = "";
    buttonRef3.current.style.maxWidth = "";
    buttonRef4.current.style.maxWidth = "";
    buttonRef0.current.style.backgroundColor = pink;
    buttonRef1.current.style.backgroundColor = "";
    buttonRef2.current.style.backgroundColor = "";
    buttonRef3.current.style.backgroundColor = "";
    buttonRef4.current.style.backgroundColor = "";
  }, []);

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
        <div
          className="navigation-btn one"
          onClick={(e) => handleClick(e, textRef0, buttonRef0, pink)}
          // onMouseOver={(e) => handleHover(e, buttonRef0, pink)}
          // onMouseLeave={(e) => handleLeave(e, buttonRef0)}
          ref={buttonRef0}
        >
          {icon0 ? <Icon0 className="icon"></Icon0> : ""}
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
          className="navigation-btn two"
          onClick={(e) => handleClick(e, textRef1, buttonRef1, red)}
          // onMouseOver={(e) => handleHover(e, buttonRef1, red)}
          // onMouseLeave={(e) => handleLeave(e, buttonRef1)}
          ref={buttonRef1}
        >
          {icon1 ? <Icon1 className="icon"></Icon1> : ""}
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
          className="navigation-btn three"
          onClick={(e) => handleClick(e, textRef2, buttonRef2, blue)}
          // onMouseOver={(e) => handleHover(e, buttonRef2, blue)}
          // onMouseLeave={(e) => handleLeave(e, buttonRef2)}
          ref={buttonRef2}
        >
          {icon2 ? <Icon2 className="icon"></Icon2> : ""}
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
          className="navigation-btn four"
          onClick={(e) => handleClick(e, textRef3, buttonRef3, yellow)}
          // onMouseOver={(e) => handleHover(e, buttonRef3, yellow)}
          // onMouseLeave={(e) => handleLeave(e, buttonRef3)}
          ref={buttonRef3}
        >
          {icon3 ? <Icon3 className="icon"></Icon3> : ""}
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
          className="navigation-btn five"
          onClick={(e) => handleClick(e, textRef4, buttonRef4, green)}
          // onMouseOver={(e) => handleHover(e, buttonRef4, green)}
          // onMouseLeave={(e) => handleLeave(e, buttonRef4)}
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
        </div>
      </div>
    </div>
  );
};

export default Navigation;
