import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Threed = () => {
  function Scene() {
    const gltf = useLoader(GLTFLoader, '/abstract_shape_gltf/scene.gltf');
    const modelRef = useRef(null);

    useEffect(() => {
      gsap.to(modelRef.current.rotation, {
        y: '+=6.28',
        x: '+=4.71',
        duration: 20,
        repeat: -1,
        ease: 'linear',
      });

      gsap.fromTo(
        modelRef.current.scale,
        { x: 1.4, y: 1.4, z: 1.4 },
        {
          x: 1, y: 1, z: 1,
          scrollTrigger: {
            trigger: '.canvas-container',
            start: 'top center',
            end: 'bottom+=100% top',
            scrub: 1,
            ease: 'power2.out',
          },
        }
      );
    }, [gltf.scene]);

    return (
      <group scale={[1, 1, 1]} position={[0, 0, 0]}>
        <primitive ref={modelRef} object={gltf.scene} />
      </group>
    );
  }

  return (
    <div className="canvas-container">
      <Canvas className="w-full h-screen" camera={{ position: [0, 1, 5], fov: 40 }}>
        <ambientLight intensity={0.8} color="#ffffff" />
        <directionalLight intensity={2.5} position={[5, 5, 5]} color="#ffffff" />
        <directionalLight intensity={1.5} position={[-5, 5, 5]} color="#ffffff" />

        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Threed;