"use client";

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { Suspense } from "react";

useGLTF.preload("/models/cute_robot.glb");

const Model = () => {
  const { scene } = useGLTF("/models/cute_robot.glb");

  return (
    <group dispose={null} position={[0, -3, 0]}>
      <primitive object={scene} />
    </group>
  );
};

const RobotScene = () => {
  return (
    <div className=" bg-transparent  w-full flex justify-center items-center h-screen z-20 ">
      <Canvas
        className="h-full w-full  "
        shadows={true}
        flat
        linear
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          reverseOrbit
          autoRotate
          maxPolarAngle={degreesToRadians(100)}
          minPolarAngle={degreesToRadians(40)}
          enableZoom={false}
          enablePan={false}
          enableDamping={false}
        />
        <PerspectiveCamera makeDefault position={[0, 5, 26]} />

        <Environment preset="city" />
        <EffectComposer>
          <N8AO aoSamples={16} distanceFalloff={1} denoiseSamples={8} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

export default RobotScene;
