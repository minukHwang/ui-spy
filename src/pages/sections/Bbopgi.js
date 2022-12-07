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
import eyeball2 from "../../static/img/eye2.png";
import basketball from "../../static/img/basketball.png";
import capsuleball from "../../static/img/capsuleball.png";
import capsuleball2 from "../../static/img/capsuleball2.png";
import popupimg from "../../static/img/popup.png";
import inputimg from "../../static/img/input.png";
import buttonimg from "../../static/img/button.png";
import Popup from "../../components/uiitems/Popup";
import Input from "../../components/uiitems/Input";
import Button from "../../components/uiitems/Button";
import TextBox from "../../components/TextBox";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Handle } from "../../static/svg/handle.svg";
import { ReactComponent as EyeOrange } from "../../static/svg/eye-orange.svg";

const Bbopgi = ({ colors, isMenu, setIsMenu, setMenuHidden, setMenu }) => {
  const canvasRef = useRef(null);
  const handleRef = useRef();
  const holderRef = useRef();
  const holderRef2 = useRef();
  const holderRef3 = useRef();
  const containerRef = useRef();
  const transitionRef = useRef();

  const navigate = useNavigate();
  const goToPage = (link) => {
    navigate(`/bbopgi/${link}`);
  };

  let handleDeg = 0;
  let pixelRatio = window.devicePixelRatio;
  if (window.devicePixelRatio > 1) {
    pixelRatio = 2;
  }
  const engine = Engine.create();
  const [isUiUpdated, setIsUiUpdated] = useState(false);
  const [isLink, setIsLink] = useState("");
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

    const eye2 = Bodies.circle((window.innerWidth * pixelRatio) / 4, 0, 225, {
      restitution: 0.5,
      friction: 0.2,
      render: {
        sprite: {
          texture: eyeball2,
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

    const capsule2 = Bodies.circle(
      (window.innerWidth * pixelRatio) / 4,
      0,
      225,
      {
        render: {
          sprite: {
            texture: capsuleball2,
          },
        },
      }
    );

    const circles = [eye, ball, capsule, eye2, capsule2];
    Composite.add(engine.world, [circles[Math.floor(Math.random() * 5)]]);
  };

  //matter.js
  useEffect(() => {
    handleRef.current.onclick = (e) => handleClick(e);
    setMenuHidden(false);
    setIsMenu(false);
    setMenu(false);
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

    const eye2 = Bodies.circle((window.innerWidth * pixelRatio) / 4, 0, 225, {
      restitution: 0.5,
      friction: 0.2,
      render: {
        sprite: {
          texture: eyeball2,
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

    const ball2 = Bodies.circle((window.innerWidth * pixelRatio) / 3, 0, 225, {
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

    const capsule2 = Bodies.circle(
      (window.innerWidth * pixelRatio) / 4,
      0,
      225,
      {
        render: {
          sprite: {
            texture: capsuleball2,
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
      432 * 2,
      310 * 2,
      {
        render: {
          sprite: {
            texture: popupimg,
          },
        },
        chamfer: { radius: 15 },
      }
    );

    const input = Bodies.rectangle(
      (window.innerWidth * pixelRatio) / 4,
      0,
      556 * 2,
      73 * 2,
      {
        render: {
          sprite: {
            texture: inputimg,
          },
        },
        chamfer: { radius: 73 / 2 },
      }
    );

    const button = Bodies.rectangle(
      (window.innerWidth * pixelRatio) / 4,
      0,
      516 * 2,
      68 * 2,
      {
        render: {
          sprite: {
            texture: buttonimg,
          },
        },
        chamfer: { radius: 10 },
      }
    );

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
        setIsLink("popup");
        canvasRef.current.style.cursor = "pointer";
        setTimeout(() => {
          holderRef.current.style.top = 0;
          transitionRef.current.style.left = "0%";
          //containerRef.current.style.backgroundColor = colors.pink;
          console.log(isMenu);
        }, 50);
        setTimeout(() => {
          goToPage("popup");
        }, 3000);
      }
    });

    Events.on(mouseConstraint, "mousedown", (e) => {
      console.log(e.source.mouse.position.x, e.source.mouse.position.y);
      let mouseX = e.source.mouse.position.x;
      let mouseY = e.source.mouse.position.y;

      let inputXMax = input.bounds.max.x;
      let inputXMin = input.bounds.min.x;
      let inputYMax = input.bounds.max.y;
      let inputYMin = input.bounds.min.y;

      console.log(inputXMax, inputXMin, inputYMax, inputYMin);

      if (
        mouseX <= inputXMax &&
        mouseX >= inputXMin &&
        mouseY <= inputYMax &&
        mouseY >= inputYMin
      ) {
        setIsMenu(true);
        Composite.remove(engine.world, [ground]);
        setIsUiUpdated(true);
        setIsLink("input");
        canvasRef.current.style.cursor = "pointer";
        setTimeout(() => {
          holderRef2.current.style.top = 0;
          transitionRef.current.style.left = "0%";
          //containerRef.current.style.backgroundColor = colors.pink;
          console.log(isMenu);
        }, 50);
        setTimeout(() => {
          goToPage("input");
        }, 3000);
      }
    });

    Events.on(mouseConstraint, "mousedown", (e) => {
      console.log(e.source.mouse.position.x, e.source.mouse.position.y);
      let mouseX = e.source.mouse.position.x;
      let mouseY = e.source.mouse.position.y;

      let buttonXMax = button.bounds.max.x;
      let buttonXMin = button.bounds.min.x;
      let buttonYMax = button.bounds.max.y;
      let buttonYMin = button.bounds.min.y;

      if (
        mouseX <= buttonXMax &&
        mouseX >= buttonXMin &&
        mouseY <= buttonYMax &&
        mouseY >= buttonYMin
      ) {
        setIsMenu(true);
        Composite.remove(engine.world, [ground]);
        setIsUiUpdated(true);
        setIsLink("button");
        canvasRef.current.style.cursor = "pointer";
        setTimeout(() => {
          holderRef3.current.style.top = 0;
          transitionRef.current.style.left = "0%";
          //containerRef.current.style.backgroundColor = colors.pink;
          console.log(isMenu);
        }, 50);
        setTimeout(() => {
          goToPage("button");
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

      let inputXMax = input.bounds.max.x;
      let inputXMin = input.bounds.min.x;
      let inputYMax = input.bounds.max.y;
      let inputYMin = input.bounds.min.y;

      let buttonXMax = button.bounds.max.x;
      let buttonXMin = button.bounds.min.x;
      let buttonYMax = button.bounds.max.y;
      let buttonYMin = button.bounds.min.y;

      if (
        (mouseX <= popupXMax &&
          mouseX >= popupXMin &&
          mouseY <= popupYMax &&
          mouseY >= popupYMin) ||
        (mouseX <= inputXMax &&
          mouseX >= inputXMin &&
          mouseY <= inputYMax &&
          mouseY >= inputYMin) ||
        (mouseX <= buttonXMax &&
          mouseX >= buttonXMin &&
          mouseY <= buttonYMax &&
          mouseY >= buttonYMin)
      ) {
        canvasRef.current.style.cursor = "pointer";
      } else {
        canvasRef.current.style.cursor = "default";
      }
    });

    // add bodies to the world
    Composite.add(engine.world, [
      eye,
      eye2,
      capsule,
      capsule2,
      ball,
      ground,
      leftWall,
      rightWall,
      popup,
      input,
      //button,
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
      {isUiUpdated && isLink === "popup" ? (
        <div className="ui-holder" ref={holderRef}>
          <Popup></Popup>
        </div>
      ) : (
        ""
      )}
      {isUiUpdated && isLink === "popup" ? (
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

      {isUiUpdated && isLink === "input" ? (
        <div className="ui-holder" ref={holderRef2}>
          <Input></Input>
        </div>
      ) : (
        ""
      )}
      {isUiUpdated && isLink === "input" ? (
        <div
          className="transition-container"
          ref={transitionRef}
          style={{ backgroundColor: colors.orange }}
        >
          {" "}
        </div>
      ) : (
        ""
      )}

      {isUiUpdated && isLink === "button" ? (
        <div className="ui-holder" ref={holderRef3}>
          <Button></Button>
        </div>
      ) : (
        ""
      )}
      {isUiUpdated && isLink === "button" ? (
        <div
          className="transition-container"
          ref={transitionRef}
          style={{ backgroundColor: colors.yellow }}
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
        <TextBox item={["popup", "input"]}></TextBox>
        <div className="handle-wall">
          <div className="handle-holder">
            <Handle className="handle" ref={handleRef}></Handle>
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
