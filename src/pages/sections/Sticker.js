import React, { useEffect } from "react";
import "./Sticker.scss";
import TextBox from "../../components/TextBox";
import { ReactComponent as Sticker1 } from "../../static/svg/stickers/1.svg";
import { ReactComponent as Sticker2 } from "../../static/svg/stickers/2.svg";
import { ReactComponent as Sticker3 } from "../../static/svg/stickers/3.svg";
import { ReactComponent as Sticker4 } from "../../static/svg/stickers/4.svg";
import { ReactComponent as Sticker5 } from "../../static/svg/stickers/5.svg";
import { ReactComponent as Sticker6 } from "../../static/svg/stickers/6.svg";
import { ReactComponent as Sticker7 } from "../../static/svg/stickers/7.svg";
import { ReactComponent as Sticker8 } from "../../static/svg/stickers/8.svg";
import { ReactComponent as Sticker9 } from "../../static/svg/stickers/9.svg";
import { ReactComponent as Sticker10 } from "../../static/svg/stickers/10.svg";
import { ReactComponent as Sticker11 } from "../../static/svg/stickers/11.svg";
import { ReactComponent as Sticker12 } from "../../static/svg/stickers/12.svg";
import { ReactComponent as Sticker13 } from "../../static/svg/stickers/13.svg";
import { ReactComponent as Navigation } from "../../static/svg/stickers/navigation.svg";
import { ReactComponent as Toggle } from "../../static/svg/toggle.svg";

import Draggable from "react-draggable";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Sticker = ({ colors, setMenuHidden, setMenu }) => {
  const [allowMove, setAllowMove] = useState();
  const stickerRef1 = useRef();
  const stickerRef2 = useRef();
  const stickerRef3 = useRef();
  const stickerRef4 = useRef();
  const stickerRef5 = useRef();
  const stickerRef6 = useRef();
  const stickerRef7 = useRef();
  const stickerRef8 = useRef();
  const stickerRef9 = useRef();
  const stickerRef10 = useRef();
  const stickerRef11 = useRef();
  const stickerRef12 = useRef();
  const stickerRef13 = useRef();
  const navigationRef = useRef();
  const toggleRef = useRef();
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);
  const [dZIndex, setDZIndex] = useState(1);
  const [allowClicked, setAllowClicked] = useState(false);
  const transitionRef = useRef();
  const [isLink, setIsLink] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setMenu(false);
    setMenuHidden(false);
    alert(
      "스티커속에 UI 요소를 찾아 더블 클릭해보세요! \n마우스가 원할히 작동하지 않는다면, 새로고침을 눌러주세요"
    );
  }, []);

  const goToPage = (title) => {
    navigate(`/${title}`);
  };

  const handleMouseDown = (e, sticker) => {
    setDZIndex(dZIndex + 1);
    setAllowMove(true);
    const dimensions = sticker.current.getBoundingClientRect();
    sticker.current.style.rotate = -10 + "deg";
    setDx(e.clientX - dimensions.x);
    setDy(e.clientY - dimensions.y);
    //sticker.current.style.zIndex = 10;
  };

  const handleMouseMove = (e, sticker) => {
    if (allowMove) {
      const x = e.clientX - dx;
      const y = e.clientY - dy;
      sticker.current.style.left = x + "px";
      sticker.current.style.top = y + "px";
      //sticker.current.style.zIndex = 10;

      //move
      if (e.movementX > 0) {
        sticker.current.style.rotate = +10 + "deg";
      } else if (e.movementX < 0) {
        sticker.current.style.rotate = -10 + "deg";
      }
    }
  };

  const handleMouseUp = (sticker) => {
    setAllowMove(false);
    sticker.current.style.rotate = 0 + "deg";
    //sticker.current.style.zIndex = dZIndex;
    console.log(dZIndex);
  };

  const handleDoubleClick = (e, object, linkTo) => {
    console.log(e.detail);
    if (e.detail === 2) {
      setAllowClicked(true);

      if (object === navigationRef) {
        setIsLink("navigation");
      } else if (object === toggleRef) {
        setIsLink("toggle");
      }
      object.current.style.top = "50vh";
      object.current.style.left = "50%";
      object.current.style.translate = "-50% -50%";
      object.current.style.cursor = "default";
      object.current.style.zIndex = 100;

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
      {allowClicked && isLink === "navigation" ? (
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
      {allowClicked && isLink === "toggle" ? (
        <div
          className="transition-container"
          ref={transitionRef}
          style={{ backgroundColor: colors.green }}
        >
          {" "}
        </div>
      ) : (
        ""
      )}
      <div
        className="main-container"
        style={{ backgroundColor: colors.yellow }}
      >
        <TextBox item={["toggle", "navigation"]}></TextBox>
        <Sticker1
          ref={stickerRef1}
          className="sticker1"
          onMouseDown={(e) => handleMouseDown(e, stickerRef1)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef1)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef1)}
          onMouseUp={(e) => handleMouseUp(stickerRef1)}
        ></Sticker1>

        <Sticker2
          className="sticker2"
          ref={stickerRef2}
          onMouseDown={(e) => handleMouseDown(e, stickerRef2)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef2)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef2)}
          onMouseUp={(e) => handleMouseUp(stickerRef2)}
        ></Sticker2>

        <Sticker3
          className="sticker3"
          ref={stickerRef3}
          onMouseDown={(e) => handleMouseDown(e, stickerRef3)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef3)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef3)}
          onMouseUp={(e) => handleMouseUp(stickerRef3)}
        ></Sticker3>

        <Sticker4
          className="sticker4"
          ref={stickerRef4}
          onMouseDown={(e) => handleMouseDown(e, stickerRef4)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef4)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef4)}
          onMouseUp={(e) => handleMouseUp(stickerRef4)}
        ></Sticker4>

        <Sticker5
          className="sticker5"
          ref={stickerRef5}
          onMouseDown={(e) => handleMouseDown(e, stickerRef5)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef5)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef5)}
          onMouseUp={(e) => handleMouseUp(stickerRef5)}
        ></Sticker5>

        <Sticker6
          className="sticker6"
          ref={stickerRef6}
          onMouseDown={(e) => handleMouseDown(e, stickerRef6)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef6)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef6)}
          onMouseUp={(e) => handleMouseUp(stickerRef6)}
        ></Sticker6>

        <Sticker7
          className="sticker7"
          ref={stickerRef7}
          onMouseDown={(e) => handleMouseDown(e, stickerRef7)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef7)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef7)}
          onMouseUp={(e) => handleMouseUp(stickerRef7)}
        ></Sticker7>

        <Sticker8
          className="sticker8"
          ref={stickerRef8}
          onMouseDown={(e) => handleMouseDown(e, stickerRef8)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef8)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef8)}
          onMouseUp={(e) => handleMouseUp(stickerRef8)}
        ></Sticker8>

        <Sticker9
          className="sticker9"
          ref={stickerRef9}
          onMouseDown={(e) => handleMouseDown(e, stickerRef9)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef9)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef9)}
          onMouseUp={(e) => handleMouseUp(stickerRef9)}
        ></Sticker9>

        <Sticker10
          className="sticker10"
          ref={stickerRef10}
          onMouseDown={(e) => handleMouseDown(e, stickerRef10)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef10)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef10)}
          onMouseUp={(e) => handleMouseUp(stickerRef10)}
        ></Sticker10>

        <Sticker11
          className="sticker11"
          ref={stickerRef11}
          onMouseDown={(e) => handleMouseDown(e, stickerRef11)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef11)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef11)}
          onMouseUp={(e) => handleMouseUp(stickerRef11)}
        ></Sticker11>

        <Sticker12
          className="sticker12"
          ref={stickerRef12}
          onMouseDown={(e) => handleMouseDown(e, stickerRef12)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef12)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef12)}
          onMouseUp={(e) => handleMouseUp(stickerRef12)}
        ></Sticker12>

        <Sticker13
          className="sticker13"
          ref={stickerRef13}
          onMouseDown={(e) => handleMouseDown(e, stickerRef13)}
          onMouseMove={(e) => handleMouseMove(e, stickerRef13)}
          onMouseLeave={(e) => handleMouseMove(e, stickerRef13)}
          onMouseUp={(e) => handleMouseUp(stickerRef13)}
        ></Sticker13>

        <Navigation
          ref={navigationRef}
          className="navigation-svg"
          onClick={(e) =>
            handleDoubleClick(e, navigationRef, "sticker/navigation")
          }
        ></Navigation>
        <Toggle
          ref={toggleRef}
          className="toggle-svg"
          onClick={(e) => handleDoubleClick(e, toggleRef, "sticker/toggle")}
        ></Toggle>
      </div>
    </div>
  );
};

// const Sticker = () => {
//   const nodeRef = useRef(null);
//   const nodeRef2 = useRef(null);

//   const [rotation, setRotation] = useState(0);
//   const [zIndex, setZIndex] = useState(0);
//   const [zIndex2, setZIndex2] = useState(0);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleStart = () => {
//     setRotation(true);
//     setZIndex(zIndex + 10);
//   };
//   const handleEnd = () => {
//     setRotation(false);
//     setZIndex(0);
//     setZIndex(zIndex2 + 1);
//   };

//   const handleStart2 = () => {
//     setRotation(true);
//     setZIndex2(zIndex2 + 10);
//   };
//   const handleEnd2 = () => {
//     setRotation(false);
//     setZIndex2(0);
//     setZIndex2(zIndex + 1);
//   };

//   const trackPos = (data) => {
//     setPosition({ x: data.x, y: data.y });
//   };

//   return (
//     <div className="main-container" style={{ backgroundColor: "#FFD600" }}>
//       <TextBox item={["popup", "input", "button"]}></TextBox>
//       <Draggable
//         nodeRef={nodeRef}
//         onStart={handleStart}
//         onStop={handleEnd}
//         onDrag={(e, data) => trackPos(data)}
//       >
//         <Sticker1
//           ref={nodeRef}
//           className="sticker1"
//           style={{ zIndex: zIndex }}
//         ></Sticker1>
//       </Draggable>

//       <Draggable
//         nodeRef={nodeRef2}
//         onStart={handleStart2}
//         onStop={handleEnd2}
//         onDrag={(e, data) => trackPos(data)}
//       >
//         <Sticker2
//           ref={nodeRef2}
//           className="sticker2"
//           style={{
//             zIndex: zIndex2,
//           }}
//         ></Sticker2>
//       </Draggable>
//     </div>
//   );
// };

export default Sticker;
