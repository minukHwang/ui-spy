import React from "react";
import { forwardRef } from "react";
import "./Snackbar.scss";

const Snackbar = forwardRef(({ contents, button, setIsRain }, ref) => {
  return (
    <div className="snackbar" ref={ref}>
      <div className="snackbar-title">{contents}</div>
      <div className="snackbar-btn">{button}</div>
    </div>
  );
});

export default Snackbar;
