import React, { useEffect } from "react";
import "./Toggle.scss";
import { forwardRef, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const Toggle = forwardRef(({ colors }, ref) => {
  const buttonRef = useRef();
  const textRef = useRef();
  const coverRef = useRef();
  const textWidth =
    textRef.current && textRef.current.getBoundingClientRect().width;
  const textHeight =
    textRef.current && textRef.current.getBoundingClientRect().height;
  console.log(textWidth, textHeight);
  let toggleOn = false;

  useEffect(() => {
    const textWidth =
      textRef.current && textRef.current.getBoundingClientRect().width;
    const textHeight =
      textRef.current && textRef.current.getBoundingClientRect().height;
    console.log(textWidth, textHeight);
    coverRef.current.style.width = "0px";
    coverRef.current.style.left = `calc(100% - 18px - ${textWidth}px)`;
    coverRef.current.style.height = `${56}px`;
  }, []);

  const handleClick = () => {
    if (!toggleOn) {
      buttonRef.current.style.left = "calc(100% - 64px)";
      buttonRef.current.style.backgroundColor = colors.green;
      //textRef.current.style.opacity = "0%";
      coverRef.current.style.width = `${textWidth + 10}px`;
      toggleOn = true;
    } else {
      buttonRef.current.style.left = "calc(8px)";
      buttonRef.current.style.backgroundColor = colors.green;
      //textRef.current.style.opacity = "100%";
      coverRef.current.style.width = "0px";
      toggleOn = false;
    }
  };

  return (
    <div className="toggle" ref={ref}>
      <div className="toggle-container">
        <div className="toggle-btn" ref={buttonRef} onClick={handleClick}></div>
        <div className="toggle-text" ref={textRef}>
          Toggle
        </div>
        <div className="cover-elem" ref={coverRef}></div>
      </div>
    </div>
  );
});

export default Toggle;
