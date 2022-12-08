import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap, Power0 } from "gsap";
import "./Home.scss";

import { ReactComponent as StreetElem1 } from "../static/svg/streetElem1.svg";
import { ReactComponent as StreetElem2 } from "../static/svg/streetElem2.svg";
import { ReactComponent as Cloud } from "../static/svg/cloud.svg";
import { ReactComponent as Star } from "../static/svg/star.svg";
import { ReactComponent as Star2 } from "../static/svg/star2.svg";
import { ReactComponent as Spark } from "../static/svg/spark.svg";
import { ReactComponent as Spark2 } from "../static/svg/spark2.svg";
import { ReactComponent as Snackbar } from "../static/svg/snackbar.svg";
import { ReactComponent as Input } from "../static/svg/input.svg";
import { ReactComponent as Button } from "../static/svg/button.svg";
import { ReactComponent as Popup } from "../static/svg/popup.svg";
import { ReactComponent as Toggle } from "../static/svg/toggle.svg";
import { ReactComponent as Breadcrumb } from "../static/svg/breadcrumb.svg";
import { ReactComponent as Navigation } from "../static/svg/navigation.svg";
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
  const starRef2 = useRef();
  const starRef3 = useRef();
  const starRef4 = useRef();
  const starRef5 = useRef();
  const star2Ref = useRef();
  const star2Ref2 = useRef();
  const star2Ref3 = useRef();
  const star2Ref4 = useRef();
  const star2Ref5 = useRef();
  const sparkRef = useRef();
  const sparkRef2 = useRef();
  const sparkRef3 = useRef();
  const sparkRef4 = useRef();
  const sparkRef5 = useRef();
  const spark2Ref = useRef();
  const spark2Ref2 = useRef();
  const spark2Ref3 = useRef();
  const spark2Ref4 = useRef();
  const uielemRef = useRef();
  const uielemRef2 = useRef();
  const uielemRef3 = useRef();
  const uielemRef4 = useRef();
  const uielemRef5 = useRef();
  const uielemRef6 = useRef();
  const uielemRef7 = useRef();

  const flow = (item, progress, y) => {
    let width = item.current && item.current.clientWidth;
    item.current.style.top = `${y}`;

    item.current.style.left = `${-width}px`;
    let flow = gsap.to(item.current, 100, {
      x: `+=${window.innerWidth + width}`,
      repeat: -1,
      ease: Power0.easeNone,
    });

    flow.progress(progress);
  };

  const flow2 = (item, progress, y) => {
    let width = item.current && item.current.clientWidth;
    item.current.style.top = `${y}`;

    item.current.style.left = `${-width}px`;
    let flow = gsap.to(item.current, 70, {
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
    flow(cloudRef, 0.25, "5vh");
    flow(cloudRef2, 0.85, "10vh");
    flow(cloudRef3, 0.05, "20vh");
    flow(cloudRef4, 0.55, "45vh");
    flow(cloudRef5, 0.15, "50vh");
    flow(cloudRef6, 0.8, "65vh");
    flow2(uielemRef, 0.65, "80vh");
    flow2(uielemRef2, 0.75, "50vh");
    flow2(uielemRef3, 0.35, "40vh");
    flow2(uielemRef4, 0.65, "20vh");
    flow2(uielemRef5, 0.55, "5vh");
    flow2(uielemRef6, 0.05, "70vh");
    flow2(uielemRef7, 0.15, "30vh");
    blink(starRef, 0, "20vw", "40vh");
    blink(starRef2, 0, "3vw", "40vh");
    blink(starRef3, 0, "15vw", "75vh");
    blink(starRef4, 0, "80vw", "20vh");
    blink(starRef5, 0, "90vw", "60vh");
    blink(star2Ref, 0, "75vw", "50vh");
    blink(star2Ref2, 0, "20vw", "15vh");
    blink(star2Ref3, 0, "70vw", "5vh");
    blink(star2Ref4, 0, "25vw", "60vh");
    blink(star2Ref5, 0, "5vw", "5vh");
    blink(sparkRef, 0, "50vw", "5vh");
    blink(sparkRef2, 0, "10vw", "50vh");
    blink(sparkRef3, 0, "65vw", "40vh");
    blink(sparkRef4, 0, "90vw", "30vh");
    blink(spark2Ref, 0, "10vw", "25vh");
    blink(spark2Ref2, 0, "90vw", "5vh");
    blink(spark2Ref3, 0, "5vw", "65vh");
    blink(spark2Ref4, 0, "80vw", "75vh");
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
    alert(
      "UI SPY는 User Interface를 쉽게 이해할 수 있도록하는 인터랙션 웹페이지 입니다. \n 체험을 원하신다면 하단 메뉴탭으로 이동해주세요!"
    );
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
      {/* <TopDecoLeft home={home}></TopDecoLeft> */}
      {/* <TopDecoRight home={home}></TopDecoRight> */}
      <div className="building-container one">
        <StreetElem1 className="street-elem1"></StreetElem1>
      </div>
      <div className="building-container two">
        <StreetElem2 className="street-elem2"></StreetElem2>
      </div>
      <Snackbar className="ui-elem" ref={uielemRef}></Snackbar>
      <Input className="ui-elem" ref={uielemRef2}></Input>
      <Button className="ui-elem" ref={uielemRef3}></Button>
      <Popup className="ui-elem" ref={uielemRef4}></Popup>
      <Toggle className="ui-elem" ref={uielemRef5}></Toggle>
      <Breadcrumb className="ui-elem" ref={uielemRef6}></Breadcrumb>
      <Navigation className="ui-elem" ref={uielemRef7}></Navigation>
      <Cloud className="cloud one" ref={cloudRef}></Cloud>
      <Cloud className="cloud two" ref={cloudRef2}></Cloud>
      <Cloud className="cloud two" ref={cloudRef3}></Cloud>
      <Cloud className="cloud one" ref={cloudRef4}></Cloud>
      <Cloud className="cloud two" ref={cloudRef5}></Cloud>
      <Cloud className="cloud one" ref={cloudRef6}></Cloud>
      <Star className="star" ref={starRef}></Star>
      <Star className="star" ref={starRef2}></Star>
      <Star className="star" ref={starRef3}></Star>
      <Star className="star" ref={starRef4}></Star>
      <Star className="star" ref={starRef5}></Star>
      <Star2 className="star" ref={star2Ref}></Star2>
      <Star2 className="star" ref={star2Ref2}></Star2>
      <Star2 className="star" ref={star2Ref3}></Star2>
      <Star2 className="star" ref={star2Ref4}></Star2>
      <Star2 className="star" ref={star2Ref5}></Star2>
      <Spark className="star" ref={sparkRef}></Spark>
      <Spark className="star" ref={sparkRef2}></Spark>
      <Spark className="star" ref={sparkRef3}></Spark>
      <Spark className="star" ref={sparkRef4}></Spark>
      <Spark2 className="star" ref={spark2Ref}></Spark2>
      <Spark2 className="star" ref={spark2Ref2}></Spark2>
      <Spark2 className="star" ref={spark2Ref3}></Spark2>
      <Spark2 className="star" ref={spark2Ref4}></Spark2>
    </div>
  );
};

export default Home;
