import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap, Power0 } from "gsap";
import "./Home.scss";

import { ReactComponent as StreetElem1 } from "../static/svg/streetElem1.svg";
import { ReactComponent as StreetElem2 } from "../static/svg/streetElem2.svg";
import { ReactComponent as Cloud } from "../static/svg/cloud.svg";
import { ReactComponent as Star } from "../static/svg/star.svg";
import AnimationMain from "../components/animation/AnimationMain";
import EyeBalls from "../components/animation/EyeBalls";
import EyeBalls2 from "../components/animation/EyeBalls2";
import TopDecoLeft from "../components/animation/TopDecoLeft";
import TopDecoRight from "../components/animation/TopDecoRight";
import { useNavigate } from "react-router-dom";

const Home = ({ colors, home, setHome, setMenu }) => {
  const [scrollNum, setScrollNum] = useState(0);
  const [zoomScale, setZoomScale] = useState(0);
  const navigate = useNavigate();

  const cloudRef = useRef();
  const cloudRef2 = useRef();
  const cloudRef3 = useRef();
  const cloudRef4 = useRef();
  const cloudRef5 = useRef();
  const cloudRef6 = useRef();
  const starRef = useRef();

  const flow = (item, progress, y) => {
    let width = item.current && item.current.clientWidth;
    item.current.style.top = `${y}`;

    item.current.style.left = `${-width}px`;
    let flow = gsap.to(item.current, 50, {
      x: `+=${window.innerWidth + width}`,
      repeat: -1,
      ease: Power0.easeNone,
    });

    flow.progress(progress);
  };

  const blink = (item, progress, x, y) => {
    item.current.style.left = `${x}`;
    item.current.style.top = `${y}`;
    let zoom = gsap.fromTo(
      item.current,
      0.5,
      {
        scale: 0.6,
      },
      {
        scale: 0.8,
        repeat: -1,
        yoyo: true,
        ease: Power0.easeNone,
      }
    );
    zoom.progress(progress);
  };

  useLayoutEffect(() => {
    flow(cloudRef, 0.25, "10vh");
    flow(cloudRef2, 0.75, "10vh");
    flow(cloudRef3, 0.05, "30vh");
    flow(cloudRef4, 0.55, "30vh");
    flow(cloudRef5, 0.15, "50vh");
    flow(cloudRef6, 0.65, "50vh");
    blink(starRef, 0, "20vw", "20vh");
  }, []);

  //zoom event
  const test = (event) => {
    setScrollNum(scrollNum + event.deltaY);
    if (scrollNum < 0) {
      setZoomScale(0);
      setScrollNum(0);
    } else {
      setZoomScale(scrollNum);
    }
    console.log(zoomScale);
  };
  useEffect(() => {
    setMenu(false);
    setHome(true);
    if (zoomScale > 10000) {
      navigate("/menu");
    }
  }, [zoomScale]);

  return (
    <div
      className="main-container"
      onWheel={(event) => test(event)}
      style={{ backgroundColor: colors.pink }}
    >
      <EyeBalls home={home}></EyeBalls>
      <EyeBalls2 home={home}></EyeBalls2>
      <AnimationMain home={home}></AnimationMain>
      <TopDecoLeft home={home}></TopDecoLeft>
      <TopDecoRight home={home}></TopDecoRight>
      <div className="building-container">
        <StreetElem1 className="street-elem1"></StreetElem1>
        <StreetElem2 className="street-elem2"></StreetElem2>
      </div>
      <Cloud className="cloud" ref={cloudRef}></Cloud>
      <Cloud className="cloud" ref={cloudRef2}></Cloud>
      <Cloud className="cloud" ref={cloudRef3}></Cloud>
      <Cloud className="cloud" ref={cloudRef4}></Cloud>
      <Cloud className="cloud" ref={cloudRef5}></Cloud>
      <Cloud className="cloud" ref={cloudRef6}></Cloud>
      <Star className="star" ref={starRef}></Star>
    </div>
  );
};

export default Home;
