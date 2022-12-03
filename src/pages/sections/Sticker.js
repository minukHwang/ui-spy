import React, { useEffect } from "react";
import "./Sticker.scss";
import TextBox from "../../components/TextBox";
import { ReactComponent as Sticker1 } from "../../static/svg/stickers/1.svg";
import { ReactComponent as Sticker2 } from "../../static/svg/stickers/2.svg";
import { ReactComponent as Navigation } from "../../static/svg/stickers/navigation.svg";
//import Draggable from "react-draggable";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Sticker = ({ colors, setMenuHidden }) => {
  const [allowMove, setAllowMove] = useState();
  const stickerRef1 = useRef();
  const stickerRef2 = useRef();
  const navigationRef = useRef();
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);
  const [dZIndex, setDZIndex] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    setMenuHidden(false);
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
    sticker.current.style.zIndex = 10;
  };

  const handleMouseMove = (e, sticker) => {
    if (allowMove) {
      const x = e.clientX - dx;
      const y = e.clientY - dy;
      sticker.current.style.left = x + "px";
      sticker.current.style.top = y + "px";
      sticker.current.style.zIndex = 10;

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
    sticker.current.style.zIndex = dZIndex;
    console.log(dZIndex);
  };

  const handleDoubleClick = (e, object, linkTo) => {
    console.log(e.detail);
    if (e.detail === 2) {
      object.current.style.top = "50%";
      object.current.style.left = "50%";
      object.current.style.translate = "-50% -50%";
      object.current.style.cursor = "default";
      object.current.style.zIndex = 100;

      setTimeout(() => {
        goToPage(linkTo);
      }, 1000);
    }
  };

  return (
    <div className="page-container">
      <div
        className="main-container"
        style={{ backgroundColor: colors.yellow }}
      >
        <TextBox item={["popup", "input", "button"]}></TextBox>
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
        <Navigation
          ref={navigationRef}
          className="navigation-svg"
          onClick={(e) =>
            handleDoubleClick(e, navigationRef, "sticker/navigation")
          }
        ></Navigation>
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
