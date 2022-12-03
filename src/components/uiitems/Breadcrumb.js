import React from "react";
import "./Breadcrumb.scss";
import { useRef, forwardRef } from "react";

const Breadcrumb = forwardRef((props, ref) => {
  const linkRef0 = useRef();
  const linkRef1 = useRef();
  const linkRef2 = useRef();
  const linkRef3 = useRef();

  const handleClick0 = () => {
    linkRef0.current.style.color = "black";
    linkRef1.current.style.color = "#7C6B24";
    linkRef2.current.style.color = "#7C6B24";
    linkRef3.current.style.color = "#7C6B24";
  };
  const handleClick1 = () => {
    linkRef0.current.style.color = "#7C6B24";
    linkRef1.current.style.color = "black";
    linkRef2.current.style.color = "#7C6B24";
    linkRef3.current.style.color = "#7C6B24";
  };
  const handleClick2 = () => {
    linkRef0.current.style.color = "#7C6B24";
    linkRef1.current.style.color = "#7C6B24";
    linkRef2.current.style.color = "black";
    linkRef3.current.style.color = "#7C6B24";
  };
  const handleClick3 = () => {
    linkRef0.current.style.color = "#7C6B24";
    linkRef1.current.style.color = "#7C6B24";
    linkRef2.current.style.color = "#7C6B24";
    linkRef3.current.style.color = "black";
  };
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-container" ref={ref}>
        <a className="breadcrumb-link 0" onClick={handleClick0} ref={linkRef0}>
          Bread
        </a>
        <div className="breadcrumb-deco">&gt;</div>
        <a className="breadcrumb-link 1" onClick={handleClick1} ref={linkRef1}>
          Crumb
        </a>
        <div className="breadcrumb-deco">&gt;</div>
        <a className="breadcrumb-link 2" onClick={handleClick2} ref={linkRef2}>
          Bread
        </a>
        <div className="breadcrumb-deco">&gt;</div>
        <a className="breadcrumb-link 3" onClick={handleClick3} ref={linkRef3}>
          Crumb
        </a>
      </div>
    </div>
  );
});

export default Breadcrumb;
