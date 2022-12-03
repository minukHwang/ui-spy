import React, { useEffect } from "react";
import "./SnackbarPage.scss";
import CloseBtn from "../../components/CloseBtn";
import Snackbar from "../../components/uiitems/Snackbar";
import { ReactComponent as Snack } from "../../static/svg/shadow/snack.svg";
import { useRef, useState } from "react";
import chips from "../../static/img/snack.png";
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

const SnackbarPage = ({ colors, setMenuHidden }) => {
  let snackbarMove = false;

  const [isRain, setIsRain] = useState(false);

  const snackbarRef = useRef();
  const snackRef = useRef();

  const canvasRef = useRef();
  const pixelRatio = window.devicePixelRatio;
  const engine = Engine.create();

  const ground = Bodies.rectangle(
    0,
    30 + window.innerHeight * pixelRatio,
    window.innerWidth * pixelRatio * 2,
    60,
    {
      isStatic: true,
    }
  );

  const ground2 = Bodies.rectangle(
    0,
    30 + 272 + window.innerHeight,
    window.innerWidth * pixelRatio * 2,
    60,
    {
      isStatic: true,
      render: { fillStyle: "transparent" },
    }
  );

  useEffect(() => {
    setMenuHidden(true);
    console.log(snackbarRef);
    snackbarRef.current.lastChild.onclick = handleYes;
    const canvas = canvasRef.current;

    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        background: "transparent",
        wireframes: false,
        height: window.innerHeight * pixelRatio,
        width: window.innerWidth * pixelRatio,
      },
    });

    const leftWall = Bodies.rectangle(
      -15,
      0,
      30,
      window.innerHeight * pixelRatio * 2,
      {
        isStatic: true,
      }
    );

    const rightWall = Bodies.rectangle(
      window.innerWidth * pixelRatio + 15,
      0,
      30,
      window.innerHeight * pixelRatio * 2,
      {
        isStatic: true,
      }
    );

    const ball = Bodies.circle((window.innerWidth * pixelRatio) / 4, 0, 225, {
      restitution: 1,
      friction: 0.1,
    });

    const snack = {
      w: 191.67 * pixelRatio,
      h: 272 * pixelRatio,
      body: Bodies.rectangle(
        (window.innerWidth * pixelRatio) / 2,
        0,
        191.67 * pixelRatio,
        272 * pixelRatio,
        {
          restitution: 0.5,
          //friction: 0.1,
          render: { fillStyle: "transparent" },
        }
      ),
      elem: snackRef.current,
      render() {
        const x = this.body.position.x / pixelRatio;
        const y = this.body.position.y / pixelRatio;
        this.elem.style.top = `${y - this.h / 4}px`;
        this.elem.style.left = `${x - this.w / 4}px`;
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
    Body.setAngle(snack.body, 100);

    // add bodies to the world
    Composite.add(engine.world, [
      ground,
      leftWall,
      rightWall,
      snack.body,
      ground2,
      mouseConstraint,
    ]);

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    (function rerender() {
      snack.render();
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

  const handleYes = () => {
    console.log("yes");
    Composite.remove(engine.world, [ground2]);
    //setIsRain(true);
    let items = [];
    for (let i = 1; i <= 20; i++) {
      const snack1 = Bodies.rectangle(
        (window.innerWidth * pixelRatio) / (Math.random() * 20),
        Math.random() * -1000 - 1200,
        191.67 * pixelRatio,
        272 * pixelRatio,
        {
          restitution: 0.5,
          //friction: 0.1,
          render: {
            sprite: {
              texture: chips,
            },
          },
        }
      );
      items.push(snack1);
    }
    console.log(items);

    Composite.add(engine.world, items);
    snackbarRef.current.style.top = "110%";
    snackbarRef.current.style.transition = "1s";
    snackbarMove += 1;
    console.log(snackbarMove);
  };

  const handleClick = (e) => {
    snackbarMove = !snackbarMove;
    if (snackbarMove === true) {
      snackbarRef.current.style.top = "85%";
      snackbarRef.current.style.transition =
        "all 500ms cubic-bezier(.47, 1.64, .41, .8)";
    } else {
      snackbarRef.current.style.top = "110%";
      snackbarRef.current.style.transition = "1s";
    }
  };
  return (
    <div
      className="contents-container"
      style={{ backgroundColor: colors.yellow }}
    >
      <Snack ref={snackRef} className="snack" onClick={handleClick}></Snack>
      <Snackbar
        className="snackbar"
        contents="Want More Snacks?"
        button="Yes"
        ref={snackbarRef}
        setIsRain={setIsRain}
      ></Snackbar>
      {/* <div className="snackbar" ref={snackbarRef}>
        <div className="snackbar-title">Want More Snacks?</div>
        <div className="snackbar-btn" onClick={handleYes}>
          Yes
        </div>
      </div> */}
      <canvas className="snackbar-canvas" ref={canvasRef}></canvas>
      <CloseBtn
        linkTo="stationery"
        color={colors.orange}
        hoverColor={colors.pink}
      ></CloseBtn>
    </div>
  );
};

export default SnackbarPage;
