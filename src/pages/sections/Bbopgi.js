import React from "react";
import "./Bbopgi.scss";
import { useState, useEffect, useRef } from "react";
import {
  Engine,
  Render,
  Bodies,
  Body,
  Events,
  Composite,
  Runner,
  Mouse,
  MouseConstraint,
} from "matter-js";
import eyeball from "../../static/img/eye.png";
import basketball from "../../static/img/basketball.png";
import capsuleball from "../../static/img/capsuleball.png";
import popupimg from "../../static/img/popup.png";
import Popup from "../../components/uiitems/Popup";
import TextBox from "../../components/TextBox";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Handle } from "../../static/svg/handle.svg";
import { ReactComponent as EyeOrange } from "../../static/svg/eye-orange.svg";

const Bbopgi = ({ colors, isMenu, setIsMenu, setMenuHidden }) => {
  const canvasRef = useRef(null);
  const handleRef = useRef();
  const holderRef = useRef();
  const containerRef = useRef();
  const transitionRef = useRef();

  const navigate = useNavigate();
  const goToPage = (title) => {
    navigate(`/bbopgi/popup`);
  };

  let handleDeg = 0;
  let pixelRatio = window.devicePixelRatio;
  if (window.devicePixelRatio > 1) {
    pixelRatio = 2;
  }
  const engine = Engine.create();
  const [isUiUpdated, setIsUiUpdated] = useState(false);
  const handleClick = (e) => {
    handleDeg += 360;
    handleRef.current.style.rotate = handleDeg + "deg";
    const eye = Bodies.circle((window.innerWidth * pixelRatio) / 4, 0, 225, {
      restitution: 0.5,
      friction: 0.2,
      render: {
        sprite: {
          texture: eyeball,
        },
      },
    });

    const ball = Bodies.circle((window.innerWidth * pixelRatio) / 4, 0, 225, {
      restitution: 1,
      friction: 0.1,
      render: {
        sprite: {
          texture: basketball,
        },
      },
    });

    const capsule = Bodies.circle(
      (window.innerWidth * pixelRatio) / 4,
      0,
      225,
      {
        render: {
          sprite: {
            texture: capsuleball,
          },
        },
      }
    );

    const circles = [eye, ball, capsule];
    Composite.add(engine.world, [circles[Math.floor(Math.random() * 3)]]);
  };

  //matter.js
  useEffect(() => {
    setMenuHidden(false);
    setIsMenu(false);
    const canvas = canvasRef.current;

    // Renderer
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        background: "transparent",
        wireframes: false,
        height: (window.innerHeight - 51) * pixelRatio,
        width: (window.innerWidth - 452) * pixelRatio,
      },
    });

    // Default Items
    const eye = Bodies.circle((window.innerWidth * pixelRatio) / 4, 0, 225, {
      restitution: 0.5,
      friction: 0.2,
      render: {
        sprite: {
          texture: eyeball,
        },
      },
    });

    const ball = Bodies.circle((window.innerWidth * pixelRatio) / 3, 0, 225, {
      restitution: 1,
      friction: 0.1,
      render: {
        sprite: {
          texture: basketball,
        },
      },
    });

    const capsule = Bodies.circle(
      (window.innerWidth * pixelRatio) / 4,
      0,
      225,
      {
        render: {
          sprite: {
            texture: capsuleball,
          },
        },
      }
    );
    console.log(capsule);

    const leftWall = Bodies.rectangle(
      -15,
      0,
      30,
      (window.innerHeight - 51) * pixelRatio * 2,
      {
        isStatic: true,
      }
    );

    const rightWall = Bodies.rectangle(
      (window.innerWidth - 452) * pixelRatio + 15,
      0,
      30,
      (window.innerHeight - 51) * pixelRatio * 2,
      {
        isStatic: true,
      }
    );

    const ground = Bodies.rectangle(
      0,
      30 + (window.innerHeight - 51) * pixelRatio,
      window.innerWidth * pixelRatio * 2,
      60,
      {
        isStatic: true,
      }
    );

    const popup = Bodies.rectangle(
      (window.innerWidth * pixelRatio) / 4,
      0,
      450 * 2,
      330 * 2,
      {
        render: {
          sprite: {
            texture: popupimg,
          },
        },
        chamfer: { radius: 15 },
      }
    );

    const popup2 = {
      w: 431.5,
      h: 314.25,
      body: Bodies.rectangle(
        (window.innerWidth * pixelRatio) / 4,
        0,
        431.5,
        314.25
      ),
      elem: document.querySelector(".pop-up"),
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };

    // MouseConstraint
    let mouse = Mouse.create(render.canvas);
    let mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    render.mouse = mouse;

    //클릭 이벤트
    Events.on(mouseConstraint, "mousedown", (e) => {
      console.log(e.source.mouse.position.x, e.source.mouse.position.y);
      let mouseX = e.source.mouse.position.x;
      let mouseY = e.source.mouse.position.y;

      let popupXMax = popup.bounds.max.x;
      let popupXMin = popup.bounds.min.x;
      let popupYMax = popup.bounds.max.y;
      let popupYMin = popup.bounds.min.y;

      console.log(popupXMax, popupXMin, popupYMax, popupYMin);

      if (
        mouseX <= popupXMax &&
        mouseX >= popupXMin &&
        mouseY <= popupYMax &&
        mouseY >= popupYMin
      ) {
        setIsMenu(true);
        Composite.remove(engine.world, [ground]);
        setIsUiUpdated(true);
        canvasRef.current.style.cursor = "pointer";
        setTimeout(() => {
          holderRef.current.style.top = 0;
          transitionRef.current.style.left = "0%";
          //containerRef.current.style.backgroundColor = colors.pink;
          console.log(isMenu);
        }, 50);
        setTimeout(() => {
          goToPage();
        }, 3000);
      }
    });

    //마우스 포인터
    Events.on(mouseConstraint, "mousemove", (e) => {
      let mouseX = e.source.mouse.position.x;
      let mouseY = e.source.mouse.position.y;

      let popupXMax = popup.bounds.max.x;
      let popupXMin = popup.bounds.min.x;
      let popupYMax = popup.bounds.max.y;
      let popupYMin = popup.bounds.min.y;

      if (
        mouseX <= popupXMax &&
        mouseX >= popupXMin &&
        mouseY <= popupYMax &&
        mouseY >= popupYMin
      ) {
        canvasRef.current.style.cursor = "pointer";
      } else {
        canvasRef.current.style.cursor = "default";
      }
    });

    // add bodies to the world
    Composite.add(engine.world, [
      eye,
      capsule,
      ball,
      ground,
      leftWall,
      rightWall,
      popup,
      mouseConstraint,
    ]);

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    (function rerender() {
      Engine.update(engine);
      requestAnimationFrame(rerender);
    })();

    // unmount
    return () => {
      // destroy Matter
      Render.stop(render);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return (
    <div className="page-container">
      {isUiUpdated ? (
        <div className="ui-holder" ref={holderRef}>
          <Popup data-html-matter></Popup>
        </div>
      ) : (
        ""
      )}
      {isUiUpdated ? (
        <div
          className="transition-container"
          ref={transitionRef}
          style={{ backgroundColor: colors.blue }}
        >
          {" "}
        </div>
      ) : (
        ""
      )}
      <div
        className="canvas-container"
        ref={containerRef}
        style={{ backgroundColor: colors.blue }}
      >
        <TextBox item={["popup", "input", "button"]}></TextBox>
        <div className="handle-wall">
          <div className="handle-holder">
            <Handle
              className="handle"
              ref={handleRef}
              onClick={handleClick}
            ></Handle>
          </div>
          {/* <div className="bbopgi-exit">
          <EyeOrange className="eye-orange"></EyeOrange>
        </div> */}
        </div>
        <canvas className="bbopgi-canvas" ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default Bbopgi;
