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
  console.log(textRefs);

  const inputRef = useRef();
  const canvasRef = useRef();

  const [textInput, setTextInput] = useState([]);

  let pixelRatio = window.devicePixelRatio;
  if (window.devicePixelRatio > 1) {
    pixelRatio = 2;
  }
  console.log(pixelRatio);
  const engine = Engine.create();
  const colorSet = [
    colors.pink,
    colors.blue,
    colors.green,
    colors.yellow,
    colors.red,
  ];

  const handleBall = (e) => {
    setTimeout(() => {
      if (e.key === "Enter") {
        let textRef =
          textRefs.current[textRefs.current.length - 1] &&
          textRefs.current[textRefs.current.length - 1];
        let widthRef =
          textRefs.current[textRefs.current.length - 1] &&
          textRefs.current[textRefs.current.length - 1].offsetWidth;

        console.log(widthRef);
        console.log(textRef);

        textRef.style.width = `${widthRef + 50}px`;
        textRef.style.height = `${widthRef + 50}px`;
        textRef.style.backgroundColor = colorSet[Math.floor(Math.random() * 5)];

        console.log(textRef.style.height);

        const textBall = {
          r: widthRef + 50,
          body: Bodies.circle(
            (window.innerWidth * pixelRatio) / 2,
            0,
            (widthRef + 50) / (2 / pixelRatio),
            {
              restitution: 0.75,
              friction: 0.1,
              render: {
                fillStyle: "transparent",
                // lineWidth: 1,
                // strokeStyle: "black",
              },
            }
          ),
          elem: textRef,
          render() {
            const x = this.body.position.x / pixelRatio;
            const y = this.body.position.y / pixelRatio;
            this.elem.style.top = `${y - this.r / 2}px`;
            this.elem.style.left = `${x - this.r / 2}px`;
            this.elem.style.transform = `rotate(${this.body.angle}rad)`;
          },
        };

        Composite.add(engine.world, [textBall.body]);
        (function rerender() {
          textBall.render();
          //input.render();
          Engine.update(engine);
          requestAnimationFrame(rerender);
        })();
      }
    }, 50);
  };
  //.onkeypress = handleClick;

  useEffect(() => {
    alert("인풋 요소에 타이핑을 해보세요!");
    inputRef.current.firstChild.onkeypress = (e) => handleBall(e);
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
    engine.world.gravity.y = 1;
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

    let widthRef = inputRef.current && inputRef.current.offsetWidth;
    let HeightRef = inputRef.current && inputRef.current.offsetHeight;
    console.log(widthRef);
    const input = {
      w: widthRef,
      h: HeightRef,
      body: Bodies.rectangle(
        (window.innerWidth * pixelRatio) / 2,
        (window.innerHeight * pixelRatio) / 2,
        widthRef * pixelRatio,
        HeightRef * pixelRatio,

        {
          isStatic: true,
          render: {
            fillStyle: "transparent",
            // lineWidth: 1,
            // strokeStyle: "black",
          },
          chamfer: { radius: (HeightRef * pixelRatio) / 2 },
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
      //ball,
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
      <canvas className="input-canvas" ref={canvasRef}></canvas>
      {textInput &&
        textInput.map((item, index) => (
          <div key={index} className="circle-container">
            <div ref={(el) => addToRefs(el)} className="text-box" key={index}>
              {item}
            </div>
          </div>
        ))}
    </div>
  );
};

export default InputPage;
