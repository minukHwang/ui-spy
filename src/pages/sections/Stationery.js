import React, { useEffect } from "react";
import "./Stationery.scss";
import TextBox from "../../components/TextBox";
import { ReactComponent as Pencil } from "../../static/svg/shadow/pencil.svg";
import { ReactComponent as PencilShadow } from "../../static/svg/shadow/pencilShadow.svg";
import { ReactComponent as SnackbarSvg } from "../../static/svg/shadow/snackbar.svg";
import { ReactComponent as SnackbarShadow } from "../../static/svg/shadow/snackbarShadow.svg";
import { ReactComponent as BreadcrumbShadow } from "../../static/svg/shadow/breadcrumbShadow.svg";
import { ReactComponent as Breadcrumb } from "../../static/svg/shadow/breadcrumb.svg";

import { ReactComponent as Object1 } from "../../static/svg/shadow/shadows/1.svg";
import { ReactComponent as ObjectShadow1 } from "../../static/svg/shadow/shadows/1shadow.svg";

import { ReactComponent as Object2 } from "../../static/svg/shadow/shadows/2.svg";
import { ReactComponent as ObjectShadow2 } from "../../static/svg/shadow/shadows/2shadow.svg";

import { ReactComponent as Object3 } from "../../static/svg/shadow/shadows/3.svg";
import { ReactComponent as ObjectShadow3 } from "../../static/svg/shadow/shadows/3shadow.svg";

import { ReactComponent as Object4 } from "../../static/svg/shadow/shadows/4.svg";
import { ReactComponent as ObjectShadow4 } from "../../static/svg/shadow/shadows/4shadow.svg";

import { ReactComponent as Object5 } from "../../static/svg/shadow/shadows/5.svg";
import { ReactComponent as ObjectShadow5 } from "../../static/svg/shadow/shadows/5shadow.svg";

import { ReactComponent as Object6 } from "../../static/svg/shadow/shadows/6.svg";
import { ReactComponent as ObjectShadow6 } from "../../static/svg/shadow/shadows/6shadow.svg";

import { ReactComponent as Object7 } from "../../static/svg/shadow/shadows/7.svg";
import { ReactComponent as ObjectShadow7 } from "../../static/svg/shadow/shadows/7shadow.svg";

import { ReactComponent as Object8 } from "../../static/svg/shadow/shadows/8.svg";
import { ReactComponent as ObjectShadow8 } from "../../static/svg/shadow/shadows/8shadow.svg";

import { ReactComponent as Object9 } from "../../static/svg/shadow/shadows/9.svg";
import { ReactComponent as ObjectShadow9 } from "../../static/svg/shadow/shadows/9shadow.svg";

import { ReactComponent as Object10 } from "../../static/svg/shadow/shadows/10.svg";
import { ReactComponent as ObjectShadow10 } from "../../static/svg/shadow/shadows/10shadow.svg";

import { ReactComponent as Object11 } from "../../static/svg/shadow/shadows/11.svg";
import { ReactComponent as ObjectShadow11 } from "../../static/svg/shadow/shadows/11shadow.svg";

import { ReactComponent as Object12 } from "../../static/svg/shadow/shadows/12.svg";
import { ReactComponent as ObjectShadow12 } from "../../static/svg/shadow/shadows/12shadow.svg";

import { ReactComponent as Object13 } from "../../static/svg/shadow/shadows/13.svg";
import { ReactComponent as ObjectShadow13 } from "../../static/svg/shadow/shadows/13shadow.svg";

import { ReactComponent as Star } from "../../static/svg/shadow/shadows/star.svg";
import { ReactComponent as Spark } from "../../static/svg/shadow/shadows/spark.svg";
import { ReactComponent as Do } from "../../static/svg/shadow/shadows/Do.svg";
import { ReactComponent as You } from "../../static/svg/shadow/shadows/You.svg";
import { ReactComponent as Know } from "../../static/svg/shadow/shadows/Know.svg";

import { useState, useRef } from "react";
import Snackbar from "../../components/uiitems/Snackbar";
import { useNavigate } from "react-router-dom";

const Stationery = ({ colors, setMenuHidden, setMenu }) => {
  const [allowClippath, setAllowClippath] = useState(false);
  const [allowClicked, setAllowClicked] = useState(false);
  const [reveal, setReveal] = useState(true);
  const [isLink, setIsLink] = useState("");

  const pencilRef = useRef();
  const lightRef = useRef();
  const lightRef2 = useRef();
  const lightRef3 = useRef();
  const snackbarRef = useRef();
  const breadcrumbRef = useRef();
  const transitionRef = useRef();

  const objectRef1 = useRef();
  const objectLightRef1 = useRef();

  const objectRef2 = useRef();
  const objectLightRef2 = useRef();

  const objectRef3 = useRef();
  const objectLightRef3 = useRef();

  const objectRef4 = useRef();
  const objectLightRef4 = useRef();

  const objectRef5 = useRef();
  const objectLightRef5 = useRef();

  const objectRef6 = useRef();
  const objectLightRef6 = useRef();

  const objectRef7 = useRef();
  const objectLightRef7 = useRef();

  const objectRef8 = useRef();
  const objectLightRef8 = useRef();

  const objectRef9 = useRef();
  const objectLightRef9 = useRef();

  const objectRef10 = useRef();
  const objectLightRef10 = useRef();

  const objectRef11 = useRef();
  const objectLightRef11 = useRef();

  const objectRef12 = useRef();
  const objectLightRef12 = useRef();

  const objectRef13 = useRef();
  const objectLightRef13 = useRef();

  const navigate = useNavigate();

  const goToPage = (title) => {
    navigate(`/${title}`);
  };

  useEffect(() => {
    alert("UI 요소를 찾아 더블 클릭해보세요!");
    setMenu(false);
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
      if (object === breadcrumbRef) {
        setIsLink("breadcrumb");
      } else if (object === snackbarRef) {
        setIsLink("snackbar");
      }

      light.current.style.clipPath = `circle(100% at ${50}% ${50}%)`;
      object.current.style.top = "50vh";
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
      {allowClicked && isLink === "snackbar" ? (
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
      {allowClicked && isLink === "breadcrumb" ? (
        <div
          className="transition-container"
          ref={transitionRef}
          style={{ backgroundColor: colors.pink }}
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
        <TextBox item={["snackbar", "breadcrumb"]}></TextBox>
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

        <div
          className="breadcrumb-holder"
          ref={breadcrumbRef}
          onMouseEnter={(e) => handleEnter(e, lightRef3, breadcrumbRef)}
          onMouseMove={(e) => handleOver(e, lightRef3, breadcrumbRef)}
          onMouseLeave={(e) => handleLeave(e, lightRef3, breadcrumbRef)}
          onMouseDown={(e) => handleClick(e, lightRef3, breadcrumbRef, true)}
          onClick={(e) =>
            handleDoubleClick(
              e,
              lightRef3,
              breadcrumbRef,
              "stationery/breadcrumb"
            )
          }
        >
          <BreadcrumbShadow className="breadcrumb-shadow"></BreadcrumbShadow>
          <Breadcrumb
            ref={lightRef3}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="breadcrumb-svg"
          ></Breadcrumb>
        </div>

        <div
          className="holder1"
          ref={objectRef1}
          onMouseEnter={(e) => handleEnter(e, objectLightRef1, objectRef1)}
          onMouseMove={(e) => handleOver(e, objectLightRef1, objectRef1)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef1, objectRef1)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef1, objectRef1, false)
          }
        >
          <ObjectShadow1 className="shadow1"></ObjectShadow1>
          <Object1
            ref={objectLightRef1}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object1"
          ></Object1>
        </div>

        <div
          className="holder2"
          ref={objectRef2}
          onMouseEnter={(e) => handleEnter(e, objectLightRef2, objectRef2)}
          onMouseMove={(e) => handleOver(e, objectLightRef2, objectRef2)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef2, objectRef2)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef2, objectRef2, false)
          }
        >
          <ObjectShadow2 className="shadow2"></ObjectShadow2>
          <Object2
            ref={objectLightRef2}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object2"
          ></Object2>
        </div>

        <div
          className="holder3"
          ref={objectRef3}
          onMouseEnter={(e) => handleEnter(e, objectLightRef3, objectRef3)}
          onMouseMove={(e) => handleOver(e, objectLightRef3, objectRef3)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef3, objectRef3)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef3, objectRef3, false)
          }
        >
          <ObjectShadow3 className="shadow3"></ObjectShadow3>
          <Object3
            ref={objectLightRef3}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object3"
          ></Object3>
        </div>

        <div
          className="holder4"
          ref={objectRef4}
          onMouseEnter={(e) => handleEnter(e, objectLightRef4, objectRef4)}
          onMouseMove={(e) => handleOver(e, objectLightRef4, objectRef4)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef4, objectRef4)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef4, objectRef4, false)
          }
        >
          <ObjectShadow4 className="shadow4"></ObjectShadow4>
          <Object4
            ref={objectLightRef4}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object4"
          ></Object4>
        </div>

        <div
          className="holder5"
          ref={objectRef5}
          onMouseEnter={(e) => handleEnter(e, objectLightRef5, objectRef5)}
          onMouseMove={(e) => handleOver(e, objectLightRef5, objectRef5)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef5, objectRef5)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef5, objectRef5, false)
          }
        >
          <ObjectShadow5 className="shadow5"></ObjectShadow5>
          <Object5
            ref={objectLightRef5}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object5"
          ></Object5>
        </div>

        <div
          className="holder6"
          ref={objectRef6}
          onMouseEnter={(e) => handleEnter(e, objectLightRef6, objectRef6)}
          onMouseMove={(e) => handleOver(e, objectLightRef6, objectRef6)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef6, objectRef6)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef6, objectRef6, false)
          }
        >
          <ObjectShadow6 className="shadow6"></ObjectShadow6>
          <Object6
            ref={objectLightRef6}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object6"
          ></Object6>
        </div>

        <div
          className="holder7"
          ref={objectRef7}
          onMouseEnter={(e) => handleEnter(e, objectLightRef7, objectRef7)}
          onMouseMove={(e) => handleOver(e, objectLightRef7, objectRef7)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef7, objectRef7)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef7, objectRef7, false)
          }
        >
          <ObjectShadow7 className="shadow7"></ObjectShadow7>
          <Object7
            ref={objectLightRef7}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object7"
          ></Object7>
        </div>

        <div
          className="holder8"
          ref={objectRef8}
          onMouseEnter={(e) => handleEnter(e, objectLightRef8, objectRef8)}
          onMouseMove={(e) => handleOver(e, objectLightRef8, objectRef8)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef8, objectRef8)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef8, objectRef8, false)
          }
        >
          <ObjectShadow8 className="shadow8"></ObjectShadow8>
          <Object8
            ref={objectLightRef8}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object8"
          ></Object8>
        </div>

        <div
          className="holder9"
          ref={objectRef9}
          onMouseEnter={(e) => handleEnter(e, objectLightRef9, objectRef9)}
          onMouseMove={(e) => handleOver(e, objectLightRef9, objectRef9)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef9, objectRef9)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef9, objectRef9, false)
          }
        >
          <ObjectShadow9 className="shadow9"></ObjectShadow9>
          <Object9
            ref={objectLightRef9}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object9"
          ></Object9>
        </div>

        <div
          className="holder10"
          ref={objectRef10}
          onMouseEnter={(e) => handleEnter(e, objectLightRef10, objectRef10)}
          onMouseMove={(e) => handleOver(e, objectLightRef10, objectRef10)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef10, objectRef10)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef10, objectRef10, false)
          }
        >
          <ObjectShadow10 className="shadow10"></ObjectShadow10>
          <Object10
            ref={objectLightRef10}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object10"
          ></Object10>
        </div>

        <div
          className="holder11"
          ref={objectRef11}
          onMouseEnter={(e) => handleEnter(e, objectLightRef11, objectRef11)}
          onMouseMove={(e) => handleOver(e, objectLightRef11, objectRef11)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef11, objectRef11)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef11, objectRef11, false)
          }
        >
          <ObjectShadow11 className="shadow11"></ObjectShadow11>
          <Object11
            ref={objectLightRef11}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object11"
          ></Object11>
        </div>

        <div
          className="holder12"
          ref={objectRef12}
          onMouseEnter={(e) => handleEnter(e, objectLightRef12, objectRef12)}
          onMouseMove={(e) => handleOver(e, objectLightRef12, objectRef12)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef12, objectRef12)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef12, objectRef12, false)
          }
        >
          <ObjectShadow12 className="shadow12"></ObjectShadow12>
          <Object12
            ref={objectLightRef12}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object12"
          ></Object12>
        </div>

        <div
          className="holder13"
          ref={objectRef13}
          onMouseEnter={(e) => handleEnter(e, objectLightRef13, objectRef13)}
          onMouseMove={(e) => handleOver(e, objectLightRef13, objectRef13)}
          onMouseLeave={(e) => handleLeave(e, objectLightRef13, objectRef13)}
          onMouseDown={(e) =>
            handleClick(e, objectLightRef13, objectRef13, false)
          }
        >
          <ObjectShadow13 className="shadow13"></ObjectShadow13>
          <Object13
            ref={objectLightRef13}
            style={{ clipPath: `circle(0% at ${50}% ${50}%)` }}
            className="object13"
          ></Object13>
        </div>
        <Star
          style={{ position: "absolute", left: "79px", top: "142px" }}
        ></Star>
        <Spark
          style={{ position: "absolute", left: "51px", top: "1132px" }}
        ></Spark>

        <Star
          style={{ position: "absolute", left: "657px", top: "1142px" }}
        ></Star>
        <Spark
          style={{ position: "absolute", left: "988px", top: "104px" }}
        ></Spark>

        <Star
          style={{ position: "absolute", left: "2336px", top: "472px" }}
        ></Star>
        <Spark
          style={{ position: "absolute", left: "1751px", top: "495px" }}
        ></Spark>

        <Do
          style={{ position: "absolute", left: "439.87px", top: "753.31px" }}
        ></Do>

        <You
          style={{ position: "absolute", left: "1437px", top: "459.3px" }}
        ></You>

        <Know
          style={{ position: "absolute", left: "1053.18px", top: "1122.71px" }}
        ></Know>

        <Know
          style={{ position: "absolute", left: "1803.18px", top: "122.71px" }}
        ></Know>

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
