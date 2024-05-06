import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";
import { MeshStandardMaterial } from "three";

const Floor = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -70, 0]}>
    <planeGeometry args={[400, 400]} />
    <meshStandardMaterial color="#9a8c7a" />
  </mesh>
);
const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/test.glb");

  return (
    <group>

      <mesh>
        <hemisphereLight intensity={2} groundColor="white"

        />


        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : .85}

          position={isMobile ? [0, -80, -5] : [0, -70, 0]}
          rotation={[0, Math.PI / 2, 0]}



        />

      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
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
    <>

      {isMobile ? (
        <Canvas
          style={{ height: "100vh", width: "100vw" }}
          frameloop="demand"
          shadows



          dpr={[1, 2]}
          camera={{ position: [100, 300, 200], fov: 50 }}

          gl={{ preserveDrawingBuffer: true }}

        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={true} // Enable zooming
              zoomSpeed={0.3} // Optional: Adjust zoom speed (default is 1.0)
              maxDistance={500} // Optional: Maximum distance for zooming out
              minDistance={10}

              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              autoRotate={true}
              autoRotateSpeed={1}

            />

            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      ) : (
          <Canvas
            style={{ height: "100vh", width: "100vw" }}
            frameloop="demand"
            shadows



            dpr={[1, 2]}
            camera={{ position: [100, 270, 200], fov: 50 }}

            gl={{ preserveDrawingBuffer: true }}

          >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                autoRotate={true}
                autoRotateSpeed={2}

                enableDamping={true}
                dampingFactor={0.1}
                rotateSpeed={0.5}
                maxDistance={600}



              />

              <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
          </Canvas>
        )}

    </>
  );
};

export default ComputersCanvas;
