import React from "react";
import "./TextBox.scss";

const TextBox = ({ item }) => {
  return (
    <div className="textbox">
      <div className="textbox-sanserif stop-dragging ">I spy</div>
      <div className="textbox-serif stop-dragging ">
        {item.map((elements) => {
          return (
            <div key={elements} className="item-text">
              {elements}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TextBox;
