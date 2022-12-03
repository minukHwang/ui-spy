import React from "react";
import "./TogglePage.scss";
import CloseBtn from "../../components/CloseBtn";
import Toggle from "../../components/uiitems/Toggle";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const TogglePage = ({ colors, setMenuHidden }) => {
  const toggleRef = useRef();
  const darkRef = useRef();
  const canvasRef = useRef();
  let isDark = true;
  const handleToggle = () => {
    if (isDark) {
      darkRef.current.style.display = "none";
      isDark = false;
    } else {
      darkRef.current.style.display = "block";
      isDark = true;
    }
  };

  useEffect(() => {
    // const canvas = canvasRef.current;
    toggleRef.current.childNodes[0].firstChild.onclick = handleToggle;
    setMenuHidden(true);
    //   const scene = new THREE.Scene();

    //   //Lights
    //   const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    //   scene.add(ambientLight);

    //   const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
    //   directionalLight.position.set(0.25, 3, -2.25);
    //   directionalLight.castShadow = true;
    //   directionalLight.shadow.camera.far = 15;
    //   directionalLight.shadow.mapSize.set(1024, 1024);
    //   directionalLight.shadow.normalBias = 0.05;
    //   scene.add(directionalLight);

    //   // Canvas size
    //   const sizes = {
    //     width: 600,
    //     height: 600,
    //   };
    //   // Camera
    //   const camera = new THREE.PerspectiveCamera(
    //     20,
    //     sizes.width / sizes.height,
    //     0.1,
    //     100
    //   );
    //   scene.add(camera);

    //   // Controls
    //   const controls = new OrbitControls(camera, canvas);
    //   controls.enableDamping = true;
    //   controls.enableZoom = false;

    //   // Renderer
    //   const renderer = new THREE.WebGLRenderer({
    //     canvas: canvas,
    //     alpha: true,
    //     antialias: true,
    //   });
    //   renderer.setSize(sizes.width, sizes.height);
    //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //   renderer.physicallyCorrectLights = true;
    //   renderer.outputEncoding = THREE.sRGBEncoding;
    //   renderer.toneMapping = THREE.ACESFilmicToneMapping;
    //   renderer.toneMappingExposure = 1.5;
    //   renderer.shadowMap.enabled = true;
    //   renderer.shadowMap.type = THREE.PCFShadowMap;

    //   // envMap
    //   const cubeTextureLoader = new THREE.CubeTextureLoader();
    //   const environmentMap = cubeTextureLoader.load(envMap);
    //   environmentMap.encoding = THREE.sRGBEncoding;

    //   const envMap = [
    //     "textures/environmentMaps/0/px.jpg",
    //     "textures/environmentMaps/0/nx.jpg",
    //     "textures/environmentMaps/0/py.jpg",
    //     "textures/environmentMaps/0/ny.jpg",
    //     "textures/environmentMaps/0/pz.jpg",
    //     "textures/environmentMaps/0/nz.jpg",
    //   ];

    //   const updateAllMaterials = () => {
    //     scene.traverse((child) => {
    //       if (
    //         child instanceof THREE.Mesh &&
    //         child.material instanceof THREE.MeshStandardMaterial
    //       ) {
    //         child.material.envMap = environmentMap;
    //         //child.material.envMapIntensity = debugObject.envMapIntensity;
    //         child.castShadow = true;
    //         child.receiveShadow = true;
    //       }
    //     });
    //   };

    //   // Fit in to Canvas
    // const zoomFit = (object3D, camera, viewMode, bFront) => {
    //   const box = new THREE.Box3().setFromObject(object3D);
    //   const sizeBox = box.getSize(new THREE.Vector3()).length();
    //   const centerBox = box.getCenter(new THREE.Vector3());
    //   let offsetX = 0,
    //     offsetY = 0,
    //     offsetZ = 0;
    //   viewMode === "X"
    //     ? (offsetX = 1)
    //     : viewMode === "Y"
    //     ? (offsetY = 1)
    //     : (offsetZ = 1);
    //   if (!bFront) {
    //     offsetX *= -1;
    //     offsetY *= -1;
    //     offsetZ *= -1;
    //   }
    //   camera.position.set(
    //     centerBox.x + offsetX,
    //     centerBox.y + offsetY,
    //     centerBox.z + offsetZ
    //   );
    //   const halfSizeModel = sizeBox * 0.5;
    //   const halfFov = THREE.Math.degToRad(camera.fov * 0.5);
    //   const distance = halfSizeModel / Math.tan(halfFov);
    //   const direction = new THREE.Vector3()
    //     .subVectors(camera.position, centerBox)
    //     .normalize();
    //   const position = direction.multiplyScalar(distance).add(centerBox);
    //   camera.position.copy(position);
    //   camera.near = sizeBox / 100;
    //   camera.far = sizeBox * 100;
    //   camera.updateProjectionMatrix();
    //   camera.lookAt(centerBox.x, centerBox.y, centerBox.z);
    //   controls.target.set(centerBox.x, centerBox.y, centerBox.z);
    // };

    // // Importing model
    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath("/draco/");

    // const gltfLoader = new GLTFLoader();
    // gltfLoader.setDRACOLoader(dracoLoader);

    // let model;

    // gltfLoader.load(item, (gltf) => {
    //   model = gltf.scene;
    //   scene.add(model);
    //   zoomFit(model, camera, direction, true);

    //   updateAllMaterials();
    // });
  }, []);
  return (
    <div
      className="contents-container"
      style={{ backgroundColor: colors.green }}
    >
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="200"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
      ></iframe>
      <canvas ref={canvasRef} className="toggle-canvas"></canvas>
      <Toggle ref={toggleRef} colors={colors}></Toggle>
      <CloseBtn
        linkTo="sticker"
        color={colors.green}
        hoverColor={colors.orange}
      ></CloseBtn>
      <div
        className="dark-room contents-container"
        style={{ backgroundColor: "#000000" }}
        ref={darkRef}
      ></div>
    </div>
  );
};

export default TogglePage;
