import React, { useEffect } from "react";
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

const InputPage = ({ colors }) => {
  const inputRef = useRef();
  const canvasRef = useRef();

  const pixelRatio = window.devicePixelRatio;
  const engine = Engine.create();

  useEffect(() => {
    const canvas = canvasRef.current;

    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        background: "red",
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
      w: inputRef.current.style.width,
      h: inputRef.current.style.height,
      body: Bodies.rectangle(
        (window.innerWidth * pixelRatio) / 4,
        0,
        inputRef.current.style.width,
        inputRef.current.style.height
      ),
      elem: inputRef.current,
      render() {
        const { x, y } = this.body.position;
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
      input.body,
      mouseConstraint,
    ]);

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

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
  console.log(inputRef.current);

  return (
    <div
      className="contents-container"
      style={{ backgroundColor: colors.orange }}
    >
      <Input ref={inputRef}></Input>
      <CloseBtn
        linkTo="bbopgi"
        color={colors.yellow}
        hoverColor={colors.blue}
      ></CloseBtn>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default InputPage;
