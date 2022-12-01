import React from "react";
import "./BreadcrumbPage.scss";
import CloseBtn from "../../components/CloseBtn";
import Breadcrumb from "../../components/uiitems/Breadcrumb";

const BreadcrumbPage = ({ backgroundColor }) => {
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
