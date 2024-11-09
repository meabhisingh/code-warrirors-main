"use client";

import {
  Environment,
  FirstPersonControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  N8AO,
} from "@react-three/postprocessing";
import { Suspense, useEffect, useRef } from "react";
import { Group, PerspectiveCamera as PerspectiveCameraType } from "three";

useGLTF.preload("/neon.glb");

function Model() {
  const group = useRef<Group>(null!);

  const { scene } = useGLTF("/neon.glb");

  return (
    <group
      rotation={[degreesToRadians(30), degreesToRadians(-120), 0]}
      ref={group}
      dispose={null}
    >
      <primitive object={scene} />
    </group>
  );
}

const SceneComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cameraRef = useRef<PerspectiveCameraType>(null);
  // const animationRunningRef = useRef<number | null>(null);

  // useEffect(() => {
  //   let lastMouseX = 0;
  //   let lastMouseY = 0;
  //   let targetRotationX = 0;
  //   let targetRotationY = 0;

  //   const handleMouseMove = (e: MouseEvent) => {
  //     // ... (calculate mouseX, mouseY, rotationX, rotationY as before)

  //     // Calculate normalized mouse coordinates (-1 to 1)
  //     const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  //     const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

  //     // Calculate the difference in mouse position
  //     const deltaX = mouseX - lastMouseX;
  //     const deltaY = mouseY - lastMouseY;

  //     const rotationY = deltaX * Math.PI;
  //     const rotationX = (deltaY * Math.PI) / 4;

  //     // Update last mouse position
  //     lastMouseX = mouseX;
  //     lastMouseY = mouseY;

  //     // Update target rotations
  //     targetRotationX = rotationX;
  //     targetRotationY = rotationY;

  //     // Start or reset the animation
  //     if (animationRunningRef.current) {
  //       cancelAnimationFrame(animationRunningRef.current);
  //     }
  //     animationRunningRef.current = requestAnimationFrame(animate);
  //   };

  //   const animate = () => {
  //     const camera = cameraRef.current;
  //     if (camera) {
  //       // Calculate the change in rotation (delta)
  //       const deltaX = targetRotationX - camera.rotation.x;
  //       const deltaY = targetRotationY - camera.rotation.y;

  //       // Apply a fraction of the delta to the camera's rotation
  //       camera.rotation.x += deltaX * 0.05; // Adjust the smoothing factor (0.1)
  //       camera.rotation.y += deltaY * 0.05;

  //       // Continue animation if not reached target
  //       if (
  //         Math.abs(targetRotationX - camera.rotation.x) > 0.01 ||
  //         Math.abs(targetRotationY - camera.rotation.y) > 0.01
  //       ) {
  //         animationRunningRef.current = requestAnimationFrame(animate);
  //       } else {
  //         animationRunningRef.current = null; // Stop animation when target is reached
  //       }
  //     }
  //   };

  //   const canvas = canvasRef.current;

  //   if (canvas) canvas.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     if (canvas) canvas.removeEventListener("mousemove", handleMouseMove);
  //   };

  //   // ... (add and remove event listener as before)
  // }, []);

  // Simple without Delay

  useEffect(() => {
    const eventHandler = (e: globalThis.MouseEvent) => {
      const camera = cameraRef.current;

      if (!camera) return;

      // Calculate normalized mouse coordinates (-1 to 1)
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      // Update the look direction using the normalized coordinates
      // control.lookAt(mouseX * 10, mouseY * 10, 0); // Adjust the multiplier (10) as needed
      camera.rotation.set(-mouseY / 10, -mouseX / 10, 0);
      camera.position.set(0, 0, -(mouseX * 10) - mouseY * 10 + 145);
      camera.updateProjectionMatrix();
    };

    const canvas = canvasRef.current;

    if (canvas) canvas.addEventListener("mousemove", eventHandler);
    return () => {
      if (canvas) canvas.removeEventListener("mousemove", eventHandler);
    };
  }, []);

  return (
    <div className="  w-full flex justify-center items-center h-screen absolute">
      <Canvas
        ref={canvasRef}
        className="h-full w-full bg-black "
        shadows={true}
        flat
        linear
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 150],
          fov: 50,
          rotation: [0, 0, 0],
        }}
      >
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <pointLight
          color={"cyan"}
          position={[5, 1, 20]}
          rotation={[
            degreesToRadians(-30),
            degreesToRadians(30),
            degreesToRadians(20),
          ]}
          intensity={150}
        />

        <pointLight
          color={"purple"}
          position={[-11, -10, 40]}
          rotation={[
            degreesToRadians(0),
            degreesToRadians(20),
            degreesToRadians(240),
          ]}
          intensity={330}
        />

        <rectAreaLight
          color={"purple"}
          position={[40, -10, 65]}
          rotation={[
            degreesToRadians(0),
            degreesToRadians(-50),
            degreesToRadians(0),
          ]}
          intensity={100}
          width={80}
          height={0.5}
        />

        <ambientLight intensity={-0.75} />
        <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 150]} />

        {/* <OrbitControls
          minAzimuthAngle={degreesToRadians(-20)}
          maxAzimuthAngle={degreesToRadians(50)}
          minPolarAngle={degreesToRadians(50)}
          maxPolarAngle={degreesToRadians(100)}
          reverseVerticalOrbit={true}
          ref={controlsRef}
          autoRotate={true}
        /> */}

        <FirstPersonControls autoForward activeLook={false} />

        <Environment preset="night" />
        <EffectComposer>
          <Bloom
            height={1300}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
          />
          <N8AO aoSamples={16} distanceFalloff={1} denoiseSamples={8} />
          {/* <Noise opacity={0.5} /> */}
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={4} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

export default SceneComponent;
