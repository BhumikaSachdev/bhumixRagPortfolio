"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
} from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

/* ================= MAIN ORB ================= */

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;

    meshRef.current.rotation.x = time * 0.12;
    meshRef.current.rotation.y = time * 0.18;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1.5}
    >
      <Sphere
        ref={meshRef}
        args={[1.45, 64, 64]}
        scale={1.15}
      >
        <MeshDistortMaterial
          color="#c85c86"
          roughness={0.18}
          metalness={0.65}
          distort={0.25}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}


/* ================= INTERACTIVE PARTICLES ================= */

function DataParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const particleCount = 500;

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.5 + Math.random() * 0.9;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      arr[i * 3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      arr[i * 3 + 1] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      arr[i * 3 + 2] =
        radius *
        Math.cos(phi);
    }

    return arr;
  }, []);

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,

      uniforms: {
        uMouse: {
          value: new THREE.Vector2(10, 10),
        },
      },

      vertexShader: `
        uniform vec2 uMouse;

        varying float vGlow;

        void main() {

          vec4 mvPosition =
            modelViewMatrix *
            vec4(position, 1.0);

          vec4 clipPosition =
            projectionMatrix *
            mvPosition;

          /*
           * Convert particle position
           * into normalized screen coordinates.
           */
          vec2 particleScreenPosition =
            clipPosition.xy /
            clipPosition.w;

          /*
           * Compare particle position
           * with global cursor position.
           */
          float distanceToMouse =
            distance(
              particleScreenPosition,
              uMouse
            );

          /*
           * Glow radius.
           */
          float glow =
            1.0 -
            smoothstep(
              0.0,
              0.22,
              distanceToMouse
            );

          vGlow = glow;

          /*
           * Normal particle size.
           */
          float particleSize = 2.5;

          /*
           * Make particles near cursor
           * much larger.
           */
          particleSize += glow * 9.0;

          gl_PointSize =
            particleSize;

          gl_Position =
            clipPosition;
        }
      `,

      fragmentShader: `
        varying float vGlow;

        void main() {

          vec2 uv =
            gl_PointCoord -
            vec2(0.5);

          float distanceFromCenter =
            length(uv);

          float particle =
            1.0 -
            smoothstep(
              0.15,
              0.5,
              distanceFromCenter
            );

          if (particle < 0.01) discard;

          /*
           * Normal pink.
           */
          vec3 normalColor =
            vec3(
              1.0,
              0.32,
              0.58
            );

          /*
           * Bright pink/white.
           */
          vec3 glowColor =
            vec3(
              1.0,
              0.85,
              0.93
            );

          vec3 color =
            mix(
              normalColor,
              glowColor,
              vGlow
            );

          float brightness =
            0.7 +
            vGlow * 3.0;

          float alpha =
            particle *
            (
              0.7 +
              vGlow * 0.3
            );

          gl_FragColor =
            vec4(
              color * brightness,
              alpha
            );
        }
      `,
    });
  }, []);

  /*
   * Listen to the mouse on the ENTIRE browser window.
   *
   * This means the particle interaction works even
   * when the cursor is over the hero text.
   */
  useEffect(() => {
    const handleMouseMove = (
      event: MouseEvent
    ) => {

      if (!canvasRef.current) return;

      const rect =
        canvasRef.current.getBoundingClientRect();

      /*
       * Convert browser coordinates into
       * normalized coordinates relative
       * to the Canvas.
       *
       * -1 = left
       * +1 = right
       *
       * +1 = top
       * -1 = bottom
       */
      const x =
        ((event.clientX - rect.left) /
          rect.width) *
          2 -
        1;

      const y =
        -(
          ((event.clientY - rect.top) /
            rect.height) *
            2 -
          1
        );

      shaderMaterial.uniforms.uMouse.value.set(
        x,
        y
      );
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [shaderMaterial]);

  /*
   * Get the actual Canvas element.
   */
  useFrame((state) => {
    if (!canvasRef.current) {
      canvasRef.current =
        state.gl.domElement;
    }
  });

  return (
    <points
      ref={pointsRef}
      material={shaderMaterial}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
    </points>
  );
}

/* ================= SCENE ================= */

function Scene() {
  return (
    <>
      <Orb />
      <DataParticles />
    </>
  );
}


/* ================= CANVAS ================= */

export default function HeroOrb() {
  return (
    <div className="h-[500px] w-[500px]">

      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
      >

        <ambientLight intensity={1.2} />

        <pointLight
          position={[3, 3, 4]}
          intensity={25}
          color="#ffd6e5"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={15}
          color="#9b4268"
        />

        <Scene />

      </Canvas>

    </div>
  );
}