import React from "react";
import "./SnackbarPage.scss";
import CloseBtn from "../../components/CloseBtn";
import Snackbar from "../../components/uiitems/Snackbar";

const SnackbarPage = ({ backgroundColor }) => {
  return (
    <div
      className="contents-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <Snackbar
        className="snackbar"
        contents="Snackbar"
        button="Yes"
      ></Snackbar>
      <CloseBtn linkTo="stationery"></CloseBtn>
    </div>
  );
};

export default SnackbarPage;
