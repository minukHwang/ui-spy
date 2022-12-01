import React from "react";
import "./Snackbar.scss";

const Snackbar = ({ contents, button }) => {
  return (
    <div className="snackbar">
      <div className="snackbar-title">{contents}</div>
      <div className="snackbar-btn">{button}</div>
    </div>
  );
};

export default Snackbar;
