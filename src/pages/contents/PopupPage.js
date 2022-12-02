import React, { useEffect, useState } from "react";
import CloseBtn from "../../components/CloseBtn";
import Popup from "../../components/uiitems/Popup";
import "./PopupPage.scss";

const PopupPage = ({ colors, setMenuHidden }) => {
  const pink = "#FF85D5";
  const orange = "#FF5C00";
  const yellow = "#FFD600";
  const colorSet = [pink, orange, yellow];
  const [colorNum, setColorNum] = useState(1);
  const [zIndexNum, setZIndexNum] = useState(1);
  const [popupRef, setPopupRef] = useState("");

  const [popups, setPopups] = useState([[0, "50%", "50%", colors[0]]]);
  console.log(popups);

  useEffect(() => {
    setMenuHidden(true);
  }, []);

  return (
    <div
      className="contents-container"
      style={{ backgroundColor: colors.blue }}
    >
      {popups &&
        popups.map((item, index) => (
          <Popup
            key={index}
            index={index}
            className="pop-up"
            zIndex={item[0]}
            left={item[1]}
            top={item[2]}
            color={item[3]}
            colorSet={colorSet}
            popups={popups}
            setPopups={setPopups}
            colorNum={colorNum}
            setColorNum={setColorNum}
            zIndexNum={zIndexNum}
            setZIndexNum={setZIndexNum}
            popupRef={popupRef}
            setPopupRef={setPopupRef}
          ></Popup>
        ))}
      <CloseBtn
        linkTo="bbopgi"
        color={colors.pink}
        hoverColor={colors.orange}
      ></CloseBtn>
    </div>
  );
};

export default PopupPage;
