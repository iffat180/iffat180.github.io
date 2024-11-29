import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./robo/robo.gltf");
  const [mixer] = useState(() => new THREE.AnimationMixer(scene)); // Initialize mixer only once
  const [hovered, setHovered] = useState(false); // State to track hover
  const [dragging, setDragging] = useState(false); // State to toggle dragging
  const modelRef = useRef();

  useEffect(() => {
    if (animations && animations.length) {
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.setLoop(THREE.LoopRepeat); // Ensure the animation loops
        action.play();
      });
    }
    return () => mixer.stopAllAction(); // Clean up on unmount
  }, [animations, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta); // Update the animation mixer

    if (dragging && modelRef.current) {
      const { x, y } = state.mouse;
      modelRef.current.position.x = x * 5; // Adjust sensitivity for horizontal movement
      modelRef.current.position.y = -y * 5; // Adjust sensitivity for vertical movement
    }
  });

  // Apply shadow and material settings to the model
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
      // Change color on hover
      if (hovered) {
        child.material.color.set("orange");
      } else {
        child.material.color.set("white");
      }
    }
  });

  return (
    <mesh
      ref={modelRef}
      onPointerOver={() => setHovered(true)} // Highlight on hover
      onPointerOut={() => setHovered(false)} // Remove highlight
      onClick={() => setDragging(!dragging)} // Toggle dragging state
    >
      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={0.15} groundColor="gray" />

      <spotLight
        position={[5, 10, 5]}
        angle={0.3}
        penumbra={0.5}
        intensity={2}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.9 : 2.0} // Slightly larger
        position={[0, -2.5, 0]} // Centered vertically and horizontally
        rotation={[0, Math.PI - 0.8, 0]} // Ensure it's facing forward
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
