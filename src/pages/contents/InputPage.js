import React, { useEffect, useState } from "react";
import "./InputPage.scss";
import CloseBtn from "../../components/CloseBtn";
import Input from "../../components/uiitems/Input";
import { useRef } from "react";
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
import Matter from "matter-js";

const InputPage = ({ colors, setMenuHidden }) => {
  const textRefs = useRef([]);
  textRefs.current = [];
  const addToRefs = (el) => {
    el && textRefs.current.push(el);
  };

  const inputRef = useRef();
  const canvasRef = useRef();

  const [textInput, setTextInput] = useState([]);

  const pixelRatio = window.devicePixelRatio;
  const engine = Engine.create();

  useEffect(() => {
    let textRef =
      textRefs.current[textRefs.current.length - 1] &&
      textRefs.current[textRefs.current.length - 1];
    let widthRef =
      textRefs.current[textRefs.current.length - 1] &&
      textRefs.current[textRefs.current.length - 1].offsetWidth;

    console.log(widthRef);
    console.log(textRef);

    const textBall = {
      r: widthRef,
      body: Bodies.circle((window.innerWidth * pixelRatio) / 3, 0, 225, {
        restitution: 1,
        friction: 0.1,
      }),
      elem: textRef,
      // render() {
      //   const x = this.body.position.x / pixelRatio;
      //   const y = this.body.position.y / pixelRatio;
      //   this.elem.style.top = `${y - this.r / 2}px`;
      //   this.elem.style.left = `${x - this.r / 2}px`;
      //   this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      // },
    };

    Composite.add(engine.world, [textBall.body]);
    (function rerender() {
      Engine.update(engine);
      requestAnimationFrame(rerender);
    })();
  }, [textInput]);

  useEffect(() => {
    setMenuHidden(true);
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

    const ground = Bodies.rectangle(
      0,
      30 + window.innerHeight * pixelRatio,
      window.innerWidth * pixelRatio * 2,
      60,
      {
        isStatic: true,
      }
    );

    const input = {
      w: 364.5,
      h: 58.5,
      body: Bodies.rectangle(
        (window.innerWidth * pixelRatio) / 2,
        (window.innerHeight * pixelRatio) / 2,
        364.5 * pixelRatio,
        58.5 * pixelRatio,

        {
          isStatic: true,
          render: { fillStyle: "transparent" },
          chamfer: { radius: 100 },
        }
      ),
      elem: inputRef.current,
      render() {
        const x = this.body.position.x / pixelRatio;
        const y = this.body.position.y / pixelRatio;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };

    const ball = Bodies.circle((window.innerWidth * pixelRatio) / 4, 0, 225, {
      restitution: 1,
      friction: 0.1,
    });

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

    // add bodies to the world
    Composite.add(engine.world, [
      ground,
      leftWall,
      rightWall,
      ball,
      input.body,
      mouseConstraint,
    ]);

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    (function rerender() {
      input.render();
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
    <div
      className="contents-container"
      style={{ backgroundColor: colors.orange }}
    >
      <Input
        ref={inputRef}
        textInput={textInput}
        setTextInput={setTextInput}
      ></Input>
      <CloseBtn
        linkTo="bbopgi"
        color={colors.yellow}
        hoverColor={colors.blue}
      ></CloseBtn>
      <canvas ref={canvasRef}></canvas>
      {textInput &&
        textInput.map((item, index) => (
          <div ref={(el) => addToRefs(el)} className="text-box" key={index}>
            {item}
          </div>
        ))}
    </div>
  );
};

export default InputPage;
