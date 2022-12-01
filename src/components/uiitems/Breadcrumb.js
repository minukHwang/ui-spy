import React from "react";
import "./Breadcrumb.scss";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-container">
        <a className="breadcrumb-link 0">Bread</a>
        <div className="breadcrumb-deco">&gt;</div>
        <a className="breadcrumb-link 1">Crumb</a>
        <div className="breadcrumb-deco">&gt;</div>
        <a className="breadcrumb-link 2">Bread</a>
        <div className="breadcrumb-deco">&gt;</div>
        <a className="breadcrumb-link 3">Crumb</a>
      </div>
    </div>
  );
};

export default Breadcrumb;
