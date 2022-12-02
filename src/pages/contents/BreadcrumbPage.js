import React from "react";
import "./BreadcrumbPage.scss";
import CloseBtn from "../../components/CloseBtn";
import Breadcrumb from "../../components/uiitems/Breadcrumb";
import { useEffect } from "react";

const BreadcrumbPage = ({ backgroundColor, setMenuHidden }) => {
  useEffect(() => {
    setMenuHidden(true);
  }, []);
  return (
    <div
      className="contents-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <Breadcrumb></Breadcrumb>
      <CloseBtn linkTo="stationery"></CloseBtn>
    </div>
  );
};

export default BreadcrumbPage;
