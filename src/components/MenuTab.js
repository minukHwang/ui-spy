import React from "react";
import "./MenuTab.scss";
import { useState, useEffect } from "react";
import { ReactComponent as Light } from "../static/svg/light.svg";
import { useNavigate } from "react-router-dom";

const MenuTab = ({ colors, title }) => {
  const colorSet = [
    [
      colors.green,
      colors.orange,
      colors.yellow,
      colors.pink,
      colors.blue,
      colors.pink,
    ],
    [
      colors.yellow,
      colors.green,
      colors.pink,
      colors.blue,
      colors.orange,
      colors.blue,
    ],
    [
      colors.pink,
      colors.blue,
      colors.orange,
      colors.yellow,
      colors.yellow,
      colors.green,
    ],
  ];

  //tab-id
  const [itemNum, setItemNum] = useState(0);
  const getItemNum = () => {
    if (title === "Bbopgi") {
      setItemNum(0);
    } else if (title === "Stationery") {
      setItemNum(1);
    } else if (title === "Sticker") {
      setItemNum(2);
    }
  };

  const navigate = useNavigate();
  const goToPage = (title) => {
    const item = title.toLowerCase();
    navigate(`/${item}`);
  };

  useEffect(() => {
    getItemNum();
  }, []);

  return (
    <div
      className="tab-container"
      style={{ backgroundColor: colorSet[itemNum][0] }}
      onClick={() => goToPage(title)}
    >
      <div className="sign-area">
        <div className="lines"></div>
        <div className="sign-container">
          <div
            className="sign-border"
            style={{ backgroundColor: colorSet[itemNum][1] }}
          >
            <div
              className="sign"
              style={{
                backgroundColor: colorSet[itemNum][2],
                color: colorSet[itemNum][3],
              }}
            >
              {title}
            </div>
          </div>
        </div>
      </div>

      {/* <Light className="light"></Light> */}
    </div>
  );
};

export default MenuTab;
