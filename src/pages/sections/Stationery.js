import React, { useEffect } from "react";
import "./Stationery.scss";
import TextBox from "../../components/TextBox";
import { ReactComponent as Pencil } from "../../static/svg/shadow/pencil.svg";
import { ReactComponent as PencilShadow } from "../../static/svg/shadow/pencilShadow.svg";
import { ReactComponent as SnackbarSvg } from "../../static/svg/shadow/snackbar.svg";
import { ReactComponent as SnackbarShadow } from "../../static/svg/shadow/snackbarShadow.svg";
import { useState, useRef } from "react";
import Snackbar from "../../components/uiitems/Snackbar";
import { useNavigate } from "react-router-dom";

const Stationery = ({ colors, setMenuHidden }) => {
  const [allowClippath, setAllowClippath] = useState(false);
  const [allowClicked, setAllowClicked] = useState(false);
  const [reveal, setReveal] = useState(true);

  const pencilRef = useRef();
  const lightRef = useRef();
  const lightRef2 = useRef();
  const snackbarRef = useRef();
  const transitionRef = useRef();

  const navigate = useNavigate();

  const goToPage = (title) => {
    navigate(`/${title}`);
  };

  useEffect(() => {
    setAllowClicked(false);
    setMenuHidden(false);
  }, []);

  const handleEnter = (e, light, object) => {
    if (!allowClicked) {
      light.current.style.transition = "0s";
      const dimensions = object.current.getBoundingClientRect();
      let x =
        ((e.clientX - dimensions.x) / (dimensions.right - dimensions.x)) * 100;
      let y =
        ((e.clientY - dimensions.y) / (dimensions.bottom - dimensions.y)) * 100;
      light.current.style.clipPath = `circle(0% at ${x}% ${y}%)`;
      light.current.style.transition = "0.1s";
      setTimeout(() => {
        light.current.style.clipPath = `circle(40% at ${x}% ${y}%)`;
      }, 50);
    }
  };

  const handleOver = (e, light, object) => {
    if (!allowClicked) {
      setAllowClippath(true);
      if (allowClippath) {
        light.current.style.transition = "0s";
        const dimensions = object.current.getBoundingClientRect();
        let x =
          ((e.clientX - dimensions.x) / (dimensions.right - dimensions.x)) *
          100;
        let y =
          ((e.clientY - dimensions.y) / (dimensions.bottom - dimensions.y)) *
          100;
        light.current.style.clipPath = `circle(40% at ${x}% ${y}%)`;
      }
    }
  };

  const handleLeave = (e, light, object) => {
    if (!allowClicked) {
      light.current.style.transition = "0.1s";
      const dimensions = object.current.getBoundingClientRect();

      let x =
        ((e.clientX - dimensions.x) / (dimensions.right - dimensions.x)) * 100;
      let y =
        ((e.clientY - dimensions.y) / (dimensions.bottom - dimensions.y)) * 100;
      setTimeout(() => {
        light.current.style.clipPath = `circle(0% at ${x}% ${y}%)`;
      }, 100);
      setAllowClippath(false);
    }
  };

  const handleClick = (e, light, object) => {
    if (!allowClicked) {
      light.current.style.transition = "0.5s";
      const dimensions = object.current.getBoundingClientRect();

      let x =
        ((e.clientX - dimensions.x) / (dimensions.right - dimensions.x)) * 100;
      let y =
        ((e.clientY - dimensions.y) / (dimensions.bottom - dimensions.y)) * 100;

      light.current.style.clipPath = `circle(100% at ${x}% ${y}%)`;
    }
  };

  const handleDoubleClick = (e, light, object, linkTo) => {
    console.log(e.detail);
    if (e.detail === 2) {
      setAllowClicked(true);
      light.current.style.clipPath = `circle(100% at ${50}% ${50}%)`;
      object.current.style.top = "50%";
      object.current.style.left = "50%";
      object.current.style.translate = "-50% -50%";
      object.current.style.cursor = "default";
      object.current.style.zIndex = "12";

      setTimeout(() => {
        transitionRef.current.style.left = "0%";
        //containerRef.current.style.backgroundColor = colors.pink;
      }, 50);

      setTimeout(() => {
        goToPage(linkTo);
      }, 3000);
    }
  };

  return (
    <div className="page-container">
      {allowClicked ? (
        <div
          className="transition-container"
          ref={transitionRef}
          style={{ backgroundColor: colors.yellow }}
        >
          {" "}
        </div>
      ) : (
        ""
      )}
      <div
        className="main-container"
        style={{ backgroundColor: colors.orange }}
      >
        <TextBox item={["popup", "input", "button"]}></TextBox>
        <div
          className="pencil-holder"
          ref={pencilRef}
          onMouseEnter={(e) => handleEnter(e, lightRef, pencilRef)}
          onMouseMove={(e) => handleOver(e, lightRef, pencilRef)}
          onMouseLeave={(e) => handleLeave(e, lightRef, pencilRef)}
          onMouseDown={(e) => handleClick(e, lightRef, pencilRef, false)}
        >
          <PencilShadow className="pencil-shadow"></PencilShadow>
          <Pencil
            ref={lightRef}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="pencil"
          ></Pencil>
        </div>

        <div
          className="snackbar-holder"
          ref={snackbarRef}
          onMouseEnter={(e) => handleEnter(e, lightRef2, snackbarRef)}
          onMouseMove={(e) => handleOver(e, lightRef2, snackbarRef)}
          onMouseLeave={(e) => handleLeave(e, lightRef2, snackbarRef)}
          onMouseDown={(e) => handleClick(e, lightRef2, snackbarRef, true)}
          onClick={(e) =>
            handleDoubleClick(e, lightRef2, snackbarRef, "stationery/snackbar")
          }
        >
          <SnackbarShadow className="snackbar-shadow"></SnackbarShadow>
          <SnackbarSvg
            ref={lightRef2}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="snackbar-svg"
          ></SnackbarSvg>
        </div>
        {/* <Snackbar
        contents="Snackbar"
        button="Yes"
        className="snackbar"
      ></Snackbar> */}
      </div>
    </div>
  );
};

export default Stationery;
